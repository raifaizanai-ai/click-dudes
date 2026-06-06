"use client"

import { motion } from "framer-motion"
import { Target, Megaphone, Zap, TrendingUp } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"

const LOOP_STEPS = [
  {
    num: "01", icon: Target, title: "Account Audit & Strategy",
    body: "We audit your existing account (or set up fresh), analyse competitors, and build a data-driven campaign architecture.",
    kpi: { label: "Avg audit findings", value: "14+" }, time: "Day 1–3",
    color: "text-brand-purple", bg: "bg-brand-purple/[0.08]", border: "border-brand-purple/[0.15]",
    glow: "hover:shadow-[0_12px_40px_rgba(139,92,246,0.14)]",
  },
  {
    num: "02", icon: Megaphone, title: "Campaign Build & Creatives",
    body: "Full campaign structure built, audiences configured, and high-converting ad creatives produced in-house for every placement.",
    kpi: { label: "Creatives produced", value: "10–20" }, time: "Week 1",
    color: "text-brand-blue", bg: "bg-brand-blue/[0.08]", border: "border-brand-blue/[0.15]",
    glow: "hover:shadow-[0_12px_40px_rgba(96,165,250,0.14)]",
  },
  {
    num: "03", icon: Zap, title: "Launch & Data Collection",
    body: "Campaigns go live with tight monitoring, early bid optimisation, and A/B creative testing to identify top performers quickly.",
    kpi: { label: "Learning phase", value: "2 weeks" }, time: "Week 2–4",
    color: "text-brand-purple", bg: "bg-brand-cyan/[0.08]", border: "border-brand-cyan/[0.15]",
    glow: "hover:shadow-[0_12px_40px_rgba(103,232,249,0.14)]",
  },
  {
    num: "04", icon: TrendingUp, title: "Scale & ROAS Optimisation",
    body: "We scale winning ad sets, cut underperformers, refresh creatives, and push ROAS higher every month, no plateau.",
    kpi: { label: "Avg ROAS achieved", value: "5.8x" }, time: "Ongoing",
    color: "text-brand-green", bg: "bg-brand-green/[0.08]", border: "border-brand-green/[0.15]",
    glow: "hover:shadow-[0_12px_40px_rgba(16,185,129,0.14)]",
  },
]

export function MetaAdsProcessSection() {
  return (
    <Section background="white" padding="xl" aria-label="Meta ads campaign optimization loop">
      <Container>
        <div className="absolute top-0 right-1/3 w-[400px] h-[400px] rounded-full bg-brand-blue/[0.04] blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/[0.08] border border-brand-blue/[0.12] mb-6">
            <TrendingUp className="w-3.5 h-3.5 text-brand-blue" aria-hidden="true" />
            <span className="text-label font-semibold text-brand-blue">Campaign Loop</span>
          </div>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-4">
            From Zero to{" "}
            <span className="text-gradient-brand">Profitable Campaigns</span>
          </h2>
          <p className="text-body text-text-muted max-w-xl mx-auto">
            A systematic 4-phase campaign framework that tests, optimises, and scales your Meta ads to deliver consistent ROAS growth.
          </p>
        </div>

        {/* 2×2 loop grid */}
        <div className="relative max-w-3xl mx-auto">
          {/* Center connector */}
          <div className="absolute inset-[25%] rounded-2xl bg-gradient-to-br from-brand-purple/[0.06] to-brand-green/[0.06] border border-white/60 hidden lg:flex items-center justify-center" aria-hidden="true">
            <div className="text-center">
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Continuous</p>
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Loop</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LOOP_STEPS.map(({ num, icon: Icon, title, body, kpi, time, color, bg, border, glow }, i) => (
              <motion.div key={num}
                initial={{ opacity: 0, scale: 0.93 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`glass rounded-3xl p-6 border ${border} ${glow} transition-all duration-300 cursor-default`}>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl ${bg} border ${border} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${color}`} aria-hidden="true" />
                  </div>
                  <div className="text-right">
                    <p className={`text-[13px] font-bold ${color}`}>{kpi.value}</p>
                    <p className="text-[10px] text-text-muted">{kpi.label}</p>
                  </div>
                </div>
                <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${bg} border ${border} ${color}`}>{time}</span>
                <p className="text-[14px] font-bold text-text-primary mt-3 mb-2">{title}</p>
                <p className="text-[12px] text-text-muted leading-relaxed">{body}</p>
                <div className={`mt-4 text-[11px] font-bold ${color} opacity-40`}>{num}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
