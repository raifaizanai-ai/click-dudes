import type { Metadata } from "next"
import { HeaderBiddingGuidePage } from "@/sections/resources/HeaderBiddingGuidePage"

export const metadata: Metadata = {
  title: "Header Bidding Explained | Click Dudes Publisher Guide",
  description:
    "Learn how header bidding works, why it beats waterfall auctions, and how to implement it correctly for maximum RPM uplift. Complete guide for web and app publishers.",
  openGraph: {
    title: "Header Bidding Explained — Click Dudes",
    description: "How header bidding works and how to implement it for maximum revenue.",
    url: "https://clickdudes.com/resources/header-bidding-guide",
    siteName: "Click Dudes", type: "website",
  },
  twitter: { card: "summary_large_image", title: "Header Bidding Explained — Click Dudes" },
  alternates: { canonical: "https://clickdudes.com/resources/header-bidding-guide" },
}

export default function Page() { return <HeaderBiddingGuidePage /> }
