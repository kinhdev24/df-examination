import { locales } from "@/shared/config"
import "@/styles/globals.css"
import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html suppressHydrationWarning>
      <body className={plus_jakarta_sans.className}>{children}</body>
    </html>
  )
}
