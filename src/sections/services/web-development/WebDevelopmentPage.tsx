"use client"

import { Code2, Globe, Zap, Shield, Layers, BarChart3, Smartphone, Layout } from "lucide-react"
import { WebDevHeroPanel } from "@/sections/services/web-development/WebDevHeroPanel"
import { WebDevTechSection } from "@/sections/services/web-development/WebDevTechSection"
import { SolutionHero } from "@/sections/solutions/shared/SolutionHero"
import { SolutionProblemSolution } from "@/sections/solutions/shared/SolutionProblemSolution"
import { SolutionFeatures } from "@/sections/solutions/shared/SolutionFeatures"
import { WebDevProcessSection } from "@/sections/services/web-development/WebDevProcessSection"
import { WebDevCTASection } from "@/sections/services/web-development/WebDevCTASection"
import { SolutionWhyUs } from "@/sections/solutions/shared/SolutionWhyUs"
import { SolutionFAQ } from "@/sections/solutions/shared/SolutionFAQ"
import { WebDevTestimonials } from "@/sections/services/web-development/WebDevTestimonials"

const problems = [
  { title: "Slow & Outdated Website", body: "A slow, poor-performing website loses visitors in seconds and tanks your Google rankings." },
  { title: "Not Mobile-First", body: "Over 70% of traffic is mobile. Non-responsive sites kill conversions and frustrate users." },
  { title: "No Clear Brand Presence", body: "Generic templates make your business look like every other competitor — standing out requires a custom build." },
]

const solutions = [
  { title: "Fast, Premium Websites", body: "We build sites that score 90+ on Core Web Vitals with sub-1s load times and flawless performance." },
  { title: "Mobile-First Development", body: "Every site we build is designed mobile-first, fully responsive across every device and screen size." },
  { title: "Custom Design & Development", body: "Fully branded, purposefully designed websites that reflect your business identity and convert visitors." },
]

const features = [
  { icon: Globe, title: "WordPress Development", description: "Custom WordPress sites with premium themes, plugins, and performance optimization built in.", badge: "WordPress", accent: "text-brand-purple", glow: "rgba(139,92,246,0.10)" },
  { icon: Code2, title: "Shopify Development", description: "Custom Shopify stores with conversion-optimized themes, apps, and full ecommerce functionality.", badge: "Shopify", accent: "text-brand-purple", glow: "rgba(103,232,249,0.10)" },
  { icon: Layout, title: "Landing Pages", description: "High-converting landing pages for campaigns, product launches, and lead generation funnels.", badge: "CRO", accent: "text-brand-blue", glow: "rgba(96,165,250,0.10)" },
  { icon: Layers, title: "Full-Stack & SaaS", description: "Custom-coded web applications, SaaS dashboards, and business platforms with modern tech stacks.", badge: "Custom", accent: "text-brand-violet", glow: "rgba(168,85,247,0.10)" },
  { icon: Zap, title: "Speed Optimization", description: "Core Web Vitals optimization, image compression, CDN setup, and lazy loading for peak performance.", badge: "Performance", accent: "text-brand-green", glow: "rgba(16,185,129,0.10)" },
  { icon: Shield, title: "Security & Maintenance", description: "SSL setup, security hardening, plugin updates, backups, and ongoing maintenance to keep sites safe.", badge: "Security", accent: "text-brand-purple", glow: "rgba(139,92,246,0.10)" },
]

const flowSteps = [
  { icon: Layout, title: "Discovery & Wireframing", body: "We understand your goals, audience, and competitors, then create a clear website structure and wireframe.", duration: "Day 1–3" },
  { icon: Code2, title: "Design & Development", body: "Custom design mockups followed by full development on your chosen platform — no generic templates.", duration: "Week 1–3" },
  { icon: Zap, title: "Testing & Optimization", body: "Cross-browser testing, mobile QA, speed optimization, and SEO foundation setup before launch.", duration: "Week 3–4" },
  { icon: Globe, title: "Launch & Handover", body: "We deploy to production, set up analytics, train your team, and provide post-launch support.", duration: "Week 4+" },
]

const whyUsItems = [
  { icon: Code2, title: "Multi-Platform Expertise", body: "From WordPress to Shopify to custom Next.js builds, we develop on every major platform with proven results.", highlight: "All Platforms", accent: "text-brand-purple", bg: "rgba(139,92,246,0.08)", dotColor: "purple" as const },
  { icon: Zap, title: "Performance-First Builds", body: "Every project targets 90+ Lighthouse scores, sub-1s load times, and Core Web Vitals compliance by default.", highlight: "90+ Score", accent: "text-brand-purple", bg: "rgba(103,232,249,0.08)", dotColor: "cyan" as const },
  { icon: Smartphone, title: "Mobile-First Always", body: "We design and develop mobile-first, ensuring flawless experiences across every device and screen size.", highlight: "100% Mobile Ready", accent: "text-brand-blue", bg: "rgba(96,165,250,0.08)", dotColor: "blue" as const },
  { icon: Shield, title: "Ongoing Support", body: "We don't just deliver and disappear. Post-launch support, maintenance, and growth partnerships available.", highlight: "Long-Term Partner", accent: "text-brand-green", bg: "rgba(16,185,129,0.08)", dotColor: "green" as const },
]

const faqs = [
  { question: "Which platforms do you build on?", answer: "We specialize in WordPress, Shopify, and custom full-stack builds using modern frameworks like Next.js. We recommend the best platform based on your specific business needs." },
  { question: "How long does a website project take?", answer: "A standard business website or landing page takes 2–4 weeks. Shopify stores take 2–4 weeks. Complex custom-coded web apps or SaaS platforms may take 6–12 weeks depending on scope." },
  { question: "Will my website be mobile-friendly?", answer: "Absolutely. Every site we build is designed mobile-first and tested across all major devices — iPhone, Android, tablets, and desktops — before launch." },
  { question: "Do you handle hosting and domain setup?", answer: "Yes. We guide you through hosting selection (or use your existing provider), configure your domain, SSL certificate, CDN, and all technical infrastructure needed to go live." },
  { question: "What happens after the website launches?", answer: "We offer post-launch support packages that include bug fixes, content updates, plugin maintenance, security monitoring, and performance reporting to keep your site running perfectly." },
]

export function WebDevelopmentPage() {
  return (
    <>
      <SolutionHero
        badge="Web Development"
        badgeIcon={Code2}
        headline={<>Premium Websites Built to <span className="text-gradient-brand">Convert & Perform</span></>}
        subtext="ClickDudes builds fast, beautiful, fully custom websites on WordPress, Shopify, and modern tech stacks — engineered for performance and designed to convert."
        primaryCTA={{ label: "Build My Website", href: "/about/contact-us" }}
        secondaryCTA={{ label: "Talk to Our Team", href: "/about/contact-us" }}
        caption="Custom builds · 90+ Lighthouse scores · Mobile-first · Post-launch support"
        stats={[
          { value: "200+", label: "Sites Delivered" },
          { value: "99.9%", label: "Uptime SLA" },
          { value: "0.8s",  label: "Avg Load Time" },
          { value: "100%",  label: "Mobile Ready" },
        ]}
        panelContent={<WebDevHeroPanel />}
        robotVariant="laptop"
      />
      <WebDevTechSection />
      <SolutionProblemSolution
        badge="The Problem"
        heading={<>Why Most Business Websites <span className="text-gradient-brand">Underperform</span></>}
        subtext="Most websites are built fast and cheap — and they perform that way too. Here's what goes wrong and how ClickDudes fixes it."
        problems={problems}
        solutions={solutions}
        problemLabel="Without ClickDudes"
        solutionLabel="With ClickDudes"
      />
      <SolutionFeatures
        badge="What We Build"
        heading={<>Complete Web Development <span className="text-gradient-brand">Service Suite</span></>}
        subtext="Every type of web project delivered with premium quality, performance engineering, and conversion focus."
        features={features}
      />
      <WebDevProcessSection />
      <SolutionWhyUs
        badge="Why ClickDudes"
        heading={<>The Web Development Partner <span className="text-gradient-brand">Built for Results</span></>}
        subtext="We combine technical excellence, design precision, and long-term support to deliver websites that perform."
        items={whyUsItems}
      />
      <WebDevTestimonials />
      <SolutionFAQ
        badge="FAQ"
        heading={<>Web Development <span className="text-gradient-brand">Questions Answered</span></>}
        subtext="Real questions about timelines, technology choices, and what working with our dev team actually looks like."
        faqs={faqs}
      />
      <WebDevCTASection />
    </>
  )
}
