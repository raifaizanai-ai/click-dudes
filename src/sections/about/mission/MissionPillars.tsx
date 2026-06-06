"use client"

import { motion } from "framer-motion"
import { Heart, Eye, Globe2, TrendingUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { cn } from "@/lib/utils"

interface Pillar {
  icon:        LucideIcon
  iconBg:      string
  iconColor:   string
  gradientBg:  string
  title:       string
  tagline:     string
  description: string
  highlights:  string[]
}

const PILLARS: Pillar[] = [
  {
    icon:       Heart,
    iconBg:     "bg-brand-purple/12",
    iconColor:  "text-brand-purple",
    gradientBg: "rgba(139,92,246,0.07)",
    title:      "Publisher First",
    tagline:    "Every decision starts with publishers",
    description: "Our entire product, team structure, and commercial model is built around publisher success. If it doesn't help publishers earn more, we don't build it.",
    highlights: ["Publisher-only focus", "No advertiser bias", "Your success = our success"],
  },
  {
    icon:       Eye,
    iconBg:     "bg-brand-blue/12",
    iconColor:  "text-brand-blue",
    gradientBg: "rgba(96,165,250,0.07)",
    title:      "Transparent Growth",
    tagline:    "No black boxes. Ever.",
    description: "You see exactly what demand partners pay, what our fee is, and how every optimization decision was made. Full visibility into your revenue stack.",
    highlights: ["Clear revenue reporting", "Visible fee structure", "Open demand partner data"],
  },
  {
    icon:       Globe2,
    iconBg:     "bg-brand-green/12",
    iconColor:  "text-brand-green",
    gradientBg: "rgba(16,185,129,0.06)",
    title:      "Premium Demand Access",
    tagline:    "The buyers that matter most",
    description: "Google AdX, 50+ premium SSPs, private marketplace deals, and programmatic direct. The same infrastructure that powers enterprise publishers, available to you.",
    highlights: ["Google AdX access", "50+ premium SSPs", "Private marketplace deals"],
  },
  {
    icon:       TrendingUp,
    iconBg:     "bg-brand-cyan/12",
    iconColor:  "text-brand-cyan",
    gradientBg: "rgba(103,232,249,0.06)",
    title:      "Long-Term Revenue Focus",
    tagline:    "Built for sustainable growth",
    description: "We don't chase short-term CPM spikes. Our optimization model builds lasting revenue growth through better demand relationships and smarter inventory management.",
    highlights: ["No quick-fix tactics", "Compounding improvements", "Multi-year partnerships"],
  },
]

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
}
const cardVariant = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

export function MissionPillars() {
  return (
    <Section background="base" padding="lg" aria-label="Mission pillars">
      <GradientOrb color="cyan"   size="xl" blur="2xl" opacity={0.07} className="top-0 left-0" />
      <GradientOrb color="purple" size="md" blur="xl"  opacity={0.06} className="bottom-0 right-0" />

      <Container>
        <SectionHeader
          badge="Our Principles"
          heading={<>The Values That<br /><GradientText gradient="brand">Guide Everything We Do</GradientText></>}
          subtext="Four principles that shape every product decision, partnership, and publisher relationship."
          align="center"
          subtextWidth="md"
          className="mb-14"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {PILLARS.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVariant}
              whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
              className="glass-strong rounded-3xl p-8 border border-brand-purple/[0.10] relative overflow-hidden group"
              style={{ boxShadow: "0 12px 48px rgba(7,17,47,0.07), 0 0 0 1px rgba(139,92,246,0.08)" }}
            >
              {/* Hover atmosphere */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                style={{ background: `radial-gradient(ellipse at 10% 10%, ${p.gradientBg} 0%, transparent 60%)` }}
              />
              {/* Top edge shimmer */}
              <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/22 to-transparent" />

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-5">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110", p.iconBg)}>
                    <p.icon aria-hidden="true" className={cn("w-7 h-7", p.iconColor)} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-text-primary leading-tight">{p.title}</h3>
                    <p className="text-[12px] text-text-muted mt-0.5">{p.tagline}</p>
                  </div>
                </div>

                <p className="text-sm text-text-secondary leading-relaxed mb-5">{p.description}</p>

                <ul className="flex flex-col gap-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <span className={cn("w-1.5 h-1.5 rounded-full flex-shrink-0", p.iconBg.replace("/12", "/50"))} aria-hidden="true" />
                      <span className="text-xs text-text-secondary font-medium">{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
