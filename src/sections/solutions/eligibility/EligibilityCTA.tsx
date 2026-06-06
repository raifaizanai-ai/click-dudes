"use client"

import { motion } from "framer-motion"
import { ArrowRight, MessageCircle } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
}

export function EligibilityCTA() {
  return (
    <Section background="premium" padding="xl" aria-label="Apply for Monetization">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <GradientOrb size="xl"  color="purple" opacity={0.12} className="absolute -top-40 left-1/3" />
        <GradientOrb size="lg"  color="cyan"   opacity={0.08} className="absolute bottom-0 right-1/4" />
        <GradientOrb size="md"  color="violet" opacity={0.06} className="absolute top-1/2 -right-20" />
      </div>

      <Container size="md" className="relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col items-center text-center gap-6"
        >
          <motion.div variants={item}>
            <span
              className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full",
                "glass border border-brand-purple/20",
                "text-xs font-semibold tracking-widest uppercase text-brand-purple"
              )}
            >
              Get Started Today
            </span>
          </motion.div>

          <motion.h2
            variants={item}
            className="font-bold text-text-primary tracking-heading text-balance"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            Ready to Check Your{" "}
            <span className="text-gradient-brand">Monetization Eligibility?</span>
          </motion.h2>

          <motion.p
            variants={item}
            className="text-body-lg text-text-secondary max-w-xl text-pretty leading-relaxed"
          >
            Submit your website, app, or CTV platform and our team will review
            whether it is ready for premium monetization.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-3 items-center"
          >
            <Link
              href="/about/contact-us"
              className={cn(buttonVariants({ variant: "glow", size: "xl" }), "group")}
            >
              Apply for Monetization
              <ArrowRight
                aria-hidden="true"
                className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <Link
              href="/about/contact-us"
              className={buttonVariants({ variant: "secondary", size: "xl" })}
            >
              <MessageCircle aria-hidden="true" className="w-4 h-4" />
              Talk to Click Dudes Team
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  )
}
