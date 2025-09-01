import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: "Milgram AI Solutions - Expert en Automatisation Intelligente",
  description:
    "SASU Milgram AI Solutions - Plus de 30 ans d'expérience en IA, BPM, RPA et automatisation intelligente. Consultant expert certifié PEGA et IBM.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${spaceGrotesk.variable} ${dmSans.variable}`}
      >
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
