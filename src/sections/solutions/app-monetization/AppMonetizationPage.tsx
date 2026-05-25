"use client"

import { BarChart3, TrendingUp, DollarSign, Clock } from "lucide-react"
import { SolutionPartners } from "@/sections/solutions/shared/SolutionPartners"
import { SolutionMetrics } from "@/sections/solutions/shared/SolutionMetrics"
import { SolutionFAQ } from "@/sections/solutions/shared/SolutionFAQ"
import { AppHeroSection } from "@/sections/solutions/app-monetization/AppHeroSection"
import { AppFeaturesSection } from "@/sections/solutions/app-monetization/AppFeaturesSection"
import { AppGrowthSection } from "@/sections/solutions/app-monetization/AppGrowthSection"
import { AppEcosystemSection } from "@/sections/solutions/app-monetization/AppEcosystemSection"
import { AppTestimonials } from "@/sections/solutions/app-monetization/AppTestimonials"
import { AppMonetizationProcessSection } from "@/sections/solutions/app-monetization/AppMonetizationProcessSection"
import { AppMonetizationCTASection } from "@/sections/solutions/app-monetization/AppMonetizationCTASection"
import { GradientText } from "@/components/shared/GradientText"

const PARTNERS = [
  "AdMob", "Meta Audience Network", "AppLovin", "Unity Ads", "ironSource",
  "Vungle", "Mintegral", "Liftoff", "Digital Turbine", "InMobi",
  "Chartboost", "AdColony", "Snap Audience Network", "TikTok Ads", "Fyber",
]

const METRICS = [
  { icon: TrendingUp, value: 38,   decimals: 0, prefix: "",  suffix: "%",     label: "eCPM Increase",  caption: "Average across all app categories",          accent: "text-brand-purple", bg: "rgba(139,92,246,0.10)" },
  { icon: DollarSign, value: 0.24, decimals: 2, prefix: "$", suffix: "",      label: "Avg ARPDAU",     caption: "Across managed app portfolio",               accent: "text-brand-blue",   bg: "rgba(96,165,250,0.10)" },
  { icon: BarChart3,  value: 96.8, decimals: 1, prefix: "",  suffix: "%",     label: "Fill Rate",      caption: "Maintained with in-app bidding",             accent: "text-brand-green",  bg: "rgba(16,185,129,0.10)" },
  { icon: Clock,      value: 7,    decimals: 0, prefix: "",  suffix: " days", label: "SDK Live Time",  caption: "From kickoff to first optimized impression",  accent: "text-brand-purple", bg: "rgba(103,232,249,0.10)" },
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
      <AppHeroSection />

      <SolutionPartners label="Mobile Demand Partners" partners={PARTNERS} />

      <AppFeaturesSection />

      <AppGrowthSection />

      <AppMonetizationProcessSection />

      <SolutionMetrics
        badge="Proven Results"
        heading={<>App Revenue Numbers<br /><GradientText gradient="brand">That Matter</GradientText></>}
        subtext="Observed performance across our managed app portfolio — not projections."
        metrics={METRICS}
      />

      <AppEcosystemSection />

      <AppTestimonials />

      <SolutionFAQ
        badge="FAQ"
        heading={<>App Monetization<br /><GradientText gradient="brand">Questions Answered</GradientText></>}
        subtext="Everything mobile app publishers need to know before getting started."
        faqs={FAQS}
      />

      <AppMonetizationCTASection />
    </>
  )
}
