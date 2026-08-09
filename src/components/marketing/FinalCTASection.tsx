"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight, Globe, Smartphone, Tv2 } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { RobotImage } from "@/components/shared/RobotImage"
import { BrowserFrame } from "@/sections/partner-dashboard/shared/BrowserFrame"
import { SCREENSHOTS } from "@/sections/partner-dashboard/data"
import { STATS } from "@/lib/stats"
import { useReducedMotion } from "@/hooks/use-media-query"
import { VIEWPORT_ONCE } from "@/lib/animations"

const LANES = [
  { icon: Globe, label: "Web" },
  { icon: Smartphone, label: "App" },
  { icon: Tv2, label: "CTV" },
] as const

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

export function FinalCTASection() {
  const reducedMotion = useReducedMotion()

  return (
    <Section background="transparent" padding="xl" aria-label="Grow with Click-Dudes" className="mesh-animated overflow-hidden">
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.18} animate className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <GradientOrb color="cyan"   size="lg"  blur="xl"  opacity={0.10}        className="-bottom-16 right-1/4" />
      <GradientOrb color="violet" size="md"  blur="xl"  opacity={0.08}        className="-top-16 left-1/4" />

      <div aria-hidden="true" className="absolute inset-0 ai-grid pointer-events-none opacity-40" />

      <Container size="lg" className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center text-center gap-6"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple">
              <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
              Grow With Click-Dudes
            </span>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="font-bold text-text-primary tracking-display text-balance leading-[1.06]"
              style={{ fontSize: "clamp(1.9rem, 5vw, 3.8rem)" }}>
              More Publisher Opportunities.{" "}
              <GradientText gradient="brand" as="span">One Growth Ecosystem.</GradientText>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-base md:text-body-lg text-text-secondary text-pretty leading-relaxed max-w-lg">
              Whether you&apos;re growing your own properties or bringing qualified publisher opportunities, Click-Dudes
              connects monetization, partnerships and technology through one ecosystem.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3">
            <Link href="/become-a-partner"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-bold text-[15px] hover:opacity-90 shadow-[0_4px_28px_rgba(139,92,246,0.35)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.50)] transition-all duration-300 hover:-translate-y-0.5">
              Become a Partner
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link href="/about/contact-us"
              className="inline-flex items-center justify-center px-7 py-4 rounded-xl glass border border-white/40 text-text-primary font-semibold text-[14px] hover:border-brand-purple/25 hover:bg-brand-purple/[0.04] transition-all duration-300">
              Apply for Monetization
            </Link>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link href="/partner-dashboard" className="text-[13px] font-semibold text-text-muted hover:text-brand-purple transition-colors duration-200 underline underline-offset-4">
              Explore Partner Dashboard
            </Link>
          </motion.div>

          {/* Lanes → hub visual */}
          <motion.div variants={itemVariants} className="relative w-full max-w-3xl mt-4 flex items-center justify-center gap-6 sm:gap-10" aria-hidden="true">
            <RobotImage variant="wave" size="sm" glowColor="purple" className="hidden sm:block flex-shrink-0" />

            <div className="relative flex items-center gap-3 sm:gap-5">
              <div className="flex flex-col gap-2.5">
                {LANES.map((lane, i) => (
                  <div key={lane.label} className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass-strong border border-brand-purple/15 text-[11px] font-semibold text-text-primary">
                      <lane.icon aria-hidden="true" className="w-3.5 h-3.5 text-brand-purple" />
                      {lane.label}
                    </div>
                    <svg width="32" height="2" className="hidden sm:block flex-shrink-0" aria-hidden="true">
                      <motion.line x1="0" y1="1" x2="32" y2="1" stroke="var(--color-brand-purple)" strokeWidth="1.5"
                        initial={reducedMotion ? undefined : { pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 0.35 }}
                        viewport={VIEWPORT_ONCE}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }} />
                    </svg>
                  </div>
                ))}
              </div>

              <div className="w-40 sm:w-52 flex-shrink-0">
                <BrowserFrame screenshot={SCREENSHOTS.dashboard} glow="cyan" sizes="208px" />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-2 mt-1">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-green flex-shrink-0" aria-hidden="true" />
            <span className="text-xs text-text-muted">{STATS.partnership} · {STATS.publishers} Publishers</span>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
