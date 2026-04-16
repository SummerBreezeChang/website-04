import type React from "react"
import type { Metadata } from "next"
import { Poppins, Crimson_Text } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
})

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Summer Chang — AI & Product Designer",
  description:
    "Senior product designer specializing in AI-powered software, brand strategy, and design consulting for startups.",
  icons: {
    icon: "/favicon-s.png",
    apple: "/favicon-s.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${crimsonText.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
