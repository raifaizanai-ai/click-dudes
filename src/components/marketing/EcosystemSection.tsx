"use client"

import { Globe, Smartphone, Monitor, Zap, GitBranch, Brain, BarChart3, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { RobotImage } from "@/components/shared/RobotImage"
import { EcosystemNode } from "@/components/marketing/EcosystemNode"
import { EcosystemVisualization } from "@/components/marketing/EcosystemVisualization"

type NodeAccent = "purple" | "cyan" | "blue" | "violet" | "green"

interface MobileItem {
  icon: LucideIcon
  title: string
  description: string
  accent: NodeAccent
  delay: number
}

const MOBILE_ITEMS: MobileItem[] = [
  { icon: Globe,      title: "Web Publishers",   description: "Display, video & native revenue", accent: "blue",   delay: 0 },
  { icon: Smartphone, title: "App Publishers",   description: "High-fill in-app monetization",   accent: "cyan",   delay: 1 },
  { icon: Monitor,    title: "CTV Publishers",   description: "Premium connected TV demand",      accent: "violet", delay: 2 },
  { icon: Zap,        title: "Google AdX",       description: "Premium demand pool access",       accent: "violet", delay: 3 },
  { icon: GitBranch,  title: "Header Bidding",   description: "Unified auction yield",            accent: "purple", delay: 4 },
  { icon: Brain,      title: "AI Optimization",  description: "ML floor & placement engine",      accent: "cyan",   delay: 5 },
  { icon: BarChart3,  title: "Revenue Analytics", description: "Real-time monetization data",     accent: "blue",   delay: 6 },
  { icon: Sparkles,   title: "Premium Demand",   description: "Fortune 500 brand access",         accent: "purple", delay: 7 },
]

export function EcosystemSection() {
  return (
    <Section background="base" padding="lg" aria-label="AI Monetization Ecosystem" className="mesh-bg overflow-hidden">
      <GradientOrb color="purple" size="xl"  blur="2xl" opacity={0.09} animate className="-top-40 -right-48" />
      <GradientOrb color="cyan"   size="lg"  blur="xl"  opacity={0.06}        className="bottom-0 left-1/4" />
      <GradientOrb color="violet" size="md"  blur="xl"  opacity={0.06} animate className="top-1/3 -left-20" />

      <Container size="lg">
        <SectionHeader
          badge="Monetization Ecosystem"
          heading={<>One Platform. <span className="text-gradient-brand">Every Channel.</span></>}
          subtext="Click Dudes connects web, app, and CTV publishers to premium programmatic demand. One managed platform covering every channel and every format."
          align="center"
          subtextWidth="md"
        />

        {/* Mobile — robot + 2-column node grid */}
        <div className="md:hidden mt-10 flex flex-col items-center gap-6 sm:gap-8">
          <RobotImage variant="main" size="md" floatDelay={0} glowColor="purple" />
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 w-full max-w-sm">
            {MOBILE_ITEMS.map((item) => (
              <EcosystemNode
                key={item.title}
                icon={item.icon}
                title={item.title}
                description={item.description}
                accent={item.accent}
                floatDelay={item.delay}
                className="w-full"
              />
            ))}
          </div>
        </div>

        {/* Desktop — cinematic orbital visualization */}
        <div className="hidden md:block">
          <EcosystemVisualization />
        </div>
      </Container>
    </Section>
  )
}
