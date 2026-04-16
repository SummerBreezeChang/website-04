import Link from "next/link"
import { Linkedin, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="px-4 py-12 border-t bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img
              src="https://images.squarespace-cdn.com/content/v1/654ed48ab10a1e0878b75a4f/92df0c43-0692-4655-a873-47801bbd2e5d/logo2.png?format=1500w"
              alt="Summer"
              className="h-6 w-auto"
            />
            <span className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Summer Chang
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
