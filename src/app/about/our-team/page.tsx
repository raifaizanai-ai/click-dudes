import type { Metadata } from "next"
import { OurTeamPage } from "@/sections/about/OurTeamPage"

export const metadata: Metadata = {
  title: "Our Team — Click Dudes | The People Behind the Platform",
  description: "Meet the team behind Click Dudes, ad-tech veterans, engineers, and publisher advocates building the future of monetization.",
  openGraph: { title: "Our Team, Click Dudes", description: "Meet the people building Click Dudes.", url: "https://clickdudes.com/about/our-team", siteName: "Click Dudes", type: "website" },
  twitter: { card: "summary_large_image", title: "Our Team, Click Dudes", description: "Meet the people building Click Dudes." },
  alternates: { canonical: "https://clickdudes.com/about/our-team" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",      item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "About",     item: "https://clickdudes.com/about/our-mission" },
    { "@type": "ListItem", position: 3, name: "Our Team",  item: "https://clickdudes.com/about/our-team" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <OurTeamPage />
    </>
  )
}
