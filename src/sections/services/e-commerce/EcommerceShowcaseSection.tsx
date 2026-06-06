"use client"

import { motion } from "framer-motion"
import { ShoppingCart, TrendingUp, RefreshCcw, BarChart3, Zap, CheckCircle2 } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { CountUp } from "@/components/motion/CountUp"

const FUNNEL_STEPS = [
  { label: "Store Visitors",  value: "100K",   pct: 100, color: "bg-brand-blue"   },
  { label: "Product Views",   value: "62K",    pct: 62,  color: "bg-brand-purple" },
  { label: "Add to Cart",     value: "21K",    pct: 21,  color: "bg-brand-violet" },
  { label: "Checkout Start",  value: "14K",    pct: 14,  color: "bg-brand-cyan"   },
  { label: "Purchases",       value: "8.4K",   pct: 8.4, color: "bg-brand-green"  },
]

const METRICS = [
  { label: "Avg. Revenue Growth",   value: 2,   suffix: "x",   color: "text-brand-purple", prefix: "" },
  { label: "Conversion Rate Lift",  value: 40,  suffix: "%",   color: "text-brand-purple",   prefix: "+" },
  { label: "Cart Recovery Rate",    value: 28,  suffix: "%",   color: "text-brand-green",  prefix: "" },
  { label: "Stores Successfully Built", value: 500, suffix: "+", color: "text-brand-blue", prefix: "" },
]

const AUTOMATION_ITEMS = [
  { icon: RefreshCcw, label: "Abandoned Cart Recovery",  status: "Active", color: "text-brand-purple" },
  { icon: Zap,        label: "Post-Purchase Upsell Flow", status: "Live",   color: "text-brand-purple"  },
  { icon: BarChart3,  label: "Dynamic Pricing Engine",   status: "Active", color: "text-brand-green" },
  { icon: TrendingUp, label: "Inventory Sync & Alerts",  status: "Running",color: "text-brand-blue"  },
]

const fade = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.07 },
  }),
}

export function EcommerceShowcaseSection() {
  return (
    <Section background="section" padding="xl" aria-label="E-commerce capabilities showcase">
      <Container>
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-brand-purple/[0.05] blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/[0.08] border border-brand-purple/[0.12] mb-6">
            <ShoppingCart className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
            <span className="text-label font-semibold text-brand-purple">Commerce Intelligence</span>
          </div>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-4">
            Turn Browsers Into{" "}
            <span className="text-gradient-brand">Repeat Buyers</span>
          </h2>
          <p className="text-body text-text-muted max-w-xl mx-auto text-pretty">
            We engineer every step of your buyer journey, from landing page to checkout to post-purchase, to maximize revenue at every touchpoint.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Conversion Funnel */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
            className="glass rounded-3xl p-6 border border-white/50">
            <div className="flex items-center gap-2 mb-5">
              <TrendingUp className="w-4 h-4 text-brand-purple" aria-hidden="true" />
              <p className="text-[12px] font-bold text-text-primary uppercase tracking-wider">Conversion Funnel</p>
            </div>
            <div className="space-y-3">
              {FUNNEL_STEPS.map(({ label, value, pct, color }, i) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="text-[11px] text-text-muted w-28 shrink-0">{label}</span>
                  <div className="flex-1 h-6 bg-brand-navy/[0.05] rounded-lg overflow-hidden relative">
                    <motion.div className={`h-full ${color} rounded-lg opacity-80`}
                      initial={{ width: 0 }} whileInView={{ width: `${pct}%` }}
                      transition={{ duration: 0.9, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }} />
                  </div>
                  <span className="text-[11px] font-bold text-text-secondary w-10 text-right shrink-0">{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/30 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-green" aria-hidden="true" />
              <span className="text-[11px] text-brand-green font-semibold">8.4% store conversion rate, 3× industry average</span>
            </div>
          </motion.div>

          {/* Right column */}
          <div className="space-y-4">
            {/* KPI row */}
            <div className="grid grid-cols-2 gap-3">
              {METRICS.map(({ label, value, suffix, color, prefix }, i) => (
                <motion.div key={label} custom={i} variants={fade} initial="hidden"
                  whileInView="visible" viewport={{ once: true }}
                  className="glass rounded-2xl p-4 border border-white/50 text-center">
                  <p className={`text-2xl font-bold tabular-nums ${color}`}>
                    {prefix}<CountUp end={value} decimals={0} suffix={suffix} />
                  </p>
                  <p className="text-[10px] text-text-muted mt-1 leading-tight">{label}</p>
                </motion.div>
              ))}
            </div>

            {/* Automation panel */}
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.3 }} viewport={{ once: true }}
              className="glass rounded-3xl p-5 border border-white/50">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-brand-cyan" aria-hidden="true" />
                <p className="text-[12px] font-bold text-text-primary uppercase tracking-wider">Revenue Automations</p>
              </div>
              <div className="space-y-2.5">
                {AUTOMATION_ITEMS.map(({ icon: Icon, label, status, color }) => (
                  <div key={label} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/50 border border-white/40">
                    <Icon className={`w-4 h-4 ${color} shrink-0`} aria-hidden="true" />
                    <span className="text-[11px] text-text-secondary flex-1">{label}</span>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full bg-brand-green/[0.10] text-brand-green border border-brand-green/[0.15]`}>{status}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
