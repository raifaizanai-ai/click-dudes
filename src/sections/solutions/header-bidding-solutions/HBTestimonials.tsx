"use client"

import { motion } from "framer-motion"
import { Layers, ChevronUp, TrendingUp } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientText } from "@/components/shared/GradientText"
import { LiveDot } from "@/components/shared/LiveDot"

interface HBStory {
  quote: string; name: string; role: string; company: string
  metric: string; vertical: string; initials: string
  accentBg: string; accentText: string
  dspsBefore: number; dspsAfter: number; bidDensity: number
  dsps: { name: string; pct: number }[]
}

const STORIES: HBStory[] = [
  { quote: "We switched from client-side Prebid to Click Dudes' server-side infrastructure. Page load times improved 380ms, Core Web Vitals passed for the first time, and CPMs went up 31%.", name: "Ryan C.", role: "CTO", company: "AutoReview Central", metric: "+31% CPM", vertical: "Automotive Media", initials: "RC", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple", dspsBefore: 4, dspsAfter: 18, bidDensity: 6.8, dsps: [{ name: "Google", pct: 88 }, { name: "The Trade Desk", pct: 74 }, { name: "Amazon DSP", pct: 65 }, { name: "OpenX", pct: 58 }] },
  { quote: "We had 4 demand partners in our old waterfall. Click Dudes deployed 18 in a unified auction. Bid density went from 1.2 to 6.8 bids per impression — RPM nearly doubled.", name: "Michelle K.", role: "Head of Revenue", company: "FoodieWorld", metric: "6.8× bid density", vertical: "Food & Recipe", initials: "MK", accentBg: "bg-brand-blue/10", accentText: "text-brand-blue", dspsBefore: 4, dspsAfter: 18, bidDensity: 6.8, dsps: [{ name: "Google AdX", pct: 92 }, { name: "Index Exchange", pct: 78 }, { name: "Magnite", pct: 71 }, { name: "PubMatic", pct: 63 }] },
  { quote: "The AI bid floor optimization was the piece I hadn't seen before. Instead of a static floor, the system learns the right floor for each placement at each hour. I catch high-value moments I would have missed.", name: "Victor S.", role: "Publisher Manager", company: "TechReview Weekly", metric: "Dynamic floor AI", vertical: "Technology News", initials: "VS", accentBg: "bg-brand-green/10", accentText: "text-brand-green", dspsBefore: 6, dspsAfter: 22, bidDensity: 8.2, dsps: [{ name: "DV360", pct: 85 }, { name: "Yahoo DSP", pct: 70 }, { name: "Criteo", pct: 62 }, { name: "Xandr", pct: 54 }] },
  { quote: "Our sports site has massive spikes during live events. The previous setup would timeout. Click Dudes' server-side architecture handled a 40× traffic spike without a single timeout.", name: "Alex D.", role: "VP Technology", company: "LiveScore Pulse", metric: "Zero timeouts at 40×", vertical: "Sports Media", initials: "AD", accentBg: "bg-brand-violet/10", accentText: "text-brand-violet", dspsBefore: 5, dspsAfter: 20, bidDensity: 7.4, dsps: [{ name: "Freewheel", pct: 80 }, { name: "SpotX", pct: 72 }, { name: "Sovrn", pct: 64 }, { name: "TripleLift", pct: 55 }] },
  { quote: "Identity resolution through the header bidding layer let us monetize logged-out users effectively. Premium advertisers pay 3× more for matched impressions vs unmatched.", name: "Aisha N.", role: "Senior Ad Tech Lead", company: "HealthJourney Media", metric: "3× matched CPM", vertical: "Health & Wellness", initials: "AN", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple", dspsBefore: 3, dspsAfter: 16, bidDensity: 5.9, dsps: [{ name: "LiveRamp", pct: 90 }, { name: "TradeDesk", pct: 76 }, { name: "Amazon", pct: 68 }, { name: "Lotame", pct: 52 }] },
  { quote: "The bid analytics dashboard revealed our finance content generated 2.8× higher CPMs between 10am–2pm on weekdays. We restructured our publishing schedule around those insights.", name: "Tom L.", role: "Revenue Analyst", company: "InvestorInsider", metric: "2.8× time-slot CPM", vertical: "Investment Media", initials: "TL", accentBg: "bg-brand-green/10", accentText: "text-brand-green", dspsBefore: 4, dspsAfter: 15, bidDensity: 6.1, dsps: [{ name: "Google PG", pct: 94 }, { name: "Bloomberg", pct: 81 }, { name: "Verizon", pct: 67 }, { name: "Rubicon", pct: 59 }] },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 20, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.55, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function HBTestimonials() {
  return (
    <Section background="base" padding="xl" aria-label="Header bidding publisher testimonials">
      <div aria-hidden="true" className="absolute top-0 right-1/4 w-[500px] h-[350px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)" }} />

      <Container size="xl" className="relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple mb-5">
            <Layers className="w-3.5 h-3.5" aria-hidden="true" />
            Publisher Bid Stories
          </span>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-3">
            More Bidders. Higher CPMs. <GradientText gradient="violet">Every Impression.</GradientText>
          </h2>
          <p className="text-body text-text-secondary max-w-lg mx-auto text-pretty">
            Publishers who replaced waterfall with Click Dudes&rsquo; server-side unified auction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {STORIES.map((s, i) => (
            <motion.div key={s.name} custom={i} variants={cardVariants} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6 }}
              className="rounded-3xl overflow-hidden flex flex-col cursor-default"
              style={{ background: "rgba(255,255,255,0.94)", border: "1px solid rgba(139,92,246,0.10)", boxShadow: "0 8px 40px rgba(7,17,47,0.06)" }}>

              {/* Auction competition header */}
              <div className="px-4 pt-4 pb-3" style={{ background: "rgba(139,92,246,0.04)", borderBottom: "1px solid rgba(139,92,246,0.07)" }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
                    <span className="text-[10px] font-bold text-brand-purple">Bid Competition</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[9px] text-text-muted">{s.dspsBefore} → {s.dspsAfter} DSPs</span>
                    <LiveDot color="purple" size="sm" />
                  </div>
                </div>

                {/* DSP competition bars */}
                <div className="space-y-1.5">
                  {s.dsps.map(({ name, pct }, di) => (
                    <div key={name} className="flex items-center gap-2">
                      <span className="text-[9px] text-text-muted w-20 truncate">{name}</span>
                      <div className="flex-1 h-1.5 rounded-full bg-brand-purple/[0.07] overflow-hidden">
                        <motion.div className="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-violet origin-left"
                          style={{ width: `${pct}%` }}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.6, delay: 0.3 + di * 0.08, ease: [0.16,1,0.3,1] }} />
                      </div>
                      <span className="text-[9px] font-bold text-brand-purple w-6 text-right">{pct}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-2 flex items-center gap-1">
                  <ChevronUp className="w-3 h-3 text-brand-green" aria-hidden="true" />
                  <span className="text-[10px] font-black text-brand-purple">{s.bidDensity}× bid density</span>
                  <TrendingUp className="w-3 h-3 text-brand-green ml-auto" aria-hidden="true" />
                  <span className={`text-[10px] font-black ${s.accentText}`}>{s.metric}</span>
                </div>
              </div>

              {/* Quote */}
              <div className="px-4 py-4 flex-1">
                <blockquote className="text-[12px] text-text-secondary leading-relaxed">&ldquo;{s.quote}&rdquo;</blockquote>
              </div>

              {/* Author */}
              <div className="px-4 pb-4 pt-3 border-t border-brand-purple/[0.07] flex items-center gap-2.5">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${s.accentBg} ${s.accentText}`}>{s.initials}</div>
                <div>
                  <p className="text-[12px] font-bold text-text-primary leading-none">{s.name}</p>
                  <p className="text-[10px] text-text-muted mt-0.5">{s.role} · {s.company}</p>
                  <p className="text-[9px] text-text-muted/70 mt-0.5">{s.vertical}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
