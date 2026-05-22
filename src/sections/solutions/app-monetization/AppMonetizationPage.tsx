"use client"

import { Smartphone, BarChart3, Zap, TrendingUp, Shield, DollarSign, Users, Clock, Award, Layers } from "lucide-react"
import { SolutionHero } from "@/sections/solutions/shared/SolutionHero"
import { SolutionPartners } from "@/sections/solutions/shared/SolutionPartners"
import { SolutionProblemSolution } from "@/sections/solutions/shared/SolutionProblemSolution"
import { SolutionFeatures } from "@/sections/solutions/shared/SolutionFeatures"
import { SolutionAnalytics } from "@/sections/solutions/shared/SolutionAnalytics"
import { SolutionFlow } from "@/sections/solutions/shared/SolutionFlow"
import { SolutionWhyUs } from "@/sections/solutions/shared/SolutionWhyUs"
import { SolutionMetrics } from "@/sections/solutions/shared/SolutionMetrics"
import { SolutionFAQ } from "@/sections/solutions/shared/SolutionFAQ"
import { SolutionCTA } from "@/components/marketing/SolutionCTA"
import { AppHeroPanel } from "@/sections/solutions/app-monetization/AppHeroPanel"
import { AppTestimonials } from "@/sections/solutions/app-monetization/AppTestimonials"
import { GradientText } from "@/components/shared/GradientText"

const STATS = [
  { value: "38%",  label: "eCPM increase"   },
  { value: "96%",  label: "Fill rate"        },
  { value: "$0.24", label: "Avg ARPDAU"      },
  { value: "250+", label: "Apps monetized"   },
]

const PARTNERS = [
  "AdMob", "Meta Audience Network", "AppLovin", "Unity Ads", "ironSource",
  "Vungle", "Mintegral", "Liftoff", "Digital Turbine", "InMobi",
  "Chartboost", "AdColony", "Snap Audience Network", "TikTok Ads", "Fyber",
]

const PROBLEMS = [
  { title: "Single Network eCPM Ceiling", body: "Relying on AdMob or a single mediation layer caps your in-app eCPM. Without real-time bid competition from premium mobile DSPs, you're accepting below-market rates." },
  { title: "Format Revenue Imbalance", body: "Most apps over-index on banner ads (lowest CPM) while under-utilizing rewarded video and interstitials that drive 4–8× higher eCPMs without harming user retention." },
  { title: "Privacy Compliance Complexity", body: "ATT, GDPR, and COPPA requirements create technical complexity that delays monetization rollout and risks policy violations that can get your app suspended." },
]

const SOLUTIONS = [
  { title: "In-App Bidding Across 12+ Networks", body: "Simultaneous real-time bids from all major mobile ad networks replace the waterfall. Every impression goes to the highest bidder in under 300ms." },
  { title: "Format Mix Optimization", body: "Our AI determines the optimal placement and frequency for each ad format based on your app category, session length, and user segments to maximize ARPDAU." },
  { title: "Managed Compliance Layer", body: "We configure and maintain your consent management platform, handle ATT prompt optimization, and ensure ongoing compliance with iOS and Android policy updates." },
]

const FEATURES = [
  {
    icon: Smartphone, title: "In-App Bidding Infrastructure",
    description: "Replace legacy waterfall mediation with true simultaneous bidding from AppLovin, Meta, Unity, and 12+ premium mobile networks. Higher eCPMs, lower latency.",
    badge: "Core Tech", accent: "text-brand-purple", glow: "rgba(139,92,246,0.12)",
  },
  {
    icon: BarChart3, title: "Rewarded & Interstitial Optimization",
    description: "AI determines the ideal frequency cap, placement timing, and segment targeting for high-value formats — maximizing revenue without impacting retention metrics.",
    badge: "AI-Powered", accent: "text-brand-blue", glow: "rgba(96,165,250,0.12)",
  },
  {
    icon: Zap, title: "Cross-Platform SDK Management",
    description: "Single lightweight SDK integrates with iOS, Android, and Unity/React Native simultaneously. We handle all SDK version updates and network configuration changes.",
    accent: "text-brand-cyan", glow: "rgba(103,232,249,0.12)",
  },
  {
    icon: Shield, title: "ATT & Privacy Compliance",
    description: "Managed consent management platform with optimized ATT prompts, GDPR consent flows, and COPPA-compliant child-directed ad serving — all maintained by our compliance team.",
    accent: "text-brand-green", glow: "rgba(16,185,129,0.12)",
  },
  {
    icon: Layers, title: "Native & Adaptive Banner Units",
    description: "Custom native ad templates that match your app's UI language drive 2.4× higher CTR than standard banners. Adaptive sizing ensures perfect rendering across all device dimensions.",
    accent: "text-brand-violet", glow: "rgba(168,85,247,0.12)",
  },
  {
    icon: TrendingUp, title: "ARPDAU & LTV Analytics",
    description: "Track revenue per user cohort, session, and acquisition channel. Understand which user segments are most monetizable and optimize your UA spend accordingly.",
    badge: "Premium", accent: "text-brand-purple", glow: "rgba(139,92,246,0.10)",
  },
]

const FLOW_STEPS = [
  { icon: Smartphone, title: "App Audit",          body: "Review of current mediation setup, format mix, eCPM benchmarks, and compliance status to identify the highest-impact optimization opportunities.",    duration: "Day 1–2"  },
  { icon: Layers,     title: "SDK Integration",    body: "Lightweight SDK deployment with in-app bidding configuration, demand network onboarding, and consent management setup — minimal developer effort.",       duration: "Day 3–7"  },
  { icon: BarChart3,  title: "Format Calibration", body: "AI optimizes rewarded video frequency, interstitial timing, and native placement based on your session data and retention curves.",                      duration: "Day 8–21" },
  { icon: TrendingUp, title: "ARPDAU Growth",       body: "Continuous testing of new demand partners, format experiments, and seasonal floor adjustments compounds revenue growth month over month.",              duration: "Day 22+"  },
]

const WHY_US_ITEMS = [
  {
    icon: Award,      title: "Certified AdMob & AdX Partner",
    body: "Our Google certifications provide your app access to premium Google demand that non-certified integrations cannot unlock, including managed buyer deals.",
    highlight: "Google Certified", accent: "text-brand-purple", bg: "rgba(139,92,246,0.10)", dotColor: "purple" as const,
  },
  {
    icon: Zap,        title: "Sub-300ms In-App Bidding",
    body: "Our SDK is engineered for mobile performance. Auction completion in under 300ms means no perceptible ad loading delay, protecting your app's UX ratings.",
    highlight: "Speed Optimized", accent: "text-brand-blue", bg: "rgba(96,165,250,0.10)", dotColor: "blue" as const,
  },
  {
    icon: BarChart3,  title: "Format Mix AI",
    body: "Proprietary models predict ARPDAU impact of each format configuration change — so we test smarter, not more. Fewer disruptions, faster gains.",
    highlight: "AI-Driven", accent: "text-brand-cyan", bg: "rgba(103,232,249,0.10)", dotColor: "cyan" as const,
  },
  {
    icon: Users,      title: "Dedicated App Monetization Manager",
    body: "Mobile ad-tech specialists who've worked with top-100 grossing apps manage your account. Real expertise, not a generalist support queue.",
    highlight: "Expert Team", accent: "text-brand-green", bg: "rgba(16,185,129,0.10)", dotColor: "green" as const,
  },
]

const METRICS = [
  { icon: TrendingUp, value: 38,   decimals: 0, prefix: "",  suffix: "%",  label: "eCPM Increase",    caption: "Average across all app categories",              accent: "text-brand-purple", bg: "rgba(139,92,246,0.10)" },
  { icon: DollarSign, value: 0.24, decimals: 2, prefix: "$", suffix: "",   label: "Avg ARPDAU",       caption: "Across managed app portfolio",                   accent: "text-brand-blue",   bg: "rgba(96,165,250,0.10)" },
  { icon: BarChart3,  value: 96.8, decimals: 1, prefix: "",  suffix: "%",  label: "Fill Rate",        caption: "Maintained with in-app bidding",                 accent: "text-brand-green",  bg: "rgba(16,185,129,0.10)" },
  { icon: Clock,      value: 7,    decimals: 0, prefix: "",  suffix: " days", label: "SDK Live Time", caption: "From kickoff to first optimized impression",     accent: "text-brand-cyan",   bg: "rgba(103,232,249,0.10)" },
]


const FAQS = [
  {
    question: "What DAU threshold do I need to qualify?",
    answer:   "We typically work with apps generating 10,000+ daily active users. Quality of engagement, session duration, and content category matter significantly — a highly engaged niche app with 15K DAU can outperform a low-engagement app with 100K DAU.",
  },
  {
    question: "Which platforms do you support — iOS, Android, or both?",
    answer:   "We support iOS, Android, and cross-platform frameworks including Unity, React Native, and Flutter. Our SDK handles platform-specific compliance requirements (ATT on iOS, consent framework on Android) automatically.",
  },
  {
    question: "Will in-app bidding hurt my app's performance or increase crashes?",
    answer:   "Our SDK is built for mobile performance. The auction occurs asynchronously, adding no perceptible latency to your app UI. SDK size is under 800KB. We provide before/after performance benchmarks for every integration.",
  },
  {
    question: "How do you handle COPPA for apps with child audiences?",
    answer:   "For child-directed apps or mixed-audience apps, we configure age-gating, mixed-audience signals, and child-directed ad serving settings that are compliant with COPPA, GDPR-K, and Google Play Families Policy.",
  },
  {
    question: "Can you work alongside my existing AdMob or MoPub setup?",
    answer:   "Yes. We typically integrate as the mediation layer above your existing networks, adding in-app bidding competition while preserving your existing waterfall relationships as fallback demand.",
  },
  {
    question: "What does your fee structure look like for apps?",
    answer:   "Revenue share model with no setup fees or monthly minimums. Our fee is calculated on incremental revenue above your established baseline. Rates depend on app category, DAU volume, and geo mix — discussed during onboarding.",
  },
]

export function AppMonetizationPage() {
  return (
    <>
      <SolutionHero
        badge="App Monetization"
        badgeIcon={Smartphone}
        headline={<>Maximize In-App Revenue<br /><GradientText gradient="brand">Across Every Format</GradientText></>}
        subtext="In-app bidding from 12+ premium networks, AI format optimization, and managed compliance — all managed by our mobile monetization specialists. Average apps see 38% eCPM uplift."
        stats={STATS}
        panelContent={<AppHeroPanel />}
        robotVariant="laptop"
      />

      <SolutionPartners label="Mobile Demand Partners" partners={PARTNERS} />

      <SolutionProblemSolution
        badge="The Problem"
        heading={<>What's Limiting Your<br /><GradientText gradient="brand">In-App Revenue</GradientText></>}
        subtext="Most app publishers are leaving significant revenue on the table through outdated mediation, poor format mix, and compliance friction."
        problems={PROBLEMS}
        solutions={SOLUTIONS}
      />

      <SolutionFeatures
        badge="Platform Features"
        heading={<>Every Tool for<br /><GradientText gradient="violet">Maximum App Revenue</GradientText></>}
        subtext="From in-app bidding infrastructure to ARPDAU analytics — everything your app needs to reach its revenue ceiling."
        features={FEATURES}
      />

      <SolutionAnalytics
        badge="Revenue Intelligence"
        heading={<>ARPDAU Analytics That<br /><GradientText gradient="brand">Drive Real Decisions</GradientText></>}
        subtext="Track every monetization metric by user cohort, format, and acquisition channel. Understand exactly which users generate revenue and how to grow it."
        bullets={[
          "eCPM and fill rate by network, format, and placement",
          "ARPDAU tracking by user acquisition source",
          "Rewarded video completion rate and revenue correlation",
          "Cohort-level LTV and monetization efficiency",
          "Automated alerts for bid floor and demand anomalies",
        ]}
        robotVariant="analytics"
        robotLabel="Mobile Revenue AI"
        robotCaption="Identifies high-value user segments and recommends format mix adjustments in real time."
      />

      <SolutionFlow
        badge="Integration Process"
        heading={<>SDK Live in 7 Days,<br /><GradientText gradient="brand">ARPDAU Growing in 30</GradientText></>}
        subtext="Minimal developer effort. Our team handles SDK configuration, network onboarding, and compliance setup — you focus on your app."
        steps={FLOW_STEPS}
      />

      <SolutionWhyUs
        badge="Why Click Dudes"
        heading={<>App Monetization<br /><GradientText gradient="violet">Done Right</GradientText></>}
        subtext="Purpose-built for app publishers who want enterprise-grade monetization without the enterprise-grade complexity."
        items={WHY_US_ITEMS}
      />

      <SolutionMetrics
        badge="Proven Results"
        heading={<>App Revenue Numbers<br /><GradientText gradient="brand">That Matter</GradientText></>}
        subtext="Observed performance across our managed app portfolio — not projections."
        metrics={METRICS}
      />

      <AppTestimonials />

      <SolutionFAQ
        badge="FAQ"
        heading={<>App Monetization<br /><GradientText gradient="brand">Questions Answered</GradientText></>}
        subtext="Everything mobile app publishers need to know before getting started."
        faqs={FAQS}
      />

      <SolutionCTA
        heading="Ready to Maximize Your App Revenue?"
        subheading="Join 250+ app publishers earning more with Click Dudes' fully managed in-app bidding stack. No SDK headaches, no guesswork, just better eCPMs."
        robotVariant="celebrate"
        primaryCTA={{ label: "Let's Monetize Your App", href: "/about/contact-us" }}
      />
    </>
  )
}
