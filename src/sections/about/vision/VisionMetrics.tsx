"use client"

import { motion } from "framer-motion"
import { Users, Globe2, Clock, Zap, TrendingUp } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { CountUp } from "@/components/motion/CountUp"

const METRICS = [
  { icon: Users,      value: 450, suffix: "+",  label: "Active Publishers",  sub: "and growing monthly",   color: "text-brand-purple", glow: "rgba(139,92,246,0.12)", border: "rgba(139,92,246,0.18)" },
  { icon: TrendingUp, value: 50,  suffix: "+",  label: "Demand Partners",    sub: "SSPs, DSPs, and PMPs",  color: "text-brand-blue",   glow: "rgba(96,165,250,0.12)",  border: "rgba(96,165,250,0.18)"  },
  { icon: Globe2,     value: 25,  suffix: "+",  label: "Countries Served",   sub: "global publisher reach", color: "text-brand-green",  glow: "rgba(16,185,129,0.12)",  border: "rgba(16,185,129,0.18)"  },
  { icon: Zap,        value: 2,   suffix: "–7", label: "Days to Go-Live",    sub: "from approval to live", color: "text-brand-violet", glow: "rgba(168,85,247,0.12)",  border: "rgba(168,85,247,0.18)"  },
  { icon: Clock,      value: 24,  suffix: "hr", label: "Review Time",        sub: "initial response",      color: "text-brand-cyan",   glow: "rgba(103,232,249,0.12)", border: "rgba(103,232,249,0.18)" },
]

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const itemVariants = {
  hidden:  { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

export function VisionMetrics() {
  return (
    <Section background="section" padding="lg" aria-label="Network metrics">
      <GradientOrb color="violet" size="xl" blur="2xl" opacity={0.09} animate className="-top-24 left-1/2 -translate-x-1/2" />

      <Container>
        <SectionHeader
          badge="The Numbers Today"
          heading={<>Progress Toward<br /><GradientText gradient="violet">The Vision</GradientText></>}
          subtext="Where we stand today is the foundation for where we are going."
          align="center"
          subtextWidth="sm"
          className="mb-14"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {METRICS.map((m) => (
            <motion.div
              key={m.label}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
              className="glass-strong rounded-2xl p-6 border flex flex-col items-center text-center gap-3 relative overflow-hidden"
              style={{ borderColor: m.border, boxShadow: `0 8px 32px rgba(7,17,47,0.05), 0 0 0 1px ${m.border}` }}
            >
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: m.glow }}>
                <m.icon aria-hidden="true" className={`w-5 h-5 ${m.color}`} />
              </div>
              <div>
                <p className={`text-3xl font-black tabular-nums leading-none ${m.color}`}>
                  {m.suffix === "–7" ? (
                    <>
                      <CountUp end={m.value} duration={1.8} className={m.color} />
                      <span>{m.suffix}</span>
                    </>
                  ) : (
                    <>
                      <CountUp end={m.value} duration={2} className={m.color} />
                      {m.suffix}
                    </>
                  )}
                </p>
                <p className="text-xs font-semibold text-text-primary mt-1.5">{m.label}</p>
                <p className="text-[10px] text-text-muted mt-0.5">{m.sub}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
