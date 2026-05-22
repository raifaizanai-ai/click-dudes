"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { LiveDot } from "@/components/shared/LiveDot"

export interface WhyUsItem {
  icon:      LucideIcon
  title:     string
  body:      string
  highlight: string
  accent:    string
  bg:        string
  dotColor:  "green" | "purple" | "blue" | "cyan"
}

export interface SolutionWhyUsProps {
  badge?:   string
  heading:  React.ReactNode
  subtext:  string
  items:    WhyUsItem[]
}

const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.11, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function SolutionWhyUs({ badge, heading, subtext, items }: SolutionWhyUsProps) {
  return (
    <Section background="base" padding="lg" aria-label="Why choose Click Dudes" className="mesh-bg">
      <GradientOrb color="cyan"   size="xl" blur="2xl" opacity={0.09} animate className="-top-24 right-0" />
      <GradientOrb color="purple" size="md" blur="xl"  opacity={0.07}        className="bottom-0 left-0" />

      <Container>
        <SectionHeader badge={badge} heading={heading} subtext={subtext}
          align="center" subtextWidth="md" className="mb-14" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {items.map((item, i) => (
            <motion.div key={item.title} custom={i} variants={cardVariant} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
              className="glass-strong rounded-3xl p-7 border border-brand-purple/[0.10] relative overflow-hidden group"
              style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}>

              <div aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-3xl"
                style={{ background: `radial-gradient(ellipse at 20% 20%, ${item.bg} 0%, transparent 65%)` }} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: item.bg }}>
                    <item.icon aria-hidden="true" className={`w-[22px] h-[22px] ${item.accent}`} />
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full glass border border-brand-purple/[0.12]">
                    <LiveDot color={item.dotColor} size="sm" />
                    <span className="text-[10px] font-semibold tracking-wide text-text-muted">{item.highlight}</span>
                  </div>
                </div>
                <h3 className="text-[16px] font-bold text-text-primary mb-2.5 leading-snug">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
