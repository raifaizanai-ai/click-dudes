"use client"

import { motion } from "framer-motion"
import { ShieldCheck, Brain, UserCheck, Unlock, type LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { GradientText } from "@/components/shared/GradientText"
import { LiveDot } from "@/components/shared/LiveDot"

/* ── Data ─────────────────────────────────────────────────── */

interface Differentiator {
  icon:      LucideIcon
  title:     string
  body:      string
  highlight: string
  accent:    string
  bg:        string
  dotColor:  "green" | "purple" | "blue" | "cyan"
}

const DIFFERENTIATORS: Differentiator[] = [
  {
    icon:      ShieldCheck,
    title:     "Google Certified MCM Partner",
    body:      "We are an officially vetted Google Multiple Customer Management partner. Publishers managed through our network receive full AdX access without the 5M monthly visitor threshold for direct signup.",
    highlight: "GCPP Verified",
    accent:    "text-brand-green",
    bg:        "rgba(16,185,129,0.09)",
    dotColor:  "green",
  },
  {
    icon:      Brain,
    title:     "Proprietary AI Yield Engine",
    body:      "Our AI analyzes 47 demand signals every 15 minutes — adjusting price floors, timing bid requests, and reconfiguring SSP priority in real-time. It never stops optimizing.",
    highlight: "AI Optimizing",
    accent:    "text-brand-purple",
    bg:        "rgba(139,92,246,0.09)",
    dotColor:  "purple",
  },
  {
    icon:      UserCheck,
    title:     "Named Publisher Success Manager",
    body:      "Every publisher gets a dedicated human expert — not a ticketing system. Your manager runs weekly yield reviews, flags anomalies, and proactively recommends improvements.",
    highlight: "1-on-1 Support",
    accent:    "text-brand-blue",
    bg:        "rgba(96,165,250,0.09)",
    dotColor:  "blue",
  },
  {
    icon:      Unlock,
    title:     "No Lock-in. No Hidden Fees.",
    body:      "Month-to-month terms with transparent revenue share. No onboarding fees, no minimum commitments, and no contracts designed to trap you. If we don't deliver results, you're free to leave.",
    highlight: "Flexible Terms",
    accent:    "text-brand-cyan",
    bg:        "rgba(103,232,249,0.09)",
    dotColor:  "cyan",
  },
]

/* ── Motion ───────────────────────────────────────────────── */

const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.11, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

/* ── Component ───────────────────────────────────────────── */

export function AdxWhyUs() {
  return (
    <Section background="base" padding="lg" aria-label="Why choose Click Dudes for AdX" className="mesh-bg">
      <GradientOrb color="cyan"   size="xl" blur="2xl" opacity={0.09} animate className="-top-24 right-0" />
      <GradientOrb color="purple" size="md" blur="xl"  opacity={0.07}        className="bottom-0 left-0" />

      <Container>
        <SectionHeader
          badge="Why Click Dudes"
          heading={<>The Publisher's{" "}<GradientText gradient="cyan">Unfair Advantage</GradientText></>}
          subtext="We're not a self-serve platform. We're a managed growth partner — built exclusively to maximize revenue for serious publishers."
          align="center"
          subtextWidth="md"
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {DIFFERENTIATORS.map((item, i) => (
            <motion.div
              key={item.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
              className="glass-strong rounded-3xl p-7 border border-brand-purple/[0.10] relative overflow-hidden group"
              style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}
            >
              {/* Hover atmosphere */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-3xl"
                style={{ background: `radial-gradient(ellipse at 20% 20%, ${item.bg} 0%, transparent 65%)` }}
              />

              <div className="relative z-10">
                {/* Icon + badge row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0"
                    style={{ background: item.bg }}>
                    <item.icon aria-hidden="true" className={`w-5.5 h-5.5 ${item.accent}`} style={{ width: 22, height: 22 }} />
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
