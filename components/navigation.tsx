"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion"
import Link from "next/link"

const navLinks = [
  { href: "/#projects",  label: "Portfolio",  external: false },
  { href: "/#services",  label: "Services",   external: false },
  { href: "/#about",     label: "About",      external: false },
  { href: "https://postfit.beehiiv.com/", label: "Blog", external: true },
]

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled]     = useState(false)

  const { scrollY } = useScroll()

  // Nav shrinks from full-width → 68% centered pill between 0–300px scroll
  const navWidth        = useTransform(scrollY, [0, 300], ["100%", "68%"])
  const navBorderRadius = useTransform(scrollY, [0, 300], [0, 50])
  const navPaddingY     = useTransform(scrollY, [0, 300], [20, 12])
  const navBgOpacity    = useTransform(scrollY, [0, 200], [0, 1])
  const navShadow       = useTransform(scrollY, [100, 300], [0, 0.06])

  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setScrolled(v > 60))
    return unsub
  }, [scrollY])

  return (
    <>
      {/* ── Main nav ── */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-[200] flex justify-center"
        style={{ paddingTop: navPaddingY }}
      >
        <motion.nav
          className="flex items-center justify-between px-6 md:px-8"
          style={{
            width:           navWidth,
            borderRadius:    navBorderRadius,
            paddingTop:      26,
            paddingBottom:   24,
            paddingRight:    38,
            marginTop:       16,
            marginBottom:    16,
            backgroundColor: useTransform(
              navBgOpacity,
              (v) => `rgba(255, 245, 230, ${v})`
            ),
            backdropFilter:  scrolled ? "blur(20px)" : "none",
            boxShadow: useTransform(
              navShadow,
              (v) => `0 4px 24px rgba(0, 0, 0, ${v})`
            ),
          }}
        >
          {/* Left — nav links */}
          <div className="hidden md:flex items-center gap-7">
            {navLinks.slice(0, 3).map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium transition-colors duration-300"
                  style={{ fontSize: "14px", color: scrolled ? "#888" : "rgba(41,41,41,0.85)" }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium transition-colors duration-300"
                  style={{ fontSize: "14px", color: scrolled ? "#888" : "rgba(41,41,41,0.85)" }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

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
              style={{ color: scrolled ? "#1a1a1a" : "#fff" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16" />
            </svg>
          </button>

          {/* Center — logo */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
            <img
              src="/summer-logo.png"
              alt="Summer Chang"
              className="h-7 w-auto transition-all duration-300"
              style={{ filter: scrolled ? "none" : "brightness(0) invert(1)" }}
            />
          </Link>

          {/* Right — Blog + Resume */}
          <div className="flex items-center gap-5">
            <a
              href="https://postfit.beehiiv.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block font-medium transition-colors duration-300"
              style={{ fontSize: "14px", color: scrolled ? "#888" : "rgba(41,41,41,0.85)" }}
            >
              Blog ↗
            </a>
            <a
              href="/Summer-Chang-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium transition-colors duration-300"
              style={{ fontSize: "14px", color: scrolled ? "#888" : "rgba(41,41,41,0.85)" }}
            >
              Resume
            </a>
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
                {navLinks.map((link) =>
                  link.external ? (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMobileOpen(false)}
                      className="block text-2xl font-light text-foreground hover:text-primary transition-colors"
                    >
                      {link.label} ↗
                    </a>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block text-2xl font-light text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>

              <a
                href="/Summer-Chang-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full text-center px-5 py-3 rounded-full bg-primary text-white font-semibold text-sm"
              >
                Summer&apos;s Resume
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
