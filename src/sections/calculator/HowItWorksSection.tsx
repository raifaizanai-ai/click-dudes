"use client"

import { motion } from "framer-motion"
import { Database, Cpu, BarChart3, Lightbulb, TrendingUp } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { cn } from "@/lib/utils"

const cardVariant = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

const STEPS = [
  { icon: Database,   num: "01", title: "Add Your Data",      description: "Enter your monthly pageviews, content category, traffic geography, and current monetization setup.",  iconBg: "bg-brand-purple/12", iconColor: "text-brand-purple" },
  { icon: Cpu,        num: "02", title: "AI Analysis",        description: "Our AI engine applies category-specific RPM benchmarks, geo multipliers, and quality scoring across 12 signals.", iconBg: "bg-brand-blue/12",   iconColor: "text-brand-blue"   },
  { icon: BarChart3,  num: "03", title: "Smart Estimation",   description: "Revenue estimates are calculated across three scenarios — low, expected, and high — using market-validated multipliers.", iconBg: "bg-brand-cyan/12",   iconColor: "text-brand-cyan"   },
  { icon: Lightbulb,  num: "04", title: "Get Insights",       description: "Receive dynamic AI insights identifying your biggest revenue levers — fill rate, viewability, platform, and demand gaps.", iconBg: "bg-brand-violet/12", iconColor: "text-brand-violet" },
  { icon: TrendingUp, num: "05", title: "Grow Revenue",       description: "Apply today to let Click Dudes implement the optimizations — and see real revenue improvement in 30 days.",            iconBg: "bg-brand-green/12",  iconColor: "text-brand-green"  },
]

export function HowItWorksSection() {
  return (
    <Section background="section" padding="lg" aria-label="How the calculator works">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.07} animate className="-top-16 left-1/4" />

      <Container>
        <SectionHeader
          badge="How It Works"
          heading={<>Five Steps to <GradientText gradient="brand">Revenue Clarity</GradientText></>}
          subtext="From raw traffic data to a personalized revenue estimate and AI-generated growth insights — in under 60 seconds."
          align="center" subtextWidth="md" className="mb-14"
        />

        <div className="relative">
          {/* Connecting dotted line — desktop only */}
          <div
            aria-hidden="true"
            className="absolute top-9 left-[10%] right-[10%] h-px hidden lg:block"
            style={{
              backgroundImage: "repeating-linear-gradient(90deg, rgba(139,92,246,0.25) 0, rgba(139,92,246,0.25) 6px, transparent 6px, transparent 14px)",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {STEPS.map((step, i) => (
              <motion.div key={step.num} custom={i} variants={cardVariant}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}
                className="flex flex-col items-center text-center gap-3 relative"
              >
                <div className={cn(
                  "relative z-10 w-[72px] h-[72px] rounded-2xl flex items-center justify-center",
                  "glass-strong border border-brand-purple/[0.12]",
                  "shadow-[0_4px_24px_rgba(7,17,47,0.06),0_0_0_1px_rgba(139,92,246,0.07)]",
                  step.iconBg
                )}>
                  <step.icon aria-hidden="true" className={cn("w-7 h-7", step.iconColor)} />
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-brand-purple text-white text-[9px] font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-primary leading-tight">{step.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed mt-1.5">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
