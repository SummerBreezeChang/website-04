import Link from "next/link"
import { ArrowLeft, ArrowUpRight } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { projects } from "@/lib/projects-v2"

export default function MoreProjectsPage() {
  const nonFeatured = projects.filter((p) => !p.featured)

  // Client Ops Kit template links
  const opsKitTemplates = [
    { label: "Notion CRM template", url: "#" },
    { label: "n8n automation workflow", url: "https://creators.n8n.io/workflows/9803" },
    { label: "Full Kit setup guide", url: "#" },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-5xl mx-auto px-6 md:px-8 pt-24 pb-16">
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
          {nonFeatured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="rounded-2xl overflow-hidden border bg-card group hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div
                className="aspect-[4/3] flex items-center justify-center relative"
                style={{ backgroundColor: project.color }}
              >
                <span className="text-white/40 text-xs font-semibold">
                  {project.title}
                </span>
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
              <div className="p-4">
                <span className="text-[10px] font-bold text-primary border border-primary/20 rounded-full px-2 py-0.5">
                  {project.categoryLabel}
                </span>
                <h4 className="text-base font-bold mt-2 mb-1">{project.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {project.subtitle}
                </p>

                {/* Special: Client Ops Kit template links */}
                {project.slug === "client-ops-kit" && (
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-[10px] font-semibold text-muted-foreground mb-2">
                      Templates included:
                    </p>
                    {opsKitTemplates.map((tpl) => (
                      <div
                        key={tpl.label}
                        className="flex items-center gap-1.5 mb-1 text-[11px] text-primary"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {tpl.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
