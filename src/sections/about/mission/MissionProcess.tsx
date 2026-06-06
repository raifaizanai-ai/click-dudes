"use client"

import { motion } from "framer-motion"
import { Search, Sliders, Link2, Rocket } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { LiveDot } from "@/components/shared/LiveDot"

interface Step {
  num:         string
  icon:        LucideIcon
  title:       string
  description: string
  detail:      string
  color:       string
  iconBg:      string
  iconColor:   string
  dotColor:    "purple" | "blue" | "cyan" | "green"
}

const STEPS: Step[] = [
  {
    num: "01", icon: Search,   title: "Review",
    description: "We audit your current setup and identify exactly where revenue is being lost.",
    detail:      "48-hour turnaround",
    color:       "from-brand-purple/10 to-transparent",
    iconBg:      "bg-brand-purple/12",
    iconColor:   "text-brand-purple",
    dotColor:    "purple",
  },
  {
    num: "02", icon: Sliders,  title: "Optimize",
    description: "AI calibrates price floors, placement strategy, and demand allocation for your inventory.",
    detail:      "Live within 2–7 days",
    color:       "from-brand-blue/10 to-transparent",
    iconBg:      "bg-brand-blue/12",
    iconColor:   "text-brand-blue",
    dotColor:    "blue",
  },
  {
    num: "03", icon: Link2,    title: "Connect",
    description: "We activate Google AdX, premium SSPs, and header bidding across your entire stack.",
    detail:      "500+ demand buyers",
    color:       "from-brand-cyan/10 to-transparent",
    iconBg:      "bg-brand-cyan/12",
    iconColor:   "text-brand-cyan",
    dotColor:    "cyan",
  },
  {
    num: "04", icon: Rocket,   title: "Scale",
    description: "Revenue grows as AI learns your patterns and private deal access unlocks over time.",
    detail:      "Ongoing optimization",
    color:       "from-brand-green/10 to-transparent",
    iconBg:      "bg-brand-green/12",
    iconColor:   "text-brand-green",
    dotColor:    "green",
  },
]

const stepVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function MissionProcess() {
  return (
    <Section background="section" padding="lg" aria-label="Our mission in action">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.08} animate className="-top-24 right-0" />
      <GradientOrb color="cyan"   size="md" blur="xl"  opacity={0.06}        className="bottom-0 left-0" />

      <Container size="xl">
        <SectionHeader
          badge="Our Mission In Action"
          heading={<>A Process Built for{" "}<GradientText gradient="cyan">Real Results</GradientText></>}
          subtext="Four steps from application to sustained revenue growth. No long projects, no complexity."
          align="center"
          subtextWidth="md"
          className="mb-14"
        />

        {/* Desktop horizontal flow */}
        <div className="relative hidden lg:block">
          {/* Connecting line */}
          <div aria-hidden="true" className="absolute top-[52px] left-[calc(12.5%+28px)] right-[calc(12.5%+28px)] h-px">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-purple/30 via-brand-blue/30 via-brand-cyan/30 to-brand-green/30"
              initial={{ scaleX: 0, transformOrigin: "left" }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="grid grid-cols-4 gap-6">
            {STEPS.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                variants={stepVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
                className="glass-strong rounded-2xl p-6 border border-brand-purple/[0.10] relative flex flex-col gap-4"
                style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}
              >
                <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />

                <div className="flex items-center justify-between">
                  <div className={`w-[56px] h-[56px] rounded-2xl flex items-center justify-center ${s.iconBg} flex-shrink-0`}>
                    <s.icon aria-hidden="true" className={`w-6 h-6 ${s.iconColor}`} />
                  </div>
                  <span className="text-[11px] font-bold text-text-muted">{s.num}</span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-text-primary mb-2">{s.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed mb-3">{s.description}</p>
                  <div className="flex items-center gap-1.5">
                    <LiveDot color={s.dotColor} size="sm" />
                    <span className="text-[11px] font-semibold text-text-muted">{s.detail}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile vertical flow */}
        <div className="flex flex-col gap-4 lg:hidden">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.title}
              custom={i}
              variants={stepVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="flex gap-4 items-start glass-strong rounded-2xl p-5 border border-brand-purple/[0.10]"
              style={{ boxShadow: "0 4px 24px rgba(7,17,47,0.05)" }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${s.iconBg}`}>
                <s.icon aria-hidden="true" className={`w-5 h-5 ${s.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-sm font-bold text-text-primary">{s.title}</h3>
                  <span className="text-[10px] font-bold text-text-muted">{s.num}</span>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
