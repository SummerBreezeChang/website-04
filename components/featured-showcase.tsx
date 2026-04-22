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
import type { ProjectMeta } from "@/lib/types"
import { getBentoImage } from "@/lib/bento-image"

interface Props {
  projects: ProjectMeta[]
}

function bentoIconSrc(slug: string) {
  return `/projects/${slug}/bento-icon.png`
}

export default function FeaturedShowcase({ projects }: Props) {
  const N = projects.length
  // Vertical scroll needed to advance one project card (as a fraction of viewport height).
  // Lower = faster horizontal advance.
  const STEP_VH = 0.34
  const CARD_GAP_PX = 48

  const sectionRef = useRef<HTMLElement>(null)
  const trackRef   = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)

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
      const viewportW   = track.parentElement?.clientWidth ?? window.innerWidth
      const maxScroll   = sectionH - winH
      if (maxScroll <= 0) return

      const sy = window.scrollY
      const progress = Math.max(0, Math.min(1, (sy - sectionTop) / maxScroll))
      const rawIndex = progress * (N - 1)
      // Snap to project index so each scroll step advances one grouped card state.
      const active = Math.min(N - 1, Math.max(0, Math.round(rawIndex)))

      // Pixel-based translateX — clamp to actual max to avoid blank tail on last card.
      const stepW = viewportW + CARD_GAP_PX
      const rawTx = active * stepW
      const maxTx = Math.max(0, track.scrollWidth - viewportW)
      const tx = Math.min(rawTx, maxTx)
      track.style.transform = `translate3d(-${tx}px, 0, 0)`
      track.style.transition = "transform 360ms cubic-bezier(0.22, 1, 0.36, 1)"

      // Update counter imperatively
      if (counterRef.current) {
        counterRef.current.textContent =
          `${String(active + 1).padStart(2, "0")} / ${String(N).padStart(2, "0")}`
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
      // Total height = sticky viewport (100vh) + per-step scroll distance for remaining cards.
      style={{ height: `calc(${100 + (N - 1) * STEP_VH * 100}vh - 60px)` }}
    >
      {/* Sticky viewport panel with padding — creates inset effect */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background flex flex-col p-4 md:px-[60px] md:pb-[60px] md:pt-[120px]">

        {/* Counter — top right (updated imperatively) */}
        <div
          ref={counterRef}
          className="absolute top-8 right-10 z-20 text-foreground/50 text-sm font-medium tabular-nums"
        >
          {`01 / ${String(N).padStart(2, "0")}`}
        </div>

        {/* Clip container with rounded corners and overflow hidden */}
        <div className="flex-1 relative overflow-hidden rounded-2xl">
          {/* Horizontal flex track — 6 × 100vw cards, translateX moves it left */}
          <div
            ref={trackRef}
            className="flex h-full gap-12"
            style={{ willChange: "transform" }}
          >
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}?from=home`}
                className="h-full shrink-0 basis-full relative flex flex-col text-left group"
              >
                {/* Image-first: no text overlay — matches Section 2 bento readability */}
                <div className="relative flex-1 min-h-[52vh] md:min-h-[58vh] rounded-md overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundColor: p.color,
                      backgroundImage: `url(${getBentoImage(p.slug)}), url(${p.thumbnail})`,
                    }}
                  />
                </div>

                <div className="relative z-10 shrink-0 px-5 py-4 md:px-8 md:py-5 bg-transparent">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-2.5 min-w-0">
                      <img
                        src={bentoIconSrc(p.slug)}
                        alt=""
                        className="size-[30px] rounded-[4px] object-cover shrink-0 ring-1 ring-black/5 mt-px"
                        onError={(e) => {
                          const el = e.currentTarget
                          el.onerror = null
                          el.src = "/favicon-s.png"
                        }}
                      />
                      <div className="min-w-0 ml-[18px]">
                        <h2 className="text-[24px] font-semibold leading-tight text-foreground truncate">
                          {p.title}
                        </h2>
                        <p className="text-[14px] text-muted-foreground leading-snug line-clamp-2 mt-0.5">
                          {p.subtitle}
                        </p>
                        <span className="mt-3 inline-flex w-fit items-center gap-1.5 text-xs md:text-sm font-semibold text-foreground bg-white px-4 py-2 rounded-full shadow-[0_10px_24px_-16px_rgba(0,0,0,0.35)] group-hover:bg-white/90 transition-colors">
                          View case study
                        </span>
                      </div>
                    </div>
                    <span className="shrink-0 self-start inline-flex items-center text-[12px] font-medium text-foreground/80 bg-muted px-3 py-1.5 rounded-[6px]">
                      {[p.year, ...(p.badges ?? []), p.categoryLabel].join(" ")}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
