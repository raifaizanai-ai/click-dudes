import Link from "next/link"
import { CalculatorIcon, TrendingUp, ClipboardCheck, LayoutGrid, ShieldCheck, FileSearch, BarChart3, ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { FadeUp } from "@/components/motion/FadeUp"
import { GlassCard } from "@/components/shared/GlassCard"
import { cn } from "@/lib/utils"

interface ToolCard {
  icon: React.ElementType
  title: string
  description: string
  cta: string
  href: string
  iconBg: string
  iconColor: string
  badge?: string
}

const TOOLS: ToolCard[] = [
  {
    icon:       CalculatorIcon,
    title:      "Revenue Calculator",
    description: "Estimate your ad revenue potential based on traffic, geography, content vertical, and format mix.",
    cta:        "Try Calculator",
    href:       "/revenue-calculator",
    iconBg:     "bg-brand-purple/10",
    iconColor:  "text-brand-purple",
    badge:      "Interactive",
  },
  {
    icon:       TrendingUp,
    title:      "Revenue Lift Estimator",
    description: "See how much more you could earn switching from AdSense to a full managed AdX + Header Bidding stack.",
    cta:        "Estimate Lift",
    href:       "/revenue-calculator",
    iconBg:     "bg-brand-blue/10",
    iconColor:  "text-brand-blue",
  },
  {
    icon:       ClipboardCheck,
    title:      "Monetization Eligibility Checker",
    description: "Review the requirements and see whether your website, app, or CTV platform qualifies for premium demand.",
    cta:        "Check Eligibility",
    href:       "/publisher-solutions/monetization-eligibility-criteria",
    iconBg:     "bg-brand-violet/10",
    iconColor:  "text-brand-violet",
    badge:      "New",
  },
  {
    icon:       LayoutGrid,
    title:      "Ad Format Selector",
    description: "Compare all ad formats — banner, interstitial, rewarded video, native — and find the best fit for your platform.",
    cta:        "Explore Formats",
    href:       "/ad-formats",
    iconBg:     "bg-brand-cyan/10",
    iconColor:  "text-brand-cyan",
  },
  {
    icon:       ShieldCheck,
    title:      "Traffic Quality Checklist",
    description: "Run your traffic sources through our quality checklist before applying for premium monetization.",
    cta:        "View Checklist",
    href:       "/resources/google-publisher-policy-checklist",
    iconBg:     "bg-brand-green/10",
    iconColor:  "text-brand-green",
  },
  {
    icon:       FileSearch,
    title:      "Google Policy Checklist",
    description: "A publisher-friendly summary of Google's content, traffic, and ad implementation policies — in plain language.",
    cta:        "View Checklist",
    href:       "/resources/google-publisher-policy-checklist",
    iconBg:     "bg-brand-purple/10",
    iconColor:  "text-brand-purple",
  },
  {
    icon:       BarChart3,
    title:      "SEO Audit Checklist",
    description: "Technical and on-page SEO checklist to help publishers grow organic traffic that converts to ad revenue.",
    cta:        "Run Audit",
    href:       "/resources/seo-traffic-growth",
    iconBg:     "bg-brand-blue/10",
    iconColor:  "text-brand-blue",
    badge:      "New",
  },
]

export function ResourcesToolkit() {
  return (
    <Section background="section" padding="lg" aria-label="Publisher tools and calculators">
      <Container size="lg">
        <SectionHeader
          badge="Tools & Calculators"
          heading={<>Publisher Tools & <span className="text-gradient-brand">Utilities</span></>}
          subtext="Free tools to help you estimate revenue, check eligibility, select ad formats, and audit policy compliance."
          align="center"
          subtextWidth="md"
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {TOOLS.map((tool, i) => {
            const Icon = tool.icon
            return (
              <FadeUp key={tool.title} delay={i * 0.06}>
                <GlassCard variant="default" padding="md" hover rounded="2xl" className="h-full flex flex-col">
                  <div className="flex items-start justify-between mb-3">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0", tool.iconBg)}>
                      <Icon aria-hidden="true" className={cn("w-5 h-5", tool.iconColor)} />
                    </div>
                    {tool.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-purple/10 text-brand-purple">
                        {tool.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-sm font-bold text-text-primary mb-1.5">{tool.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed flex-1 mb-4">{tool.description}</p>

                  <Link
                    href={tool.href}
                    className="flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:gap-2.5 transition-all duration-200 group mt-auto"
                    aria-label={tool.cta}
                  >
                    {tool.cta}
                    <ArrowRight aria-hidden="true" className="w-3.5 h-3.5" />
                  </Link>
                </GlassCard>
              </FadeUp>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
