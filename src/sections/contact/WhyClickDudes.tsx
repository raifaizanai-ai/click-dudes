"use client"

import { motion } from "framer-motion"
import { Users, Building2, Shield, Activity, Globe, TrendingUp } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { CountUp } from "@/components/motion/CountUp"
import { cn } from "@/lib/utils"

const fadeCard = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

const METRICS = [
  {
    icon: Users,
    color: "text-brand-purple", bg: "bg-brand-purple/10",
    value: 450, suffix: "+", prefix: "",
    label: "Publishers",
    sub: "Onboarded and growing",
  },
  {
    icon: Building2,
    color: "text-brand-blue", bg: "bg-brand-blue/10",
    value: 50, suffix: "+", prefix: "",
    label: "Demand Partners",
    sub: "Premium programmatic demand",
  },
  {
    icon: Shield,
    color: "text-brand-violet", bg: "bg-brand-violet/10",
    value: 100, suffix: "%", prefix: "",
    label: "GCPP Verified Partners Network",
    sub: "Google Certified Partner",
  },
  {
    icon: Activity,
    color: "text-brand-cyan", bg: "bg-brand-cyan/10",
    value: 24, suffix: "/7", prefix: "",
    label: "AI Monitoring",
    sub: "Revenue signals analyzed",
  },
  {
    icon: Globe,
    color: "text-brand-green", bg: "bg-brand-green/10",
    value: 25, suffix: "+", prefix: "",
    label: "Countries",
    sub: "Global publisher network",
  },
  {
    icon: TrendingUp,
    color: "text-brand-purple", bg: "bg-brand-purple/10",
    value: 40, suffix: "%", prefix: "+",
    label: "RPM Lift",
    sub: "Average revenue increase",
  },
] as const

export function WhyClickDudes() {
  return (
    <Section background="section" padding="lg" aria-label="Why Click Dudes">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.07} className="top-0 right-0" />
      <Container>
        <div className="text-center mb-10">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-text-muted">Why Click Dudes</span>
          <h2 className="text-h3 sm:text-h2 font-bold text-text-primary tracking-heading text-balance mt-2">
            Trusted by Publishers{" "}<GradientText gradient="brand">Worldwide</GradientText>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {METRICS.map((m, i) => (
            <motion.div key={m.label}
              custom={i} variants={fadeCard} initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass-strong rounded-2xl p-5 border border-brand-purple/[0.09] flex flex-col gap-3 relative overflow-hidden"
              style={{ boxShadow: "0 4px 20px rgba(7,17,47,0.04), 0 0 0 1px rgba(139,92,246,0.06)" }}
            >
              <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/15 to-transparent" />
              <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", m.bg)}>
                <m.icon aria-hidden="true" className={cn("w-5 h-5", m.color)} />
              </div>
              <div>
                <div className={cn("text-2xl font-bold tracking-tight leading-none", m.color)}>
                  {m.prefix}<CountUp end={m.value} suffix={m.suffix} duration={2} />
                </div>
                <p className="text-sm font-semibold text-text-primary mt-1">{m.label}</p>
                <p className="text-xs text-text-muted mt-0.5 leading-tight">{m.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
