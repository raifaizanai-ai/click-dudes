import type { MetadataRoute } from "next"
import { getAllSlugs } from "@/lib/blogUtils"

const BASE = "https://clickdudes.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE,                                                    lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/apply`,                                         lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/ad-formats`,                                    lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/solutions/google-adx`,                          lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/revenue-calculator`,                            lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`,                                          lastModified: now, changeFrequency: "weekly",  priority: 0.9 },
    { url: `${BASE}/publisher-solutions/web-monetization`,          lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/publisher-solutions/app-monetization`,          lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/publisher-solutions/ctv-monetization`,          lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/publisher-solutions/google-adx-solutions`,      lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/publisher-solutions/header-bidding-solutions`,  lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/publisher-solutions/ai-ad-optimization`,        lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/publisher-solutions/adsense-revenue-optimization`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/resources/success-stories`,                     lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/faqs`,                                lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/monetization-guides`,                 lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/adsense-vs-adx`,                      lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/app-monetization-guide`,              lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/resources/publisher-referral-program`,          lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/about/our-mission`,                             lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE}/about/our-vision`,                              lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE}/about/our-team`,                                lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE}/about/our-history`,                             lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE}/about/contact-us`,                              lastModified: now, changeFrequency: "yearly",  priority: 0.7 },
    { url: `${BASE}/privacy`,                                       lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/terms`,                                         lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
    { url: `${BASE}/cookies`,                                       lastModified: now, changeFrequency: "yearly",  priority: 0.3 },
  ]

  const blogRoutes: MetadataRoute.Sitemap = getAllSlugs().map((slug) => ({
    url:             `${BASE}/blog/${slug}`,
    lastModified:    now,
    changeFrequency: "monthly" as const,
    priority:        0.8,
  }))

  return [...staticRoutes, ...blogRoutes]
}
