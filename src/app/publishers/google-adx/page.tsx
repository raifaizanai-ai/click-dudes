import type { Metadata } from "next"
import { PublisherPlaceholderPage } from "@/sections/publishers/PublisherPlaceholderPage"

export const metadata: Metadata = {
  title: "Google AdX — Click Dudes | Premium Programmatic Demand",
  description: "Access Google's premium programmatic marketplace with high fill rates and competitive CPMs, fully managed by Click Dudes.",
  openGraph: {
    title: "Google AdX — Click Dudes",
    description: "Access Google's premium programmatic marketplace with high fill rates and competitive CPMs.",
    url: "https://clickdudes.com/publishers/google-adx",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google AdX — Click Dudes",
    description: "Access Google's premium programmatic marketplace with high fill rates and competitive CPMs.",
  },
  alternates: { canonical: "https://clickdudes.com/publishers/google-adx" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",               item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Publisher Solutions", item: "https://clickdudes.com/publishers" },
    { "@type": "ListItem", position: 3, name: "Google AdX",         item: "https://clickdudes.com/publishers/google-adx" },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <PublisherPlaceholderPage
        iconKey="zap"
        title="Google AdX"
        description="Access Google's premium programmatic marketplace with high fill rates and competitive CPMs, fully managed by the Click Dudes team."
      />
    </>
  )
}
