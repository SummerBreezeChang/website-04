import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navigation from "@/components/navigation"
import { projects } from "@/lib/projects-v2"

export default function MoreProjectsPage() {
  const nonFeatured = projects.filter((p) => !p.featured)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="mx-auto w-full max-w-6xl px-4 md:px-8 pt-[188px] md:pt-[220px] pb-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to home
        </Link>

        <h1 className="text-4xl font-extrabold mb-2">More projects</h1>
        <p className="text-base text-muted-foreground mb-10">
          A broader view of my work across AI, digital products, brand, and physical product design.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {nonFeatured.map((project) => {
            const cardClass =
              "rounded-2xl overflow-hidden border bg-card group hover:-translate-y-1 hover:shadow-lg transition-all block"
            const thumb = (
              <div
                className="aspect-[4/3] relative overflow-hidden"
                style={{ backgroundColor: project.color }}
              >
                <img
                  src={project.thumbnail}
                  alt={`${project.title} preview`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                <div className="absolute top-2 right-2 bg-white/90 rounded-full px-2.5 py-0.5 text-[10px] font-semibold">
                  {project.year}
                </div>
                {project.badges?.map((badge) => (
                  <div
                    key={badge}
                    className="absolute top-2 left-2 bg-white/90 rounded-full px-2.5 py-0.5 text-[10px] font-semibold"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            )
            const body = (
              <div className="p-4">
                <span className="text-[10px] font-bold text-primary border border-primary/20 rounded-full px-2 py-0.5">
                  {project.categoryLabel}
                </span>
                <h4 className="text-base font-bold mt-2 mb-1">{project.title}</h4>
                <p className="mt-1 text-xs leading-relaxed line-clamp-2 min-h-[2.5rem] text-muted-foreground">
                  <span className="font-medium text-foreground/90">{project.subtitle}</span>
                  <span> {project.tldr}</span>
                </p>
              </div>
            )
            if (project.externalUrl) {
              return (
                <a
                  key={project.slug}
                  href={project.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cardClass}
                >
                  {thumb}
                  {body}
                </a>
              )
            }
            return (
              <Link key={project.slug} href={`/projects/${project.slug}?from=more`} className={cardClass}>
                {thumb}
                {body}
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
