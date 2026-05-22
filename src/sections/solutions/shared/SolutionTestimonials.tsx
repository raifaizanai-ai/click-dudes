"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"

export interface TestimonialItem {
  quote:      string
  name:       string
  role:       string
  company:    string
  metric:     string
  vertical:   string
  initials:   string
  accentBg:   string
  accentText: string
}

export interface SolutionTestimonialsProps {
  badge?:       string
  heading:      React.ReactNode
  subtext:      string
  testimonials: TestimonialItem[]
}

const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function SolutionTestimonials({ badge, heading, subtext, testimonials }: SolutionTestimonialsProps) {
  return (
    <Section background="base" padding="lg" aria-label="Publisher success stories" className="mesh-bg">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.09} animate className="-top-24 left-1/4" />

      <Container>
        <SectionHeader badge={badge} heading={heading} subtext={subtext}
          align="center" subtextWidth="md" className="mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} custom={i} variants={cardVariant} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
              className="glass-strong rounded-3xl p-6 border border-brand-purple/[0.10] flex flex-col gap-5 relative overflow-hidden"
              style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}>

              <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent pointer-events-none" />

              <div className="flex items-start justify-between">
                <div className="w-9 h-9 rounded-xl bg-brand-purple/[0.08] flex items-center justify-center">
                  <Quote aria-hidden="true" className="w-4 h-4 text-brand-purple/60" />
                </div>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${t.accentBg} ${t.accentText}`}>
                  {t.metric}
                </span>
              </div>

              <blockquote className="text-sm text-text-secondary leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3 pt-3 border-t border-brand-purple/[0.08]">
                <div className={`w-10 h-10 rounded-full ${t.accentBg} flex items-center justify-center flex-shrink-0`}>
                  <span className={`text-xs font-bold ${t.accentText}`}>{t.initials}</span>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-text-primary leading-tight">{t.name}</p>
                  <p className="text-[11px] text-text-muted mt-0.5">{t.role} · {t.company}</p>
                  <p className="text-[10px] text-text-muted/70 mt-0.5">{t.vertical}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
