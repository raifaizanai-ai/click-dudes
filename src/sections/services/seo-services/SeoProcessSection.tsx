"use client"

import { motion } from "framer-motion"
import { Search, Shield, Link2, TrendingUp } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"

const STEPS = [
  {
    icon: Search, num: "01", title: "SEO Audit & Keyword Research",
    body: "Full technical audit of your site plus deep keyword research to identify the highest-value ranking opportunities in your industry.",
    rank: "#—", traffic: "Baseline", time: "Week 1",
    color: "text-brand-purple", bg: "bg-brand-purple/[0.08]", border: "border-brand-purple/[0.15]",
    rankColor: "text-text-muted",
  },
  {
    icon: Shield, num: "02", title: "Technical Fixes & On-Page",
    body: "We fix every technical barrier, Core Web Vitals, crawlability, page speed, schema markup, and optimise all key pages for target keywords.",
    rank: "#12–30", traffic: "+40% initial lift", time: "Week 2–4",
    color: "text-brand-blue", bg: "bg-brand-blue/[0.08]", border: "border-brand-blue/[0.15]",
    rankColor: "text-brand-blue",
  },
  {
    icon: Link2, num: "03", title: "Content & Link Building",
    body: "Keyword-targeted content created, published, and promoted. High-quality backlinks built through outreach and digital PR to increase domain authority.",
    rank: "#5–15", traffic: "+120% 3-month avg", time: "Month 2–3",
    color: "text-brand-purple", bg: "bg-brand-cyan/[0.08]", border: "border-brand-cyan/[0.15]",
    rankColor: "text-brand-purple",
  },
  {
    icon: TrendingUp, num: "04", title: "Monitor, Report & Dominate",
    body: "Monthly reporting on keyword rankings, organic traffic, and authority growth. Continuous refinements to maintain and expand your search dominance.",
    rank: "#1–5", traffic: "+284% 12-month avg", time: "Ongoing",
    color: "text-brand-green", bg: "bg-brand-green/[0.08]", border: "border-brand-green/[0.15]",
    rankColor: "text-brand-green",
  },
]

export function SeoProcessSection() {
  return (
    <Section background="base" padding="xl" aria-label="SEO ranking pathway">
      <Container>
        <div className="absolute top-0 right-0 w-[500px] h-[400px] rounded-full bg-brand-purple/[0.04] blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/[0.08] border border-brand-purple/[0.12] mb-6">
            <TrendingUp className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
            <span className="text-label font-semibold text-brand-purple">Ranking Pathway</span>
          </div>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-4">
            From Invisible to{" "}
            <span className="text-gradient-brand">Dominating Search</span>
          </h2>
          <p className="text-body text-text-muted max-w-xl mx-auto">
            A structured 4-phase SEO journey that builds sustainable organic traffic from a clean technical foundation all the way to page-one dominance.
          </p>
        </div>

        {/* Ascending staircase layout */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {STEPS.map(({ icon: Icon, num, title, body, rank, traffic, time, color, bg, border, rankColor }, i) => (
              <motion.div key={num}
                initial={{ opacity: 0, y: 24 + i * 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                style={{ marginTop: `${i % 2 === 1 ? 24 : 0}px` }}
                className={`glass rounded-3xl p-6 border ${border} group hover:shadow-[0_12px_40px_rgba(0,0,0,0.07)] hover:-translate-y-2 transition-all duration-300 cursor-default`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-2xl ${bg} border ${border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-5 h-5 ${color}`} aria-hidden="true" />
                    </div>
                    <span className={`text-[10px] font-black ${color} opacity-50`}>{num}</span>
                  </div>
                  <div className="text-right">
                    <p className={`text-[14px] font-bold tabular-nums ${rankColor}`}>{rank}</p>
                    <p className="text-[9px] text-text-muted">Google position</p>
                  </div>
                </div>

                <p className="text-[15px] font-bold text-text-primary mb-2">{title}</p>
                <p className="text-[12px] text-text-muted leading-relaxed mb-4">{body}</p>

                {/* Metrics footer */}
                <div className={`flex items-center justify-between pt-3 border-t border-white/40`}>
                  <span className={`text-[11px] font-bold ${color}`}>{traffic}</span>
                  <span className="text-[10px] text-text-muted">{time}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
