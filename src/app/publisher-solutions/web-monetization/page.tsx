import type { Metadata } from "next"
import { WebMonetizationPage } from "@/sections/solutions/web-monetization/WebMonetizationPage"

export const metadata: Metadata = {
  title: "Web Monetization — Click Dudes | Turning Clicks Into Revenue",
  description: "Deploy the full premium ad stack — Google AdX, 15+ SSPs, AI price floors, and header bidding — managed entirely by our team. Average publishers see 41% RPM uplift within 30 days.",
  openGraph: {
    title: "Web Monetization — Click Dudes",
    description: "Turn your web traffic into maximum revenue with managed AdX, header bidding, and AI optimization.",
    url: "https://clickdudes.com/publisher-solutions/web-monetization",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Monetization — Click Dudes",
    description: "Turn your web traffic into maximum revenue with managed AdX, header bidding, and AI optimization.",
  },
  alternates: {
    canonical: "https://clickdudes.com/publisher-solutions/web-monetization",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                 item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Publisher Solutions",  item: "https://clickdudes.com/publisher-solutions" },
    { "@type": "ListItem", position: 3, name: "Web Monetization",     item: "https://clickdudes.com/publisher-solutions/web-monetization" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <WebMonetizationPage />
    </>
  )
}
