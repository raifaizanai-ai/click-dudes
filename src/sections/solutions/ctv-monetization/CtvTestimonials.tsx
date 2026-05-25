"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion } from "framer-motion"
import { Play, Tv2, ChevronLeft, ChevronRight, Signal } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientText } from "@/components/shared/GradientText"
import { LiveDot } from "@/components/shared/LiveDot"
import { CountUp } from "@/components/motion/CountUp"

interface CtvReview {
  quote: string; name: string; role: string; company: string
  metric: string; metricNum: number; metricSuffix: string; metricPrefix: string
  cpmBefore: number; cpmAfter: number; channel: string
  initials: string; accentBg: string; accentText: string
}

const REVIEWS: CtvReview[] = [
  { quote: "We launched a streaming documentary channel with zero ad monetization experience. Click Dudes set up our SSAI pipeline, connected us to 8 CTV DSPs, and we were live with $28 CPM pre-roll within 3 weeks.", name: "David H.", role: "Founder & CEO", company: "DocStream Network", metric: "$28 CPM", metricNum: 28, metricSuffix: " CPM", metricPrefix: "$", cpmBefore: 0, cpmAfter: 28, channel: "Documentary Streaming", initials: "DH", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple" },
  { quote: "Our FAST channel was monetizing at $12 CPM through a basic ad server. After Click Dudes implemented programmatic CTV with private marketplace deals, we're consistently hitting $38–42 CPM. That's a 3× revenue multiplier.", name: "Carla N.", role: "VP Revenue", company: "LifestyleTV+", metric: "+250% CPM", metricNum: 250, metricSuffix: "% CPM", metricPrefix: "+", cpmBefore: 12, cpmAfter: 40, channel: "FAST Channel", initials: "CN", accentBg: "bg-brand-blue/10", accentText: "text-brand-blue" },
  { quote: "Our pre-roll completion rate went from 71% to 92% after Click Dudes optimized ad pod length and positioning. Higher completion means higher CPMs — the flywheel effect is real.", name: "Marco B.", role: "Head of Ad Operations", company: "SportZone TV", metric: "92% completion", metricNum: 92, metricSuffix: "%", metricPrefix: "", cpmBefore: 18, cpmAfter: 34, channel: "Sports Streaming", initials: "MB", accentBg: "bg-brand-green/10", accentText: "text-brand-green" },
  { quote: "Click Dudes filled our remnant CTV inventory with programmatic demand at $18 average CPM — inventory that was previously earning zero. That additional revenue stream alone justified the partnership.", name: "Ingrid L.", role: "CRO", company: "Nordic Originals", metric: "$18 CPM remnant", metricNum: 18, metricSuffix: " CPM", metricPrefix: "$", cpmBefore: 0, cpmAfter: 18, channel: "SVOD/AVOD", initials: "IL", accentBg: "bg-brand-violet/10", accentText: "text-brand-violet" },
  { quote: "First-party data matching let brand advertisers target our cooking audience with 4× higher CPMs than cookie-based targeting. The precision of CTV demand is genuinely different.", name: "Yuna P.", role: "Publisher Director", company: "ChefStream Media", metric: "4× higher CPMs", metricNum: 4, metricSuffix: "×", metricPrefix: "", cpmBefore: 10, cpmAfter: 40, channel: "Culinary Streaming", initials: "YP", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple" },
  { quote: "Pause ads were a revelation. Within 60 days, pause ads contributed 18% of our total CTV revenue at $32 CPM. Zero disruption to viewing experience.", name: "Sam T.", role: "VP Monetization", company: "BingeDrop Media", metric: "18% from pause ads", metricNum: 32, metricSuffix: " CPM", metricPrefix: "$", cpmBefore: 0, cpmAfter: 32, channel: "General Entertainment", initials: "ST", accentBg: "bg-brand-green/10", accentText: "text-brand-green" },
]

const CARD_W = 360
const GAP    = 16
const AUTOPLAY = 4200

export function CtvTestimonials() {
  const [idx, setIdx]       = useState(0)
  const [paused, setPaused] = useState(false)
  const [perView, setPerView] = useState(3)
  const ref = useRef<HTMLDivElement>(null)
  const max = Math.max(0, REVIEWS.length - perView)

  const measure = useCallback(() => {
    if (!ref.current) return
    setPerView(Math.max(1, Math.floor((ref.current.offsetWidth + GAP) / (CARD_W + GAP))))
  }, [])

  useEffect(() => { measure(); const ro = new ResizeObserver(measure); if (ref.current) ro.observe(ref.current); return () => ro.disconnect() }, [measure])
  useEffect(() => { setIdx(i => Math.min(i, Math.max(0, REVIEWS.length - perView))) }, [perView])
  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIdx(i => i >= max ? 0 : i + 1), AUTOPLAY)
    return () => clearInterval(t)
  }, [paused, max])

  const go = (n: number) => setIdx(Math.max(0, Math.min(max, n)))

  return (
    <Section background="base" padding="xl" aria-label="CTV publisher testimonials">
      <div aria-hidden="true" className="absolute top-0 left-1/3 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(103,232,249,0.07) 0%, transparent 70%)" }} />

      <Container size="xl" className="relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-cyan/20 text-xs font-semibold tracking-widest uppercase text-brand-purple mb-5">
            <Tv2 className="w-3.5 h-3.5" aria-hidden="true" />
            Streaming Publisher Stories
          </span>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-3">
            Real Results from <GradientText gradient="cyan">Real CTV Publishers</GradientText>
          </h2>
          <p className="text-body text-text-secondary max-w-lg mx-auto text-pretty">
            Streaming publishers and FAST channel operators who upgraded with Click Dudes.
          </p>
        </div>

        <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {idx > 0 && (
            <button onClick={() => go(idx - 1)} aria-label="Previous"
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-strong border border-brand-cyan/15 flex items-center justify-center hover:border-brand-cyan/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40">
              <ChevronLeft className="w-5 h-5 text-brand-purple" aria-hidden="true" />
            </button>
          )}
          {idx < max && (
            <button onClick={() => go(idx + 1)} aria-label="Next"
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-strong border border-brand-cyan/15 flex items-center justify-center hover:border-brand-cyan/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40">
              <ChevronRight className="w-5 h-5 text-brand-purple" aria-hidden="true" />
            </button>
          )}

          <div ref={ref} className="overflow-hidden">
            <motion.div className="flex" style={{ gap: GAP }}
              animate={{ x: -idx * (CARD_W + GAP) }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
              {REVIEWS.map((r, i) => (
                <motion.div key={r.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="flex-shrink-0 rounded-2xl overflow-hidden flex flex-col"
                  style={{ width: CARD_W, background: "rgba(255,255,255,0.92)", border: "1px solid rgba(103,232,249,0.18)", boxShadow: "0 8px 40px rgba(7,17,47,0.07)" }}>

                  {/* TV screen header */}
                  <div className="relative px-4 pt-3 pb-2 overflow-hidden"
                    style={{ background: "linear-gradient(135deg, rgba(7,17,47,0.92) 0%, rgba(30,20,60,0.95) 100%)" }}>
                    {/* Scan-line texture */}
                    <div aria-hidden="true" className="absolute inset-0 opacity-[0.06]"
                      style={{ backgroundImage: "repeating-linear-gradient(0deg, rgba(255,255,255,1) 0px, rgba(255,255,255,1) 1px, transparent 1px, transparent 4px)" }} />
                    <div className="relative flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-lg bg-brand-purple/30 border border-brand-purple/50 flex items-center justify-center">
                          <Play className="w-3 h-3 text-brand-purple fill-brand-purple" aria-hidden="true" />
                        </div>
                        <span className="text-[10px] font-bold text-white/80">{r.channel}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Signal className="w-3 h-3 text-brand-cyan" aria-hidden="true" />
                        <span className="text-[9px] font-bold text-brand-cyan">4K HDR</span>
                        <LiveDot color="green" size="sm" />
                      </div>
                    </div>
                    {/* CPM metric */}
                    <div className="mt-2 flex items-baseline gap-1">
                      <span className="text-[10px] text-white/50">CPM</span>
                      <p className="text-[22px] font-black text-white tabular-nums leading-none">
                        {r.metricPrefix}<CountUp end={r.metricNum} suffix={r.metricSuffix} decimals={0} duration={2.0} />
                      </p>
                    </div>
                    {/* Progress bar mimicking video player */}
                    <div className="mt-2 h-1 rounded-full bg-white/10 overflow-hidden">
                      <motion.div className="h-full rounded-full bg-gradient-to-r from-brand-purple to-brand-cyan"
                        initial={{ width: "0%" }}
                        whileInView={{ width: `${40 + i * 8}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }} />
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="px-4 py-4 flex-1">
                    <blockquote className="text-[13px] text-text-secondary leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
                  </div>

                  {/* Footer */}
                  <div className="px-4 pb-4 flex items-center justify-between border-t border-brand-cyan/[0.10] pt-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 ${r.accentBg} ${r.accentText}`}>{r.initials}</div>
                      <div>
                        <p className="text-[11px] font-bold text-text-primary">{r.name}</p>
                        <p className="text-[9px] text-text-muted">{r.role} · {r.company}</p>
                      </div>
                    </div>
                    <span className={`text-[11px] font-black px-2.5 py-1.5 rounded-xl ${r.accentBg} ${r.accentText}`}>{r.metric}</span>
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
