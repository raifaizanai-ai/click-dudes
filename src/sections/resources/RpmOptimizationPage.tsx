"use client"

import { motion } from "framer-motion"
import { TrendingUp, AlertCircle, ArrowRight, Search, Globe, Smartphone, Clock, BarChart2, Target } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { SolutionCTA } from "@/components/marketing/SolutionCTA"
import { GlassCard } from "@/components/shared/GlassCard"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const fadeUp  = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }

interface RPMIssue { icon: React.ElementType; title: string; diagnosis: string; fix: string; iconBg: string; iconColor: string }

const RPM_ISSUES: RPMIssue[] = [
  { icon: Globe,      iconBg: "bg-brand-purple/10", iconColor: "text-brand-purple", title: "Low-Value GEO Mix",          diagnosis: "More than 40% traffic from Tier-3 GEOs (South Asia, Southeast Asia, sub-Saharan Africa) severely depresses CPM.", fix: "Diversify traffic acquisition toward Tier-1/2 markets through SEO, content localization, and targeted social content." },
  { icon: BarChart2,  iconBg: "bg-brand-blue/10",   iconColor: "text-brand-blue",   title: "Single Demand Source",       diagnosis: "Using AdSense alone means you're missing 500+ additional DSPs and private marketplace buyers that AdX unlocks.", fix: "Upgrade to Google AdX through a certified partner like Click Dudes to access full programmatic demand." },
  { icon: Target,     iconBg: "bg-brand-violet/10", iconColor: "text-brand-violet", title: "No Header Bidding",          diagnosis: "Without header bidding, demand partners bid sequentially, meaning the first buyer sets the floor, not market competition.", fix: "Implement header bidding with Prebid.js to create real-time competition across 15+ SSPs simultaneously." },
  { icon: Search,     iconBg: "bg-brand-cyan/10",   iconColor: "text-brand-cyan",   title: "Poor Ad Placement",          diagnosis: "Ads below the fold, in content that users don't read, or with low viewability score below 60% earn far less.", fix: "Move core ad units above the fold, within article content, or use sticky units for sustained viewability." },
  { icon: Smartphone, iconBg: "bg-brand-green/10",  iconColor: "text-brand-green",  title: "Heavy Mobile Traffic",       diagnosis: "Mobile RPMs run 30–60% lower than desktop in most verticals. A mobile-dominant audience suppresses blended RPM.", fix: "Optimize mobile ad formats, interstitials, anchor ads, and sticky banners perform significantly better than standard mobile display." },
  { icon: Clock,      iconBg: "bg-brand-purple/10", iconColor: "text-brand-purple", title: "No AI Floor Optimization",   diagnosis: "Static floor prices leave money on the table, floors set too low undervalue inventory; too high kills fill rate.", fix: "Use AI-powered price floor optimization to set dynamic floors per GEO, device, time of day, and content category." },
]

export function RpmOptimizationPage() {
  return (
    <>
      <Section background="hero" padding="none" aria-label="RPM optimization guide hero" className="pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <GradientOrb color="violet" size="2xl" blur="2xl" opacity={0.11} animate className="-top-32 left-1/3" />
        <GradientOrb color="blue"   size="xl"  blur="2xl" opacity={0.08}        className="top-0 right-0" />
        <Container>
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple">
              <TrendingUp aria-hidden="true" className="w-3.5 h-3.5" /> RPM Optimization Guide
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-h2 sm:text-h1 md:text-display font-bold text-text-primary tracking-display text-balance leading-tight">
              Why Your RPM Is Low.<br className="hidden sm:block" />{" "}<GradientText gradient="brand">Here Is How to Fix It.</GradientText>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-body-lg text-text-secondary text-pretty leading-relaxed max-w-2xl">
              Six proven causes of low publisher RPM, and the exact steps to diagnose and fix each one to recover lost ad revenue.
            </motion.p>
            <motion.div variants={stagger} className="flex flex-wrap justify-center gap-4 mt-2">
              {["GEO Mix", "Demand Sources", "Header Bidding", "Ad Placement", "Floor Prices", "AI Optimization"].map((tag) => (
                <motion.span key={tag} variants={fadeUp} className="text-xs font-semibold px-3 py-1.5 rounded-full glass border border-brand-purple/[0.12] text-text-secondary">{tag}</motion.span>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section background="base" padding="lg" aria-label="RPM causes and fixes">
        <GradientOrb color="cyan" size="xl" blur="2xl" opacity={0.07} className="top-0 left-0" />
        <Container size="lg">
          <SectionHeader badge="Root Causes" heading={<>Six Causes & <GradientText gradient="brand">How to Fix Them</GradientText></>} subtext="Each issue below has a diagnosable pattern and a concrete fix. Start with the ones that match your traffic profile." align="center" subtextWidth="md" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {RPM_ISSUES.map((issue, i) => {
              const Icon = issue.icon
              return (
                <motion.div key={issue.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }} style={{ transitionDelay: `${i * 0.06}s` }}>
                  <GlassCard variant="strong" padding="lg" hover rounded="2xl" className="h-full">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mb-4", issue.iconBg)}>
                      <Icon aria-hidden="true" className={cn("w-5 h-5", issue.iconColor)} />
                    </div>
                    <h3 className="text-base font-bold text-text-primary mb-3">{issue.title}</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2.5 p-3 rounded-xl bg-red-50/60 border border-red-100/60">
                        <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
                        <p className="text-xs text-text-secondary leading-relaxed">{issue.diagnosis}</p>
                      </div>
                      <div className="flex items-start gap-2.5 p-3 rounded-xl bg-brand-green/[0.05] border border-brand-green/[0.12]">
                        <TrendingUp className="w-4 h-4 text-brand-green shrink-0 mt-0.5" aria-hidden="true" />
                        <p className="text-xs text-text-secondary leading-relaxed">{issue.fix}</p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              )
            })}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/revenue-calculator" className={cn(buttonVariants({ variant: "primary", size: "lg" }), "group")}>
              Try RPM Calculator <ArrowRight aria-hidden="true" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/about/contact-us" className={buttonVariants({ variant: "secondary", size: "lg" })}>Request Free Revenue Audit</Link>
          </div>
        </Container>
      </Section>

      <SolutionCTA heading="Get a Free RPM Audit" subheading="Our team will identify exactly which RPM issue is costing you the most and recommend a fix plan with estimated recovery." badge="Free Revenue Audit" robotVariant="rocket" primaryCTA={{ label: "Request Free Audit", href: "/about/contact-us" }} />
    </>
  )
}
