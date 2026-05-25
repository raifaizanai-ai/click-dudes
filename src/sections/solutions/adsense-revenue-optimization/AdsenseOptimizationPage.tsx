"use client"

import { TrendingUp, BarChart3, Zap, Shield, DollarSign, Users, Clock, Award, Layers, Globe } from "lucide-react"
import { SolutionHero } from "@/sections/solutions/shared/SolutionHero"
import { SolutionPartners } from "@/sections/solutions/shared/SolutionPartners"
import { SolutionProblemSolution } from "@/sections/solutions/shared/SolutionProblemSolution"
import { SolutionFeatures } from "@/sections/solutions/shared/SolutionFeatures"
import { SolutionAnalytics } from "@/sections/solutions/shared/SolutionAnalytics"
import { SolutionWhyUs } from "@/sections/solutions/shared/SolutionWhyUs"
import { SolutionMetrics } from "@/sections/solutions/shared/SolutionMetrics"
import { SolutionFAQ } from "@/sections/solutions/shared/SolutionFAQ"
import { AdsenseHeroPanel } from "@/sections/solutions/adsense-revenue-optimization/AdsenseHeroPanel"
import { AdsenseTestimonials } from "@/sections/solutions/adsense-revenue-optimization/AdsenseTestimonials"
import { AdsenseProcessSection } from "@/sections/solutions/adsense-revenue-optimization/AdsenseProcessSection"
import { AdsenseCTASection } from "@/sections/solutions/adsense-revenue-optimization/AdsenseCTASection"
import { GradientText } from "@/components/shared/GradientText"

const STATS = [
  { value: "62%",  label: "AdSense RPM lift"   },
  { value: "84%",  label: "Avg viewability"    },
  { value: "2.8%", label: "Avg CTR"            },
  { value: "400+", label: "Sites optimized"    },
]

const PARTNERS = [
  "Google AdSense", "Google Auto Ads", "Google Ad Manager", "Google Analytics 4",
  "Google Search Console", "Core Web Vitals", "PageSpeed Insights", "CrUX Data",
  "Ezoic", "Mediavine", "Raptive", "AdThrive", "Taboola", "Outbrain", "Monumetric",
]

const PROBLEMS = [
  { title: "Below-Potential Page RPM", body: "Most AdSense publishers are generating 40–70% of their inventory's theoretical RPM ceiling. Suboptimal placement, poor viewability, and missing ad format types are the primary causes — all fixable without additional traffic." },
  { title: "Ad Layout Hurts User Experience", body: "Aggressive ad placement increases short-term impressions but drives bounce rate, reduces session depth, and ultimately damages the organic search traffic that AdSense revenue depends on." },
  { title: "Policy Compliance Risk", body: "AdSense accounts are suspended or revenue-withheld regularly for policy violations that publishers don't know they're committing. Invalid traffic, placement violations, and auto-ads misconfiguration are the most common risks." },
]

const SOLUTIONS = [
  { title: "Scientifically Optimized Ad Layout", body: "We A/B test placement, size, format mix, and density against your specific content type and audience behavior — maximizing RPM while improving engagement metrics simultaneously." },
  { title: "User-First Ad Architecture", body: "Our optimization philosophy prioritizes viewability and authentic engagement over raw impression volume. Higher-quality impressions command higher CPMs and protect your organic search performance." },
  { title: "Policy-Safe Compliance Management", body: "We audit your current implementation for policy risks, set up monitoring for invalid traffic signals, and maintain ongoing compliance review as Google's policies evolve." },
]

const FEATURES = [
  {
    icon: Layers, title: "Ad Layout Optimization",
    description: "Data-driven placement testing finds the optimal position, size, and density for each ad unit on your specific content templates — maximizing RPM without degrading user experience metrics.",
    badge: "Core Service", accent: "text-brand-purple", glow: "rgba(139,92,246,0.12)",
  },
  {
    icon: BarChart3, title: "Auto Ads Intelligence",
    description: "We configure and tune Google Auto Ads with custom exclusion zones, density limits, and format preferences — preventing the default settings from harming your Core Web Vitals or UX.",
    badge: "AI-Assisted", accent: "text-brand-blue", glow: "rgba(96,165,250,0.12)",
  },
  {
    icon: TrendingUp, title: "Viewability Maximization",
    description: "Lazy loading, sticky ad units, and scroll-depth targeting are configured to ensure the maximum percentage of your impressions qualify for viewable CPM — commanding the premium advertisers pay for.",
    accent: "text-brand-purple", glow: "rgba(103,232,249,0.12)",
  },
  {
    icon: Shield, title: "Policy Compliance Audit",
    description: "Comprehensive audit of your AdSense implementation against current Google Publisher Policies — including invalid traffic signals, placement rules, and content policy alignment.",
    accent: "text-brand-green", glow: "rgba(16,185,129,0.12)",
  },
  {
    icon: Zap, title: "Core Web Vitals & Page Speed",
    description: "Ad implementation that passes Core Web Vitals thresholds. We optimize ad loading to prevent CLS, LCP degradation, and FID — protecting your SEO while maximizing ad revenue.",
    accent: "text-brand-violet", glow: "rgba(168,85,247,0.12)",
  },
  {
    icon: Globe, title: "AdSense to AdX Migration Path",
    description: "When you're ready to move beyond AdSense, we handle the AdX migration with zero revenue disruption — opening up premium demand channels that AdSense simply can't reach.",
    badge: "Growth Path", accent: "text-brand-purple", glow: "rgba(139,92,246,0.10)",
  },
]

const WHY_US_ITEMS = [
  {
    icon: Award,      title: "AdSense Optimization Track Record",
    body: "We've optimized AdSense implementations for 400+ publishers. Our average client sees a 62% RPM improvement — and the methodology is repeatable, not luck.",
    highlight: "Proven Results", accent: "text-brand-purple", bg: "rgba(139,92,246,0.10)", dotColor: "purple" as const,
  },
  {
    icon: Shield,     title: "Policy-First Approach",
    body: "Every optimization we recommend is reviewed against current Google Publisher Policies. We don't chase short-term gains that put your account at risk — we build sustainable revenue.",
    highlight: "Policy Safe", accent: "text-brand-blue", bg: "rgba(96,165,250,0.10)", dotColor: "blue" as const,
  },
  {
    icon: Zap,        title: "SEO-Compatible Ad Architecture",
    body: "Our ad implementations are designed to maintain or improve Core Web Vitals scores. We've never had a client lose organic traffic due to ad implementation changes.",
    highlight: "SEO Friendly", accent: "text-brand-purple", bg: "rgba(103,232,249,0.10)", dotColor: "cyan" as const,
  },
  {
    icon: TrendingUp, title: "Clear Path to AdX",
    body: "We treat AdSense optimization as the foundation, not the ceiling. When you're ready for AdX, we run the migration clean — no revenue disruption, no guesswork.",
    highlight: "Growth Ready", accent: "text-brand-green", bg: "rgba(16,185,129,0.10)", dotColor: "green" as const,
  },
]

const METRICS = [
  { icon: TrendingUp, value: 62,  decimals: 0, prefix: "",  suffix: "%",  label: "AdSense RPM Lift",   caption: "Average across 400+ optimized sites",           accent: "text-brand-purple", bg: "rgba(139,92,246,0.10)" },
  { icon: BarChart3,  value: 84.3, decimals: 1, prefix: "", suffix: "%",  label: "Avg Viewability",    caption: "Post-optimization viewability rate",            accent: "text-brand-blue",   bg: "rgba(96,165,250,0.10)" },
  { icon: Zap,        value: 2.8, decimals: 1, prefix: "",  suffix: "%",  label: "Average CTR",        caption: "Across optimized ad placements",               accent: "text-brand-green",  bg: "rgba(16,185,129,0.10)" },
  { icon: Clock,      value: 7,   decimals: 0, prefix: "",  suffix: " days", label: "To First Uplift", caption: "From audit completion to measurable RPM gain",  accent: "text-brand-purple",   bg: "rgba(103,232,249,0.10)" },
]


const FAQS = [
  {
    question: "My AdSense RPM seems low — how do I know what's possible?",
    answer:   "RPM depends on content vertical, geography, session depth, viewability, and ad format mix. As a benchmark: finance content in Tier-1 geographies should generate $4–$8+ RPM with optimized placement. Lifestyle and food content typically ranges $2–$5. Our free audit establishes your specific ceiling and the gap from your current performance.",
  },
  {
    question: "Will changing my ad layout hurt my Google search rankings?",
    answer:   "Not with our approach. Every layout change we recommend is reviewed for Core Web Vitals impact before implementation. Our ad loading configurations are specifically designed to maintain LCP, CLS, and FID scores. We've optimized 400+ sites without a single organic traffic loss attributable to ad changes.",
  },
  {
    question: "How does Google Auto Ads optimization work?",
    answer:   "Google Auto Ads uses machine learning to insert ad units across your page. By default, it optimizes for Google's revenue, not yours. We configure exclusion zones, density limits, format restrictions, and placement preferences that align Auto Ads behavior with your UX goals and RPM targets.",
  },
  {
    question: "What AdSense policy violations are most common?",
    answer:   "The most common issues we find are: ads placed too close to navigation or interactive elements, click-incentivizing language near ads, placement that encourages accidental clicks, and ad density exceeding Google's guidelines on mobile. All are fixable once identified — and our audit catches all of them.",
  },
  {
    question: "When should I consider upgrading from AdSense to AdX?",
    answer:   "Once your site generates 500K+ monthly pageviews with strong Tier-1 geography traffic and compliant content, AdX access typically delivers 30–50% higher RPMs than optimized AdSense. We assess AdX readiness as part of our ongoing management and will recommend migration when the economics clearly support it.",
  },
  {
    question: "Do you work with bloggers and small publishers, or only large media companies?",
    answer:   "We work with AdSense publishers across all sizes — from individual bloggers generating $500/month to niche media companies generating $50,000/month. Our optimization methodology scales from single-author sites to large editorial teams.",
  },
]

export function AdsenseOptimizationPage() {
  return (
    <>
      <SolutionHero
        badge="AdSense Revenue Optimization"
        badgeIcon={TrendingUp}
        headline={<>Your AdSense Revenue<br /><GradientText gradient="brand">Should Be Higher</GradientText></>}
        subtext="Expert AdSense layout optimization, viewability maximization, and policy compliance management. Our publishers see an average 62% RPM increase without changing their traffic or content."
        stats={STATS}
        panelContent={<AdsenseHeroPanel />}
        robotVariant="wave"
      />

      <SolutionPartners label="Optimization Partners" partners={PARTNERS} />

      <SolutionProblemSolution
        badge="The Problem"
        heading={<>Why Your AdSense RPM<br /><GradientText gradient="brand">Isn't What It Should Be</GradientText></>}
        subtext="Most AdSense publishers are operating well below their RPM ceiling. The gap is almost never about traffic volume — it's about implementation quality."
        problems={PROBLEMS}
        solutions={SOLUTIONS}
      />

      <SolutionFeatures
        badge="Optimization Services"
        heading={<>Every Lever for<br /><GradientText gradient="violet">Maximum AdSense Revenue</GradientText></>}
        subtext="Layout optimization, viewability engineering, compliance management, and a direct path to AdX when you're ready for more."
        features={FEATURES}
      />

      <SolutionAnalytics
        badge="Revenue Intelligence"
        heading={<>AdSense Analytics That<br /><GradientText gradient="brand">Reveal the Real Picture</GradientText></>}
        subtext="Beyond RPM totals — understand exactly which placements, pages, and user segments are generating revenue and which are leaving money behind."
        bullets={[
          "Page-level RPM breakdown by content category and template",
          "Ad unit viewability rate and active view CPM tracking",
          "CTR analysis by placement position and format type",
          "Core Web Vitals and CLS impact monitoring",
          "Auto Ads performance versus manual units comparison",
        ]}
        robotVariant="analytics"
        robotLabel="AdSense Intelligence AI"
        robotCaption="Identifies underperforming placements and policy risk signals before they impact your account."
      />

      <AdsenseProcessSection />

      <SolutionWhyUs
        badge="Why Click Dudes"
        heading={<>AdSense Experts Who<br /><GradientText gradient="violet">Know the Ceiling</GradientText></>}
        subtext="We've optimized AdSense for 400+ publishers across every content vertical. We know exactly what's possible for your specific site and how to get there."
        items={WHY_US_ITEMS}
      />

      <SolutionMetrics
        badge="Proven Results"
        heading={<>AdSense Optimization<br /><GradientText gradient="brand">Numbers That Hold Up</GradientText></>}
        subtext="Observed performance across 400+ AdSense publisher optimizations."
        metrics={METRICS}
      />

      <AdsenseTestimonials />

      <SolutionFAQ
        badge="FAQ"
        heading={<>AdSense Optimization<br /><GradientText gradient="brand">Questions Answered</GradientText></>}
        subtext="Common questions before your AdSense audit. We keep the answers short and honest."
        faqs={FAQS}
      />

      <AdsenseCTASection />
    </>
  )
}
