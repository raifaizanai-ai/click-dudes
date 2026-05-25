"use client"

import { motion } from "framer-motion"
import { Zap, GitBranch, Globe, Smartphone, Monitor, Brain, LayoutGrid, Users } from "lucide-react"
import Link from "next/link"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { LiveDot } from "@/components/shared/LiveDot"
import { STATS } from "@/lib/stats"

interface ServiceNode { icon: LucideIcon; title: string; stat: string; href: string; color: string }

const PUBLISHERS: ServiceNode[] = [
  { icon: Globe,      title: "Web Publishers",  stat: "$12.47 RPM", href: "/publisher-solutions/web-monetization",   color: "text-brand-blue"   },
  { icon: Smartphone, title: "App Publishers",  stat: "$9.82 eCPM", href: "/publisher-solutions/app-monetization",   color: "text-brand-purple"   },
  { icon: Monitor,    title: "CTV Publishers",  stat: "$14.5 CPM",  href: "/publisher-solutions/ctv-monetization",   color: "text-brand-violet" },
]

const CAPABILITIES: ServiceNode[] = [
  { icon: Zap,        title: "Google AdX",       stat: `${STATS.rpmLift} RPM`,    href: "/publisher-solutions/google-adx-solutions",     color: "text-brand-violet" },
  { icon: GitBranch,  title: "Header Bidding",   stat: `${STATS.fillRate} Fill`,  href: "/publisher-solutions/header-bidding-solutions", color: "text-brand-purple" },
  { icon: Brain,      title: "AI Optimization",  stat: "24/7 AI",                 href: "/publisher-solutions/ai-ad-optimization",       color: "text-brand-purple"   },
  { icon: LayoutGrid, title: "Ad Formats",       stat: "50+ units",               href: "/ad-formats",                                   color: "text-brand-blue"   },
  { icon: Users,      title: "Referral Network", stat: "30% rev",                 href: "/resources/publisher-referral-program",         color: "text-brand-green"  },
]

const nodeAnim = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.08 } }),
}

export function ServicesSection() {
  return (
    <Section background="navy" padding="lg" aria-label="Revenue Architecture Stack">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-brand-purple/[0.12] blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[250px] rounded-full bg-brand-cyan/[0.06] blur-3xl" />
        <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full bg-brand-blue/[0.05] blur-3xl" />
      </div>

      <Container size="lg">
        <SectionHeader
          badge="Revenue Architecture"
          heading={<>One Stack. <span className="text-gradient-brand">Maximum Revenue.</span></>}
          subtext="Your inventory, our infrastructure. Google AdX, header bidding, AI optimization, and direct demand — all connected, all working together."
          align="center"
          subtextWidth="md"
        />

        {/* Layer 1: Publisher inputs */}
        <div className="mt-12">
          <p className="text-center text-[10px] font-bold text-text-muted uppercase tracking-[0.18em] mb-5">Your Inventory</p>
          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
            {PUBLISHERS.map((node, i) => (
              <motion.div key={node.title} custom={i} variants={nodeAnim} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Link href={node.href} className="group flex flex-col items-center gap-2.5 p-4 glass-dark rounded-2xl border border-brand-purple/[0.10] hover:border-brand-purple/[0.20] transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-brand-purple/[0.04] flex items-center justify-center group-hover:bg-brand-purple/[0.06] transition-colors">
                    <node.icon className={`w-5 h-5 ${node.color}`} aria-hidden="true" />
                  </div>
                  <p className="text-[12px] font-semibold text-text-secondary text-center leading-tight">{node.title}</p>
                  <span className={`text-[11px] font-bold ${node.color} tabular-nums`}>{node.stat}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Connector: 3 lines converging to center */}
        <div className="relative max-w-lg mx-auto h-10 mt-1 mb-0.5" aria-hidden="true">
          <svg viewBox="0 0 300 40" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <linearGradient id="sg1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(139,92,246,0.55)" />
                <stop offset="100%" stopColor="rgba(103,232,249,0.35)" />
              </linearGradient>
            </defs>
            {[50, 150, 250].map((x, i) => (
              <motion.line key={i} x1={x} y1="0" x2="150" y2="40"
                stroke="url(#sg1)" strokeWidth="1.5" strokeDasharray="80"
                initial={{ strokeDashoffset: 80 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.3 + i * 0.1 }}
              />
            ))}
          </svg>
        </div>

        {/* Platform hub */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-dark rounded-3xl border border-brand-purple/[0.28] p-5 max-w-2xl mx-auto"
          style={{ boxShadow: "0 0 80px rgba(139,92,246,0.12), 0 32px 80px rgba(7,17,47,0.06)" }}
        >
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl border border-brand-purple/[0.35] flex items-center justify-center shrink-0"
                style={{ background: "linear-gradient(135deg,rgba(139,92,246,0.25),rgba(103,232,249,0.12))" }}>
                <Brain className="w-5 h-5 text-brand-purple" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[14px] font-bold text-text-primary">Click Dudes Revenue Platform</p>
                <p className="text-[11px] text-text-muted">AI-powered monetization infrastructure</p>
              </div>
            </div>
            <LiveDot color="purple" size="sm" label="LIVE" />
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { label: "Publishers",       value: STATS.publishers  },
              { label: "Avg RPM Lift",     value: STATS.rpmLift     },
              { label: "Demand Sources",   value: STATS.demandPartners },
            ].map(({ label, value }) => (
              <div key={label} className="text-center py-3 rounded-xl bg-brand-purple/[0.04] border border-brand-purple/[0.08]">
                <p className="text-[18px] font-bold text-text-primary tabular-nums">{value}</p>
                <p className="text-[9px] text-text-muted mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Connector: center diverging to 5 */}
        <div className="relative max-w-3xl mx-auto h-10 mt-0.5 mb-1" aria-hidden="true">
          <svg viewBox="0 0 560 40" preserveAspectRatio="none" className="w-full h-full">
            <defs>
              <linearGradient id="sg2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(103,232,249,0.45)" />
                <stop offset="100%" stopColor="rgba(96,165,250,0.25)" />
              </linearGradient>
            </defs>
            {[56, 168, 280, 392, 504].map((x, i) => (
              <motion.line key={i} x1="280" y1="0" x2={x} y2="40"
                stroke="url(#sg2)" strokeWidth="1.5" strokeDasharray="80"
                initial={{ strokeDashoffset: 80 }}
                whileInView={{ strokeDashoffset: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.55 + i * 0.08 }}
              />
            ))}
          </svg>
        </div>

        {/* Layer 3: Capabilities */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-3xl mx-auto">
            {CAPABILITIES.map((node, i) => (
              <motion.div key={node.title} custom={i + 4} variants={nodeAnim} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Link href={node.href} className="group flex flex-col items-center gap-2 p-4 glass-dark rounded-2xl border border-brand-purple/[0.09] hover:border-brand-purple/[0.18] transition-all duration-300">
                  <div className="w-9 h-9 rounded-xl bg-brand-purple/[0.04] flex items-center justify-center group-hover:bg-brand-purple/[0.06] transition-colors">
                    <node.icon className={`w-4 h-4 ${node.color}`} aria-hidden="true" />
                  </div>
                  <p className="text-[11px] font-semibold text-text-secondary text-center leading-tight">{node.title}</p>
                  <span className={`text-[10px] font-bold ${node.color}`}>{node.stat}</span>
                </Link>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-[10px] font-bold text-text-muted uppercase tracking-[0.18em] mt-5">Revenue Capabilities</p>
        </div>
      </Container>
    </Section>
  )
}
