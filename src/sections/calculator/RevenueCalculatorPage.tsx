"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Sparkles, Zap, Database, BarChart3 } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { RobotImage } from "@/components/shared/RobotImage"
import { SolutionCTA } from "@/components/marketing/SolutionCTA"
import { CalculatorInputs } from "@/sections/calculator/CalculatorInputs"
import { LiveResults } from "@/sections/calculator/LiveResults"
import { HowItWorksSection } from "@/sections/calculator/HowItWorksSection"
import { AIInsights } from "@/sections/calculator/AIInsights"
import { RevenueChart } from "@/sections/calculator/RevenueChart"
import { LeadCaptureSection } from "@/sections/calculator/LeadCaptureSection"
import { DEFAULT_INPUTS, calculateRevenue } from "@/lib/revenueCalculator"
import type { CalcInputs } from "@/lib/revenueCalculator"

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}

const HERO_BADGES = [
  { icon: Zap,      label: "100% Free"          },
  { icon: Sparkles, label: "Instant Estimate"   },
  { icon: Database, label: "AI-Powered"         },
  { icon: BarChart3,label: "Premium Demand Data"},
]

export function RevenueCalculatorPage() {
  const [inputs, setInputs] = useState<CalcInputs>(DEFAULT_INPUTS)

  const results = useMemo(() => calculateRevenue(inputs), [inputs])

  const handleChange = (updates: Partial<CalcInputs>) =>
    setInputs(prev => ({ ...prev, ...updates }))

  const handleReset = () => setInputs(DEFAULT_INPUTS)

  return (
    <>
      {/* Dark Navy Hero */}
      <Section background="navy" padding="none" aria-label="Revenue calculator hero"
        className="pt-10 pb-16 lg:pt-14 lg:pb-20 overflow-hidden"
      >
        <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.22} animate className="-top-32 -left-16" />
        <GradientOrb color="blue"   size="xl"  blur="2xl" opacity={0.15}        className="top-0 right-0" />
        <GradientOrb color="cyan"   size="lg"  blur="2xl" opacity={0.10}        className="bottom-0 left-1/3" />
        <div aria-hidden="true" className="absolute inset-0 ai-grid pointer-events-none opacity-30" />

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            <motion.div variants={stagger} initial="hidden" animate="visible"
              className="flex flex-col gap-5"
            >
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2">
                {HERO_BADGES.map(({ icon: Icon, label }) => (
                  <span key={label}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full glass-dark border border-white/[0.10] text-[10px] font-semibold tracking-widest uppercase text-white/70"
                  >
                    <Icon aria-hidden="true" className="w-3 h-3" />
                    {label}
                  </span>
                ))}
              </motion.div>

              <motion.h1 variants={fadeUp}
                className="text-h1 md:text-display font-bold text-white tracking-display text-balance leading-tight"
              >
                AI-Powered{" "}
                <GradientText gradient="brand">Ad Revenue</GradientText>
                <br />Calculator
              </motion.h1>

              <motion.p variants={fadeUp} className="text-body-lg text-white/65 text-pretty leading-relaxed max-w-lg">
                Estimate your website&apos;s real revenue potential using AI-driven market benchmarks, traffic intelligence, and monetization analytics.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
                {[
                  { val: "1,200+", label: "Publishers analyzed" },
                  { val: "$2.4M+", label: "Revenue optimized" },
                  { val: "67%",    label: "Avg revenue lift" },
                ].map(({ val, label }) => (
                  <div key={label} className="glass-dark rounded-2xl px-4 py-3 border border-white/[0.08]">
                    <p className="text-base font-bold text-white">{val}</p>
                    <p className="text-[10px] text-white/55">{label}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Robot */}
            <motion.div
              initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="hidden lg:flex items-center justify-center"
            >
              <RobotImage variant="analytics" size="xl" floatDelay={0} glowColor="purple" />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Calculator */}
      <Section background="base" padding="lg" aria-label="Revenue calculator" id="calculator">
        <GradientOrb color="purple" size="xl"  blur="2xl" opacity={0.07} animate className="-top-24 right-0" />
        <GradientOrb color="cyan"   size="lg"  blur="2xl" opacity={0.06}        className="bottom-0 left-0" />
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8 text-center"
          >
            <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance">
              Enter Your Details,{" "}
              <GradientText gradient="brand">See Your Potential</GradientText>
            </h2>
            <p className="text-body text-text-secondary mt-2">
              Adjust any input — results update instantly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-8 items-start">
            <CalculatorInputs inputs={inputs} onChange={handleChange} onReset={handleReset} />
            <LiveResults results={results} />
          </div>
        </Container>
      </Section>

      <HowItWorksSection />

      <AIInsights
        insights={results.insights}
        aiScore={results.aiScore}
        platform={inputs.platform}
        geography={inputs.geography}
      />

      <RevenueChart breakdown={results.breakdown} expectedRevenue={results.expectedEstimate} />

      <LeadCaptureSection inputs={inputs} results={results} />

      <SolutionCTA
        heading="Ready to Unlock Your Real Revenue Potential?"
        subheading="Let Click Dudes review your website and build a smarter monetization strategy — tailored to your inventory."
        badge="Apply For Monetization"
        robotVariant="rocket"
        primaryCTA={{ label: "Apply For Monetization", href: "/about/contact-us" }}
      />
    </>
  )
}
