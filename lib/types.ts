// Section types for flexible project storytelling
// Each project gets its own combination of sections

export type SectionType =
  | "text"           // Body text with optional quote
  | "three-col"      // Three column comparison
  | "two-col"        // Two column layout
  | "flow"           // Horizontal process flow
  | "cards"          // Stacked decision/feature cards
  | "before-after"   // Side-by-side comparison table
  | "numbered-list"  // Numbered insights/principles
  | "stats-sidebar"  // Text left, stats right (for tl;dr)
  | "image-full"     // Full width image placeholder
  | "image-grid"     // 2 or 3 column image grid
  | "callout"        // Icon + title + description card
  | "cta"            // Call to action box with link

export interface Section {
  num: string        // "01", "02", etc.
  label: string      // "problem", "strategy", etc.
  headline: string   // Punchy editorial headline
  type: SectionType
  body?: string
  quote?: string
  columns?: { title: string; color?: string; text: string }[]
  steps?: { title: string; desc: string }[]
  cards?: { title: string; desc: string }[]
  stats?: { value: string; label: string }[]
  beforeAfter?: { label: string; before: string; after: string }[]
  items?: string[]   // For numbered lists
  callout?: { icon: string; title: string; desc: string }
  images?: string[]  // Placeholder descriptions
  cta?: { title: string; desc: string; label: string; url: string }
}

export interface ProjectMeta {
  slug: string
  title: string          // Monospace hero title
  subtitle: string       // One-liner under title
  category: "ai-software" | "digital-product" | "physical-product"
  categoryLabel: string
  color: string
  year: string
  role: string
  client?: string
  timeline?: string
  tools?: string
  tags: string[]
  featured: boolean
  badges?: string[]      // "Founder", "Open Source", "1st Place", "IDEA Award"
  thumbnail: string
  heroImage: string      // Description of hero image placeholder
  tldr: string
  tldrStats?: { value: string; label: string }[]
  sections: Section[]
  nextBox?: { text: string }
  ctaBox?: { title: string; desc: string; label: string; url: string }
}
