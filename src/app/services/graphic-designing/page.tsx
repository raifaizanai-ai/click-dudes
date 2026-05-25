import type { Metadata } from "next"
import { GraphicDesigningPage } from "@/sections/services/graphic-designing/GraphicDesigningPage"

export const metadata: Metadata = {
  title: "Graphic Designing Services — Click Dudes | Turning Clicks Into Revenue",
  description: "Click Dudes creates premium graphic design content — social media visuals, personal brand content, Amazon A+ content, product listing images, and advertising creatives.",
  openGraph: {
    title: "Graphic Designing Services — Click Dudes",
    description: "Social media content, brand visuals, Amazon A+ content, and ad creatives designed to perform.",
    url: "https://clickdudes.com/services/graphic-designing",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Designing Services — Click Dudes",
    description: "Premium graphic design for brands, social media, ecommerce, and advertising.",
  },
  alternates: {
    canonical: "https://clickdudes.com/services/graphic-designing",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",              item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Services",          item: "https://clickdudes.com/services" },
    { "@type": "ListItem", position: 3, name: "Graphic Designing", item: "https://clickdudes.com/services/graphic-designing" },
  ],
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Graphic Designing — Brand Visuals & Ad Creatives",
  description: "Premium graphic design for social media, personal branding, Amazon A+ content, product listing images, and high-converting advertising creatives.",
  provider: { "@type": "Organization", name: "Click Dudes", url: "https://clickdudes.com" },
  url: "https://clickdudes.com/services/graphic-designing",
  serviceType: "Graphic Design",
  areaServed: "Worldwide",
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <GraphicDesigningPage />
    </>
  )
}
