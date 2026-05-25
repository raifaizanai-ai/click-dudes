"use client"

import { Megaphone, Target, TrendingUp, BarChart3, Users, RefreshCcw, Zap, DollarSign } from "lucide-react"
import { MetaAdsHeroPanel } from "@/sections/services/meta-ads/MetaAdsHeroPanel"
import { MetaAdsShowcaseSection } from "@/sections/services/meta-ads/MetaAdsShowcaseSection"
import { MetaAdsProcessSection } from "@/sections/services/meta-ads/MetaAdsProcessSection"
import { MetaAdsCTASection } from "@/sections/services/meta-ads/MetaAdsCTASection"
import { SolutionHero } from "@/sections/solutions/shared/SolutionHero"
import { SolutionProblemSolution } from "@/sections/solutions/shared/SolutionProblemSolution"
import { SolutionFeatures } from "@/sections/solutions/shared/SolutionFeatures"
import { SolutionWhyUs } from "@/sections/solutions/shared/SolutionWhyUs"
import { SolutionFAQ } from "@/sections/solutions/shared/SolutionFAQ"
import { MetaAdsTestimonials } from "@/sections/services/meta-ads/MetaAdsTestimonials"

const problems = [
  { title: "Wasted Ad Spend", body: "Most Meta campaigns burn budget on the wrong audiences, poor creatives, and poorly structured campaigns with no clear ROI." },
  { title: "Low Quality Leads", body: "Getting form fills is worthless if leads don't convert. Poor targeting delivers volume without quality or buying intent." },
  { title: "No Scaling Strategy", body: "Ad sets that work at $50/day often fail when you try to scale. Without proper structure, budget increases waste money." },
]

const solutions = [
  { title: "Data-Driven Campaign Architecture", body: "We build campaigns with proper audience segmentation, creative testing, and conversion-focused structures from the start." },
  { title: "High-Intent Audience Targeting", body: "Advanced interest, lookalike, and custom audience targeting that finds the people most likely to buy what you're selling." },
  { title: "Scalable Campaign Framework", body: "We build campaigns designed to scale — with proper testing phases, budget allocation strategies, and creative refresh cycles." },
]

const features = [
  { icon: Target, title: "Campaign Strategy & Structure", description: "Conversion, lead generation, and retargeting campaigns structured for maximum efficiency and ROI.", badge: "Strategy", accent: "text-brand-purple", glow: "rgba(139,92,246,0.10)" },
  { icon: Users, title: "Advanced Audience Targeting", description: "Custom audiences, lookalike audiences, interest targeting, and behavioral segmentation for precision results.", badge: "Targeting", accent: "text-brand-purple", glow: "rgba(103,232,249,0.10)" },
  { icon: Megaphone, title: "Ad Creative Production", description: "High-performing static and video ad creatives designed to stop the scroll and drive action.", badge: "Creatives", accent: "text-brand-blue", glow: "rgba(96,165,250,0.10)" },
  { icon: RefreshCcw, title: "Retargeting Campaigns", description: "Multi-touch retargeting sequences that re-engage website visitors, cart abandoners, and warm leads.", badge: "Retargeting", accent: "text-brand-violet", glow: "rgba(168,85,247,0.10)" },
  { icon: BarChart3, title: "Pixel & Conversion Tracking", description: "Full Meta Pixel setup, CAPI integration, and custom conversion events for accurate attribution.", badge: "Tracking", accent: "text-brand-green", glow: "rgba(16,185,129,0.10)" },
  { icon: TrendingUp, title: "Campaign Optimization", description: "Continuous A/B testing, bid adjustments, audience refinements, and creative rotation for improving ROAS.", badge: "Optimization", accent: "text-brand-purple", glow: "rgba(139,92,246,0.10)" },
]


const whyUsItems = [
  { icon: Target, title: "Meta Ads Certified Team", body: "Our Meta Ads specialists are certified and actively manage millions in ad spend across industries with proven results.", highlight: "Meta Certified", accent: "text-brand-purple", bg: "rgba(139,92,246,0.08)", dotColor: "purple" as const },
  { icon: DollarSign, title: "ROAS-Obsessed Approach", body: "We don't optimize for vanity metrics. Every decision is driven by return on ad spend and bottom-line business results.", highlight: "5.8x Avg ROAS", accent: "text-brand-purple", bg: "rgba(103,232,249,0.08)", dotColor: "cyan" as const },
  { icon: Megaphone, title: "In-House Creative Production", body: "We produce ad creatives in-house — no outsourcing — ensuring fast iteration cycles and creatives built for performance.", highlight: "In-House Creatives", accent: "text-brand-blue", bg: "rgba(96,165,250,0.08)", dotColor: "blue" as const },
  { icon: BarChart3, title: "Full Transparency", body: "Monthly reports with clear numbers — spend, impressions, clicks, leads, conversions, and ROAS broken down simply.", highlight: "Clear Reporting", accent: "text-brand-green", bg: "rgba(16,185,129,0.08)", dotColor: "green" as const },
]

const faqs = [
  { question: "What budget do I need to start Meta Ads?", answer: "We typically recommend a minimum monthly ad spend of $1,000–$2,000 to gather meaningful data. Management fees are separate. For ecommerce, $2,000+ tends to show clear results faster." },
  { question: "How long before I see results?", answer: "Meta's algorithm needs a learning phase of 1–2 weeks. Most clients see meaningful data by week 3 and optimized results by month 2 as we refine targeting and creatives." },
  { question: "Do you create the ad creatives?", answer: "Yes. We produce all required ad creatives — static images, carousel ads, and video ad scripts/production guidance — as part of our Meta Ads service." },
  { question: "Can you run both Facebook and Instagram ads?", answer: "Yes. Meta Ads Manager runs campaigns across Facebook, Instagram, Messenger, and the Audience Network. We optimize placement allocation based on where your audience converts best." },
  { question: "What industries do you work with?", answer: "We run Meta Ads for ecommerce, SaaS, service businesses, coaches, consultants, real estate, and more. The targeting and creative strategy are tailored to each industry and audience." },
]

export function MetaAdsPage() {
  return (
    <>
      <SolutionHero
        badge="Meta Ads Management"
        badgeIcon={Megaphone}
        headline={<>Facebook & Instagram Ads That <span className="text-gradient-brand">Drive Real Results</span></>}
        subtext="ClickDudes manages your Meta advertising campaigns — strategy, creative, targeting, optimization, and reporting — to deliver consistent leads and revenue growth."
        primaryCTA={{ label: "Launch Meta Ads Campaign", href: "/about/contact-us" }}
        secondaryCTA={{ label: "Free Account Audit", href: "/about/contact-us" }}
        caption="Meta certified · In-house creatives · ROAS-focused · Full transparency"
        stats={[
          { value: "5.8x", label: "Avg ROAS" },
          { value: "44%",  label: "Lower CPL" },
          { value: "3.4%", label: "Avg CTR" },
          { value: "82%",  label: "More Conversions" },
        ]}
        panelContent={<MetaAdsHeroPanel />}
        robotVariant="rocket"
      />
      <MetaAdsShowcaseSection />
      <SolutionProblemSolution
        badge="The Problem"
        heading={<>Why Most Meta Ads <span className="text-gradient-brand">Waste Your Budget</span></>}
        subtext="Facebook and Instagram ads can work extremely well — or drain your budget fast. Here's what separates the two, and how we fix it."
        problems={problems}
        solutions={solutions}
        problemLabel="Without ClickDudes"
        solutionLabel="With ClickDudes"
      />
      <SolutionFeatures
        badge="What We Do"
        heading={<>Complete Meta Ads <span className="text-gradient-brand">Management Service</span></>}
        subtext="Every component of a winning Meta advertising program, managed and optimized by our certified team."
        features={features}
      />
      <MetaAdsProcessSection />
      <SolutionWhyUs
        badge="Why ClickDudes"
        heading={<>The Meta Ads Partner That <span className="text-gradient-brand">Delivers ROAS</span></>}
        subtext="We combine certified expertise, in-house creative production, and ROAS-focused optimization to grow your business through Meta."
        items={whyUsItems}
      />
      <MetaAdsTestimonials />
      <SolutionFAQ
        badge="FAQ"
        heading={<>Meta Ads <span className="text-gradient-brand">Questions Answered</span></>}
        subtext="Ad spend, creative strategy, tracking setup — the questions clients ask before we touch their Meta account."
        faqs={faqs}
      />
      <MetaAdsCTASection />
    </>
  )
}
