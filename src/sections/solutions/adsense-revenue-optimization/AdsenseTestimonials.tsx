"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, BarChart2, TrendingUp } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientText } from "@/components/shared/GradientText"
import { CountUp } from "@/components/motion/CountUp"

interface UpgradeStory {
  quote: string; name: string; role: string; company: string
  rpmBefore: number; rpmAfter: number; upliftPct: number
  metricLabel: string; vertical: string; initials: string
  accentBg: string; accentText: string; accentGlow: string
}

const STORIES: UpgradeStory[] = [
  { quote: "I'd been on AdSense since 2015 and thought $2.40 RPM was just the ceiling. Click Dudes showed me I was wrong. Within 45 days I was averaging $6.80 RPM — nearly 3× for the same traffic.", name: "Helen T.", role: "Independent Publisher", company: "RecipeJoy.com", rpmBefore: 2.40, rpmAfter: 6.80, upliftPct: 183, metricLabel: "RPM", vertical: "Food & Recipe", initials: "HT", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple", accentGlow: "rgba(139,92,246,0.12)" },
  { quote: "AdSense has a CPM ceiling that independent publishers never break through. Click Dudes brought premium demand that simply doesn't exist in Google's ecosystem — finance brands paying $12–18 CPMs.", name: "Robert K.", role: "Blog Owner", company: "PersonalFinance101", rpmBefore: 3.20, rpmAfter: 9.80, upliftPct: 206, metricLabel: "RPM", vertical: "Personal Finance", initials: "RK", accentBg: "bg-brand-blue/10", accentText: "text-brand-blue", accentGlow: "rgba(96,165,250,0.12)" },
  { quote: "The comparison report at onboarding was humbling. We were monetizing at 31% of potential. Now we're at 78%. The improvement was immediate and significant.", name: "Amy W.", role: "Site Owner", company: "MomLifeAdvice", rpmBefore: 1.80, rpmAfter: 4.90, upliftPct: 172, metricLabel: "RPM", vertical: "Parenting & Family", initials: "AW", accentBg: "bg-brand-green/10", accentText: "text-brand-green", accentGlow: "rgba(16,185,129,0.12)" },
  { quote: "Travel brands — airlines, hotels, OTAs — started bidding for my audience. CPMs are 4–7× higher from vertically relevant advertisers than from Google's demand pool alone.", name: "Carlos M.", role: "Travel Blogger", company: "WanderWide Blog", rpmBefore: 2.60, rpmAfter: 9.20, upliftPct: 254, metricLabel: "RPM", vertical: "Travel Content", initials: "CM", accentBg: "bg-brand-violet/10", accentText: "text-brand-violet", accentGlow: "rgba(168,85,247,0.12)" },
  { quote: "AdSense still runs as one demand partner in the stack — it wins when it bids highest. I kept the floor and added a ceiling. Best of both worlds without the risk.", name: "Sarah J.", role: "Content Creator", company: "FitnessFreq.com", rpmBefore: 2.10, rpmAfter: 5.80, upliftPct: 176, metricLabel: "RPM", vertical: "Health & Fitness", initials: "SJ", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple", accentGlow: "rgba(139,92,246,0.12)" },
  { quote: "Q4 last year I joined Click Dudes just before the holiday season. Revenue was 2.4× my previous Q4 record. The AI floor optimizer captured every dollar of holiday demand.", name: "Diane L.", role: "Lifestyle Publisher", company: "HomeDecorMaven", rpmBefore: 3.10, rpmAfter: 7.60, upliftPct: 145, metricLabel: "RPM", vertical: "Home Decor & Lifestyle", initials: "DL", accentBg: "bg-brand-blue/10", accentText: "text-brand-blue", accentGlow: "rgba(96,165,250,0.12)" },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 24, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function AdsenseTestimonials() {
  return (
    <Section background="white" padding="xl" aria-label="AdSense upgrade testimonials">
      <div aria-hidden="true" className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)" }} />

      <Container size="xl" className="relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple mb-5">
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            Publishers Who Upgraded
          </span>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-3">
            From AdSense Ceiling to <GradientText gradient="brand">Premium Stack</GradientText>
          </h2>
          <p className="text-body text-text-secondary max-w-lg mx-auto text-pretty">
            Publishers who moved beyond AdSense limits and started earning what their inventory is worth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STORIES.map((s, i) => (
            <motion.div key={s.name} custom={i} variants={cardVariants} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6, boxShadow: `0 20px 60px ${s.accentGlow}` }}
              className="rounded-3xl overflow-hidden flex flex-col cursor-default"
              style={{ background: "rgba(255,255,255,0.94)", border: "1px solid rgba(139,92,246,0.10)", boxShadow: "0 8px 40px rgba(7,17,47,0.06)" }}>

              {/* RPM before/after header */}
              <div className="px-5 pt-4 pb-3" style={{ background: "rgba(139,92,246,0.04)", borderBottom: "1px solid rgba(139,92,246,0.07)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <BarChart2 className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
                  <span className="text-[10px] font-bold text-brand-purple uppercase tracking-wide">Revenue Upgrade</span>
                  <span className="ml-auto text-[9px] text-text-muted">{s.vertical}</span>
                </div>

                {/* Before → After RPM */}
                <div className="flex items-center gap-3">
                  {/* Before */}
                  <div className="flex-1 text-center p-2 rounded-xl bg-text-muted/[0.06] border border-text-muted/10">
                    <p className="text-[8px] text-text-muted font-medium mb-0.5">AdSense RPM</p>
                    <p className="text-[16px] font-black text-text-muted/60 tabular-nums">${s.rpmBefore.toFixed(2)}</p>
                  </div>

                  {/* Arrow */}
                  <div className="flex flex-col items-center gap-0.5">
                    <ArrowUpRight className="w-4 h-4 text-brand-green" aria-hidden="true" />
                    <span className={`text-[9px] font-black ${s.accentText}`}>+{s.upliftPct}%</span>
                  </div>

                  {/* After */}
                  <div className={`flex-1 text-center p-2 rounded-xl ${s.accentBg} border`} style={{ borderColor: s.accentGlow }}>
                    <p className="text-[8px] text-text-muted font-medium mb-0.5">Click Dudes RPM</p>
                    <p className={`text-[16px] font-black tabular-nums ${s.accentText}`}>
                      $<CountUp end={s.rpmAfter} decimals={2} duration={1.8} />
                    </p>
                  </div>
                </div>

                {/* Uplift bar */}
                <div className="mt-2.5 h-1.5 rounded-full bg-brand-purple/[0.07] overflow-hidden">
                  <motion.div className={`h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-violet origin-left`}
                    style={{ width: `${Math.min(100, (s.rpmAfter / 12) * 100)}%` }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + i * 0.06, ease: [0.16,1,0.3,1] }} />
                </div>
              </div>

              {/* Quote */}
              <div className="px-5 py-4 flex-1">
                <blockquote className="text-[12px] text-text-secondary leading-relaxed">&ldquo;{s.quote}&rdquo;</blockquote>
              </div>

              {/* Author */}
              <div className="px-5 pb-4 pt-3 border-t border-brand-purple/[0.07] flex items-center gap-2.5">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${s.accentBg} ${s.accentText}`}>{s.initials}</div>
                <div>
                  <p className="text-[12px] font-bold text-text-primary leading-none">{s.name}</p>
                  <p className="text-[10px] text-text-muted mt-0.5">{s.role} · {s.company}</p>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <TrendingUp className="w-3 h-3 text-brand-green" aria-hidden="true" />
                  <span className={`text-[11px] font-black ${s.accentText}`}>+{s.upliftPct}%</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
