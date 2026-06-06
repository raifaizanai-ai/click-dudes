"use client"

import { motion } from "framer-motion"
import { ArrowRight, Smartphone, Sparkles, CheckCircle2, TrendingUp, BarChart3, DollarSign } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { AppPhoneMockup } from "@/sections/solutions/app-monetization/AppPhoneMockup"
import { LiveDot } from "@/components/shared/LiveDot"
import { STATS } from "@/lib/stats"

const BENEFITS = [
  "Lightweight SDK, under 800KB, no performance hit",
  "iOS, Android & cross-platform (Unity, React Native, Flutter)",
  "Managed ATT & GDPR consent, full compliance handled",
  "Dedicated mobile monetization specialist on your account",
]

interface FloatBadge {
  id: string; label: string; value: string; delta: string
  deltaColor: string; Icon: React.ElementType
  iconBg: string; iconColor: string; pos: string; dur: number
}

const FLOAT_BADGES: FloatBadge[] = [
  {
    id: "arpdau", label: "ARPDAU", value: "$0.24", delta: "",
    deltaColor: "text-brand-green", Icon: DollarSign,
    iconBg: "bg-brand-purple/10", iconColor: "text-brand-purple",
    pos: "absolute -left-[72px] top-[72px]", dur: 5.2,
  },
  {
    id: "ecpm", label: "Avg eCPM", value: "$8.70", delta: "+181% ↑",
    deltaColor: "text-brand-green", Icon: TrendingUp,
    iconBg: "bg-brand-blue/10", iconColor: "text-brand-blue",
    pos: "absolute -right-[62px] top-[56px]", dur: 4.8,
  },
  {
    id: "growth", label: "Monthly Rev", value: "+74%", delta: "MoM growth",
    deltaColor: "text-brand-purple", Icon: BarChart3,
    iconBg: "bg-brand-green/10", iconColor: "text-brand-green",
    pos: "absolute -right-[60px] bottom-[90px]", dur: 6.0,
  },
]

const itemVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function AppMonetizationCTASection() {
  return (
    <Section background="white" padding="xl" aria-label="Apply for App Monetization">
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.10} animate className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <GradientOrb color="cyan"   size="lg"  blur="xl"  opacity={0.07} className="-bottom-16 right-1/4" />

      <Container size="lg" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left: phone with floating metric badges */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Ambient glow */}
              <div aria-hidden="true" className="absolute -inset-10 rounded-full blur-3xl pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.20) 0%, transparent 60%)" }} />

              <AppPhoneMockup />

              {/* Floating metric badges — desktop only */}
              {FLOAT_BADGES.map(({ id, label, value, delta, deltaColor, Icon, iconBg, iconColor, pos, dur }, idx) => (
                <motion.div key={id}
                  initial={{ opacity: 0, scale: 0.80 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className={`${pos} hidden lg:block`}>
                  <motion.div
                    animate={{ y: [0, -7, 0] }}
                    transition={{ duration: dur, repeat: Infinity, ease: "easeInOut" }}
                    className="glass-strong rounded-2xl px-3.5 py-2.5 min-w-[116px]"
                    style={{ border: "1px solid rgba(139,92,246,0.14)", boxShadow: "0 8px 28px rgba(7,17,47,0.09)" }}
                    whileHover={{ scale: 1.05, boxShadow: "0 16px 44px rgba(139,92,246,0.20)" }}>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <div className={`w-5 h-5 rounded-md flex items-center justify-center ${iconBg}`}>
                        <Icon className={`w-3 h-3 ${iconColor}`} aria-hidden="true" />
                      </div>
                      <span className="text-[9px] text-text-muted font-medium">{label}</span>
                    </div>
                    <p className="text-[15px] font-black text-text-primary tabular-nums leading-none mb-0.5">{value}</p>
                    <p className={`text-[9px] font-semibold ${deltaColor}`}>{delta}</p>
                  </motion.div>
                </motion.div>
              ))}

              {/* Live ARPDAU strip at bottom */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap hidden lg:block">
                <div className="glass-strong rounded-2xl px-4 py-2.5 flex items-center gap-3"
                  style={{ border: "1px solid rgba(139,92,246,0.16)", boxShadow: "0 8px 28px rgba(7,17,47,0.09)" }}>
                  <LiveDot color="green" size="sm" />
                  <span className="text-[10px] font-medium text-text-secondary">Avg ARPDAU</span>
                  <span className="text-[14px] font-black text-brand-purple tabular-nums">$0.24</span>
                  <span className="text-[10px] font-bold text-brand-green">{STATS.rpmLift} eCPM</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right: CTA content */}
          <div className="flex flex-col gap-6">
            <motion.div custom={0} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple">
                <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
                Monetize Your App
              </span>
            </motion.div>

            <motion.h2 custom={1} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="font-bold text-text-primary tracking-heading text-balance leading-[1.08]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}>
              Ready to Maximize Your{" "}
              <span className="text-gradient-brand">App Revenue?</span>
            </motion.h2>

            <motion.p custom={2} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-base text-text-secondary leading-relaxed text-pretty max-w-md">
              Join 450+ app publishers earning more with Click Dudes&rsquo; fully managed in-app bidding stack. No SDK headaches, no guesswork, just better eCPMs.
            </motion.p>

            <motion.ul custom={3} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex flex-col gap-2.5">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" aria-hidden="true" />
                  <span className="text-[14px] text-text-secondary">{b}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div custom={4} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/about/contact-us"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-brand-purple to-brand-violet text-white font-bold text-[15px] shadow-[0_4px_28px_rgba(139,92,246,0.38)] hover:shadow-[0_8px_44px_rgba(139,92,246,0.56)] transition-all duration-300 hover:-translate-y-0.5">
                Let&rsquo;s Monetize Your App
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl glass border border-white/40 text-text-primary font-semibold text-[14px] hover:border-brand-purple/25 transition-all duration-300 hover:-translate-y-0.5">
                Book App Revenue Audit
              </Link>
            </motion.div>

            <motion.div custom={5} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex items-center gap-2 pt-1">
              <Smartphone className="w-3.5 h-3.5 text-text-muted shrink-0" aria-hidden="true" />
              <p className="text-[11px] text-text-muted">No setup fees · Revenue share model · Go live in 2–7 days</p>
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
