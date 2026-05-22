import type { Metadata } from "next"
import { RevenueCalculatorPage } from "@/sections/calculator/RevenueCalculatorPage"

export const metadata: Metadata = {
  title: "Revenue Calculator — Click Dudes | Estimate Your Ad Revenue",
  description: "Use Click Dudes' AI-powered revenue calculator to estimate your website's true ad revenue potential — based on your traffic, content vertical, and monetization setup.",
  openGraph: {
    title: "Revenue Calculator — Click Dudes",
    description: "Estimate your real ad revenue potential with AI-powered benchmarks.",
    url: "https://clickdudes.com/revenue-calculator",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Revenue Calculator — Click Dudes",
    description: "Estimate your real ad revenue potential with AI-powered benchmarks.",
  },
  alternates: { canonical: "https://clickdudes.com/revenue-calculator" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",               item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Revenue Calculator", item: "https://clickdudes.com/revenue-calculator" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <RevenueCalculatorPage />
    </>
  )
}
