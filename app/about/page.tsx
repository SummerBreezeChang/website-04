"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import {
  Mail,
  Download,
  Heart,
  Zap,
  GraduationCap,
  Lightbulb,
  Quote,
  Sparkles,
  Palette,
  Bot,
  Package,
  Database,
  Wrench,
  Code2,
  BrainCircuit,
  Network,
  MonitorSmartphone,
  LayoutTemplate,
  Users,
  Layers,
} from "lucide-react"

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

const ROTATING_WORDS = [
  "lifelong learner",
  "systems thinker",
  "product designer",
  "creative coder",
  "educator",
]

/* ─── Data ─────────────────────────────────────────────────────── */

const VALUES = [
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: "Curiosity-Driven",
    desc: "I build at the edge of design and technology — always learning, always experimenting, always asking why.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Educator at Heart",
    desc: "A previous career in education shaped how I think about mentorship, clarity, and designing for real people.",
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: "Systems Thinking",
    desc: "I see patterns and design for scale — crafting systems that solve the immediate problem and the next ten.",
  },
]

const SKILL_VIEWS = ["Tools", "Skills"] as const
type SkillView = (typeof SKILL_VIEWS)[number]

const TOOL_GROUPS = [
  {
    title: "Design & Prototyping",
    icon: <LayoutTemplate className="w-4 h-4" />,
    tags: ["Figma", "V0", "Framer", "Notion", "Adobe CC"],
  },
  {
    title: "Frontend",
    icon: <Code2 className="w-4 h-4" />,
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    title: "AI & Agents",
    icon: <BrainCircuit className="w-4 h-4" />,
    tags: ["Claude", "GPT-4", "Vapi", "ElevenLabs", "You.com API"],
  },
  {
    title: "Automation & Ops",
    icon: <Network className="w-4 h-4" />,
    tags: ["n8n", "GitHub", "Storybook", "REST APIs", "Product Analytics"],
  },
]

const SKILL_GROUPS = [
  {
    title: "Product Design",
    icon: <MonitorSmartphone className="w-4 h-4" />,
    tags: [
      "0→1 Product Strategy",
      "User Research",
      "Wireframing",
      "Interaction Design",
      "Usability Testing",
    ],
  },
  {
    title: "Systems & Delivery",
    icon: <Wrench className="w-4 h-4" />,
    tags: [
      "Design Systems",
      "Cross-functional Collaboration",
      "Design QA",
      "Implementation Handoff",
      "Rapid Prototyping",
    ],
  },
  {
    title: "Brand & Web",
    icon: <Palette className="w-4 h-4" />,
    tags: [
      "Brand Identity",
      "Website Design",
      "Content Strategy",
      "Visual Direction",
      "Client Workflow Design",
    ],
  },
  {
    title: "AI Product Work",
    icon: <Zap className="w-4 h-4" />,
    tags: [
      "AI UX Flows",
      "Prompt Design",
      "Conversation Design",
      "Agent Experience Design",
      "Automation Mapping",
    ],
  },
]

const EDUCATION_GROUPS = [
  {
    category: "Design Certificates",
    icon: "design",
    items: [
      {
        title: "AI for Designers",
        school: "TDF",
        years: "2024",
        tags: ["Design Thinking", "AI Design", "Workflow"],
      },
      {
        title: "Advanced Figma Training",
        school: "The Futur",
        years: "2024",
        tags: ["Figma", "Prototyping", "Design Systems"],
      },
      {
        title: "UX Design Certificate",
        school: "Google / Coursera",
        years: "2022",
        tags: ["UX", "Research", "Interaction Design"],
      },
    ],
  },
  {
    category: "AI Certificates",
    icon: "ai",
    items: [
      {
        title: "Google AI Professional Certificate",
        school: "Grow with Google",
        years: "2026",
        tags: ["AI Professional", "Applied AI", "Automation"],
      },
      {
        title: "AWS Educate Introduction to Generative AI",
        school: "AWS Educate",
        years: "2024",
        tags: ["Generative AI", "Foundations", "AWS"],
      },
      {
        title: "Introduction to Prompt Engineering for Gen AI",
        school: "LinkedIn Learning",
        years: "2024",
        tags: ["Prompt Engineering", "LLMs", "AI Workflows"],
      },
    ],
  },
  {
    category: "Master",
    icon: "master",
    items: [
      {
        title: "Master of Fine Arts in Industrial Design",
        school: "Academy of Art University",
        years: "",
        tags: ["MFA", "Industrial Design", "Product Thinking"],
      },
    ],
  },
  {
    category: "Bachelor",
    icon: "bachelor",
    items: [
      {
        title: "Bachelor's in Information Management",
        school: "",
        years: "",
        tags: ["Information Management", "Systems", "Business Ops"],
      },
    ],
  },
]

function getEducationIcon(icon: string) {
  switch (icon) {
    case "design":
      return <Palette className="w-3.5 h-3.5" />
    case "ai":
      return <Bot className="w-3.5 h-3.5" />
    case "master":
      return <Package className="w-3.5 h-3.5" />
    case "bachelor":
      return <Database className="w-3.5 h-3.5" />
    default:
      return <GraduationCap className="w-3.5 h-3.5" />
  }
}

const INTERESTS = [
  { label: "AI Tools", bg: "bg-[#e8f4f8]", text: "text-[#1a6b8a]" },
  { label: "Typography", bg: "bg-[#fce4ec]", text: "text-[#b71c4a]" },
  { label: "Systems Design", bg: "bg-[#f3e5f5]", text: "text-[#6a1b9a]" },
  { label: "Education", bg: "bg-[#e8f5e9]", text: "text-[#1b5e20]" },
  { label: "Startups", bg: "bg-[#fff3e0]", text: "text-[#bf360c]" },
  { label: "Productivity", bg: "bg-[#e3f2fd]", text: "text-[#0d47a1]" },
  { label: "Content Strategy", bg: "bg-[#fafafa]", text: "text-[#212121]" },
  { label: "Creative Coding", bg: "bg-[#f9fbe7]", text: "text-[#33691e]" },
]

/** Recommendations — set `image` to a file in /public/testimonials/ when you add headshots */
const TESTIMONIALS: {
  id: string
  name: string
  role: string
  quote: string
  image?: string | null
  cardClass: string
}[] = [
  {
    id: "bill-burns",
    name: "Bill Burns",
    role: "Founder / CEO, Bill Burns Design",
    quote:
      "I have worked with Summer for years. She consistently delivers creative designs, solves problems, pays attention to detail, and meets deadlines.",
    image: null,
    cardClass:
      "bg-sky-100 text-sky-950 border-sky-200/70 dark:bg-sky-950/45 dark:text-sky-50 dark:border-sky-800/50",
  },
  {
    id: "jordan-vasquez",
    name: "Jordan Vasquez",
    role: "CRO, GrubConcierge",
    quote:
      "Summer is an exceptional designer and a true professional who genuinely cares about her clients.",
    image: null,
    cardClass:
      "bg-rose-50 text-rose-950 border-rose-200/70 dark:bg-rose-950/35 dark:text-rose-50 dark:border-rose-800/45",
  },
  {
    id: "joanne-kuan",
    name: "Joanne Kuan",
    role: "Founder / CEO, Mr. Green Bubble",
    quote:
      "Summer was reliable, dedicated, communicative, and very responsible for the work she delivers.",
    image: null,
    cardClass:
      "bg-amber-50 text-amber-950 border-amber-200/70 dark:bg-amber-950/35 dark:text-amber-50 dark:border-amber-800/45",
  },
  {
    id: "dennis-storz",
    name: "Dennis Storz",
    role: "Design leadership",
    quote:
      "Summer showed hard work, diligence, eagerness to learn, creativity, energy, strong collaboration skills, and overall pleasantness as a team member.",
    image: null,
    cardClass:
      "bg-violet-50 text-violet-950 border-violet-200/70 dark:bg-violet-950/35 dark:text-violet-50 dark:border-violet-800/45",
  },
  {
    id: "nancy-yen",
    name: "Nancy Yen",
    role: "CEO / Founder, OmieLife",
    quote:
      "Summer was creative, a fast learner, and incredibly resourceful — we could always count on her to make things happen no matter what!",
    image: null,
    cardClass:
      "bg-emerald-50 text-emerald-950 border-emerald-200/70 dark:bg-emerald-950/35 dark:text-emerald-50 dark:border-emerald-800/45",
  },
  {
    id: "vincent-pascual",
    name: "Vincent Pascual",
    role: "Senior Designer, Woven by Toyota",
    quote:
      "Summer's positive attitude, hard work, and willingness to learn made her a pleasure to work with.",
    image: null,
    cardClass:
      "bg-cyan-50 text-cyan-950 border-cyan-200/70 dark:bg-cyan-950/35 dark:text-cyan-50 dark:border-cyan-800/45",
  },
  {
    id: "denise-pliskin",
    name: "Denise Pliskin",
    role: "Partner, Speck Design",
    quote:
      "Summer was creative, hardworking, and a great team player. She played a crucial role on high-profile clients, including a large Google project.",
    image: null,
    cardClass:
      "bg-fuchsia-50 text-fuchsia-950 border-fuchsia-200/70 dark:bg-fuchsia-950/35 dark:text-fuchsia-50 dark:border-fuchsia-800/45",
  },
  {
    id: "jen-torche",
    name: "Jen Torche",
    role: "Digital Design Lead, Ford Motor Company",
    quote:
      "Summer was a real pleasure to work with. Smart and fun, she always applied strategic design thinking and planning into the projects she was a part of.",
    image: null,
    cardClass:
      "bg-orange-50 text-orange-950 border-orange-200/70 dark:bg-orange-950/35 dark:text-orange-50 dark:border-orange-800/45",
  },
]

/* ─── Component ─────────────────────────────────────────────────── */

export default function AboutPage() {
  const [activeSkillTab, setActiveSkillTab] = useState<SkillView>("Tools")
  const [wordIndex, setWordIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % ROTATING_WORDS.length)
        setVisible(true)
      }, 400)
    }, 2800)
    return () => clearInterval(interval)
  }, [])

  const visibleSkillGroups = activeSkillTab === "Tools" ? TOOL_GROUPS : SKILL_GROUPS

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="px-4 pt-[188px] pb-0 md:pt-[220px] text-center">
        <div className="max-w-6xl mx-auto">

          {/* Profile photo */}
          <div className="mx-auto mb-8 w-32 h-32 rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/headshot.jpg"
              alt="Summer Chang"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* Animated headline */}
          <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-10 font-mono tracking-tight">
            I&apos;m Summer and I am a{" "}
            <span
              className="text-primary inline-block"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(6px)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
              }}
            >
              {ROTATING_WORDS[wordIndex]}
            </span>
          </h1>

          {/* Bio + links — wider, left-aligned like reference */}
          <div className="max-w-4xl mx-auto text-left pb-14">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-5">
              I am a designer with a love of code, systems-thinking, and emerging
              technology. I have a previous career as an educator, which has led
              to a deep curiosity and love of mentoring other designers.
            </p>

            <p className="text-sm text-muted-foreground">
              Let&apos;s connect on{" "}
              <a
                href="https://www.linkedin.com/in/summerchang/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground underline underline-offset-2 hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
              , or email me —{" "}
              <a
                href="mailto:contact@summerchang.co"
                className="font-semibold text-foreground underline underline-offset-2 hover:text-primary transition-colors"
              >
                contact@summerchang.co
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ── Resume Card ─────────────────────────────────────────── */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border border-border bg-card shadow-sm p-6 md:p-8 text-center">
            <h2 className="text-xl font-bold mb-1">Download My Resume</h2>
            <p className="text-sm text-muted-foreground mb-5">
              Get my latest resume in PDF format
            </p>
            <a
              href="/Summer-Chang-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="interactive-glow-btn inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────── */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <SectionLabel icon={<Heart className="w-3.5 h-3.5" />} text="VALUES" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8">What I Value</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-3">
                  {v.icon}
                </div>
                <h3 className="font-bold text-sm mb-1.5">{v.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills ──────────────────────────────────────────────── */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <SectionLabel icon={<Zap className="w-3.5 h-3.5" />} text="SKILLS" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6">My Skillset and Tools</h2>
          <p className="text-sm text-muted-foreground mb-6">
            A snapshot of the tools I use regularly and the capabilities I bring to product teams.
          </p>

          {/* Tools / Skills segmented tabs */}
          <div className="mb-6 rounded-full border border-border bg-card p-1 flex items-center">
            {SKILL_VIEWS.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveSkillTab(cat)}
                className={`w-1/2 px-4 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                  activeSkillTab === cat
                    ? "bg-[#0f4f6a] text-white"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grouped skill cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {visibleSkillGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-border bg-card p-4 shadow-sm"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    {group.icon}
                  </div>
                  <h3 className="text-sm font-bold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full text-[11px] border border-border bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Education ───────────────────────────────────────────── */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <SectionLabel icon={<GraduationCap className="w-3.5 h-3.5" />} text="EDUCATION" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">Degrees and Certificates</h2>
          <p className="text-sm text-muted-foreground mb-8">
            Grouped by credential type with sub-tags for each item.
          </p>

          <div className="space-y-4">
            {EDUCATION_GROUPS.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-border bg-card shadow-sm p-5"
              >
                <h3 className="text-base font-bold mb-4">{group.category}</h3>
                <div className="space-y-3">
                  {group.items.map((item) => (
                    <div
                      key={`${group.category}-${item.title}`}
                      className="flex items-start gap-3 rounded-xl border border-border/70 bg-background/50 p-3"
                    >
                      <div className="mt-0.5 w-7 h-7 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0">
                        {getEducationIcon(group.icon)}
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-sm">{item.title}</p>
                        {(item.school || item.years) && (
                          <p className="text-xs text-muted-foreground">
                            {[item.school, item.years].filter(Boolean).join(" · ")}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-0.5 rounded-full text-[10px] border border-border bg-secondary text-secondary-foreground"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What I'm Thinking About ─────────────────────────────── */}
      <section className="px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <SectionLabel icon={<Lightbulb className="w-3.5 h-3.5" />} text="INSPIRATION" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
            What I&apos;m Thinking About
          </h2>
          <p className="text-sm text-muted-foreground mb-8 max-w-2xl">
            Topics I&apos;m exploring lately — from AI tooling to systems, craft, and how design shows up in product.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {INTERESTS.map((i) => (
              <div
                key={i.label}
                className={`${i.bg} ${i.text} rounded-2xl p-4 flex items-center justify-center text-center text-xs font-semibold h-20 shadow-sm border border-white/60 hover:scale-[1.03] transition-transform duration-300`}
              >
                {i.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Recommendations (looping marquee) ───────────────────── */}
      <section className="pb-16 overflow-hidden">
        <div className="px-4 max-w-6xl mx-auto mb-8">
          <SectionLabel icon={<Quote className="w-3.5 h-3.5" />} text="KIND WORDS" />
          <h2 className="text-2xl md:text-3xl font-extrabold mb-2">
            They&apos;ve said some lovely things
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Recommendations from collaborators, clients, and teams I&apos;ve worked with.
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div className="flex flex-row flex-nowrap gap-4 w-max px-4 testimonial-marquee-track">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, idx) => (
              <article
                key={`${t.id}-${idx}`}
                className={`flex h-auto w-72 max-w-[calc(100vw-3rem)] shrink-0 flex-col rounded-2xl border p-5 shadow-sm sm:w-80 ${t.cardClass}`}
              >
                <TestimonialAvatar name={t.name} image={t.image} />
                <p className="mt-4 text-sm font-bold leading-snug">{t.role}</p>
                <p className="mt-0.5 text-xs font-semibold opacity-90">{t.name}</p>
                <p className="mt-3 text-sm leading-relaxed opacity-95">&ldquo;{t.quote}&rdquo;</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Say Hi ──────────────────────────────────────────────── */}
      <section className="flex w-full justify-center overflow-x-clip px-4 py-[80px]">
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
              <h2 className="text-3xl md:text-5xl font-bold font-mono tracking-tight">
                Say Hi
              </h2>
            </div>
            <Link
              href="/contact"
              className="interactive-glow-btn -translate-x-[56px] inline-flex min-w-[140px] shrink-0 items-center justify-center px-8 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Get in touch
            </Link>
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
              <Mail className="w-4 h-4" />
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

function initialsFromName(name: string) {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ""
  const last = parts.length > 1 ? parts[parts.length - 1]?.[0] ?? "" : ""
  return `${first}${last}`.toUpperCase()
}

function TestimonialAvatar({
  name,
  image,
}: {
  name: string
  image?: string | null
}) {
  if (image) {
    return (
      <Image
        src={image}
        alt={`${name} portrait`}
        width={56}
        height={56}
        className="h-14 w-14 shrink-0 rounded-full object-cover object-center ring-2 ring-white/70 dark:ring-white/15"
      />
    )
  }
  return (
    <div
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white/50 text-sm font-bold ring-2 ring-white/70 dark:bg-white/10 dark:ring-white/15"
      aria-hidden
    >
      {initialsFromName(name)}
    </div>
  )
}

/* ─── Section label pill ─────────────────────────────────────────── */
function SectionLabel({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[11px] font-bold tracking-widest mb-3">
      {icon}
      {text}
    </div>
  )
}
