"use client"

import { motion } from "framer-motion"
import { Smartphone, Code2, Layers, Network, BrainCircuit, LayoutDashboard, ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { LiveDot } from "@/components/shared/LiveDot"
import { STATS } from "@/lib/stats"

interface EcoNode {
  icon: React.ElementType
  label: string
  sub: string
  color: string
  bg: string
  border: string
  glow: string
}

const NODES: EcoNode[] = [
  {
    icon: Smartphone, label: "App Traffic",
    sub: "iOS · Android · Cross-platform",
    color: "text-brand-purple", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.20)", glow: "rgba(139,92,246,0.14)",
  },
  {
    icon: Code2, label: "SDK Integration",
    sub: "Lightweight · < 800KB",
    color: "text-brand-blue", bg: "rgba(96,165,250,0.08)", border: "rgba(96,165,250,0.20)", glow: "rgba(96,165,250,0.12)",
  },
  {
    icon: Layers, label: "Mediation",
    sub: "Waterfall + In-App Bidding",
    color: "text-brand-violet", bg: "rgba(168,85,247,0.08)", border: "rgba(168,85,247,0.20)", glow: "rgba(168,85,247,0.12)",
  },
  {
    icon: Network, label: "Premium Demand",
    sub: "12+ DSPs · Real-time bids",
    color: "text-brand-purple", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.20)", glow: "rgba(139,92,246,0.14)",
  },
  {
    icon: BrainCircuit, label: "AI Optimization",
    sub: "Floor pricing · Format mix",
    color: "text-brand-blue", bg: "rgba(96,165,250,0.08)", border: "rgba(96,165,250,0.20)", glow: "rgba(96,165,250,0.12)",
  },
  {
    icon: LayoutDashboard, label: "Revenue Dashboard",
    sub: "ARPDAU · eCPM · LTV",
    color: "text-brand-green", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.20)", glow: "rgba(16,185,129,0.12)",
  },
]

const nodeVariants = {
  hidden:  { opacity: 0, y: 24, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.55, delay: i * 0.10, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function AppEcosystemSection() {
  return (
    <Section background="white" padding="xl" aria-label="App Monetization Ecosystem">
      <Container size="xl" className="relative z-10">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple mb-5">
            <LiveDot color="purple" size="sm" />
            Monetization Ecosystem
          </span>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-4">
            One Connected{" "}
            <span className="text-gradient-brand">App Revenue System</span>
          </h2>
          <p className="text-body text-text-secondary max-w-xl mx-auto text-pretty">
            Every layer of your app monetization stack — integrated, optimized, and managed as a unified system.
          </p>
        </div>

        {/* Flow — desktop: horizontal row, mobile: vertical */}
        <div className="relative">
          {/* Connector line — desktop only */}
          <div aria-hidden="true" className="hidden lg:block absolute top-[52px] left-[calc(8.33%+24px)] right-[calc(8.33%+24px)] h-px"
            style={{ background: "linear-gradient(to right, rgba(139,92,246,0.15) 0%, rgba(168,85,247,0.25) 30%, rgba(96,165,250,0.25) 60%, rgba(16,185,129,0.15) 100%)" }}>
            {/* Animated flow pulse */}
            <motion.div
              className="absolute inset-y-0 w-1/3 rounded-full"
              style={{ background: "linear-gradient(to right, transparent, rgba(139,92,246,0.40), transparent)" }}
              animate={{ x: ["0%", "300%"] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "linear", repeatType: "loop" }}
            />
          </div>

          <motion.div
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.10 } } }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-2"
          >
            {NODES.map(({ icon: Icon, label, sub, color, bg, border, glow }, i) => (
              <motion.div key={label} custom={i} variants={nodeVariants}
                whileHover={{ y: -6, scale: 1.04 }}
                className="flex flex-col items-center text-center p-4 rounded-2xl glass-dark cursor-default transition-shadow duration-300"
                style={{ border: `1px solid ${border}` }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 12px 32px ${glow}`
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = ""
                }}
              >
                {/* Icon bubble */}
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3 relative"
                  style={{ background: bg, border: `1px solid ${border}` }}>
                  <Icon className={`w-5 h-5 ${color}`} aria-hidden="true" />
                  {/* Arrow badge on desktop (hidden on last node) */}
                  {i < NODES.length - 1 && (
                    <div aria-hidden="true" className="hidden lg:flex absolute -right-[18px] top-1/2 -translate-y-1/2 w-5 h-5 items-center justify-center z-10">
                      <ArrowRight className="w-3 h-3 text-text-muted/50" />
                    </div>
                  )}
                </div>

                <p className={`text-[12px] font-bold ${color} leading-snug mb-1`}>{label}</p>
                <p className="text-[10px] text-text-muted leading-tight">{sub}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 glass rounded-2xl p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center"
          style={{ border: "1px solid rgba(139,92,246,0.12)" }}
        >
          {[
            { value: STATS.integration, label: "Integration time",  color: "text-brand-purple" },
            { value: "< 300ms",   label: "Auction completion",     color: "text-brand-blue"   },
            { value: "< 800KB",   label: "SDK footprint",          color: "text-brand-violet" },
            { value: STATS.uptime, label: "Platform uptime",         color: "text-brand-green"  },
          ].map(({ value, label, color }) => (
            <div key={label}>
              <p className={`text-[16px] font-black ${color} tabular-nums`}>{value}</p>
              <p className="text-[11px] text-text-muted mt-0.5">{label}</p>
            </div>
          ))}
        </motion.div>
      </Container>
    </Section>
  )
}
