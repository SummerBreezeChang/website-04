import Link from "next/link"
import Navigation from "@/components/navigation"
import BeehiivSubscribeEmbed from "@/components/beehiiv-subscribe-embed"

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="px-4 pt-36 pb-12 md:pt-40">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 md:mb-8">
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">Blog</h1>
            <p className="mt-2 text-sm md:text-base text-muted-foreground">
              Postfit newsletter — subscribe below. Full archive on Beehiiv.
            </p>
          </div>

          <div className="rounded-2xl border bg-card p-6 md:p-8 flex flex-col items-start gap-6">
            <BeehiivSubscribeEmbed />
            <p className="text-sm text-muted-foreground">
              Read posts and archive on{" "}
              <Link
                href="https://postfit.beehiiv.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground text-foreground font-medium"
              >
                postfit.beehiiv.com
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}
