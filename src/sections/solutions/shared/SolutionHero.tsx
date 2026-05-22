"use client"

import React from "react"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { HeroBadge } from "@/components/marketing/HeroBadge"
import { CTAButtonGroup } from "@/components/marketing/CTAButtonGroup"
import { RobotImage } from "@/components/shared/RobotImage"
import type { RobotVariant } from "@/components/shared/RobotImage"
import { SolutionHeroPanel } from "@/sections/solutions/shared/SolutionHeroPanel"
import type { SolutionHeroPanelProps } from "@/sections/solutions/shared/SolutionHeroPanel"

export interface SolutionHeroProps {
  badge:         string
  badgeIcon?:    LucideIcon
  headline:      React.ReactNode
  subtext:       string
  primaryCTA?:   { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  caption?:      string
  stats:         Array<{ value: string; label: string }>
  panel?:        SolutionHeroPanelProps
  panelContent?: React.ReactNode
  robotVariant?: RobotVariant
}

const contentVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.10, delayChildren: 0.05 } },
}

const itemVariant = {
  hidden:  { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
}

export function SolutionHero({
  badge, badgeIcon: BadgeIcon, headline, subtext,
  primaryCTA  = { label: "Apply For Access", href: "/about/contact-us" },
  secondaryCTA = { label: "Book Revenue Audit", href: "/about/contact-us" },
  caption = "No setup fees · 3–7 day integration · Results in 30 days",
  stats, panel, panelContent, robotVariant = "analytics",
}: SolutionHeroProps) {
  return (
    <Section background="transparent" padding="none" aria-label="Hero section" className="mesh-animated overflow-hidden pt-10 pb-16 lg:pt-12 lg:pb-24">
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.16} animate className="-top-40 -left-40" />
      <GradientOrb color="blue"   size="xl"  blur="2xl" opacity={0.10}        className="-top-20 right-0" />
      <GradientOrb color="cyan"   size="lg"  blur="xl"  opacity={0.08}        className="bottom-0 left-1/3" />
      <div aria-hidden="true" className="absolute inset-0 ai-grid pointer-events-none opacity-[0.14]" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-8 items-center py-4 lg:py-8">

          {/* Left: content */}
          <motion.div variants={contentVariants} initial="hidden" animate="visible"
            className="flex flex-col gap-6 lg:pr-6">

            <motion.div variants={itemVariant}>
              <HeroBadge showDot dotColor="green"
                prefix={BadgeIcon && <BadgeIcon className="w-3.5 h-3.5" aria-hidden="true" />}>
                {badge}
              </HeroBadge>
            </motion.div>

            <motion.div variants={itemVariant}>
              <h1 className="font-bold text-text-primary tracking-display text-balance leading-[1.06]"
                style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)" }}>
                {headline}
              </h1>
            </motion.div>

            <motion.div variants={itemVariant}>
              <p className="text-body-lg text-text-secondary leading-relaxed text-pretty max-w-lg">
                {subtext}
              </p>
            </motion.div>

            <motion.div variants={itemVariant}>
              <CTAButtonGroup primary={primaryCTA} secondary={secondaryCTA}
                align="left" size="lg" stackOnMobile caption={caption} />
            </motion.div>

            <motion.div variants={itemVariant}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {stats.map((s) => (
                  <div key={s.label} className="glass rounded-2xl px-3.5 py-3 text-center border border-brand-purple/[0.10]">
                    <p className="text-xl font-bold text-gradient-brand leading-none">{s.value}</p>
                    <p className="text-[10px] text-text-muted mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: panel + robot */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute -left-8 bottom-8 z-20 pointer-events-none hidden xl:block">
              <div style={{ transform: "scale(1.20)", transformOrigin: "bottom center" }}>
                <RobotImage variant={robotVariant} size="sm" floatDelay={0.8} glowColor="purple" />
              </div>
            </div>
            <div className="relative w-full">
              <div aria-hidden="true" className="absolute inset-0 -m-8 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center, rgba(139,92,246,0.35) 0%, transparent 70%)" }} />
              {panelContent ?? (panel ? <SolutionHeroPanel {...panel} /> : null)}
            </div>
          </div>

        </div>
      </Container>
    </Section>
  )
}
