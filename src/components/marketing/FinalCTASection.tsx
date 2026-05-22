"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { RobotImage } from "@/components/shared/RobotImage"
import { CTAButtonGroup } from "@/components/marketing/CTAButtonGroup"

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
}

export function FinalCTASection() {
  return (
    <Section
      background="transparent"
      padding="xl"
      aria-label="Start Monetizing with Click Dudes"
      className="mesh-animated"
    >
      {/* Deep layered atmosphere */}
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.20} animate className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <GradientOrb color="cyan"   size="lg"  blur="xl"  opacity={0.12}        className="-bottom-16 right-1/4" />
      <GradientOrb color="violet" size="md"  blur="xl"  opacity={0.09}        className="-top-16 left-1/4" />
      <GradientOrb color="blue"   size="md"  blur="xl"  opacity={0.07}        className="top-1/3 right-1/6" />

      {/* AI grid texture */}
      <div aria-hidden="true" className="absolute inset-0 ai-grid pointer-events-none opacity-50" />

      <Container size="md">
        <div className="relative z-10">

          {/* ── Left robot — wave toward user ── */}
          <div className="absolute -left-16 top-1/2 -translate-y-1/2 pointer-events-none hidden xl:block">
            <div className="relative">
              <RobotImage variant="wave" size="lg" floatDelay={1} glowColor="purple" />
              {/* Speech bubble */}
              <div
                className="absolute -top-14 left-1/2 -translate-x-1/2 whitespace-nowrap glass-elevated rounded-full px-4 py-2 border border-brand-purple/[0.18]"
                aria-hidden="true"
              >
                <p className="text-xs font-semibold text-text-primary">Let&apos;s grow your revenue!</p>
                {/* Bubble tail */}
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white/92 rotate-45 border-r border-b border-brand-purple/[0.14]" />
              </div>
            </div>
          </div>

          {/* ── Right robot — smaller, offset ── */}
          <div className="absolute -right-20 bottom-0 opacity-70 pointer-events-none hidden xl:block">
            <RobotImage variant="wave" size="md" floatDelay={2.5} glowColor="cyan" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col items-center text-center gap-6"
          >
            {/* Badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple">
                <Sparkles aria-hidden="true" className="w-3.5 h-3.5" />
                Join the Network
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <h2
                className="font-bold text-text-primary tracking-display text-balance leading-[1.06]"
                style={{ fontSize: "clamp(1.9rem, 5vw, 4rem)" }}
              >
                Start Scaling Your Revenue{" "}
                <span className="text-gradient-brand">Intelligently</span>
              </h2>
            </motion.div>

            {/* Subheadline */}
            <motion.div variants={itemVariants}>
              <p className="text-base md:text-body-lg text-text-secondary text-pretty leading-relaxed max-w-lg">
                Join the next generation of AI-powered monetization infrastructure. Built for publishers who demand more than average.
              </p>
            </motion.div>

            {/* Robot — centered for mobile */}
            <motion.div variants={itemVariants} className="xl:hidden">
              <RobotImage variant="wave" size="sm" floatDelay={0.8} glowColor="purple" />
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants}>
              <CTAButtonGroup
                primary={{ label: "Apply For Monetization", href: "/about/contact-us" }}
                secondary={{ label: "Book Revenue Audit", href: "/about/contact-us" }}
                align="center"
                size="lg"
                stackOnMobile
              />
            </motion.div>

            {/* Trust proof */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 pt-2"
            >
              {["1,200+ Publishers", "GCPP Verified", "30-Day Results", "No Lock-in"].map((item, i) => (
                <span key={item} className="flex items-center gap-2">
                  {i > 0 && <span aria-hidden="true" className="text-text-muted/30">·</span>}
                  <span className="text-sm text-text-muted">{item}</span>
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
