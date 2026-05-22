import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { CustomCursor } from "@/components/shared/CustomCursor"
import { SITE } from "@/lib/constants"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets:  ["latin"],
  display:  "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets:  ["latin"],
  display:  "swap",
})

export const metadata: Metadata = {
  title: {
    default:  `${SITE.name} | ${SITE.tagline}`,
    template: "%s",
  },
  description:  SITE.description,
  metadataBase: new URL(SITE.url),
  openGraph: {
    siteName: SITE.name,
    type:     "website",
    locale:   "en_US",
    images: [{
      url:    "/logo/clickdudes-logo.png",
      width:  1200,
      height: 630,
      alt:    "Click Dudes — Turning Clicks Into Revenue",
    }],
  },
  twitter: {
    card:    "summary_large_image",
    creator: SITE.twitter,
    images:  ["/logo/clickdudes-logo.png"],
  },
  robots: {
    index:     true,
    follow:    true,
    googleBot: { index: true, follow: true },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#8B5CF6" },
    { media: "(prefers-color-scheme: dark)",  color: "#8B5CF6" },
  ],
  width:        "device-width",
  initialScale: 1,
}

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Click Dudes",
  url: "https://clickdudes.com",
  logo: "https://clickdudes.com/logo/clickdudes-logo.png",
  sameAs: ["https://twitter.com/clickdudes", "https://linkedin.com/company/clickdudes"],
  contactPoint: { "@type": "ContactPoint", email: "contact@clickdudes.com", contactType: "customer support" },
  description: "AI-powered ad-tech and monetization platform for web, app, and CTV publishers.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "86-90 Paul Street",
    addressLocality: "London",
    addressRegion: "England",
    postalCode: "EC2A 4NE",
    addressCountry: "GB",
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Click Dudes",
  url: "https://clickdudes.com",
  description: "AI-powered ad monetization platform for web, app, and CTV publishers — Google AdX, Header Bidding, AI Optimization.",
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: "https://clickdudes.com/blog?q={search_term_string}" },
    "query-input": "required name=search_term_string",
  },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-dvh antialiased flex flex-col bg-surface-base">

        {/* Fixed ambient background — animates independently of scroll */}
        <div aria-hidden="true" className="fixed inset-0 -z-10 pointer-events-none ambient-canvas" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Skip-to-content link — keyboard accessibility */}
        <a
          href="#main"
          className={[
            "sr-only focus:not-sr-only",
            "focus:fixed focus:top-4 focus:left-4 focus:z-[9999]",
            "focus:rounded-xl focus:bg-brand-purple focus:px-4 focus:py-2",
            "focus:text-sm focus:font-medium focus:text-white focus:outline-none",
            "focus:shadow-[0_4px_20px_rgba(139,92,246,0.4)]",
          ].join(" ")}
        >
          Skip to main content
        </a>

        <CustomCursor />
        <Navbar />

        <main id="main" className="flex-1 flex flex-col">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  )
}
