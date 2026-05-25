"use client"

import { motion } from "framer-motion"
import { ShoppingCart, Code2, Palette, Share2, User2, Megaphone, Search, LineChart, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { ServiceCard } from "@/components/marketing/ServiceCard"

const SERVICES = [
  {
    icon:        ShoppingCart,
    title:       "E-Commerce",
    description: "Build, optimize, and scale online stores with conversion-focused ecommerce strategy.",
    accent:      "purple" as const,
    href:        "/services/e-commerce",
  },
  {
    icon:        Code2,
    title:       "Web Development",
    description: "WordPress, Shopify, full-stack, custom-coded websites, landing pages, and business platforms.",
    accent:      "blue" as const,
    href:        "/services/web-development",
  },
  {
    icon:        Palette,
    title:       "Graphic Designing",
    description: "Social media content, personal brand visuals, Amazon A+ content, and advertising creatives.",
    accent:      "violet" as const,
    href:        "/services/graphic-designing",
  },
  {
    icon:        Share2,
    title:       "Social Media Management",
    description: "Content planning, posting, engagement, and growth management for businesses.",
    accent:      "cyan" as const,
    href:        "/services/social-media-management",
  },
  {
    icon:        User2,
    title:       "Personal Social Account Management",
    description: "Personal brand profile management for founders, CEOs, creators, and professionals.",
    accent:      "purple" as const,
    href:        "/services/personal-social-account-management",
  },
  {
    icon:        Megaphone,
    title:       "Meta Ads",
    description: "Facebook and Instagram ad campaigns for leads, conversions, retargeting, and scalable paid growth.",
    accent:      "blue" as const,
    href:        "/services/meta-ads",
  },
  {
    icon:        Search,
    title:       "Google Ads",
    description: "Search, display, YouTube, and performance campaigns with conversion tracking and smart optimization.",
    accent:      "green" as const,
    href:        "/services/google-ads",
  },
  {
    icon:        LineChart,
    title:       "SEO Services",
    description: "Technical, on-page, off-page, local, ecommerce SEO, audits, and organic ranking growth.",
    accent:      "cyan" as const,
    href:        "/services/seo-services",
  },
]

const heroVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

const itemVariant = {
  hidden:  { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}

export function ServicesIndexPage() {
  return (
    <>
      {/* ── Page Hero ─────────────────────────────────────── */}
      <Section background="transparent" padding="none" aria-label="Services overview" className="mesh-animated overflow-hidden pt-6 pb-14 sm:pt-10 sm:pb-18 lg:pt-14 lg:pb-24">
        <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.14} animate className="-top-40 -left-32" />
        <GradientOrb color="cyan"   size="xl"  blur="2xl" opacity={0.09}        className="-top-20 right-0" />
        <GradientOrb color="blue"   size="lg"  blur="xl"  opacity={0.07}        className="bottom-0 left-1/3" />
        <div aria-hidden="true" className="absolute inset-0 ai-grid pointer-events-none opacity-[0.12]" />

        <Container>
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto"
          >
            <motion.div variants={itemVariant}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple">
                Digital Agency Services
              </span>
            </motion.div>

            <motion.div variants={itemVariant}>
              <h1
                className="font-bold text-text-primary tracking-display text-balance leading-[1.06]"
                style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)" }}
              >
                Full-Service Digital Solutions{" "}
                <span className="text-gradient-brand">That Drive Real Growth</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariant}>
              <p className="text-base md:text-body-lg text-text-secondary leading-relaxed text-pretty max-w-2xl">
                ClickDudes delivers premium digital services — from ecommerce and web development to paid ads, SEO, social media management, and brand design. One trusted partner for every channel.
              </p>
            </motion.div>

            <motion.div variants={itemVariant}>
              <Link
                href="/about/contact-us"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue text-white text-sm font-semibold hover:-translate-y-0.5 transition-transform duration-200 shadow-[0_8px_32px_rgba(139,92,246,0.35)]"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      {/* ── Services Grid ─────────────────────────────────── */}
      <Section background="base" padding="lg" aria-label="All services" className="mesh-bg">
        <GradientOrb color="violet" size="xl" blur="2xl" opacity={0.08} animate className="-top-32 right-0" />
        <GradientOrb color="blue"   size="md" blur="xl"  opacity={0.06}        className="bottom-0 left-0" />

        <Container size="lg">
          <SectionHeader
            badge="What We Do"
            heading={
              <>
                Every Service Your Business{" "}
                <span className="text-gradient-brand">Needs to Scale</span>
              </>
            }
            subtext="Choose from our full range of digital services, each delivered by specialists with proven results."
            align="center"
            subtextWidth="md"
          />

          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
