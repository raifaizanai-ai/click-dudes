"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Clock, Zap, GitBranch, Globe, Smartphone, Monitor, Cpu, LayoutGrid } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type PublisherIconKey =
  | "zap"
  | "git-branch"
  | "globe"
  | "smartphone"
  | "monitor"
  | "cpu"
  | "layout-grid"

const iconMap: Record<PublisherIconKey, LucideIcon> = {
  "zap":         Zap,
  "git-branch":  GitBranch,
  "globe":       Globe,
  "smartphone":  Smartphone,
  "monitor":     Monitor,
  "cpu":         Cpu,
  "layout-grid": LayoutGrid,
}

interface PublisherPlaceholderPageProps {
  iconKey: PublisherIconKey
  title: string
  description: string
  breadcrumb?: string
}

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

export function PublisherPlaceholderPage({
  iconKey,
  title,
  description,
  breadcrumb = "Publisher Solutions",
}: PublisherPlaceholderPageProps) {
  const Icon = iconMap[iconKey]

  return (
    <Section
      background="hero"
      padding="none"
      aria-label={title}
      className="min-h-[72vh] flex items-center pt-16 pb-14 sm:pt-28 sm:pb-20 overflow-hidden"
    >
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.12} animate className="-top-32 left-1/4" />
      <GradientOrb color="blue"   size="xl"  blur="2xl" opacity={0.08}        className="top-4 -right-20" />
      <GradientOrb color="cyan"   size="md"  blur="xl"  opacity={0.07}        className="bottom-8 left-8" />

      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-xl mx-auto text-center"
        >
          {/* Back link */}
          <motion.div variants={fadeUp}>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-brand-purple transition-colors mb-10"
            >
              <ArrowLeft aria-hidden="true" className="w-3.5 h-3.5" />
              Back to home
            </Link>
          </motion.div>

          {/* Icon */}
          <motion.div variants={fadeUp} className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-2xl bg-brand-purple/10 border border-brand-purple/[0.12] flex items-center justify-center">
              <Icon aria-hidden="true" className="w-7 h-7 text-brand-purple" />
            </div>
          </motion.div>

          {/* Label */}
          <motion.p variants={fadeUp} className="text-xs font-semibold tracking-widest uppercase text-brand-purple/70 mb-3">
            {breadcrumb}
          </motion.p>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="text-h2 sm:text-h1 md:text-display font-bold tracking-display text-balance leading-tight text-text-primary mb-5"
          >
            <GradientText gradient="brand">{title}</GradientText>
          </motion.h1>

          {/* Description */}
          <motion.p variants={fadeUp} className="text-base md:text-body-lg text-text-secondary leading-relaxed text-pretty mb-10">
            {description}
          </motion.p>

          {/* Coming soon card */}
          <motion.div
            variants={fadeUp}
            className="glass-strong rounded-2xl p-7 border border-brand-purple/[0.12] mb-10 text-left"
          >
            <div className="flex items-center gap-2.5 mb-2">
              <Clock aria-hidden="true" className="w-4 h-4 text-brand-purple flex-shrink-0" />
              <span className="text-sm font-semibold text-text-primary">Detailed page coming soon</span>
            </div>
            <p className="text-sm text-text-secondary leading-relaxed">
              We&apos;re building dedicated content for this service. Our team is ready to walk you
              through everything — apply to get started or reach out directly.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/about/contact-us" className={cn(buttonVariants({ variant: "primary", size: "lg" }))}>
              Apply to Get Started
            </Link>
            <Link href="/about/contact-us" className={cn(buttonVariants({ variant: "secondary", size: "lg" }))}>
              Talk to Our Team
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
