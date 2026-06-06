"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { RobotImage } from "@/components/shared/RobotImage"

const TRUST = [
  "No long-term contracts",
  "2–7 days to go live",
  "GCPP Verified Partners Network",
  "Dedicated success manager",
]

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

export function MissionCTA() {
  return (
    <Section background="base" padding="lg" aria-label="Mission CTA">
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.10} animate className="-top-32 left-1/2 -translate-x-1/2" />
      <GradientOrb color="cyan"   size="xl"  blur="2xl" opacity={0.07}        className="bottom-0 right-0" />

      <Container size="lg">
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          className="glass-strong rounded-3xl p-10 md:p-14 border border-brand-purple/[0.14] relative overflow-hidden text-center"
          style={{ boxShadow: "0 24px 80px rgba(7,17,47,0.08), 0 0 0 1px rgba(139,92,246,0.10)" }}
        >
          {/* Top gradient shimmer */}
          <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />
          {/* Ambient glow */}
          <div aria-hidden="true" className="absolute -top-20 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-brand-purple/08 blur-3xl pointer-events-none" />

          {/* Robot */}
          <motion.div
            variants={fadeUp}
            className="flex justify-center mb-6"
          >
            <RobotImage variant="wave" size="md" glowColor="purple" floatDelay={0.5} />
          </motion.div>

          <motion.span variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple mb-5"
          >
            Ready to join?
          </motion.span>

          <motion.h2 variants={fadeUp}
            className="text-h2 md:text-h1 font-bold text-text-primary tracking-heading text-balance leading-tight mb-4"
          >
            Ready To <GradientText gradient="brand">Grow Revenue?</GradientText>
          </motion.h2>

          <motion.p variants={fadeUp}
            className="text-body text-text-secondary max-w-lg mx-auto text-pretty mb-8"
          >
            Apply today and see what publisher-first monetization looks like when it's done properly.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link
              href="/publisher-solutions/monetization-eligibility-criteria"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-violet text-white font-bold text-sm shadow-[0_4px_28px_rgba(139,92,246,0.40)] hover:shadow-[0_8px_44px_rgba(139,92,246,0.60)] transition-all duration-300 hover:-translate-y-0.5"
            >
              Check Your Eligibility
              <ArrowRight aria-hidden="true" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/about/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-semibold text-sm text-text-primary glass border border-brand-purple/15 hover:-translate-y-0.5 transition-all duration-300"
              style={{ boxShadow: "0 2px 16px rgba(7,17,47,0.06)" }}
            >
              Talk To Our Team
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {TRUST.map((t) => (
              <span key={t} className="flex items-center gap-1.5 text-xs text-text-muted">
                <CheckCircle aria-hidden="true" className="w-3.5 h-3.5 text-brand-green flex-shrink-0" />
                {t}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
