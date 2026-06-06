"use client"

import { motion } from "framer-motion"
import { Globe, CheckCircle2, ArrowRight, Search, TrendingUp, Zap, BarChart3 } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { SolutionCTA } from "@/components/marketing/SolutionCTA"
import { GlassCard } from "@/components/shared/GlassCard"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const fadeUp  = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } } }
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }

interface PlaybookSection { icon: React.ElementType; title: string; color: string; bg: string; items: string[] }

const PLAYBOOK: PlaybookSection[] = [
  {
    icon: Zap, title: "Technical SEO Foundations", color: "text-brand-purple", bg: "bg-brand-purple/10",
    items: [
      "Pass Core Web Vitals: LCP under 2.5s, INP under 200ms, CLS under 0.1",
      "Ensure HTTPS is enabled across all pages — this is also required for ad serving",
      "Submit XML sitemap to Google Search Console and verify all pages indexed",
      "Fix crawl errors, redirect chains, and broken internal links monthly",
      "Use structured data (Article, HowTo, FAQ schema) for enhanced search visibility",
      "Set canonical tags correctly — especially important for paginated or filtered content",
    ],
  },
  {
    icon: Search, title: "Content Strategy for Publishers", color: "text-brand-blue", bg: "bg-brand-blue/10",
    items: [
      "Target long-tail keywords with commercial or informational intent relevant to your niche",
      "Write at least 1,200 words of original, well-researched content per article",
      "Update existing content annually — freshness signals improve rankings and CTR",
      "Cover topics comprehensively — use related terms, FAQs, and comparison tables",
      "Optimize meta titles (50–60 chars) and meta descriptions (120–155 chars) for each page",
      "Use descriptive image alt text — images appear in Google Search and drive discovery traffic",
    ],
  },
  {
    icon: Globe, title: "Traffic Quality for Monetization", color: "text-brand-cyan", bg: "bg-brand-cyan/10",
    items: [
      "Prioritize Tier-1 traffic: US, UK, CA, AU, Germany yield 3–8x more CPM than Tier-3",
      "Measure session duration and pages/session — engaged users deliver better viewability",
      "Avoid buying bulk traffic — it hurts both SEO and ad quality scores simultaneously",
      "Use Google Analytics to identify highest-RPM content segments and produce more of it",
      "Track organic traffic by content vertical — match content growth to high-CPM ad categories",
      "Reduce bounce rate with stronger internal linking and related content recommendations",
    ],
  },
  {
    icon: TrendingUp, title: "Growth & Authority Building", color: "text-brand-green", bg: "bg-brand-green/10",
    items: [
      "Build editorial backlinks from industry publications, podcasts, and resource pages",
      "Publish original research, data studies, or unique industry surveys to earn natural links",
      "Guest post on high-authority niche publications with real audience overlap",
      "Create content hubs (topic clusters) to signal authority on your core subjects",
      "Use social media to amplify content — traffic signals help SEO rankings",
      "Apply for Google News (for news publishers) — it unlocks Discover and news carousel traffic",
    ],
  },
]

const RPM_CORRELATION = [
  { geo: "United States", cpm: "$4.00 – $12.00+", tier: "Tier 1" },
  { geo: "United Kingdom", cpm: "$3.50 – $9.00",  tier: "Tier 1" },
  { geo: "Canada / Australia", cpm: "$3.00 – $8.00", tier: "Tier 1" },
  { geo: "Germany / Netherlands", cpm: "$2.50 – $7.00", tier: "Tier 1" },
  { geo: "Brazil / Mexico", cpm: "$0.80 – $2.50",  tier: "Tier 2" },
  { geo: "India / Southeast Asia", cpm: "$0.20 – $0.80", tier: "Tier 3" },
]

export function SeoTrafficGrowthPage() {
  return (
    <>
      <Section background="hero" padding="none" aria-label="SEO traffic growth hero" className="pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <GradientOrb color="blue"   size="2xl" blur="2xl" opacity={0.10} animate className="-top-24 left-1/3" />
        <GradientOrb color="purple" size="xl"  blur="2xl" opacity={0.08}        className="top-0 right-0" />
        <Container>
          <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple">
              <Globe aria-hidden="true" className="w-3.5 h-3.5" /> SEO & Traffic Growth
            </motion.span>
            <motion.h1 variants={fadeUp} className="text-h2 sm:text-h1 md:text-display font-bold text-text-primary tracking-display text-balance leading-tight">
              SEO Traffic Growth <GradientText gradient="brand">Playbook</GradientText>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-body-lg text-text-secondary text-pretty leading-relaxed max-w-2xl">
              How publishers grow organic traffic that converts to ad revenue — technical SEO, content strategy, Core Web Vitals, traffic quality, and authority building.
            </motion.p>
            <motion.div variants={stagger} className="flex flex-wrap justify-center gap-4 mt-2">
              {["Technical SEO", "Content Strategy", "Core Web Vitals", "Traffic Quality", "Link Building"].map((tag) => (
                <motion.span key={tag} variants={fadeUp} className="text-xs font-semibold px-3 py-1.5 rounded-full glass border border-brand-purple/[0.12] text-text-secondary">{tag}</motion.span>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section background="base" padding="lg" aria-label="SEO playbook">
        <Container size="lg">
          <SectionHeader badge="The Playbook" heading={<>Four Pillars of <GradientText gradient="brand">Publisher SEO Growth</GradientText></>} subtext="Each pillar covers a distinct area. Work through all four for compounding traffic and revenue growth." align="center" subtextWidth="md" className="mb-12" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PLAYBOOK.map((section, si) => {
              const Icon = section.icon
              return (
                <motion.div key={section.title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} style={{ transitionDelay: `${si * 0.1}s` }}>
                  <GlassCard variant="strong" padding="lg" rounded="2xl" className="h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0", section.bg)}>
                        <Icon aria-hidden="true" className={cn("w-4.5 h-4.5", section.color)} />
                      </div>
                      <h3 className="text-sm font-bold text-text-primary">{section.title}</h3>
                    </div>
                    <ul className="space-y-2.5">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-xs text-text-secondary leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                </motion.div>
              )
            })}
          </div>
        </Container>
      </Section>

      <Section background="section" padding="lg" aria-label="GEO and RPM correlation">
        <Container size="md">
          <SectionHeader badge="Traffic Quality" heading={<>GEO Mix & <GradientText gradient="cyan">CPM Impact</GradientText></>} subtext="Where your traffic comes from matters as much as how much traffic you have. Tier-1 traffic earns 5–15x more per impression." align="center" subtextWidth="md" className="mb-8" />
          <GlassCard variant="strong" padding="none" rounded="2xl" className="overflow-hidden">
            <div className="grid grid-cols-3 px-6 py-3 bg-surface-section border-b border-brand-purple/[0.08]">
              <span className="text-[10px] font-semibold text-text-muted uppercase tracking-widest">Geography</span>
              <span className="text-[10px] font-semibold text-text-muted uppercase tracking-widest text-center">Avg CPM Range</span>
              <span className="text-[10px] font-semibold text-text-muted uppercase tracking-widest text-right">Tier</span>
            </div>
            {RPM_CORRELATION.map((row, i) => (
              <motion.div key={row.geo} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-20px" }} style={{ transitionDelay: `${i * 0.05}s` }}
                className={cn("grid grid-cols-3 items-center px-6 py-3.5 gap-4", i < RPM_CORRELATION.length - 1 && "border-b border-brand-purple/[0.06]")}>
                <span className="text-sm text-text-primary font-medium">{row.geo}</span>
                <span className={cn("text-sm text-center font-semibold", i < 2 ? "text-brand-green" : i < 4 ? "text-brand-blue" : "text-text-muted")}>{row.cpm}</span>
                <span className={cn("text-xs text-right font-bold", i < 4 ? "text-brand-purple" : "text-text-muted")}>{row.tier}</span>
              </motion.div>
            ))}
          </GlassCard>
          <p className="text-xs text-text-muted text-center mt-3">CPM ranges vary by content vertical, ad format, seasonality, and monetization setup. These are illustrative averages.</p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/about/contact-us" className={cn(buttonVariants({ variant: "primary", size: "lg" }), "group")}>
              Get SEO + Monetization Review <ArrowRight aria-hidden="true" className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link href="/services/seo-services" className={buttonVariants({ variant: "secondary", size: "lg" })}>
              <BarChart3 aria-hidden="true" className="w-4 h-4" /> SEO Services
            </Link>
          </div>
        </Container>
      </Section>

      <SolutionCTA heading="Grow Traffic. Grow Revenue." subheading="Our SEO and monetization teams work together to grow your audience and ensure it earns at its maximum potential." badge="SEO + Monetization" robotVariant="rocket" primaryCTA={{ label: "Get a Free Growth Review", href: "/about/contact-us" }} />
    </>
  )
}
