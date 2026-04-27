"use client"

import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Moon, Sun } from "lucide-react"
import { projects } from "@/lib/projects-v2"
import { PROJECT_DETAILS_ENABLED } from "@/lib/site-flags"

const caseStudySlugs = ["playdates", "notion-client-intake", "petcard", "reelwish", "mina", "bookee"]

export default function Navigation() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [scrolled, setScrolled]     = useState(false)
  const [caseOpen, setCaseOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  const { scrollY } = useScroll()

  const navBgOpacity    = useTransform(scrollY, [0, 200], [0, 1])
  const navShadow       = useTransform(scrollY, [100, 300], [0, 0.06])
  const caseStudies = useMemo(() => caseStudySlugs.map((slug) => projects.find((p) => p.slug === slug)).filter(Boolean), [])

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 60))
    return unsub
  }, [scrollY])

  useEffect(() => {
    if (!caseOpen) return
    const onScroll = () => setCaseOpen(false)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [caseOpen])

  useEffect(() => {
    if (!caseOpen) return
    const onPointerDown = (event: MouseEvent) => {
      const target = event.target as Node
      const menuEl = document.getElementById("case-studies-menu-anchor")
      if (menuEl && !menuEl.contains(target)) {
        setCaseOpen(false)
      }
    }
    document.addEventListener("mousedown", onPointerDown)
    return () => document.removeEventListener("mousedown", onPointerDown)
  }, [caseOpen])

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark")
    setDarkMode(isDark)
  }, [])

  useEffect(() => {
    const updateMobile = () => setIsMobile(window.innerWidth < 768)
    updateMobile()
    window.addEventListener("resize", updateMobile)
    return () => window.removeEventListener("resize", updateMobile)
  }, [])

  useEffect(() => {
    if (!mobileOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileOpen])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const toggleDarkMode = () => {
    const next = !darkMode
    setDarkMode(next)
    document.documentElement.classList.toggle("dark", next)
  }

  /** Dark + transparent nav → light text; dark + glass pill → dark text; light theme unchanged */
  const navLinkColor = darkMode
    ? scrolled
      ? "rgba(17,24,39,0.88)"
      : "rgba(255,255,255,0.92)"
    : scrolled
      ? "#667085"
      : "rgba(41,41,41,0.86)"

  return (
    <>
      {/* ── Main nav ──
          Mobile: at top = full width, logo left + menu right, no glass.
          After scroll = centered oval bar with frosted glass (like desktop). */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[200] flex w-full justify-center"
        style={{ paddingTop: isMobile ? (scrolled ? 10 : 18) : scrolled ? 12 : 20 }}
      >
        <motion.nav
          className={
            isMobile
              ? "relative flex w-full min-w-0 max-w-none items-center justify-between self-stretch overflow-visible px-4 transition-[width,background-color,box-shadow,border-radius,backdrop-filter] duration-300 ease-out"
              : "relative grid grid-cols-[1fr_auto_1fr] items-center px-5 md:px-8 overflow-visible"
          }
          style={
            isMobile
              ? {
                  width: scrolled ? "min(100%, 92%)" : "100%",
                  maxWidth: scrolled ? 420 : "100%",
                  minHeight: 52,
                  borderRadius: scrolled ? 9999 : 0,
                  paddingTop: 10,
                  paddingBottom: 10,
                  marginTop: scrolled ? 10 : 4,
                  marginBottom: 8,
                  backgroundColor: scrolled ? "rgba(255, 255, 255, 0.86)" : "rgba(0,0,0,0)",
                  backdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
                  WebkitBackdropFilter: scrolled ? "blur(20px) saturate(180%)" : "none",
                  border: scrolled ? "1px solid rgba(255,255,255,0.55)" : "1px solid rgba(0,0,0,0)",
                  boxShadow: scrolled ? "0 8px 32px rgba(15, 23, 42, 0.1)" : "none",
                }
              : {
                  width:           scrolled ? "68%" : "100%",
                  borderRadius:    scrolled ? 38 : 28,
                  paddingTop:      14,
                  paddingBottom:   14,
                  marginTop:       16,
                  marginBottom:    16,
                  backgroundColor: useTransform(
                    navBgOpacity,
                    (v) => `rgba(255, 255, 255, ${v * 0.82})`
                  ),
                  backdropFilter:  scrolled ? "blur(24px) saturate(180%)" : "none",
                  border:          darkMode
                    ? "1px solid rgba(255,255,255,0)"
                    : scrolled
                      ? "1px solid rgba(255,255,255,0.72)"
                      : "1px solid rgba(255,255,255,0)",
                  boxShadow: useTransform(
                    navShadow,
                    (v) => `0 10px 34px rgba(15, 23, 42, ${v}), inset 0 1px 0 rgba(255,255,255,${0.8 * v})`
                  ),
                }
          }
        >
          {/* Clip visual layers to rounded nav shape */}
          {(!isMobile || scrolled) && (
            <div className="pointer-events-none absolute inset-0 rounded-[inherit] overflow-hidden">
              <div
                className="absolute inset-x-0 top-0 h-1/2"
                style={{
                  background:
                    scrolled
                      ? "linear-gradient(180deg, rgba(255,255,255,0.62) 0%, rgba(255,255,255,0.16) 60%, rgba(255,255,255,0) 100%)"
                      : "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0) 100%)",
                }}
              />
              <div
                className="absolute inset-0 rounded-[inherit]"
                style={{
                  boxShadow: isMobile || darkMode ? "none" : "inset 0 -1px 0 rgba(255,255,255,0.4)",
                }}
              />
            </div>
          )}

          {/* Left cluster — links */}
          <div className="hidden md:flex items-center gap-8 justify-self-start">
            <div id="case-studies-menu-anchor" className="relative">
              <button
                onClick={() => {
                  if (!PROJECT_DETAILS_ENABLED) return
                  setCaseOpen((v) => !v)
                }}
                className="inline-flex items-center gap-1.5 text-[14px] font-medium transition-colors"
                style={{ color: navLinkColor }}
              >
                Case Studies
              </button>

              <AnimatePresence>
                {caseOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 top-[calc(100%+12px)] w-[760px] rounded-2xl border border-border bg-card p-5 shadow-[0_24px_70px_-30px_rgba(15,23,42,0.3)] z-[260]"
                  >
                    <div className="grid grid-cols-2 gap-x-5 gap-y-1">
                      {caseStudies.map((item) =>
                        PROJECT_DETAILS_ENABLED ? (
                          <Link
                            key={item!.slug}
                            href={`/projects/${item!.slug}?from=home`}
                            onClick={() => setCaseOpen(false)}
                            className="flex items-stretch gap-4 rounded-xl px-2 py-2.5 hover:bg-black/[0.03] transition-colors"
                          >
                            <div className="w-16 h-[58px] rounded-[12px] overflow-hidden shrink-0 bg-muted">
                              <img src={item!.thumbnail} alt={item!.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="min-h-[58px] flex flex-col justify-center">
                              <p className="text-[16px] font-semibold text-card-foreground leading-tight">{item!.title}</p>
                              <p className="text-[13px] text-muted-foreground leading-tight mt-1">{item!.subtitle}</p>
                            </div>
                          </Link>
                        ) : (
                          <div
                            key={item!.slug}
                            className="flex items-stretch gap-4 rounded-xl px-2 py-2.5 opacity-75 cursor-default"
                          >
                            <div className="w-16 h-[58px] rounded-[12px] overflow-hidden shrink-0 bg-muted">
                              <img src={item!.thumbnail} alt={item!.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="min-h-[58px] flex flex-col justify-center">
                              <p className="text-[16px] font-semibold text-card-foreground leading-tight">{item!.title}</p>
                              <p className="text-[13px] text-muted-foreground leading-tight mt-1">{item!.subtitle}</p>
                            </div>
                          </div>
                        )
                      )}
                    </div>

                    {PROJECT_DETAILS_ENABLED && (
                      <>
                        <div className="my-4 border-t border-black/10" />
                        <Link
                          href="/more"
                          onClick={() => setCaseOpen(false)}
                          className="block rounded-xl px-2 py-2 hover:bg-black/[0.03] transition-colors"
                        >
                          <p className="text-[16px] font-semibold text-card-foreground">Browse</p>
                          <p className="text-[13px] text-muted-foreground mt-1">See all case studies</p>
                        </Link>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/about"
              className="font-medium transition-colors duration-300"
              style={{ fontSize: "14px", color: navLinkColor }}
            >
              About
            </Link>
            <Link
              href="/blog"
              className="font-medium transition-colors duration-300"
              style={{ fontSize: "14px", color: navLinkColor }}
            >
              Blog
            </Link>
          </div>

          {/* Center logo */}
          <Link href="/" className="hidden md:block justify-self-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/654ed48ab10a1e0878b75a4f/92df0c43-0692-4655-a873-47801bbd2e5d/logo2.png?format=1500w"
              alt="Summer Chang"
              className="h-7 w-auto transition-all duration-300"
              style={{
                filter: scrolled
                  ? "none"
                  : darkMode
                    ? "brightness(0) invert(1)"
                    : "brightness(0) saturate(100%)",
                opacity: scrolled ? 1 : 0.9,
              }}
            />
          </Link>

          {/* Mobile center brand */}
          <Link href="/" className="relative z-10 shrink-0 md:hidden">
            <img
              src="https://images.squarespace-cdn.com/content/v1/654ed48ab10a1e0878b75a4f/92df0c43-0692-4655-a873-47801bbd2e5d/logo2.png?format=1500w"
              alt="Summer Chang"
              className="h-5 w-auto"
              style={{
                filter: darkMode
                  ? scrolled
                    ? "none"
                    : "brightness(0) invert(1)"
                  : "brightness(0) saturate(100%)",
                opacity: 0.95,
              }}
            />
          </Link>

          {/* Mobile — hamburger */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="relative z-10 md:hidden p-1 shrink-0"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="w-5 h-5 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{ color: darkMode ? (scrolled ? "#1a1a1a" : "rgba(255,255,255,0.92)") : "#1a1a1a" }}
            >
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden md:flex items-center gap-3 justify-self-end">
            <button
              onClick={toggleDarkMode}
              className="inline-flex w-10 h-10 items-center justify-center rounded-xl border border-black/10 bg-white/70 hover:bg-white dark:bg-white/10 dark:border-white/20 dark:hover:bg-white/20 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Moon className="w-4 h-4 text-white" /> : <Sun className="w-4 h-4 text-[#F59E0B]" />}
            </button>
            <Link
              href="/contact"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary/15 px-4 text-primary hover:bg-primary/25 transition-colors"
              aria-label="Contact call to action"
            >
              <span className="text-sm font-semibold">Contact me</span>
            </Link>
          </div>
        </motion.nav>
      </motion.div>

      {/* ── Mobile dropdown menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[300] bg-black/20 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="fixed top-[88px] left-4 right-4 z-[400] rounded-2xl border border-border bg-card p-4 shadow-[0_24px_70px_-30px_rgba(15,23,42,0.3)] md:hidden"
            >
              <div className="space-y-1">
                <Link href="/#projects" onClick={() => setMobileOpen(false)} className="block rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-black/[0.03] transition-colors">
                  Case Studies
                </Link>
                <Link href="/about" onClick={() => setMobileOpen(false)} className="block rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-black/[0.03] transition-colors">
                  About
                </Link>
                <Link href="/blog" onClick={() => setMobileOpen(false)} className="block rounded-xl px-3 py-3 text-base font-medium text-foreground hover:bg-black/[0.03] transition-colors">
                  Blog
                </Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="mt-2 inline-flex w-full items-center justify-center rounded-xl bg-primary text-primary-foreground px-4 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors">
                  Contact me
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
