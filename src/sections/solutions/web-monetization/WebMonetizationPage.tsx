"use client"

import { Globe, BarChart3, Layers, Zap, TrendingUp, Shield, DollarSign, Users, Clock, Award } from "lucide-react"
import { SolutionHero } from "@/sections/solutions/shared/SolutionHero"
import { SolutionPartners } from "@/sections/solutions/shared/SolutionPartners"
import { SolutionProblemSolution } from "@/sections/solutions/shared/SolutionProblemSolution"
import { SolutionFeatures } from "@/sections/solutions/shared/SolutionFeatures"
import { SolutionAnalytics } from "@/sections/solutions/shared/SolutionAnalytics"
import { SolutionWhyUs } from "@/sections/solutions/shared/SolutionWhyUs"
import { SolutionMetrics } from "@/sections/solutions/shared/SolutionMetrics"
import { SolutionFAQ } from "@/sections/solutions/shared/SolutionFAQ"
import { WebHeroPanel } from "@/sections/solutions/web-monetization/WebHeroPanel"
import { WebTestimonials } from "@/sections/solutions/web-monetization/WebTestimonials"
import { WebMonetizationProcessSection } from "@/sections/solutions/web-monetization/WebMonetizationProcessSection"
import { WebMonetizationCTASection } from "@/sections/solutions/web-monetization/WebMonetizationCTASection"
import { GradientText } from "@/components/shared/GradientText"

const STATS = [
  { value: "41%",   label: "Avg RPM lift"       },
  { value: "97%",   label: "Fill rate"           },
  { value: "30d",   label: "To first results"    },
  { value: "500+",  label: "Web publishers"      },
]

const PARTNERS = [
  "Google AdX", "OpenX", "Magnite", "Index Exchange", "PubMatic",
  "Criteo", "Xandr", "Sharethrough", "TripleLift", "33Across",
  "Sovrn", "EMX", "GumGum", "SmartAdServer", "Yieldmo",
]

const PROBLEMS = [
  { title: "AdSense CPM Ceiling", body: "Single-demand waterfall caps your CPMs at AdSense rates. Competing demand partners are completely locked out, leaving money on the table every day." },
  { title: "Zero Yield Visibility", body: "AdSense reports give you totals, not intelligence. You can't see which placements, device types, or geographies are underperforming." },
  { title: "No Direct Deal Access", body: "Premium advertisers pay 3–6× higher CPMs through direct and preferred deals — but without AdX access, this demand segment is entirely inaccessible." },
]

const SOLUTIONS = [
  { title: "Full Demand Competition", body: "Deploy 15+ premium SSPs in a unified auction. Every impression triggers real-time competition across Google AdX, open exchange, and private marketplace simultaneously." },
  { title: "Granular Revenue Intelligence", body: "Session-level analytics break down CPM, fill rate, and revenue by placement, device, OS, geography, and ad format — refreshed every 30 minutes." },
  { title: "Private Marketplace Access", body: "Our managed demand team negotiates preferred deals and private auction packages with tier-1 brand advertisers specifically for your content vertical." },
]

const FEATURES = [
  {
    icon: Layers, title: "Unified Auction Architecture",
    description: "Server-side header bidding runs 15+ DSPs in parallel sub-200ms. No latency tax, no waterfall bottlenecks. Every impression goes to the highest bidder in real time.",
    badge: "Core Tech", accent: "text-brand-purple", glow: "rgba(139,92,246,0.12)",
  },
  {
    icon: BarChart3, title: "AI Floor Price Optimization",
    description: "Machine learning models analyze historical CPM patterns by placement, hour, device, and geo to set dynamic price floors that maximize revenue without sacrificing fill rate.",
    badge: "AI-Powered", accent: "text-brand-blue", glow: "rgba(96,165,250,0.12)",
  },
  {
    icon: Zap, title: "Lazy & Refresh Ad Loading",
    description: "Smart lazy loading improves Core Web Vitals while ad refresh at configurable intervals significantly increases total impressions served per session.",
    accent: "text-brand-purple", glow: "rgba(103,232,249,0.12)",
  },
  {
    icon: Shield, title: "Ad Quality & Brand Safety",
    description: "Pre-bid blocking eliminates low-quality, malware-risk, and brand-unsafe creatives before they ever render. Your audience experience is protected without sacrificing revenue.",
    accent: "text-brand-green", glow: "rgba(16,185,129,0.12)",
  },
  {
    icon: Globe, title: "Multi-Format Ad Support",
    description: "Display, native, sticky, interstitial, and video ad units all managed from a single tag. Serve the right format to the right user at the right moment.",
    accent: "text-brand-violet", glow: "rgba(168,85,247,0.12)",
  },
  {
    icon: TrendingUp, title: "Real-Time Reporting Suite",
    description: "Live dashboard tracks every monetization metric with granular drill-down. Schedule automated email reports for stakeholder transparency.",
    badge: "Premium", accent: "text-brand-purple", glow: "rgba(139,92,246,0.10)",
  },
]

const WHY_US_ITEMS = [
  {
    icon: Award,      title: "Google Certified MCM Partner",
    body: "We're a certified Multiple Customer Management partner, giving your site direct access to the full Google AdX demand pool that standard publishers can't reach alone.",
    highlight: "Google Certified", accent: "text-brand-purple", bg: "rgba(139,92,246,0.10)", dotColor: "purple" as const,
  },
  {
    icon: Zap,        title: "Sub-200ms Header Bidding",
    body: "Our server-side bidding infrastructure runs auctions with under 200ms added latency — fast enough that Core Web Vitals scores are not affected by the ad stack.",
    highlight: "Speed Optimized", accent: "text-brand-blue", bg: "rgba(96,165,250,0.10)", dotColor: "blue" as const,
  },
  {
    icon: BarChart3,  title: "Proprietary AI Yield Engine",
    body: "Built on 3+ years of publisher data, our floor pricing AI outperforms manual optimization by 18% on average — and it keeps improving as it learns your audience.",
    highlight: "AI-Powered", accent: "text-brand-purple", bg: "rgba(103,232,249,0.10)", dotColor: "cyan" as const,
  },
  {
    icon: Users,      title: "Dedicated Publisher Manager",
    body: "A real human with ad-tech expertise monitors your account, answers questions, and proactively surfaces revenue opportunities — not a ticket queue.",
    highlight: "White Glove", accent: "text-brand-green", bg: "rgba(16,185,129,0.10)", dotColor: "green" as const,
  },
]

const METRICS = [
  { icon: TrendingUp, value: 41,   decimals: 0, prefix: "",  suffix: "%",   label: "Average RPM Lift",     caption: "Over AdSense baseline within 30 days",          accent: "text-brand-purple", bg: "rgba(139,92,246,0.10)" },
  { icon: BarChart3,  value: 97.2, decimals: 1, prefix: "",  suffix: "%",   label: "Fill Rate",            caption: "Maintained across all demand sources",          accent: "text-brand-blue",   bg: "rgba(96,165,250,0.10)" },
  { icon: DollarSign, value: 2.8,  decimals: 1, prefix: "",  suffix: "×",   label: "CPM Multiplier",       caption: "Versus single-network baseline",                accent: "text-brand-green",  bg: "rgba(16,185,129,0.10)" },
  { icon: Clock,      value: 7,    decimals: 0, prefix: "",  suffix: " days", label: "Integration Time",   caption: "From sign-up to first optimized impression",    accent: "text-brand-purple",   bg: "rgba(103,232,249,0.10)" },
]


const FAQS = [
  {
    question: "What traffic threshold do I need to qualify?",
    answer:   "We work with web publishers generating 500K+ monthly pageviews. Traffic quality — engagement depth, Tier-1 geography, content compliance — matters as much as raw volume. Publishers with highly engaged niche audiences often outperform high-volume general news sites.",
  },
  {
    question: "Will adding more demand partners slow down my site?",
    answer:   "No. We use server-side header bidding, which means the auction happens on our servers — not in the user's browser. Latency impact is under 200ms and your Core Web Vitals scores are unaffected. We'll run a before/after speed benchmark as part of every integration.",
  },
  {
    question: "How long until I see a meaningful revenue lift?",
    answer:   "Most publishers see measurable improvement within the first 7 days. The AI floor optimizer typically reaches peak performance after 21 days of traffic data. Our published average is 41% RPM uplift within the first 30 days across all verticals.",
  },
  {
    question: "Can I keep my existing AdSense account running?",
    answer:   "Yes. We configure AdSense as a demand partner within your ad stack rather than replacing it. AdX and open exchange bids compete against AdSense in real time — AdSense still wins impressions when it bids highest. Revenue from all sources is tracked in a single unified dashboard.",
  },
  {
    question: "What content categories do you work with?",
    answer:   "We work across news, finance, technology, lifestyle, food, travel, health, entertainment, and sports content verticals. We don't work with adult content, gambling sites (without appropriate licensing), or content that violates Google Publisher Policies.",
  },
  {
    question: "What is your fee structure?",
    answer:   "We operate on a transparent revenue share model. No setup fees, no monthly minimums. Our fee is a percentage of the revenue we generate beyond your baseline. Specific rates are discussed during the initial consultation based on your traffic and vertical.",
  },
]

export function WebMonetizationPage() {
  return (
    <>
      <SolutionHero
        badge="Web Monetization"
        badgeIcon={Globe}
        headline={<>Turn Your Web Traffic Into<br /><GradientText gradient="brand">Maximum Revenue</GradientText></>}
        subtext="Deploy the full premium ad stack — Google AdX, 15+ SSPs, AI price floors, and header bidding — managed entirely by our team. Average publishers see 41% RPM uplift within 30 days."
        stats={STATS}
        panelContent={<WebHeroPanel />}
        robotVariant="analytics"
      />

      <SolutionPartners label="Premium Demand Partners" partners={PARTNERS} />

      <SolutionProblemSolution
        badge="The Problem"
        heading={<>Why Publishers<br /><GradientText gradient="brand">Leave Revenue Behind</GradientText></>}
        subtext="Most web publishers are running an ad stack that was designed for simplicity, not for maximum yield. Here's what's limiting your revenue right now."
        problems={PROBLEMS}
        solutions={SOLUTIONS}
      />

      <SolutionFeatures
        badge="Platform Features"
        heading={<>The Complete Web<br /><GradientText gradient="violet">Monetization Stack</GradientText></>}
        subtext="The complete web monetization stack — Google AdX, header bidding, AI price floors, premium SSPs — managed by our team, built around your inventory."
        features={FEATURES}
      />

      <SolutionAnalytics
        badge="Revenue Intelligence"
        heading={<>Real-Time Analytics<br /><GradientText gradient="brand">Built for Publishers</GradientText></>}
        subtext="Session-level revenue data, demand partner breakdown, and AI-driven recommendations — refreshed every 30 minutes so you're always acting on current intelligence."
        bullets={[
          "Placement-level CPM, fill rate, and revenue breakdown",
          "Device and geography performance segmentation",
          "Demand partner contribution and bid density analysis",
          "AI-powered revenue opportunity alerts",
          "Automated daily and weekly stakeholder reports",
        ]}
        robotVariant="analytics"
        robotLabel="AI Yield Advisor"
        robotCaption="Surfaces floor price adjustments and demand gaps before they cost you revenue."
      />

      <WebMonetizationProcessSection />

      <SolutionWhyUs
        badge="Why Click Dudes"
        heading={<>Premium Monetization,<br /><GradientText gradient="violet">Without the Complexity</GradientText></>}
        subtext="Access enterprise-grade ad technology and demand relationships that were previously only available to the largest media companies."
        items={WHY_US_ITEMS}
      />

      <SolutionMetrics
        badge="Proven Results"
        heading={<>Numbers That<br /><GradientText gradient="brand">Speak for Themselves</GradientText></>}
        subtext="Real performance data from our publisher network — not projections or best-case scenarios."
        metrics={METRICS}
      />

      <WebTestimonials />

      <SolutionFAQ
        badge="FAQ"
        heading={<>Web Monetization<br /><GradientText gradient="brand">Questions Answered</GradientText></>}
        subtext="Questions publishers ask before making the switch. Honest answers about timelines, results, and how it works."
        faqs={FAQS}
      />

      <WebMonetizationCTASection />
    </>
  )
}
