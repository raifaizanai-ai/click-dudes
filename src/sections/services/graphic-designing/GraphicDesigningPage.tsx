"use client"

import { Palette, Image, Star, Layers, Layout, Package, Zap } from "lucide-react"
import { GraphicDesignHeroPanel } from "@/sections/services/graphic-designing/GraphicDesignHeroPanel"
import { GraphicPortfolioSection } from "@/sections/services/graphic-designing/GraphicPortfolioSection"
import { SolutionHero } from "@/sections/solutions/shared/SolutionHero"
import { SolutionProblemSolution } from "@/sections/solutions/shared/SolutionProblemSolution"
import { SolutionFeatures } from "@/sections/solutions/shared/SolutionFeatures"
import { GraphicDesignProcessSection } from "@/sections/services/graphic-designing/GraphicDesignProcessSection"
import { GraphicDesignCTASection } from "@/sections/services/graphic-designing/GraphicDesignCTASection"
import { SolutionWhyUs } from "@/sections/solutions/shared/SolutionWhyUs"
import { SolutionFAQ } from "@/sections/solutions/shared/SolutionFAQ"
import { GraphicDesignTestimonials } from "@/sections/services/graphic-designing/GraphicDesignTestimonials"

const problems = [
  { title: "Inconsistent Brand Visuals", body: "Mismatched styles across channels make your brand look unprofessional and forgettable to your audience." },
  { title: "Low Engagement on Social", body: "Generic, template-looking posts get scrolled past. Thumb-stopping creative content is what drives real engagement." },
  { title: "Poor Ad Performance", body: "Weak ad creatives are the single biggest driver of wasted ad spend and low click-through rates." },
]

const solutions = [
  { title: "Consistent Brand Identity", body: "Every asset follows your brand guidelines — colors, fonts, style, and tone — creating a cohesive, professional presence." },
  { title: "Scroll-Stopping Content", body: "We design thumb-stopping social content tailored to each platform's best practices and your target audience." },
  { title: "High-Converting Ad Creatives", body: "Performance-focused ad designs engineered to maximize click-through rates and drive real business results." },
]

const features = [
  { icon: Image, title: "Social Media Content", description: "Platform-native designs for Instagram, Facebook, LinkedIn, TikTok, and more — built to stop the scroll.", badge: "Social", accent: "text-brand-purple", glow: "rgba(139,92,246,0.10)" },
  { icon: Palette, title: "Personal Brand Visuals", description: "Consistent visual content packs for founders, CEOs, and personal brand builders across all platforms.", badge: "Personal Brand", accent: "text-brand-purple", glow: "rgba(103,232,249,0.10)" },
  { icon: Package, title: "Amazon A+ Content", description: "High-impact product images and A+ content designed to increase Amazon conversion rates and rankings.", badge: "Amazon", accent: "text-brand-blue", glow: "rgba(96,165,250,0.10)" },
  { icon: Layout, title: "Product Listing Images", description: "Professional product photography direction, infographic overlays, and listing images that convert browsers.", badge: "eCommerce", accent: "text-brand-violet", glow: "rgba(168,85,247,0.10)" },
  { icon: Zap, title: "Ad Creatives", description: "Static and animated ad creatives for Meta, Google, programmatic, and display campaigns.", badge: "Advertising", accent: "text-brand-green", glow: "rgba(16,185,129,0.10)" },
  { icon: Layers, title: "Banners & Thumbnails", description: "Web banners, YouTube thumbnails, newsletter headers, and promotional materials designed to perform.", badge: "Multi-Format", accent: "text-brand-purple", glow: "rgba(139,92,246,0.10)" },
]


const whyUsItems = [
  { icon: Palette, title: "Brand-First Design Philosophy", body: "Every asset is designed with your brand identity at the core — no templates, no generic looks.", highlight: "Brand Native", accent: "text-brand-purple", bg: "rgba(139,92,246,0.08)", dotColor: "purple" as const },
  { icon: Star, title: "Platform-Optimized Content", body: "We design for the exact specs and best practices of each platform — Instagram, LinkedIn, TikTok, Amazon, and more.", highlight: "Multi-Platform", accent: "text-brand-purple", bg: "rgba(103,232,249,0.08)", dotColor: "cyan" as const },
  { icon: Zap, title: "Fast Turnaround", body: "48-hour standard turnaround with rush delivery available. We move at the speed your business demands.", highlight: "48hr Delivery", accent: "text-brand-blue", bg: "rgba(96,165,250,0.08)", dotColor: "blue" as const },
  { icon: Image, title: "Unlimited Revisions", body: "We don't lock you into revision limits. We iterate until the design is exactly right — your satisfaction guaranteed.", highlight: "No Limits", accent: "text-brand-green", bg: "rgba(16,185,129,0.08)", dotColor: "green" as const },
]

const faqs = [
  { question: "What file formats do you deliver?", answer: "We deliver all required formats including PNG, JPEG, SVG, PDF, AI, and platform-ready exports. We also provide source files so you own all your assets." },
  { question: "Can you match our existing brand guidelines?", answer: "Absolutely. We study your brand guidelines, color palette, typography, and existing assets to ensure every new design feels perfectly on-brand." },
  { question: "Do you create animated content?", answer: "Yes, we create animated graphics, GIFs, and short-form video content for social media and advertising campaigns in addition to static designs." },
  { question: "What social media platforms do you design for?", answer: "We design for Instagram, Facebook, LinkedIn, TikTok, Twitter/X, Pinterest, YouTube, and all other major platforms in their optimal formats and sizes." },
  { question: "How many revisions are included?", answer: "We offer unlimited revisions until you're fully satisfied. We believe in delivering exactly what you need, not rushing through arbitrary revision limits." },
]

export function GraphicDesigningPage() {
  return (
    <>
      <SolutionHero
        badge="Graphic Designing"
        badgeIcon={Palette}
        headline={<>Visuals That <span className="text-gradient-brand">Stop Scrolling & Build Brands</span></>}
        subtext="Click Dudes creates premium visual content — from social media graphics to ad creatives, Amazon A+ content, and personal brand visuals — designed to perform."
        primaryCTA={{ label: "Design My Brand Content", href: "/about/contact-us" }}
        secondaryCTA={{ label: "See Our Work", href: "/about/contact-us" }}
        caption="Brand-native design · Platform-optimized · 48hr turnaround · Unlimited revisions"
        stats={[
          { value: "1,200+", label: "Assets/Month" },
          { value: "8.4%",   label: "Avg Engagement" },
          { value: "98%",    label: "Satisfaction" },
          { value: "48hrs",  label: "Turnaround" },
        ]}
        panelContent={<GraphicDesignHeroPanel />}
        robotVariant="celebrate"
      />
      <GraphicPortfolioSection />
      <SolutionProblemSolution
        badge="The Problem"
        heading={<>Why Bad Visuals Are <span className="text-gradient-brand">Costing You Revenue</span></>}
        subtext="Most businesses underinvest in visual content quality — and their engagement and conversion rates suffer for it."
        problems={problems}
        solutions={solutions}
        problemLabel="Without Click Dudes"
        solutionLabel="With Click Dudes"
      />
      <SolutionFeatures
        badge="What We Create"
        heading={<>Complete Graphic Design <span className="text-gradient-brand">Content Suite</span></>}
        subtext="Every type of visual content your business needs to look premium across every channel and platform."
        features={features}
      />
      <GraphicDesignProcessSection />
      <SolutionWhyUs
        badge="Why Click Dudes"
        heading={<>The Design Partner That <span className="text-gradient-brand">Elevates Your Brand</span></>}
        subtext="We don't just design — we build visual identities that make your brand impossible to ignore."
        items={whyUsItems}
      />
      <GraphicDesignTestimonials />
      <SolutionFAQ
        badge="FAQ"
        heading={<>Graphic Design <span className="text-gradient-brand">Questions Answered</span></>}
        subtext="How our design process works, what we need from you, and how revisions are handled. Clear from day one."
        faqs={faqs}
      />
      <GraphicDesignCTASection />
    </>
  )
}
