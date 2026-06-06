"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { FloatingMetricCard } from "@/components/marketing/FloatingMetricCard"
import { buttonVariants } from "@/components/ui/button"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
}

const TRUST_STATS = [
  { value: 250, suffix: "+", label: "Publishers Network",       floatDelay: 0 },
  { value: 50,  suffix: "+", label: "Premium Demand Partners",  floatDelay: 0.5 },
  { value: 25,  suffix: "+", label: "Countries",                floatDelay: 1.0 },
  { value: 5,   suffix: "+", label: "Years Experience",         floatDelay: 1.5 },
]

export function EligibilityHero() {
  const reduced = useReducedMotion()

  return (
    <Section background="hero" padding="xl" aria-label="Monetization Eligibility Hero">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <GradientOrb size="xl"  color="purple" opacity={0.14} className="absolute -top-32 -right-32" />
        <GradientOrb size="lg"  color="blue"   opacity={0.09} className="absolute top-1/2 -left-24" />
        <GradientOrb size="md"  color="cyan"   opacity={0.07} className="absolute bottom-8 right-1/3" />
      </div>

      <Container size="lg" className="relative z-10">
        <motion.div
          variants={reduced ? {} : containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center text-center gap-6 lg:gap-8"
        >
          {/* Badge */}
          <motion.div variants={reduced ? {} : itemVariants}>
            <span
              className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full",
                "glass border border-brand-purple/20",
                "text-xs font-semibold tracking-widest uppercase text-brand-purple"
              )}
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse"
                aria-hidden="true"
              />
              Publisher Monetization Review
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={reduced ? {} : itemVariants} className="max-w-4xl">
            <h1
              className="font-bold text-text-primary tracking-display text-balance"
              style={{ fontSize: "clamp(2.2rem, 5vw, 4rem)", lineHeight: 1.1 }}
            >
              Monetization Eligibility{" "}
              <span className="text-gradient-brand">Criteria</span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.div variants={reduced ? {} : itemVariants} className="max-w-2xl">
            <p className="text-body-lg text-text-secondary text-pretty leading-relaxed">
              Before connecting publishers to premium demand, Google AdX, Header Bidding, and AI
              revenue optimization, Click Dudes reviews every website, app, and CTV platform for
              quality, compliance, traffic integrity, and long-term revenue potential.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={reduced ? {} : itemVariants}
            className="flex flex-col sm:flex-row gap-3 items-center"
          >
            <Link
              href="/about/contact-us"
              className={cn(buttonVariants({ variant: "primary", size: "lg" }), "group")}
            >
              Apply for Monetization
              <ArrowRight
                aria-hidden="true"
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/about/contact-us"
              className={buttonVariants({ variant: "secondary", size: "lg" })}
            >
              Talk to Our Team
            </Link>
          </motion.div>

          {/* Trust stats */}
          <motion.div
            variants={reduced ? {} : itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2 w-full max-w-3xl"
          >
            {TRUST_STATS.map((stat) => (
              <FloatingMetricCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                floatDelay={stat.floatDelay}
                surface="glass"
              />
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
