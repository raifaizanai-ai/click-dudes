"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Clock, Sparkles, Telescope } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { LiveDot } from "@/components/shared/LiveDot"

interface Milestone {
  icon:      LucideIcon
  phase:     string
  title:     string
  items:     string[]
  color:     string
  iconBg:    string
  iconColor: string
  dotColor:  "purple" | "blue" | "cyan" | "green"
  status:    "done" | "active" | "upcoming" | "future"
}

const MILESTONES: Milestone[] = [
  {
    icon:      CheckCircle2,
    phase:     "Today",
    title:     "Premium Network Foundation",
    items:     ["450+ publishers monetizing", "Google AdX + 50 SSPs live", "AI price floor optimization", "Header bidding stack deployed"],
    color:     "from-brand-green/15 to-transparent",
    iconBg:    "bg-brand-green/12",
    iconColor: "text-brand-green",
    dotColor:  "green",
    status:    "done",
  },
  {
    icon:      Clock,
    phase:     "Next",
    title:     "AI Intelligence Expansion",
    items:     ["Predictive revenue modeling", "Cross-publisher demand pooling", "Automated PMP deal matching", "Real-time audience data activation"],
    color:     "from-brand-purple/12 to-transparent",
    iconBg:    "bg-brand-purple/12",
    iconColor: "text-brand-purple",
    dotColor:  "purple",
    status:    "active",
  },
  {
    icon:      Sparkles,
    phase:     "Future",
    title:     "Full-Stack Publisher OS",
    items:     ["CTV and connected device monetization", "First-party data infrastructure", "Contextual AI targeting layer", "Publisher-owned identity graph"],
    color:     "from-brand-blue/10 to-transparent",
    iconBg:    "bg-brand-blue/12",
    iconColor: "text-brand-blue",
    dotColor:  "blue",
    status:    "upcoming",
  },
  {
    icon:      Telescope,
    phase:     "Long-Term Vision",
    title:     "Global Publisher Intelligence Network",
    items:     ["1000+ publishers globally", "Collective yield intelligence", "Category-defining demand relationships", "The definitive publisher growth platform"],
    color:     "from-brand-cyan/08 to-transparent",
    iconBg:    "bg-brand-cyan/12",
    iconColor: "text-brand-cyan",
    dotColor:  "cyan",
    status:    "future",
  },
]

const itemVariant = {
  hidden:  { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.6, delay: i * 0.14, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function VisionRoadmap() {
  return (
    <Section background="base" padding="lg" aria-label="Vision roadmap">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.08} animate className="-top-24 right-0" />
      <GradientOrb color="cyan"   size="md" blur="xl"  opacity={0.06}        className="bottom-0 left-0" />

      <Container size="lg">
        <SectionHeader
          badge="Our Roadmap"
          heading={<>From Today To<br /><GradientText gradient="brand">Long-Term Vision</GradientText></>}
          subtext="A transparent look at where we are and where we are taking publisher monetization."
          align="center"
          subtextWidth="sm"
          className="mb-16"
        />

        <div className="relative">
          {/* Vertical spine line */}
          <div aria-hidden="true" className="absolute left-[27px] top-8 bottom-8 w-px bg-gradient-to-b from-brand-green/40 via-brand-purple/30 via-brand-blue/20 to-brand-cyan/15 hidden sm:block" />

          <div className="flex flex-col gap-6">
            {MILESTONES.map((m, i) => (
              <motion.div
                key={m.phase}
                custom={i}
                variants={itemVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                className="flex gap-4 sm:gap-6 items-start group"
              >
                {/* Timeline node */}
                <div className="relative flex-shrink-0 z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${m.iconBg} border border-white/50 shadow-sm`}>
                    <m.icon aria-hidden="true" className={`w-6 h-6 ${m.iconColor}`} />
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4, transition: { duration: 0.22, ease: "easeOut" } }}
                  className="flex-1 glass-strong rounded-2xl p-6 border border-brand-purple/[0.10] relative overflow-hidden"
                  style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}
                >
                  <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/18 to-transparent" />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 rounded-2xl opacity-50 pointer-events-none"
                    style={{ background: `linear-gradient(135deg, ${m.color})` }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="flex items-center gap-1.5">
                        <LiveDot color={m.dotColor} size="sm" />
                        <span className="text-[10px] font-bold tracking-widest uppercase text-text-muted">{m.phase}</span>
                      </div>
                      {m.status === "done" && (
                        <span className="px-2 py-0.5 rounded-full bg-brand-green/12 text-brand-green text-[9px] font-bold tracking-widest uppercase">Live</span>
                      )}
                      {m.status === "active" && (
                        <span className="px-2 py-0.5 rounded-full bg-brand-purple/12 text-brand-purple text-[9px] font-bold tracking-widest uppercase">In Progress</span>
                      )}
                    </div>
                    <h3 className="text-base font-bold text-text-primary mb-4 leading-snug">{m.title}</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4">
                      {m.items.map((item) => (
                        <li key={item} className="flex items-center gap-1.5 text-xs text-text-secondary">
                          <span className={`w-1 h-1 rounded-full flex-shrink-0 ${m.iconBg}`} aria-hidden="true" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
