"use client"

import { motion } from "framer-motion"
import { Gift, DollarSign, Users, CheckCircle2, Share2, TrendingUp, Clock } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { SolutionCTA } from "@/components/marketing/SolutionCTA"
import { cn } from "@/lib/utils"

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

const STEPS = [
  { icon: Share2,    color: "text-brand-purple", bg: "bg-brand-purple/10", num: "01", title: "Share Your Referral Link",  description: "Get your unique referral URL from your dashboard. Share it with publisher friends, in communities, or on social." },
  { icon: Users,     color: "text-brand-blue",   bg: "bg-brand-blue/10",   num: "02", title: "Publisher Signs Up",         description: "When a publisher applies using your link, they&apos;re tagged to your account. No complex tracking — it&apos;s automatic." },
  { icon: CheckCircle2, color: "text-brand-green", bg: "bg-brand-green/10", num: "03", title: "They Go Live",             description: "Once your referral is onboarded and live, your commission period begins. No payout until they&apos;re earning." },
  { icon: DollarSign, color: "text-brand-cyan",  bg: "bg-brand-cyan/10",   num: "04", title: "Earn Recurring Commission", description: "Receive 5% of their managed revenue for the first 12 months — paid monthly alongside your regular revenue." },
]

interface EarningsRow { publishers: number; avgMonthly: string; commission: string; annual: string }
const EARNINGS: EarningsRow[] = [
  { publishers: 1,  avgMonthly: "$5,000",  commission: "$250/mo",   annual: "$3,000" },
  { publishers: 3,  avgMonthly: "$5,000",  commission: "$750/mo",   annual: "$9,000" },
  { publishers: 5,  avgMonthly: "$8,000",  commission: "$2,000/mo", annual: "$24,000" },
  { publishers: 10, avgMonthly: "$10,000", commission: "$5,000/mo", annual: "$60,000" },
]

const BENEFITS = [
  { icon: Clock,      color: "text-brand-purple", bg: "bg-brand-purple/10", title: "No Minimums",        sub: "Earn from your first referral" },
  { icon: TrendingUp, color: "text-brand-blue",   bg: "bg-brand-blue/10",   title: "Recurring Payouts",  sub: "12 months per referred publisher" },
  { icon: DollarSign, color: "text-brand-green",  bg: "bg-brand-green/10",  title: "5% Commission",      sub: "Of referred publisher revenue" },
  { icon: Gift,       color: "text-brand-cyan",   bg: "bg-brand-cyan/10",   title: "No Cap",             sub: "Unlimited referrals, unlimited earnings" },
]

export function PublisherReferralPage() {
  return (
    <>
      <Section background="hero" padding="none" aria-label="Publisher referral hero"
        className="pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden"
      >
        <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.13} animate className="-top-24 left-1/4" />
        <GradientOrb color="cyan"   size="xl"  blur="2xl" opacity={0.08}        className="top-0 right-0" />
        <Container>
          <motion.div variants={stagger} initial="hidden" animate="visible"
            className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto"
          >
            <motion.span variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple"
            >
              <Gift aria-hidden="true" className="w-3.5 h-3.5" />
              Publisher Referral Program
            </motion.span>
            <motion.h1 variants={fadeUp}
              className="text-h1 md:text-display font-bold text-text-primary tracking-display text-balance leading-tight"
            >
              Refer Publishers,{" "}
              <GradientText gradient="brand">Earn Commissions</GradientText>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-text-secondary text-pretty leading-relaxed max-w-2xl">
              Earn 5% of referred publisher revenue for 12 months — no minimums, no limits, paid monthly. The more publishers you refer, the more you earn.
            </motion.p>

            <motion.div variants={stagger} className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4 w-full">
              {BENEFITS.map((b) => (
                <motion.div key={b.title} variants={fadeUp}
                  className="glass-strong rounded-2xl p-4 border border-brand-purple/[0.10] flex flex-col items-center gap-2"
                >
                  <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center", b.bg)}>
                    <b.icon aria-hidden="true" className={cn("w-4.5 h-4.5", b.color)} />
                  </div>
                  <p className="text-sm font-bold text-text-primary">{b.title}</p>
                  <p className="text-[11px] text-text-muted text-center">{b.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section background="base" padding="lg" aria-label="How it works">
        <GradientOrb color="blue" size="xl" blur="2xl" opacity={0.07} className="top-0 right-0" />
        <Container size="md">
          <SectionHeader
            badge="How It Works"
            heading={<>Four Simple <GradientText gradient="violet">Steps to Earn</GradientText></>}
            subtext="From sharing your link to receiving monthly commission payments — here&apos;s the exact process."
            align="center" subtextWidth="sm" className="mb-10"
          />
          <div className="flex flex-col gap-4">
            {STEPS.map((s, i) => (
              <motion.div key={s.num} custom={i} variants={cardVariant}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-30px" }}
                className="flex items-start gap-5 glass-strong rounded-2xl p-5 border border-brand-purple/[0.10]"
              >
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0", s.bg)}>
                  <s.icon aria-hidden="true" className={cn("w-5 h-5", s.color)} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] font-bold text-text-muted tracking-widest">{s.num}</span>
                    <h3 className="text-sm font-bold text-text-primary">{s.title}</h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed" dangerouslySetInnerHTML={{ __html: s.description.replace(/&apos;/g, "'") }} />
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="section" padding="lg" aria-label="Earnings projection">
        <Container size="md">
          <SectionHeader
            badge="Earnings Calculator"
            heading={<>What You Could <GradientText gradient="cyan">Earn</GradientText></>}
            subtext="Commission projections based on typical publisher revenue in our network."
            align="center" subtextWidth="sm" className="mb-8"
          />
          <div className="glass-strong rounded-2xl border border-brand-purple/[0.10] overflow-hidden">
            <div className="grid grid-cols-4 px-6 py-3 bg-surface-section border-b border-brand-purple/[0.08]">
              {["Publishers", "Avg Monthly Rev", "Your Commission", "Annual Earnings"].map((h) => (
                <span key={h} className="text-[10px] font-semibold text-text-muted uppercase tracking-widest text-center">{h}</span>
              ))}
            </div>
            {EARNINGS.map((row, i) => (
              <motion.div key={row.publishers} custom={i} variants={fadeUp}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20px" }}
                className={cn("grid grid-cols-4 items-center px-6 py-4 text-center", i < EARNINGS.length - 1 && "border-b border-brand-purple/[0.06]")}
              >
                <span className="text-sm font-bold text-text-primary">{row.publishers}</span>
                <span className="text-sm text-text-secondary">{row.avgMonthly}</span>
                <span className="text-sm font-semibold text-brand-purple">{row.commission}</span>
                <span className="text-sm font-bold text-brand-green">{row.annual}</span>
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-text-muted text-center mt-3">Based on 5% commission of referred publisher managed revenue over 12 months.</p>
        </Container>
      </Section>

      <SolutionCTA
        heading="Start Earning With Your First Referral"
        subheading="Apply to the network and access your referral dashboard — start sharing and earning immediately."
        badge="Join the Program"
        robotVariant="celebrate"
        primaryCTA={{ label: "Join Publisher Referral Program", href: "/about/contact-us" }}
      />
    </>
  )
}
