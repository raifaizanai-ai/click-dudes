"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { BrandMarkNode } from "@/sections/become-a-partner/shared/BrandMarkNode"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { CTAButtonGroup } from "@/components/marketing/CTAButtonGroup"
import { TEAM_MEMBERS } from "@/data/team"
import { fadeUp, staggerContainer, VIEWPORT_ONCE } from "@/lib/animations"

export function TeamCultureSection() {
  const [rai, umer] = TEAM_MEMBERS

  return (
    <Section background="section" padding="lg" className="relative overflow-hidden" aria-label="Building together">
      <GradientOrb color="violet" size="xl" blur="2xl" opacity={0.12} className="top-0 left-1/2 -translate-x-1/2" />

      <Container size="md">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT_ONCE}
          className="flex flex-col items-center text-center gap-6"
        >
          <motion.span variants={fadeUp}
            className="inline-flex items-center px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple"
          >
            Building Together
          </motion.span>

          <motion.h2 variants={fadeUp} className="text-h3 md:text-h2 font-bold text-text-primary tracking-heading text-balance leading-tight">
            Different Roles.{" "}
            <span className="text-gradient-brand">One Click-Dudes Vision.</span>
          </motion.h2>

          <motion.p variants={fadeUp} className="text-text-secondary text-base leading-relaxed text-pretty max-w-xl">
            Technology, publisher growth, partnerships and financial discipline come together behind one goal —
            building a stronger monetization ecosystem.
          </motion.p>

          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 sm:gap-8 mt-2">
            <AvatarNode member={rai} />
            <ConnectorLine />
            <BrandMarkNode size="lg" />
            <ConnectorLine />
            <AvatarNode member={umer} />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-2">
            <CTAButtonGroup
              primary={{ label: "Become a Partner", href: "/become-a-partner" }}
              secondary={{ label: "Contact Us", href: "/about/contact-us" }}
              align="center"
              size="lg"
            />
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}

function ConnectorLine() {
  return <div aria-hidden="true" className="w-8 sm:w-14 h-px bg-gradient-to-r from-brand-purple/40 to-brand-blue/40" />
}

function AvatarNode({ member }: { member: (typeof TEAM_MEMBERS)[number] }) {
  return (
    <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 border border-white"
      style={{ boxShadow: "0 0 0 1px rgba(139,92,246,0.22), 0 8px 24px rgba(7,17,47,0.12)" }}
    >
      <Image
        src={member.image}
        alt={`${member.name} — ${member.role} of Click-Dudes`}
        fill
        sizes="80px"
        className="object-cover"
        style={{ objectPosition: member.imageObjectPosition ?? "center top" }}
      />
    </div>
  )
}
