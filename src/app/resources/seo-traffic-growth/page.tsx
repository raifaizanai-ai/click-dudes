import type { Metadata } from "next"
import { SeoTrafficGrowthPage } from "@/sections/resources/SeoTrafficGrowthPage"

export const metadata: Metadata = {
  title: "SEO Traffic Growth Playbook for Publishers | Click Dudes",
  description:
    "How publishers grow organic traffic that converts to ad revenue — technical SEO, content strategy, Core Web Vitals, and link building fundamentals.",
  openGraph: {
    title: "SEO Traffic Growth Playbook for Publishers — Click Dudes",
    description: "Grow organic traffic that converts to ad revenue with this publisher-focused SEO playbook.",
    url: "https://clickdudes.com/resources/seo-traffic-growth",
    siteName: "Click Dudes", type: "website",
  },
  twitter: { card: "summary_large_image", title: "SEO Traffic Growth Playbook — Click Dudes" },
  alternates: { canonical: "https://clickdudes.com/resources/seo-traffic-growth" },
}

export default function Page() { return <SeoTrafficGrowthPage /> }
