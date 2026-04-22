import { Client } from "@notionhq/client"
import { NextResponse } from "next/server"
import type { CreatePageParameters } from "@notionhq/client/build/src/api-endpoints"

/** Property names must match your Notion database exactly (case-sensitive). Override via env if needed. */
function propNames() {
  return {
    title: process.env.NOTION_PROP_TITLE || "Name",
    email: process.env.NOTION_PROP_EMAIL || "Email",
    linkedin: process.env.NOTION_PROP_LINKEDIN || "LinkedIn",
    budget: process.env.NOTION_PROP_BUDGET || "Budget",
    timeline: process.env.NOTION_PROP_TIMELINE || "Timeline",
    details: process.env.NOTION_PROP_DETAILS || "Details",
  }
}

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)
}

/** Notion accepts UUID with hyphens; paste from URL may omit them. */
function normalizeNotionDatabaseId(id: string): string {
  const hex = id.replace(/-/g, "").trim().toLowerCase()
  if (!/^[0-9a-f]{32}$/.test(hex)) return id.trim()
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`
}

export async function POST(request: Request) {
  const token = process.env.NOTION_TOKEN
  const databaseId = process.env.NOTION_CONTACT_DATABASE_ID
    ? normalizeNotionDatabaseId(process.env.NOTION_CONTACT_DATABASE_ID)
    : undefined

  if (!token || !databaseId) {
    return NextResponse.json(
      { error: "Notion is not configured. Set NOTION_TOKEN and NOTION_CONTACT_DATABASE_ID." },
      { status: 503 }
    )
  }

  let body: Record<string, unknown>
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  const name = String(body.name ?? "").trim()
  const email = String(body.email ?? "").trim().toLowerCase()
  const linkedin = String(body.linkedin ?? "").trim()
  const budget = String(body.budget ?? "").trim()
  const timeline = String(body.timeline ?? "").trim()
  const details = String(body.details ?? "").trim()

  if (!name || name.length > 200) {
    return NextResponse.json({ error: "Name is required (max 200 characters)." }, { status: 400 })
  }
  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "A valid email is required." }, { status: 400 })
  }
  if (!linkedin) {
    return NextResponse.json({ error: "LinkedIn URL is required." }, { status: 400 })
  }
  let linkedinUrl = linkedin
  if (!/^https?:\/\//i.test(linkedinUrl)) {
    linkedinUrl = `https://${linkedinUrl.replace(/^\/+/, "")}`
  }
  if (!budget || !timeline) {
    return NextResponse.json({ error: "Budget and timeline are required." }, { status: 400 })
  }

  const p = propNames()

  const properties: CreatePageParameters["properties"] = {
    [p.title]: {
      title: [{ type: "text", text: { content: name } }],
    },
    [p.email]: { email },
    [p.linkedin]: { url: linkedinUrl },
    [p.budget]: {
      select: { name: budget },
    },
    [p.timeline]: {
      select: { name: timeline },
    },
  }

  if (details) {
    const clipped = details.slice(0, 18000)
    properties[p.details] = {
      rich_text: [{ type: "text", text: { content: clipped } }],
    }
  }

  const notion = new Client({ auth: token })

  try {
    await notion.pages.create({
      parent: { database_id: databaseId },
      properties,
    })
  } catch (err: unknown) {
    console.error("[contact] Notion API error:", err)
    const message =
      err && typeof err === "object" && "body" in err
        ? JSON.stringify((err as { body?: string }).body)
        : String(err)
    return NextResponse.json(
      {
        error:
          "Could not create the Notion entry. Check that property names and select options match your database.",
        detail: process.env.NODE_ENV === "development" ? message : undefined,
      },
      { status: 502 }
    )
  }

  return NextResponse.json({ ok: true })
}
