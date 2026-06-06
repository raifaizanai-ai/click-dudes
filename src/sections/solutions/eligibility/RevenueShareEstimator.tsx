"use client"

import { useState, useCallback } from "react"
import { motion } from "framer-motion"
import { TrendingUp, Info, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { GlassCard } from "@/components/shared/GlassCard"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface Tier {
  name: string
  range: string
  publisherShare: string
  clickdudesShare: string
  threshold: string
  solution: string
  colorClass: string
}

const TIERS: Tier[] = [
  { name: "Starter Publisher",   range: "$500 – $4,999/mo",      publisherShare: "80%",  clickdudesShare: "20%",    threshold: "$500/mo",    solution: "Web Monetization",       colorClass: "text-brand-blue" },
  { name: "Growth Publisher",    range: "$5,000 – $14,999/mo",   publisherShare: "85%",  clickdudesShare: "15%",    threshold: "$5,000/mo",  solution: "Header Bidding + AdX",   colorClass: "text-brand-purple" },
  { name: "Scale Publisher",     range: "$15,000 – $49,999/mo",  publisherShare: "90%",  clickdudesShare: "10%",    threshold: "$15,000/mo", solution: "AI Ad Optimization",     colorClass: "text-brand-violet" },
  { name: "Premium Publisher",   range: "$50,000 – $249,999/mo", publisherShare: "92%",  clickdudesShare: "8%",     threshold: "$50,000/mo", solution: "Full Managed Stack",     colorClass: "text-brand-cyan" },
  { name: "Enterprise Publisher",range: "$250,000+/mo",          publisherShare: "95%+", clickdudesShare: "Custom", threshold: "$250,000/mo",solution: "Custom Enterprise Plan", colorClass: "text-brand-green" },
]

const TIER_MIDPOINTS = [10, 30, 50, 70, 90]

function revenueFromSlider(val: number): number {
  const minLog = Math.log10(500)
  const maxLog = Math.log10(1000000)
  return Math.round(Math.pow(10, minLog + (maxLog - minLog) * (val / 100)))
}

function formatRevenue(rev: number): string {
  if (rev >= 1000000) return "$1M+"
  if (rev >= 100000)  return `$${(rev / 1000).toFixed(0)}K`
  if (rev >= 1000)    return `$${(rev / 1000).toFixed(1)}K`
  return `$${rev.toLocaleString()}`
}

function getTierIndex(rev: number): number {
  if (rev < 5000)   return 0
  if (rev < 15000)  return 1
  if (rev < 50000)  return 2
  if (rev < 250000) return 3
  return 4
}

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

export function RevenueShareEstimator() {
  const [sliderVal, setSliderVal] = useState(20)
  const revenue   = revenueFromSlider(sliderVal)
  const tierIndex = getTierIndex(revenue)
  const tier      = TIERS[tierIndex]

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderVal(Number(e.target.value))
  }, [])

  return (
    <Section background="section" padding="lg" id="revenue-estimator" aria-label="Revenue Share Estimator">
      <Container size="md">
        <SectionHeader
          badge="Revenue Share Calculator"
          heading={<>See Your Estimated<br /><span className="text-gradient-brand">Revenue Share</span></>}
          subtext="Move the slider to match your average monthly monetization revenue. Final terms depend on review, traffic quality, content compliance, and monetization fit."
          align="center"
          subtextWidth="md"
        />

        <motion.div
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12"
        >
          <GlassCard variant="strong" padding="lg" rounded="2xl">
            {/* Revenue display */}
            <div className="mb-6 text-center">
              <p className="text-xs text-text-muted uppercase tracking-widest font-medium mb-1">
                Monthly Revenue
              </p>
              <p className="text-5xl font-bold text-text-primary tracking-tight tabular-nums">
                {formatRevenue(revenue)}
              </p>
            </div>

            {/* Slider */}
            <div className="relative mb-8">
              <input
                type="range"
                min={0}
                max={100}
                value={sliderVal}
                onChange={handleChange}
                aria-label="Monthly revenue slider"
                aria-valuetext={formatRevenue(revenue)}
                className={cn(
                  "w-full h-2 rounded-full appearance-none cursor-pointer outline-none",
                  "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5",
                  "[&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-brand-purple",
                  "[&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white",
                  "[&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer",
                  "[&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5",
                  "[&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-brand-purple",
                  "[&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white",
                  "[&::-moz-range-thumb]:cursor-pointer [&::-moz-range-thumb]:border-none"
                )}
                style={{
                  background: `linear-gradient(to right, var(--color-brand-purple) ${sliderVal}%, rgba(139,92,246,0.15) ${sliderVal}%)`,
                }}
              />
              <div className="flex justify-between mt-2 text-xs text-text-muted">
                <span>$500/mo</span>
                <span>$1M+/mo</span>
              </div>
            </div>

            {/* Tier quick-select */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mb-8">
              {TIERS.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setSliderVal(TIER_MIDPOINTS[i])}
                  className={cn(
                    "px-2 py-2 rounded-xl text-xs font-medium transition-all duration-200 text-center",
                    tierIndex === i
                      ? "bg-brand-purple/10 border border-brand-purple/30 text-brand-purple"
                      : "glass border border-brand-purple/10 text-text-muted hover:border-brand-purple/20 hover:text-text-secondary"
                  )}
                >
                  {t.name.replace(" Publisher", "")}
                </button>
              ))}
            </div>

            {/* Output panel */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-brand-purple/[0.04] border border-brand-purple/10">
              <div>
                <p className="text-xs text-text-muted mb-1.5 uppercase tracking-wider font-medium">Tier</p>
                <p className={cn("text-sm font-bold", tier.colorClass)}>{tier.name}</p>
                <p className="text-xs text-text-muted mt-1">{tier.range}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted mb-1.5 uppercase tracking-wider font-medium">Publisher Share</p>
                <p className="text-2xl font-bold text-brand-green">{tier.publisherShare}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted mb-1.5 uppercase tracking-wider font-medium">Click Dudes</p>
                <p className="text-sm font-bold text-text-secondary">{tier.clickdudesShare}</p>
                <p className="text-xs text-text-muted mt-1">Min: {tier.threshold}</p>
              </div>
              <div>
                <p className="text-xs text-text-muted mb-1.5 uppercase tracking-wider font-medium">Suggested Plan</p>
                <p className="text-sm font-semibold text-text-primary">{tier.solution}</p>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="mt-5 flex items-start gap-2.5 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/60">
              <Info className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-xs text-text-secondary leading-relaxed">
                Estimates are illustrative. Final revenue share depends on traffic quality, policy
                compliance, account history, and approval.
              </p>
            </div>
          </GlassCard>
        </motion.div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/about/contact-us"
            className={cn(buttonVariants({ variant: "primary", size: "md" }), "group")}
          >
            Check Eligibility
            <TrendingUp aria-hidden="true" className="w-4 h-4" />
          </Link>
          <Link
            href="/about/contact-us"
            className={cn(buttonVariants({ variant: "secondary", size: "md" }), "group")}
          >
            Apply Now
            <ArrowRight aria-hidden="true" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </Container>
    </Section>
  )
}
