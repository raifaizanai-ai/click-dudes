"use client"

import { motion } from "framer-motion"
import { Compass, Cpu, Globe2, TrendingUp, Layers, Zap } from "lucide-react"
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

interface PillarCard {
  icon: LucideIcon; iconBg: string; iconColor: string; year: string
  title: string; description: string
}

const PILLARS: PillarCard[] = [
  { icon: Cpu,       iconBg: "bg-brand-purple/10", iconColor: "text-brand-purple", year: "Now",  title: "AI-Native Optimization",    description: "Every impression priced by machine learning in real time — floor prices, demand allocation, and bid shading handled autonomously." },
  { icon: Globe2,    iconBg: "bg-brand-blue/10",   iconColor: "text-brand-blue",   year: "2025", title: "Universal Publisher Access", description: "Enterprise-grade programmatic technology accessible to any publisher with quality inventory — no minimum traffic, no gatekeeping." },
  { icon: Layers,    iconBg: "bg-brand-cyan/10",   iconColor: "text-brand-cyan",   year: "2026", title: "Unified Monetization OS",    description: "One platform that manages web, app, and CTV inventory simultaneously — unified reporting, shared AI models, single integration." },
  { icon: TrendingUp,iconBg: "bg-brand-green/10",  iconColor: "text-brand-green",  year: "2026", title: "Predictive Revenue Intelligence", description: "Revenue forecasting powered by 1B+ impression signals — helping publishers plan content strategy, headcount, and investment with confidence." },
  { icon: Zap,       iconBg: "bg-brand-violet/10", iconColor: "text-brand-violet", year: "2027", title: "Instant Deal Marketplace",   description: "Publishers and premium buyers negotiate and activate private deals in hours, not weeks — removing the enterprise friction from programmatic direct." },
  { icon: Compass,   iconBg: "bg-brand-purple/10", iconColor: "text-brand-purple", year: "2027", title: "Publisher Economic Layer",    description: "A financial services layer built for digital publishers — revenue advances, working capital products, and payment optimization powered by ad data." },
]

const MILESTONES = [
  { year: "2020", label: "Founded",           sub: "Built the first AI floor optimizer" },
  { year: "2022", label: "GCPP Certified",    sub: "Became Google Certified Publishing Partner" },
  { year: "2023", label: "1K Publishers",     sub: "Crossed 1,000 publishers in network" },
  { year: "2024", label: "CTV Launch",        sub: "Launched connected TV monetization" },
  { year: "2025", label: "AI Platform",       sub: "Unified AI across all publisher formats" },
]

export function OurVisionPage() {
  return (
    <>
      <Section background="hero" padding="none" aria-label="Our vision hero"
        className="pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden"
      >
        <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.13} animate className="-top-24 -left-16" />
        <GradientOrb color="cyan"   size="xl"  blur="2xl" opacity={0.09}        className="-top-8 right-0" />

        <Container>
          <motion.div variants={stagger} initial="hidden" animate="visible"
            className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto"
          >
            <motion.span variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple"
            >
              <Compass aria-hidden="true" className="w-3.5 h-3.5" />
              Our Vision
            </motion.span>
            <motion.h1 variants={fadeUp}
              className="text-h1 md:text-display font-bold text-text-primary tracking-display text-balance leading-tight"
            >
              The Future of{" "}
              <GradientText gradient="brand">Publisher Monetization</GradientText>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-body-lg text-text-secondary text-pretty leading-relaxed max-w-2xl">
              We envision a world where every publisher — regardless of size — earns their inventory&apos;s true value, powered by AI that works invisibly and intelligently in the background.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      <Section background="base" padding="lg" aria-label="Vision pillars">
        <GradientOrb color="blue" size="xl" blur="2xl" opacity={0.08} className="top-0 right-0" />
        <Container>
          <SectionHeader
            badge="The Roadmap"
            heading={<>Six Pillars of Our <GradientText gradient="violet">AI Vision</GradientText></>}
            subtext="The technology we're building today will define how publishers monetize tomorrow."
            align="center" subtextWidth="md" className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PILLARS.map((p, i) => (
              <motion.div key={p.title} custom={i} variants={cardVariant}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
                className="glass-strong rounded-2xl p-6 border border-brand-purple/[0.10] flex flex-col gap-4 relative overflow-hidden"
                style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}
              >
                <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
                <div className="flex items-start justify-between">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", p.iconBg)}>
                    <p.icon aria-hidden="true" className={cn("w-5 h-5", p.iconColor)} />
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-surface-section text-text-muted">{p.year}</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-text-primary mb-2">{p.title}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="section" padding="lg" aria-label="Company timeline">
        <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.08} animate className="top-1/2 -translate-y-1/2 -left-24" />
        <Container size="md">
          <SectionHeader
            badge="Our Journey"
            heading={<>How We Got <GradientText gradient="cyan">Here</GradientText></>}
            subtext="Five years of building infrastructure that matters for publishers."
            align="center" subtextWidth="sm" className="mb-12"
          />
          <div className="relative">
            <div aria-hidden="true" className="absolute left-[calc(50%-1px)] top-0 bottom-0 w-px bg-gradient-to-b from-brand-purple/30 via-brand-purple/15 to-transparent hidden md:block" />
            <div className="flex flex-col gap-6">
              {MILESTONES.map((m, i) => (
                <motion.div key={m.year} custom={i} variants={cardVariant}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                  className={cn("flex items-center gap-6", i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")}
                >
                  <div className={cn("flex-1", i % 2 === 0 ? "md:text-right" : "md:text-left")}>
                    <p className="text-lg font-bold text-text-primary">{m.label}</p>
                    <p className="text-sm text-text-secondary">{m.sub}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full glass-strong border border-brand-purple/20 flex items-center justify-center flex-shrink-0 z-10">
                    <span className="text-xs font-bold text-brand-purple">{m.year}</span>
                  </div>
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <SolutionCTA
        heading="Be Part of the Future We're Building"
        subheading="Join the network today and grow alongside a platform that's actively investing in your revenue for years to come."
        badge="Join the Network"
        robotVariant="rocket"
      />
    </>
  )
}
