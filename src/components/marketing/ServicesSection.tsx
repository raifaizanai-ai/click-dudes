"use client"

import { Zap, GitBranch, Globe, Smartphone, Monitor, Cpu, LayoutGrid, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { RobotImage } from "@/components/shared/RobotImage"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { ServiceCard } from "@/components/marketing/ServiceCard"

type Accent = "purple" | "cyan" | "blue" | "violet" | "green"

interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
  accent: Accent
  href: string
}

const SERVICES: ServiceItem[] = [
  {
    icon: Zap,
    title: "Google AdX",
    description: "Premium programmatic demand from Google's ecosystem with industry-leading CPMs and fill rates.",
    accent: "violet",
    href: "/publisher-solutions/google-adx-solutions",
  },
  {
    icon: GitBranch,
    title: "Header Bidding",
    description: "Unified server-side and client-side auction infrastructure that maximizes every impression.",
    accent: "purple",
    href: "/publisher-solutions/header-bidding-solutions",
  },
  {
    icon: Globe,
    title: "Web Publishers",
    description: "Full-stack monetization for display, video, and native across desktop and mobile web.",
    accent: "blue",
    href: "/publisher-solutions/web-monetization",
  },
  {
    icon: Smartphone,
    title: "App Publishers",
    description: "High-performance in-app advertising across interstitials, banners, native, and rewarded video.",
    accent: "cyan",
    href: "/publisher-solutions/app-monetization",
  },
  {
    icon: Monitor,
    title: "CTV Publishers",
    description: "Connected TV and OTT monetization with premium brand-safe demand and transparent reporting.",
    accent: "purple",
    href: "/publisher-solutions/ctv-monetization",
  },
  {
    icon: Cpu,
    title: "Ad Optimization",
    description: "AI-powered floor pricing, layout testing, and demand matching tuned for maximum yield.",
    accent: "violet",
    href: "/publisher-solutions/ai-ad-optimization",
  },
  {
    icon: LayoutGrid,
    title: "Ad Formats",
    description: "Every format from IAB standard display to high-impact video, rich media, and custom units.",
    accent: "blue",
    href: "/ad-formats",
  },
  {
    icon: Users,
    title: "Publisher Referral",
    description: "Earn recurring revenue by referring publishers into the Click Dudes partner network.",
    accent: "green",
    href: "/resources/publisher-referral-program",
  },
]

export function ServicesSection() {
  return (
    <Section background="base" padding="lg" aria-label="Core Services" className="mesh-bg">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.09} className="-top-40 left-1/3" />
      <GradientOrb color="blue"   size="md" blur="xl"  opacity={0.06} className="bottom-0 right-0" />

      <Container size="lg">
        {/* Header row — with robot accent on desktop */}
        <div className="relative">
          <SectionHeader
            badge="Core Services"
            heading={
              <>
                Everything You Need to{" "}
                <span className="text-gradient-brand">Monetize at Scale</span>
              </>
            }
            subtext="A comprehensive monetization stack built for publishers who demand more than average — from first impression to final payout."
            align="center"
            subtextWidth="md"
          />
          {/* Floating robot — desktop only, right side */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none hidden xl:block">
            <RobotImage variant="search" size="md" floatDelay={0.8} glowColor="blue" />
          </div>
        </div>

        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
