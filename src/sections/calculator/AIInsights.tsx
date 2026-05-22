"use client"

import { motion } from "framer-motion"
import { Sparkles, AlertCircle, TrendingUp, Zap } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { RobotImage } from "@/components/shared/RobotImage"
import { LiveDot } from "@/components/shared/LiveDot"
import { cn } from "@/lib/utils"

interface AIInsightsProps {
  insights:   string[]
  aiScore:    number
  platform:   string
  geography:  string
}

const iconForInsight = (text: string) => {
  if (text.includes("Tier 1") || text.includes("traffic")) return TrendingUp
  if (text.includes("AdSense") || text.includes("Upgrading")) return Zap
  if (text.includes("improve") || text.includes("Improving")) return AlertCircle
  return Sparkles
}

const scoreColor = (score: number) => {
  if (score >= 80) return "text-brand-green"
  if (score >= 60) return "text-brand-blue"
  if (score >= 40) return "text-brand-violet"
  return "text-brand-purple"
}

const scoreLabel = (score: number) => {
  if (score >= 80) return "Excellent"
  if (score >= 65) return "Good"
  if (score >= 50) return "Fair"
  return "Needs Work"
}

const itemVariant = {
  hidden:  { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function AIInsights({ insights, aiScore, platform, geography }: AIInsightsProps) {
  return (
    <Section background="base" padding="lg" aria-label="AI revenue insights">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.09} animate className="-top-16 left-0" />
      <GradientOrb color="cyan"   size="lg"  blur="2xl" opacity={0.07}        className="bottom-0 right-0" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left — insights list */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <LiveDot color="purple" size="sm" />
              <span className="text-xs font-semibold tracking-widest uppercase text-brand-purple">AI Engine Active</span>
            </div>
            <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-2">
              <GradientText gradient="brand">AI Revenue Insights</GradientText>
            </h2>
            <p className="text-body text-text-secondary leading-relaxed mb-8 max-w-lg">
              Based on your inputs, here are the highest-impact optimizations for your inventory.
            </p>

            <div className="flex flex-col gap-3">
              {insights.slice(0, 5).map((insight, i) => {
                const Icon = iconForInsight(insight)
                return (
                  <motion.div key={insight} custom={i} variants={itemVariant}
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }}
                    className="flex items-start gap-3 glass-strong rounded-xl p-4 border border-brand-purple/[0.10]"
                  >
                    <div className="w-7 h-7 rounded-lg bg-brand-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon aria-hidden="true" className="w-3.5 h-3.5 text-brand-purple" />
                    </div>
                    <p className="text-sm text-text-secondary leading-relaxed">{insight}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* Right — AI Score + Robot */}
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="glass-strong rounded-3xl p-8 border border-brand-purple/[0.12] text-center w-full max-w-sm"
              style={{ boxShadow: "0 8px 48px rgba(7,17,47,0.07), 0 0 0 1px rgba(139,92,246,0.08)" }}
            >
              <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/25 to-transparent rounded-t-3xl" />

              <p className="text-xs font-semibold tracking-widest uppercase text-text-muted mb-3">AI Optimization Score</p>

              <div className="relative w-32 h-32 mx-auto mb-4">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120" aria-hidden="true">
                  <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(139,92,246,0.10)" strokeWidth="10" />
                  <motion.circle cx="60" cy="60" r="50" fill="none"
                    stroke="url(#scoreGrad)" strokeWidth="10" strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 50}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 50 }}
                    whileInView={{ strokeDashoffset: 2 * Math.PI * 50 * (1 - aiScore / 100) }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <defs>
                    <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8B5CF6" />
                      <stop offset="100%" stopColor="#60A5FA" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className={cn("text-3xl font-bold", scoreColor(aiScore))}>{aiScore}</span>
                  <span className="text-xs text-text-muted">/100</span>
                </div>
              </div>

              <p className={cn("text-base font-bold", scoreColor(aiScore))}>{scoreLabel(aiScore)}</p>
              <p className="text-xs text-text-muted mt-1">
                {geography === "tier1" ? "Tier 1" : "Mixed"} traffic ·{" "}
                {platform === "adsense" ? "AdSense" : platform === "header_bidding" ? "Header Bidding" : "AdX"}
              </p>

              <div className="grid grid-cols-2 gap-2 mt-5 pt-5 border-t border-brand-purple/[0.08]">
                {[
                  { label: "Geo Quality",      score: geography === "tier1" ? 95 : 60 },
                  { label: "Ad Placement",      score: 65 },
                  { label: "Platform Strength", score: platform === "header_bidding" ? 95 : 55 },
                  { label: "Fill Rate",          score: 72 },
                ].map((m) => (
                  <div key={m.label} className="flex flex-col gap-1">
                    <div className="flex justify-between text-[10px]">
                      <span className="text-text-muted">{m.label}</span>
                      <span className="font-semibold text-text-primary">{m.score}%</span>
                    </div>
                    <div className="h-1 rounded-full bg-brand-purple/10 overflow-hidden">
                      <motion.div className="h-full rounded-full bg-brand-purple"
                        style={{ width: 0 }}
                        whileInView={{ width: `${m.score}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <RobotImage variant="analytics" size="sm" floatDelay={0.5} glowColor="purple" />
          </div>
        </div>
      </Container>
    </Section>
  )
}
