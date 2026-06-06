"use client"

import { motion } from "framer-motion"
import { BarChart2, CheckCircle2, XCircle, AlertTriangle, ArrowRight } from "lucide-react"
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

const fadeUp   = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } } }
const stagger  = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }

const REQUIREMENTS = [
  { met: true,  label: "Minimum 500K monthly pageviews (web) or 250K monthly impressions (app)" },
  { met: true,  label: "Live website or app with real, engaged users and original content" },
  { met: true,  label: "Majority traffic from Tier-1 or Tier-2 geographies (US, UK, CA, AU, EU)" },
  { met: true,  label: "HTTPS enabled across all pages where ads will serve" },
  { met: true,  label: "Ads.txt file published with all authorised seller entries" },
  { met: true,  label: "Content compliant with Google Publisher Policies (no adult, illegal, hateful content)" },
  { met: true,  label: "No history of invalid traffic issues, policy violations, or account suspensions" },
  { met: true,  label: "Publisher owns or has authorised control over the property" },
]

const REJECTIONS = [
  "Traffic below 500K monthly pageviews or heavy bot/incentivised traffic presence",
  "Content policy violations — adult, hateful, illegal, or copyright-infringing content",
  "Recent AdSense policy strike or account suspension within 12 months",
  "Sites with no real user engagement (built-for-ads properties)",
  "Missing or incorrect ads.txt entries",
  "Majority traffic from low-value GEOs (Tier-3 geos reduce approval chances significantly)",
]

const STEPS = [
  { num: "01", title: "Apply to Click Dudes", text: "Submit your property for review. We verify traffic, content, and policy compliance." },
  { num: "02", title: "AdX Approval (5–10 days)", text: "We submit through our GCPP account. Most approvals arrive within a week." },
  { num: "03", title: "Technical Integration", text: "Our team handles tags, header bidding wrapper, and AI calibration setup." },
  { num: "04", title: "Go Live & Optimize", text: "CPMs typically start improving within 30 days as AI floor calibration begins." },
]

export function GoogleAdxRequirementsPage() {
  return (
    <>
      <Section background="hero" padding="none" aria-label="AdX requirements hero" className="pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.12} animate className="-top-24 left-1/4" />
        <GradientOrb color="cyan"   size="xl"  blur="2xl" opacity={0.08}        className="top-0 -right-16" />
        <Container>
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple">
              <BarChart2 aria-hidden="true" className="w-3.5 h-3.5" /> Google AdX Access Guide
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-h2 sm:text-h1 md:text-display font-bold text-text-primary tracking-display text-balance leading-tight">
              Google AdX <GradientText gradient="brand">Requirements Guide</GradientText>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-body-lg text-text-secondary text-pretty leading-relaxed max-w-2xl">
              Everything independent publishers need to know about qualifying for Google AdX — traffic thresholds, content policies, technical setup, and the exact approval process.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      <Section background="base" padding="lg" aria-label="Requirements checklist">
        <GradientOrb color="blue" size="xl" blur="2xl" opacity={0.07} className="top-0 right-0" />
        <Container size="md">
          <SectionHeader badge="Eligibility Checklist" heading={<>What You Need to <GradientText gradient="brand">Qualify</GradientText></>} subtext="Publishers must meet all eight criteria before applying for Google AdX access." align="center" subtextWidth="md" className="mb-10" />
          <GlassCard variant="strong" padding="lg" rounded="2xl">
            <div className="space-y-3">
              {REQUIREMENTS.map((req, i) => (
                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20px" }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-brand-green/[0.04] border border-brand-green/[0.12]">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm text-text-secondary leading-snug">{req.label}</p>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </Container>
      </Section>

      <Section background="section" padding="lg" aria-label="Common rejection reasons">
        <Container size="md">
          <SectionHeader badge="Avoid These" heading={<>Common Rejection <GradientText gradient="violet">Reasons</GradientText></>} subtext="Understanding why applications fail helps you prepare a stronger submission." align="center" subtextWidth="md" className="mb-10" />
          <GlassCard variant="strong" padding="lg" rounded="2xl">
            <div className="space-y-3">
              {REJECTIONS.map((r, i) => (
                <motion.div key={i} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20px" }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-red-50/60 border border-red-100/60">
                  <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="text-sm text-text-secondary leading-snug">{r}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-5 flex items-start gap-2.5 p-3 rounded-xl bg-amber-50/80 border border-amber-200/60">
              <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-xs text-text-secondary">AdX access requires a Google Certified Publishing Partner (GCPP). Individual publishers cannot apply directly — the partner sponsors your application.</p>
            </div>
          </GlassCard>
        </Container>
      </Section>

      <Section background="white" padding="lg" aria-label="Approval process">
        <Container size="md">
          <SectionHeader badge="Approval Process" heading={<>The <GradientText gradient="cyan">Approval Timeline</GradientText></>} subtext="How Click Dudes takes you from application to live AdX in under two weeks." align="center" subtextWidth="sm" className="mb-10" />
          <div className="flex flex-col gap-4">
            {STEPS.map((s, i) => (
              <motion.div key={s.num} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }}
                className="flex items-start gap-5 glass-strong rounded-2xl p-5 border border-brand-purple/[0.10]">
                <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-brand-purple">{s.num}</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-primary mb-0.5">{s.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{s.text}</p>
                </div>
                {i < STEPS.length - 1 && <ArrowRight aria-hidden="true" className={cn("w-4 h-4 text-text-muted/40 hidden sm:block ml-auto self-center")} />}
              </motion.div>
            ))}
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/about/contact-us" className={cn(buttonVariants({ variant: "primary", size: "lg" }), "group")}>
              Apply for AdX Access <ArrowRight aria-hidden="true" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/resources/adsense-vs-adx" className={buttonVariants({ variant: "secondary", size: "lg" })}>AdSense vs AdX Comparison</Link>
          </div>
        </Container>
      </Section>

      <SolutionCTA heading="Ready to Access Google AdX?" subheading="Apply today — we handle the full AdX approval and technical integration so you can focus on content." badge="Get AdX Access" robotVariant="rocket" primaryCTA={{ label: "Apply for AdX Access", href: "/about/contact-us" }} />
    </>
  )
}
