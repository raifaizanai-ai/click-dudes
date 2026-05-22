import type { Metadata } from "next"
import { ContactUsPage } from "@/sections/about/ContactUsPage"

export const metadata: Metadata = {
  title: "Contact Us — Click Dudes | Talk to Our Team",
  description: "Get in touch with the Click Dudes team — publisher onboarding, advertiser partnerships, technical support, and general inquiries.",
  openGraph: { title: "Contact Us — Click Dudes", description: "Get in touch with the Click Dudes team.", url: "https://clickdudes.com/about/contact-us", siteName: "Click Dudes", type: "website" },
  twitter: { card: "summary_large_image", title: "Contact Us — Click Dudes", description: "Get in touch with the Click Dudes team." },
  alternates: { canonical: "https://clickdudes.com/about/contact-us" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",        item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "About",       item: "https://clickdudes.com/about/our-mission" },
    { "@type": "ListItem", position: 3, name: "Contact Us",  item: "https://clickdudes.com/about/contact-us" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <ContactUsPage />
    </>
  )
}
