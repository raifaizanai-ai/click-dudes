import type { Metadata } from "next"
import { HeaderBiddingPage } from "@/sections/solutions/header-bidding-solutions/HeaderBiddingPage"

export const metadata: Metadata = {
  title: "Header Bidding Solutions — Click Dudes | Turning Clicks Into Revenue",
  description: "Replace your waterfall with server-side header bidding across 15+ SSPs at sub-200ms latency. Our publishers see an average 47% CPM increase over waterfall.",
  openGraph: {
    title: "Header Bidding Solutions — Click Dudes",
    description: "Replace your waterfall. Unlock true market value with server-side header bidding.",
    url: "https://clickdudes.com/publisher-solutions/header-bidding-solutions",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Header Bidding Solutions — Click Dudes",
    description: "Replace your waterfall. Unlock true market value with server-side header bidding.",
  },
  alternates: {
    canonical: "https://clickdudes.com/publisher-solutions/header-bidding-solutions",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",                      item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Publisher Solutions",       item: "https://clickdudes.com/publisher-solutions" },
    { "@type": "ListItem", position: 3, name: "Header Bidding Solutions",  item: "https://clickdudes.com/publisher-solutions/header-bidding-solutions" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <HeaderBiddingPage />
    </>
  )
}
