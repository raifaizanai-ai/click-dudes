import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Analytics } from "@/components/shared/Analytics"
import { SITE } from "@/lib/constants"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets:  ["latin"],
  display:  "swap",
  preload:  true,
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets:  ["latin"],
  display:  "swap",
})

export const metadata: Metadata = {
  title: {
    default:  "Click Dudes | Turning Clicks Into Revenue",
    template: "%s — Click Dudes",
  },
  description:  SITE.description,
  metadataBase: new URL(SITE.url),
  icons: {
    icon:     "/icon.png",
    apple:    "/icon.png",
    shortcut: "/icon.png",
  },
  openGraph: {
    siteName: SITE.name,
    type:     "website",
    locale:   "en_US",
    images: [{
      url:    "/opengraph-image",
      width:  1200,
      height: 630,
      alt:    "Click Dudes — Turning Clicks Into Revenue",
    }],
  },
  twitter: {
    card:    "summary_large_image",
    creator: SITE.twitter,
    images:  ["/opengraph-image"],
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
  "@type": ["Organization", "Corporation"],
  "@id": "https://clickdudes.com/#organization",
  name: "Click Dudes",
  legalName: "Click Dudes Ltd",
  url: "https://clickdudes.com",
  logo: {
    "@type": "ImageObject",
    url: "https://clickdudes.com/logo/clickdudes-logo.png",
    width: 200,
    height: 60,
  },
  image: "https://clickdudes.com/opengraph-image",
  slogan: "Turning Clicks Into Revenue",
  foundingDate: "2021",
  description: "Click Dudes is an AI-powered monetization and digital growth platform helping publishers, apps, brands, and CTV networks maximize revenue through premium demand, Google AdX, Header Bidding, AI optimization, and growth solutions.",
  sameAs: [
    "https://twitter.com/clickdudes",
    "https://www.linkedin.com/company/clickdudes",
    "https://clickdudes.com",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: "contact@clickdudes.com",
      contactType: "customer service",
      availableLanguage: "English",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "86-90 Paul Street",
    addressLocality: "London",
    addressRegion: "England",
    postalCode: "EC2A 4NE",
    addressCountry: "GB",
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "Publisher Monetization",
    "Google AdX",
    "Header Bidding",
    "Programmatic Advertising",
    "AI Ad Optimization",
    "App Monetization",
    "CTV Monetization",
    "SEO Services",
    "Digital Marketing",
    "Media Buying",
    "AdSense Revenue Optimization",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Click Dudes Services & Solutions",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Publisher Monetization", url: "https://clickdudes.com/publisher-solutions/web-monetization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "App Monetization", url: "https://clickdudes.com/publisher-solutions/app-monetization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CTV Monetization", url: "https://clickdudes.com/publisher-solutions/ctv-monetization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google AdX Access & Managed Monetization", url: "https://clickdudes.com/publisher-solutions/google-adx-solutions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Header Bidding Solutions", url: "https://clickdudes.com/publisher-solutions/header-bidding-solutions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Ad Optimization", url: "https://clickdudes.com/publisher-solutions/ai-ad-optimization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AdSense Revenue Optimization", url: "https://clickdudes.com/publisher-solutions/adsense-revenue-optimization" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Services", url: "https://clickdudes.com/services/seo-services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Google Ads Management", url: "https://clickdudes.com/services/google-ads" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Meta Ads Management", url: "https://clickdudes.com/services/meta-ads" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web Development", url: "https://clickdudes.com/services/web-development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "E-Commerce Solutions", url: "https://clickdudes.com/services/e-commerce" } },
    ],
  },
}

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://clickdudes.com/#website",
  name: "Click Dudes",
  url: "https://clickdudes.com",
  description: "AI-powered monetization, advertising, SEO, and publisher growth platform, Google AdX, Header Bidding, AI Optimization, and digital growth solutions.",
  inLanguage: "en",
  publisher: { "@id": "https://clickdudes.com/#organization" },
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
      <head>
        {/* Font preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
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

        <Navbar />

        <main id="main" className="flex-1 flex flex-col">
          {children}
        </main>

        <Footer />
        <Analytics />

      </body>
    </html>
  )
}
