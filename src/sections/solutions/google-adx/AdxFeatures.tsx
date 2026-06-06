"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Handshake, Lock, BarChart3, Sparkles, UserCheck, type LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { GradientText } from "@/components/shared/GradientText"

/* ── Data ─────────────────────────────────────────────────── */

interface Feature {
  icon:        LucideIcon
  title:       string
  description: string
  badge?:      string
  accent:      string
  glow:        string
}

const FEATURES: Feature[] = [
  {
    icon:        BrainCircuit,
    title:       "AI Price Floor Management",
    description: "Our AI recalibrates minimum CPMs every 15 minutes per position, geo, device, and content vertical, squeezing maximum yield from every impression.",
    badge:       "AI-Powered",
    accent:      "text-brand-purple",
    glow:        "rgba(139,92,246,0.12)",
  },
  {
    icon:        Handshake,
    title:       "Preferred Deals",
    description: "Negotiate private rates directly with premium advertisers. Lock in guaranteed CPMs from Fortune 500 brands before the open auction even runs.",
    accent:      "text-brand-blue",
    glow:        "rgba(96,165,250,0.10)",
  },
  {
    icon:        Lock,
    title:       "Private Auction Access",
    description: "Invite-only auctions where select demand partners pay premium rates for exclusive inventory. Typical CPMs run 2–4× the open auction floor.",
    badge:       "Premium",
    accent:      "text-brand-violet",
    glow:        "rgba(168,85,247,0.10)",
  },
  {
    icon:        BarChart3,
    title:       "Real-Time Analytics",
    description: "Live RPM, eCPM, fill rate, and viewability broken down by placement, device, geography, and demand partner, updated every 60 seconds.",
    accent:      "text-brand-purple",
    glow:        "rgba(103,232,249,0.10)",
  },
  {
    icon:        Sparkles,
    title:       "Unified Header Bidding",
    description: "Prebid.js wrapper pre-configured with 50+ SSP adapters runs alongside AdX in a parallel real-time auction, maximizing competition on every request.",
    badge:       "Included",
    accent:      "text-brand-green",
    glow:        "rgba(16,185,129,0.10)",
  },
  {
    icon:        UserCheck,
    title:       "Dedicated Publisher Success Manager",
    description: "A named expert assigned to your account from day one. They run weekly yield reviews, flag anomalies, and proactively propose optimizations.",
    accent:      "text-brand-purple",
    glow:        "rgba(139,92,246,0.10)",
  },
]

/* ── Motion ───────────────────────────────────────────────── */

const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

/* ── Component ───────────────────────────────────────────── */

export function AdxFeatures() {
  return (
    <Section background="base" padding="lg" aria-label="Google AdX platform features" className="mesh-bg">
      <GradientOrb color="violet" size="xl" blur="2xl" opacity={0.09} animate className="-top-32 -left-24" />
      <GradientOrb color="cyan"   size="md" blur="xl"  opacity={0.07}        className="bottom-0 right-1/4" />

      <Container>
        <SectionHeader
          badge="Platform Features"
          heading={<>What AdX Gives You<br /><GradientText gradient="violet">Out of the Box</GradientText></>}
          subtext="One integration. Every premium monetization capability Google's premium exchange has to offer, plus Click Dudes AI running on top."
          align="center"
          subtextWidth="md"
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
              className="glass-strong rounded-2xl p-6 border border-brand-purple/[0.10] group relative overflow-hidden"
              style={{ boxShadow: `0 8px 32px ${feature.glow}, 0 0 0 1px rgba(139,92,246,0.07)` }}
            >
              {/* Hover glow fill */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                style={{ background: `radial-gradient(ellipse at 30% 20%, ${feature.glow} 0%, transparent 70%)` }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-10 h-10 rounded-xl mb-4 flex items-center justify-center`}
                  style={{ background: feature.glow }}>
                  <feature.icon aria-hidden="true" className={`w-5 h-5 ${feature.accent}`} />
                </div>

                {/* Badge */}
                {feature.badge && (
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider bg-brand-purple/[0.08] text-brand-purple mb-3">
                    {feature.badge}
                  </span>
                )}

                <h3 className="text-[15px] font-bold text-text-primary mb-2 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
