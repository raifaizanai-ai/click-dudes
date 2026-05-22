import type { Metadata } from "next"
import { SuccessStoriesPage } from "@/sections/resources/SuccessStoriesPage"

export const metadata: Metadata = {
  title: "Success Stories — Click Dudes | Publisher Revenue Growth",
  description: "Real publisher results — case studies, revenue uplifts, and RPM growth from Click Dudes' managed monetization platform.",
  openGraph: { title: "Success Stories — Click Dudes", description: "Real publisher revenue growth case studies.", url: "https://clickdudes.com/resources/success-stories", siteName: "Click Dudes", type: "website" },
  twitter: { card: "summary_large_image", title: "Success Stories — Click Dudes", description: "Real publisher revenue growth case studies." },
  alternates: { canonical: "https://clickdudes.com/resources/success-stories" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",              item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Resources",         item: "https://clickdudes.com/resources" },
    { "@type": "ListItem", position: 3, name: "Success Stories",   item: "https://clickdudes.com/resources/success-stories" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <SuccessStoriesPage />
    </>
  )
}
