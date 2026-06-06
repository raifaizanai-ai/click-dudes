import type { Metadata } from "next"
import { RpmOptimizationPage } from "@/sections/resources/RpmOptimizationPage"

export const metadata: Metadata = {
  title: "Why Your RPM Is Low — Fix It Fast | Click Dudes",
  description:
    "Discover the six most common causes of low publisher RPM and the exact steps to diagnose and fix each one. Practical guide for web and app publishers.",
  openGraph: {
    title: "Why Your RPM Is Low — Fix It Fast | Click Dudes",
    description: "Six causes of low RPM and how to fix each one to recover lost ad revenue.",
    url: "https://clickdudes.com/resources/rpm-optimization",
    siteName: "Click Dudes", type: "website",
  },
  twitter: { card: "summary_large_image", title: "Why Your RPM Is Low — Fix It Fast" },
  alternates: { canonical: "https://clickdudes.com/resources/rpm-optimization" },
}

export default function Page() { return <RpmOptimizationPage /> }
