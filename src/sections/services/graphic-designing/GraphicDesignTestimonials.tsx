"use client"

import { motion } from "framer-motion"
import { Palette, Zap, TrendingUp, Image } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientText } from "@/components/shared/GradientText"

interface DesignStory {
  quote: string; name: string; role: string; company: string
  deliverable: string; engagementBefore: number; engagementAfter: number
  swatches: string[]; deliveryTime: string; assetsPerMonth: number
  vertical: string; initials: string
  accentBg: string; accentText: string
}

const STORIES: DesignStory[] = [
  { quote: "Our Instagram looked like every other beauty brand — generic templates, inconsistent colors, forgettable. Click Dudes built us a full visual identity system and engagement jumped from 1.2% to 8.6% in 60 days.", name: "Mei L.", role: "Brand Founder", company: "LunarGlow Beauty", deliverable: "Brand Identity System", engagementBefore: 1.2, engagementAfter: 8.6, swatches: ["#F8BBD9", "#CE93D8", "#FFDEA9", "#B2EBF2"], deliveryTime: "48hrs", assetsPerMonth: 120, vertical: "Beauty & Skincare", initials: "ML", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple" },
  { quote: "Amazon A+ content was the missing piece. Our product images were plain white-background. Click Dudes created full A+ comparison charts, lifestyle imagery direction, and infographic overlays. Sales up 64%.", name: "Kevin P.", role: "Amazon Seller", company: "ProSport Direct", deliverable: "Amazon A+ Content", engagementBefore: 8.0, engagementAfter: 13.1, swatches: ["#FF6F00", "#1565C0", "#1B5E20", "#263238"], deliveryTime: "24hrs", assetsPerMonth: 80, vertical: "Sports Equipment", initials: "KP", accentBg: "bg-brand-blue/10", accentText: "text-brand-blue" },
  { quote: "Our ad CTR was 0.8%. We were using founder selfies and stock photography. Click Dudes produced a batch of 12 UGC-style creatives. Average CTR is now 3.6% — over 4× improvement across our Meta campaigns.", name: "Nadia S.", role: "Performance Marketer", company: "ClearSkin Labs", deliverable: "Ad Creative Batch", engagementBefore: 0.8, engagementAfter: 3.6, swatches: ["#E3F2FD", "#F3E5F5", "#E8F5E9", "#FFF9C4"], deliveryTime: "48hrs", assetsPerMonth: 60, vertical: "Health & Wellness", initials: "NS", accentBg: "bg-brand-green/10", accentText: "text-brand-green" },
  { quote: "We needed a full rebrand: logo, brand guide, social templates, and pitch deck. Click Dudes delivered everything in 2 weeks with unlimited revisions. Our investor pitch success rate improved — we closed our seed round.", name: "Dan V.", role: "Co-Founder & CEO", company: "Launchkit", deliverable: "Full Rebrand Package", engagementBefore: 2.1, engagementAfter: 9.4, swatches: ["#1A237E", "#283593", "#5C6BC0", "#C5CAE9"], deliveryTime: "2 weeks", assetsPerMonth: 200, vertical: "SaaS / Startup", initials: "DV", accentBg: "bg-brand-violet/10", accentText: "text-brand-violet" },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 24, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function GraphicDesignTestimonials() {
  return (
    <Section background="base" padding="xl" aria-label="Graphic design client results">
      <div aria-hidden="true" className="absolute top-0 left-1/4 w-[600px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.08) 0%, transparent 70%)" }} />

      <Container size="xl" className="relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple mb-5">
            <Palette className="w-3.5 h-3.5" aria-hidden="true" />
            Design Impact
          </span>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-3">
            Designs That Perform. <GradientText gradient="brand">Brands That Stand Out.</GradientText>
          </h2>
          <p className="text-body text-text-secondary max-w-lg mx-auto text-pretty">
            Brands that replaced forgettable visuals with scroll-stopping creative content — and measured the difference in engagement and revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {STORIES.map((s, i) => (
            <motion.div key={s.name} custom={i} variants={cardVariants} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(139,92,246,0.10)" }}
              className="rounded-3xl overflow-hidden flex flex-col cursor-default"
              style={{ background: "rgba(255,255,255,0.95)", border: "1px solid rgba(139,92,246,0.11)", boxShadow: "0 8px 40px rgba(7,17,47,0.06)" }}>

              {/* Brand palette header */}
              <div className="px-5 pt-4 pb-4" style={{ borderBottom: "1px solid rgba(139,92,246,0.07)" }}>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-brand-purple/10 flex items-center justify-center">
                      <Image className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-brand-purple">{s.deliverable}</p>
                      <p className="text-[9px] text-text-muted">{s.vertical}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Zap className="w-3 h-3 text-brand-green" aria-hidden="true" />
                    <span className="text-[9px] font-bold text-brand-green">{s.deliveryTime}</span>
                  </div>
                </div>

                {/* Color palette swatches */}
                <div className="flex items-center gap-1.5 mb-3">
                  {s.swatches.map((hex, si) => (
                    <motion.div key={hex}
                      className="w-7 h-7 rounded-lg flex-shrink-0"
                      style={{ background: hex }}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.3 + si * 0.07, ease: "backOut" }} />
                  ))}
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="text-[9px] text-text-muted">{s.assetsPerMonth} assets/mo</span>
                  </div>
                </div>

                {/* Engagement comparison */}
                <div className="flex items-center gap-3">
                  <div className="text-center p-2 rounded-xl bg-text-muted/[0.05] border border-text-muted/10 flex-1">
                    <p className="text-[8px] text-text-muted mb-0.5">Before</p>
                    <p className="text-[16px] font-black text-text-muted/50 tabular-nums">{s.engagementBefore}%</p>
                    <p className="text-[8px] text-text-muted">engagement</p>
                  </div>
                  <TrendingUp className="w-4 h-4 text-brand-green" aria-hidden="true" />
                  <div className={`text-center p-2 rounded-xl ${s.accentBg} flex-1`} style={{ border: "1px solid rgba(139,92,246,0.12)" }}>
                    <p className="text-[8px] text-text-muted mb-0.5">After</p>
                    <p className={`text-[16px] font-black tabular-nums ${s.accentText}`}>{s.engagementAfter}%</p>
                    <p className="text-[8px] text-brand-green font-bold">+{Math.round(((s.engagementAfter - s.engagementBefore) / s.engagementBefore) * 100)}%</p>
                  </div>
                </div>
              </div>

              <div className="px-5 py-4 flex-1">
                <blockquote className="text-[13px] text-text-secondary leading-relaxed">&ldquo;{s.quote}&rdquo;</blockquote>
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
        </div>
      </Container>
    </Section>
  )
}
