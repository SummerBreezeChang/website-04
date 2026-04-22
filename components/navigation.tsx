"use client"

import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { Grid3X3, Moon, Sun } from "lucide-react"
import { projects } from "@/lib/projects-v2"

const caseStudySlugs = ["playdates", "notion-client-intake", "petcard", "tca", "mina", "bookee"]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
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
      {/* ── Main nav ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[200] flex justify-center"
        style={{ paddingTop: scrolled ? 12 : 20 }}
      >
        <motion.nav
          className="relative grid grid-cols-[1fr_auto_1fr] items-center px-6 md:px-8 overflow-visible"
          style={{
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
            border:          darkMode ? "1px solid rgba(255,255,255,0)" : scrolled ? "1px solid rgba(255,255,255,0.72)" : "1px solid rgba(255,255,255,0)",
            boxShadow: useTransform(
              navShadow,
              (v) => `0 10px 34px rgba(15, 23, 42, ${v}), inset 0 1px 0 rgba(255,255,255,${0.8 * v})`
            ),
          }}
        >
          {/* Clip visual layers to rounded nav shape */}
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
              style={{ boxShadow: darkMode ? "none" : "inset 0 -1px 0 rgba(255,255,255,0.4)" }}
            />
          </div>

          {/* Left cluster — links */}
          <div className="hidden md:flex items-center gap-8 justify-self-start">
            <div id="case-studies-menu-anchor" className="relative">
              <button
                onClick={() => setCaseOpen((v) => !v)}
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
                    className="absolute left-0 top-[calc(100%+12px)] w-[420px] rounded-2xl border border-border bg-card p-5 shadow-[0_24px_70px_-30px_rgba(15,23,42,0.3)] z-[260]"
                  >
                    <div className="space-y-1">
                      {caseStudies.map((item) => (
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
                      ))}
                    </div>

                    <div className="my-4 border-t border-black/10" />
                    <Link
                      href="/more"
                      onClick={() => setCaseOpen(false)}
                      className="block rounded-xl px-2 py-2 hover:bg-black/[0.03] transition-colors"
                    >
                      <p className="text-[16px] font-semibold text-card-foreground">Browse</p>
                      <p className="text-[13px] text-muted-foreground mt-1">See all case studies</p>
                    </Link>
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

          {/* Mobile — hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden p-1"
            aria-label="Open menu"
          >
            <svg
              className="w-5 h-5 transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              style={{
                color: darkMode ? (scrolled ? "#1a1a1a" : "rgba(255,255,255,0.92)") : scrolled ? "#1a1a1a" : "#fff",
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16" />
            </svg>
          </button>

          <div className="flex items-center gap-3 justify-self-end">
            <button
              onClick={toggleDarkMode}
              className="hidden md:inline-flex w-10 h-10 items-center justify-center rounded-xl border border-black/10 bg-white/70 hover:bg-white dark:bg-white/10 dark:border-white/20 dark:hover:bg-white/20 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Moon className="w-4 h-4 text-white" /> : <Sun className="w-4 h-4 text-[#F59E0B]" />}
            </button>
            <Link
              href="/contact"
              className="hidden md:inline-flex w-10 h-10 items-center justify-center rounded-xl bg-primary/15 text-primary hover:bg-primary/25 transition-colors"
              aria-label="Contact call to action"
            >
              <Grid3X3 className="w-4 h-4" />
            </Link>
          </div>
        </motion.nav>
      </motion.div>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[300] bg-black/30"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween", duration: 0.28 }}
              className="fixed top-0 left-0 bottom-0 z-[400] w-72 bg-background p-8 flex flex-col"
            >
              <button
                onClick={() => setMobileOpen(false)}
                className="mb-8 self-start"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="space-y-6 flex-1">
                <Link href="/#projects" onClick={() => setMobileOpen(false)} className="block text-2xl font-light text-foreground hover:text-primary transition-colors">
                  Case Studies
                </Link>
                <Link href="/about" onClick={() => setMobileOpen(false)} className="block text-2xl font-light text-foreground hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="/blog" onClick={() => setMobileOpen(false)} className="block text-2xl font-light text-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
                <Link href="/contact" onClick={() => setMobileOpen(false)} className="block text-2xl font-light text-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </div>

              <button
                onClick={toggleDarkMode}
                className="mt-8 block w-full text-center px-5 py-3 rounded-full bg-primary text-white font-semibold text-sm"
              >
                Toggle {darkMode ? "Light" : "Dark"} Mode
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
