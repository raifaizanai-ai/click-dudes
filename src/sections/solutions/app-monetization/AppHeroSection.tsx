"use client"

import { motion } from "framer-motion"
import { ArrowRight, Smartphone, TrendingUp, BarChart3, DollarSign, Gift, Zap, Activity } from "lucide-react"
import Link from "next/link"
import { Container } from "@/components/layout/Container"
import { AppPhoneMockup } from "@/sections/solutions/app-monetization/AppPhoneMockup"
import { LiveDot } from "@/components/shared/LiveDot"

const SPK_UP   = "M0,20 L8,16 L16,13 L24,10 L32,7 L40,4 L48,5 L56,2"
const SPK_STEP = "M0,16 L8,16 L16,12 L24,12 L32,9 L40,9 L48,6 L56,4"

interface SatCard {
  id: string; label: string; value: string; delta: string
  deltaColor: string; Icon: React.ElementType
  iconBg: string; iconColor: string; pos: string; dur: number
  sparkline?: string; sparkColor?: string; isLive?: boolean
}

const CARDS: SatCard[] = [
  {
    id: "arpdau", label: "ARPDAU", value: "$0.24", delta: "+25–40% uplift",
    deltaColor: "text-brand-green", Icon: DollarSign,
    iconBg: "bg-brand-purple/10", iconColor: "text-brand-purple",
    pos: "absolute -left-[82px] top-[36px]", dur: 5.2,
    sparkline: SPK_UP, sparkColor: "rgba(139,92,246,0.55)",
  },
  {
    id: "ecpm", label: "Avg eCPM", value: "$8.70", delta: "+181% ↑",
    deltaColor: "text-brand-green", Icon: TrendingUp,
    iconBg: "bg-brand-blue/10", iconColor: "text-brand-blue",
    pos: "absolute -right-[68px] top-[26px]", dur: 4.8,
    sparkline: SPK_STEP, sparkColor: "rgba(96,165,250,0.55)",
  },
  {
    id: "fill", label: "Fill Rate", value: "90%+", delta: "Real-time",
    deltaColor: "text-brand-purple", Icon: Activity,
    iconBg: "bg-brand-green/10", iconColor: "text-brand-green",
    pos: "absolute -left-[80px] top-[47%]", dur: 6.1, isLive: true,
  },
  {
    id: "dsps", label: "Active DSPs", value: "12+", delta: "Premium demand",
    deltaColor: "text-brand-blue", Icon: Zap,
    iconBg: "bg-brand-violet/10", iconColor: "text-brand-violet",
    pos: "absolute -right-[65px] top-[45%]", dur: 5.7,
  },
  {
    id: "rewarded", label: "Rewarded eCPM", value: "$12.40", delta: "Top Format",
    deltaColor: "text-brand-purple", Icon: Gift,
    iconBg: "bg-brand-violet/10", iconColor: "text-brand-violet",
    pos: "absolute -left-[84px] bottom-[54px]", dur: 5.5,
    sparkline: SPK_UP, sparkColor: "rgba(168,85,247,0.55)",
  },
  {
    id: "growth", label: "Rev Growth", value: "+74%", delta: "MoM average",
    deltaColor: "text-brand-green", Icon: BarChart3,
    iconBg: "bg-brand-green/10", iconColor: "text-brand-green",
    pos: "absolute -right-[70px] bottom-[62px]", dur: 4.6,
    sparkline: SPK_STEP, sparkColor: "rgba(16,185,129,0.55)",
  },
]

const STAT_PILLS = [
  { label: "Apps Monetized", value: "250+",   color: "text-brand-purple" },
  { label: "eCPM Lift",      value: "+25–40%",  color: "text-brand-blue" },
  { label: "Fill Rate",      value: "90%+",    color: "text-brand-green" },
  { label: "SDK Live In",    value: "7–14 Days", color: "text-brand-purple" },
]

export function AppHeroSection() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 sm:pt-36 sm:pb-28" aria-label="App Monetization Hero">
      {/* Animated background orbs */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-60 -left-60 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.11) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-28 -right-28 w-[600px] h-[600px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(168,85,247,0.09) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.07, 1], opacity: [0.5, 0.9, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(ellipse, rgba(103,232,249,0.06) 0%, transparent 65%)" }}
          animate={{ scale: [1, 1.05, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        {/* Subtle mesh grid */}
        <div className="absolute inset-0 opacity-[0.022]" style={{
          backgroundImage: "linear-gradient(rgba(139,92,246,1) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,1) 1px,transparent 1px)",
          backgroundSize: "64px 64px",
        }} />
      </div>

      <Container size="xl" className="relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.15fr] gap-12 xl:gap-20 items-center">

          {/* Left: copy */}
          <motion.div initial={{ opacity: 0, x: -32 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }} className="flex flex-col">

            <div className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full mb-6"
              style={{ background: "rgba(139,92,246,0.07)", border: "1px solid rgba(139,92,246,0.18)" }}>
              <LiveDot color="purple" size="sm" />
              <span className="text-[11px] font-bold text-brand-purple uppercase tracking-widest">App Monetization</span>
            </div>

            <h1 className="text-h1 font-bold text-text-primary tracking-heading text-balance leading-[1.10] mb-5">
              Maximize In-App Revenue{" "}
              <span className="text-gradient-brand">Across Every Format</span>
            </h1>

            <p className="text-body-lg text-text-secondary leading-relaxed mb-8 max-w-lg text-pretty">
              In-app bidding from 12+ premium networks, AI format optimization, and managed compliance — all handled by our mobile monetization specialists.{" "}
              <strong className="text-text-primary font-semibold">Average apps see 38% eCPM uplift.</strong>
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {STAT_PILLS.map(({ label, value, color }) => (
                <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-full glass"
                  style={{ boxShadow: "0 2px 12px rgba(7,17,47,0.05)" }}>
                  <span className={`text-[13px] font-black tabular-nums ${color}`}>{value}</span>
                  <span className="text-[11px] text-text-muted">{label}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-6">
              <Link href="/about/contact-us"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-violet text-white font-bold text-[15px] shadow-[0_4px_28px_rgba(139,92,246,0.40)] hover:shadow-[0_8px_44px_rgba(139,92,246,0.60)] transition-all duration-300 hover:-translate-y-0.5">
                Monetize My App
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl font-semibold text-[14px] text-text-primary transition-all duration-300 hover:-translate-y-0.5 glass"
                style={{ boxShadow: "0 2px 16px rgba(7,17,47,0.06)" }}>
                Talk to Our Team
              </Link>
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <Smartphone className="w-3.5 h-3.5 text-text-muted" aria-hidden="true" />
              <span className="text-[11px] text-text-muted">Certified partner:</span>
              {["AdMob", "Meta AAN", "AppLovin"].map((b) => (
                <span key={b} className="px-2.5 py-1 rounded-lg text-[10px] font-semibold text-brand-purple glass"
                  style={{ border: "1px solid rgba(139,92,246,0.12)" }}>{b}</span>
              ))}
            </div>
          </motion.div>

          {/* Right: phone + 6 satellite cards */}
          <motion.div initial={{ opacity: 0, x: 32 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center">
            <div className="relative">
              {/* Ambient phone glow */}
              <div aria-hidden="true" className="absolute -inset-12 rounded-full blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.22) 0%, transparent 60%)" }} />

              <AppPhoneMockup />

              {/* 6 satellite cards — desktop only */}
              {CARDS.map(({ id, label, value, delta, deltaColor, Icon, iconBg, iconColor, pos, dur, sparkline, sparkColor, isLive }, idx) => (
                <motion.div key={id}
                  initial={{ opacity: 0, scale: 0.76, y: 14 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.52, delay: 0.75 + idx * 0.10, ease: [0.16, 1, 0.3, 1] }}
                  className={`${pos} hidden lg:block`}>
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: dur, repeat: Infinity, ease: "easeInOut" }}
                    className="glass-strong rounded-2xl px-3.5 py-2.5 min-w-[126px] cursor-default"
                    style={{ border: "1px solid rgba(139,92,246,0.15)", boxShadow: "0 8px 32px rgba(7,17,47,0.10), 0 0 0 1px rgba(139,92,246,0.06)" }}
                    whileHover={{ scale: 1.06, boxShadow: "0 16px 48px rgba(139,92,246,0.22)" }}>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center ${iconBg}`}>
                          <Icon className={`w-3 h-3 ${iconColor}`} aria-hidden="true" />
                        </div>
                        <span className="text-[9px] text-text-muted font-medium">{label}</span>
                      </div>
                      {isLive && <LiveDot color="green" size="sm" />}
                    </div>
                    <p className="text-[16px] font-black text-text-primary tabular-nums leading-none mb-1">{value}</p>
                    {sparkline && (
                      <svg width="56" height="20" className="mb-1" aria-hidden="true">
                        <path d={sparkline} fill="none" stroke={sparkColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                    <p className={`text-[9px] font-semibold ${deltaColor}`}>{delta}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Mobile metric grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-10 lg:hidden">
          {CARDS.map(({ id, label, value, delta, deltaColor, Icon, iconBg, iconColor }) => (
            <div key={id} className="glass rounded-2xl p-3.5" style={{ border: "1px solid rgba(139,92,246,0.12)" }}>
              <div className={`w-7 h-7 rounded-lg flex items-center justify-center mb-2 ${iconBg}`}>
                <Icon className={`w-3.5 h-3.5 ${iconColor}`} aria-hidden="true" />
              </div>
              <p className="text-[15px] font-black text-text-primary tabular-nums">{value}</p>
              <p className="text-[9px] text-text-muted mt-0.5">{label}</p>
              <p className={`text-[9px] font-semibold mt-0.5 ${deltaColor}`}>{delta}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
