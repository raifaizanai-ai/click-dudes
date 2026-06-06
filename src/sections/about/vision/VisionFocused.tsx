"use client"

import { motion } from "framer-motion"
import { Target, DollarSign, Users, Globe2, Zap } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { RobotImage } from "@/components/shared/RobotImage"
import { LiveDot } from "@/components/shared/LiveDot"

const INDICATORS = [
  { icon: DollarSign, label: "Revenue First",      color: "text-brand-green",  bg: "bg-brand-green/10",  dotColor: "green"  as const, angle: -60, radius: 180 },
  { icon: Users,      label: "Publisher Centric",  color: "text-brand-purple", bg: "bg-brand-purple/10", dotColor: "purple" as const, angle: 0,   radius: 200 },
  { icon: Globe2,     label: "Global Scale",       color: "text-brand-blue",   bg: "bg-brand-blue/10",   dotColor: "blue"   as const, angle: 60,  radius: 180 },
  { icon: Zap,        label: "AI Powered",         color: "text-brand-cyan",   bg: "bg-brand-cyan/10",   dotColor: "cyan"   as const, angle: 120, radius: 200 },
  { icon: Target,     label: "Laser Focused",      color: "text-brand-violet", bg: "bg-brand-violet/10", dotColor: "purple" as const, angle: -120, radius: 200 },
]

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

export function VisionFocused() {
  return (
    <Section background="base" padding="lg" aria-label="Laser focused on publisher growth">
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.09} animate className="-top-24 left-1/2 -translate-x-1/2" />
      <GradientOrb color="cyan"   size="lg"  blur="xl"  opacity={0.06}        className="bottom-0 right-0" />

      <Container size="xl">
        <motion.div
          variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
          className="flex flex-col items-center text-center gap-4 mb-16"
        >
          <motion.span variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple"
          >
            <LiveDot color="purple" size="sm" />
            Our Focus
          </motion.span>
          <motion.h2 variants={fadeUp}
            className="text-h2 md:text-h1 font-bold text-text-primary tracking-heading text-balance leading-tight"
          >
            Laser Focused On{" "}<GradientText gradient="brand">Publisher Growth</GradientText>
          </motion.h2>
          <motion.p variants={fadeUp}
            className="text-body text-text-secondary max-w-lg text-pretty"
          >
            Everything we build, every partnership we form, every publisher we work with — it all points at the same outcome: more revenue for every impression.
          </motion.p>
        </motion.div>

        {/* Visual: target rings with robot and floating indicators */}
        <div className="relative flex items-center justify-center" style={{ height: 500 }} aria-hidden="true">

          {/* Animated target rings */}
          {[300, 220, 140, 70].map((size, i) => (
            <motion.div
              key={size}
              className="absolute rounded-full border border-brand-purple/10"
              style={{ width: size, height: size }}
              animate={{ scale: [1, 1.03, 1], opacity: [0.3 + i * 0.08, 0.6 + i * 0.08, 0.3 + i * 0.08] }}
              transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
            />
          ))}

          {/* Center glow */}
          <motion.div
            className="absolute w-32 h-32 rounded-full bg-brand-purple/10 blur-2xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Center target crosshair */}
          <div className="absolute">
            <div className="w-3 h-px bg-brand-purple/40" />
            <div className="h-3 w-px bg-brand-purple/40 -mt-1.5 ml-1" />
          </div>

          {/* Robot */}
          <div className="relative z-10">
            <RobotImage variant="main" size="lg" glowColor="purple" />
          </div>

          {/* Floating indicator cards */}
          {INDICATORS.map((ind, i) => {
            const rad = (ind.angle * Math.PI) / 180
            const x   = Math.sin(rad) * ind.radius
            const y   = -Math.cos(rad) * (ind.radius * 0.6)
            return (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="absolute z-20 glass-strong rounded-xl px-3 py-2.5 border border-brand-purple/14 flex items-center gap-2 whitespace-nowrap"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  boxShadow: "0 4px 20px rgba(7,17,47,0.10)",
                }}
              >
                <div className={`w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 ${ind.bg}`}>
                  <ind.icon aria-hidden="true" className={`w-3.5 h-3.5 ${ind.color}`} />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <LiveDot color={ind.dotColor} size="sm" />
                    <span className="text-[10px] font-bold text-text-primary">{ind.label}</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
