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
import { ArrowUpRight } from "lucide-react"
import { getFeaturedProjects } from "@/lib/projects-v2"
import { getBentoImage } from "@/lib/bento-image"
import Navigation from "@/components/navigation"
import FeaturedShowcase from "@/components/featured-showcase"

export default function Home() {
  const [scrollY, setScrollY]           = useState(0)
  const [vh, setVh]                     = useState(800)
  const [vw, setVw]                     = useState(1200)
  const [contactScale, setContactScale] = useState(0)
  const [servicesVisible, setServicesVisible] = useState(false)
  const [revealVisible, setRevealVisible] = useState({
    showcase: false,
    seeMore: false,
  })
  const [gridPositions, setGridPositions] = useState<
    { x: number; y: number; width: number; height: number }[]
  >([])

  const cardRefs            = useRef<(HTMLDivElement | null)[]>([])
  const contactRef          = useRef<HTMLDivElement>(null)
  const servicesRef         = useRef<HTMLElement>(null)
  const showcaseRef         = useRef<HTMLDivElement>(null)
  const seeMoreRef          = useRef<HTMLElement>(null)
  const projectsRef         = useRef<HTMLElement>(null)
  const projectsCardRef     = useRef<HTMLDivElement>(null)

  const featured = getFeaturedProjects()
  const N = featured.length // should be 6

  /** Square app icon in the bento metadata row: `/projects/<slug>/bento-icon.png` (optional). */
  const getBentoIconSrc = (slug: string) => `/projects/${slug}/bento-icon.png`

  // ─── HERO HEIGHT ────────────────────────────────────────────────────────
  const HERO_H = 700

  // ─── BENTO LAYOUT (12-col grid) ─────────────────────────────────────────
  const bento = [
    { col: "span 3", row: "span 2" },  // card 0 — tall left
    { col: "span 6", row: "span 2" },  // card 1 — wide center
    { col: "span 3", row: "span 4" },  // card 2 — tall right (rowspan 4)
    { col: "span 3", row: "span 2" },  // card 3
    { col: "span 3", row: "span 2" },  // card 4
    { col: "span 3", row: "span 2" },  // card 5
  ]

  // Explicit slot mapping for Section 2 Bento visual order.
  // Requested swap: MINA <-> Bookee
  const bentoSlotBySlug: Record<string, number> = {
    mina: 0,                    // MINA takes Bookee slot
    playdates: 1,
    petcard: 2,
    "notion-client-intake": 3,
    bookee: 4,                  // Bookee takes MINA slot
    tca: 5,
  }

  // ─── FLOATING CARDS CONFIG ───────────────────────────────────────────────
  // ix/iy = % of viewport where the card starts floating
  // dx/dy = pixel offsets for precise visual placement tuning
  // gi    = index into featured[] (which bento cell it flies to)
  // r     = initial rotation (degrees)
  // w/h   = initial size (px)
  const floatingCards = [
    { gi: 0, ix:  6, iy: 26, dx: 56,  dy: 44, r: -10, w: 128, h: 128 },
    { gi: 1, ix: 10, iy: 58, dx: 48, r:  -6, w: 210, h: 140 },
    { gi: 5, ix:  5, iy: 84, dx: 156, dy: -24, r:  -3, w: 173, h: 124 },
    { gi: 2, ix: 92, iy: 24, dx: -24, dy: 44, r:   7, w: 115, h: 195 },
    { gi: 3, ix: 88, iy: 60, dy: -48, r:   4, w: 144, h: 144 },
    { gi: 4, ix: 86, iy: 86, dy: -48, r:   3, w: 180, h: 113 },
  ]

  // Section 1 floating cards image naming:
  // - /projects/<slug>/float-portrait.jpg
  // - /projects/<slug>/float-wide.jpg
  // - /projects/<slug>/float-square.jpg
  // Falls back to bento/thumb and finally color + title.
  const getFloatImage = (slug: string, w: number, h: number) => {
    const ratio = w / h
    const base = `/projects/${slug}`
    if (slug === "bookee") return `${base}/float-square.jpg`
    if (slug === "mina") return `${base}/float-portrait.jpg`
    if (ratio > 1.25) return `${base}/float-wide.jpg`
    if (ratio < 0.8) return `${base}/float-portrait.jpg`
    return `${base}/float-square.jpg`
  }

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

      // Contact scale-up: keep small at section entry, expand while scrolling through section
      if (contactRef.current) {
        const top = contactRef.current.offsetTop
        const sectionH = contactRef.current.offsetHeight
        const h = window.innerHeight
        const start = top - h * 0.15
        const end = top + sectionH * 0.75
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          if (entry.target === showcaseRef.current) {
            setRevealVisible((prev) => ({ ...prev, showcase: true }))
          }
          if (entry.target === seeMoreRef.current) {
            setRevealVisible((prev) => ({ ...prev, seeMore: true }))
          }
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )

    if (showcaseRef.current) observer.observe(showcaseRef.current)
    if (seeMoreRef.current) observer.observe(seeMoreRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const section = servicesRef.current
    if (!section) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setServicesVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )

    observer.observe(section)
    return () => observer.disconnect()
  }, [])

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
  const lerp = (a: number, b: number, t: number) => a + (b - a) * t
  const mediumPhase = 0.3
  const stageA = Math.min(contactScale / mediumPhase, 1) // small → medium (faster)
  const stageB = Math.max(0, Math.min(1, (contactScale - mediumPhase) / (1 - mediumPhase))) // medium → large

  const smallW = 280
  // Contact card inset from viewport edges:
  // mobile keeps 16px/side feel (~32 total), md+ uses 60px per side (120 total).
  const contactInset = vw >= 768 ? 120 : 32
  const medW = vw - contactInset
  const largeW = vw - contactInset

  const smallH = 220
  const medH = vh - contactInset
  const largeH = vh - contactInset

  const cW = stageB > 0 ? lerp(medW, largeW, stageB) : lerp(smallW, medW, stageA)
  const cH = stageB > 0 ? lerp(medH, largeH, stageB) : lerp(smallH, medH, stageA)
  const cR = stageB > 0 ? lerp(22, 10, stageB) : lerp(28, 22, stageA)
  const textRise = Math.max(0, Math.min(1, (contactScale - 0.03) / 0.35))
  // Keep the final expanded contact card below the fixed top navigation.
  const navClearance = vw >= 768 ? 60 : 0
  const dropToBottom = stageB * Math.max(0, (vh - cH) / 2) + stageB * navClearance
  // Drive headline size directly with contact expansion so it reaches
  // a bold, Featured-Work-like presence at the final stage.
  const contactHeadlineMax = Math.max(112, Math.min(220, cW * 0.22, cH * 0.42))
  const contactHeadlineSize = lerp(52, contactHeadlineMax, textRise)

  const sectionRevealStyle = (visible: boolean, y = 28) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : `translateY(${y}px)`,
    transition: "opacity 700ms cubic-bezier(0.22, 1, 0.36, 1), transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
    willChange: "opacity, transform" as const,
  })

  const scrollToProjectsCenter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const target = projectsCardRef.current ?? projectsRef.current
    if (!target) return

    const rect = target.getBoundingClientRect()
    const sectionTop = window.scrollY + rect.top
    const navOffset = 92
    const upNudge = 48
    const desiredTop = sectionTop - (window.innerHeight - rect.height) / 2 - navOffset + upNudge

    window.scrollTo({
      top: Math.max(0, desiredTop),
      behavior: "smooth",
    })
  }

  return (
    <main className="min-h-screen bg-background">

      <Navigation />

      {/* ═══ SECTION 1: FLOATING CARDS (fixed, animated into bento) ═══ */}
      {floatingCards.map((c, i) => {
        const g  = gridPositions[c.gi] || { x: 0, y: 0, width: c.w, height: c.h }
        const p  = featured[c.gi]
        // Start position (% of viewport)
        const sx = (c.ix / 100) * vw + (c.dx ?? 0)
        const sy = (c.iy / 100) * vh + (c.dy ?? 0)
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
              backgroundImage: p
                ? `url(${getFloatImage(p.slug, c.w, c.h)}), url(/projects/${p.slug}/bento.jpg), url(${p.thumbnail})`
                : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
              transform:  `translate(-50%, -50%) rotate(${c.r * (1 - ep)}deg)`,
              // Fade out as bento grid reveals (sp > 0.85 → bento cards take over visually)
              opacity: sp > 0.85 ? Math.max(0, 1 - (sp - 0.85) * 6.67) : 1,
              boxShadow: `0 ${12 - 8 * ep}px ${30 - 15 * ep}px -6px rgba(0,0,0,${0.22 - 0.12 * ep})`,
              transition: "opacity 0.1s linear",
            }}
          >
            {!p ? null : (
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            )}
          </div>
        )
      })}

      {/* ═══ SECTION 1: HERO ═══ */}
      <section
        className="relative flex items-center justify-center px-7"
        style={{ minHeight: Math.max(HERO_H, vh) }}
      >
        <div
          className="text-center max-w-xl mx-auto relative z-10"
          style={{
            opacity:   Math.max(0, 1 - fp * 1.5),
            transform: `translateY(${fp * 40}px)`,
          }}
        >
          <div className="flex justify-center gap-2 mb-5 flex-wrap">
            <span className="glass-pill text-xs font-medium px-4 py-1.5 rounded-full flex items-center gap-2 text-[#111827]">
              <span className="status-dot-heartbeat w-2 h-2 rounded-full bg-green-500 shadow-[0_0_6px_#22C55E]" />
              Available for work
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-5">
            I design{" "}
            <span className="font-serif italic text-primary font-normal">AI-powered</span>{" "}
            products that help startups{" "}
            <span className="text-primary">think clearly and move fast.</span>
          </h1>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link
                  href="#projects"
                  onClick={scrollToProjectsCenter}
                  className="interactive-glow-btn bg-primary text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors">
              Explore my work
            </Link>
            <Link href="/contact"
                  className="interactive-glow-btn glass-pill px-6 py-3 rounded-full text-sm font-semibold text-[#111827] hover:brightness-[1.02] transition">
              Get in touch
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 2: BENTO GRID (floating cards land here) ═══ */}
      <section
        id="projects"
        ref={projectsRef}
        className="px-4 pb-40 md:pb-48 -mt-[240px] md:-mt-[248px]"
        style={{
          // Fade in as scroll progresses past 25%
          opacity:    sp > 0.25 ? Math.min(1, (sp - 0.25) * 3) : 0,
          transform:  `translateY(${sp > 0.25 ? 0 : 16}px)`,
          transition: "opacity .4s, transform .4s",
        }}
      >
        <div ref={projectsCardRef} className="max-w-6xl mx-auto bg-card rounded-3xl border p-6">
          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-[0_0_0_2px_theme(colors.pink.100)] shrink-0">
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
            style={{ gridTemplateColumns: "repeat(12, 1fr)", gridAutoRows: 120 }}
          >
            {featured.map((p, i) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}?from=home`}
                className="rounded-2xl relative cursor-pointer group bg-card flex flex-col p-2"
                style={{
                  gridColumn:      bento[bentoSlotBySlug[p.slug] ?? i]?.col,
                  gridRow:         bento[bentoSlotBySlug[p.slug] ?? i]?.row,
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

                <div
                  className="relative min-h-0 flex-1 rounded-md overflow-hidden"
                  style={{
                    backgroundColor: p.color,
                    backgroundImage: `url(${getBentoImage(p.slug)}), url(${p.thumbnail})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                <div className="relative z-10 px-0.5 pt-2 pb-1">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-2.5 min-w-0">
                      <img
                        src={getBentoIconSrc(p.slug)}
                        alt=""
                        className="size-[30px] rounded-[4px] object-cover shrink-0 ring-1 ring-black/5 mt-px"
                        onError={(e) => {
                          const el = e.currentTarget
                          el.onerror = null
                          el.src = "/favicon-s.png"
                        }}
                      />
                      <div className="min-w-0">
                        <h3 className="text-[12px] font-semibold leading-tight text-card-foreground truncate">{p.title}</h3>
                        <p className="text-[10px] text-muted-foreground leading-snug line-clamp-1">
                          {p.subtitle}
                        </p>
                      </div>
                    </div>
                    <span className="shrink-0 inline-block text-[9px] font-semibold bg-muted text-foreground px-2 py-0.5 rounded-full">
                      {p.categoryLabel}
                    </span>
                  </div>
                </div>
                {/* Hover arrow */}
                <div className="absolute top-3 right-3 z-20 w-7 h-7 rounded-full bg-white/0 group-hover:bg-white/90 flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
                  <ArrowUpRight className="w-3.5 h-3.5 text-foreground" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SECTION 3: HORIZONTAL SCROLL SHOWCASE ═══ */}
      <div ref={showcaseRef} style={sectionRevealStyle(revealVisible.showcase, 34)}>
        <FeaturedShowcase projects={featured} />
      </div>

      {/* ═══ SEE MORE ═══ */}
      <section ref={seeMoreRef} className="-mt-[60px] py-12 text-center px-4" style={sectionRevealStyle(revealVisible.seeMore, 24)}>
        <Link
          href="/more"
          className="interactive-glow-btn -mt-6 inline-flex items-center justify-center px-7 py-3 rounded-full bg-primary text-white text-base font-semibold shadow-[0_16px_40px_-18px_rgba(199,37,133,0.85)] hover:bg-primary/90 transition-colors"
        >
          See more projects
        </Link>
        <p className="text-xs text-muted-foreground mt-3">
          ReKeepIt · Client Ops Kit · Alacrity · Café Noir · physical products · more
        </p>
      </section>

      {/* ═══ SECTION 4: SERVICES ═══ */}
      <section
        id="services"
        ref={servicesRef}
        className="py-20 md:py-24 px-7 bg-[radial-gradient(90%_120%_at_10%_90%,rgba(226,245,221,0.9)_0%,rgba(249,251,245,1)_55%,rgba(250,252,247,1)_100%)] dark:bg-[radial-gradient(95%_120%_at_12%_88%,rgba(22,51,44,0.88)_0%,rgba(16,24,38,1)_54%,rgba(10,18,32,1)_100%)]"
        style={sectionRevealStyle(servicesVisible, 26)}
      >
        <div className="max-w-6xl mx-auto min-h-[78vh] md:min-h-[82vh] flex flex-col justify-center">
          <div
            className={`mb-24 md:mb-28 transition-all duration-500 ${
              servicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="w-fit mx-auto">
              <p className="text-[11px] tracking-[0.18em] uppercase text-foreground/45 dark:text-white/55 mb-2">
                Choose how we work together
              </p>
              <div className="flex flex-col md:flex-row md:items-end gap-3 md:gap-10">
                <h2 className="text-[38px] md:text-[56px] font-semibold leading-[0.94] tracking-tight mb-0">
                  3 ways I can
                  <br />
                  help your team
                </h2>
                <p className="text-sm md:text-[15px] text-foreground/70 dark:text-white/75 leading-[1.45] max-w-[360px] md:pb-1">
                  Pick the support level that fits your goals - from AI product design to website strategy and
                  client workflow optimization.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                t: "Product Design",
                d: "AI tools that help teams decide better.",
                items: ["AI feature design", "Workflow automation", "Decision support", "Consent patterns"],
              },
              {
                t: "Website & Brand",
                d: "Websites that clarify what you do.",
                items: ["Brand messaging", "Portfolio sections", "Forms & calendar", "Light dev support"],
              },
              {
                t: "Client Workflow",
                d: "Streamline client operations.",
                items: ["Intake + CRM", "Auto responses", "Project generation", "Onboarding flows"],
              },
            ].map((s, idx) => (
              <Link
                key={s.t}
                href="/contact"
                className={`group rounded-3xl border border-border bg-card text-card-foreground p-6 md:p-7 flex flex-col shadow-[0_20px_60px_-34px_rgba(40,65,45,0.32)] transition-transform duration-500 ease-out hover:scale-[1.03] ${
                  idx === 1 ? "md:-translate-y-6" : idx === 2 ? "md:translate-y-12" : "md:translate-y-6"
                }`}
                style={{
                  opacity: servicesVisible ? 1 : 0,
                  transform: servicesVisible
                    ? undefined
                    : `translateY(${20 + idx * 8}px)`,
                  transitionDuration: "450ms",
                  transitionDelay: `${360 + idx * 120}ms`,
                }}
              >
                <h4 className="text-[34px] md:text-[38px] font-medium leading-none tracking-tight mb-2">{s.t}</h4>
                <p className="text-[12px] md:text-[13px] text-card-foreground/85 leading-relaxed mb-5">{s.d}</p>
                <div className="flex-1">
                  {s.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 mb-2 text-[12px] text-card-foreground/90 transition-colors duration-200 group-hover:text-card-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-card-foreground/75 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div
            className="mt-24 md:mt-28 flex justify-center transition-all duration-500"
            style={{
              opacity: servicesVisible ? 1 : 0,
              transform: servicesVisible ? "translateY(0)" : "translateY(14px)",
              /* Same beat as third card (idx 2): 360 + 2*120 = 600ms */
              transitionDelay: "600ms",
            }}
          >
            <Link
              href="/contact"
              className="interactive-glow-btn inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-primary text-white text-sm font-semibold shadow-[0_16px_40px_-18px_rgba(199,37,133,0.85)] hover:bg-primary/90 transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ SECTION 5: CONTACT — scale-up card ═══ */}
      <section
        id="contact"
        ref={contactRef}
        className="pt-24 md:pt-28 pb-0 flex items-center justify-center overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <div
          className="relative overflow-hidden flex flex-col justify-end"
          style={{
            top: "116px",
            width: cW,
            height: cH,
            borderRadius: cR,
            transform: `translateY(${dropToBottom}px)`,
            transition: "border-radius 70ms linear",
            boxShadow: `0 ${24 + 24 * contactScale}px ${64 + 36 * contactScale}px -26px rgba(26, 10, 40, ${0.28 + contactScale * 0.2})`,
          }}
        >
          {/* Background gradient */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, #1A1A2E 0%, #2D1B4E 40%, #4A1942 100%)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-[2]" />

          {/* Headline stays centered during expansion */}
          <div
            className="absolute inset-0 flex items-center justify-center text-center z-[3] pointer-events-none"
            style={{
              opacity: textRise,
              transform: `translateY(${(1 - textRise) * 18}px)`,
            }}
          >
            <h2
              className="text-white/90 font-black leading-[0.92] tracking-tight"
              style={{ fontSize: contactHeadlineSize }}
            >
              Let&apos;s build<br />together.
            </h2>
          </div>

          {/* CTAs — reveal at final expansion stage */}
          <div
            className="relative z-[4] flex gap-0 px-6 md:px-12 pb-8 transition-all duration-500"
            style={{
              opacity:   contactScale > 0.9 ? 1 : 0,
              transform: contactScale > 0.9 ? "translateY(0)" : "translateY(20px)",
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

    </main>
  )
}
