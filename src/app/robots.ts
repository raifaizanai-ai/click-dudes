import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow:     "/",
        disallow:  ["/api/", "/_next/"],
      },
      // Allow major AI search crawlers full access for AI-powered search indexing
      { userAgent: "GPTBot",      allow: "/" },
      { userAgent: "ClaudeBot",   allow: "/" },
      { userAgent: "PerplexityBot", allow: "/" },
      { userAgent: "Googlebot",   allow: "/" },
      { userAgent: "Bingbot",     allow: "/" },
      { userAgent: "CCBot",       allow: "/" },
      { userAgent: "anthropic-ai", allow: "/" },
      { userAgent: "cohere-ai",   allow: "/" },
    ],
    sitemap: "https://clickdudes.com/sitemap.xml",
  }
}
