"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion } from "framer-motion"
import { Heart, MessageCircle, Share2, TrendingUp, ChevronLeft, ChevronRight, Users } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientText } from "@/components/shared/GradientText"
import { CountUp } from "@/components/motion/CountUp"

interface SocialStory {
  quote: string; name: string; role: string; company: string
  platform: string; handle: string
  followersBefore: number; followersAfter: number
  engagementRate: number; reachK: number
  vertical: string; initials: string
  platformColor: string; accentBg: string; accentText: string
}

const STORIES: SocialStory[] = [
  { quote: "Our Instagram was stuck at 2,400 followers for a year. ClickDudes created a Reels-first strategy with consistent brand aesthetic. We hit 18,000 followers in 4 months and our DM inquiries tripled.", name: "Lily C.", role: "Brand Owner", company: "BloomSkincare", platform: "Instagram", handle: "@bloomskincare", followersBefore: 2400, followersAfter: 18000, engagementRate: 7.2, reachK: 94, vertical: "Beauty Brand", initials: "LC", platformColor: "#E1306C", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple" },
  { quote: "LinkedIn was an afterthought for us. ClickDudes built a thought leadership content strategy — we went from 400 to 6,800 followers, and inbound leads from LinkedIn increased from zero to 14/month.", name: "James P.", role: "Managing Partner", company: "VaultAdvisors", platform: "LinkedIn", handle: "@vaultadvisors", followersBefore: 400, followersAfter: 6800, engagementRate: 5.4, reachK: 48, vertical: "Financial Advisory", initials: "JP", platformColor: "#0A66C2", accentBg: "bg-brand-blue/10", accentText: "text-brand-blue" },
  { quote: "We posted randomly and got nothing. ClickDudes built a full content calendar, branded templates, and community management. Engagement went from 0.8% to 6.2%. Our TikTok account hit 50k in 3 months.", name: "Hannah T.", role: "Social Media Manager", company: "UrbanFitStudio", platform: "TikTok", handle: "@urbanfitstudio", followersBefore: 850, followersAfter: 51000, engagementRate: 9.8, reachK: 320, vertical: "Fitness & Wellness", initials: "HT", platformColor: "#000000", accentBg: "bg-brand-green/10", accentText: "text-brand-green" },
  { quote: "Facebook felt dead for our restaurant brand. ClickDudes shifted focus to video posts, menu reveals, and behind-the-scenes content. Organic reach grew 8× and we fill Friday–Sunday reservations from social alone.", name: "Carlo B.", role: "Owner", company: "Osteria Moderna", platform: "Facebook", handle: "@osteriamoderna", followersBefore: 1200, followersAfter: 9400, engagementRate: 8.1, reachK: 62, vertical: "Restaurant / Hospitality", initials: "CB", platformColor: "#1877F2", accentBg: "bg-brand-violet/10", accentText: "text-brand-violet" },
  { quote: "Managing 4 platforms ourselves was chaos. ClickDudes took it all on — content calendar, scheduling, community replies — and our total follower count across platforms doubled in 5 months.", name: "Amy R.", role: "Marketing Director", company: "NexStep Academy", platform: "Multi-Platform", handle: "Instagram · LinkedIn · TikTok", followersBefore: 4100, followersAfter: 14600, engagementRate: 6.8, reachK: 180, vertical: "Online Education", initials: "AR", platformColor: "#8B5CF6", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple" },
]

const CARD_W = 340
const GAP    = 16
const AUTOPLAY = 4000

export function SocialMediaTestimonials() {
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
    <Section background="base" padding="xl" aria-label="Social media growth stories">
      <div aria-hidden="true" className="absolute top-0 left-1/3 w-[500px] h-[350px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />

      <Container size="xl" className="relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple mb-5">
            <Share2 className="w-3.5 h-3.5" aria-hidden="true" />
            Growth Stories
          </span>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-3">
            Followers, Engagement & <GradientText gradient="brand">Real Brand Growth</GradientText>
          </h2>
          <p className="text-body text-text-secondary max-w-lg mx-auto text-pretty">
            Brands that stopped guessing and started growing — with ClickDudes managing their social presence end-to-end.
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
                  style={{ width: CARD_W, background: "rgba(255,255,255,0.96)", border: "1px solid rgba(139,92,246,0.11)", boxShadow: "0 8px 40px rgba(7,17,47,0.06)" }}>

                  {/* Social post header */}
                  <div className="px-5 pt-4 pb-3" style={{ borderBottom: "1px solid rgba(139,92,246,0.07)" }}>
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-black text-white flex-shrink-0"
                        style={{ background: s.platformColor }}>
                        {s.initials}
                      </div>
                      <div className="min-w-0">
                        <p className="text-[11px] font-bold text-text-primary truncate">{s.company}</p>
                        <p className="text-[9px] text-text-muted">{s.handle}</p>
                      </div>
                      <span className="ml-auto text-[9px] font-bold px-2 py-0.5 rounded-full" style={{ background: `${s.platformColor}18`, color: s.platformColor }}>{s.platform}</span>
                    </div>

                    {/* Follower growth */}
                    <div className="flex items-center gap-3 mb-2">
                      <div>
                        <p className="text-[8px] text-text-muted">Before</p>
                        <p className="text-[14px] font-black text-text-muted/50 tabular-nums">{(s.followersBefore / 1000).toFixed(1)}k</p>
                      </div>
                      <TrendingUp className="w-4 h-4 text-brand-green shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-[8px] text-text-muted">Followers Now</p>
                        <p className={`text-[20px] font-black tabular-nums leading-none ${s.accentText}`}>
                          <CountUp end={s.followersAfter / 1000} decimals={1} duration={1.8} />k
                        </p>
                      </div>
                      <div className="ml-auto text-right">
                        <p className="text-[8px] text-text-muted">Eng. Rate</p>
                        <p className="text-[14px] font-black text-brand-green">{s.engagementRate}%</p>
                      </div>
                    </div>

                    {/* Engagement icons */}
                    <div className="flex items-center gap-3 pt-1">
                      <div className="flex items-center gap-1">
                        <Heart className="w-3 h-3 text-[#E1306C]" aria-hidden="true" />
                        <span className="text-[9px] text-text-muted">{Math.round(s.reachK * 0.8)}k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="w-3 h-3 text-brand-blue" aria-hidden="true" />
                        <span className="text-[9px] text-text-muted">{Math.round(s.reachK * 0.12)}k</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3 text-brand-purple" aria-hidden="true" />
                        <span className="text-[9px] text-text-muted">{s.reachK}k reach</span>
                      </div>
                      <span className="ml-auto text-[9px] text-text-muted">{s.vertical}</span>
                    </div>
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
