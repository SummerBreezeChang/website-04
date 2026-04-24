"use client"

import Image from "next/image"
import Navigation from "@/components/navigation"

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="flex w-full justify-center overflow-x-clip px-4 pt-[348px] pb-[80px] md:pt-[380px]">
        <div className="w-full min-w-0 max-w-[680px] text-left">
          <div className="mb-6 flex flex-row flex-wrap items-center justify-between gap-x-4 gap-y-4">
            <div className="flex min-w-0 items-center gap-4">
              <div className="w-16 h-16 shrink-0 rounded-full overflow-hidden border border-border/60 shadow-sm">
                <Image
                  src="/headshot.jpg"
                  alt="Summer Chang"
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold font-mono tracking-tight">Say Hi</h1>
            </div>
            <a
              href="mailto:contact@summerchang.co"
              className="interactive-glow-btn inline-flex min-w-[140px] shrink-0 items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Get in touch
            </a>
          </div>

          <p className="text-sm text-muted-foreground mb-6">
            Have a project in mind, a question, or just want to connect?
            <br /> I&apos;d love to hear from you.
          </p>

          <div className="flex flex-col items-start gap-3">
            <a
              href="mailto:contact@summerchang.co"
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              <span className="font-semibold">Email:</span>
              <span className="underline underline-offset-2">contact@summerchang.co</span>
            </a>
            <a
              href="https://www.linkedin.com/in/summerchang/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
            >
              <LinkedInIcon className="w-4 h-4" />
              <span className="font-semibold">LinkedIn:</span>
              <span className="underline underline-offset-2">linkedin.com/in/summerchang</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
