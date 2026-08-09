export interface TeamFocusArea {
  label: string
  value: string
}

export type TeamBackdropTheme = "network" | "finance"

export interface TeamMember {
  /** Stable identifier for React keys and anchors — does not change if name/role text changes. */
  slug: string
  name: string
  role: string
  shortDescription: string
  image: string
  imageObjectPosition?: string
  /** Omit or leave empty when no verified profile URL exists yet — the LinkedIn control hides itself. */
  linkedin?: string
  /** Role-derived professional descriptors shown in the info panel. */
  focusAreas?: TeamFocusArea[]
  /** Decorative background motif for this member's section. Defaults to a neutral grid when omitted. */
  backdropTheme?: TeamBackdropTheme
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    slug: "rai-faizan",
    name: "Rai Faizan",
    role: "Founder & CEO",
    shortDescription:
      "Founder & CEO of Click-Dudes, leading the company's vision across publisher monetization, partnership growth, AdTech strategy and the development of Click-Dudes' connected publisher ecosystem.",
    image: "/team/rai-faizan.png",
    imageObjectPosition: "center top",
    linkedin: "https://www.linkedin.com/in/raifaizan",
    focusAreas: [
      { label: "Vision", value: "Publisher Growth" },
      { label: "Focus", value: "Monetization & Partnerships" },
      { label: "Leadership", value: "Strategy & Growth" },
    ],
    backdropTheme: "network",
  },
  {
    slug: "syed-umer",
    name: "Syed Umer",
    role: "Co-Founder & CFO",
    shortDescription:
      "Co-Founder & CFO of Click-Dudes, responsible for financial strategy, commercial planning, partner economics and building the financial foundation needed to support sustainable publisher and partnership growth.",
    image: "/team/syed-umer.png",
    imageObjectPosition: "center top",
    linkedin: "http://www.linkedin.com/in/omershah1",
    focusAreas: [
      { label: "Finance", value: "Strategy & Planning" },
      { label: "Partnerships", value: "Commercial Economics" },
      { label: "Growth", value: "Sustainable Scale" },
    ],
    backdropTheme: "finance",
  },
]
