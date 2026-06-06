import type { MetadataRoute } from "next"
import { getAllSlugs } from "@/lib/blogUtils"

const BASE  = "https://clickdudes.com"
const BUILT = "2026-05-25"

type Freq = "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never"

function route(url: string, freq: Freq, priority: number, date = BUILT): MetadataRoute.Sitemap[number] {
  return { url: `${BASE}${url}`, lastModified: date, changeFrequency: freq, priority }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().slice(0, 10)

  const staticRoutes: MetadataRoute.Sitemap = [
    // Core
    route("/",                                                 "weekly",  1.0, today),
    route("/ad-formats",                                       "monthly", 0.8),
    route("/revenue-calculator",                               "monthly", 0.8),

    // Publisher Solutions
    route("/publisher-solutions/web-monetization",             "monthly", 0.9),
    route("/publisher-solutions/app-monetization",             "monthly", 0.9),
    route("/publisher-solutions/ctv-monetization",             "monthly", 0.9),
    route("/publisher-solutions/google-adx-solutions",         "monthly", 0.9),
    route("/publisher-solutions/header-bidding-solutions",     "monthly", 0.9),
    route("/publisher-solutions/ai-ad-optimization",           "monthly", 0.9),
    route("/publisher-solutions/adsense-revenue-optimization", "monthly", 0.9),

    // Services (previously missing from sitemap)
    route("/services",                                         "monthly", 0.8),
    route("/services/e-commerce",                              "monthly", 0.8),
    route("/services/web-development",                         "monthly", 0.8),
    route("/services/graphic-designing",                       "monthly", 0.8),
    route("/services/social-media-management",                 "monthly", 0.8),
    route("/services/personal-social-account-management",      "monthly", 0.7),
    route("/services/meta-ads",                                "monthly", 0.8),
    route("/services/google-ads",                              "monthly", 0.8),
    route("/services/seo-services",                            "monthly", 0.8),

    // Solutions (alternate landing)
    route("/solutions/google-adx",                             "monthly", 0.8),

    // Blog index
    route("/blog",                                             "weekly",  0.9, today),

    // Resources
    route("/resources/success-stories",                        "monthly", 0.7),
    route("/resources/faqs",                                   "monthly", 0.7),
    route("/resources/monetization-guides",                    "monthly", 0.7),
    route("/resources/adsense-vs-adx",                         "monthly", 0.7),
    route("/resources/app-monetization-guide",                 "monthly", 0.7),
    route("/resources/publisher-referral-program",             "monthly", 0.6),

    // About
    route("/about/our-mission",                                "yearly",  0.6),
    route("/about/our-vision",                                 "yearly",  0.6),
    route("/about/our-team",                                   "yearly",  0.6),
    route("/about/our-history",                                "yearly",  0.6),
    route("/about/contact-us",                                 "yearly",  0.7),

    // Legal
    route("/privacy",                                          "yearly",  0.3),
    route("/terms",                                            "yearly",  0.3),
    route("/cookies",                                          "yearly",  0.3),
  ]

  const blogRoutes: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url:             `${BASE}/blog/${slug}`,
    lastModified:    BUILT,
    changeFrequency: "monthly" as const,
    priority:        0.8,
  }))

  return [...staticRoutes, ...blogRoutes]
}
