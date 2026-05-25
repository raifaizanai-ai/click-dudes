import type { Metadata } from "next"
import { GoogleAdxSolutionsPage } from "@/sections/solutions/google-adx-solutions/GoogleAdxSolutionsPage"

export const metadata: Metadata = {
  title: "Google AdX Solutions — Click Dudes | Turning Clicks Into Revenue",
  description: "Access the full Google AdX demand pool through our certified MCM partnership. Publishers see 30%+ RPM uplift over AdSense with AI floor optimization and preferred deal access.",
  openGraph: {
    title: "Google AdX Solutions — Click Dudes",
    description: "Access the full Google AdX demand pool through our certified MCM partnership.",
    url: "https://clickdudes.com/publisher-solutions/google-adx-solutions",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google AdX Solutions — Click Dudes",
    description: "Access the full Google AdX demand pool through our certified MCM partnership.",
  },
  alternates: {
    canonical: "https://clickdudes.com/publisher-solutions/google-adx-solutions",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                  item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Publisher Solutions",   item: "https://clickdudes.com/publisher-solutions" },
    { "@type": "ListItem", position: 3, name: "Google AdX Solutions",  item: "https://clickdudes.com/publisher-solutions/google-adx-solutions" },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Google AdX Solutions — MCM Partnership Access",
  description: "Access the full Google Ad Exchange demand pool via certified MCM partnership with AI floor optimization and preferred deal access. Average 30%+ RPM uplift over AdSense.",
  provider: { "@type": "Organization", name: "Click Dudes", url: "https://clickdudes.com" },
  url: "https://clickdudes.com/publisher-solutions/google-adx-solutions",
  serviceType: "Google AdX Publisher Solutions",
  areaServed: "Worldwide",
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <GoogleAdxSolutionsPage />
    </>
  )
}
