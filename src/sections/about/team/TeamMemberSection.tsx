"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { usePointerTilt } from "@/hooks/use-pointer-tilt"
import { useReducedMotion } from "@/hooks/use-media-query"
import { Section } from "@/components/layout/Section"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { LinkedInButton } from "@/components/shared/LinkedInButton"
import { LinkedInIconButton } from "@/components/shared/LinkedInIconButton"
import { TeamMemberBackdrop } from "@/sections/about/team/TeamMemberBackdrop"
import { TeamFocusAreas } from "@/sections/about/team/TeamFocusAreas"
import { VIEWPORT_ONCE } from "@/lib/animations"
import type { TeamMember } from "@/data/team"
import { cn } from "@/lib/utils"

interface TeamMemberSectionProps {
  member: TeamMember
  index: number
}

const EASE = [0.16, 1, 0.3, 1] as const

export function TeamMemberSection({ member, index }: TeamMemberSectionProps) {
  const portraitOnLeft = index % 2 === 0
  const accentColor = portraitOnLeft ? "purple" : "blue"
  const reducedMotion = useReducedMotion()

  const portraitTiltRef = useRef<HTMLDivElement>(null)
  const tilt = usePointerTilt(portraitTiltRef, { maxRotate: 3, maxTranslateZ: 8 })

  const portraitVariants = {
    hidden: { opacity: 0, x: portraitOnLeft ? -40 : 40, rotateY: portraitOnLeft ? 4 : -4 },
    visible: { opacity: 1, x: 0, rotateY: 0, transition: { duration: 0.8, ease: EASE } },
  }
  const panelVariants = {
    hidden: { opacity: 0, x: portraitOnLeft ? 40 : -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE, delay: 0.15 } },
  }
  const nameplateVariants = {
    hidden: { opacity: 0, y: 14 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE, delay: 0.4 } },
  }

  return (
    <Section background="premium" padding="none" className="relative overflow-hidden py-16 lg:py-20" aria-label={`${member.name} — ${member.role}`}>
      <GradientOrb
        color={accentColor}
        size="xl" blur="2xl" opacity={0.10}
        className={portraitOnLeft ? "top-0 right-0" : "top-0 left-0"}
      />
      <TeamMemberBackdrop theme={member.backdropTheme} className={portraitOnLeft ? "right-0" : "left-0 right-auto"} />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">

          {/* ── Portrait ─────────────────────────────────────── */}
          <div className={cn("order-1", portraitOnLeft ? "lg:order-1" : "lg:order-2")}>
            <motion.div
              initial={reducedMotion ? undefined : "hidden"}
              whileInView={reducedMotion ? undefined : "visible"}
              viewport={VIEWPORT_ONCE}
              variants={portraitVariants}
              className="group relative mx-auto max-w-[420px] lg:mx-0"
              style={{ perspective: "1200px" }}
            >
              <div
                aria-hidden="true"
                className="absolute -inset-5 rounded-[2.5rem] blur-2xl opacity-40 group-hover:opacity-65 transition-opacity duration-500"
                style={{ background: "radial-gradient(60% 55% at 50% 10%, rgba(139,92,246,0.30) 0%, transparent 70%)" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-8 -bottom-4 h-8 rounded-full blur-xl opacity-50"
                style={{ background: "rgba(7,17,47,0.20)" }}
              />

              <motion.div
                ref={portraitTiltRef}
                whileHover={reducedMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative rounded-[2rem] overflow-hidden border border-brand-purple/[0.14]"
                style={{
                  aspectRatio: "4 / 5",
                  height: "clamp(420px, 34vw, 520px)",
                  rotateX: tilt.rotateX, rotateY: tilt.rotateY, z: tilt.translateZ,
                  boxShadow: "0 20px 50px rgba(7,17,47,0.16), 0 4px 16px rgba(139,92,246,0.12)",
                }}
              >
                <Image
                  src={member.image}
                  alt={`${member.name} — ${member.role} of Click-Dudes`}
                  fill
                  sizes="(max-width: 1024px) 90vw, 420px"
                  priority={index === 0}
                  className="object-cover"
                  style={{ objectPosition: member.imageObjectPosition ?? "center top" }}
                />

                <motion.div
                  initial={reducedMotion ? undefined : "hidden"}
                  whileInView={reducedMotion ? undefined : "visible"}
                  viewport={VIEWPORT_ONCE}
                  variants={nameplateVariants}
                  className="absolute left-3 right-3 bottom-3 bg-white/92 backdrop-blur-xl rounded-2xl px-5 py-4 border border-white/60 shadow-[0_10px_30px_rgba(7,17,47,0.18)] flex items-center justify-between gap-3 group-hover:shadow-[0_14px_40px_rgba(139,92,246,0.28)] transition-shadow duration-500"
                >
                  <div className="min-w-0">
                    <p className="text-text-primary font-extrabold text-[22px] md:text-[26px] tracking-heading leading-none uppercase truncate">
                      {member.name}
                    </p>
                    <p className="text-[12px] md:text-[13px] font-bold tracking-[0.08em] uppercase text-brand-purple mt-1.5">
                      {member.role}
                    </p>
                  </div>
                  {member.linkedin && (
                    <LinkedInIconButton href={member.linkedin} name={member.name} />
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          </div>

          {/* ── Info panel ───────────────────────────────────── */}
          <div className={cn("order-2", portraitOnLeft ? "lg:order-2" : "lg:order-1")}>
            <motion.div
              initial={reducedMotion ? undefined : "hidden"}
              whileInView={reducedMotion ? undefined : "visible"}
              viewport={VIEWPORT_ONCE}
              variants={panelVariants}
              className="glass-strong rounded-3xl p-8 md:p-10 relative overflow-hidden max-w-xl lg:max-w-[520px] mx-auto lg:mx-0 border border-brand-purple/[0.12]"
              style={{ boxShadow: "0 24px 64px rgba(7,17,47,0.08), 0 0 0 1px rgba(139,92,246,0.05)" }}
            >
              <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent" />

              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-text-muted">
                {String(index + 1).padStart(2, "0")} — Leadership
              </span>

              <h2 className="mt-4 text-h3 md:text-h2 font-bold text-text-primary tracking-heading text-balance leading-[1.08]">
                {member.name}
              </h2>
              <p className="mt-2 text-sm md:text-base font-bold tracking-wide uppercase text-gradient-brand">
                {member.role}
              </p>

              <p className="mt-6 text-text-secondary text-base leading-relaxed text-pretty max-w-lg">
                {member.shortDescription}
              </p>

              {member.focusAreas && member.focusAreas.length > 0 && (
                <TeamFocusAreas focusAreas={member.focusAreas} />
              )}

              {member.linkedin && (
                <div className="mt-8">
                  <LinkedInButton href={member.linkedin} name={member.name} />
                </div>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </Section>
  )
}
