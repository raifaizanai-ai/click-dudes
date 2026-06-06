"use client"

import { motion } from "framer-motion"
import { Search, Pen, TrendingUp, Award } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"

const STEPS = [
  {
    num: "01", icon: Search, title: "Personal Brand Audit",
    body: "We review your current online presence, competitors in your space, and identify the content angles and platforms that will build your authority fastest.",
    metric: { label: "Profile optimised", value: "Day 1" },
    color: "text-brand-purple", bg: "from-brand-purple/[0.10] to-brand-violet/[0.06]", border: "border-brand-purple/[0.15]",
  },
  {
    num: "02", icon: Pen, title: "Content Identity & Voice",
    body: "We define your unique perspective, content pillars, and posting cadence, building the authentic voice that positions you as the authority in your niche.",
    metric: { label: "Posts live", value: "Week 1" },
    color: "text-brand-blue", bg: "from-brand-blue/[0.10] to-brand-cyan/[0.06]", border: "border-brand-blue/[0.15]",
  },
  {
    num: "03", icon: TrendingUp, title: "Content Creation & Publishing",
    body: "Our team produces articles, carousels, videos, and threads, then publishes consistently at the optimal times for maximum algorithmic reach.",
    metric: { label: "Avg reach/post", value: "10K+" },
    color: "text-brand-purple", bg: "from-brand-cyan/[0.10] to-brand-blue/[0.06]", border: "border-brand-cyan/[0.15]",
  },
  {
    num: "04", icon: Award, title: "Audience Growth & Authority",
    body: "Monthly strategy reviews, engagement management, and content iteration, continuously building your authority score and audience until your brand becomes the name people know.",
    metric: { label: "6-month growth", value: "+34%" },
    color: "text-brand-green", bg: "from-brand-green/[0.10] to-brand-cyan/[0.06]", border: "border-brand-green/[0.15]",
  },
]

export function PersonalSocialProcessSection() {
  return (
    <Section background="section" padding="xl" aria-label="Personal brand building roadmap">
      <Container>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-brand-purple/[0.05] blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/[0.08] border border-brand-purple/[0.12] mb-6">
            <Award className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
            <span className="text-label font-semibold text-brand-purple">Authority Roadmap</span>
          </div>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-4">
            From Profile to{" "}
            <span className="text-gradient-brand">Industry Authority</span>
          </h2>
          <p className="text-body text-text-muted max-w-xl mx-auto">
            A systematic approach to building genuine thought leadership that attracts opportunities, partnerships, and business without cold outreach.
          </p>
        </div>

        {/* Ascending ladder layout */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical spine */}
          <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-brand-purple/30 via-brand-cyan/20 to-brand-green/30 hidden lg:block" aria-hidden="true" />

          <div className="space-y-4">
            {STEPS.map(({ num, icon: Icon, title, body, metric, color, bg, border }, i) => (
              <motion.div key={num}
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                style={{ marginLeft: `${i * 2}%` }}
                className={`glass rounded-3xl overflow-hidden border ${border} group hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1`}>
                <div className={`bg-gradient-to-r ${bg} p-5`}>
                  <div className="flex items-start gap-4">
                    {/* Icon + number */}
                    <div className="flex flex-col items-center gap-2 shrink-0">
                      <div className={`w-11 h-11 rounded-xl bg-white/70 border ${border} flex items-center justify-center`}>
                        <Icon className={`w-5 h-5 ${color}`} aria-hidden="true" />
                      </div>
                      <span className={`text-[10px] font-black ${color} opacity-50`}>{num}</span>
                    </div>
                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <p className="text-[15px] font-bold text-text-primary mb-1.5">{title}</p>
                      <p className="text-[13px] text-text-muted leading-relaxed">{body}</p>
                    </div>
                    {/* Metric badge */}
                    <div className={`shrink-0 text-right hidden sm:block`}>
                      <p className={`text-[14px] font-bold ${color}`}>{metric.value}</p>
                      <p className="text-[10px] text-text-muted">{metric.label}</p>
                    </div>
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
