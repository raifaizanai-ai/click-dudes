"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Search, LineChart, TrendingUp, TrendingDown } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export type WideCategory = "ppc" | "seo"

export interface ServiceWideCardProps {
  icon:        LucideIcon
  title:       string
  description: string
  category:    WideCategory
  href:        string
  index:       number
  stat:        { value: string; label: string }
}

const STYLES: Record<WideCategory, {
  label: string; chipBg: string; chipText: string
  iconBg: string; iconText: string; glow: string; bloom: string; dot: string
}> = {
  ppc: {
    label: "PPC & SEM", chipBg: "bg-brand-green/[0.08]", chipText: "text-brand-green",
    iconBg: "bg-brand-green/[0.10]", iconText: "text-brand-green",
    glow: "rgba(16,185,129,0.16)", bloom: "rgba(16,185,129,0.05)", dot: "bg-brand-green",
  },
  seo: {
    label: "SEO", chipBg: "bg-brand-purple/[0.08]", chipText: "text-brand-purple",
    iconBg: "bg-brand-purple/[0.10]", iconText: "text-brand-purple",
    glow: "rgba(139,92,246,0.16)", bloom: "rgba(139,92,246,0.06)", dot: "bg-brand-purple",
  },
}

const SERP_ROWS = [
  { isAd: true,  title: "Premium Widgets, Free Shipping", url: "yoursite.com", desc: "Shop Now" },
  { isAd: false, title: "Cheap Widgets Online",            url: "competitor.com", desc: "" },
  { isAd: false, title: "Widgets On Sale",                 url: "generic.net",  desc: "" },
]

const SEO_ROWS = [
  { kw: "buy widgets online",     pos: 1,  delta: "up"   },
  { kw: "best ecommerce store",   pos: 3,  delta: "up"   },
  { kw: "shopify development",    pos: 2,  delta: "same" },
  { kw: "premium widget deals",   pos: 5,  delta: "up"   },
]

function GoogleAdsVisual() {
  return (
    <div className="glass-subtle rounded-xl overflow-hidden border border-white/40 text-left">
      <div className="flex items-center gap-1.5 px-2.5 py-2 border-b border-white/30 bg-brand-green/[0.03]">
        <Search className="w-3 h-3 text-text-muted shrink-0" aria-hidden="true" />
        <div className="h-2 flex-1 rounded-full bg-brand-navy/[0.08]" />
      </div>
      {SERP_ROWS.map(({ isAd, title, url, desc }, i) => (
        <div key={i} className={cn("px-2.5 py-1.5 border-b border-white/15 last:border-0", isAd && "bg-brand-green/[0.03]")}>
          <div className="flex items-center gap-1 mb-0.5">
            {isAd && <span className="text-[8px] font-bold px-1 py-px rounded border border-brand-green/25 text-brand-green bg-brand-green/[0.08]">Ad</span>}
            <span className="text-[9px] text-brand-green/80 truncate">{url}</span>
          </div>
          <p className={cn("text-[10px] font-semibold truncate", isAd ? "text-brand-blue" : "text-text-secondary opacity-40")}>{title}</p>
          {isAd && desc && <p className="text-[9px] text-text-muted mt-0.5">{desc} · Free Returns · 4.8 ⭐</p>}
        </div>
      ))}
    </div>
  )
}

function SeoVisual() {
  return (
    <div className="glass-subtle rounded-xl overflow-hidden border border-white/40 text-left">
      <div className="flex items-center gap-1.5 px-2.5 py-2 border-b border-white/30 bg-brand-purple/[0.03]">
        <LineChart className="w-3 h-3 text-brand-purple shrink-0" aria-hidden="true" />
        <span className="text-[10px] font-semibold text-text-secondary">Keyword Rankings</span>
        <div className="ml-auto flex items-center gap-1">
          <TrendingUp className="w-3 h-3 text-brand-green" aria-hidden="true" />
          <span className="text-[9px] font-bold text-brand-green">+128%</span>
        </div>
      </div>
      {SEO_ROWS.map(({ kw, pos, delta }) => (
        <div key={kw} className="px-2.5 py-1.5 flex items-center gap-2 border-b border-white/15 last:border-0">
          <span className="text-[10px] text-text-secondary flex-1 truncate">{kw}</span>
          <span className="text-[11px] font-bold text-brand-purple tabular-nums">#{pos}</span>
          {delta === "up"
            ? <TrendingUp   className="w-3 h-3 text-brand-green shrink-0" aria-hidden="true" />
            : <TrendingDown className="w-3 h-3 text-text-muted shrink-0"  aria-hidden="true" />}
        </div>
      ))}
    </div>
  )
}

const cardVariants = {
  hidden:  { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.07 },
  }),
}

export function ServiceWideCard({ icon: Icon, title, description, category, href, index, stat }: ServiceWideCardProps) {
  const s = STYLES[category]
  return (
    <Link href={href} className="block rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/60">
      <motion.div
        variants={cardVariants} custom={index} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        whileHover={{ y: -7, scale: 1.012, transition: { duration: 0.28, ease: "easeOut" } }}
        className="group relative glass-strong rounded-3xl p-5 sm:p-6 overflow-hidden border border-white/55 transition-[box-shadow,border-color] duration-300 h-full"
        style={{ boxShadow: `0 4px 24px rgba(7,17,47,0.05), 0 0 0 1px ${s.glow}` }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement
          el.style.boxShadow = `0 20px 56px ${s.glow}, 0 8px 24px rgba(7,17,47,0.08), 0 0 0 1px ${s.glow}`
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement
          el.style.boxShadow = `0 4px 24px rgba(7,17,47,0.05), 0 0 0 1px ${s.glow}`
        }}
      >
        <div aria-hidden="true" className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-3xl"
          style={{ background: `radial-gradient(ellipse at 15% 50%, ${s.bloom} 0%, transparent 55%)` }} />
        <div aria-hidden="true" className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 ease-in-out pointer-events-none"
          style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.10) 50%, transparent 70%)" }} />

        <div className="relative flex flex-col sm:flex-row gap-5 h-full">
          {/* Left content */}
          <div className="flex-1 flex flex-col gap-3 min-w-0">
            <div className="flex items-start justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-2">
                <div className={cn("w-10 h-10 rounded-2xl flex items-center justify-center shrink-0", s.iconBg)}>
                  <Icon className={cn("w-5 h-5", s.iconText)} aria-hidden="true" />
                </div>
                <span className={cn("text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full", s.chipBg, s.chipText)}>
                  {s.label}
                </span>
              </div>
              <div className="text-right">
                <p className={cn("text-xl font-bold tabular-nums", s.iconText)}>{stat.value}</p>
                <p className="text-[10px] text-text-muted">{stat.label}</p>
              </div>
            </div>
            <div>
              <h3 className="text-[14px] font-bold text-text-primary mb-1.5 group-hover:text-gradient-brand transition-all duration-200">{title}</h3>
              <p className="text-[12px] text-text-muted leading-relaxed">{description}</p>
            </div>
            <div className={cn("flex items-center gap-1.5 text-[11px] font-semibold mt-auto", s.iconText)}>
              Explore Service
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </div>
          </div>
          {/* Right visual */}
          <div className="w-full sm:w-52 flex-shrink-0 self-start">
            {category === "ppc" ? <GoogleAdsVisual /> : <SeoVisual />}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
