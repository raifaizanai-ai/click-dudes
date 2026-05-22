"use client"

import { Layers, BarChart3, Zap, TrendingUp, Shield, DollarSign, Users, Clock, Award, Globe } from "lucide-react"
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
import { HBHeroPanel } from "@/sections/solutions/header-bidding-solutions/HBHeroPanel"
import { HBTestimonials } from "@/sections/solutions/header-bidding-solutions/HBTestimonials"
import { GradientText } from "@/components/shared/GradientText"

const STATS = [
  { value: "47%",  label: "CPM increase"     },
  { value: "15+",  label: "SSP partners"     },
  { value: "187ms", label: "Auction latency" },
  { value: "700+", label: "Publishers live"  },
]

const PARTNERS = [
  "Google AdX", "Index Exchange", "PubMatic", "OpenX", "Magnite",
  "Criteo", "Xandr", "ShareThrough", "TripleLift", "Sovrn",
  "EMX Digital", "GumGum", "SmartAdServer", "33Across", "Yieldmo",
]

const PROBLEMS = [
  { title: "Waterfall Leaves Revenue Behind", body: "Legacy waterfall ad stacks process demand sequentially — the first network to meet your floor wins, not the highest bidder. Publishers using waterfalls typically realize only 60–70% of their inventory's true market value." },
  { title: "Auction Latency Hurts UX and SEO", body: "Client-side header bidding with many partners adds 800ms–2000ms of page load time. This damages Core Web Vitals scores, reduces ad viewability, and can impact organic search ranking." },
  { title: "No Transparency into Bid Competition", body: "Without proper auction analytics, publishers can't see which SSPs are competing, what floors are being hit, or why revenue fluctuates. Optimization without data is impossible." },
]

const SOLUTIONS = [
  { title: "Simultaneous Unified Auction", body: "All 15+ demand partners bid simultaneously via our server-side infrastructure. The highest bid wins every impression — not the first one to meet a floor. Full price discovery on every auction." },
  { title: "Sub-200ms Server-Side Infrastructure", body: "Auctions run on our servers, not in the user's browser. Zero client-side JavaScript overhead, no Core Web Vitals impact, no degradation to organic search performance." },
  { title: "Complete Bid Transparency Dashboard", body: "See every bid from every partner on every impression. Identify which SSPs are competitive on your inventory, which floors are optimal, and where demand density is lowest." },
]

const FEATURES = [
  {
    icon: Layers, title: "Prebid.js Unified Auction",
    description: "Industry-standard Prebid.js implementation with our custom optimizations — 15+ SSP adapters, server-to-server bidding, and bid caching for maximum efficiency.",
    badge: "Core Tech", accent: "text-brand-purple", glow: "rgba(139,92,246,0.12)",
  },
  {
    icon: Zap, title: "Server-Side Bidding (S2S)",
    description: "Move auction computation from the user's browser to our low-latency server infrastructure. Sub-200ms auction completion with zero impact on Core Web Vitals or page load.",
    badge: "Speed", accent: "text-brand-blue", glow: "rgba(96,165,250,0.12)",
  },
  {
    icon: BarChart3, title: "Dynamic Price Floor Engine",
    description: "Machine learning price floors adapt to bid patterns by SSP, geo, device, hour, and placement. Prevent underpricing without sacrificing fill rate balance.",
    badge: "AI-Powered", accent: "text-brand-cyan", glow: "rgba(103,232,249,0.12)",
  },
  {
    icon: Shield, title: "Invalid Traffic Prevention",
    description: "Pre-bid IVT filtering via integration with leading invalid traffic detection vendors prevents fraudulent impressions from consuming demand and artificially inflating analytics.",
    accent: "text-brand-green", glow: "rgba(16,185,129,0.12)",
  },
  {
    icon: Globe, title: "Multi-Format Bid Support",
    description: "Header bidding configured for display, video (instream/outstream), native, and sticky formats — with format-specific floor logic and demand partner matching.",
    accent: "text-brand-violet", glow: "rgba(168,85,247,0.12)",
  },
  {
    icon: TrendingUp, title: "Bid Analytics Suite",
    description: "Granular auction analytics showing win rates, bid distributions, timeout rates, and floor performance by SSP, placement, device, and geography.",
    badge: "Premium", accent: "text-brand-purple", glow: "rgba(139,92,246,0.10)",
  },
]

const FLOW_STEPS = [
  { icon: BarChart3,  title: "Auction Audit",         body: "We analyze your current ad stack, waterfall configuration, SSP relationships, and existing floor logic to identify the highest-impact header bidding opportunities.",   duration: "Day 1–2"  },
  { icon: Layers,     title: "Prebid Configuration",  body: "Deploy server-side Prebid.js infrastructure, configure all SSP adapters, establish initial floor logic, and connect your GAM account — zero developer effort.",          duration: "Day 3–7"  },
  { icon: Zap,        title: "Latency Optimization",  body: "Tune timeout thresholds, enable bid caching, configure lazy loading and lazy bidding — ensuring your Core Web Vitals improve alongside revenue.",                          duration: "Day 8–14" },
  { icon: TrendingUp, title: "Floor & Yield Growth",  body: "AI price floors calibrate to your specific traffic. New SSPs onboarded quarterly. Ongoing A/B testing compounds revenue growth continuously.",                              duration: "Day 15+"  },
]

const WHY_US_ITEMS = [
  {
    icon: Award,      title: "15+ Premium SSP Relationships",
    body: "Pre-negotiated partnership agreements with all major SSPs mean your header bidding stack goes live with maximum demand competition from day one — no individual outreach required.",
    highlight: "Full Coverage", accent: "text-brand-purple", bg: "rgba(139,92,246,0.10)", dotColor: "purple" as const,
  },
  {
    icon: Zap,        title: "Sub-200ms S2S Architecture",
    body: "Our server-side bidding infrastructure completes auctions in under 200ms. That's 4–10× faster than typical client-side implementations and has zero impact on your Lighthouse score.",
    highlight: "Ultra Fast", accent: "text-brand-blue", bg: "rgba(96,165,250,0.10)", dotColor: "blue" as const,
  },
  {
    icon: BarChart3,  title: "Proprietary Floor AI",
    body: "Price floor models trained on $200M+ in auction data across 700+ publishers. They know what your inventory is worth before the auction even starts.",
    highlight: "AI-Powered", accent: "text-brand-cyan", bg: "rgba(103,232,249,0.10)", dotColor: "cyan" as const,
  },
  {
    icon: Users,      title: "Prebid Engineering Expertise",
    body: "Our engineers contributed to the open-source Prebid.js project. We understand the internals — not just the configuration panel.",
    highlight: "Expert Builders", accent: "text-brand-green", bg: "rgba(16,185,129,0.10)", dotColor: "green" as const,
  },
]

const METRICS = [
  { icon: TrendingUp, value: 47,   decimals: 0, prefix: "",  suffix: "%",   label: "Average CPM Lift",      caption: "Over waterfall baseline at 30 days",          accent: "text-brand-purple", bg: "rgba(139,92,246,0.10)" },
  { icon: Zap,        value: 187,  decimals: 0, prefix: "",  suffix: "ms",  label: "Auction Latency",       caption: "Server-side, P95 across all partners",        accent: "text-brand-blue",   bg: "rgba(96,165,250,0.10)" },
  { icon: BarChart3,  value: 14.2, decimals: 1, prefix: "",  suffix: "×",   label: "Avg Bid Density",       caption: "Competing bids per impression",               accent: "text-brand-green",  bg: "rgba(16,185,129,0.10)" },
  { icon: Clock,      value: 7,    decimals: 0, prefix: "",  suffix: " days", label: "Time to Go Live",     caption: "From kickoff to first header bid",            accent: "text-brand-cyan",   bg: "rgba(103,232,249,0.10)" },
]


const FAQS = [
  {
    question: "What's the difference between client-side and server-side header bidding?",
    answer:   "Client-side header bidding runs JavaScript in the user's browser to collect bids from multiple SSPs — this adds 500–2000ms of latency. Server-side header bidding moves the auction to our servers, completing it in under 200ms with no browser-side performance impact. The revenue results are typically equivalent; the speed advantage is significant.",
  },
  {
    question: "How many SSPs will be competing for my inventory?",
    answer:   "We start with 10–12 SSPs most relevant to your content vertical and traffic profile. Within the first 60 days we evaluate bid density and add or remove partners based on auction performance data. Our goal is maximum competition without diminishing returns from adding low-win-rate partners.",
  },
  {
    question: "Will header bidding work with my existing Google Ad Manager setup?",
    answer:   "Yes. Header bidding integrates with GAM as a line-item structure — the highest external bid competes against your existing AdSense and direct campaign line items in a unified auction. We handle all GAM configuration as part of the integration.",
  },
  {
    question: "How do price floors work in header bidding?",
    answer:   "Price floors are minimum CPM thresholds that SSPs must exceed for their bid to be accepted. Our AI sets granular floors by placement, device, geo, hour-of-day, and SSP — preventing underpricing while maintaining high fill rates. Floors are continuously optimized based on observed bid patterns.",
  },
  {
    question: "What happens if the header bidding auction times out?",
    answer:   "We configure intelligent timeout management that balances revenue (more time = more bids) and user experience (less time = faster page load). When a timeout occurs, cached bids from recent auctions are used as fallback. Fill rate is maintained above 95% even with aggressive timeout settings.",
  },
  {
    question: "Can I see which SSPs win the most impressions?",
    answer:   "Yes — our bid analytics dashboard shows win rate, average CPM, bid density, and revenue contribution by SSP, placement, device, and geography. This transparency lets us continuously optimize your demand partner mix for maximum yield.",
  },
]

export function HeaderBiddingPage() {
  return (
    <>
      <SolutionHero
        badge="Header Bidding Solutions"
        badgeIcon={Layers}
        headline={<>Replace Your Waterfall.<br /><GradientText gradient="brand">Unlock True Market Value.</GradientText></>}
        subtext="Server-side header bidding with 15+ SSPs running in parallel at sub-200ms latency. Our publishers see an average 47% CPM increase over waterfall — without touching their Core Web Vitals."
        stats={STATS}
        panelContent={<HBHeroPanel />}
        robotVariant="search"
      />

      <SolutionPartners label="Premium Demand Partners" partners={PARTNERS} />

      <SolutionProblemSolution
        badge="The Problem"
        heading={<>Why Waterfall Ad Stacks<br /><GradientText gradient="brand">Cost You Revenue</GradientText></>}
        subtext="Waterfall monetization was the industry standard a decade ago. Publishers still running it are handing a significant portion of their revenue to demand partners who happen to be listed first."
        problems={PROBLEMS}
        solutions={SOLUTIONS}
      />

      <SolutionFeatures
        badge="Platform Features"
        heading={<>Enterprise Header Bidding<br /><GradientText gradient="violet">Infrastructure</GradientText></>}
        subtext="Server-side Prebid.js, dynamic floor pricing, and complete bid analytics — the full technical stack for maximum header bidding yield."
        features={FEATURES}
      />

      <SolutionAnalytics
        badge="Revenue Intelligence"
        heading={<>Bid Analytics That<br /><GradientText gradient="brand">Drive Real Optimization</GradientText></>}
        subtext="See every bid from every partner on every impression. Understand exactly which SSPs compete hardest on your inventory and why revenue fluctuates."
        bullets={[
          "Win rate and average CPM by SSP and placement",
          "Bid density and competition depth by ad slot",
          "Timeout rate and latency performance by SSP",
          "Floor price hit rate and opportunity cost analysis",
          "Revenue attribution by demand source and deal type",
        ]}
        robotVariant="analytics"
        robotLabel="Auction Intelligence AI"
        robotCaption="Monitors bid patterns and surfaces floor adjustment opportunities before they cost you revenue."
      />

      <SolutionFlow
        badge="Integration Process"
        heading={<>Header Bidding Live<br /><GradientText gradient="brand">in 7 Days</GradientText></>}
        subtext="Zero developer effort on your side. We configure Prebid.js, connect all SSPs, integrate with GAM, and optimize floors — start to finish."
        steps={FLOW_STEPS}
      />

      <SolutionWhyUs
        badge="Why Click Dudes"
        heading={<>The Header Bidding Partner<br /><GradientText gradient="violet">Built for Publishers</GradientText></>}
        subtext="We built our infrastructure specifically for publisher yield optimization — not repurposed from a buy-side tool or a DSP."
        items={WHY_US_ITEMS}
      />

      <SolutionMetrics
        badge="Proven Results"
        heading={<>Header Bidding Performance<br /><GradientText gradient="brand">Across 700+ Publishers</GradientText></>}
        subtext="Live auction data from our managed publisher network."
        metrics={METRICS}
      />

      <HBTestimonials />

      <SolutionFAQ
        badge="FAQ"
        heading={<>Header Bidding<br /><GradientText gradient="brand">Questions Answered</GradientText></>}
        subtext="Technical and commercial questions answered by our Prebid engineering team."
        faqs={FAQS}
      />

      <SolutionCTA
        heading="Ready to Maximize Every Bid?"
        subheading="Join 700+ publishers running Click Dudes' server-side header bidding infrastructure. Sub-200ms auctions, 15+ SSPs, and AI floor optimization — all managed for you."
        robotVariant="celebrate"
        primaryCTA={{ label: "Optimize with Header Bidding", href: "/about/contact-us" }}
      />
    </>
  )
}
