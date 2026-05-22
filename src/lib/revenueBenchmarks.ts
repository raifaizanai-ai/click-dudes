export type CategoryKey =
  | "finance" | "technology" | "business" | "health" | "education"
  | "entertainment" | "gaming" | "sports" | "news" | "lifestyle"
  | "travel" | "food" | "auto" | "general"

export type GeoKey = "tier1" | "tier2" | "tier3" | "mixed"

export type PlatformKey =
  | "adsense" | "adx" | "header_bidding" | "direct" | "affiliate" | "none" | "other"

export const CATEGORY_LABELS: Record<CategoryKey, string> = {
  finance: "Finance", technology: "Technology", business: "Business",
  health: "Health", education: "Education", entertainment: "Entertainment",
  gaming: "Gaming", sports: "Sports", news: "News", lifestyle: "Lifestyle",
  travel: "Travel", food: "Food", auto: "Auto", general: "General",
}

export const CATEGORY_BASE_RPM: Record<CategoryKey, number> = {
  finance: 28, technology: 18, business: 16, health: 14, education: 10,
  entertainment: 7, gaming: 8, sports: 9, news: 6, lifestyle: 8,
  travel: 12, food: 7, auto: 13, general: 6,
}

export const GEO_LABELS: Record<GeoKey, string> = {
  tier1: "Tier 1 Countries (US, UK, CA, AU)",
  tier2: "Tier 2 Countries",
  tier3: "Tier 3 Countries",
  mixed: "Mixed Global Traffic",
}

export const GEO_MULTIPLIERS: Record<GeoKey, number> = {
  tier1: 1.40, tier2: 0.90, tier3: 0.45, mixed: 0.75,
}

export const GEO_SCORE: Record<GeoKey, number> = {
  tier1: 100, tier2: 65, tier3: 30, mixed: 55,
}

export const PLATFORM_LABELS: Record<PlatformKey, string> = {
  adsense: "Google AdSense", adx: "Google AdX",
  header_bidding: "Header Bidding", direct: "Direct Ads",
  affiliate: "Affiliate + Ads", none: "Not Monetized Yet", other: "Other",
}

export const PLATFORM_MULTIPLIERS: Record<PlatformKey, number> = {
  adsense: 0.75, adx: 1.15, header_bidding: 1.35,
  direct: 1.20, affiliate: 1.05, none: 0.55, other: 0.80,
}

export const PLATFORM_SCORE: Record<PlatformKey, number> = {
  adsense: 55, adx: 80, header_bidding: 95,
  direct: 85, affiliate: 70, none: 30, other: 60,
}
