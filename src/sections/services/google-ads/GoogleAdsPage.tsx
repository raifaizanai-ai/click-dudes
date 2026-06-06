"use client"

import { Search, TrendingUp, BarChart3, Target, Globe, DollarSign, Monitor } from "lucide-react"
import { GoogleAdsHeroPanel } from "@/sections/services/google-ads/GoogleAdsHeroPanel"
import { GoogleAdsShowcaseSection } from "@/sections/services/google-ads/GoogleAdsShowcaseSection"
import { GoogleAdsProcessSection } from "@/sections/services/google-ads/GoogleAdsProcessSection"
import { GoogleAdsCTASection } from "@/sections/services/google-ads/GoogleAdsCTASection"
import { SolutionHero } from "@/sections/solutions/shared/SolutionHero"
import { SolutionProblemSolution } from "@/sections/solutions/shared/SolutionProblemSolution"
import { SolutionFeatures } from "@/sections/solutions/shared/SolutionFeatures"
import { SolutionWhyUs } from "@/sections/solutions/shared/SolutionWhyUs"
import { SolutionFAQ } from "@/sections/solutions/shared/SolutionFAQ"
import { GoogleAdsTestimonials } from "@/sections/services/google-ads/GoogleAdsTestimonials"

const problems = [
  { title: "High Cost Per Click, Low Return", body: "Broad match keywords and poor bid strategies burn budget on irrelevant searches that never convert." },
  { title: "Poor Landing Page Alignment", body: "Sending search traffic to a generic homepage instead of targeted landing pages destroys Quality Score and conversion rates." },
  { title: "No Conversion Tracking", body: "Without proper tracking setup, you can't know which keywords and campaigns are actually generating revenue, so you can't optimize." },
]

const solutions = [
  { title: "Precision Keyword Strategy", body: "We use intent-based keyword research to target high-converting searches and negative keywords to stop wasting budget on irrelevant traffic." },
  { title: "Landing Page Alignment", body: "We align every ad group to purpose-built or optimized landing pages that match the search intent and drive conversions." },
  { title: "Full Conversion Tracking", body: "We set up Google Ads conversion tracking, GA4 integration, and call tracking to attribute every lead and sale accurately." },
]

const features = [
  { icon: Search, title: "Search Campaigns", description: "Intent-based search ads with tightly themed ad groups, high-Quality Score copy, and conversion-focused bidding.", badge: "Search", accent: "text-brand-purple", glow: "rgba(139,92,246,0.10)" },
  { icon: Monitor, title: "Display Campaigns", description: "Visually compelling display ads across Google's network to build awareness and retarget high-intent visitors.", badge: "Display", accent: "text-brand-purple", glow: "rgba(103,232,249,0.10)" },
  { icon: Globe, title: "YouTube Ads", description: "In-stream, skippable, and non-skippable YouTube video ads targeting the exact audiences that matter to your business.", badge: "YouTube", accent: "text-brand-blue", glow: "rgba(96,165,250,0.10)" },
  { icon: Target, title: "Performance Max", description: "AI-powered Performance Max campaigns leveraging all Google inventory for maximum reach and conversion efficiency.", badge: "PMax", accent: "text-brand-violet", glow: "rgba(168,85,247,0.10)" },
  { icon: BarChart3, title: "Conversion Tracking Setup", description: "Full GA4 and Google Ads conversion tracking with goal configuration, call tracking, and attribution modeling.", badge: "Tracking", accent: "text-brand-green", glow: "rgba(16,185,129,0.10)" },
  { icon: TrendingUp, title: "Ongoing Optimization", description: "Weekly bid adjustments, keyword expansions, negative keyword management, and ad copy testing for continuous improvement.", badge: "Optimization", accent: "text-brand-purple", glow: "rgba(139,92,246,0.10)" },
]


const whyUsItems = [
  { icon: Search, title: "Google Ads Certified Team", body: "Our certified Google Ads specialists manage campaigns across search, display, YouTube, and Performance Max with proven results.", highlight: "Google Certified", accent: "text-brand-purple", bg: "rgba(139,92,246,0.08)", dotColor: "purple" as const },
  { icon: Target, title: "Keyword & Intent Mastery", body: "We go deep on keyword research, search intent mapping, and negative keyword management to eliminate wasted spend.", highlight: "Intent-Based", accent: "text-brand-purple", bg: "rgba(103,232,249,0.08)", dotColor: "cyan" as const },
  { icon: DollarSign, title: "ROI-Focused Optimization", body: "Every optimization decision is guided by conversion data and ROAS targets, not impressions or clicks that don't pay your bills.", highlight: "6.8% Conversion Rate", accent: "text-brand-blue", bg: "rgba(96,165,250,0.08)", dotColor: "blue" as const },
  { icon: BarChart3, title: "Full Attribution Clarity", body: "We set up complete conversion tracking so you know exactly which campaigns, ad groups, and keywords are generating revenue.", highlight: "Full Attribution", accent: "text-brand-green", bg: "rgba(16,185,129,0.08)", dotColor: "green" as const },
]

const faqs = [
  { question: "What budget do I need for Google Ads?", answer: "We recommend a minimum monthly ad spend of $1,500–$3,000 for meaningful data. Competitive industries may need more. Management fees are separate from ad spend." },
  { question: "How long before Google Ads shows results?", answer: "Google Ads typically shows initial results within 1–2 weeks. Fully optimized campaigns with stable quality scores and conversion data usually develop within 30–60 days." },
  { question: "Do you set up conversion tracking?", answer: "Yes. Full conversion tracking setup is included, GA4 integration, Google Ads goals, call tracking where applicable, and custom conversion events for your specific business." },
  { question: "Can you manage my existing Google Ads account?", answer: "Absolutely. We frequently take over underperforming accounts. Our process starts with a full audit to identify wasted spend and quick-win opportunities before we optimize." },
  { question: "Do you create landing pages?", answer: "We can create or recommend landing page optimizations aligned to your ad groups. We offer landing page development as a separate service if needed for maximum campaign performance." },
]

export function GoogleAdsPage() {
  return (
    <>
      <SolutionHero
        badge="Google Ads Management"
        badgeIcon={Search}
        headline={<>Google Ads Campaigns That <span className="text-gradient-brand">Convert at Scale</span></>}
        subtext="Click Dudes manages your Google Ads from strategy to execution, search, display, YouTube, and Performance Max campaigns optimized for maximum conversions and ROAS."
        primaryCTA={{ label: "Start Google Ads Campaign", href: "/about/contact-us" }}
        secondaryCTA={{ label: "Free Account Audit", href: "/about/contact-us" }}
        caption="Google certified · Full tracking setup · Weekly optimization · Clear reporting"
        stats={[
          { value: "7.2%", label: "Avg CTR" },
          { value: "51%",  label: "Lower CPC" },
          { value: "6.8%", label: "Conversion Rate" },
          { value: "9.1",  label: "Avg Quality Score" },
        ]}
        panelContent={<GoogleAdsHeroPanel />}
        robotVariant="energy"
      />
      <GoogleAdsShowcaseSection />
      <SolutionProblemSolution
        badge="The Problem"
        heading={<>Why Most Google Ads Campaigns <span className="text-gradient-brand">Bleed Budget</span></>}
        subtext="Google Ads can be the most profitable channel in your business, or the most wasteful. Here's what separates them."
        problems={problems}
        solutions={solutions}
        problemLabel="Without Click Dudes"
        solutionLabel="With Click Dudes"
      />
      <SolutionFeatures
        badge="What We Manage"
        heading={<>Complete Google Ads <span className="text-gradient-brand">Campaign Suite</span></>}
        subtext="Every Google Ads campaign type managed with precision targeting, high-quality creative, and continuous optimization."
        features={features}
      />
      <GoogleAdsProcessSection />
      <SolutionWhyUs
        badge="Why Click Dudes"
        heading={<>The Google Ads Partner That <span className="text-gradient-brand">Maximizes Every Dollar</span></>}
        subtext="We combine Google Ads certification, intent-based strategy, and data-driven optimization to deliver consistent conversion growth."
        items={whyUsItems}
      />
      <GoogleAdsTestimonials />
      <SolutionFAQ
        badge="FAQ"
        heading={<>Google Ads <span className="text-gradient-brand">Questions Answered</span></>}
        subtext="Budget, targeting, timelines, the questions brands ask before handing over their Google Ads account."
        faqs={faqs}
      />
      <GoogleAdsCTASection />
    </>
  )
}
