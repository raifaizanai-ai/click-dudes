"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion } from "framer-motion"
import { Search, TrendingUp, ChevronLeft, ChevronRight, Target, Zap } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientText } from "@/components/shared/GradientText"
import { CountUp } from "@/components/motion/CountUp"

interface GAdsStory {
  quote: string; name: string; role: string; company: string
  campaignType: string; qualityScore: number
  roasBefore: number; roasAfter: number
  ctr: number; cpcDrop: number
  vertical: string; initials: string
  accentBg: string; accentText: string
}

const STORIES: GAdsStory[] = [
  { quote: "We were burning $6,000/month with 2.1x ROAS. ClickDudes restructured our search campaigns with intent-based ad groups, and ROAS jumped to 8.4x in 90 days. Same budget — four times the return.", name: "Marcus T.", role: "CMO", company: "SolarEdge Pro", campaignType: "Search + PMax", qualityScore: 9, roasBefore: 2.1, roasAfter: 8.4, ctr: 8.2, cpcDrop: 44, vertical: "Renewable Energy", initials: "MT", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple" },
  { quote: "Quality Scores were averaging 4/10. ClickDudes rewrote our ad copy and aligned landing pages to each ad group. Within 30 days: Quality Score 9/10, CPC dropped 51%, conversions doubled.", name: "Rachel S.", role: "Marketing Director", company: "LexPro Legal", campaignType: "Search Campaigns", qualityScore: 9, roasBefore: 1.8, roasAfter: 5.6, ctr: 7.4, cpcDrop: 51, vertical: "Legal Services", initials: "RS", accentBg: "bg-brand-blue/10", accentText: "text-brand-blue" },
  { quote: "Performance Max was a black box for us. ClickDudes set up proper asset groups, excluded branded terms, and fed it clean conversion data. Our ROAS went from 3.2 to 11.8x in 60 days.", name: "Dev P.", role: "Founder & CEO", company: "FitGear Direct", campaignType: "Performance Max", qualityScore: 8, roasBefore: 3.2, roasAfter: 11.8, ctr: 9.1, cpcDrop: 38, vertical: "eCommerce / Fitness", initials: "DP", accentBg: "bg-brand-green/10", accentText: "text-brand-green" },
  { quote: "YouTube pre-roll for our SaaS felt impossible. ClickDudes built a full-funnel YouTube + Search remarketing strategy. Demo requests increased 340% within two months.", name: "Nina V.", role: "VP Growth", company: "CloudSync SaaS", campaignType: "YouTube + Search", qualityScore: 8, roasBefore: 2.6, roasAfter: 7.1, ctr: 6.8, cpcDrop: 35, vertical: "B2B SaaS", initials: "NV", accentBg: "bg-brand-violet/10", accentText: "text-brand-violet" },
  { quote: "We had zero conversion tracking. No idea which campaigns made money. ClickDudes set up GA4 + Google Ads conversion pipeline, uncovered that 80% of our spend was going to zero-converting keywords.", name: "Tom R.", role: "Operations Manager", company: "HomeCare Network", campaignType: "Search + Tracking", qualityScore: 9, roasBefore: 1.4, roasAfter: 6.2, ctr: 7.9, cpcDrop: 48, vertical: "Home Services", initials: "TR", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple" },
  { quote: "Local service ads were underperforming. ClickDudes added location bid adjustments, ad scheduling for peak hours, and call-only ads for mobile. Our lead cost dropped from $48 to $14.", name: "Sarah W.", role: "Clinic Director", company: "ClearSkin Clinics", campaignType: "Local + Call Ads", qualityScore: 9, roasBefore: 2.0, roasAfter: 9.4, ctr: 8.6, cpcDrop: 58, vertical: "Healthcare & Aesthetics", initials: "SW", accentBg: "bg-brand-blue/10", accentText: "text-brand-blue" },
]

const CARD_W = 340
const GAP    = 16
const AUTOPLAY = 4200

export function GoogleAdsTestimonials() {
  const [idx, setIdx]       = useState(0)
  const [paused, setPaused] = useState(false)
  const [perView, setPerView] = useState(3)
  const ref = useRef<HTMLDivElement>(null)
  const max = Math.max(0, STORIES.length - perView)

  const measure = useCallback(() => {
    if (!ref.current) return
    setPerView(Math.max(1, Math.floor((ref.current.offsetWidth + GAP) / (CARD_W + GAP))))
  }, [])

  useEffect(() => { measure(); const ro = new ResizeObserver(measure); if (ref.current) ro.observe(ref.current); return () => ro.disconnect() }, [measure])
  useEffect(() => { setIdx(i => Math.min(i, Math.max(0, STORIES.length - perView))) }, [perView])
  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIdx(i => i >= max ? 0 : i + 1), AUTOPLAY)
    return () => clearInterval(t)
  }, [paused, max])

  const go = (n: number) => setIdx(Math.max(0, Math.min(max, n)))

  return (
    <Section background="white" padding="xl" aria-label="Google Ads client results">
      <div aria-hidden="true" className="absolute top-0 left-1/3 w-[500px] h-[350px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(96,165,250,0.08) 0%, transparent 70%)" }} />

      <Container size="xl" className="relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-blue/20 text-xs font-semibold tracking-widest uppercase text-brand-blue mb-5">
            <Search className="w-3.5 h-3.5" aria-hidden="true" />
            Campaign Results
          </span>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-3">
            Google Ads Wins from <GradientText gradient="brand">Real Clients</GradientText>
          </h2>
          <p className="text-body text-text-secondary max-w-lg mx-auto text-pretty">
            Businesses that turned wasted ad spend into predictable, scalable revenue through ClickDudes&rsquo; Google Ads management.
          </p>
        </div>

        <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {idx > 0 && (
            <button onClick={() => go(idx - 1)} aria-label="Previous"
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-strong border border-brand-blue/15 flex items-center justify-center hover:border-brand-blue/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40">
              <ChevronLeft className="w-5 h-5 text-brand-blue" aria-hidden="true" />
            </button>
          )}
          {idx < max && (
            <button onClick={() => go(idx + 1)} aria-label="Next"
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-strong border border-brand-blue/15 flex items-center justify-center hover:border-brand-blue/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40">
              <ChevronRight className="w-5 h-5 text-brand-blue" aria-hidden="true" />
            </button>
          )}

          <div ref={ref} className="overflow-hidden">
            <motion.div className="flex" style={{ gap: GAP }}
              animate={{ x: -idx * (CARD_W + GAP) }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
              {STORIES.map((s, i) => (
                <motion.div key={s.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="flex-shrink-0 rounded-3xl overflow-hidden flex flex-col cursor-default"
                  style={{ width: CARD_W, background: "rgba(255,255,255,0.96)", border: "1px solid rgba(96,165,250,0.13)", boxShadow: "0 8px 40px rgba(7,17,47,0.06)" }}>

                  {/* Campaign header */}
                  <div className="px-5 pt-4 pb-3" style={{ background: "linear-gradient(135deg, rgba(96,165,250,0.07) 0%, rgba(139,92,246,0.04) 100%)", borderBottom: "1px solid rgba(96,165,250,0.09)" }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <Target className="w-3.5 h-3.5 text-brand-blue" aria-hidden="true" />
                        <span className="text-[10px] font-bold text-brand-blue">{s.campaignType}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Zap className="w-3 h-3 text-brand-green" aria-hidden="true" />
                        <span className="text-[9px] font-black text-brand-green">QS {s.qualityScore}/10</span>
                      </div>
                    </div>

                    {/* ROAS comparison */}
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="text-center">
                        <p className="text-[8px] text-text-muted">Before ROAS</p>
                        <p className="text-[16px] font-black text-text-muted/50 tabular-nums">{s.roasBefore}×</p>
                      </div>
                      <TrendingUp className="w-4 h-4 text-brand-green shrink-0" aria-hidden="true" />
                      <div className="text-center">
                        <p className="text-[8px] text-text-muted">ROAS After</p>
                        <p className={`text-[22px] font-black tabular-nums leading-none ${s.accentText}`}>
                          <CountUp end={s.roasAfter} decimals={1} duration={1.6} />×
                        </p>
                      </div>
                      <div className="ml-auto text-right">
                        <p className="text-[8px] text-text-muted">CTR</p>
                        <p className="text-[13px] font-black text-brand-green">{s.ctr}%</p>
                        <p className="text-[8px] text-text-muted mt-0.5">-{s.cpcDrop}% CPC</p>
                      </div>
                    </div>

                    {/* Campaign performance bar */}
                    <div className="h-1 rounded-full bg-brand-blue/[0.08] overflow-hidden">
                      <motion.div className="h-full rounded-full bg-gradient-to-r from-brand-blue to-brand-purple origin-left"
                        style={{ width: `${Math.min(100, (s.roasAfter / 14) * 100)}%` }}
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, delay: 0.3 + i * 0.06, ease: [0.16,1,0.3,1] }} />
                    </div>
                    <p className="text-[9px] text-text-muted mt-1.5">{s.vertical}</p>
                  </div>

                  <div className="px-5 py-4 flex-1">
                    <blockquote className="text-[12px] text-text-secondary leading-relaxed">&ldquo;{s.quote}&rdquo;</blockquote>
                  </div>

                  <div className="px-5 pb-4 pt-3 border-t border-brand-blue/[0.07] flex items-center gap-2.5">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${s.accentBg} ${s.accentText}`}>{s.initials}</div>
                    <div>
                      <p className="text-[12px] font-bold text-text-primary leading-none">{s.name}</p>
                      <p className="text-[10px] text-text-muted mt-0.5">{s.role} · {s.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button key={i} onClick={() => go(i)} aria-label={`Go to ${i + 1}`}
              className={`rounded-full transition-all duration-300 ${i === idx ? "w-6 h-2 bg-brand-blue" : "w-2 h-2 bg-brand-blue/25 hover:bg-brand-blue/50"}`} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
