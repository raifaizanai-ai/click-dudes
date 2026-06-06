"use client"

import { motion } from "framer-motion"
import { ArrowRight, CheckCircle, MessageSquare } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { ClickBotCommandCenter } from "@/sections/contact/ClickBotCommandCenter"

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const STATS = [
  { value: "250+", label: "Publishers" },
  { value: "50+",  label: "Demand Partners" },
  { value: "25+",  label: "Countries" },
  { value: "+40%", label: "RPM Lift" },
]

export function ContactHeroSection() {
  return (
    <Section background="hero" padding="none" aria-label="ClickBot AI hero"
      className="pt-10 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.12} animate className="-top-24 left-1/4" />
      <GradientOrb color="cyan" size="xl" blur="2xl" opacity={0.08} className="top-0 -right-16" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[580px]">

          {/* Left Column */}
          <motion.div variants={stagger} initial="hidden" animate="visible"
            className="flex flex-col gap-6 order-2 lg:order-1">

            <motion.span variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" aria-hidden="true" />
              ClickBot™ AI — Online
            </motion.span>

            <motion.h1 variants={fadeUp}
              className="text-h2 sm:text-h1 lg:text-display font-bold text-text-primary tracking-display text-balance leading-tight">
              Unlock More Revenue<br className="hidden sm:block" />
              With{" "}<GradientText gradient="brand">ClickBot™ AI</GradientText>
            </motion.h1>

            <motion.p variants={fadeUp}
              className="text-base md:text-body-lg text-text-secondary text-pretty leading-relaxed max-w-xl">
              The AI-powered monetization assistant helping publishers maximize revenue through Google AdX,
              Header Bidding, Premium Demand, and AI Optimization.
            </motion.p>

            {/* Stats grid */}
            <motion.div variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {STATS.map(({ value, label }) => (
                <div key={label}
                  className="glass-strong rounded-2xl p-3 border border-brand-purple/[0.10] flex flex-col gap-1"
                  style={{ boxShadow: "0 4px 16px rgba(7,17,47,0.04)" }}>
                  <span className="text-xl font-bold text-text-primary tracking-tight">{value}</span>
                  <span className="text-xs text-text-muted">{label}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 pt-1">
              <a href="/about/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-brand hover:shadow-[0_4px_24px_rgba(139,92,246,0.35)] transition-shadow duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/60">
                Apply For Monetization
                <ArrowRight aria-hidden="true" className="w-4 h-4" />
              </a>
              <a href="/publisher-solutions/monetization-eligibility-criteria"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-brand-purple glass border border-brand-purple/20 hover:border-brand-purple/35 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40">
                <CheckCircle aria-hidden="true" className="w-4 h-4" />
                Check Eligibility
              </a>
              <a href="#contact-form"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-text-secondary glass border border-brand-purple/[0.10] hover:border-brand-purple/20 transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40">
                <MessageSquare aria-hidden="true" className="w-4 h-4" />
                Talk To Our Team
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column — ClickBot Command Center */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex justify-center items-center order-1 lg:order-2"
            aria-hidden="true"
          >
            <ClickBotCommandCenter />
          </motion.div>

        </div>
      </Container>
    </Section>
  )
}
