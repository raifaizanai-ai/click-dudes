"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { RobotImage } from "@/components/shared/RobotImage"
import { AgencyOrbitScene } from "@/components/marketing/AgencyOrbitScene"
import { AGENCY_SERVICES } from "@/components/marketing/AgencyServiceWidget"

const ctaReveal = {
  hidden:  { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
}

const mobileCardReveal = {
  hidden:  { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function DigitalServicesSection() {
  return (
    <Section background="base" padding="xl" aria-label="AI-Powered Agency Ecosystem" className="overflow-hidden">
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.07} animate className="-top-48 left-1/3 -translate-x-1/2" />
      <GradientOrb color="blue"   size="xl"  blur="2xl" opacity={0.05}        className="-top-20 right-0" />
      <GradientOrb color="cyan"   size="lg"  blur="xl"  opacity={0.05} animate className="bottom-0 left-1/4" />

      <Container size="lg" className="relative z-10">
        <SectionHeader
          badge="AI Growth Engine"
          heading={<>One Agency. <span className="text-gradient-brand">Every Channel.</span></>}
          subtext="One intelligent platform orchestrates SEO, paid ads, social, development, and design — every service amplified by AI, compounding into a single revenue engine."
          align="center"
          subtextWidth="md"
        />

        {/* ── Mobile — robot + compact service list ───────────────── */}
        <div className="md:hidden mt-10 flex flex-col items-center gap-8">
          <RobotImage variant="energy" size="md" floatDelay={0} glowColor="purple" />

          <div className="grid grid-cols-2 gap-2.5 w-full max-w-sm">
            {AGENCY_SERVICES.map((svc, i) => {
              const Icon = svc.icon
              return (
                <motion.div
                  key={svc.id}
                  custom={i}
                  variants={mobileCardReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  className="rounded-2xl p-3 flex flex-col items-center gap-2 text-center"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(14px)",
                    border: `1px solid ${svc.hexColor}1e`,
                    boxShadow: `0 4px 20px rgba(7,17,47,0.07), 0 0 0 1px ${svc.hexColor}12`,
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center"
                    style={{ background: `${svc.hexColor}14` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: svc.hexColor }} aria-hidden="true" />
                  </div>
                  <p className="text-[11px] font-bold text-text-primary leading-tight">{svc.title}</p>
                  <p className="text-[12px] font-black text-text-primary leading-none">{svc.metric}</p>
                  <p className="text-[9px] text-text-muted">{svc.metricLabel}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* ── Desktop — cinematic AI orbit scene ──────────────────── */}
        <div className="hidden md:block mt-10">
          <AgencyOrbitScene />
        </div>

        {/* ── CTA row ─────────────────────────────────────────────── */}
        <motion.div
          variants={ctaReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-2.5 rounded-full px-7 py-3.5 text-[14px] font-semibold text-white bg-gradient-to-r from-brand-purple to-brand-blue shadow-[0_4px_24px_rgba(139,92,246,0.28)] hover:shadow-[0_8px_36px_rgba(139,92,246,0.40)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden"
          >
            <span
              aria-hidden="true"
              className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 ease-in-out pointer-events-none"
              style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.22) 50%, transparent 70%)" }}
            />
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
          </Link>
          <Link
            href="/about/contact-us"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-[14px] font-semibold text-text-secondary border border-white/60 glass-subtle hover:text-brand-purple hover:border-brand-purple/20 hover:bg-brand-purple/[0.04] transition-all duration-300"
          >
            Free Consultation
          </Link>
        </motion.div>
      </Container>
    </Section>
  )
}
