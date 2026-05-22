"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { GradientText } from "@/components/shared/GradientText"

/* ── Data ─────────────────────────────────────────────────── */

const TESTIMONIALS = [
  {
    quote:      "We switched from AdSense to Click Dudes AdX access in early Q3. Within the first 30 days our RPM went from $4.20 to $7.80. The AI floor optimizer identified yield opportunities we never knew existed on our finance content.",
    name:       "Sarah M.",
    role:       "Head of Digital Revenue",
    company:    "TechPulse Media",
    metric:     "+86% RPM",
    vertical:   "Finance & Tech News",
    initials:   "SM",
    accentBg:   "bg-brand-purple/15",
    accentText: "text-brand-purple",
  },
  {
    quote:      "The onboarding was genuinely painless. Their team handled the entire GAM setup, and I had our first preferred deal locked in within two weeks. Advertisers are paying CPMs I didn't think were achievable for a mid-tier publisher.",
    name:       "James R.",
    role:       "CEO",
    company:    "Outdoor Enthusiast Network",
    metric:     "+42% monthly",
    vertical:   "Lifestyle & Sports",
    initials:   "JR",
    accentBg:   "bg-brand-blue/15",
    accentText: "text-brand-blue",
  },
  {
    quote:      "I was skeptical about the 30% uplift claim. Our actual result in month two was 37% above our previous AdSense baseline. What surprised me most was that viewability and user experience both improved at the same time.",
    name:       "Lisa K.",
    role:       "Publisher Manager",
    company:    "RecipeFinder Pro",
    metric:     "+37% revenue",
    vertical:   "Food & Lifestyle",
    initials:   "LK",
    accentBg:   "bg-brand-green/15",
    accentText: "text-brand-green",
  },
] as const

/* ── Motion ───────────────────────────────────────────────── */

const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

/* ── Component ───────────────────────────────────────────── */

export function AdxTestimonials() {
  return (
    <Section background="base" padding="lg" aria-label="Publisher success stories" className="mesh-bg">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.09} animate className="-top-24 left-1/4" />

      <Container>
        <SectionHeader
          badge="Publisher Stories"
          heading={<>Real Results from<br /><GradientText gradient="brand">Real Publishers</GradientText></>}
          subtext="These are not cherry-picked edge cases. Our average publisher sees 30%+ uplift within the first 30 days — consistently across verticals."
          align="center"
          subtextWidth="md"
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
              className="glass-strong rounded-3xl p-6 border border-brand-purple/[0.10] flex flex-col gap-5 relative overflow-hidden"
              style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}
            >
              {/* Subtle top gradient */}
              <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent pointer-events-none" />

              {/* Quote icon + metric badge */}
              <div className="flex items-start justify-between">
                <div className="w-9 h-9 rounded-xl bg-brand-purple/[0.08] flex items-center justify-center">
                  <Quote aria-hidden="true" className="w-4 h-4 text-brand-purple/60" />
                </div>
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${t.accentBg} ${t.accentText}`}>
                  {t.metric}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-sm text-text-secondary leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Author */}
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
