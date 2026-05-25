"use client"

import { motion } from "framer-motion"
import { ShieldCheck } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { HeroBadge } from "@/components/marketing/HeroBadge"
import { CTAButtonGroup } from "@/components/marketing/CTAButtonGroup"
import { GradientText } from "@/components/shared/GradientText"
import { RobotImage } from "@/components/shared/RobotImage"
import { AdxHeroPanel } from "@/sections/solutions/google-adx/AdxHeroPanel"
import { STATS } from "@/lib/stats"

/* ── Data ─────────────────────────────────────────────────── */

const PAGE_STATS = [
  { value: STATS.rpmLift,     label: "Avg Revenue Uplift" },
  { value: STATS.publishers,  label: "Publishers Live" },
  { value: STATS.uptime,      label: "Uptime SLA" },
  { value: "24/7",            label: "AI Monitoring" },
]

/* ── Motion ───────────────────────────────────────────────── */

const contentVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.10, delayChildren: 0.05 } },
}

const itemVariant = {
  hidden:  { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
}

/* ── Component ───────────────────────────────────────────── */

export function AdxHero() {
  return (
    <Section background="transparent" padding="none" aria-label="Google AdX Solutions hero" className="mesh-animated overflow-hidden pt-10 pb-16 lg:pt-12 lg:pb-24">

      {/* Atmospheric layers */}
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.16} animate className="-top-40 -left-40" />
      <GradientOrb color="blue"   size="xl"  blur="2xl" opacity={0.10}        className="-top-20 right-0" />
      <GradientOrb color="cyan"   size="lg"  blur="xl"  opacity={0.08}        className="bottom-0 left-1/3" />
      <div aria-hidden="true" className="absolute inset-0 ai-grid pointer-events-none opacity-[0.14]" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-8 items-center py-4 lg:py-8">

          {/* ── Left: Content ── */}
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6 lg:pr-6"
          >
            <motion.div variants={itemVariant}>
              <HeroBadge showDot dotColor="green" prefix={<ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />}>
                Google MCM Certified Partner
              </HeroBadge>
            </motion.div>

            <motion.div variants={itemVariant}>
              <h1 className="font-bold text-text-primary tracking-display text-balance leading-[1.06]"
                style={{ fontSize: "clamp(2.6rem, 5.5vw, 4.2rem)" }}>
                Access Google AdX.{" "}
                <span className="block mt-1">
                  Earn{" "}
                  <GradientText gradient="brand">30%+ More</GradientText>
                  {" "}Revenue.
                </span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariant}>
              <p className="text-body-lg text-text-secondary leading-relaxed text-pretty max-w-lg">
                Skip the AdSense plateau. Click Dudes is a certified Google Multiple Customer Management partner — bringing premium AdX demand, private deals, and AI-powered price floors to qualifying publishers.
              </p>
            </motion.div>

            <motion.div variants={itemVariant}>
              <CTAButtonGroup
                primary={{ label: "Apply For AdX Access", href: "/about/contact-us" }}
                secondary={{ label: "Book Revenue Audit",   href: "/about/contact-us" }}
                align="left"
                size="lg"
                stackOnMobile
                caption="No setup fees · 3–7 day integration · Results in 30 days"
              />
            </motion.div>

            {/* Stats row */}
            <motion.div variants={itemVariant}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {PAGE_STATS.map((stat) => (
                  <div key={stat.label} className="glass rounded-2xl px-3.5 py-3 text-center border border-brand-purple/[0.10]">
                    <p className="text-xl font-bold text-gradient-brand leading-none">{stat.value}</p>
                    <p className="text-[10px] text-text-muted mt-1 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right: Dashboard panel + robot ── */}
          <div className="relative flex items-center justify-center lg:justify-end">
            {/* Robot assistant — floating left of panel */}
            <div className="absolute -left-8 bottom-8 z-20 pointer-events-none hidden xl:block">
              <div style={{ transform: "scale(1.20)", transformOrigin: "bottom center" }}>
                <RobotImage variant="analytics" size="sm" floatDelay={0.8} glowColor="purple" />
              </div>
            </div>

            <div className="relative w-full">
              {/* Outer atmospheric glow behind panel */}
              <div
                aria-hidden="true"
                className="absolute inset-0 -m-8 rounded-full blur-3xl opacity-30 pointer-events-none"
                style={{ background: "radial-gradient(ellipse at center, rgba(139,92,246,0.35) 0%, transparent 70%)" }}
              />
              <AdxHeroPanel />
            </div>
          </div>

        </div>
      </Container>
    </Section>
  )
}
