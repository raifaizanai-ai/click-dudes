"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { RobotImage } from "@/components/shared/RobotImage"
import { TEAM_MEMBERS } from "@/data/team"
import { staggerContainer, fadeUp } from "@/lib/animations"

const RHYTHM_WORDS = ["People", "Partnerships", "Technology", "Growth"]

export function TeamHeroSection() {
  return (
    <Section background="hero" padding="none" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20" aria-label="Team hero">
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.14} animate className="-top-32 left-1/2 -translate-x-1/2" />
      <GradientOrb color="blue" size="xl" blur="2xl" opacity={0.10} className="top-10 -right-24" />
      <GradientOrb color="cyan" size="lg" blur="2xl" opacity={0.08} className="bottom-0 left-10" />

      {/* Faint background portraits — decorative depth layer only */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none select-none">
        {TEAM_MEMBERS.slice(0, 2).map((m, i) => (
          <div
            key={m.slug}
            className="absolute top-0 bottom-0 w-[34%] opacity-[0.07] blur-[2px] grayscale"
            style={{ [i === 0 ? "left" : "right"]: "-2%" }}
          >
            <Image src={m.image} alt="" fill sizes="36vw" className="object-cover object-top" />
          </div>
        ))}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, var(--color-surface-base) 0%, transparent 22%, transparent 78%, var(--color-surface-base) 100%)" }} />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl px-6 flex flex-col items-center text-center gap-6"
      >
        <motion.span variants={fadeUp}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple"
        >
          The People Behind Click-Dudes
        </motion.span>

        <motion.h1 variants={fadeUp}
          className="text-h2 sm:text-h1 md:text-display font-bold text-text-primary tracking-display text-balance leading-[1.05]"
        >
          Meet the Team{" "}
          <span className="text-gradient-brand">Turning Clicks Into Revenue.</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="text-base md:text-body-lg text-text-secondary text-pretty leading-relaxed max-w-2xl">
          Meet the people building Click-Dudes across publisher monetization, partnerships, technology, finance and growth.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mt-2">
          {RHYTHM_WORDS.map((word, i) => (
            <span key={word} className="flex items-center gap-3">
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-text-muted">{word}</span>
              {i < RHYTHM_WORDS.length - 1 && <span className="w-1 h-1 rounded-full bg-brand-purple/40" />}
            </span>
          ))}
        </motion.div>

        <motion.div variants={fadeUp} className="mt-2">
          <RobotImage variant="wave" size="sm" glowColor="purple" />
        </motion.div>

        <motion.div variants={fadeUp} className="mt-2 text-text-muted">
          <ChevronDown aria-hidden="true" className="w-5 h-5 animate-bounce" />
        </motion.div>
      </motion.div>
    </Section>
  )
}
