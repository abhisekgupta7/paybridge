import type { ReactNode } from "react"

import { Sidebar } from "../components/sidebar"
import type { Metadata } from "next"
import { ThemeProvider } from "../components/theme-provider"

export const metadata: Metadata = {
  title: {
    default: "Paybridge Docs",

    template:
      "%s | Paybridge Docs",
  },

  description:
    "Developer-first Nepali payment SDKs.",

  metadataBase: new URL(
    "https://paybridge.dev"
  ),

  openGraph: {
    title: "Paybridge Docs",

    description:
      "Developer-first Nepali payment SDKs.",

    url: "https://paybridge.dev",

    siteName: "Paybridge",

    images: [
      {
        url: "/og.png",

        width: 1200,

        height: 630,
      },
    ],

    locale: "en_US",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title: "Paybridge Docs",

    description:
      "Developer-first Nepali payment SDKs.",

    images: ["/og.png"],
  },
}

export default function DocsLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <ThemeProvider>
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />

      <main className="flex-1 px-8 py-10">
        <div className="mx-auto max-w-4xl">
        
          {children}
        </div>
      </main>
      </div>
    </ThemeProvider>
  )
}