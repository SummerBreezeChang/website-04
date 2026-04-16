"use client"

import type { Section } from "@/lib/types"

export function SectionRenderer({ section: s, color }: { section: Section; color: string }) {
  return (
    <div className="mb-16 md:mb-20">
      {/* Section number + label */}
      <div
        className="flex items-center gap-2 mb-3 text-xs font-medium tracking-wider"
        style={{ color, fontFamily: "var(--font-display)" }}
      >
        <span className="w-4 h-px" style={{ backgroundColor: color }} />
        {s.num} {s.label}
      </div>

      {/* Headline */}
      <h2
        className="text-2xl md:text-[28px] font-medium leading-tight mb-5"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {s.headline}
      </h2>

      {/* Body text */}
      {s.body && (
        <div className="space-y-3 mb-6">
          {s.body.split("\n\n").map((p, i) => (
            <p key={i} className="text-sm text-muted-foreground leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      )}

      {/* Quote */}
      {s.quote && (
        <blockquote
          className="text-xl md:text-[22px] italic leading-snug pl-5 my-7"
          style={{
            borderLeft: `3px solid ${color}`,
            fontFamily: "var(--font-serif)",
          }}
        >
          &ldquo;{s.quote}&rdquo;
        </blockquote>
      )}

      {/* Three columns */}
      {s.type === "three-col" && s.columns && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-7">
          {s.columns.map((col, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-card border"
              style={{
                borderTop: col.color ? `3px solid ${col.color}` : undefined,
                borderRadius: col.color ? "0 0 12px 12px" : "12px",
              }}
            >
              <h4
                className="text-sm font-medium mb-2"
                style={{
                  color: col.color || "inherit",
                  fontFamily: "var(--font-display)",
                }}
              >
                {col.title}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{col.text}</p>
            </div>
          ))}
        </div>
      )}

      {/* Two columns */}
      {s.type === "two-col" && s.columns && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-7">
          {s.columns.map((col, i) => (
            <div key={i} className="p-5 rounded-xl bg-card border">
              <h4
                className="text-sm font-medium mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {col.title}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{col.text}</p>
            </div>
          ))}
        </div>
      )}

      {/* Horizontal flow */}
      {s.type === "flow" && s.steps && (
        <div className="flex gap-0 my-7 overflow-x-auto">
          {s.steps.map((step, i) => (
            <div key={i} className="flex-1 text-center px-3 py-4 relative min-w-[120px]">
              {i < s.steps!.length - 1 && (
                <div
                  className="absolute top-7 right-0 w-full h-px"
                  style={{ backgroundColor: `${color}20` }}
                />
              )}
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-medium mx-auto mb-2 relative z-10"
                style={{
                  backgroundColor: `${color}12`,
                  color,
                  fontFamily: "var(--font-display)",
                }}
              >
                {i + 1}
              </div>
              <p className="text-xs font-semibold mb-1">{step.title}</p>
              <p className="text-[11px] text-muted-foreground leading-snug">{step.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* Decision / feature cards */}
      {s.type === "cards" && s.cards && (
        <div className="space-y-3 my-6">
          {s.cards.map((card, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-card border transition-colors hover:border-muted-foreground/20"
            >
              <h4
                className="text-sm font-medium mb-1.5 flex items-center gap-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: color }}
                />
                {card.title}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* Before / After */}
      {s.type === "before-after" && s.beforeAfter && (
        <div className="grid grid-cols-2 gap-4 my-7">
          <div className="p-5 rounded-xl bg-card border">
            <p
              className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-3 text-center"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Before
            </p>
            {s.beforeAfter.map((row, i) => (
              <div
                key={i}
                className="flex justify-between py-2 border-b border-border/50 last:border-0 text-sm"
              >
                <span className="text-muted-foreground">{row.label}</span>
                <span className="font-medium" style={{ fontFamily: "var(--font-display)" }}>
                  {row.before}
                </span>
              </div>
            ))}
          </div>
          <div className="p-5 rounded-xl bg-card border">
            <p
              className="text-xs font-medium uppercase tracking-wider mb-3 text-center"
              style={{ color, fontFamily: "var(--font-display)" }}
            >
              After
            </p>
            {s.beforeAfter.map((row, i) => (
              <div
                key={i}
                className="flex justify-between py-2 border-b border-border/50 last:border-0 text-sm"
              >
                <span className="text-muted-foreground">{row.label}</span>
                <span className="font-medium" style={{ color, fontFamily: "var(--font-display)" }}>
                  {row.after}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stats (standalone, not in tl;dr) */}
      {s.type === "stats-sidebar" && s.stats && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-7">
          {s.stats.map((stat, i) => (
            <div key={i} className="p-4 rounded-xl bg-card border text-center">
              <p
                className="text-2xl font-medium mb-1"
                style={{ color, fontFamily: "var(--font-display)" }}
              >
                {stat.value}
              </p>
              <p className="text-[11px] text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      )}

      {/* Numbered list (insights/principles) */}
      {s.type === "numbered-list" && s.items && (
        <div className="my-6">
          {s.items.map((item, i) => (
            <div
              key={i}
              className="flex gap-3 items-start py-3.5 border-b border-border/50 last:border-0"
            >
              <span
                className="text-xs font-medium mt-0.5 shrink-0"
                style={{ color, fontFamily: "var(--font-display)" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      )}

      {/* Callout */}
      {s.type === "callout" && s.callout && (
        <div className="flex gap-4 items-start p-5 rounded-xl bg-card border my-6">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center text-base shrink-0"
            style={{ backgroundColor: `${color}10` }}
          >
            {s.callout.icon}
          </div>
          <div>
            <h4
              className="text-sm font-medium mb-1"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {s.callout.title}
            </h4>
            <p className="text-xs text-muted-foreground leading-relaxed">{s.callout.desc}</p>
          </div>
        </div>
      )}

      {/* Full width image placeholder */}
      {s.type === "image-full" && s.images && s.images[0] && (
        <div
          className="w-full aspect-[16/10] rounded-xl my-7 flex items-center justify-center text-xs text-muted-foreground text-center px-4"
          style={{
            backgroundColor: `${color}06`,
            border: `2px dashed ${color}18`,
          }}
        >
          {s.images[0]}
        </div>
      )}

      {/* Image grid */}
      {s.type === "image-grid" && s.images && (
        <div
          className="my-7 gap-3"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${Math.min(s.images.length, 3)}, 1fr)`,
          }}
        >
          {s.images.map((img, i) => (
            <div
              key={i}
              className="aspect-[4/3] rounded-lg flex items-center justify-center text-[11px] text-muted-foreground text-center p-3 leading-snug"
              style={{
                backgroundColor: `${color}06`,
                border: `2px dashed ${color}18`,
              }}
            >
              {img}
            </div>
          ))}
        </div>
      )}

      {/* CTA box */}
      {s.type === "cta" && s.cta && (
        <div className="text-center p-8 rounded-xl bg-card border my-7">
          <h3
            className="text-base font-medium mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {s.cta.title}
          </h3>
          <p className="text-sm text-muted-foreground mb-4">{s.cta.desc}</p>
          <a
            href={s.cta.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold px-5 py-2.5 rounded-full border-2 transition-colors hover:bg-muted"
            style={{ color, borderColor: color }}
          >
            {s.cta.label} ↗
          </a>
        </div>
      )}
    </div>
  )
}
