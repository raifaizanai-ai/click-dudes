"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion } from "framer-motion"
import { Globe, ChevronLeft, ChevronRight, TrendingUp, Wifi } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientText } from "@/components/shared/GradientText"
import { LiveDot } from "@/components/shared/LiveDot"

interface WebReview {
  quote: string; name: string; role: string; company: string
  domain: string; metric: string; rpmBefore: number; rpmAfter: number
  initials: string; accentBg: string; accentText: string; vertical: string
}

const REVIEWS: WebReview[] = [
  { quote: "We were stuck at $3.80 RPM for over a year. After Click Dudes deployed their header bidding stack with AdX, we hit $6.40 in the first month. The AI floor optimizer found CPM floors we were leaving on the table every day.", name: "Marcus T.", role: "Head of Revenue", company: "UrbanLifestyle Media", domain: "urbanlifestyle.com", metric: "+68% RPM", rpmBefore: 3.8, rpmAfter: 6.4, initials: "MT", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple", vertical: "Lifestyle & Culture" },
  { quote: "Migration away from AdSense was something I'd put off for two years out of fear. The Click Dudes team handled every technical step. We didn't write a line of code and were fully live in 6 days.", name: "Priya S.", role: "Publisher Operations", company: "TechInsight Daily", domain: "techinsight.io", metric: "6-day launch", rpmBefore: 2.1, rpmAfter: 5.8, initials: "PS", accentBg: "bg-brand-blue/10", accentText: "text-brand-blue", vertical: "Technology News" },
  { quote: "Ad quality improved significantly — no more janky creatives, no layout shift. Revenue is up 52% and bounce rate dropped 14%. The user experience improvement was something I didn't expect.", name: "Daniel O.", role: "CEO & Founder", company: "Finance Digest", domain: "financedigest.com", metric: "+52% revenue", rpmBefore: 4.2, rpmAfter: 6.4, initials: "DO", accentBg: "bg-brand-green/10", accentText: "text-brand-green", vertical: "Personal Finance" },
  { quote: "Our display CPMs went from $1.20 to $3.80 within 45 days. The private marketplace deals for finance content were the biggest driver — something AdSense alone could never access.", name: "Lena K.", role: "Director of Monetization", company: "WealthWeekly", domain: "wealthweekly.com", metric: "+217% CPM", rpmBefore: 1.2, rpmAfter: 3.8, initials: "LK", accentBg: "bg-brand-violet/10", accentText: "text-brand-violet", vertical: "Financial Media" },
  { quote: "Our travel blog has 1.2M monthly visitors. Click Dudes unlocked demand partners we'd never heard of — and our September revenue was the best month we've ever had.", name: "James R.", role: "Publisher & Editor", company: "Nomad Route", domain: "nomadroute.co", metric: "Best month ever", rpmBefore: 2.8, rpmAfter: 6.1, initials: "JR", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple", vertical: "Travel Content" },
  { quote: "Our fill rate was the hidden problem — sitting at 82% with AdSense. Within two weeks of Click Dudes going live, fill rate hit 96.8%. That alone was worth the switch.", name: "Rachel M.", role: "Ops Manager", company: "HomeImprovement Hub", domain: "homeimprove.net", metric: "96.8% fill rate", rpmBefore: 2.2, rpmAfter: 4.7, initials: "RM", accentBg: "bg-brand-green/10", accentText: "text-brand-green", vertical: "Home & DIY" },
]

const CARD_W = 340
const GAP    = 16
const AUTOPLAY = 4000

export function WebTestimonials() {
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
  const barPct = (before: number, after: number) => ({ before: (before / 8) * 100, after: (after / 8) * 100 })

  return (
    <Section background="base" padding="xl" aria-label="Web publisher testimonials">
      <div aria-hidden="true" className="absolute top-0 right-1/4 w-[500px] h-[350px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(96,165,250,0.07) 0%, transparent 70%)" }} />

      <Container size="xl" className="relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-blue/20 text-xs font-semibold tracking-widest uppercase text-brand-blue mb-5">
            <Globe className="w-3.5 h-3.5" aria-hidden="true" />
            Publisher Stories
          </span>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-3">
            Real Results from <GradientText gradient="brand">Real Web Publishers</GradientText>
          </h2>
          <p className="text-body text-text-secondary max-w-lg mx-auto text-pretty">
            Performance data from publishers who upgraded their web monetization stack.
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
              {REVIEWS.map((r, i) => {
                const { before, after } = barPct(r.rpmBefore, r.rpmAfter)
                return (
                  <motion.div key={r.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -6 }}
                    className="flex-shrink-0 rounded-2xl overflow-hidden flex flex-col"
                    style={{ width: CARD_W, background: "rgba(255,255,255,0.94)", border: "1px solid rgba(96,165,250,0.14)", boxShadow: "0 8px 40px rgba(7,17,47,0.06)" }}>

                    {/* Browser chrome */}
                    <div className="px-3 py-2.5 border-b border-brand-blue/[0.08]"
                      style={{ background: "rgba(96,165,250,0.04)" }}>
                      <div className="flex items-center gap-2">
                        <div className="flex gap-1">
                          {["bg-red-400/60","bg-amber-400/60","bg-green-400/60"].map((c,ci) => (
                            <div key={ci} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                          ))}
                        </div>
                        <div className="flex-1 flex items-center gap-1.5 bg-white/70 rounded-md px-2.5 py-1 border border-brand-blue/[0.10]">
                          <Wifi className="w-2.5 h-2.5 text-brand-green shrink-0" aria-hidden="true" />
                          <span className="text-[9px] text-text-muted font-medium truncate">{r.domain}</span>
                          <LiveDot color="green" size="sm" />
                        </div>
                      </div>
                    </div>

                    {/* RPM mini-chart */}
                    <div className="px-4 pt-3 pb-2">
                      <p className="text-[9px] text-text-muted font-medium uppercase tracking-wider mb-2">Page RPM before → after</p>
                      <div className="space-y-1.5">
                        {[{ label: "Before", pct: before, color: "bg-text-muted/20", val: `$${r.rpmBefore.toFixed(2)}` },
                          { label: "After",  pct: after,  color: "bg-gradient-to-r from-brand-blue to-brand-purple", val: `$${r.rpmAfter.toFixed(2)}` }
                        ].map(({ label, pct, color, val }) => (
                          <div key={label} className="flex items-center gap-2">
                            <span className="text-[9px] text-text-muted w-8">{label}</span>
                            <div className="flex-1 h-2 rounded-full bg-brand-blue/[0.07] overflow-hidden">
                              <motion.div className={`h-full rounded-full ${color} origin-left`}
                                style={{ width: `${pct}%` }}
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: 0.3 + i * 0.05, ease: [0.16,1,0.3,1] }} />
                            </div>
                            <span className="text-[10px] font-bold text-text-primary w-10 text-right">{val}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Quote */}
                    <div className="px-4 py-3 flex-1">
                      <blockquote className="text-[12px] text-text-secondary leading-relaxed">&ldquo;{r.quote}&rdquo;</blockquote>
                    </div>

                    {/* Footer */}
                    <div className="px-4 pb-4 flex items-center justify-between border-t border-brand-blue/[0.07] pt-3">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ${r.accentBg} ${r.accentText}`}>{r.initials}</div>
                        <div>
                          <p className="text-[11px] font-bold text-text-primary">{r.name}</p>
                          <p className="text-[9px] text-text-muted">{r.role} · {r.company}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3 text-brand-green" aria-hidden="true" />
                        <span className={`text-[11px] font-black ${r.accentText}`}>{r.metric}</span>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
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
