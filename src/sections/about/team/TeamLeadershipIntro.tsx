"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { fadeUp, VIEWPORT_ONCE } from "@/lib/animations"

export function TeamLeadershipIntro() {
  return (
    <Section background="base" padding="none" className="pt-14 pb-2 md:pt-20" aria-label="Leadership">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={VIEWPORT_ONCE}
        variants={fadeUp}
        className="mx-auto max-w-2xl px-6 flex flex-col items-center text-center gap-3"
      >
        <span className="text-[11px] font-bold tracking-[0.24em] uppercase text-brand-purple">Leadership</span>
        <h2 className="text-h3 font-bold text-text-primary tracking-heading text-balance">
          The People Building Click-Dudes.
        </h2>
      </motion.div>
    </Section>
  )
}
