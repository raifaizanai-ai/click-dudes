"use client"

import { motion } from "framer-motion"
import { XCircle, CheckCircle2, ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { GradientText } from "@/components/shared/GradientText"

/* ── Data ─────────────────────────────────────────────────── */

const PROBLEMS = [
  {
    title: "AdSense controls your floor",
    body:  "Google sets your minimum CPMs. You have zero visibility into why certain inventory earns less, and no lever to push it higher.",
  },
  {
    title: "Single demand source",
    body:  "One buyer. No competition. Without multiple SSPs bidding simultaneously, you leave significant revenue on the table every single auction.",
  },
  {
    title: "No access to premium deals",
    body:  "Preferred deals and private auctions are locked behind AdX. Premium advertisers paying $15–$40 CPMs simply cannot reach your inventory.",
  },
] as const

const SOLUTIONS = [
  {
    title: "AI-controlled price floors",
    body:  "Set intelligent minimum CPMs per position, geography, device type, and content category. Our AI recalibrates floors every 15 minutes to maximize yield.",
  },
  {
    title: "100+ demand partners bidding",
    body:  "Google AdX, Amazon TAM, Index Exchange, and 47 other premium SSPs compete in a unified real-time auction — driving CPMs up through competition.",
  },
  {
    title: "Preferred deals & private auctions",
    body:  "Unlock direct relationships with Fortune 500 advertisers. Access PMPs paying $20–$60 CPM that are completely unavailable through AdSense.",
  },
] as const

/* ── Motion ───────────────────────────────────────────────── */

const cardVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.10, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

/* ── Component ───────────────────────────────────────────── */

export function AdxProblemSolution() {
  return (
    <Section background="base" padding="lg" aria-label="AdSense problems vs AdX solutions" className="mesh-bg">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.08} animate className="-top-24 right-0" />

      <Container>
        <SectionHeader
          badge="The AdSense Problem"
          heading={<>Your Revenue Is Capped.<br /><GradientText gradient="brand">AdX Removes the Ceiling.</GradientText></>}
          subtext="Most publishers hit an AdSense plateau within months. The platform is designed for simplicity — not maximum yield. Here is exactly what you are missing."
          align="center"
          subtextWidth="md"
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 lg:gap-4 items-start">

          {/* ── Problems column ── */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold tracking-widest uppercase text-text-muted/70 mb-1">
              Without AdX
            </p>
            {PROBLEMS.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="glass rounded-2xl p-5 border border-red-400/[0.12] hover:border-red-400/[0.22] transition-colors duration-300"
              >
                <div className="flex items-start gap-3">
                  <XCircle aria-hidden="true" className="w-5 h-5 text-red-400/70 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-text-primary mb-1">{item.title}</p>
                    <p className="text-[13px] text-text-secondary leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── Center arrow ── */}
          <div className="hidden lg:flex items-center justify-center self-center pt-8">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-purple/10 border border-brand-purple/[0.20] flex items-center justify-center">
                <ArrowRight aria-hidden="true" className="w-5 h-5 text-brand-purple" />
              </div>
              <div className="w-px h-24 bg-gradient-to-b from-brand-purple/20 to-transparent" aria-hidden="true" />
            </div>
          </div>

          {/* ── Solutions column ── */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-bold tracking-widest uppercase text-brand-green/80 mb-1">
              With Click Dudes AdX
            </p>
            {SOLUTIONS.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="glass rounded-2xl p-5 border border-brand-green/[0.18] hover:border-brand-green/[0.30] transition-colors duration-300"
                style={{ boxShadow: "0 4px 24px rgba(16,185,129,0.06)" }}
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 aria-hidden="true" className="w-5 h-5 text-brand-green flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-text-primary mb-1">{item.title}</p>
                    <p className="text-[13px] text-text-secondary leading-relaxed">{item.body}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  )
}
