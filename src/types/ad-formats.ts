export type RPMPotential    = "Standard" | "High" | "Premium"
export type ViewabilityLevel = "Good"     | "High" | "Very High"
export type UXImpact         = "Minimal"  | "Moderate" | "Noticeable"

export type AdPosition =
  | "top-banner" | "billboard"    | "sidebar"    | "half-page"
  | "sticky-sidebar" | "in-content" | "video-display"
  | "mobile-banner"  | "mobile-sticky" | "interstitial"
  | "native-mobile"  | "in-article"    | "rewarded" | "mobile-video"

export interface AdFormatItem {
  id:           string
  name:         string
  size?:        string
  description:  string
  bestFor:      string
  rpmPotential: RPMPotential
  viewability:  ViewabilityLevel
  uxImpact:     UXImpact
  adPosition:   AdPosition
}
