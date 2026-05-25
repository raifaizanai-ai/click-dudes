"use client"

import { Tv2, BarChart3, Zap, TrendingUp, Shield, DollarSign, Users, Clock, Award, Layers } from "lucide-react"
import { SolutionHero } from "@/sections/solutions/shared/SolutionHero"
import { SolutionPartners } from "@/sections/solutions/shared/SolutionPartners"
import { SolutionProblemSolution } from "@/sections/solutions/shared/SolutionProblemSolution"
import { SolutionFeatures } from "@/sections/solutions/shared/SolutionFeatures"
import { SolutionAnalytics } from "@/sections/solutions/shared/SolutionAnalytics"
import { SolutionWhyUs } from "@/sections/solutions/shared/SolutionWhyUs"
import { SolutionMetrics } from "@/sections/solutions/shared/SolutionMetrics"
import { SolutionFAQ } from "@/sections/solutions/shared/SolutionFAQ"
import { CtvHeroPanel } from "@/sections/solutions/ctv-monetization/CtvHeroPanel"
import { CtvTestimonials } from "@/sections/solutions/ctv-monetization/CtvTestimonials"
import { CtvMonetizationProcessSection } from "@/sections/solutions/ctv-monetization/CtvMonetizationProcessSection"
import { CtvMonetizationCTASection } from "@/sections/solutions/ctv-monetization/CtvMonetizationCTASection"
import { GradientText } from "@/components/shared/GradientText"


const STATS = [
  { value: "$28",   label: "Avg CTV CPM"      },
  { value: "97%",   label: "Video completion" },
  { value: "44%",   label: "CPM uplift"       },
  { value: "100+",  label: "CTV publishers"   },
]

const PARTNERS = [
  "Google DV360", "The Trade Desk", "Amazon DSP", "Roku OneView", "Hulu DSP",
  "FreeWheel", "Magnite CTV", "SpotX", "Tubi Ads", "Pluto TV",
  "Samsung Ads", "Vizio SmartCast", "LG Ads", "Xumo", "Peacock Ads",
]

const PROBLEMS = [
  { title: "Low CTV CPM Realization", body: "CTV inventory commands premium CPMs only when accessed through the right demand channels. Most publishers default to open auction rates that are 40–60% below what programmatic direct deals deliver." },
  { title: "Ad Pod & Competitive Separation", body: "Without intelligent ad pod management, the same advertiser appears twice in a single break, violating brand safety and degrading the viewer experience — leading to subscriber churn." },
  { title: "SSAI Technical Complexity", body: "Server-side ad insertion for streaming requires sophisticated infrastructure. Without it, client-side insertion causes buffering, audio drop, and poor viewability — all of which hurt CPMs." },
]

const SOLUTIONS = [
  { title: "Programmatic Direct & PMP First", body: "We prioritize premium programmatic deals and private marketplace packages with TV-quality advertisers before opening to open auction — protecting your CPM floor." },
  { title: "Intelligent Pod & Separation Rules", body: "Our ad server enforces competitive separation, category exclusion, and frequency caps across the entire viewing session — not just within individual ad breaks." },
  { title: "Managed SSAI Infrastructure", body: "We deploy and manage your VAST/VMAP server-side ad insertion pipeline with CDN-level distribution — zero buffering, perfect viewability, broadcast-quality ad delivery." },
]

const FEATURES = [
  {
    icon: Tv2, title: "Server-Side Ad Insertion (SSAI)",
    description: "SSAI pipeline with CDN distribution eliminates client-side ad stitching errors. Broadcast-quality ad delivery with 99.9% uptime SLA — no buffering, no audio cuts.",
    badge: "Core Tech", accent: "text-brand-purple", glow: "rgba(139,92,246,0.12)",
  },
  {
    icon: BarChart3, title: "CTV-Specific Floor Pricing AI",
    description: "CPM floors tuned specifically for CTV inventory signals — device type, app, daypart, geo, and audience segment — to maximize yield on every streaming session.",
    badge: "AI-Powered", accent: "text-brand-blue", glow: "rgba(96,165,250,0.12)",
  },
  {
    icon: Layers, title: "Ad Pod Orchestration",
    description: "Intelligent pod filling with competitive separation, category exclusion, and advertiser frequency caps across the full session. Protect brand relationships while maximizing pod revenue.",
    accent: "text-brand-purple", glow: "rgba(103,232,249,0.12)",
  },
  {
    icon: Shield, title: "IAB CTV Compliance & Brand Safety",
    description: "Full IAB Tech Lab CTV standards compliance, OMID viewability measurement, and pre-bid brand safety filtering from DoubleVerify and IAS integration.",
    accent: "text-brand-green", glow: "rgba(16,185,129,0.12)",
  },
  {
    icon: Zap, title: "Programmatic Direct Deal Management",
    description: "Our demand team negotiates and manages programmatic direct deals with TV-quality advertisers — brands paying $20–$50 CPMs for guaranteed CTV audience access.",
    accent: "text-brand-violet", glow: "rgba(168,85,247,0.12)",
  },
  {
    icon: TrendingUp, title: "CTV Attribution & Measurement",
    description: "Household-level attribution, cross-device measurement, and brand lift studies enable advertiser ROI reporting — the metrics that command premium budgets.",
    badge: "Premium", accent: "text-brand-purple", glow: "rgba(139,92,246,0.10)",
  },
]

const WHY_US_ITEMS = [
  {
    icon: Award,      title: "CTV-Specialized Demand Relationships",
    body: "We maintain direct relationships with TV-quality brand advertisers who allocate dedicated CTV budgets at $20–50 CPMs — accessible only through managed publisher relationships.",
    highlight: "Premium Demand", accent: "text-brand-purple", bg: "rgba(139,92,246,0.10)", dotColor: "purple" as const,
  },
  {
    icon: Zap,        title: "Broadcast-Quality SSAI",
    body: "Our SSAI infrastructure is built on enterprise CDN with 99.9% uptime SLA. No buffering, no audio drop, no ad stitching errors — the ad experience matches the content quality.",
    highlight: "Enterprise Grade", accent: "text-brand-blue", bg: "rgba(96,165,250,0.10)", dotColor: "blue" as const,
  },
  {
    icon: BarChart3,  title: "IAB CTV Standards Expertise",
    body: "Full compliance with IAB Tech Lab CTV/OTT standards, VAST 4.2, and OMID measurement — the requirements that open premium programmatic buying from DV360 and The Trade Desk.",
    highlight: "IAB Compliant", accent: "text-brand-purple", bg: "rgba(103,232,249,0.10)", dotColor: "cyan" as const,
  },
  {
    icon: Users,      title: "CTV Publisher Success Team",
    body: "Dedicated CTV specialists who understand streaming economics, content licensing, and programmatic TV buying — not generic ad-tech generalists.",
    highlight: "CTV Experts", accent: "text-brand-green", bg: "rgba(16,185,129,0.10)", dotColor: "green" as const,
  },
]

const METRICS = [
  { icon: DollarSign, value: 28,   decimals: 0, prefix: "$", suffix: "",   label: "Average CTV CPM",     caption: "Programmatic + direct blended rate",            accent: "text-brand-purple", bg: "rgba(139,92,246,0.10)" },
  { icon: TrendingUp, value: 44,   decimals: 0, prefix: "",  suffix: "%",  label: "CPM Uplift",          caption: "Over open auction baseline",                    accent: "text-brand-blue",   bg: "rgba(96,165,250,0.10)" },
  { icon: BarChart3,  value: 97.2, decimals: 1, prefix: "",  suffix: "%",  label: "Video Completion",    caption: "With SSAI ad delivery",                         accent: "text-brand-green",  bg: "rgba(16,185,129,0.10)" },
  { icon: Clock,      value: 10,   decimals: 0, prefix: "",  suffix: " days", label: "Time to Launch",  caption: "From audit to first SSAI impression",           accent: "text-brand-purple",   bg: "rgba(103,232,249,0.10)" },
]


const FAQS = [
  {
    question: "What type of CTV publishers do you work with?",
    answer:   "We work with FAST channels, AVOD streaming platforms, broadcaster OTT extensions, and niche streaming services. Content verticals include news, lifestyle, fitness, food, entertainment, and sports. Minimum 500K monthly streaming impressions.",
  },
  {
    question: "Do we need to rebuild our streaming infrastructure?",
    answer:   "No. Our SSAI solution integrates with your existing video player and streaming infrastructure via VAST/VMAP ad tags. We handle the ad server configuration and pipeline setup — your engineering team's involvement is minimal.",
  },
  {
    question: "How do programmatic direct CTV deals work?",
    answer:   "Programmatic direct deals are negotiated CPM contracts with specific advertisers or agencies. Buyers get guaranteed inventory access; you get guaranteed minimum CPMs. We manage all deal negotiation, setup in your ad server, and trafficking on your behalf.",
  },
  {
    question: "What CPM range can CTV publishers expect?",
    answer:   "CTV CPMs vary significantly by content vertical, audience demographics, and deal type. Open auction CTV typically ranges $8–$15. Private marketplace deals range $15–$30. Programmatic direct with premium brand advertisers ranges $25–$55. Our published average is $28 blended.",
  },
  {
    question: "How is CTV viewability measured?",
    answer:   "We integrate OMID (Open Measurement Interface Definition) from the IAB Tech Lab for standardized CTV viewability measurement. This is the measurement currency accepted by DV360, The Trade Desk, and all major DSPs for premium CTV buys.",
  },
  {
    question: "Can you work with live streaming and sports content?",
    answer:   "Yes — live content commands 15–30% CPM premium over on-demand. We support live SSAI with dynamic ad insertion for sports, news, and live events. Our infrastructure handles simultaneous ad pod management across concurrent live viewers.",
  },
]

export function CtvMonetizationPage() {
  return (
    <>
      <SolutionHero
        badge="CTV Monetization"
        badgeIcon={Tv2}
        headline={<>Your CTV Inventory<br /><GradientText gradient="brand">Should Be Earning More</GradientText></>}
        subtext="Server-side ad insertion, programmatic direct deal management, and AI floor pricing — purpose-built for connected TV publishers. Average CTV CPM of $28 across our publisher network."
        stats={STATS}
        panelContent={<CtvHeroPanel />}
        robotVariant="energy"
      />

      <SolutionPartners label="Premium CTV Demand" partners={PARTNERS} />

      <SolutionProblemSolution
        badge="The Problem"
        heading={<>Why CTV Publishers<br /><GradientText gradient="brand">Undermonetize Their Inventory</GradientText></>}
        subtext="Connected TV commands the highest CPMs in digital advertising — but only for publishers with the right infrastructure and demand relationships."
        problems={PROBLEMS}
        solutions={SOLUTIONS}
      />

      <SolutionFeatures
        badge="Platform Features"
        heading={<>Enterprise CTV<br /><GradientText gradient="violet">Ad Infrastructure</GradientText></>}
        subtext="Broadcast-grade server-side ad insertion, intelligent pod management, and premium direct demand — everything CTV publishers need to command top-tier CPMs."
        features={FEATURES}
      />

      <SolutionAnalytics
        badge="Revenue Intelligence"
        heading={<>CTV Revenue Analytics<br /><GradientText gradient="brand">at Streaming Scale</GradientText></>}
        subtext="Track CPM, fill rate, completion rate, and revenue by content genre, device, geography, and daypart. Understand what your CTV audience is worth to advertisers."
        bullets={[
          "CPM breakdown by deal type, demand partner, and content genre",
          "Video completion rate and drop-off point analysis",
          "Audience demographic and geography revenue contribution",
          "Ad pod fill and competitive separation reporting",
          "Programmatic direct deal pacing and delivery tracking",
        ]}
        robotVariant="analytics"
        robotLabel="CTV Revenue Intelligence"
        robotCaption="Identifies CPM floor opportunities and demand gaps across your streaming inventory in real time."
      />

      <CtvMonetizationProcessSection />

      <SolutionWhyUs
        badge="Why Click Dudes"
        heading={<>The CTV Monetization<br /><GradientText gradient="violet">Partner You Need</GradientText></>}
        subtext="CTV is the fastest-growing ad channel. We give independent streaming publishers the infrastructure and demand relationships to compete with broadcast networks."
        items={WHY_US_ITEMS}
      />

      <SolutionMetrics
        badge="Proven Results"
        heading={<>CTV Performance<br /><GradientText gradient="brand">Across Our Network</GradientText></>}
        subtext="Real numbers from streaming publishers managed by Click Dudes."
        metrics={METRICS}
      />

      <CtvTestimonials />

      <SolutionFAQ
        badge="FAQ"
        heading={<>CTV Monetization<br /><GradientText gradient="brand">Questions Answered</GradientText></>}
        subtext="Everything streaming publishers need to know before getting started with Click Dudes CTV."
        faqs={FAQS}
      />

      <CtvMonetizationCTASection />
    </>
  )
}
