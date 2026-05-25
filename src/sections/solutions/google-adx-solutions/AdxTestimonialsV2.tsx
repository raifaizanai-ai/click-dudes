"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion } from "framer-motion"
import { Lock, TrendingUp, ChevronLeft, ChevronRight, DollarSign } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientText } from "@/components/shared/GradientText"
import { CountUp } from "@/components/motion/CountUp"

interface AdxV2Story {
  quote: string; name: string; role: string; company: string
  metric: string; cpmBefore: number; cpmAfter: number; cpmAfterLabel?: string
  vertical: string; initials: string
  accentBg: string; accentText: string; dealType: string
}

const STORIES: AdxV2Story[] = [
  { quote: "Getting into Google AdX directly as a small publisher was impossible. Click Dudes' MCM partnership gave us full AdX access in days. CPM went from $1.40 to $4.20 — before even adding the header bidding layer.", name: "Jake M.", role: "Publisher & CEO", company: "CryptoNews Daily", metric: "+80–120% CPM", cpmBefore: 1.40, cpmAfter: 4.20, vertical: "Finance & Crypto", initials: "JM", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple", dealType: "Open RTB" },
  { quote: "We applied to Google AdX twice and got rejected both times. Click Dudes got us live under their MCM account within a week. The demand quality difference between AdSense and AdX is massive.", name: "Claire D.", role: "Head of Digital", company: "LegalPulse Network", metric: "Rejected → Live in 7d", cpmBefore: 2.10, cpmAfter: 5.80, vertical: "Legal & Professional", initials: "CD", accentBg: "bg-brand-blue/10", accentText: "text-brand-blue", dealType: "MCM Access" },
  { quote: "Programmatic guaranteed deals through AdX for our B2B tech audience were the game changer. Fortune 500 tech brands pay premium CPMs versus open exchange — the gap is substantial.", name: "Raj P.", role: "VP Operations", company: "DevStack Weekly", metric: "5–10× CPM from PG deals", cpmBefore: 2.80, cpmAfter: 0, cpmAfterLabel: "$20–30+", vertical: "Developer Media", initials: "RP", accentBg: "bg-brand-green/10", accentText: "text-brand-green", dealType: "PG Deals" },
  { quote: "Brand safety was our biggest concern. Within AdX, advertiser quality is genuinely better. Zero ad quality complaints since switching — and we review and approve buyers through Click Dudes' team.", name: "Simone T.", role: "Editor-in-Chief", company: "ParentingFirst", metric: "Zero quality issues", cpmBefore: 1.90, cpmAfter: 4.10, vertical: "Family & Parenting", initials: "ST", accentBg: "bg-brand-violet/10", accentText: "text-brand-violet", dealType: "Brand Safe" },
  { quote: "Health and pharmaceutical advertisers pay 5–8× open exchange CPMs for contextually relevant placements. That vertical premium is the biggest single win for us.", name: "Dr. Paul E.", role: "Publisher Director", company: "MedicalAdvice Pro", metric: "5–8× vertical premium", cpmBefore: 2.20, cpmAfter: 13.20, vertical: "Health & Medical", initials: "PE", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple", dealType: "PMP Deals" },
  { quote: "Our e-commerce comparison site has 3× industry-benchmark conversion. Through AdX, retail brands compete in private auctions for our high-intent audience. RPM tripled in 60 days.", name: "Zara H.", role: "Monetization Lead", company: "CompareIt Hub", metric: "3× RPM in 60 days", cpmBefore: 2.40, cpmAfter: 7.20, vertical: "Comparison Shopping", initials: "ZH", accentBg: "bg-brand-blue/10", accentText: "text-brand-blue", dealType: "PMP + RTB" },
]

const CARD_W = 340
const GAP    = 16
const AUTOPLAY = 4000

export function AdxTestimonialsV2() {
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
    <Section background="base" padding="xl" aria-label="AdX publisher testimonials">
      <div aria-hidden="true" className="absolute top-0 right-1/3 w-[500px] h-[350px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />

      <Container size="xl" className="relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple mb-5">
            <Lock className="w-3.5 h-3.5" aria-hidden="true" />
            AdX Access Stories
          </span>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-3">
            Real AdX Results from <GradientText gradient="brand">Real Publishers</GradientText>
          </h2>
          <p className="text-body text-text-secondary max-w-lg mx-auto text-pretty">
            Publishers who gained Google AdX access through Click Dudes&rsquo; certified MCM partnership.
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
                  style={{ width: CARD_W, background: "rgba(255,255,255,0.94)", border: "1px solid rgba(139,92,246,0.11)", boxShadow: "0 8px 40px rgba(7,17,47,0.06)" }}>

                  {/* Earnings header */}
                  <div className="px-5 pt-4 pb-3" style={{ background: "rgba(139,92,246,0.04)", borderBottom: "1px solid rgba(139,92,246,0.07)" }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <DollarSign className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
                        <span className="text-[10px] font-bold text-brand-purple">Earnings Report</span>
                      </div>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${s.accentBg} ${s.accentText}`}>{s.dealType}</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-[8px] text-text-muted">Before</p>
                        <p className="text-[14px] font-black text-text-muted/50 tabular-nums">${s.cpmBefore.toFixed(2)}</p>
                      </div>
                      <TrendingUp className="w-4 h-4 text-brand-green shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-[8px] text-text-muted">AdX CPM</p>
                        <p className={`text-[20px] font-black tabular-nums leading-none ${s.accentText}`}>
                          {s.cpmAfterLabel
                            ? s.cpmAfterLabel
                            : <>$<CountUp end={s.cpmAfter} decimals={2} duration={1.8} /></>
                          }
                        </p>
                      </div>
                      <div className="ml-auto">
                        <span className={`text-[13px] font-black ${s.accentText}`}>{s.metric}</span>
                      </div>
                    </div>
                    <p className="text-[9px] text-text-muted mt-1">{s.vertical}</p>
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

        <p className="text-center text-[11px] text-text-muted mt-6">
          Representative results. Individual outcomes vary based on traffic quality, vertical, and existing setup.
        </p>
      </Container>
    </Section>
  )
}
