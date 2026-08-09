import {
  Building2, Briefcase, LineChart, Network, Globe, Handshake, Users, User,
  UploadCloud, ClipboardCheck, ShieldCheck, GitMerge, Rocket, Zap, Wallet,
  Smartphone, Tv2, Activity,
  type LucideIcon,
} from "lucide-react"

/* ─── Configurable business constants ───────────────────────────────────── */

export const COMMISSION_MAX_PERCENT = 30
export const COMMISSION_DEMO_RATES = [20, 25, 30] as const
export const COMMISSION_DEMO_BASE_EARNINGS = 1000

export const WHATSAPP_NUMBER_DISPLAY = "+44 7735 316000"
export const WHATSAPP_NUMBER_E164 = "447735316000"
export const CONTACT_EMAIL = "contact@clickdudes.com"
export const PARTNERS_PORTAL_URL = "https://partners.clickdudes.com/"

/* ─── Section 02 — Who can become a partner ─────────────────────────────── */

export type PartnerTypeKey =
  | "agency" | "company" | "monetization-professional" | "adtech-professional"
  | "publisher-owner" | "referral-partner" | "team-community" | "individual"

export interface PartnerTypeOption {
  key: PartnerTypeKey
  label: string
  tagline: string
  description: string
  icon: LucideIcon
}

export const PARTNER_TYPES: PartnerTypeOption[] = [
  { key: "agency", label: "Agency", tagline: "I manage publisher relationships for clients.",
    description: "Introduce and manage qualified publisher opportunities across your client or partner base through one connected workflow.",
    icon: Building2 },
  { key: "company", label: "Company", tagline: "My company works with publisher partners.",
    description: "Bring your organization's publisher relationships into a single, trackable partnership pipeline.",
    icon: Briefcase },
  { key: "monetization-professional", label: "Monetization Professional", tagline: "I already work inside publisher monetization.",
    description: "Use your existing publisher relationships and monetization expertise to build a structured referral pipeline.",
    icon: LineChart },
  { key: "adtech-professional", label: "AdTech / Programmatic Professional", tagline: "I work inside programmatic advertising.",
    description: "Introduce qualified publishers you encounter through programmatic, AdTech, or agency work.",
    icon: Network },
  { key: "publisher-owner", label: "Publisher Owner", tagline: "I own my own website, app, or CTV property.",
    description: "Bring your own web, app, or CTV properties through Click-Dudes to evaluate monetization-partner opportunities.",
    icon: Globe },
  { key: "referral-partner", label: "Referral Partner", tagline: "I know publishers and want to refer them professionally.",
    description: "Turn genuine publisher relationships into a structured, tracked referral partnership.",
    icon: Handshake },
  { key: "team-community", label: "Team / Community", tagline: "We run a team or community of publisher operators.",
    description: "Coordinate publisher submissions across a team or community under one shared partner workflow.",
    icon: Users },
  { key: "individual", label: "Individual", tagline: "I have publisher relationships and want to partner.",
    description: "You don't need to run an agency — a single genuine publisher opportunity is a valid place to start.",
    icon: User },
]

/* ─── Section 03 — Web, App & CTV ────────────────────────────────────────── */

export interface ChannelOption {
  key: "web" | "app" | "ctv"
  label: string
  icon: LucideIcon
  tags: string[]
}

export const CHANNELS: ChannelOption[] = [
  { key: "web", label: "Web", icon: Globe, tags: ["Display", "Video", "Native", "Header Bidding", "Google AdX Opportunities"] },
  { key: "app", label: "App", icon: Smartphone, tags: ["Android", "iOS", "In-App", "Video", "Rewarded / Display"] },
  { key: "ctv", label: "CTV", icon: Tv2, tags: ["Connected TV", "Streaming Inventory", "Premium Video"] },
]

/* ─── Section 05 — Revenue share examples (illustrative, not guaranteed) ──── */

export interface RevenueShareExample {
  publisherShare: number
  partnerShare: number
  channel: string
}

export const REVENUE_SHARE_EXAMPLES: RevenueShareExample[] = [
  { publisherShare: 80, partnerShare: 20, channel: "Web" },
  { publisherShare: 85, partnerShare: 15, channel: "App" },
  { publisherShare: 90, partnerShare: 10, channel: "CTV" },
  { publisherShare: 92, partnerShare: 8,  channel: "Premium / Enterprise" },
]

/* ─── Section 07 — Partnership workflow ─────────────────────────────────── */

export interface WorkflowStage {
  step: string
  title: string
  statusLabel: string
  description: string
  icon: LucideIcon
}

export const WORKFLOW_STAGES: WorkflowStage[] = [
  { step: "01", title: "Find / Introduce", statusLabel: "Identified",
    description: "Partner identifies a qualified publisher opportunity.", icon: UploadCloud },
  { step: "02", title: "Submit", statusLabel: "Submitted",
    description: "Partner submits publisher details through the Partner Portal.", icon: ClipboardCheck },
  { step: "03", title: "Click-Dudes QC", statusLabel: "In Review",
    description: "Click-Dudes reviews account health, payment history, property quality and traffic integrity.", icon: ShieldCheck },
  { step: "04", title: "Partner Matching", statusLabel: "Matching",
    description: "An appropriate monetization-partner route is identified and the publisher moves through required review.", icon: GitMerge },
  { step: "05", title: "Invitation & Onboarding", statusLabel: "Onboarding",
    description: "The approved publisher completes the required onboarding and invitation process.", icon: Rocket },
  { step: "06", title: "Live", statusLabel: "Live",
    description: "Publisher monetization becomes active.", icon: Zap },
  { step: "07", title: "Commission", statusLabel: "Eligible Earnings",
    description: "Eligible partner earnings become visible in the Partner Portal according to the partner agreement and payment cycle.", icon: Wallet },
]

/* ─── Section 08 — Dashboard proof callouts ─────────────────────────────── */

export interface DashboardCallout {
  label: string
  x: string
  y: string
}

export const DASHBOARD_CALLOUTS: DashboardCallout[] = [
  { label: "Publisher Submissions", x: "6%",  y: "18%" },
  { label: "QC Status",             x: "82%", y: "10%" },
  { label: "Live Publishers",       x: "4%",  y: "42%" },
  { label: "Commission",            x: "85%", y: "36%" },
  { label: "Payments",              x: "8%",  y: "66%" },
  { label: "Agreements",            x: "80%", y: "62%" },
  { label: "Organization",          x: "6%",  y: "88%" },
  { label: "Analytics",             x: "83%", y: "86%" },
]

/* ─── Section 09 — Publisher eligibility pillars ────────────────────────── */

export interface EligibilityPillar {
  icon: LucideIcon
  title: string
  items: string[]
}

export const ELIGIBILITY_PILLARS: EligibilityPillar[] = [
  { icon: ShieldCheck, title: "Account Health",
    items: ["Approved / active Google Ad Manager account where applicable", "No serious active policy restrictions", "No duplicate or fake publisher data", "Verifiable business or property ownership"] },
  { icon: Wallet, title: "Payment History",
    items: ["Established payout history", "No unresolved payment disputes", "Consistent, verifiable financial records"] },
  { icon: Activity, title: "Website / App / Traffic Quality",
    items: ["Genuine website, app, or CTV property", "Original, advertiser-friendly content", "Explainable traffic sources", "No high IVT / SIVT signals"] },
]

/* ─── Section 10 — Use cases ─────────────────────────────────────────────── */

export interface UseCase {
  key: string
  label: string
  quote: string
  description: string
  icon: LucideIcon
}

export const USE_CASES: UseCase[] = [
  { key: "owned-portfolio", label: "Owned Portfolio", icon: Globe,
    quote: "I own websites/apps and need better monetization-partner access.",
    description: "Bring your own web, app, and CTV properties into one evaluation workflow instead of chasing separate deals for each." },
  { key: "agency-network", label: "Agency / Network", icon: Building2,
    quote: "I manage multiple publisher relationships.",
    description: "Coordinate a portfolio of publisher opportunities through one partner relationship and one submission workflow." },
  { key: "adtech-pro", label: "AdTech / Monetization Professional", icon: Network,
    quote: "I already work inside programmatic advertising and can introduce qualified publishers.",
    description: "Turn your existing programmatic and monetization relationships into a structured, trackable referral pipeline." },
  { key: "individual-referrer", label: "Individual Referrer", icon: User,
    quote: "I know genuine publishers and want a professional partner structure.",
    description: "One qualified publisher opportunity is enough to start a professional, organized partnership." },
]

/* ─── Section 11 — Application form option sets ─────────────────────────── */

export const PARTNER_TYPE_FORM_OPTIONS = [
  "Individual", "Agency", "Company", "Publisher",
  "AdTech / Monetization Professional", "Team / Community", "Other",
] as const

export const PUBLISHER_TYPE_FORM_OPTIONS = [
  "Web", "Android App", "iOS App", "CTV", "All / Multiple Channels",
] as const

export const PUBLISHER_COUNT_OPTIONS = ["1", "2–5", "6–10", "11–25", "26–50", "50+"] as const

export const OWNERSHIP_OPTIONS = ["I own them", "I refer publishers", "Both"] as const

export const MONTHLY_CAPACITY_OPTIONS = ["1–2", "3–5", "6–10", "11–25", "25+"] as const

export const REVENUE_RANGE_OPTIONS = [
  "Under $1,000", "$1,000–$5,000", "$5,000–$10,000", "$10,000–$25,000", "$25,000–$50,000", "$50,000+",
] as const

export const ELIGIBILITY_CONFIDENCE_OPTIONS = ["Yes", "Some of them", "Not sure", "No"] as const

export const PRIMARY_REASON_OPTIONS = [
  "Better monetization partner access", "Google AdX / programmatic opportunity",
  "Better publisher commercial terms", "App monetization", "CTV monetization",
  "Referral partnership", "Managing multiple publishers", "Other",
] as const
