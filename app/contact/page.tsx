"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"

const NOTION_URL = "https://summerchangco.notion.site/2552d5cd4ef481e18881c88cefe41e03"

const BUDGET_OPTIONS = [
  "Under $1,000",
  "$1,000 – $3,000",
  "$3,000 – $7,500",
  "$7,500 – $15,000",
  "$15,000+",
  "Not sure yet",
]

const TIMELINE_OPTIONS = [
  "ASAP",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Flexible",
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(data),
    })

    setLoading(false)
    if (!res.ok) {
      const j = (await res.json().catch(() => ({}))) as { error?: string }
      setError(
        typeof j.error === "string"
          ? j.error
          : "Could not send your inquiry. Try again, or use the Notion link below."
      )
      return
    }
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="px-4 pt-[188px] pb-20 md:pt-[220px] md:pb-28">
        <div className="max-w-2xl mx-auto">

          {submitted ? (
            <div className="rounded-3xl border bg-card p-10 md:p-14 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <span className="text-2xl">✓</span>
              </div>
              <h2 className="text-2xl font-extrabold mb-2">Got it — thank you!</h2>
              <p className="text-muted-foreground text-sm">
                I&apos;ll get back to you within 2–3 business days with next steps.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-3">
                  Tell me about your business
                </h1>
                <p className="text-sm md:text-base text-muted-foreground max-w-xl leading-relaxed">
                  Once I receive your inquiry, I&apos;ll get back to you within 2–3 business days with a rough
                  estimate or a few follow-up questions. From there, we can hop on a quick intro call to see
                  if it&apos;s a good fit.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Field label="Your Name" required>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Your answer"
                    className="input-field"
                  />
                </Field>

                <Field label="Email" required>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="Your answer"
                    className="input-field"
                  />
                </Field>

                <Field label="LinkedIn" required>
                  <input
                    name="linkedin"
                    type="url"
                    required
                    placeholder="Your answer"
                    className="input-field"
                  />
                </Field>

                <Field label="What is your budget range for this project?" required>
                  <select name="budget" required className="input-field">
                    <option value="">Select an option</option>
                    {BUDGET_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </Field>

                <Field label="When are you looking to start this project?" required>
                  <select name="timeline" required className="input-field">
                    <option value="">Select an option</option>
                    {TIMELINE_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </Field>

                <Field label="Tell me about your project">
                  <textarea
                    name="details"
                    rows={5}
                    placeholder="Your answer"
                    className="input-field resize-none"
                  />
                </Field>

                <div className="flex flex-col gap-2 pt-2">
                  <div className="flex flex-wrap items-center gap-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="interactive-glow-btn inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors disabled:opacity-60"
                    >
                      {loading ? "Sending…" : "Send Inquiry"}
                    </button>
                    <a
                      href={NOTION_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-4 transition-colors"
                    >
                      Or fill out on Notion →
                    </a>
                  </div>
                  {error && (
                    <p className="text-sm text-destructive" role="alert">
                      {error}
                    </p>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </main>
  )
}

function Field({
  label,
  required,
  children,
}: {
  label: string
  required?: boolean
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-base font-bold leading-snug">
        {label}
        {required && <span className="text-primary ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}
