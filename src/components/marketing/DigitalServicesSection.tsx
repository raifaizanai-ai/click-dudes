"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { AIGrowthPipeline } from "@/components/marketing/AIGrowthPipeline"

/* ── Variants ───────────────────────────────────────────────── */

const ctaReveal = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
}

const headerReveal = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

/* ── Component ──────────────────────────────────────────────── */

export function DigitalServicesSection() {
  return (
    <Section background="section" padding="xl" aria-label="AI Growth Command Center" className="overflow-hidden">
      <GradientOrb color="blue"   size="xl"  blur="2xl" opacity={0.06}        className="-top-24 right-0" />
      <GradientOrb color="purple" size="lg"  blur="2xl" opacity={0.07} animate className="bottom-0 left-1/4" />
      <GradientOrb color="cyan"   size="md"  blur="xl"  opacity={0.04}        className="top-1/3 left-0" />

      <Container size="lg" className="relative z-10">

        {/* Section header */}
        <motion.div
          variants={headerReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="text-center mb-10 sm:mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-brand-purple/20 text-[11px] font-semibold tracking-widest uppercase text-brand-purple mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" aria-hidden="true" />
            AI Growth Engine
          </span>
          <h2 className="text-h3 sm:text-h2 font-bold text-text-primary tracking-heading text-balance mt-2">
            One AI.{" "}
            <GradientText gradient="brand">Eight Services. Infinite Growth.</GradientText>
          </h2>
          <p className="text-sm sm:text-base text-text-secondary text-pretty max-w-2xl mx-auto mt-4 leading-relaxed">
            Traffic enters. ClickBot AI processes. Services execute. Revenue grows. Every channel unified
            inside one AI-powered growth operating system.
          </p>
        </motion.div>

        {/* Pipeline */}
        <AIGrowthPipeline />

        {/* CTA row */}
        <motion.div
          variants={ctaReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center gap-4"
        >
          <div className="text-center">
            <h3 className="text-[22px] sm:text-[28px] font-bold text-text-primary tracking-tight text-balance">
              Ready to{" "}
              <GradientText gradient="brand">Scale Faster?</GradientText>
            </h3>
            <p className="text-sm text-text-secondary max-w-xl mx-auto mt-2 text-pretty">
              Discover how Click Dudes combines SEO, paid ads, content, design, development, and AI automation
              into one growth engine.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-1">
            <Link
              href="/about/contact-us"
              className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white bg-gradient-to-r from-brand-purple to-brand-blue shadow-[0_4px_24px_rgba(139,92,246,0.28)] hover:shadow-[0_8px_36px_rgba(139,92,246,0.40)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 ease-in-out pointer-events-none"
                style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%)" }}
              />
              Contact Us for Services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </Link>
            <Link
              href="/about/contact-us"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold text-text-secondary border border-white/60 glass-subtle hover:text-brand-purple hover:border-brand-purple/20 hover:bg-brand-purple/[0.04] transition-all duration-300"
            >
              Get Free Growth Audit
            </Link>
          </div>
        </motion.div>

      </Container>
    </Section>
  )
}
