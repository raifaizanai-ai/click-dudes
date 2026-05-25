"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion } from "framer-motion"
import { TrendingUp, ChevronLeft, ChevronRight, ArrowUp, Search, Globe } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientText } from "@/components/shared/GradientText"
import { CountUp } from "@/components/motion/CountUp"

interface SeoStory {
  quote: string; name: string; role: string; company: string
  keywords: { term: string; before: number; after: number }[]
  trafficGrowth: number; da: number
  vertical: string; initials: string
  accentBg: string; accentText: string
}

const STORIES: SeoStory[] = [
  { quote: "We were invisible on Google for every money keyword. Click Dudes ran a full technical audit, fixed 140 crawl errors, and started link building. Within 8 months we rank #1 for our top 3 keywords.", name: "Ben H.", role: "Founder", company: "TaxQuick Pro", keywords: [{ term: "tax software UK", before: 48, after: 1 }, { term: "online tax return", before: 31, after: 2 }, { term: "HMRC filing tool", before: 22, after: 3 }], trafficGrowth: 340, da: 42, vertical: "FinTech / Tax", initials: "BH", accentBg: "bg-brand-green/10", accentText: "text-brand-green" },
  { quote: "SEO felt like a black box. Click Dudes gave us monthly keyword tracking reports and showed exactly which pages drove traffic. Organic leads went from 40/month to 280/month in under a year.", name: "Sandra L.", role: "Marketing Manager", company: "CloudBridge IT", keywords: [{ term: "managed IT services", before: 54, after: 4 }, { term: "IT support London", before: 67, after: 6 }, { term: "cloud migration help", before: 38, after: 7 }], trafficGrowth: 228, da: 38, vertical: "IT Services", initials: "SL", accentBg: "bg-brand-blue/10", accentText: "text-brand-blue" },
  { quote: "Our competitors had decades of domain authority. Click Dudes built a digital PR campaign that earned 60+ editorial backlinks in 4 months. We outranked competitors who had been there for years.", name: "Michael B.", role: "CEO", company: "LeanStart Academy", keywords: [{ term: "startup accelerator", before: 62, after: 5 }, { term: "business incubator", before: 44, after: 3 }, { term: "founder program", before: 29, after: 2 }], trafficGrowth: 410, da: 51, vertical: "Business Education", initials: "MB", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple" },
  { quote: "Local SEO was completely ignored. Click Dudes optimized our Google Business Profile, built 200+ local citations, and got us into the local 3-pack for our 5 key service areas. Calls tripled.", name: "Grace W.", role: "Practice Manager", company: "PureDental Group", keywords: [{ term: "dentist near me", before: 18, after: 1 }, { term: "dental implants London", before: 35, after: 3 }, { term: "cosmetic dentist", before: 41, after: 4 }], trafficGrowth: 185, da: 34, vertical: "Healthcare / Dental", initials: "GW", accentBg: "bg-brand-violet/10", accentText: "text-brand-violet" },
  { quote: "Our eCommerce category pages were buried. Click Dudes restructured our site architecture, added schema markup, and created keyword-rich category descriptions. Category page traffic increased 560%.", name: "Omar S.", role: "Head of Digital", company: "SportDirect Online", keywords: [{ term: "running shoes", before: 71, after: 8 }, { term: "sports trainers UK", before: 58, after: 5 }, { term: "gym equipment", before: 43, after: 6 }], trafficGrowth: 560, da: 47, vertical: "eCommerce / Sports", initials: "OS", accentBg: "bg-brand-green/10", accentText: "text-brand-green" },
  { quote: "Core Web Vitals were failing. Click Dudes fixed LCP, CLS, and FID scores, moving us from red to green in 6 weeks. The technical fixes alone improved our rankings across 240 target keywords.", name: "Julia R.", role: "Technical Lead", company: "HealthPath App", keywords: [{ term: "health tracking app", before: 55, after: 7 }, { term: "wellness software", before: 39, after: 4 }, { term: "fitness monitoring", before: 47, after: 6 }], trafficGrowth: 290, da: 40, vertical: "Health & Wellness Tech", initials: "JR", accentBg: "bg-brand-blue/10", accentText: "text-brand-blue" },
]

const CARD_W = 340
const GAP    = 16
const AUTOPLAY = 4400

export function SeoTestimonials() {
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
    <Section background="white" padding="xl" aria-label="SEO ranking success stories">
      <div aria-hidden="true" className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.07) 0%, transparent 70%)" }} />

      <Container size="xl" className="relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-green/20 text-xs font-semibold tracking-widest uppercase text-brand-green mb-5">
            <TrendingUp className="w-3.5 h-3.5" aria-hidden="true" />
            Ranking Results
          </span>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-3">
            Keywords Moved. Traffic <GradientText gradient="brand">Grew. Revenue Followed.</GradientText>
          </h2>
          <p className="text-body text-text-secondary max-w-lg mx-auto text-pretty">
            Real businesses that climbed from page 5 to position 1 — and what happened to their organic revenue when they did.
          </p>
        </div>

        <div className="relative" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          {idx > 0 && (
            <button onClick={() => go(idx - 1)} aria-label="Previous"
              className="absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-strong border border-brand-green/15 flex items-center justify-center hover:border-brand-green/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/40">
              <ChevronLeft className="w-5 h-5 text-brand-green" aria-hidden="true" />
            </button>
          )}
          {idx < max && (
            <button onClick={() => go(idx + 1)} aria-label="Next"
              className="absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-strong border border-brand-green/15 flex items-center justify-center hover:border-brand-green/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/40">
              <ChevronRight className="w-5 h-5 text-brand-green" aria-hidden="true" />
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
                  style={{ width: CARD_W, background: "rgba(255,255,255,0.96)", border: "1px solid rgba(16,185,129,0.12)", boxShadow: "0 8px 40px rgba(7,17,47,0.06)" }}>

                  {/* Keyword ranking header */}
                  <div className="px-5 pt-4 pb-3" style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(96,165,250,0.04) 100%)", borderBottom: "1px solid rgba(16,185,129,0.08)" }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <Search className="w-3.5 h-3.5 text-brand-green" aria-hidden="true" />
                        <span className="text-[10px] font-bold text-brand-green">Keyword Rankings</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Globe className="w-3 h-3 text-brand-blue" aria-hidden="true" />
                        <span className="text-[9px] font-bold text-brand-blue">DA {s.da}</span>
                      </div>
                    </div>

                    {/* Keyword rows */}
                    <div className="space-y-1.5 mb-2.5">
                      {s.keywords.map((kw, ki) => (
                        <motion.div key={kw.term} className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: 0.3 + ki * 0.08 }}>
                          <span className="text-[9px] text-text-muted truncate w-[148px]">{kw.term}</span>
                          <span className="text-[9px] text-text-muted/50 tabular-nums w-6 text-center">#{kw.before}</span>
                          <ArrowUp className="w-3 h-3 text-brand-green shrink-0" aria-hidden="true" />
                          <span className={`text-[11px] font-black tabular-nums ${s.accentText}`}>#{kw.after}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex items-center gap-3">
                      <TrendingUp className="w-3.5 h-3.5 text-brand-green" aria-hidden="true" />
                      <p className={`text-[13px] font-black ${s.accentText}`}>
                        +<CountUp end={s.trafficGrowth} decimals={0} duration={1.6} />% traffic
                      </p>
                      <span className="text-[9px] text-text-muted ml-auto">{s.vertical}</span>
                    </div>
                  </div>

                  <div className="px-5 py-4 flex-1">
                    <blockquote className="text-[12px] text-text-secondary leading-relaxed">&ldquo;{s.quote}&rdquo;</blockquote>
                  </div>

                  <div className="px-5 pb-4 pt-3 border-t border-brand-green/[0.08] flex items-center gap-2.5">
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
              className={`rounded-full transition-all duration-300 ${i === idx ? "w-6 h-2 bg-brand-green" : "w-2 h-2 bg-brand-green/25 hover:bg-brand-green/50"}`} />
          ))}
        </div>
      </Container>
    </Section>
  )
}
