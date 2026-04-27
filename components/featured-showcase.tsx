"use client"

// ═══════════════════════════════════════════════════════════════════════════
//  Featured Showcase — scroll-driven horizontal card carousel
//  - Outer wrapper = N × 100vh tall (N = number of projects)
//  - Inner sticky h-screen panel clips a horizontal flex track
//  - Each card = 100vw. Scrolling 100vh of the wrapper = 1 card advance
//  - translateX applied imperatively via ref (no React state, no library)
// ═══════════════════════════════════════════════════════════════════════════

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import type { ProjectMeta } from "@/lib/types"
import { getBentoImage } from "@/lib/bento-image"
import { PROJECT_DETAILS_ENABLED } from "@/lib/site-flags"

interface Props {
  projects: ProjectMeta[]
}

function bentoIconSrc(slug: string) {
  return `/projects/${slug}/bento-icon.png`
}

function showcaseVideoSrc(slug: string, isMobile: boolean) {
  if (slug === "bookee") {
    return isMobile
      ? "/projects/bookee/bookee-showcase-mobile.mp4?v=20260427-lowres1"
      : "/projects/bookee/bookee-showcase.mp4?v=20260427-lowres1"
  }
  if (slug === "playdates") {
    return isMobile
      ? "/projects/playdates/playdates-showcase-mobile.mp4?v=20260427-lowres1"
      : "/projects/playdates/playdates-showcase.mp4?v=20260427-lowres1"
  }
  if (slug === "petcard") {
    return isMobile
      ? "/projects/petcard/petcard-showcase-mobile.mp4?v=20260427-lowres1"
      : "/projects/petcard/petcard-showcase.mp4?v=20260427-lowres1"
  }
  if (slug === "notion-client-intake") {
    return isMobile
      ? "/projects/notion-client-intake/notion-client-intake-showcase-mobile.mp4?v=20260427-lowres1"
      : "/projects/notion-client-intake/notion-client-intake-showcase.mp4?v=20260427-lowres1"
  }
  if (slug === "reelwish") {
    return isMobile
      ? "/projects/reelwish/showcase-mobile.mp4?v=20260427-lowres1"
      : "/projects/reelwish/showcase.mp4?v=20260427-lowres1"
  }
  if (slug === "mina") {
    return isMobile
      ? "/projects/mina/mina-showcase-mobile.mp4?v=20260427-lowres1"
      : "/projects/mina/mina-showcase.mp4?v=20260427-lowres1"
  }
  return null
}

function showcaseMediaPositionClass(slug: string) {
  if (slug === "mina") return "absolute right-0 bottom-0 h-full w-full object-cover"
  return "absolute inset-0 h-full w-full object-cover"
}

export default function FeaturedShowcase({ projects }: Props) {
  const N = projects.length
  // Vertical scroll needed to advance one project card (as a fraction of viewport height).
  // Lower = faster horizontal advance.
  const STEP_VH_DESKTOP = 0.34
  const CARD_GAP_PX_DESKTOP = 48

  const sectionRef = useRef<HTMLElement>(null)
  const stickyPanelRef = useRef<HTMLDivElement>(null)
  const trackRef   = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLDivElement>(null)
  const hasEnteredRef = useRef(false)
  const activeIndexRef = useRef(-1)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateMobile = () => setIsMobile(window.innerWidth < 768)
    updateMobile()
    window.addEventListener("resize", updateMobile)
    return () => window.removeEventListener("resize", updateMobile)
  }, [])

  useEffect(() => {
    const restartVideoAt = (index: number) => {
      const video = videoRefs.current[index]
      if (!video) return
      try {
        video.currentTime = 0
      } catch {
        // Some browsers block seeking until metadata is available.
      }
      video
        .play()
        .catch(() => {
          // Ignore autoplay promise rejections in restrictive browsers.
        })
    }

    const update = () => {
      const section = sectionRef.current
      const stickyPanel = stickyPanelRef.current
      const track   = trackRef.current
      if (!section || !track || !stickyPanel) return

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
      const inSection = sy + winH > sectionTop && sy < sectionTop + sectionH
      const enterTriggerY = sectionTop - winH * 0.18
      if (!hasEnteredRef.current && sy >= enterTriggerY) {
        hasEnteredRef.current = true
        stickyPanel.style.transform = "translateY(0px)"
      }
      const rawIndex = progress * N
      // Mobile favors one-by-one progression; floor avoids jumping at half thresholds.
      const active = Math.min(N - 1, Math.max(0, Math.floor(rawIndex)))

      // Pixel-based translateX — clamp to actual max to avoid blank tail on last card.
      const firstCard = track.firstElementChild as HTMLElement | null
      const trackStyles = window.getComputedStyle(track)
      const trackGap = Number.parseFloat(trackStyles.columnGap || trackStyles.gap || "0") || 0
      // Mobile must snap at exact viewport-width increments to avoid mixed-card frames.
      const stepW = isMobile ? viewportW : (firstCard?.offsetWidth ?? viewportW) + trackGap
      const rawTx = active * stepW
      const maxTx = Math.max(0, track.scrollWidth - viewportW)
      const tx = Math.min(rawTx, maxTx)
      track.style.transform = `translate3d(-${tx}px, 0, 0)`
      track.style.transition = "transform 360ms cubic-bezier(0.22, 1, 0.36, 1)"

      if (inSection && activeIndexRef.current !== active) {
        activeIndexRef.current = active
        restartVideoAt(active)
      }

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
  }, [N, isMobile])

  const stepVh = isMobile ? STEP_VH_DESKTOP * 3 : STEP_VH_DESKTOP

  return (
    <section
      ref={sectionRef}
      className="relative"
      // Total height = sticky viewport (100vh) + per-step scroll distance for remaining cards.
      style={{ height: isMobile ? `calc(${100 + (N - 1) * stepVh * 100}vh)` : `calc(${100 + (N - 1) * stepVh * 100}vh - 60px)` }}
    >
      {/* Sticky viewport panel with padding — creates inset effect */}
      <div
        ref={stickyPanelRef}
        className="sticky top-0 h-screen w-full overflow-hidden bg-background flex flex-col p-4 md:px-[60px] md:pb-[60px] md:pt-[120px]"
        style={{
          transform: "translateY(140px)",
          transition: "transform 700ms cubic-bezier(0.22, 1, 0.36, 1)",
          willChange: "transform",
        }}
      >

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
            className="flex h-full gap-0 md:gap-12"
            style={{ willChange: "transform" }}
          >
            {projects.map((p, i) => {
              const cardBody = (
                <>
                {/* Image-first: no text overlay — matches Section 2 bento readability */}
                <div className="relative flex-1 min-h-[56vh] md:min-h-[calc(64vh+40px)] rounded-md overflow-hidden">
                  {showcaseVideoSrc(p.slug, isMobile) ? (
                    <video
                      key={`${p.slug}-${isMobile ? "mobile" : "desktop"}-${showcaseVideoSrc(p.slug, isMobile)}`}
                      ref={(el) => {
                        videoRefs.current[i] = el
                      }}
                      className={showcaseMediaPositionClass(p.slug)}
                      src={showcaseVideoSrc(p.slug, isMobile) ?? undefined}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  ) : (
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundColor: p.color,
                        backgroundImage: `url(${getBentoImage(p.slug)}), url(${p.thumbnail})`,
                      }}
                    />
                  )}
                </div>

                <div className="relative z-10 shrink-0 px-4 py-4 md:px-8 md:py-5 bg-transparent">
                  <div className="flex items-start md:justify-between gap-3">
                    <div className="flex items-start gap-2.5 min-w-0 w-full md:w-auto">
                      <img
                        src={bentoIconSrc(p.slug)}
                        alt=""
                        className="size-[40px] md:size-[30px] rounded-[4px] object-cover shrink-0 ring-1 ring-black/5 mt-px"
                        onError={(e) => {
                          const el = e.currentTarget
                          el.onerror = null
                          el.src = "/favicon-s.png"
                        }}
                      />
                      <div className="min-w-0 ml-[14px] flex-1">
                        <h2 className="text-[18px] md:text-[24px] font-semibold leading-tight text-foreground truncate">
                          {p.title}
                        </h2>
                        <p className="text-[12px] md:text-[14px] text-muted-foreground leading-snug line-clamp-1 mt-0.5">
                          {p.subtitle}
                        </p>
                        <span className="mt-3 inline-flex w-fit items-center gap-1.5 whitespace-nowrap text-xs md:text-sm font-semibold text-foreground bg-white px-4 py-2 rounded-full shadow-[0_10px_24px_-16px_rgba(0,0,0,0.35)] group-hover:bg-white/90 transition-colors">
                          View case study
                        </span>
                      </div>
                    </div>
                    <span className="hidden md:inline-flex shrink-0 self-start items-center text-[12px] font-medium text-foreground/80 bg-muted px-3 py-1.5 rounded-[6px]">
                      {[p.year, ...(p.badges ?? []), p.categoryLabel].join(" ")}
                    </span>
                  </div>
                </div>
                </>
              )

              const commonClassName = "h-full w-full min-w-full shrink-0 relative flex flex-col text-left group"
              if (!PROJECT_DETAILS_ENABLED) {
                return (
                  <div key={p.slug} className={commonClassName}>
                    {cardBody}
                  </div>
                )
              }

              return (
                <Link key={p.slug} href={`/projects/${p.slug}?from=home`} className={commonClassName}>
                  {cardBody}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
