"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle2, Clock, ArrowRight, Shield, Zap, BarChart2, FileCheck, Globe } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { RobotImage } from "@/components/shared/RobotImage"
import { cn } from "@/lib/utils"

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

const CHECKS = [
  { icon: Globe,     label: "Traffic Quality"          },
  { icon: FileCheck, label: "Content Quality"          },
  { icon: Shield,    label: "Policy Compliance"        },
  { icon: BarChart2, label: "AdX Readiness"            },
  { icon: Zap,       label: "Header Bidding Readiness" },
]

type CheckState = "idle" | "running" | "done"

export function EligibilityChecker() {
  const [state, setState] = useState<CheckState>("idle")
  const [step, setStep]   = useState(0)

  const runCheck = () => {
    if (state !== "idle") return
    setState("running")
    let s = 0
    const interval = setInterval(() => {
      s++
      setStep(s)
      if (s >= CHECKS.length) { clearInterval(interval); setState("done") }
    }, 620)
  }

  return (
    <Section background="section" padding="xl" aria-label="Monetization eligibility checker">
      <GradientOrb color="cyan" size="xl" blur="2xl" opacity={0.08} className="top-0 left-0" />
      <GradientOrb color="purple" size="lg" blur="2xl" opacity={0.06} className="bottom-0 right-0" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">

          {/* Left */}
          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col gap-6">
            <motion.span variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" aria-hidden="true" />
              AI Eligibility Check
            </motion.span>
            <motion.h2 variants={fadeUp}
              className="text-h3 sm:text-h2 font-bold text-text-primary tracking-heading text-balance">
              Check Your Monetization{" "}<GradientText gradient="cyan">Eligibility</GradientText>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-sm text-text-secondary leading-relaxed max-w-md">
              See if your website, app, or CTV platform qualifies for Google AdX, Header Bidding, and Premium Demand.
            </motion.p>
            <motion.div variants={fadeUp}>
              <RobotImage variant="search" size="md" glowColor="cyan" />
            </motion.div>
          </motion.div>

          {/* Right — checker panel */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="glass-strong rounded-2xl p-6 lg:p-8 border border-brand-purple/[0.10]"
            style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}>
            <h3 className="text-sm font-bold text-text-primary mb-1">AI Eligibility Scanner</h3>
            <p className="text-xs text-text-muted mb-6">Checking your platform against our monetization criteria</p>

            <div className="flex flex-col gap-2.5 mb-6">
              {CHECKS.map((check, i) => {
                const isComplete = state === "done" || (state === "running" && i < step)
                const isActive   = state === "running" && i === step
                return (
                  <div key={check.label}
                    className={cn(
                      "flex items-center gap-3 p-3 rounded-xl border transition-all duration-300",
                      isComplete ? "border-brand-green/20 bg-brand-green/5" :
                      isActive   ? "border-brand-purple/20 bg-brand-purple/5" :
                                   "border-brand-purple/[0.07]"
                    )}>
                    <div className={cn("w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0",
                      isComplete ? "bg-brand-green/10" : isActive ? "bg-brand-purple/10" : "bg-brand-purple/5")}>
                      {isComplete
                        ? <CheckCircle2 aria-hidden="true" className="w-4 h-4 text-brand-green" />
                        : isActive
                          ? <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                              <Clock aria-hidden="true" className="w-4 h-4 text-brand-purple" />
                            </motion.div>
                          : <check.icon aria-hidden="true" className="w-4 h-4 text-text-muted" />}
                    </div>
                    <span className={cn("text-sm font-medium flex-1",
                      isComplete ? "text-brand-green" : isActive ? "text-brand-purple" : "text-text-muted")}>
                      {check.label}
                    </span>
                    {isComplete && (
                      <span className="text-[10px] font-bold text-brand-green uppercase tracking-wider">Pass</span>
                    )}
                    {isActive && (
                      <motion.span animate={{ opacity: [1, 0.4, 1] }} transition={{ duration: 1, repeat: Infinity }}
                        className="text-[10px] font-bold text-brand-purple uppercase tracking-wider">Checking…</motion.span>
                    )}
                  </div>
                )
              })}
            </div>

            {state === "done" ? (
              <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-3">
                <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-brand-green/8 border border-brand-green/20">
                  <CheckCircle2 aria-hidden="true" className="w-4 h-4 text-brand-green" />
                  <span className="text-sm font-bold text-brand-green">Eligible for Monetization!</span>
                </div>
                <a href="/about/contact-us"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-brand hover:shadow-[0_4px_24px_rgba(139,92,246,0.35)] transition-shadow duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/60">
                  Apply For Monetization
                  <ArrowRight aria-hidden="true" className="w-4 h-4" />
                </a>
              </motion.div>
            ) : (
              <button onClick={runCheck} disabled={state === "running"}
                className={cn(
                  "flex items-center justify-center gap-2 w-full px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-brand transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/60",
                  state === "running" ? "opacity-70 cursor-not-allowed" : "hover:shadow-[0_4px_24px_rgba(139,92,246,0.35)]"
                )}>
                {state === "running"
                  ? <><span className="w-3.5 h-3.5 rounded-full border-2 border-white/40 border-t-white animate-spin" aria-hidden="true" />Running AI Check…</>
                  : <><Zap aria-hidden="true" className="w-4 h-4" />Run AI Eligibility Check</>}
              </button>
            )}
          </motion.div>

        </div>
      </Container>
    </Section>
  )
}
