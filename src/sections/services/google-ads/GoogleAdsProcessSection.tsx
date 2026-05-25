"use client"

import { motion } from "framer-motion"
import { Search, Target, Zap, TrendingUp, ChevronDown } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"

const FUNNEL_STAGES = [
  {
    icon: Search, label: "Research", title: "Keyword & Competitor Audit",
    body: "Deep keyword research, search intent mapping, and competitor ad analysis to find the highest-converting opportunities.",
    width: "max-w-2xl", stat: "450+ keywords researched",
    color: "text-brand-purple", bg: "bg-brand-purple/[0.08]", border: "border-brand-purple/[0.15]",
    bar: "from-brand-purple to-brand-violet",
  },
  {
    icon: Target, label: "Build", title: "Campaign Architecture & Creatives",
    body: "Structured campaign, ad group, and keyword architecture built for maximum Quality Score — paired with compelling ad copy for every intent.",
    width: "max-w-xl", stat: "Quality Score 8.5+ avg",
    color: "text-brand-blue", bg: "bg-brand-blue/[0.08]", border: "border-brand-blue/[0.15]",
    bar: "from-brand-blue to-brand-cyan",
  },
  {
    icon: Zap, label: "Optimise", title: "Bid Strategy & A/B Testing",
    body: "Smart bidding configuration, negative keyword lists, ad extensions, and creative A/B testing — all running continuously in the background.",
    width: "max-w-lg", stat: "CTR 12.4% — 3× avg",
    color: "text-brand-purple", bg: "bg-brand-cyan/[0.08]", border: "border-brand-cyan/[0.15]",
    bar: "from-brand-cyan to-brand-blue",
  },
  {
    icon: TrendingUp, label: "Scale", title: "Conversion Scaling & Reporting",
    body: "Monthly reporting on spend, conversions, ROAS, and ranking position — with continuous budget expansion for winning keywords.",
    width: "max-w-md", stat: "Avg ROAS 5.4× achieved",
    color: "text-brand-green", bg: "bg-brand-green/[0.08]", border: "border-brand-green/[0.15]",
    bar: "from-brand-green to-brand-cyan",
  },
]

export function GoogleAdsProcessSection() {
  return (
    <Section background="section" padding="xl" aria-label="Google Ads PPC intelligence flow">
      <Container>
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-brand-green/[0.05] blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/[0.08] border border-brand-green/[0.12] mb-6">
            <TrendingUp className="w-3.5 h-3.5 text-brand-green" aria-hidden="true" />
            <span className="text-label font-semibold text-brand-green">PPC Intelligence Flow</span>
          </div>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-4">
            From Search Query to{" "}
            <span className="text-gradient-brand">Paying Customer</span>
          </h2>
          <p className="text-body text-text-muted max-w-xl mx-auto">
            A top-down campaign system engineered at every stage — from keyword research to conversion — to maximise ROAS and minimise wasted spend.
          </p>
        </div>

        {/* Inverted funnel — widest top, narrowest bottom */}
        <div className="flex flex-col items-center gap-2 max-w-2xl mx-auto">
          {FUNNEL_STAGES.map(({ icon: Icon, label, title, body, width, stat, color, bg, border, bar }, i) => (
            <div key={label} className={`w-full ${width} flex flex-col items-center`}>
              <motion.div
                initial={{ opacity: 0, y: 20, scaleX: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scaleX: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className={`w-full glass rounded-2xl p-5 border ${border} group hover:-translate-y-1 hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-all duration-300`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`w-8 h-8 rounded-lg ${bg} border ${border} flex items-center justify-center`}>
                      <Icon className={`w-4 h-4 ${color}`} aria-hidden="true" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${color}`}>{label}</span>
                  </div>
                  <span className={`text-[10px] font-semibold ${color}`}>{stat}</span>
                </div>
                <p className="text-[14px] font-bold text-text-primary mb-1.5">{title}</p>
                <p className="text-[12px] text-text-muted leading-relaxed">{body}</p>
                <div className={`mt-3 h-0.5 w-full rounded-full bg-gradient-to-r ${bar} opacity-40`} />
              </motion.div>

              {i < FUNNEL_STAGES.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.1 }} viewport={{ once: true }}
                  className="my-1">
                  <ChevronDown className="w-4 h-4 text-text-muted/40" aria-hidden="true" />
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
