import type { Metadata } from "next"
import { OurMissionPage } from "@/sections/about/OurMissionPage"

export const metadata: Metadata = {
  title: "Our Mission — Click Dudes | Publisher-First Monetization",
  description: "Click Dudes was built to give independent publishers the same ad technology advantages as the largest media companies. Our publisher-first mission.",
  openGraph: { title: "Our Mission — Click Dudes", description: "Publisher-first monetization for everyone.", url: "https://clickdudes.com/about/our-mission", siteName: "Click Dudes", type: "website" },
  twitter: { card: "summary_large_image", title: "Our Mission — Click Dudes", description: "Publisher-first monetization for everyone." },
  alternates: { canonical: "https://clickdudes.com/about/our-mission" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",        item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "About",       item: "https://clickdudes.com/about" },
    { "@type": "ListItem", position: 3, name: "Our Mission", item: "https://clickdudes.com/about/our-mission" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <OurMissionPage />
    </>
  )
}
