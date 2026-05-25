"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion } from "framer-motion"
import { ShoppingCart, TrendingUp, ChevronLeft, ChevronRight, Package, Star } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientText } from "@/components/shared/GradientText"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"

interface EcomStory {
  quote: string; name: string; role: string; company: string
  platform: string; revenueBefore: number; revenueAfter: number
  convRate: number; aov: number; ordersMonthly: number
  vertical: string; initials: string
  accentBg: string; accentText: string
}

const STORIES: EcomStory[] = [
  { quote: "Our Shopify store was converting at 0.9%. Click Dudes rebuilt product pages with social proof, trust badges, urgency elements, and a one-click checkout flow. We hit 3.4% conversion in 45 days.", name: "Zoe H.", role: "Founder", company: "VelvetPour Coffee", platform: "Shopify", revenueBefore: 18000, revenueAfter: 64000, convRate: 3.4, aov: 68, ordersMonthly: 941, vertical: "DTC / Coffee", initials: "ZH", accentBg: "bg-brand-green/10", accentText: "text-brand-green" },
  { quote: "Our WooCommerce store was a slow, leaking bucket. Click Dudes migrated to Shopify, built abandoned cart flows, and set up product recommendation upsells. Monthly revenue tripled in 60 days.", name: "Felix R.", role: "eCommerce Manager", company: "TechGear Hub", platform: "Shopify Migration", revenueBefore: 24000, revenueAfter: 78000, convRate: 2.8, aov: 142, ordersMonthly: 549, vertical: "Consumer Electronics", initials: "FR", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple" },
  { quote: "Amazon A+ content and SEO-optimized listings changed everything. We were converting at 8%. Click Dudes rebuilt every product page and we hit 14.2% — near top of category performance for our niche.", name: "Priya K.", role: "Brand Director", company: "PurePath Organics", platform: "Amazon / Shopify", revenueBefore: 31000, revenueAfter: 86000, convRate: 14.2, aov: 54, ordersMonthly: 1591, vertical: "Health & Organic", initials: "PK", accentBg: "bg-brand-blue/10", accentText: "text-brand-blue" },
  { quote: "Cart abandonment was 76%. Click Dudes built a 3-email recovery sequence with a 10% discount for the third touchpoint. Recovery rate went to 28% — that alone added $14k/month without new traffic.", name: "Mark T.", role: "Revenue Lead", company: "OutdoorKing Store", platform: "Shopify + Klaviyo", revenueBefore: 42000, revenueAfter: 104000, convRate: 3.1, aov: 218, ordersMonthly: 477, vertical: "Outdoor & Camping", initials: "MT", accentBg: "bg-brand-violet/10", accentText: "text-brand-violet" },
  { quote: "We launched a new skincare line and needed a store built fast. Click Dudes had us live in 18 days — custom Shopify theme, product videos, bundle offers. We hit $60k revenue in the first 30 days of launch.", name: "Amelia F.", role: "Co-Founder", company: "GlowLabs Beauty", platform: "Shopify New Build", revenueBefore: 0, revenueAfter: 60000, convRate: 4.2, aov: 89, ordersMonthly: 674, vertical: "Beauty & Skincare", initials: "AF", accentBg: "bg-brand-green/10", accentText: "text-brand-green" },
]

const CARD_W = 340
const GAP    = 16
const AUTOPLAY = 4200

export function EcommerceTestimonials() {
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
    <Section background="white" padding="xl" aria-label="eCommerce client results">
      <div aria-hidden="true" className="absolute top-0 right-1/4 w-[500px] h-[350px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(16,185,129,0.07) 0%, transparent 70%)" }} />

      <Container size="xl" className="relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-green/20 text-xs font-semibold tracking-widest uppercase text-brand-green mb-5">
            <ShoppingCart className="w-3.5 h-3.5" aria-hidden="true" />
            Store Results
          </span>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-3">
            Conversions Up. Revenue <GradientText gradient="brand">Records Broken.</GradientText>
          </h2>
          <p className="text-body text-text-secondary max-w-lg mx-auto text-pretty">
            Online stores that stopped leaking revenue and started scaling — with Click Dudes building and optimizing every layer.
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

                  {/* Sales dashboard header */}
                  <div className="px-5 pt-4 pb-3" style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(139,92,246,0.03) 100%)", borderBottom: "1px solid rgba(16,185,129,0.08)" }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1.5">
                        <Package className="w-3.5 h-3.5 text-brand-green" aria-hidden="true" />
                        <span className="text-[10px] font-bold text-brand-green">{s.platform}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <LiveDot color="green" size="sm" />
                        <span className="text-[9px] text-text-muted">{s.ordersMonthly} orders/mo</span>
                      </div>
                    </div>

                    {/* Revenue */}
                    <div className="flex items-end gap-4 mb-2.5">
                      {s.revenueBefore > 0 && (
                        <>
                          <div>
                            <p className="text-[8px] text-text-muted">Before</p>
                            <p className="text-[14px] font-black text-text-muted/50 tabular-nums">${(s.revenueBefore / 1000).toFixed(0)}k</p>
                          </div>
                          <TrendingUp className="w-4 h-4 text-brand-green mb-1 shrink-0" aria-hidden="true" />
                        </>
                      )}
                      <div>
                        <p className="text-[8px] text-text-muted">{s.revenueBefore > 0 ? "Monthly Revenue" : "Launch Month"}</p>
                        <p className={`text-[22px] font-black tabular-nums leading-none ${s.accentText}`}>
                          $<CountUp end={s.revenueAfter / 1000} decimals={0} duration={1.8} />k
                        </p>
                      </div>
                      <div className="ml-auto text-right">
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-brand-green" aria-hidden="true" />
                          <span className="text-[12px] font-black text-brand-green">{s.convRate}% CVR</span>
                        </div>
                        <p className="text-[9px] text-text-muted">AOV ${s.aov}</p>
                      </div>
                    </div>

                    <div className="h-1 rounded-full bg-brand-green/[0.08] overflow-hidden">
                      <motion.div className="h-full rounded-full bg-gradient-to-r from-brand-green to-brand-cyan origin-left"
                        style={{ width: `${Math.min(100, (s.revenueAfter / 120000) * 100)}%` }}
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
