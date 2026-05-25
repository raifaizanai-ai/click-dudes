"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion } from "framer-motion"
import { Megaphone, TrendingUp, ChevronLeft, ChevronRight, Users, RefreshCcw } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientText } from "@/components/shared/GradientText"
import { CountUp } from "@/components/motion/CountUp"

interface MetaStory {
  quote: string; name: string; role: string; company: string
  adType: string; roasBefore: number; roasAfter: number
  cplDrop: number; reach: string
  vertical: string; initials: string
  accentBg: string; accentText: string
}

const STORIES: MetaStory[] = [
  { quote: "Our CPL was $68 and tanking. ClickDudes rebuilt our audience segmentation, created 6 ad creative variants, and let Meta's algorithm find winners. CPL dropped to $18 — 73% improvement — in 5 weeks.", name: "Isabelle K.", role: "Marketing Lead", company: "LuxRental Homes", adType: "Lead Generation", roasBefore: 1.9, roasAfter: 7.4, cplDrop: 73, reach: "2.4M", vertical: "Real Estate", initials: "IK", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple" },
  { quote: "Retargeting was non-existent. ClickDudes built a 3-stage retargeting funnel — site visitors, video viewers, cart abandoners — each with custom creative. Our abandoned cart recovery rate hit 34%.", name: "Jordan F.", role: "eCommerce Director", company: "NordBloom", adType: "Retargeting Funnel", roasBefore: 2.4, roasAfter: 9.2, cplDrop: 58, reach: "1.8M", vertical: "Fashion & Lifestyle", initials: "JF", accentBg: "bg-brand-blue/10", accentText: "text-brand-blue" },
  { quote: "We thought Meta Ads were too expensive for B2B SaaS. ClickDudes proved otherwise — LinkedIn-level targeting using Meta's job title data, converting at 6.8% vs our previous 1.1%.", name: "Claire N.", role: "Growth Manager", company: "SaaSFlow.io", adType: "B2B Campaigns", roasBefore: 1.4, roasAfter: 5.8, cplDrop: 62, reach: "850k", vertical: "B2B SaaS", initials: "CN", accentBg: "bg-brand-green/10", accentText: "text-brand-green" },
  { quote: "Scaling from $2k/day to $10k/day always killed our ROAS. ClickDudes used campaign budget optimization with creative refresh cycles and horizontal scaling. We held 5.8x ROAS at 5× the budget.", name: "Alex T.", role: "Founder", company: "VigoSupps", adType: "Scaling Strategy", roasBefore: 3.1, roasAfter: 5.8, cplDrop: 44, reach: "4.2M", vertical: "Health Supplements", initials: "AT", accentBg: "bg-brand-violet/10", accentText: "text-brand-violet" },
  { quote: "Video ads were something we avoided — too complex, too expensive. ClickDudes produced UGC-style video concepts that we filmed ourselves, then they managed everything. 4.2% CTR on video beats our static by 3×.", name: "Priya M.", role: "Brand Manager", company: "GlowMed Beauty", adType: "Video + UGC Ads", roasBefore: 2.2, roasAfter: 8.6, cplDrop: 51, reach: "3.1M", vertical: "Beauty & Skincare", initials: "PM", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple" },
]

const CARD_W = 340
const GAP    = 16
const AUTOPLAY = 4000

export function MetaAdsTestimonials() {
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
    <Section background="base" padding="xl" aria-label="Meta Ads client results">
      <div aria-hidden="true" className="absolute top-0 right-1/3 w-[500px] h-[350px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />

      <Container size="xl" className="relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple mb-5">
            <Megaphone className="w-3.5 h-3.5" aria-hidden="true" />
            Meta Ads Results
          </span>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-3">
            Real ROAS from <GradientText gradient="brand">Real Campaigns</GradientText>
          </h2>
          <p className="text-body text-text-secondary max-w-lg mx-auto text-pretty">
            Brands that turned Meta ad spend into measurable, scalable revenue with ClickDudes managing every campaign layer.
          </p>
        </div>

        <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {idx > 0 && (
            <button onClick={() => go(idx - 1)} aria-label="Previous"
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-strong border border-brand-purple/15 flex items-center justify-center hover:border-brand-purple/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40">
              <ChevronLeft className="w-5 h-5 text-brand-purple" aria-hidden="true" />
            </button>
          )}
          {idx < max && (
            <button onClick={() => go(idx + 1)} aria-label="Next"
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-strong border border-brand-purple/15 flex items-center justify-center hover:border-brand-purple/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40">
              <ChevronRight className="w-5 h-5 text-brand-purple" aria-hidden="true" />
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
                  style={{ width: CARD_W, background: "rgba(255,255,255,0.95)", border: "1px solid rgba(139,92,246,0.11)", boxShadow: "0 8px 40px rgba(7,17,47,0.06)" }}>

                  {/* Ad Manager header */}
                  <div className="px-5 pt-4 pb-3" style={{ background: "rgba(139,92,246,0.04)", borderBottom: "1px solid rgba(139,92,246,0.07)" }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <Megaphone className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
                        <span className="text-[10px] font-bold text-brand-purple">{s.adType}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3 h-3 text-text-muted" aria-hidden="true" />
                        <span className="text-[9px] text-text-muted font-semibold">{s.reach} reach</span>
                      </div>
                    </div>

                    {/* ROAS metric + CPL drop */}
                    <div className="flex items-end gap-4 mb-2.5">
                      <div>
                        <p className="text-[8px] text-text-muted">Before ROAS</p>
                        <p className="text-[14px] font-black text-text-muted/50 tabular-nums">{s.roasBefore}×</p>
                      </div>
                      <TrendingUp className="w-4 h-4 text-brand-green mb-1 shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-[8px] text-text-muted">ROAS Now</p>
                        <p className={`text-[22px] font-black tabular-nums leading-none ${s.accentText}`}>
                          <CountUp end={s.roasAfter} decimals={1} duration={1.6} />×
                        </p>
                      </div>
                      <div className="ml-auto flex items-center gap-1">
                        <RefreshCcw className="w-3 h-3 text-brand-green" aria-hidden="true" />
                        <span className="text-[12px] font-black text-brand-green">-{s.cplDrop}% CPL</span>
                      </div>
                    </div>

                    <div className="h-1 rounded-full bg-brand-purple/[0.08] overflow-hidden">
                      <motion.div className="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-violet origin-left"
                        style={{ width: `${Math.min(100, (s.roasAfter / 12) * 100)}%` }}
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

                  <div className="px-5 pb-4 pt-3 border-t border-brand-purple/[0.07] flex items-center gap-2.5">
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
              className={`rounded-full transition-all duration-300 ${i === idx ? "w-6 h-2 bg-brand-purple" : "w-2 h-2 bg-brand-purple/25 hover:bg-brand-purple/50"}`} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
