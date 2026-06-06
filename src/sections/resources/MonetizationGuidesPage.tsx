"use client"

import { motion } from "framer-motion"
import { BookOpen, Clock, ArrowRight, TrendingUp, Smartphone, Monitor, BarChart2, Zap, Globe, Shield, Search, BarChart3 } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"
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
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

type Difficulty = "Beginner" | "Intermediate" | "Advanced"

interface GuideCard {
  title: string; description: string; category: string
  readTime: string; difficulty: Difficulty
  icon: LucideIcon; iconBg: string; iconColor: string
  href: string; trending?: boolean; isNew?: boolean
}

const difficultyMap: Record<Difficulty, string> = {
  Beginner:     "bg-brand-green/10 text-brand-green",
  Intermediate: "bg-brand-blue/10 text-brand-blue",
  Advanced:     "bg-brand-purple/10 text-brand-purple",
}

const GUIDES: GuideCard[] = [
  { title: "Web Monetization Masterclass",        category: "Web Publishing",        description: "The complete guide to header bidding, AdX access, floor price optimization, and multi-demand monetization for web publishers.",            readTime: "18 min read", difficulty: "Intermediate", icon: Globe,     iconBg: "bg-brand-purple/10", iconColor: "text-brand-cyan",   href: "/resources/monetization-guides",                  trending: true },
  { title: "In-App Advertising Revenue Guide",    category: "App Publishing",        description: "From mediation setup to rewarded video strategy — everything you need to maximize eCPM on iOS and Android.",                               readTime: "22 min read", difficulty: "Intermediate", icon: Smartphone,iconBg: "bg-brand-blue/10",   iconColor: "text-brand-blue",   href: "/resources/app-monetization-guide"                               },
  { title: "CTV Monetization Playbook",           category: "Connected TV",          description: "Access premium CTV/OTT demand, structure your ad breaks, and reach the $25+ CPMs available in programmatic TV advertising.",               readTime: "15 min read", difficulty: "Advanced",     icon: Monitor,   iconBg: "bg-brand-cyan/10",   iconColor: "text-brand-cyan",   href: "/publisher-solutions/ctv-monetization"                           },
  { title: "Understanding CPM, RPM & eCPM",       category: "Publisher Fundamentals",description: "The metrics that matter in programmatic advertising — and how to use them to diagnose and improve your ad revenue.",                        readTime: "8 min read",  difficulty: "Beginner",     icon: BarChart2, iconBg: "bg-brand-green/10",  iconColor: "text-brand-green",  href: "/resources/rpm-optimization"                                     },
  { title: "AI-Powered Floor Price Optimization", category: "AI & Optimization",     description: "How machine learning determines the right reserve price for every impression — and why it outperforms manual floors.",                      readTime: "12 min read", difficulty: "Advanced",     icon: Zap,       iconBg: "bg-brand-violet/10", iconColor: "text-brand-violet", href: "/publisher-solutions/ai-ad-optimization",          trending: true },
  { title: "Growing AdSense Revenue",             category: "AdSense & AdX",         description: "Proven tactics for maximizing AdSense performance — and recognizing when it's time to upgrade to AdX for 2–4x higher CPMs.",               readTime: "10 min read", difficulty: "Beginner",     icon: TrendingUp,iconBg: "bg-brand-blue/10",   iconColor: "text-brand-blue",   href: "/resources/adsense-vs-adx"                                       },
  { title: "Google AdX Requirements Guide",       category: "Google AdX",            description: "Traffic thresholds, content requirements, policy rules, and the step-by-step approval process for Google AdX access.",                      readTime: "10 min read", difficulty: "Intermediate", icon: BarChart3, iconBg: "bg-brand-purple/10", iconColor: "text-brand-purple", href: "/resources/google-adx-requirements",               isNew: true },
  { title: "Header Bidding Explained",            category: "Web Publishing",        description: "How header bidding beats waterfall auctions, why it delivers 20–40% more RPM, and how to implement it correctly.",                          readTime: "12 min read", difficulty: "Intermediate", icon: BarChart2, iconBg: "bg-brand-blue/10",   iconColor: "text-brand-blue",   href: "/resources/header-bidding-guide",                  isNew: true },
  { title: "App Monetization Checklist",          category: "App Publishing",        description: "Complete pre-launch and optimization checklist for iOS and Android publishers — from SDK setup to eCPM maximization.",                       readTime: "8 min read",  difficulty: "Beginner",     icon: Smartphone,iconBg: "bg-brand-cyan/10",   iconColor: "text-brand-cyan",   href: "/resources/app-monetization-checklist",            isNew: true },
  { title: "Google Publisher Policy Checklist",   category: "Policy & Compliance",   description: "A plain-language checklist of Google's content, traffic, and ad implementation policies. Stay compliant and protect your account.",          readTime: "7 min read",  difficulty: "Beginner",     icon: Shield,    iconBg: "bg-brand-green/10",  iconColor: "text-brand-green",  href: "/resources/google-publisher-policy-checklist",     isNew: true },
  { title: "SEO Traffic Growth Playbook",         category: "SEO & Traffic",         description: "How publishers grow organic traffic that converts to ad revenue — technical SEO, content strategy, and Core Web Vitals fundamentals.",        readTime: "15 min read", difficulty: "Intermediate", icon: Search,    iconBg: "bg-brand-blue/10",   iconColor: "text-brand-blue",   href: "/resources/seo-traffic-growth",                    isNew: true },
  { title: "Why Your RPM Is Low",                 category: "Publisher Fundamentals",description: "Six proven causes of low publisher RPM and the exact steps to diagnose and fix each one to recover lost ad revenue.",                        readTime: "9 min read",  difficulty: "Beginner",     icon: TrendingUp,iconBg: "bg-brand-violet/10", iconColor: "text-brand-violet", href: "/resources/rpm-optimization",                      trending: true },
]

export function MonetizationGuidesPage() {
  return (
    <>
      <Section background="hero" padding="none" aria-label="Monetization guides hero"
        className="pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden"
      >
        <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.12} animate className="-top-32 left-1/4" />
        <GradientOrb color="blue"   size="xl"  blur="2xl" opacity={0.08}        className="top-0 right-0" />
        <Container>
          <motion.div variants={stagger} initial="hidden" animate="visible"
            className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto"
          >
            <motion.span variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple"
            >
              <BookOpen aria-hidden="true" className="w-3.5 h-3.5" />
              Publisher Resource Hub
            </motion.span>
            <motion.h1 variants={fadeUp}
              className="text-h2 sm:text-h1 md:text-display font-bold text-text-primary tracking-display text-balance leading-tight"
            >
              Monetization{" "}
              <GradientText gradient="brand">Guides & Playbooks</GradientText>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-body-lg text-text-secondary text-pretty leading-relaxed max-w-2xl">
              In-depth guides written by ad-tech practitioners — not generic content. Learn how to maximize revenue across every publisher format.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      <Section background="base" padding="lg" aria-label="Guide library">
        <GradientOrb color="cyan" size="xl" blur="2xl" opacity={0.07} className="top-0 left-0" />
        <Container>
          <SectionHeader
            badge="All Guides"
            heading={<>Learn from the <GradientText gradient="cyan">Experts</GradientText></>}
            subtext="Each guide covers real-world tactics used by the top-performing publishers in our network."
            align="center" subtextWidth="md" className="mb-12"
          />
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {GUIDES.map((g, i) => (
              <Link key={g.title} href={g.href} aria-label={`Read: ${g.title}`}>
                <motion.article custom={i} variants={cardVariant}
                  initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                  whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
                  className="glass-strong rounded-2xl p-6 border border-brand-purple/[0.10] flex flex-col gap-4 relative overflow-hidden group cursor-pointer h-full"
                  style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}
                >
                  <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
                  <div className="flex items-start justify-between gap-3">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0", g.iconBg)}>
                      <g.icon aria-hidden="true" className={cn("w-5 h-5", g.iconColor)} />
                    </div>
                    <div className="flex items-center gap-2 flex-wrap justify-end">
                      {g.isNew     && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue">New</span>}
                      {g.trending  && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-green/10 text-brand-green">Trending</span>}
                      <span className={cn("text-[10px] font-semibold px-2 py-0.5 rounded-full", difficultyMap[g.difficulty])}>{g.difficulty}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">{g.category}</p>
                    <h3 className="text-sm font-bold text-text-primary leading-snug group-hover:text-brand-purple transition-colors duration-200">{g.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{g.description}</p>
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-brand-purple/[0.08]">
                    <span className="flex items-center gap-1.5 text-[11px] text-text-muted">
                      <Clock aria-hidden="true" className="w-3.5 h-3.5" />
                      {g.readTime}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-brand-purple group-hover:gap-2 transition-all duration-200">
                      Read Guide <ArrowRight aria-hidden="true" className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </motion.article>
              </Link>
            ))}
          </motion.div>
        </Container>
      </Section>

      <SolutionCTA
        heading="Want a Personalized Monetization Review?"
        subheading="Our team reviews your current setup and identifies exactly where revenue is being left on the table."
        badge="Free Revenue Audit"
        robotVariant="rocket"
      />
    </>
  )
}
