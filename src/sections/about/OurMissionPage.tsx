"use client"

import { motion } from "framer-motion"
import { Target, Heart, Lightbulb, Shield, TrendingUp, Users } from "lucide-react"
import type { LucideIcon } from "lucide-react"
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
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
}
const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

interface ValueCard {
  icon: LucideIcon; iconBg: string; iconColor: string
  title: string; description: string
}

const VALUES: ValueCard[] = [
  { icon: Heart,      iconBg: "bg-brand-purple/10", iconColor: "text-brand-cyan", title: "Publisher First",     description: "Every product decision, every partnership, every feature we build starts with one question: does this benefit the publisher?" },
  { icon: Lightbulb, iconBg: "bg-brand-blue/10",   iconColor: "text-brand-blue",   title: "Intelligent by Design", description: "We believe AI should work invisibly — eliminating guesswork, automating optimization, and delivering more revenue without complexity." },
  { icon: Shield,    iconBg: "bg-brand-green/10",  iconColor: "text-brand-green",  title: "Radical Transparency", description: "No black boxes. Publishers see exactly what demand partners pay, what fees are taken, and what every metric means." },
  { icon: TrendingUp,iconBg: "bg-brand-cyan/10",   iconColor: "text-brand-cyan",   title: "Growth Without Limits", description: "We don't cap publisher revenue. Our model scales with you — the more you earn, the better the network becomes for everyone." },
  { icon: Users,     iconBg: "bg-brand-violet/10", iconColor: "text-brand-violet", title: "Human + Machine",     description: "AI optimizes every impression. Humans ensure every publisher has an advocate. We believe both are irreplaceable." },
  { icon: Target,    iconBg: "bg-brand-purple/10", iconColor: "text-brand-cyan", title: "True Inventory Value", description: "Most publishers earn 40–60% of their inventory's real worth. Our mission is to close that gap, permanently." },
]

export function OurMissionPage() {
  return (
    <>
      <Section background="hero" padding="none" aria-label="Our mission hero"
        className="pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden"
      >
        <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.13} animate className="-top-24 left-1/3" />
        <GradientOrb color="blue"   size="xl"  blur="2xl" opacity={0.09}        className="top-0 -right-24" />

        <Container>
          <motion.div variants={stagger} initial="hidden" animate="visible"
            className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto"
          >
            <motion.span variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple"
            >
              <Target aria-hidden="true" className="w-3.5 h-3.5" />
              Our Mission
            </motion.span>
            <motion.h1 variants={fadeUp}
              className="text-h2 sm:text-h1 md:text-display font-bold text-text-primary tracking-display text-balance leading-tight"
            >
              Built for <GradientText gradient="brand">Publishers.</GradientText>
              <br />Full Stop.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-body-lg text-text-secondary text-pretty leading-relaxed max-w-2xl">
              Click Dudes was built to give independent publishers the same ad technology advantages as the largest media companies — premium demand, AI optimization, and expert management — without the enterprise price tag.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      <Section background="base" padding="lg" aria-label="Company story">
        <GradientOrb color="violet" size="xl" blur="2xl" opacity={0.07} className="top-0 right-0" />
        <Container size="md">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col gap-6 max-w-2xl mx-auto text-center"
          >
            <motion.div variants={fadeUp}>
              <span className="inline-flex px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple mb-4">
                The Problem We Solve
              </span>
              <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-4">
                The Ad Tech Gap <GradientText gradient="violet">Was Not Acceptable</GradientText>
              </h2>
              <p className="text-body text-text-secondary leading-relaxed mb-3">
                For years, the best ad technology — real-time header bidding, Google AdX direct access, AI-powered floor optimization, private marketplace deals — was locked behind enterprise-level publishing contracts. The Fortune 500 publishers had it. Everyone else made do with basic AdSense.
              </p>
              <p className="text-body text-text-secondary leading-relaxed">
                We started Click Dudes because we&apos;d seen firsthand what publishers were leaving on the table. Not through any fault of their own, but because the tools didn&apos;t exist for their size. We decided to build them.
              </p>
            </motion.div>
            <motion.div variants={fadeUp}
              className="glass-strong rounded-2xl p-6 border border-brand-purple/[0.12] text-left"
              style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}
            >
              <p className="text-lg font-semibold text-text-primary leading-snug text-balance">
                &ldquo;Every publisher deserves to earn their inventory&apos;s true value — regardless of their size, vertical, or technical resources.&rdquo;
              </p>
              <p className="text-sm text-text-muted mt-3">— The Click Dudes founding principle</p>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section background="section" padding="lg" aria-label="Our values">
        <GradientOrb color="cyan" size="xl" blur="2xl" opacity={0.08} className="bottom-0 left-0" />
        <Container>
          <SectionHeader
            badge="Our Values"
            heading={<>The Principles That <GradientText gradient="cyan">Drive Everything</GradientText></>}
            subtext="These aren't aspirational brand statements — they're the rules our team operates by every single day."
            align="center" subtextWidth="md" className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((v, i) => (
              <motion.div key={v.title} custom={i} variants={cardVariant}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
                className="glass-strong rounded-2xl p-6 border border-brand-purple/[0.10] flex flex-col gap-4 relative overflow-hidden"
                style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}
              >
                <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", v.iconBg)}>
                  <v.icon aria-hidden="true" className={cn("w-5 h-5", v.iconColor)} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-primary mb-2">{v.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{v.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <SolutionCTA
        heading="Join a Network Built Around Your Success"
        subheading="Apply today and see what publisher-first monetization actually looks like in practice."
        badge="Apply to Join"
        robotVariant="wave"
      />
    </>
  )
}
