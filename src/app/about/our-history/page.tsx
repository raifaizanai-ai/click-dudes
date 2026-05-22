import type { Metadata } from "next"
import { OurHistoryPage } from "@/sections/about/OurHistoryPage"

export const metadata: Metadata = {
  title: "Our History — Click Dudes | From Agency to Global Ad-Tech Platform",
  description: "The story of how Click Dudes evolved from a digital marketing agency in 2022 to a UK-registered global publisher monetization platform serving 1,200+ publishers.",
  openGraph: {
    title: "Our History — Click Dudes",
    description: "From digital marketing agency to global ad-tech platform — the Click Dudes story.",
    url: "https://clickdudes.com/about/our-history",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our History — Click Dudes",
    description: "From digital marketing agency to global ad-tech platform — the Click Dudes story.",
  },
  alternates: { canonical: "https://clickdudes.com/about/our-history" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",         item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "About",        item: "https://clickdudes.com/about/our-mission" },
    { "@type": "ListItem", position: 3, name: "Our History",  item: "https://clickdudes.com/about/our-history" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <OurHistoryPage />
    </>
  )
}
