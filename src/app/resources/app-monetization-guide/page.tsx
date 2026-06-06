import type { Metadata } from "next"
import { AppMonetizationGuidePage } from "@/sections/resources/AppMonetizationGuidePage"

export const metadata: Metadata = {
  title: "App Monetization Guide — Click Dudes | In-App Advertising",
  description: "Complete guide to app monetization, in-app bidding, rewarded ads, mediation, format strategy, and revenue optimization for iOS and Android.",
  openGraph: { title: "App Monetization Guide, Click Dudes", description: "Complete guide to in-app advertising revenue.", url: "https://clickdudes.com/resources/app-monetization-guide", siteName: "Click Dudes", type: "website" },
  twitter: { card: "summary_large_image", title: "App Monetization Guide, Click Dudes", description: "Complete guide to in-app advertising revenue." },
  alternates: { canonical: "https://clickdudes.com/resources/app-monetization-guide" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                    item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Resources",               item: "https://clickdudes.com/resources" },
    { "@type": "ListItem", position: 3, name: "App Monetization Guide",  item: "https://clickdudes.com/resources/app-monetization-guide" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AppMonetizationGuidePage />
    </>
  )
}
