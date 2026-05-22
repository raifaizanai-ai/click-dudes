import type { Metadata } from "next"
import { AdSenseVsAdXPage } from "@/sections/resources/AdSenseVsAdXPage"

export const metadata: Metadata = {
  title: "AdSense vs AdX — Click Dudes | Complete Comparison Guide",
  description: "AdSense vs Google AdX — detailed comparison of CPMs, fill rates, eligibility, and when to upgrade. Full guide for publishers.",
  openGraph: { title: "AdSense vs AdX — Click Dudes", description: "Full AdSense vs AdX comparison for publishers.", url: "https://clickdudes.com/resources/adsense-vs-adx", siteName: "Click Dudes", type: "website" },
  twitter: { card: "summary_large_image", title: "AdSense vs AdX — Click Dudes", description: "Full AdSense vs AdX comparison for publishers." },
  alternates: { canonical: "https://clickdudes.com/resources/adsense-vs-adx" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",          item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Resources",     item: "https://clickdudes.com/resources" },
    { "@type": "ListItem", position: 3, name: "AdSense vs AdX", item: "https://clickdudes.com/resources/adsense-vs-adx" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AdSenseVsAdXPage />
    </>
  )
}
