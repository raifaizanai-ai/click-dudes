"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Zap, TrendingUp } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientText } from "@/components/shared/GradientText"
import { LiveDot } from "@/components/shared/LiveDot"
import { CountUp } from "@/components/motion/CountUp"

const STORIES = [
  { quote: "The AI floor optimizer was the single biggest revenue driver we've ever deployed. Within 21 days it identified 340 unique floor price micro-segments. Manual settings would take a team of 10 to maintain.", name: "Chris L.", role: "Director of Monetization", company: "MediaPeak Group", metric: "+43%", metricLabel: "RPM uplift", segments: 340, vertical: "News & Media", initials: "CL", bars: [55,72,88,65,91,78,84] },
  { quote: "We were manually updating bid floors weekly based on gut feel. Click Dudes' AI replaced that with real-time dynamic floors that respond to bid pressure hour by hour. We stopped leaving money on the table.", name: "Emma H.", role: "Revenue Operations", company: "WealthAdvisor Media", metric: "+61%", metricLabel: "floor efficiency", segments: 218, vertical: "Finance Content", initials: "EH", bars: [40,58,72,69,84,79,92] },
  { quote: "The viewability prediction feature is genuinely novel. The AI predicts which placements will be in-view before serving — active view rate went from 58% to 81%.", name: "Sonia P.", role: "VP Product", company: "StyleGuide Online", metric: "81%", metricLabel: "active view", segments: 156, vertical: "Fashion & Lifestyle", initials: "SP", bars: [48,61,58,74,70,83,81] },
  { quote: "Seasonal CPM optimization was something we'd always done manually. The AI detected holiday demand patterns automatically and raised floors proactively — our November RPM was the highest in our 8-year history.", name: "Laura F.", role: "Head of Ad Revenue", company: "FamilyLife Hub", metric: "8yr record", metricLabel: "Nov RPM", segments: 280, vertical: "Family & Parenting", initials: "LF", bars: [62,70,68,82,79,90,88] },
  { quote: "The AI ranked 14 ad placements by yield efficiency in week one. Three placements were generating 71% of revenue on 28% of impressions. We restructured our layout — total revenue up 39%.", name: "Joanna S.", role: "Editorial Director", company: "HealthyHabits.co", metric: "+39%", metricLabel: "layout win", segments: 195, vertical: "Health & Wellness", initials: "JS", bars: [44,56,63,70,77,82,87] },
  { quote: "Every week I get actionable AI suggestions. Three last week alone added $1,200/month in identified revenue. That's an incredible ROI — I spend time on content, not spreadsheets.", name: "Patrick R.", role: "Publisher Manager", company: "DIY Central", metric: "+$1,200", metricLabel: "identified / mo", segments: 163, vertical: "Home Improvement", initials: "PR", bars: [38,52,60,67,75,80,86] },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 24, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, delay: i * 0.10, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function AITestimonials() {
  return (
    <Section background="base" padding="xl" aria-label="AI optimization testimonials">
      {/* Neural dot pattern */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-[0.028]"
        style={{ backgroundImage: "radial-gradient(circle 1.5px at center, rgba(139,92,246,1) 100%, transparent 100%)", backgroundSize: "28px 28px" }} />
      <div aria-hidden="true" className="absolute -top-20 left-1/3 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />

      <Container size="xl" className="relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple mb-5">
            <BrainCircuit className="w-3.5 h-3.5" aria-hidden="true" />
            AI-Optimized Publishers
          </span>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-3">
            What Happens When <GradientText gradient="brand">AI Takes Over</GradientText>
          </h2>
          <p className="text-body text-text-secondary max-w-lg mx-auto text-pretty">
            Publishers who let Click Dudes&rsquo; AI engine control yield optimization — and what happened to their revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STORIES.map((s, i) => (
            <motion.div key={s.name} custom={i} variants={cardVariants} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(139,92,246,0.14)" }}
              className="rounded-3xl overflow-hidden flex flex-col cursor-default"
              style={{ background: "rgba(255,255,255,0.94)", border: "1px solid rgba(139,92,246,0.12)", boxShadow: "0 8px 40px rgba(7,17,47,0.06)" }}>

              {/* AI header */}
              <div className="px-5 pt-4 pb-3 relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, rgba(139,92,246,0.07) 0%, rgba(96,165,250,0.04) 100%)" }}>
                <div aria-hidden="true" className="absolute inset-0 opacity-[0.04]"
                  style={{ backgroundImage: "radial-gradient(circle 1px at center, rgba(139,92,246,1) 100%, transparent 100%)", backgroundSize: "16px 16px" }} />
                <div className="relative flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-xl bg-brand-purple/15 border border-brand-purple/20 flex items-center justify-center">
                      <Zap className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-brand-purple">AI Insight</p>
                      <p className="text-[9px] text-text-muted">{s.vertical}</p>
                    </div>
                  </div>
                  <LiveDot color="purple" size="sm" />
                </div>

                {/* Animated bars */}
                <div className="flex items-end gap-[3px] h-10">
                  {s.bars.map((h, bi) => (
                    <motion.div key={bi}
                      className="flex-1 rounded-t-sm origin-bottom"
                      style={{ background: `rgba(139,92,246,${0.25 + (bi / s.bars.length) * 0.55})` }}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + bi * 0.05, ease: "easeOut" }}
                      layoutId={`bar-${i}-${bi}`}>
                      <div className="w-full" style={{ height: `${h}%` }} />
                    </motion.div>
                  ))}
                </div>

                {/* Metric */}
                <div className="mt-2 flex items-center gap-2">
                  <p className="text-[20px] font-black text-brand-purple tabular-nums leading-none">{s.metric}</p>
                  <span className="text-[10px] text-text-muted font-medium">{s.metricLabel}</span>
                  <div className="ml-auto flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-brand-green" aria-hidden="true" />
                    <span className="text-[9px] text-brand-green font-bold">{s.segments} segments</span>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="px-5 py-4 flex-1">
                <blockquote className="text-[12px] text-text-secondary leading-relaxed">&ldquo;{s.quote}&rdquo;</blockquote>
              </div>

              {/* Author */}
              <div className="px-5 pb-4 pt-3 border-t border-brand-purple/[0.07] flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-brand-purple/10 flex items-center justify-center text-[11px] font-bold text-brand-purple flex-shrink-0">{s.initials}</div>
                <div className="min-w-0">
                  <p className="text-[12px] font-bold text-text-primary leading-none">{s.name}</p>
                  <p className="text-[10px] text-text-muted mt-0.5">{s.role} · {s.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
