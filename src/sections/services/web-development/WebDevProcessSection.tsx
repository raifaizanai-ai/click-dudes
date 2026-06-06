"use client"

import { motion } from "framer-motion"
import { Compass, Code2, Zap, Globe, CheckCircle2 } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"

const PIPELINE = [
  {
    num: "01", icon: Compass, title: "Discovery & Wireframes",
    body: "We deep-dive into your goals, users, and competitors, then map a clear site structure and wireframe before a single line of code is written.",
    time: "Day 1–3", badge: "Research",
    chips: ["Business goals", "Competitor audit", "Wireframe"], color: "text-brand-purple",
    bg: "bg-brand-purple/[0.07]", border: "border-brand-purple/[0.12]",
  },
  {
    num: "02", icon: Code2, title: "Design & Development",
    body: "Custom design mockups approved by you, then full development on your chosen platform, no templates, no shortcuts.",
    time: "Week 1–3", badge: "Build",
    chips: ["UI design", "Frontend", "Backend"], color: "text-brand-blue",
    bg: "bg-brand-blue/[0.07]", border: "border-brand-blue/[0.12]",
  },
  {
    num: "03", icon: Zap, title: "Testing & Performance",
    body: "Cross-browser QA, mobile testing, Core Web Vitals optimisation, Lighthouse scoring, and SEO foundation, all before a single user sees your site.",
    time: "Week 3–4", badge: "QA",
    chips: ["Lighthouse 90+", "Mobile QA", "Speed"], color: "text-brand-purple",
    bg: "bg-brand-cyan/[0.07]", border: "border-brand-cyan/[0.12]",
  },
  {
    num: "04", icon: Globe, title: "Launch & Handover",
    body: "Production deployment, analytics setup, domain configuration, team training, and post-launch support to keep your site performing.",
    time: "Week 4+", badge: "Live",
    chips: ["Deploy", "Analytics", "Training"], color: "text-brand-green",
    bg: "bg-brand-green/[0.07]", border: "border-brand-green/[0.12]",
  },
]

export function WebDevProcessSection() {
  return (
    <Section background="section" padding="xl" aria-label="Web development build pipeline">
      <Container>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-brand-blue/[0.05] blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/[0.08] border border-brand-blue/[0.12] mb-6">
            <Code2 className="w-3.5 h-3.5 text-brand-blue" aria-hidden="true" />
            <span className="text-label font-semibold text-brand-blue">Build Pipeline</span>
          </div>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-4">
            From Brief to <span className="text-gradient-brand">Live Site in Weeks</span>
          </h2>
          <p className="text-body text-text-muted max-w-xl mx-auto">
            A structured development pipeline that delivers on time, on budget, and above expectations, every time.
          </p>
        </div>

        {/* Vertical pipeline */}
        <div className="max-w-3xl mx-auto space-y-0">
          {PIPELINE.map(({ num, icon: Icon, title, body, time, badge, chips, color, bg, border }, i) => (
            <motion.div key={num}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex gap-6 group">
              {/* Left: step indicator + vertical line */}
              <div className="flex flex-col items-center shrink-0">
                <div className={`w-12 h-12 rounded-2xl ${bg} border ${border} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 ${color}`} aria-hidden="true" />
                </div>
                {i < PIPELINE.length - 1 && (
                  <div className="flex-1 w-px bg-gradient-to-b from-brand-purple/20 to-brand-cyan/20 mt-2 mb-0 min-h-8" aria-hidden="true" />
                )}
              </div>

              {/* Right: card */}
              <div className={`flex-1 glass rounded-2xl p-5 border ${border} mb-4 group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-shadow duration-300`}>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className={`text-[10px] font-black ${color} opacity-50`}>{num}</span>
                  <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${bg} border ${border} ${color}`}>{badge}</span>
                  <span className="ml-auto text-[10px] text-text-muted">{time}</span>
                </div>
                <p className="text-[15px] font-bold text-text-primary mb-2">{title}</p>
                <p className="text-[13px] text-text-muted leading-relaxed mb-3">{body}</p>
                <div className="flex flex-wrap gap-1.5">
                  {chips.map((chip) => (
                    <span key={chip} className="text-[10px] font-medium px-2.5 py-0.5 rounded-full bg-white/60 border border-white/50 text-text-secondary flex items-center gap-1">
                      <CheckCircle2 className="w-2.5 h-2.5 text-brand-green" aria-hidden="true" />
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
