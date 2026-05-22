"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"

export interface FeatureItem {
  icon:        LucideIcon
  title:       string
  description: string
  badge?:      string
  accent:      string
  glow:        string
}

export interface SolutionFeaturesProps {
  badge?:   string
  heading:  React.ReactNode
  subtext:  string
  features: FeatureItem[]
}

const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function SolutionFeatures({ badge, heading, subtext, features }: SolutionFeaturesProps) {
  return (
    <Section background="base" padding="lg" aria-label="Features" className="mesh-bg">
      <GradientOrb color="violet" size="xl" blur="2xl" opacity={0.09} animate className="-top-32 -left-24" />
      <GradientOrb color="cyan"   size="md" blur="xl"  opacity={0.07}        className="bottom-0 right-1/4" />

      <Container>
        <SectionHeader badge={badge} heading={heading} subtext={subtext}
          align="center" subtextWidth="md" className="mb-14" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <motion.div key={f.title} custom={i} variants={cardVariant} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
              className="glass-strong rounded-2xl p-6 border border-brand-purple/[0.10] group relative overflow-hidden"
              style={{ boxShadow: `0 8px 32px ${f.glow}, 0 0 0 1px rgba(139,92,246,0.07)` }}>

              <div aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at 30% 20%, ${f.glow} 0%, transparent 70%)` }} />

              <div className="relative z-10">
                <div className="w-10 h-10 rounded-xl mb-4 flex items-center justify-center" style={{ background: f.glow }}>
                  <f.icon aria-hidden="true" className={`w-5 h-5 ${f.accent}`} />
                </div>
                {f.badge && (
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider bg-brand-purple/[0.08] text-brand-purple mb-3">
                    {f.badge}
                  </span>
                )}
                <h3 className="text-[15px] font-bold text-text-primary mb-2 leading-snug">{f.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
