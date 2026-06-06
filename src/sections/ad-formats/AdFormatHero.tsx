"use client"

import { motion } from "framer-motion"
import { Monitor, Smartphone, Tv2, PlaySquare, Layers, Zap } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { HeroBadge } from "@/components/marketing/HeroBadge"
import { CTAButtonGroup } from "@/components/marketing/CTAButtonGroup"
import { RobotImage } from "@/components/shared/RobotImage"
import { GradientText } from "@/components/shared/GradientText"

interface FloatingCard {
  label:    string
  icon:     LucideIcon
  pos:      string
  delay:    number
  accent:   string
  bg:       string
}

const PREVIEW_CARDS: FloatingCard[] = [
  { label: "Banner Ad",    icon: Monitor,     pos: "top-[8%]  left-[2%]",   delay: 0,    accent: "text-brand-purple", bg: "bg-brand-purple/10" },
  { label: "Native Ad",    icon: Layers,      pos: "top-[22%] right-[0%]",  delay: 0.3,  accent: "text-brand-blue",   bg: "bg-brand-blue/10"   },
  { label: "Sticky Ad",    icon: Zap,         pos: "bottom-[38%] left-[0%]", delay: 0.6, accent: "text-brand-purple",   bg: "bg-brand-cyan/10"   },
  { label: "Video Ad",     icon: PlaySquare,  pos: "top-[10%] right-[8%]",  delay: 0.15, accent: "text-brand-violet", bg: "bg-brand-violet/10" },
  { label: "Interstitial", icon: Smartphone,  pos: "bottom-[22%] right-[2%]",delay: 0.45, accent: "text-brand-green",  bg: "bg-brand-green/10"  },
  { label: "CTV Ad",       icon: Tv2,         pos: "bottom-[8%] left-[12%]", delay: 0.75, accent: "text-brand-purple", bg: "bg-brand-purple/10" },
]

const contentVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const itemVariant = {
  hidden:  { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

const floatVariant = (delay: number) => ({
  initial:  { opacity: 0, scale: 0.8 },
  animate:  { opacity: 1, scale: 1, transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] as const } },
})

const floatLoop = (delay: number) => ({
  animate: {
    y: [0, -8, 0],
    transition: { duration: 4 + delay, repeat: Infinity, ease: "easeInOut" as const, delay },
  },
})

export function AdFormatHero() {
  return (
    <Section background="transparent" padding="none" aria-label="Ad formats hero" className="mesh-animated overflow-hidden pt-10 pb-16 lg:pt-12 lg:pb-24">
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.15} animate className="-top-40 -left-40" />
      <GradientOrb color="blue"   size="xl"  blur="2xl" opacity={0.10}        className="-top-20 right-0" />
      <GradientOrb color="cyan"   size="lg"  blur="xl"  opacity={0.07}        className="bottom-0 left-1/3" />
      <div aria-hidden="true" className="absolute inset-0 ai-grid pointer-events-none opacity-[0.12]" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 items-center py-4 lg:py-8">

          {/* Left: text */}
          <motion.div variants={contentVariants} initial="hidden" animate="visible"
            className="flex flex-col gap-6 lg:pr-6">

            <motion.div variants={itemVariant}>
              <HeroBadge showDot dotColor="purple">Premium Ad Formats · Web · Mobile · CTV</HeroBadge>
            </motion.div>

            <motion.div variants={itemVariant}>
              <h1 className="font-bold text-text-primary tracking-display text-balance leading-[1.06]"
                style={{ fontSize: "clamp(2rem, 5.5vw, 4.2rem)" }}>
                Premium Ad Formats<br />
                <GradientText gradient="brand">for Every Screen</GradientText>
              </h1>
            </motion.div>

            <motion.div variants={itemVariant}>
              <p className="text-base md:text-body-lg text-text-secondary leading-relaxed text-pretty max-w-lg">
                Monetize web, mobile, app, and CTV inventory with high-performing ad formats designed to increase RPM, viewability, engagement, and revenue, all managed by Click Dudes.
              </p>
            </motion.div>

            <motion.div variants={itemVariant}>
              <CTAButtonGroup
                primary={{ label: "Explore Ad Formats", href: "#desktop-formats" }}
                secondary={{ label: "Explore Ad Format Strategy", href: "/about/contact-us" }}
                align="left" size="lg" stackOnMobile
                caption="No setup fees · 14 premium ad formats · Results in 30 days"
              />
            </motion.div>

            <motion.div variants={itemVariant}>
              <div className="grid grid-cols-3 gap-3 pt-2">
                {[
                  { value: "14+",  label: "Ad formats" },
                  { value: "97%",  label: "Fill rate"  },
                  { value: "41%",  label: "Avg RPM lift"},
                ].map(s => (
                  <div key={s.label} className="glass rounded-2xl px-3 py-3 text-center border border-brand-purple/[0.10]">
                    <p className="text-xl font-bold text-gradient-brand leading-none">{s.value}</p>
                    <p className="text-[10px] text-text-muted mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: robot + floating format cards */}
          <div className="relative hidden lg:flex items-center justify-center" style={{ minHeight: 480 }}>
            <div aria-hidden="true" className="absolute inset-0 -m-8 rounded-full blur-3xl opacity-25 pointer-events-none"
              style={{ background: "radial-gradient(ellipse at center, rgba(139,92,246,0.30) 0%, transparent 70%)" }} />

            {/* Robot center */}
            <RobotImage variant="main" size="lg" floatDelay={0.5} glowColor="purple" />

            {/* Floating format badge cards */}
            {PREVIEW_CARDS.map((card) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.label}
                  {...floatVariant(card.delay)}
                  className={`absolute ${card.pos}`}>
                  <motion.div {...floatLoop(card.delay)}>
                    <div className="glass-strong rounded-xl px-3 py-2 border border-brand-purple/[0.15] flex items-center gap-2"
                      style={{ boxShadow: "0 4px 20px rgba(139,92,246,0.12)" }}>
                      <div className={`w-7 h-7 rounded-lg ${card.bg} flex items-center justify-center flex-shrink-0`}>
                        <Icon aria-hidden="true" className={`w-3.5 h-3.5 ${card.accent}`} />
                      </div>
                      <span className="text-[11px] font-semibold text-text-primary whitespace-nowrap">{card.label}</span>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

        </div>
      </Container>
    </Section>
  )
}
