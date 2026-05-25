"use client"

import { ShoppingCart, TrendingUp, Package, Search, BarChart3, RefreshCcw, CreditCard, Star } from "lucide-react"
import { EcommerceHeroPanel } from "@/sections/services/e-commerce/EcommerceHeroPanel"
import { EcommerceShowcaseSection } from "@/sections/services/e-commerce/EcommerceShowcaseSection"
import { SolutionHero } from "@/sections/solutions/shared/SolutionHero"
import { SolutionProblemSolution } from "@/sections/solutions/shared/SolutionProblemSolution"
import { SolutionFeatures } from "@/sections/solutions/shared/SolutionFeatures"
import { EcommerceProcessSection } from "@/sections/services/e-commerce/EcommerceProcessSection"
import { EcommerceCTASection } from "@/sections/services/e-commerce/EcommerceCTASection"
import { SolutionWhyUs } from "@/sections/solutions/shared/SolutionWhyUs"
import { SolutionFAQ } from "@/sections/solutions/shared/SolutionFAQ"
import { EcommerceTestimonials } from "@/sections/services/e-commerce/EcommerceTestimonials"

const problems = [
  { title: "Low Conversion Rates", body: "Generic product pages and poor UX drive buyers away before they reach checkout." },
  { title: "Scattered Traffic, No Funnel", body: "Ad and SEO traffic has no clear purchase path, wasting every dollar you spend." },
  { title: "Technical Overload", body: "Managing inventory, payments, shipping, and listings manually consumes all your time." },
]

const solutions = [
  { title: "High-Converting Store Design", body: "We rebuild stores with conversion-first UX, optimized product pages, and seamless checkout flows." },
  { title: "End-to-End Sales Funnels", body: "We map the full buyer journey, turning cold traffic into loyal, paying customers." },
  { title: "Managed Setup & Optimization", body: "From Shopify to WooCommerce, we handle setup, theme, plugins, and ongoing optimization." },
]

const features = [
  { icon: ShoppingCart, title: "Shopify & WooCommerce", description: "Expert setup on both leading platforms with custom themes and performance optimization.", badge: "Platform", accent: "text-brand-purple", glow: "rgba(139,92,246,0.10)" },
  { icon: TrendingUp, title: "Conversion Optimization", description: "Data-driven UX improvements and A/B testing to maximize purchase rates continuously.", badge: "CRO", accent: "text-brand-purple", glow: "rgba(103,232,249,0.10)" },
  { icon: Search, title: "eCommerce SEO", description: "Product and category page SEO to drive organic traffic and long-term revenue growth.", badge: "SEO", accent: "text-brand-blue", glow: "rgba(96,165,250,0.10)" },
  { icon: Package, title: "Product Page Optimization", description: "Conversion-focused listings with professional copy, images, and powerful social proof.", badge: "Content", accent: "text-brand-violet", glow: "rgba(168,85,247,0.10)" },
  { icon: RefreshCcw, title: "Cart Recovery", description: "Automated email flows, exit-intent popups, and retargeting to recover abandoned carts.", badge: "Automation", accent: "text-brand-green", glow: "rgba(16,185,129,0.10)" },
  { icon: BarChart3, title: "Analytics & Reporting", description: "Full revenue attribution, GA4 setup, and monthly performance reporting dashboards.", badge: "Reporting", accent: "text-brand-purple", glow: "rgba(139,92,246,0.10)" },
]

const flowSteps = [
  { icon: Search, title: "Store Audit & Strategy", body: "We analyze your current store or brief your new one and create a data-driven growth plan.", duration: "Day 1–3" },
  { icon: ShoppingCart, title: "Platform Setup & Design", body: "Full store build or migration on your chosen platform with branded, conversion-focused design.", duration: "Week 1–2" },
  { icon: Package, title: "Product & Content Setup", body: "Product listings, copy, images, and category structure fully optimized for conversions.", duration: "Week 2–3" },
  { icon: TrendingUp, title: "Launch & Continuous Optimization", body: "We launch, monitor traffic and sales, then continuously optimize for maximum growth.", duration: "Week 3+" },
]

const whyUsItems = [
  { icon: Star, title: "Shopify & WooCommerce Certified", body: "Our team holds certifications on both leading ecommerce platforms with 500+ stores delivered.", highlight: "Certified", accent: "text-brand-purple", bg: "rgba(139,92,246,0.08)", dotColor: "purple" as const },
  { icon: TrendingUp, title: "Conversion-First Approach", body: "Every design and copy decision is driven by conversion data and proven ecommerce best practices.", highlight: "2x Avg Growth", accent: "text-brand-purple", bg: "rgba(103,232,249,0.08)", dotColor: "cyan" as const },
  { icon: BarChart3, title: "Full-Stack eCommerce", body: "From store setup to SEO to paid ads — one dedicated team manages every layer of your growth.", highlight: "End-to-End", accent: "text-brand-blue", bg: "rgba(96,165,250,0.08)", dotColor: "blue" as const },
  { icon: CreditCard, title: "Transparent ROI Reporting", body: "Monthly reports showing traffic, revenue, conversion rate, and campaign performance clearly.", highlight: "Monthly Reports", accent: "text-brand-green", bg: "rgba(16,185,129,0.08)", dotColor: "green" as const },
]

const faqs = [
  { question: "Do you work with new stores or only existing ones?", answer: "We work with both. Whether you need a brand-new store built from scratch or want to optimize an existing one, we have expertise for both scenarios on Shopify and WooCommerce." },
  { question: "Which ecommerce platforms do you support?", answer: "We specialize in Shopify and WooCommerce, which cover the vast majority of ecommerce needs. We also work with custom-coded stores when required." },
  { question: "How long does it take to build a store?", answer: "A standard Shopify or WooCommerce store takes 2–4 weeks from brief to launch. Complex custom stores may take 4–8 weeks depending on scope and integrations." },
  { question: "Do you help with product photography and content?", answer: "Yes, we coordinate product content strategies including copy, image guidelines, and A+ content recommendations to maximize conversions and buyer trust." },
  { question: "Can you help with abandoned cart recovery?", answer: "Absolutely. We set up automated email flows, exit-intent popups, and retargeting campaigns specifically designed to recover lost sales and improve checkout completion rates." },
]

export function EcommercePage() {
  return (
    <>
      <SolutionHero
        badge="E-Commerce Solutions"
        badgeIcon={ShoppingCart}
        headline={<>Build, Optimize & <span className="text-gradient-brand">Scale Your Online Store</span></>}
        subtext="Click Dudes delivers end-to-end ecommerce solutions — from Shopify and WooCommerce setup to conversion optimization and revenue growth strategy."
        primaryCTA={{ label: "Scale Your Online Store", href: "/about/contact-us" }}
        secondaryCTA={{ label: "Talk to Our Team", href: "/about/contact-us" }}
        caption="Shopify & WooCommerce experts · 500+ stores built · Results in 30 days"
        stats={[
          { value: "2x",   label: "Revenue Growth" },
          { value: "40%",  label: "Conversion Lift" },
          { value: "500+", label: "Stores Built" },
          { value: "98%",  label: "Client Retention" },
        ]}
        panelContent={<EcommerceHeroPanel />}
        robotVariant="laptop"
      />
      <EcommerceShowcaseSection />
      <SolutionProblemSolution
        badge="The Problem"
        heading={<>Why Most Online Stores <span className="text-gradient-brand">Fail to Scale</span></>}
        subtext="Most ecommerce businesses struggle with the same avoidable problems. Here's what holds them back — and how we fix it."
        problems={problems}
        solutions={solutions}
        problemLabel="Without Click Dudes"
        solutionLabel="With Click Dudes"
      />
      <SolutionFeatures
        badge="What We Deliver"
        heading={<>Complete eCommerce <span className="text-gradient-brand">Service Suite</span></>}
        subtext="Every feature you need to build, grow, and sustain a high-converting online store."
        features={features}
      />
      <EcommerceProcessSection />
      <SolutionWhyUs
        badge="Why Click Dudes"
        heading={<>The eCommerce Partner That <span className="text-gradient-brand">Delivers Results</span></>}
        subtext="We combine platform expertise, conversion science, and transparent reporting to drive real revenue growth."
        items={whyUsItems}
      />
      <EcommerceTestimonials />
      <SolutionFAQ
        badge="FAQ"
        heading={<>eCommerce <span className="text-gradient-brand">Questions Answered</span></>}
        subtext="Platform choices, launch timelines, integrations — what ecommerce clients ask us most before getting started."
        faqs={faqs}
      />
      <EcommerceCTASection />
    </>
  )
}
