"use client"

import { motion } from "framer-motion"
import { Layers, Gift, Smartphone, LayoutTemplate, SlidersHorizontal, BarChart3, Shield, TrendingUp } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { cn } from "@/lib/utils"
import { LiveDot } from "@/components/shared/LiveDot"

interface Feature {
  icon: React.ElementType
  title: string
  description: string
  iconBg: string
  iconColor: string
  glow: string
  featured?: boolean
  badge?: string
}

const FEATURES: Feature[] = [
  {
    icon: Layers,
    title: "In-App Bidding",
    description: "Simultaneous real-time bids from 12+ networks replace waterfall. Every impression goes to the highest bidder in under 300ms — maximum yield, zero compromise.",
    iconBg: "bg-brand-purple/12", iconColor: "text-brand-purple",
    glow: "rgba(139,92,246,0.14)",
    featured: true,
    badge: "Core Infrastructure",
  },
  {
    icon: Gift,
    title: "Rewarded Ads",
    description: "Opt-in rewarded video drives 4–8× higher eCPMs without harming retention.",
    iconBg: "bg-brand-violet/12", iconColor: "text-brand-violet",
    glow: "rgba(168,85,247,0.10)",
  },
  {
    icon: Smartphone,
    title: "Interstitial Ads",
    description: "AI determines ideal frequency and timing to maximize CPM without churn.",
    iconBg: "bg-brand-blue/12", iconColor: "text-brand-blue",
    glow: "rgba(96,165,250,0.10)",
  },
  {
    icon: LayoutTemplate,
    title: "App Open Ads",
    description: "Monetize app launch moments with high-CPM app open format.",
    iconBg: "bg-brand-cyan/12", iconColor: "text-brand-purple",
    glow: "rgba(103,232,249,0.10)",
  },
  {
    icon: SlidersHorizontal,
    title: "Mediation Setup",
    description: "Network priority, bid floors, A/B test parameters — all managed hands-free.",
    iconBg: "bg-brand-green/12", iconColor: "text-brand-green",
    glow: "rgba(16,185,129,0.10)",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "ARPDAU, LTV, cohort revenue, and format breakdown in your live dashboard.",
    iconBg: "bg-brand-blue/12", iconColor: "text-brand-blue",
    glow: "rgba(96,165,250,0.10)",
  },
  {
    icon: Shield,
    title: "Ad Quality Control",
    description: "Block malicious creatives and enforce content filters automatically.",
    iconBg: "bg-brand-purple/12", iconColor: "text-brand-purple",
    glow: "rgba(139,92,246,0.10)",
  },
  {
    icon: TrendingUp,
    title: "Revenue Optimization",
    description: "Continuous floor price testing and demand partner expansion month-on-month.",
    iconBg: "bg-brand-violet/12", iconColor: "text-brand-violet",
    glow: "rgba(168,85,247,0.10)",
  },
]

const BID_BARS = [
  { label: "AdMob",      pct: 92, color: "from-brand-purple to-brand-violet" },
  { label: "Meta AAN",   pct: 87, color: "from-brand-blue to-brand-purple" },
  { label: "AppLovin",   pct: 81, color: "from-brand-violet to-brand-cyan" },
  { label: "Unity Ads",  pct: 74, color: "from-brand-green to-brand-cyan" },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}

const item = {
  hidden:  { opacity: 0, y: 20, scale: 0.96 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
}

export function AppFeaturesSection() {
  const [featured, ...rest] = FEATURES

  return (
    <Section background="white" padding="xl" aria-label="App Monetization Features">
      <Container size="xl" className="relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple mb-5">
            Platform Features
          </span>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-4">
            Features That Make App Monetization{" "}
            <span className="text-gradient-brand">Different</span>
          </h2>
          <p className="text-body text-text-secondary max-w-xl mx-auto text-pretty">
            From in-app bidding infrastructure to ARPDAU analytics — every tool your app needs to reach its revenue ceiling.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-strong rounded-3xl p-6 sm:p-8"
          style={{ border: "1px solid rgba(139,92,246,0.14)", boxShadow: "0 24px 80px rgba(7,17,47,0.07), 0 0 0 1px rgba(139,92,246,0.05)" }}>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

            {/* Featured card — spans 2 cols on lg */}
            <motion.div variants={item}
              whileHover={{ y: -5, scale: 1.015 }}
              className="sm:col-span-2 lg:col-span-2 group rounded-2xl p-6 cursor-default transition-shadow duration-300 relative overflow-hidden"
              style={{ background: "rgba(255,255,255,0.70)", border: "1px solid rgba(139,92,246,0.12)", boxShadow: "0 2px 16px rgba(7,17,47,0.04)" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = `0 16px 48px ${featured.glow}, 0 2px 16px rgba(7,17,47,0.06)`
                el.style.borderColor = "rgba(139,92,246,0.22)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.boxShadow = "0 2px 16px rgba(7,17,47,0.04)"
                el.style.borderColor = "rgba(139,92,246,0.12)"
              }}>
              {/* Subtle glow blob */}
              <div aria-hidden="true" className="absolute -top-8 -right-8 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />

              <div className="flex items-start justify-between mb-4">
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110", featured.iconBg)}>
                  <featured.icon className={cn("w-6 h-6", featured.iconColor)} aria-hidden="true" />
                </div>
                {featured.badge && (
                  <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold text-brand-purple"
                    style={{ background: "rgba(139,92,246,0.07)", border: "1px solid rgba(139,92,246,0.14)" }}>
                    <LiveDot color="purple" size="sm" />
                    {featured.badge}
                  </span>
                )}
              </div>
              <h3 className="text-[15px] font-bold text-text-primary mb-2 leading-snug">{featured.title}</h3>
              <p className="text-[13px] text-text-secondary leading-relaxed mb-4">{featured.description}</p>

              {/* Mini bid race visualization */}
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-2">Live Bid Competition</p>
                {BID_BARS.map(({ label, pct, color }, i) => (
                  <div key={label}>
                    <div className="flex justify-between mb-0.5">
                      <span className="text-[10px] text-text-muted">{label}</span>
                      <span className="text-[10px] font-bold text-text-primary">{pct}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-brand-purple/[0.06] overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${color} origin-left`}
                        style={{ width: `${pct}%` }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Regular cards */}
            {rest.map(({ icon: Icon, title, description, iconBg, iconColor, glow }) => (
              <motion.div key={title} variants={item}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group rounded-2xl p-5 cursor-default transition-shadow duration-300"
                style={{ background: "rgba(255,255,255,0.60)", border: "1px solid rgba(139,92,246,0.08)", boxShadow: "0 2px 12px rgba(7,17,47,0.04)" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.boxShadow = `0 12px 32px ${glow}, 0 2px 12px rgba(7,17,47,0.06)`
                  el.style.borderColor = "rgba(139,92,246,0.16)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.boxShadow = "0 2px 12px rgba(7,17,47,0.04)"
                  el.style.borderColor = "rgba(139,92,246,0.08)"
                }}>
                <div className={cn("w-11 h-11 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110", iconBg)}>
                  <Icon className={cn("w-5 h-5", iconColor)} aria-hidden="true" />
                </div>
                <h3 className="text-[13px] font-bold text-text-primary mb-2 leading-snug">{title}</h3>
                <p className="text-[12px] text-text-secondary leading-relaxed">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
