import type { CategoryKey, GeoKey, PlatformKey } from "@/lib/revenueBenchmarks"
import {
  CATEGORY_BASE_RPM, GEO_MULTIPLIERS, GEO_SCORE,
  PLATFORM_MULTIPLIERS, PLATFORM_SCORE,
} from "@/lib/revenueBenchmarks"

export interface CalcInputs {
  domain:            string
  category:          CategoryKey
  monthlyPageviews:  number
  geography:         GeoKey
  deviceDesktop:     number
  deviceMobile:      number

  platform:          PlatformKey
  currentRPM:        number
  fillRate:          number
  sessionDuration:   number
  adUnitsPerPage:    number
  directSoldPercent: number

  adPlacementQuality: number
  contentQuality:     number
  viewabilityRate:    number
  userExperience:     number
  coreWebVitals:      number
  pageLoadSpeed:      number
}

export interface RevenueBreakdown {
  label: string; percentage: number; color: string; value: number
}

export interface CalcResults {
  lowEstimate:        number
  expectedEstimate:   number
  highEstimate:       number
  potentialRPM:       number
  fillRatePotential:  number
  revenueUplift:      number
  aiScore:            number
  opportunityLevel:   "Low" | "Medium" | "High" | "Very High"
  breakdown:          RevenueBreakdown[]
  insights:           string[]
}

export const DEFAULT_INPUTS: CalcInputs = {
  domain: "", category: "general", monthlyPageviews: 500000,
  geography: "tier1", deviceDesktop: 55, deviceMobile: 40,
  platform: "adsense", currentRPM: 2.5, fillRate: 85,
  sessionDuration: 2, adUnitsPerPage: 3, directSoldPercent: 0,
  adPlacementQuality: 65, contentQuality: 70, viewabilityRate: 60,
  userExperience: 65, coreWebVitals: 60, pageLoadSpeed: 65,
}

export function calculateRevenue(inputs: CalcInputs): CalcResults {
  const baseRPM    = CATEGORY_BASE_RPM[inputs.category]
  const geoMult    = GEO_MULTIPLIERS[inputs.geography]
  const platMult   = PLATFORM_MULTIPLIERS[inputs.platform]
  const fillAdj    = inputs.fillRate / 100

  const avgQuality = (
    inputs.adPlacementQuality + inputs.contentQuality + inputs.viewabilityRate +
    inputs.userExperience + inputs.coreWebVitals + inputs.pageLoadSpeed
  ) / 6
  const qualityMult = 0.75 + (avgQuality / 100) * 0.6

  const potentialRPM      = baseRPM * geoMult * platMult * qualityMult * fillAdj
  const expectedEstimate  = (inputs.monthlyPageviews / 1000) * potentialRPM
  const lowEstimate       = expectedEstimate * 0.65
  const highEstimate      = expectedEstimate * 1.42

  const currentRevenue    = (inputs.monthlyPageviews / 1000) * inputs.currentRPM
  const revenueUplift     = currentRevenue > 0
    ? ((expectedEstimate - currentRevenue) / currentRevenue) * 100
    : 80

  const fillRatePotential = Math.min(97, Math.round(inputs.fillRate + (100 - inputs.fillRate) * 0.60))

  const aiScore = Math.round(
    (GEO_SCORE[inputs.geography] / 100)      * 20 +
    (inputs.viewabilityRate / 100)            * 20 +
    (inputs.contentQuality / 100)             * 15 +
    (inputs.adPlacementQuality / 100)         * 15 +
    (inputs.coreWebVitals / 100)              * 10 +
    (inputs.fillRate / 100)                   * 10 +
    (PLATFORM_SCORE[inputs.platform] / 100)   * 10
  )

  let opportunityLevel: CalcResults["opportunityLevel"] = "Low"
  if      (revenueUplift > 100) opportunityLevel = "Very High"
  else if (revenueUplift > 50)  opportunityLevel = "High"
  else if (revenueUplift > 20)  opportunityLevel = "Medium"

  const breakdown: RevenueBreakdown[] = [
    { label: "Display Ads",    percentage: 35, color: "bg-brand-purple", value: expectedEstimate * 0.35 },
    { label: "In-Content Ads", percentage: 25, color: "bg-brand-blue",   value: expectedEstimate * 0.25 },
    { label: "Sticky Ads",     percentage: 15, color: "bg-brand-cyan",   value: expectedEstimate * 0.15 },
    { label: "Video Ads",      percentage: 12, color: "bg-brand-violet", value: expectedEstimate * 0.12 },
    { label: "Native Ads",     percentage:  8, color: "bg-brand-green",  value: expectedEstimate * 0.08 },
    { label: "Others",         percentage:  5, color: "bg-text-muted/40",value: expectedEstimate * 0.05 },
  ]

  const insights: string[] = []
  if (inputs.geography === "tier1")         insights.push("Your Tier 1 traffic has strong high-value potential with premium buyer demand.")
  if (inputs.adPlacementQuality < 70)       insights.push("Improving ad placement quality could increase your RPM by 20–35%.")
  if (inputs.platform === "adsense")        insights.push("Upgrading from AdSense to AdX could unlock 2–4x higher CPM demand.")
  if (inputs.viewabilityRate < 65)          insights.push("Improving viewability above 70% unlocks higher CPM bids from premium advertisers.")
  if (inputs.fillRate < 80)                 insights.push("Header bidding competition could push your fill rate to 95%+.")
  if (inputs.platform !== "header_bidding") insights.push("Header bidding creates real-time demand competition and typically improves fill rate.")
  if (inputs.contentQuality > 75)          insights.push("Your high content quality score positions you well for private marketplace deals.")
  if (insights.length < 3)                  insights.push("Your content quality signals strong potential for premium direct deals and PMPs.")

  return {
    lowEstimate, expectedEstimate, highEstimate,
    potentialRPM, fillRatePotential, revenueUplift,
    aiScore, opportunityLevel, breakdown, insights,
  }
}

export function fmtCurrency(n: number): string {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000)     return `$${(n / 1_000).toFixed(1)}K`
  return `$${n.toFixed(0)}`
}

export function fmtPageviews(n: number): string {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000)     return `${(n / 1_000).toFixed(0)}K`
  return `${n}`
}
