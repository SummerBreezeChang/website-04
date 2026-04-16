"use client"

// ═══════════════════════════════════════════════════════════════════════════
//  Featured Showcase — scroll-driven horizontal card carousel
//  - Outer wrapper = N × 100vh tall (N = number of projects)
//  - Inner sticky h-screen panel clips a horizontal flex track
//  - Each card = 100vw. Scrolling 100vh of the wrapper = 1 card advance
//  - translateX applied imperatively via ref (no React state, no library)
// ═══════════════════════════════════════════════════════════════════════════

import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { ProjectMeta } from "@/lib/types"

interface Props {
  projects: ProjectMeta[]
}

export default function FeaturedShowcase({ projects }: Props) {
  const N = projects.length

  const sectionRef = useRef<HTMLElement>(null)
  const trackRef   = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)
  const dotRefs    = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const update = () => {
      const section = sectionRef.current
      const track   = trackRef.current
      if (!section || !track) return

      // Document-space top of the section, plus its total scrollable height
      const rect        = section.getBoundingClientRect()
      const sectionTop  = rect.top + window.scrollY
      const sectionH    = section.offsetHeight
      const winH        = window.innerHeight
      const winW        = window.innerWidth
      const maxScroll   = sectionH - winH
      if (maxScroll <= 0) return

      const sy       = window.scrollY
      const progress = Math.max(0, Math.min(1, (sy - sectionTop) / maxScroll))

      // Pixel-based translateX — slide the whole track left as we scroll
      const tx = progress * (N - 1) * winW
      track.style.transform = `translate3d(-${tx}px, 0, 0)`

      // Update counter and dots imperatively
      const active = Math.min(N - 1, Math.round(progress * (N - 1)))
      if (counterRef.current) {
        counterRef.current.textContent =
          `${String(active + 1).padStart(2, "0")} / ${String(N).padStart(2, "0")}`
      }
      for (let j = 0; j < dotRefs.current.length; j++) {
        const dot = dotRefs.current[j]
        if (!dot) continue
        dot.style.width           = j === active ? "24px" : "8px"
        dot.style.backgroundColor = j === active ? "#ffffff" : "rgba(255,255,255,0.3)"
      }
    }

    update()
    window.addEventListener("scroll",  update, { passive: true })
    window.addEventListener("resize",  update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [N])

  return (
    <section
      ref={sectionRef}
      className="relative"
      style={{ height: `${N * 100}vh` }}
    >
      {/* Sticky viewport panel with padding — creates inset effect */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background flex flex-col p-4 md:p-6">

        {/* Featured work label — top left */}
        <div className="absolute top-8 left-10 z-20">
          <p className="text-xs font-medium uppercase tracking-widest text-foreground/40">
            Featured work
          </p>
        </div>

        {/* Counter — top right (updated imperatively) */}
        <div
          ref={counterRef}
          className="absolute top-8 right-10 z-20 text-foreground/50 text-sm font-medium tabular-nums"
        >
          {`01 / ${String(N).padStart(2, "0")}`}
        </div>

        {/* Progress dots — bottom right (updated imperatively) */}
        <div className="absolute bottom-8 right-10 z-20 flex items-center gap-2">
          {projects.map((_, j) => (
            <div
              key={j}
              ref={(el) => { dotRefs.current[j] = el as HTMLDivElement }}
              className="h-2 rounded-full"
              style={{
                width:           j === 0 ? "24px" : "8px",
                backgroundColor: j === 0 ? "var(--foreground)" : "var(--border)",
                transition:      "width 250ms ease, background-color 250ms ease",
              }}
            />
          ))}
        </div>

        {/* Clip container with rounded corners and overflow hidden */}
        <div className="flex-1 relative overflow-hidden rounded-2xl">
          {/* Horizontal flex track — 6 × 100vw cards, translateX moves it left */}
          <div
            ref={trackRef}
            className="flex h-full"
            style={{ willChange: "transform" }}
          >
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="h-full shrink-0 relative flex flex-col justify-end group"
                style={{
                  backgroundColor: p.color,
                  width:    "100vw",
                  minWidth: "100vw",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="relative z-10 max-w-xl p-10 md:p-14">
                  <span className="inline-block text-xs font-semibold bg-white/90 text-foreground px-3.5 py-1.5 rounded-full mb-4">
                    {p.categoryLabel} · {p.year}
                    {p.badges?.map((b) => ` · ${b}`)}
                  </span>
                  <h2 className="text-white text-3xl md:text-[46px] font-extrabold leading-tight mb-3">
                    {p.title}
                  </h2>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                    {p.subtitle}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white text-sm font-semibold border border-white/35 px-5 py-2.5 rounded-full group-hover:bg-white/10 transition-colors">
                    View case study <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
