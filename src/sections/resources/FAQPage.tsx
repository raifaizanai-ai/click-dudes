"use client"

import { motion } from "framer-motion"
import { HelpCircle, MessageCircle, Mail } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { SolutionCTA } from "@/components/marketing/SolutionCTA"
import { FAQCategories } from "@/sections/resources/FAQCategories"
import { cn } from "@/lib/utils"

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}

const QUICK_LINKS = [
  { icon: MessageCircle, color: "text-brand-purple", bg: "bg-brand-purple/10", title: "Live Chat", sub: "Available Mon–Fri, 9am–6pm EST", href: "#" },
  { icon: Mail,          color: "text-brand-blue",   bg: "bg-brand-blue/10",   title: "Email Support", sub: "Response within 24 hours",     href: "mailto:contact@clickdudes.com" },
]

export function FAQPage() {
  return (
    <>
      <Section background="hero" padding="none" aria-label="FAQ hero"
        className="pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden"
      >
        <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.12} animate className="-top-24 left-1/4" />
        <GradientOrb color="blue"   size="xl"  blur="2xl" opacity={0.08}        className="top-0 -right-16" />
        <Container>
          <motion.div variants={stagger} initial="hidden" animate="visible"
            className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto"
          >
            <motion.span variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple"
            >
              <HelpCircle aria-hidden="true" className="w-3.5 h-3.5" />
              Frequently Asked Questions
            </motion.span>
            <motion.h1 variants={fadeUp}
              className="text-h2 sm:text-h1 md:text-display font-bold text-text-primary tracking-display text-balance leading-tight"
            >
              Common Questions,{" "}
              <GradientText gradient="brand">Straight Answers</GradientText>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-body-lg text-text-secondary text-pretty leading-relaxed max-w-2xl">
              Everything publishers, advertisers, and partners want to know before working with Click Dudes, organized by topic.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      <Section background="base" padding="lg" aria-label="FAQ content">
        <GradientOrb color="violet" size="xl" blur="2xl" opacity={0.07} className="top-0 right-0" />
        <Container size="md">
          <SectionHeader
            badge="All Topics"
            heading={<>Browse by <GradientText gradient="violet">Category</GradientText></>}
            subtext="Select a category below to find relevant answers."
            align="center" subtextWidth="sm" className="mb-10"
          />
          <FAQCategories />
        </Container>
      </Section>

      <Section background="section" padding="md" aria-label="Still have questions">
        <Container size="md">
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col items-center text-center gap-6"
          >
            <motion.div variants={fadeUp}>
              <SectionHeader
                badge="Still Have Questions?"
                heading={<>We&apos;re Here to <GradientText gradient="cyan">Help</GradientText></>}
                subtext="Can't find what you're looking for? Our team responds within 24 hours."
                align="center" subtextWidth="sm"
              />
            </motion.div>
            <motion.div variants={stagger} className="flex flex-col sm:flex-row gap-4 w-full max-w-xl">
              {QUICK_LINKS.map((link) => (
                <motion.a key={link.title} href={link.href} variants={fadeUp}
                  className="flex-1 glass-strong rounded-2xl p-5 border border-brand-purple/[0.10] flex items-center gap-4 hover:border-brand-purple/25 transition-colors duration-200 group"
                  style={{ boxShadow: "0 4px 24px rgba(7,17,47,0.05)" }}
                >
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0", link.bg)}>
                    <link.icon aria-hidden="true" className={cn("w-5 h-5", link.color)} />
                  </div>
                  <div className="min-w-0 text-left">
                    <p className="text-sm font-bold text-text-primary group-hover:text-brand-purple transition-colors duration-200">{link.title}</p>
                    <p className="text-xs text-text-muted mt-0.5">{link.sub}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <SolutionCTA
        heading="Ready to Get Started?"
        subheading="Apply to the Click Dudes publisher network and see results in your first 30 days."
        badge="Apply Now"
        robotVariant="wave"
      />
    </>
  )
}
