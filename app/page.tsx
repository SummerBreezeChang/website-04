"use client"
// ═══════════════════════════════════════════════════════════════════════════
//  Summer Chang Portfolio — Unified Home Page
//  Section 1: Hero + Floating Cards (fall into bento on scroll)
//  Section 2: Bento Grid (landing target for floating cards)
//  Section 3: Horizontal Scroll Showcase (6 cards, scroll-driven, zoom in)
//  Section 4: Services
//  Section 5: Contact (scale-up card)
//  Section 6: Footer
// ═══════════════════════════════════════════════════════════════════════════

import { useEffect, useRef, useState, useCallback } from "react"
import Link from "next/link"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { getFeaturedProjects } from "@/lib/projects-v2"
import Navigation from "@/components/navigation"
import FeaturedShowcase from "@/components/featured-showcase"

export default function Home() {
  const [scrollY, setScrollY]           = useState(0)
  const [vh, setVh]                     = useState(800)
  const [vw, setVw]                     = useState(1200)
  const [contactScale, setContactScale] = useState(0)
  const [gridPositions, setGridPositions] = useState<
    { x: number; y: number; width: number; height: number }[]
  >([])

  const cardRefs            = useRef<(HTMLDivElement | null)[]>([])
  const contactRef          = useRef<HTMLDivElement>(null)

  const featured = getFeaturedProjects()
  const N = featured.length // should be 6

  // ─── HERO HEIGHT ────────────────────────────────────────────────────────
  const HERO_H = 680

  // ─── BENTO LAYOUT (12-col grid) ─────────────────────────────────────────
  const bento = [
    { col: "span 3", row: "span 2" },  // card 0 — tall left
    { col: "span 6", row: "span 2" },  // card 1 — wide center
    { col: "span 3", row: "span 4" },  // card 2 — tall right (rowspan 4)
    { col: "span 3", row: "span 2" },  // card 3
    { col: "span 3", row: "span 2" },  // card 4
    { col: "span 3", row: "span 2" },  // card 5
  ]

  // ─── FLOATING CARDS CONFIG ───────────────────────────────────────────────
  // ix/iy = % of viewport where the card starts floating
  // gi    = index into featured[] (which bento cell it flies to)
  // r     = initial rotation (degrees)
  // w/h   = initial size (px)
  const floatingCards = [
    { gi: 0, ix:  6, iy: 16, r: -10, w: 110, h: 155 },
    { gi: 1, ix: 10, iy: 48, r:  -6, w: 150, h: 100 },
    { gi: 5, ix:  5, iy: 76, r:  -3, w: 100, h:  72 },
    { gi: 2, ix: 92, iy: 14, r:   7, w: 115, h: 195 },
    { gi: 3, ix: 88, iy: 52, r:   4, w: 100, h: 100 },
    { gi: 4, ix: 86, iy: 80, r:   3, w: 125, h:  78 },
  ]

  // ─── MEASURE BENTO CARD POSITIONS ───────────────────────────────────────
  const measure = useCallback(() => {
    setGridPositions(
      cardRefs.current.map((el) => {
        if (!el) return { x: 0, y: 0, width: 0, height: 0 }
        const r = el.getBoundingClientRect()
        return {
          x: r.left + r.width  / 2,
          y: r.top  + window.scrollY + r.height / 2,
          width:  r.width,
          height: r.height,
        }
      })
    )
  }, [])

  // ─── SINGLE SCROLL + RESIZE HANDLER ─────────────────────────────────────
  useEffect(() => {
    const onResize = () => {
      setVh(window.innerHeight)
      setVw(window.innerWidth)
      measure()
    }

    const onScroll = () => {
      const sy = window.scrollY
      setScrollY(sy)

      // Contact scale-up (uses offsetTop for stable positioning)
      if (contactRef.current) {
        const top   = contactRef.current.offsetTop
        const h     = window.innerHeight
        const start = top - h
        const end   = top - h * 0.3
        const range = end - start
        if (range > 0) {
          setContactScale(Math.max(0, Math.min(1, (sy - start) / range)))
        }
      }

    }

    // Init
    setVh(window.innerHeight)
    setVw(window.innerWidth)
    onScroll()
    setTimeout(measure, 300)   // wait for layout to settle

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onResize)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onResize)
    }
  }, [measure])

  // ─── DERIVED SCROLL PROGRESS ─────────────────────────────────────────────
  // sp  = 0→1 as we scroll through hero (controls bento fade + floating cards)
  // fp  = 0→1 faster (hero text fade-out)
  // ep  = eased sp (cubic ease-in-out) for smooth card flight
  const sp = Math.min(scrollY / (HERO_H * 0.65), 1)
  const fp = Math.min(scrollY / (HERO_H * 0.35), 1)
  const ep = sp < 0.5
    ? 4 * sp * sp * sp
    : 1 - Math.pow(-2 * sp + 2, 3) / 2

  // ─── CONTACT CARD GEOMETRY ───────────────────────────────────────────────
  const cW       = 260 + (vw - 260) * contactScale
  const cH       = 360 + (vh - 360) * contactScale
  const cR       = 24  * (1 - contactScale)
  const textRise = Math.max(0, Math.min(1, (contactScale - 0.15) / 0.5))

  return (
    <main className="min-h-screen bg-background">

      <Navigation />

      {/* ═══ SECTION 1: FLOATING CARDS (fixed, animated into bento) ═══ */}
      {floatingCards.map((c, i) => {
        const g  = gridPositions[c.gi] || { x: 0, y: 0, width: c.w, height: c.h }
        const p  = featured[c.gi]
        // Start position (% of viewport)
        const sx = (c.ix / 100) * vw
        const sy = (c.iy / 100) * vh
        // Lerp from start → bento center using eased progress
        return (
          <div
            key={i}
            className="fixed rounded-2xl flex items-center justify-center pointer-events-none z-50 overflow-hidden"
            style={{
              left:   sx + (g.x - sx) * ep,
              top:    sy + (g.y - scrollY - sy) * ep,  // g.y is document-space; adjust for scroll
              width:  c.w + (g.width  - c.w) * ep,
              height: c.h + (g.height - c.h) * ep,
              backgroundColor: p?.color ?? "#888",
              transform:  `translate(-50%, -50%) rotate(${c.r * (1 - ep)}deg)`,
              // Fade out as bento grid reveals (sp > 0.85 → bento cards take over visually)
              opacity: sp > 0.85 ? Math.max(0, 1 - (sp - 0.85) * 6.67) : 1,
              boxShadow: `0 ${12 - 8 * ep}px ${30 - 15 * ep}px -6px rgba(0,0,0,${0.22 - 0.12 * ep})`,
              transition: "opacity 0.1s linear",
            }}
          >
            <span className="text-white/80 text-xs font-semibold text-center px-2 leading-tight">
              {p?.title ?? ""}
            </span>
          </div>
        )
      })}

      {/* ═══ SECTION 1: HERO ═══ */}
      <section
        className="relative flex items-center justify-center px-7"
        style={{ minHeight: HERO_H }}
      >
        <div
          className="text-center max-w-xl mx-auto relative z-10"
          style={{
            opacity:   Math.max(0, 1 - fp * 1.5),
            transform: `translateY(${fp * 40}px)`,
          }}
        >
          <div className="flex justify-center gap-2 mb-5 flex-wrap">
            <span className="text-xs font-medium px-4 py-1.5 rounded-full border border-border bg-white/80">
              AI & Product Designer
            </span>
            <span className="text-xs font-medium px-4 py-1.5 rounded-full border border-border bg-white/80 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_6px_#22C55E]" />
              Available for work
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
            I design{" "}
            <span className="font-serif italic text-primary font-normal">AI-powered</span>{" "}
            products that help startups{" "}
            <span className="text-primary">think clearly and move fast.</span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed max-w-md mx-auto mb-7">
            Senior product designer with 10+ years across physical goods, brand, and software.
            Now focused on AI systems that help teams make better decisions.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="#projects"
                  className="bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">
              Explore my work
            </Link>
            <Link href="#contact"
                  className="bg-white/60 border border-border px-6 py-3 rounded-full text-sm font-semibold hover:bg-white transition-colors">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: BENTO GRID (floating cards land here) ═══ */}
      <section
        id="projects"
        className="px-4 pb-6"
        style={{
          // Fade in as scroll progresses past 25%
          opacity:    sp > 0.25 ? Math.min(1, (sp - 0.25) * 3) : 0,
          transform:  `translateY(${sp > 0.25 ? 0 : 16}px)`,
          transition: "opacity .4s, transform .4s",
        }}
      >
        <div className="max-w-5xl mx-auto bg-card rounded-3xl border p-5">
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white shadow-[0_0_0_2px_theme(colors.pink.100)] shrink-0">
              <img src="/headshot.png" alt="Summer Chang" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-base font-bold">Summer Chang</h2>
              <p className="text-xs text-muted-foreground">AI & Product Designer · Design consulting for startups</p>
            </div>
          </div>

          {/* 12-column bento grid */}
          <div
            className="grid gap-2"
            style={{ gridTemplateColumns: "repeat(12, 1fr)", gridAutoRows: 100 }}
          >
            {featured.map((p, i) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="rounded-2xl overflow-hidden relative cursor-pointer group"
                style={{
                  gridColumn:      bento[i]?.col,
                  gridRow:         bento[i]?.row,
                  backgroundColor: p.color,
                  // Cards appear exactly when floating cards fade out
                  opacity:    sp > 0.85 ? 1 : 0,
                  transition: `opacity .4s ease ${i * 0.05}s`,
                }}
              >
                {/* Invisible ref div so we can measure card center for flying animation */}
                <div
                  ref={(el) => { cardRefs.current[i] = el as HTMLDivElement }}
                  className="absolute inset-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10">
                  <span className="inline-block text-[9px] font-semibold bg-white/90 text-foreground px-2 py-0.5 rounded-full mb-1">
                    {p.categoryLabel}
                  </span>
                  <h3 className="text-white text-sm font-bold leading-tight">{p.title}</h3>
                </div>
                {/* Hover arrow */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                  <ArrowUpRight className="w-3.5 h-3.5 text-foreground" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: HORIZONTAL SCROLL SHOWCASE ═══ */}
      <FeaturedShowcase projects={featured} />

      {/* ═══ SEE MORE ═══ */}
      <section className="py-12 text-center px-4">
        <Link
          href="/more"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full border-2 border-border bg-card text-base font-semibold hover:border-primary transition-colors"
        >
          See more projects <ArrowRight className="w-4 h-4" />
        </Link>
        <p className="text-xs text-muted-foreground mt-3">
          ReKeepIt · Client Ops Kit · Alacrity · Café Noir · physical products · more
        </p>
      </section>

      {/* ═══ SECTION 4: SERVICES ═══ */}
      <section id="services" className="py-14 px-7 bg-card">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold text-center mb-1">
            <span className="bg-primary text-white px-2.5 py-0.5 rounded-md mr-1.5">3 ways</span>
            I can help
          </h2>
          <p className="text-center text-muted-foreground text-sm mt-2 mb-8 max-w-md mx-auto">
            From AI-powered automation to brand strategy — I help startups design systems that scale.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                t: "AI Product Design",
                d: "AI tools that help teams decide better.",
                items: ["AI feature design", "Workflow automation", "Decision support", "Consent patterns"],
                cta: "Let's talk",
              },
              {
                t: "Website & Brand",
                d: "Websites that clarify what you do.",
                items: ["Brand messaging", "Portfolio sections", "Forms & calendar", "Light dev support"],
                cta: "Get a quote",
              },
              {
                t: "Client Workflow",
                d: "Streamline client operations.",
                items: ["Intake + CRM", "Auto responses", "Project generation", "Onboarding flows"],
                cta: "Get in touch",
              },
            ].map((s) => (
              <div key={s.t} className="rounded-2xl border-2 border-border p-5 flex flex-col">
                <h4 className="text-base font-bold mb-2">{s.t}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3.5">{s.d}</p>
                <div className="flex-1">
                  {s.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 mb-1.5 text-xs text-muted-foreground">
                      <span className="w-1 h-1 rounded-full bg-primary shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full py-2 rounded-lg border-2 border-primary text-primary font-semibold text-xs hover:bg-primary/5 transition-colors">
                  {s.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5: CONTACT — scale-up card ═══ */}
      <section
        id="contact"
        ref={contactRef}
        className="py-16 flex items-center justify-center overflow-hidden"
        style={{ minHeight: "80vh" }}
      >
        <div
          className="relative overflow-hidden flex flex-col justify-end"
          style={{ width: cW, height: cH, borderRadius: cR, transition: "border-radius 50ms linear" }}
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #2D1B4E 40%, #4A1942 100%)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-[2]" />

          {/* Headline rises up as card expands */}
          <div
            className="absolute left-0 right-0 text-center z-[3] pointer-events-none"
            style={{ bottom: -120 + (120 + cH * 0.38) * textRise, opacity: textRise }}
          >
            <h2
              className="text-white/90 font-black leading-[0.92] tracking-tight"
              style={{ fontSize: Math.max(32, cW * 0.12) }}
            >
              Let&apos;s build<br />together.
            </h2>
          </div>

          {/* CTAs — reveal at 75% expansion */}
          <div
            className="relative z-[4] flex gap-0 px-6 md:px-12 pb-8 transition-all duration-500"
            style={{
              opacity:   contactScale > 0.75 ? 1 : 0,
              transform: contactScale > 0.75 ? "translateY(0)" : "translateY(20px)",
            }}
          >
            <a
              href="mailto:contact@summerchang.co"
              className="flex-1 py-5 px-6 text-sm font-semibold text-white flex items-center justify-between rounded-l-xl"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              Talk with Summer <span>→</span>
            </a>
            <a
              href="mailto:contact@summerchang.co"
              className="flex-1 py-5 px-6 text-sm font-semibold text-white flex items-center justify-between rounded-r-xl bg-primary"
            >
              Reach out <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="px-7">
        <div className="border-t border-border py-8 flex justify-between items-center flex-wrap gap-5">
          <div className="flex gap-4 items-center text-xs text-muted-foreground flex-wrap">
            <span>© 2026 Summer Chang</span>
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Use</a>
          </div>
          <div className="flex gap-5 items-center">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
              </svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>

    </main>
  )
}
