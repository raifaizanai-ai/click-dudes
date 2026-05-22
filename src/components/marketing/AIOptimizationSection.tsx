"use client"

import { motion } from "framer-motion"
import { TrendingUp, LayoutDashboard, GitMerge, Eye, Activity, Brain, Zap } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { LiveDot } from "@/components/shared/LiveDot"

interface AIFeature {
  icon: LucideIcon
  title: string
  description: string
}

const FEATURES: AIFeature[] = [
  { icon: TrendingUp,      title: "RPM Prediction",           description: "Forecasts optimal floor prices per geo, device, and time of day using historical patterns." },
  { icon: LayoutDashboard, title: "Layout Intelligence",      description: "A/B tests ad placement and density automatically to find the highest-yield configurations." },
  { icon: GitMerge,        title: "Demand Matching",          description: "Routes impressions to the best-performing demand partner in real time for every auction." },
  { icon: Eye,             title: "Viewability Optimization", description: "Monitors and adjusts placements to maximize viewable impressions and brand-safe delivery." },
  { icon: Activity,        title: "Real-Time Analytics",      description: "Sub-second reporting on RPM, fill rate, and revenue across all publishers and formats." },
  { icon: Brain,           title: "Monetization Intelligence","description": "Learns from billions of signals to surface insights and automate revenue-maximizing decisions." },
]

const LOG_ITEMS = [
  { action: "RPM floor recalculated",     detail: "US · Desktop +$0.42",    status: "success" as const },
  { action: "New A/B test launched",      detail: "Layout variant 7 of 12", status: "active"  as const },
  { action: "Demand partner matched",     detail: "CTV · Premium PMPs",     status: "success" as const },
  { action: "Viewability alert resolved", detail: "Sidebar placement fixed", status: "success" as const },
  { action: "Header bid timeout updated", detail: "650ms → 720ms optimal",  status: "active"  as const },
]

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden:  { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
}

const panelVariants = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 } },
}

export function AIOptimizationSection() {
  return (
    <Section background="base" padding="lg" aria-label="AI Optimization Engine" className="mesh-bg">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.10} animate className="-top-32 -right-48" />
      <GradientOrb color="cyan"   size="lg" blur="xl"  opacity={0.07}        className="bottom-0 left-0" />

      <Container size="xl">
        <SectionHeader
          badge="AI Optimization Engine"
          heading={<>Intelligent Automation.<br /><span className="text-gradient-brand">Revenue at Scale.</span></>}
          subtext="Our AI engine operates 24/7 across every layer of your stack — predicting, testing, and optimizing in real time so you never leave revenue on the table."
          align="center"
          subtextWidth="md"
        />

        <div className="mt-14 grid lg:grid-cols-2 gap-12 xl:gap-20 items-start">
          {/* Feature grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {FEATURES.map((f) => (
              <motion.div
                key={f.title}
                variants={itemVariants}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className="flex flex-col gap-3 p-5 glass-elevated rounded-2xl border border-brand-purple/[0.10] hover:border-brand-purple/[0.20] hover:shadow-[0_12px_40px_rgba(7,17,47,0.08),0_0_20px_rgba(139,92,246,0.08)] transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-xl bg-brand-purple/10 flex items-center justify-center flex-shrink-0 group-hover:bg-brand-purple/16 transition-colors duration-200">
                  <f.icon aria-hidden="true" className="w-4 h-4 text-brand-purple" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary mb-1">{f.title}</p>
                  <p className="text-xs text-text-muted leading-relaxed">{f.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* AI control center panel */}
          <motion.div
            variants={panelVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="glass-elevated rounded-3xl overflow-hidden border border-brand-purple/[0.16] shadow-[0_24px_80px_rgba(7,17,47,0.10),0_0_32px_rgba(139,92,246,0.08)]"
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-brand-purple/[0.10]">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-brand-purple/10 flex items-center justify-center">
                  <Brain aria-hidden="true" className="w-4 h-4 text-brand-purple" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">AI Control Center</p>
                  <p className="text-[11px] text-text-muted">Click Dudes Intelligence v4.2</p>
                </div>
              </div>
              <LiveDot color="purple" size="sm" label="ACTIVE" />
            </div>

            <div className="px-5 py-4 space-y-2">
              {LOG_ITEMS.map((log, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4, ease: [0.16, 1, 0.3, 1] as const }}
                  className="flex items-center gap-3 p-3 rounded-xl bg-surface-card/50 border border-brand-purple/[0.06] hover:border-brand-purple/[0.12] transition-colors duration-200"
                >
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 ${log.status === "success" ? "bg-brand-green" : "bg-brand-purple"}`}
                    style={{ animation: log.status === "active" ? "ping-slow 2s ease-in-out infinite" : "none" }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-[12px] font-medium text-text-primary truncate">{log.action}</p>
                    <p className="text-[11px] text-text-muted">{log.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex items-center gap-2 px-5 py-3 border-t border-brand-purple/[0.10] bg-brand-purple/[0.03]">
              <Zap aria-hidden="true" className="w-3.5 h-3.5 text-brand-purple flex-shrink-0" />
              <p className="text-[11px] text-text-secondary">
                <span className="font-semibold text-brand-purple">1,247 optimizations</span> run today across all publishers
              </p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
