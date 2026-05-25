"use client"

import { motion } from "framer-motion"
import { Star, Award, TrendingUp, Users } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { SolutionCTA } from "@/components/marketing/SolutionCTA"
import { cn } from "@/lib/utils"
import { STATS } from "@/lib/stats"

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

interface StatItem { value: string; label: string; color: string }
const PAGE_STATS: StatItem[] = [
  { value: STATS.publishers, label: "Publishers Monetizing",   color: "text-brand-blue"   },
  { value: "67%",            label: "Average Revenue Lift",    color: "text-brand-purple" },
  { value: "30 Days",        label: "Average Time to Results", color: "text-brand-violet" },
]

interface StoryCard {
  publisher: string; vertical: string; metric: string; lift: string
  quote: string; initials: string; accentBg: string; accentText: string; category: string
}
const STORIES: StoryCard[] = [
  { publisher: "TechInsight Daily",  vertical: "Technology News",  metric: "+84% RPM",      lift: "$3.20 → $5.89",    quote: "Switching from AdSense to Click Dudes was the single best business decision we made this year.",                        initials: "TD", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple", category: "Web"  },
  { publisher: "SportsPulse App",    vertical: "Sports & Fitness", metric: "+120% eCPM",    lift: "$1.40 → $3.08",    quote: "Rewarded video and interstitials through Click Dudes completely transformed our in-app revenue model.",              initials: "SP", accentBg: "bg-brand-blue/10",   accentText: "text-brand-blue",   category: "App"  },
  { publisher: "HomeLife Channel",   vertical: "Lifestyle CTV",    metric: "+195% CPM",     lift: "$6.20 → $18.30",   quote: "CTV demand was untapped for us until Click Dudes connected us to premium programmatic buyers.",                      initials: "HL", accentBg: "bg-brand-cyan/10",   accentText: "text-brand-purple",   category: "CTV"  },
  { publisher: "Finance Digest",     vertical: "Personal Finance", metric: "+217% CPM",     lift: "$1.20 → $3.80",    quote: "Private marketplace deals changed everything. AdSense could never unlock these premium finance buyers.",             initials: "FD", accentBg: "bg-brand-green/10",  accentText: "text-brand-green",  category: "AdX"  },
  { publisher: "TravelNomad Blog",   vertical: "Travel Content",   metric: "+68% Revenue",  lift: "Best month ever",  quote: "1.2M monthly visitors finally monetizing at their true worth. Click Dudes made it happen in under a month.",       initials: "TN", accentBg: "bg-brand-violet/10", accentText: "text-brand-violet", category: "Web"  },
  { publisher: "GameZone Mobile",    vertical: "Mobile Gaming",    metric: "+145% ARPU",    lift: "Full mediation",   quote: "Header bidding for mobile apps was something we thought was only for the big studios. Not anymore.",                initials: "GZ", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple", category: "App"  },
]

export function SuccessStoriesPage() {
  return (
    <>
      <Section background="hero" padding="none" aria-label="Success stories hero"
        className="pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden"
      >
        <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.13} animate className="-top-32 -left-32" />
        <GradientOrb color="cyan"   size="xl"  blur="2xl" opacity={0.09}        className="-top-16 right-0" />
        <Container>
          <motion.div variants={stagger} initial="hidden" animate="visible"
            className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto"
          >
            <motion.span variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple"
            >
              <Star aria-hidden="true" className="w-3.5 h-3.5" />
              Publisher Success Stories
            </motion.span>
            <motion.h1 variants={fadeUp}
              className="text-h2 sm:text-h1 md:text-display font-bold text-text-primary tracking-display text-balance leading-tight"
            >
              Real Publishers. <GradientText gradient="brand">Real Revenue.</GradientText>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-body-lg text-text-secondary text-pretty leading-relaxed max-w-2xl">
              How publishers across web, app, and CTV verticals grew their inventory revenue with Click Dudes.
            </motion.p>
            <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4 w-full">
              {PAGE_STATS.map((s) => (
                <motion.div key={s.label} variants={fadeUp}
                  className="glass-strong rounded-2xl p-4 border border-brand-purple/[0.10] flex flex-col items-center gap-1"
                >
                  <span className={cn("text-2xl font-bold tracking-tight", s.color)}>{s.value}</span>
                  <span className="text-xs text-text-muted text-center leading-tight">{s.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </Container>
      </Section>

      <Section background="base" padding="lg" aria-label="Publisher stories">
        <GradientOrb color="violet" size="xl" blur="2xl" opacity={0.07} className="top-0 right-0" />
        <Container>
          <SectionHeader
            badge="Case Studies"
            heading={<>Stories of <GradientText gradient="violet">Monetization Growth</GradientText></>}
            subtext="Every publisher here started exactly where you are — and reached results that changed their business."
            align="center" subtextWidth="md" className="mb-12"
          />
          <motion.div
            variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {STORIES.map((s, i) => (
              <motion.article key={s.publisher} custom={i} variants={cardVariant}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
                className="glass-strong rounded-2xl p-6 border border-brand-purple/[0.10] flex flex-col gap-4 relative overflow-hidden"
                style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}
              >
                <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
                <div className="flex items-center justify-between">
                  <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold", s.accentBg, s.accentText)}>
                    {s.initials}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={cn("text-xs font-bold px-3 py-1 rounded-full", s.accentBg, s.accentText)}>{s.metric}</span>
                    <span className="text-[10px] text-text-muted px-2 py-1 rounded-full bg-surface-section">{s.category}</span>
                  </div>
                </div>
                <blockquote className="text-sm text-text-secondary leading-relaxed flex-1">
                  &ldquo;{s.quote}&rdquo;
                </blockquote>
                <div className="pt-3 border-t border-brand-purple/[0.08]">
                  <p className="text-sm font-semibold text-text-primary">{s.publisher}</p>
                  <p className="text-[11px] text-text-muted mt-0.5">{s.vertical} · {s.lift}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </Container>
      </Section>

      <Section background="section" padding="sm" aria-label="Recognition">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {([
              { icon: Award,     color: "text-brand-purple", bg: "bg-brand-purple/10", title: "Google Certified Publishing Partner", sub: "Verified premium demand, direct AdX access"    },
              { icon: TrendingUp,color: "text-brand-blue",   bg: "bg-brand-blue/10",   title: "250+ Publishers Monetizing",           sub: "Across web, app, and CTV verticals"           },
              { icon: Users,     color: "text-brand-purple",   bg: "bg-brand-cyan/10",   title: "Dedicated Account Management",         sub: "Real humans, not just an algorithm"           },
            ] as const).map(({ icon: Icon, color, bg, title, sub }) => (
              <div key={title} className="flex items-center gap-4">
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0", bg)}>
                  <Icon aria-hidden="true" className={cn("w-6 h-6", color)} />
                </div>
                <div>
                  <p className="font-semibold text-text-primary">{title}</p>
                  <p className="text-sm text-text-muted">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <SolutionCTA
        heading="Ready to Write Your Success Story?"
        subheading="Join 250+ publishers who upgraded their monetization with Click Dudes and saw results within 30 days."
        robotVariant="celebrate"
      />
    </>
  )
}
