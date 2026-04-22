import Link from "next/link"
import Navigation from "@/components/navigation"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="px-4 pt-[188px] pb-12 md:pt-[220px]">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl border bg-card overflow-hidden">
            <iframe
              src="https://postfit.beehiiv.com/"
              title="Postfit archive"
              className="w-full"
              style={{ minHeight: "2600px", border: 0 }}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
