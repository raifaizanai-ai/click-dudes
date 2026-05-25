"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Smartphone } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientText } from "@/components/shared/GradientText"
import { LiveDot } from "@/components/shared/LiveDot"

interface AppReview {
  quote: string; name: string; role: string; company: string
  metric: string; category: string; initials: string
  accent: string; accentBg: string; accentText: string; stars: number
}

const REVIEWS: AppReview[] = [
  { quote: "Our mobile game was at $4.20 eCPM with AdMob. Click Dudes brought in AppLovin, ironSource, and Unity — we're averaging $11.80 now. Almost 3× for the same traffic.", name: "Tomás V.", role: "CTO", company: "PixelCraft Games", metric: "+181% eCPM", category: "Mobile Gaming", initials: "TV", accent: "text-brand-purple", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple", stars: 5 },
  { quote: "Rewarded video implementation was seamless. Users prefer it over intrusive interstitials, review scores improved 0.4 stars, and rewarded ad revenue is now 60% of total monetization.", name: "Kira S.", role: "Head of Product", company: "Mindful Minutes", metric: "+60% rewarded share", category: "Wellness Apps", initials: "KS", accent: "text-brand-blue", accentBg: "bg-brand-blue/10", accentText: "text-brand-blue", stars: 5 },
  { quote: "We'd tried managing our own mediation for 18 months — constant headache. Click Dudes took over everything. Revenue up 74% and my team's stress went down 90%.", name: "Noah C.", role: "CEO", company: "RunTracker Pro", metric: "+74% revenue", category: "Fitness Apps", initials: "NC", accent: "text-brand-green", accentBg: "bg-brand-green/10", accentText: "text-brand-green", stars: 5 },
  { quote: "Repositioning interstitials to natural level transitions pushed completion rates from 65% to 91% and CPMs increased 38%. It was a small change with a huge compounding impact.", name: "Yuki T.", role: "Growth Lead", company: "Puzzle Kingdom", metric: "91% completion", category: "Casual Gaming", initials: "YT", accent: "text-brand-violet", accentBg: "bg-brand-violet/10", accentText: "text-brand-violet", stars: 5 },
  { quote: "Premium demand partners matched to our productivity vertical drove eCPM from $2.10 to $7.40 for the same impressions. Hyper-targeted demand is the difference maker.", name: "Fatima A.", role: "Founder", company: "FocusFlow App", metric: "+252% eCPM", category: "Productivity Apps", initials: "FA", accent: "text-brand-purple", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple", stars: 5 },
  { quote: "In-app bidding setup eliminated waterfall latency completely. Load times dropped, users are happier, and we're capturing demand we were missing in the old sequential waterfall.", name: "Ben P.", role: "Head of Engineering", company: "Weather Atlas", metric: "Zero waterfall lag", category: "Utility Apps", initials: "BP", accent: "text-brand-blue", accentBg: "bg-brand-blue/10", accentText: "text-brand-blue", stars: 5 },
]

const CARD_W = 320
const GAP    = 16
const AUTOPLAY = 3800

export function AppTestimonials() {
  const [idx, setIdx]       = useState(0)
  const [paused, setPaused] = useState(false)
  const [perView, setPerView] = useState(3)
  const ref = useRef<HTMLDivElement>(null)

  const max = Math.max(0, REVIEWS.length - perView)

  const measure = useCallback(() => {
    if (!ref.current) return
    const w = ref.current.offsetWidth
    setPerView(Math.max(1, Math.floor((w + GAP) / (CARD_W + GAP))))
  }, [])

  useEffect(() => {
    measure()
    const ro = new ResizeObserver(measure)
    if (ref.current) ro.observe(ref.current)
    return () => ro.disconnect()
  }, [measure])

  useEffect(() => {
    setIdx(i => Math.min(i, Math.max(0, REVIEWS.length - perView)))
  }, [perView])

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIdx(i => i >= max ? 0 : i + 1), AUTOPLAY)
    return () => clearInterval(t)
  }, [paused, max])

  const go = (n: number) => setIdx(Math.max(0, Math.min(max, n)))

  return (
    <Section background="white" padding="xl" aria-label="App developer testimonials">
      {/* Subtle grid bg */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "linear-gradient(rgba(139,92,246,1) 1px,transparent 1px),linear-gradient(90deg,rgba(139,92,246,1) 1px,transparent 1px)", backgroundSize: "40px 40px" }} />
      <div aria-hidden="true" className="absolute top-0 left-1/4 w-[500px] h-[300px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)" }} />

      <Container size="xl" className="relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple mb-5">
            <Smartphone className="w-3.5 h-3.5" aria-hidden="true" />
            App Developer Stories
          </span>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-3">
            Real Results from <GradientText gradient="violet">Real App Publishers</GradientText>
          </h2>
          <p className="text-body text-text-secondary max-w-lg mx-auto text-pretty">
            App developers across gaming, utility, and lifestyle who upgraded their monetization stack.
          </p>
        </div>

        {/* Slider */}
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
              {REVIEWS.map((r, i) => (
                <motion.div key={r.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -6 }}
                  className="flex-shrink-0 rounded-3xl overflow-hidden flex flex-col"
                  style={{ width: CARD_W, background: "rgba(255,255,255,0.92)", border: "1px solid rgba(139,92,246,0.12)", boxShadow: "0 8px 40px rgba(7,17,47,0.06)" }}>

                  {/* App store header */}
                  <div className="px-5 pt-4 pb-3 border-b border-brand-purple/[0.07]"
                    style={{ background: `rgba(139,92,246,0.04)` }}>
                    <div className="flex items-center justify-between mb-2">
                      <div className={`flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] font-bold ${r.accentBg} ${r.accentText}`}>
                        <Smartphone className="w-3 h-3" aria-hidden="true" />
                        {r.category}
                      </div>
                      <LiveDot color="green" size="sm" />
                    </div>
                    {/* Stars */}
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, si) => (
                        <motion.div key={si}
                          initial={{ scale: 0, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.3 + si * 0.06, ease: "backOut" }}>
                          <Star className={`w-3.5 h-3.5 ${si < r.stars ? "text-amber-400 fill-amber-400" : "text-text-muted/30"}`} aria-hidden="true" />
                        </motion.div>
                      ))}
                      <span className="text-[10px] text-text-muted ml-1.5 font-medium">5.0</span>
                    </div>
                  </div>

                  {/* Quote */}
                  <div className="px-5 py-4 flex-1">
                    <blockquote className="text-[13px] text-text-secondary leading-relaxed">
                      &ldquo;{r.quote}&rdquo;
                    </blockquote>
                  </div>

                  {/* Footer */}
                  <div className="px-5 pb-4 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${r.accentBg} ${r.accentText}`}>
                        {r.initials}
                      </div>
                      <div>
                        <p className="text-[12px] font-bold text-text-primary leading-none">{r.name}</p>
                        <p className="text-[10px] text-text-muted mt-0.5">{r.role} · {r.company}</p>
                      </div>
                    </div>
                    <span className={`text-[11px] font-black px-2.5 py-1.5 rounded-xl ${r.accentBg} ${r.accentText}`}>
                      {r.metric}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Dots */}
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
