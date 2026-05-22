import type { Metadata } from "next"
import { OurVisionPage } from "@/sections/about/OurVisionPage"

export const metadata: Metadata = {
  title: "Our Vision — Click Dudes | The Future of Publisher Monetization",
  description: "Click Dudes' vision for the future of AI-powered programmatic advertising — a world where every publisher earns their true inventory value.",
  openGraph: { title: "Our Vision — Click Dudes", description: "The future of AI-powered publisher monetization.", url: "https://clickdudes.com/about/our-vision", siteName: "Click Dudes", type: "website" },
  twitter: { card: "summary_large_image", title: "Our Vision — Click Dudes", description: "The future of AI-powered publisher monetization." },
  alternates: { canonical: "https://clickdudes.com/about/our-vision" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",        item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "About",       item: "https://clickdudes.com/about/our-mission" },
    { "@type": "ListItem", position: 3, name: "Our Vision",  item: "https://clickdudes.com/about/our-vision" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <OurVisionPage />
    </>
  )
}
