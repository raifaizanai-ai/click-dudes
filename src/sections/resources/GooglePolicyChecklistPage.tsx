"use client"

import { motion } from "framer-motion"
import { Shield, CheckCircle2, XCircle, AlertTriangle, ArrowRight } from "lucide-react"
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

const ALLOWED: string[] = [
  "Original content that provides genuine value to users",
  "News, information, entertainment, and educational content",
  "Discussion forums with active moderation for policy violations",
  "User-generated content with clear community guidelines and oversight",
  "Affiliate content as long as it adds original commentary or review value",
  "Translated content with substantial original additions or localization value",
]

const PROHIBITED: string[] = [
  "Adult, explicit, or sexually suggestive content of any kind",
  "Content promoting illegal activities, drugs, weapons, or violence",
  "Scraped or auto-generated content with no original value",
  "Copyright-infringing content (music, video, articles, images)",
  "Misleading health, financial, or safety claims",
  "Gambling content unless licensed and restricted to appropriate audiences",
  "Hateful, discriminatory, or harassing content targeting protected groups",
  "Sites built primarily to display ads with minimal original content",
]

const TRAFFIC_RULES: string[] = [
  "Traffic must come from real users clicking on organic links, not bots or scripts",
  "Do not incentivise users to click ads, neither directly nor through UI patterns",
  "Do not purchase traffic solely to increase ad impressions",
  "Avoid traffic exchange schemes where publishers visit each other's sites for clicks",
  "Do not use misleading navigation to funnel users into accidental ad clicks",
  "Do not redirect users to ad pages without clear intent or landing page context",
]

const AD_IMPL: string[] = [
  "Ads must be clearly distinguishable from site content, no disguising ads as menus or navigation",
  "No more than 3 display ad units per page (AdSense policy; AdX has different rules managed by partner)",
  "Ads must not obscure content, require interaction to dismiss, or auto-play audio without user action",
  "Do not place ads on error pages, login pages, or pages with no real content",
  "Ads.txt must be published and kept accurate, missing entries can block demand",
  "Do not modify ad code to alter sizing, behavior, or appearance beyond allowed customisation",
]

const VIOLATIONS = [
  { severity: "Critical", label: "Invalid Click Activity",         desc: "Clicking your own ads or encouraging others to click. Leads to immediate account suspension." },
  { severity: "Critical", label: "Adult Content on Ad Pages",      desc: "Any adult content on pages serving Google ads, zero tolerance, immediate suspension." },
  { severity: "High",     label: "Copyright Infringement",         desc: "Hosting pirated video, audio, or articles triggers DMCA takedowns and policy strikes." },
  { severity: "Medium",   label: "Insufficient Unique Content",    desc: "Primarily scraped or template content without original value. Leads to account warning." },
  { severity: "Medium",   label: "Deceptive Ad Implementation",    desc: "Placing ads in ways that trick users into clicking. Triggers immediate policy review." },
]

const severityColor: Record<string, string> = {
  Critical: "bg-red-100 text-red-600 border-red-200",
  High:     "bg-amber-100 text-amber-600 border-amber-200",
  Medium:   "bg-yellow-100 text-yellow-600 border-yellow-200",
}

export function GooglePolicyChecklistPage() {
  return (
    <>
      <Section background="hero" padding="none" aria-label="Google policy checklist hero" className="pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <GradientOrb color="cyan"   size="2xl" blur="2xl" opacity={0.08} animate className="-top-24 left-1/4" />
        <GradientOrb color="purple" size="xl"  blur="2xl" opacity={0.09}        className="top-0 right-0" />
        <Container>
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple">
              <Shield aria-hidden="true" className="w-3.5 h-3.5" /> Policy & Compliance
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-h2 sm:text-h1 md:text-display font-bold text-text-primary tracking-display text-balance leading-tight">
              Google Publisher <GradientText gradient="brand">Policy Checklist</GradientText>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-body-lg text-text-secondary text-pretty leading-relaxed max-w-2xl">
              A plain-language checklist of Google's content, traffic, and ad implementation policies. Stay compliant, protect your account, and avoid the violations that most commonly trigger suspensions.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      <Section background="base" padding="lg" aria-label="Content policies">
        <Container size="lg">
          <SectionHeader badge="Content Policy" heading={<>What&apos;s Allowed & <GradientText gradient="brand">What&apos;s Not</GradientText></>} subtext="Google's content policies are the foundation of ad eligibility. Every page serving ads must comply." align="center" subtextWidth="md" className="mb-10" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard variant="strong" padding="lg" rounded="2xl">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-brand-green" aria-hidden="true" />
                <h3 className="text-sm font-bold text-text-primary">Allowed Content</h3>
              </div>
              <ul className="space-y-2.5">
                {ALLOWED.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-xs text-text-secondary leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
            <GlassCard variant="strong" padding="lg" rounded="2xl">
              <div className="flex items-center gap-2 mb-4">
                <XCircle className="w-5 h-5 text-red-400" aria-hidden="true" />
                <h3 className="text-sm font-bold text-text-primary">Prohibited Content</h3>
              </div>
              <ul className="space-y-2.5">
                {PROHIBITED.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <XCircle className="w-3.5 h-3.5 text-red-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-xs text-text-secondary leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </Container>
      </Section>

      <Section background="section" padding="lg" aria-label="Traffic and ad implementation rules">
        <Container size="lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <GlassCard variant="strong" padding="lg" rounded="2xl">
              <h3 className="text-sm font-bold text-text-primary mb-4">Traffic Quality Rules</h3>
              <ul className="space-y-2.5">
                {TRAFFIC_RULES.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-xs text-text-secondary leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
            <GlassCard variant="strong" padding="lg" rounded="2xl">
              <h3 className="text-sm font-bold text-text-primary mb-4">Ad Implementation Rules</h3>
              <ul className="space-y-2.5">
                {AD_IMPL.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-purple shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-xs text-text-secondary leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <SectionHeader badge="Common Violations" heading={<>Violations That Most Often <GradientText gradient="violet">Cause Suspensions</GradientText></>} subtext="These are the most commonly cited violations in Google publisher account actions." align="center" subtextWidth="md" className="mb-8" />
          <div className="space-y-3">
            {VIOLATIONS.map((v, i) => (
              <motion.div key={v.label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20px" }} style={{ transitionDelay: `${i * 0.05}s` }}
                className="flex items-start gap-4 glass-strong rounded-xl p-4 border border-brand-purple/[0.08]">
                <span className={cn("text-[10px] font-bold px-2.5 py-1 rounded-full border shrink-0 mt-0.5", severityColor[v.severity])}>{v.severity}</span>
                <div>
                  <p className="text-sm font-semibold text-text-primary mb-0.5">{v.label}</p>
                  <p className="text-xs text-text-secondary leading-relaxed">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 flex gap-2.5 p-3.5 rounded-xl bg-amber-50/80 border border-amber-200/60">
            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" aria-hidden="true" />
            <p className="text-xs text-text-secondary">This checklist summarises Google policies for educational purposes. Always refer to Google's official Publisher Policies for the authoritative and current version.</p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/about/contact-us" className={cn(buttonVariants({ variant: "primary", size: "lg" }), "group")}>
              Request Compliance Review <ArrowRight aria-hidden="true" className="w-4 h-4" />
            </Link>
            <Link href="/publisher-solutions/monetization-eligibility-criteria" className={buttonVariants({ variant: "secondary", size: "lg" })}>Eligibility Criteria</Link>
          </div>
        </Container>
      </Section>

      <SolutionCTA heading="Need a Compliance Review?" subheading="Our team reviews your property for policy compliance before AdX submission, protecting your account from day one." badge="Policy Compliance" robotVariant="wave" primaryCTA={{ label: "Request Compliance Review", href: "/about/contact-us" }} />
    </>
  )
}
