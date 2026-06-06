"use client"

import { LineChart, Search, TrendingUp, Globe, BarChart3, Shield, Link2 } from "lucide-react"
import { SeoHeroPanel } from "@/sections/services/seo-services/SeoHeroPanel"
import { SeoRankingSection } from "@/sections/services/seo-services/SeoRankingSection"
import { SeoProcessSection } from "@/sections/services/seo-services/SeoProcessSection"
import { SeoCTASection } from "@/sections/services/seo-services/SeoCTASection"
import { SolutionHero } from "@/sections/solutions/shared/SolutionHero"
import { SolutionProblemSolution } from "@/sections/solutions/shared/SolutionProblemSolution"
import { SolutionFeatures } from "@/sections/solutions/shared/SolutionFeatures"
import { SolutionWhyUs } from "@/sections/solutions/shared/SolutionWhyUs"
import { SolutionFAQ } from "@/sections/solutions/shared/SolutionFAQ"
import { SeoTestimonials } from "@/sections/services/seo-services/SeoTestimonials"

const problems = [
  { title: "Invisible in Search Results", body: "If your business doesn't appear on page one for high-intent keywords, your competitors are capturing every lead you're missing." },
  { title: "Technical SEO Barriers", body: "Slow pages, broken links, poor Core Web Vitals, and crawl errors silently kill your Google rankings every day." },
  { title: "No Content Strategy", body: "Ranking for valuable keywords requires consistent, optimized content. Without a strategy, you're invisible to search engines." },
]

const solutions = [
  { title: "End-to-End SEO Execution", body: "We handle technical SEO, on-page optimization, content strategy, and link building, the complete picture required to rank." },
  { title: "Technical Foundation Fixed", body: "We audit and fix every technical barrier, site speed, Core Web Vitals, crawlability, schema markup, and structured data." },
  { title: "Content & Authority Building", body: "We create keyword-optimized content and build high-quality backlinks that signal authority to Google and drive rankings." },
]

const features = [
  { icon: Shield, title: "Technical SEO", description: "Full technical audit covering site speed, Core Web Vitals, crawl errors, indexation, schema, and mobile performance.", badge: "Technical", accent: "text-brand-purple", glow: "rgba(139,92,246,0.10)" },
  { icon: Search, title: "On-Page SEO", description: "Title tags, meta descriptions, heading optimization, internal linking, and content optimization for target keywords.", badge: "On-Page", accent: "text-brand-purple", glow: "rgba(103,232,249,0.10)" },
  { icon: Link2, title: "Off-Page SEO & Link Building", description: "High-quality backlink acquisition through outreach, digital PR, and authority-building partnerships.", badge: "Off-Page", accent: "text-brand-blue", glow: "rgba(96,165,250,0.10)" },
  { icon: Globe, title: "Local SEO", description: "Google Business Profile optimization, local citations, and location-based keyword targeting for local businesses.", badge: "Local", accent: "text-brand-violet", glow: "rgba(168,85,247,0.10)" },
  { icon: LineChart, title: "eCommerce SEO", description: "Category pages, product page optimization, schema markup, and site structure designed for ecommerce ranking dominance.", badge: "eCommerce", accent: "text-brand-green", glow: "rgba(16,185,129,0.10)" },
  { icon: BarChart3, title: "SEO Audits & Reporting", description: "Comprehensive SEO audits, keyword ranking tracking, traffic analysis, and monthly performance reporting.", badge: "Audits", accent: "text-brand-purple", glow: "rgba(139,92,246,0.10)" },
]


const whyUsItems = [
  { icon: Search, title: "Full-Spectrum SEO", body: "We cover every SEO pillar, technical, on-page, off-page, local, and ecommerce, with specialists for each area.", highlight: "All SEO Types", accent: "text-brand-purple", bg: "rgba(139,92,246,0.08)", dotColor: "purple" as const },
  { icon: TrendingUp, title: "Proven Ranking Results", body: "Our clients average 284% organic traffic growth within 12 months across competitive industries and markets.", highlight: "284% Avg Growth", accent: "text-brand-purple", bg: "rgba(103,232,249,0.08)", dotColor: "cyan" as const },
  { icon: Shield, title: "White-Hat Only", body: "We only use Google-approved SEO techniques. No black-hat tactics that risk penalties, only sustainable, long-term growth.", highlight: "100% White-Hat", accent: "text-brand-blue", bg: "rgba(96,165,250,0.08)", dotColor: "blue" as const },
  { icon: BarChart3, title: "Transparent Reporting", body: "Monthly keyword ranking reports, traffic analysis, and authority metrics that show exactly how your SEO is performing.", highlight: "Clear Reporting", accent: "text-brand-green", bg: "rgba(16,185,129,0.08)", dotColor: "green" as const },
]

const faqs = [
  { question: "How long does SEO take to show results?", answer: "SEO is a long-term investment. Most clients see meaningful improvements in rankings and traffic within 3–6 months. Significant organic growth typically shows clearly by month 6–12 depending on competition and starting position." },
  { question: "What's included in a technical SEO audit?", answer: "Our technical SEO audit covers site speed, Core Web Vitals, mobile usability, crawl errors, broken links, duplicate content, schema markup, HTTPS, sitemaps, robots.txt, and indexation issues." },
  { question: "Do you provide SEO for ecommerce stores?", answer: "Yes. eCommerce SEO is a core specialty. We optimize category pages, product pages, site architecture, faceted navigation, and schema markup to drive organic sales growth." },
  { question: "What is link building and why does it matter?", answer: "Link building is the process of earning backlinks from authoritative websites. Google uses links as a major ranking signal, more high-quality links to your site signals higher authority and leads to better rankings." },
  { question: "Can you guarantee rankings?", answer: "No ethical SEO agency can guarantee specific rankings as Google's algorithm is controlled by Google. What we can guarantee is a professional, data-driven approach that delivers consistent, measurable organic growth over time." },
]

export function SeoServicesPage() {
  return (
    <>
      <SolutionHero
        badge="SEO Services"
        badgeIcon={LineChart}
        headline={<>Rank Higher, Get Found & <span className="text-gradient-brand">Grow Organically</span></>}
        subtext="Technical audits, on-page optimization, link building, local SEO, and content strategy, every layer handled by one team, focused entirely on organic revenue growth."
        primaryCTA={{ label: "Improve My SEO Growth", href: "/about/contact-us" }}
        secondaryCTA={{ label: "Free SEO Audit", href: "/about/contact-us" }}
        caption="Technical · On-Page · Off-Page · Local · eCommerce · White-hat only"
        stats={[
          { value: "284%", label: "Avg Traffic Growth" },
          { value: "1,840+", label: "Keywords Ranked" },
          { value: "+18",   label: "DA Improvement" },
          { value: "68%",   label: "More Organic Leads" },
        ]}
        panelContent={<SeoHeroPanel />}
        robotVariant="search"
      />
      <SeoRankingSection />
      <SolutionProblemSolution
        badge="The Problem"
        heading={<>Why Your Website <span className="text-gradient-brand">Isn&apos;t Ranking</span></>}
        subtext="Most businesses struggle with the same SEO problems that are completely fixable with the right strategy."
        problems={problems}
        solutions={solutions}
        problemLabel="Without Click Dudes"
        solutionLabel="With Click Dudes"
      />
      <SolutionFeatures
        badge="What We Do"
        heading={<>Complete SEO <span className="text-gradient-brand">Service Suite</span></>}
        subtext="Every SEO pillar covered, technical, on-page, off-page, local, and ecommerce, by specialists who deliver ranking results."
        features={features}
      />
      <SeoProcessSection />
      <SolutionWhyUs
        badge="Why Click Dudes"
        heading={<>The SEO Partner That <span className="text-gradient-brand">Delivers Real Rankings</span></>}
        subtext="We combine full-spectrum SEO expertise, white-hat execution, and transparent reporting to grow your organic traffic sustainably."
        items={whyUsItems}
      />
      <SeoTestimonials />
      <SolutionFAQ
        badge="FAQ"
        heading={<>SEO Services <span className="text-gradient-brand">Questions Answered</span></>}
        subtext="SEO takes time. Here's what to expect from month one, why we do things the way we do, and how we measure success."
        faqs={faqs}
      />
      <SeoCTASection />
    </>
  )
}
