"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Cpu, Activity, Radio } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { RobotImage } from "@/components/shared/RobotImage"
import { LiveDot } from "@/components/shared/LiveDot"

const COMMAND_ITEMS = [
  { icon: Cpu,      label: "AI Core",         value: "Active",       color: "text-brand-purple", dot: "purple" as const },
  { icon: Activity, label: "Revenue Engine",  value: "Optimizing",   color: "text-brand-green",  dot: "green"  as const },
  { icon: Radio,    label: "Demand Network",  value: "50+ Partners", color: "text-brand-blue",   dot: "blue"   as const },
]

const heroStagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.11, delayChildren: 0.1 } },
}
const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
}

export function VisionHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28 section-hero" aria-label="Vision hero">
      <GradientOrb color="violet" size="2xl" blur="2xl" opacity={0.12} animate className="-top-32 right-1/3" />
      <GradientOrb color="cyan"   size="xl"  blur="2xl" opacity={0.08}        className="top-0 left-0" />
      <GradientOrb color="purple" size="md"  blur="xl"  opacity={0.06}        className="bottom-0 right-0" />

      <Container size="xl">
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 xl:gap-20 items-center">

          {/* Left: Copy */}
          <motion.div
            variants={heroStagger} initial="hidden" animate="visible"
            className="flex flex-col gap-7 order-2 lg:order-1"
          >
            <motion.span variants={fadeUp}
              className="inline-flex items-center gap-2 self-start px-4 py-1.5 rounded-full glass border border-brand-violet/20 text-xs font-semibold tracking-widest uppercase text-brand-violet"
            >
              <LiveDot color="purple" size="sm" />
              Our Vision
            </motion.span>

            <motion.h1 variants={fadeUp}
              className="text-h1 md:text-display font-bold text-text-primary tracking-display text-balance leading-[1.08]"
            >
              Building The Future Of{" "}
              <GradientText gradient="violet">Publisher Growth</GradientText>
            </motion.h1>

            <motion.p variants={fadeUp}
              className="text-body-lg text-text-secondary leading-relaxed max-w-lg text-pretty"
            >
              We&apos;re building the intelligence layer that sits between publishers and the global programmatic market, making enterprise-grade monetization accessible to every qualifying publisher on the planet.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <Link
                href="/publisher-solutions/monetization-eligibility-criteria"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-violet to-brand-purple text-white font-semibold text-sm shadow-[0_4px_24px_rgba(168,85,247,0.38)] hover:shadow-[0_8px_40px_rgba(168,85,247,0.55)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Join The Network
                <ArrowRight aria-hidden="true" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/about/contact-us"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl glass border border-brand-violet/15 text-text-primary font-semibold text-sm hover:-translate-y-0.5 transition-all duration-300"
                style={{ boxShadow: "0 2px 16px rgba(7,17,47,0.06)" }}
              >
                Talk To Our Team
              </Link>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
              {["Global publisher network", "AI-first infrastructure", "GCPP Verified Partners Network"].map((t) => (
                <span key={t} className="flex items-center gap-1.5 text-xs text-text-secondary">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-violet flex-shrink-0" aria-hidden="true" />
                  {t}
                </span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Command Center */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[380px] sm:h-[440px] order-1 lg:order-2 flex items-center justify-center"
            aria-hidden="true"
          >
            {/* Animated rings */}
            {[120, 180, 240].map((size, i) => (
              <motion.div
                key={size}
                className="absolute rounded-full border border-brand-violet/10"
                style={{ width: size, height: size }}
                animate={{ rotate: i % 2 === 0 ? 360 : -360, opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 12 + i * 4, repeat: Infinity, ease: "linear" }}
              />
            ))}

            {/* Pulsing glow */}
            <motion.div
              className="absolute w-44 h-44 rounded-full bg-brand-violet/08 blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Robot */}
            <div className="relative z-10">
              <RobotImage variant="main" size="lg" glowColor="purple" priority />
            </div>

            {/* Command status cards */}
            {COMMAND_ITEMS.map((item, i) => {
              const angles = [-50, 0, 50]
              const radii  = [150, 160, 150]
              const angle  = (angles[i] * Math.PI) / 180
              const x      = Math.sin(angle) * radii[i]
              const y      = -Math.cos(angle) * (radii[i] * 0.55)
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute z-20 glass-strong rounded-xl px-3 py-2.5 border border-brand-violet/15 flex items-center gap-2.5 whitespace-nowrap"
                  style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`, boxShadow: "0 4px 20px rgba(7,17,47,0.10)" }}
                >
                  <item.icon aria-hidden="true" className={`w-3.5 h-3.5 flex-shrink-0 ${item.color}`} />
                  <div>
                    <p className="text-[9px] text-text-muted leading-none mb-0.5">{item.label}</p>
                    <div className="flex items-center gap-1">
                      <LiveDot color={item.dot} size="sm" />
                      <p className="text-[10px] font-bold text-text-primary">{item.value}</p>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
