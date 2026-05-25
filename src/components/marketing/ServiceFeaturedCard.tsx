"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, ShoppingCart, TrendingUp, Code2, Zap, Globe } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export type FeaturedCategory = "ecommerce" | "development"

export interface ServiceFeaturedCardProps {
  icon:        LucideIcon
  title:       string
  description: string
  category:    FeaturedCategory
  href:        string
  index:       number
  features:    string[]
}

const STYLES: Record<FeaturedCategory, {
  label: string; chipBg: string; chipText: string
  iconBg: string; iconText: string; glow: string; bloom: string; dot: string
}> = {
  ecommerce: {
    label: "eCommerce", chipBg: "bg-brand-purple/[0.08]", chipText: "text-brand-purple",
    iconBg: "bg-brand-purple/[0.10]", iconText: "text-brand-purple",
    glow: "rgba(139,92,246,0.18)", bloom: "rgba(139,92,246,0.06)", dot: "bg-brand-purple",
  },
  development: {
    label: "Development", chipBg: "bg-brand-blue/[0.08]", chipText: "text-brand-blue",
    iconBg: "bg-brand-blue/[0.10]", iconText: "text-brand-blue",
    glow: "rgba(96,165,250,0.18)", bloom: "rgba(96,165,250,0.06)", dot: "bg-brand-blue",
  },
}

const MOCK_PRODUCTS = [
  { emoji: "👟", price: "$149", sales: "214 sold" },
  { emoji: "🎧", price: "$89",  sales: "187 sold" },
  { emoji: "📱", price: "$299", sales: "96 sold"  },
]

function EcommerceVisual() {
  return (
    <div className="glass-subtle rounded-2xl overflow-hidden border border-white/50 text-left">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/30 bg-brand-purple/[0.04]">
        <ShoppingCart className="w-3 h-3 text-brand-purple shrink-0" aria-hidden="true" />
        <span className="text-[10px] font-bold text-text-primary">My Store</span>
        <div className="ml-auto flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse inline-block" />
          <span className="text-[9px] text-brand-green font-semibold">Live</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5 p-2.5">
        {MOCK_PRODUCTS.map((p) => (
          <div key={p.emoji} className="rounded-xl bg-white/70 border border-white/50 p-2 text-center">
            <div className="h-9 rounded-lg bg-gradient-to-br from-brand-purple/[0.08] to-brand-blue/[0.06] mb-1.5 flex items-center justify-center text-xl">
              {p.emoji}
            </div>
            <div className="h-1.5 w-4/5 mx-auto rounded-full bg-brand-navy/[0.08] mb-1.5" />
            <span className="text-[10px] font-bold text-brand-green">{p.price}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between px-3 py-2 border-t border-white/20">
        <div className="flex items-center gap-1">
          <TrendingUp className="w-3 h-3 text-brand-green" aria-hidden="true" />
          <span className="text-[9px] text-brand-green font-semibold">+34% this month</span>
        </div>
        <span className="text-[11px] font-bold text-brand-purple">$4,812</span>
      </div>
    </div>
  )
}

function WebDevVisual() {
  return (
    <div className="rounded-2xl overflow-hidden border border-white/50 shadow-sm">
      <div className="flex items-center gap-2 px-3 py-2 bg-white/65 border-b border-white/40">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 h-3 rounded-full bg-white/70 border border-white/50 flex items-center px-2">
          <Globe className="w-2 h-2 text-brand-green mr-1" aria-hidden="true" />
          <div className="h-1 flex-1 rounded-full bg-brand-navy/10" />
        </div>
        <Zap className="w-3 h-3 text-brand-green" aria-hidden="true" />
      </div>
      <div className="p-2.5 bg-white/25">
        <div className="h-10 rounded-xl bg-gradient-to-r from-brand-purple/[0.10] to-brand-blue/[0.07] mb-2 flex items-center gap-2 px-2.5">
          <div className="w-12 h-2 rounded-full bg-brand-navy/20" />
          <div className="ml-auto w-8 h-4 rounded-full bg-brand-purple/25" />
        </div>
        <div className="grid grid-cols-3 gap-1.5 mb-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-8 rounded-lg bg-white/70 border border-white/50 flex items-center justify-center">
              <div className="w-5 h-1.5 rounded-full bg-brand-navy/[0.12]" />
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          <div className="h-2 w-5/6 rounded-full bg-brand-navy/[0.07]" />
          <div className="h-2 w-3/4 rounded-full bg-brand-navy/[0.05]" />
          <div className="h-2 w-4/6 rounded-full bg-brand-navy/[0.05]" />
        </div>
      </div>
    </div>
  )
}

const cardVariants = {
  hidden:  { opacity: 0, y: 28, filter: "blur(6px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.08 },
  }),
}

export function ServiceFeaturedCard({ icon: Icon, title, description, category, href, index, features }: ServiceFeaturedCardProps) {
  const s = STYLES[category]
  return (
    <Link href={href} className="block rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/60">
      <motion.div
        variants={cardVariants} custom={index} initial="hidden" whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        whileHover={{ y: -8, scale: 1.015, transition: { duration: 0.28, ease: "easeOut" } }}
        className="group relative glass-strong rounded-3xl p-5 sm:p-6 overflow-hidden border border-white/55 transition-[box-shadow,border-color] duration-300 h-full"
        style={{ boxShadow: `0 4px 24px rgba(7,17,47,0.05), 0 0 0 1px ${s.glow}` }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement
          el.style.boxShadow = `0 24px 72px ${s.glow}, 0 8px 24px rgba(7,17,47,0.08), 0 0 0 1px ${s.glow}`
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement
          el.style.boxShadow = `0 4px 24px rgba(7,17,47,0.05), 0 0 0 1px ${s.glow}`
        }}
      >
        <div aria-hidden="true" className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-3xl"
          style={{ background: `radial-gradient(ellipse at 20% 0%, ${s.bloom} 0%, transparent 60%)` }} />
        <div aria-hidden="true" className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 ease-in-out pointer-events-none"
          style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 50%, transparent 70%)" }} />

        <div className="relative flex flex-col sm:flex-row gap-5 h-full">
          <div className="flex-1 flex flex-col gap-3 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <div className={cn("w-11 h-11 rounded-2xl flex items-center justify-center shrink-0", s.iconBg)}>
                <Icon className={cn("w-5 h-5", s.iconText)} aria-hidden="true" />
              </div>
              <span className={cn("text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full", s.chipBg, s.chipText)}>
                {s.label}
              </span>
            </div>
            <div>
              <h3 className="text-[15px] font-bold text-text-primary mb-1.5 group-hover:text-gradient-brand transition-all duration-200">{title}</h3>
              <p className="text-[12px] text-text-muted leading-relaxed">{description}</p>
            </div>
            <ul className="flex flex-col gap-1.5">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <div className={cn("w-1.5 h-1.5 rounded-full shrink-0", s.dot)} />
                  <span className="text-[11px] text-text-secondary">{f}</span>
                </li>
              ))}
            </ul>
            <div className={cn("flex items-center gap-1.5 text-[11px] font-semibold mt-auto", s.iconText)}>
              Explore Service
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" aria-hidden="true" />
            </div>
          </div>
          <div className="w-full sm:w-44 lg:w-48 flex-shrink-0 self-start">
            {category === "ecommerce" ? <EcommerceVisual /> : <WebDevVisual />}
          </div>
        </div>
      </motion.div>
    </Link>
  )
}
