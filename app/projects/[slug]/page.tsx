import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { SectionRenderer } from "@/components/project-sections"
import { projects } from "@/lib/projects-v2"

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = projects.find((x) => x.slug === slug)
  if (!p) return { title: "Not Found" }
  return { title: `${p.title} — Summer Chang`, description: p.subtitle }
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const p = projects.find((x) => x.slug === slug)
  if (!p) notFound()

  const idx = projects.findIndex((x) => x.slug === p.slug)
  const prev = idx > 0 ? projects[idx - 1] : null
  const next = idx < projects.length - 1 ? projects[idx + 1] : null

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="max-w-[900px] mx-auto px-6 md:px-8">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors pt-24 pb-8">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to all projects
        </Link>

        {/* Hero: Title left, Meta sidebar right */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_200px] gap-10 items-start mb-10">
          <div>
            <h1 className="text-3xl md:text-[34px] font-medium leading-tight mb-3" style={{ fontFamily: "var(--font-display)" }}>{p.title}</h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-4">{p.subtitle}</p>
            <div className="flex gap-2 flex-wrap">
              {p.badges?.map((b) => (
                <span key={b} className="text-[10px] font-semibold px-3 py-1 rounded-full border" style={{ color: p.color, borderColor: `${p.color}33`, backgroundColor: `${p.color}08` }}>{b}</span>
              ))}
              <span className="text-[10px] font-semibold px-3 py-1 rounded-full border" style={{ color: p.color, borderColor: `${p.color}33`, backgroundColor: `${p.color}08` }}>{p.categoryLabel}</span>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-1">
            {p.tools && <div><p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Tools</p><p className="text-sm font-medium leading-snug">{p.tools}</p></div>}
            <div><p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Role</p><p className="text-sm font-medium leading-snug">{p.role}</p></div>
            {p.timeline && <div><p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Timeline</p><p className="text-sm font-medium leading-snug">{p.timeline}</p></div>}
            {p.client && <div><p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">Client</p><p className="text-sm font-medium leading-snug">{p.client}</p></div>}
          </div>
        </div>

        {/* Hero image */}
        <div className="w-full aspect-[16/9] rounded-2xl mb-16 flex items-center justify-center overflow-hidden relative" style={{ backgroundColor: p.color }}>
          <span className="text-white/40 text-xs text-center max-w-[260px] px-3 leading-relaxed z-10">{p.heroImage}</span>
          <div className="absolute inset-0 rounded-2xl" style={{ border: "2px dashed rgba(255,255,255,0.15)" }} />
        </div>

        {/* tl;dr with optional stats sidebar */}
        <div className={`mb-16 md:mb-20 ${p.tldrStats ? "grid grid-cols-1 md:grid-cols-[1fr_220px] gap-10 items-start" : ""}`}>
          <div>
            <p className="text-xs font-medium mb-3" style={{ color: p.color, fontFamily: "var(--font-display)" }}>tl;dr</p>
            <p className="text-base leading-relaxed">{p.tldr}</p>
          </div>
          {p.tldrStats && (
            <div className="flex flex-col gap-5 pt-1">
              {p.tldrStats.map((stat, i) => (
                <div key={i} className="pl-3.5" style={{ borderLeft: `2px solid ${p.color}` }}>
                  <p className="text-2xl md:text-[28px] font-medium leading-none" style={{ fontFamily: "var(--font-display)" }}>{stat.value}</p>
                  <p className="text-[11px] text-muted-foreground mt-1 leading-snug">{stat.label}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Dynamic sections */}
        {p.sections.map((section, i) => (
          <SectionRenderer key={i} section={section} color={p.color} />
        ))}

        {/* CTA box */}
        {p.ctaBox && (
          <div className="text-center p-8 rounded-xl bg-card border my-10">
            <h3 className="text-base font-medium mb-2" style={{ fontFamily: "var(--font-display)" }}>{p.ctaBox.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{p.ctaBox.desc}</p>
            <a href={p.ctaBox.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-full border-2 transition-colors hover:bg-muted" style={{ color: p.color, borderColor: p.color }}>{p.ctaBox.label} ↗</a>
          </div>
        )}

        {/* What's next */}
        {p.nextBox && (
          <div className="p-6 rounded-xl my-10" style={{ backgroundColor: `${p.color}08`, border: `1px solid ${p.color}15` }}>
            <h3 className="text-sm font-medium mb-2" style={{ color: p.color, fontFamily: "var(--font-display)" }}>what&apos;s next</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.nextBox.text}</p>
          </div>
        )}

        {/* Prev / Next */}
        <div className="flex items-center justify-between py-6 border-t border-border mt-12 mb-16">
          {prev ? (
            <Link href={`/projects/${prev.slug}`} className="group flex items-center gap-3 text-sm">
              <ArrowLeft className="w-4 h-4 text-muted-foreground group-hover:-translate-x-1 transition-transform" />
              <div><p className="text-[10px] text-muted-foreground">Previous</p><p className="font-medium">{prev.title}</p></div>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/projects/${next.slug}`} className="group flex items-center gap-3 text-sm text-right">
              <div><p className="text-[10px] text-muted-foreground">Next</p><p className="font-medium">{next.title}</p></div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          ) : <div />}
        </div>
      </div>
      <Footer />
    </main>
  )
}
