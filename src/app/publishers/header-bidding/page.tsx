import type { Metadata } from "next"
import { PublisherPlaceholderPage } from "@/sections/publishers/PublisherPlaceholderPage"

export const metadata: Metadata = {
  title: "Header Bidding — Click Dudes | Unified Auction Infrastructure",
  description: "Run server-side and client-side auctions that maximize yield on every impression through Click Dudes' unified header bidding infrastructure.",
  openGraph: {
    title: "Header Bidding — Click Dudes",
    description: "Run server-side and client-side auctions that maximize yield on every impression.",
    url: "https://clickdudes.com/publishers/header-bidding",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Header Bidding — Click Dudes",
    description: "Run server-side and client-side auctions that maximize yield on every impression.",
  },
  alternates: { canonical: "https://clickdudes.com/publishers/header-bidding" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",               item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Publisher Solutions", item: "https://clickdudes.com/publishers" },
    { "@type": "ListItem", position: 3, name: "Header Bidding",     item: "https://clickdudes.com/publishers/header-bidding" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PublisherPlaceholderPage
        iconKey="git-branch"
        title="Header Bidding"
        description="Run server-side and client-side auctions that maximize yield on every impression through our unified bidding infrastructure."
      />
    </>
  )
}
