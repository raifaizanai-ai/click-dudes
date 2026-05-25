"use client"

import { motion } from "framer-motion"
import { ShoppingCart, TrendingUp, Package, Star, Bell } from "lucide-react"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"

const PRODUCTS = [
  { emoji: "👟", name: "Air Max Pro",   price: "$149", sold: 214, rating: 4.9, badge: "Best Seller", badgeColor: "text-brand-purple bg-brand-purple/[0.09]" },
  { emoji: "🎧", name: "Studio Buds",   price: "$89",  sold: 187, rating: 4.8, badge: "Trending",    badgeColor: "text-brand-blue   bg-brand-blue/[0.09]"   },
  { emoji: "📱", name: "Phone Case",    price: "$29",  sold: 96,  rating: 4.7, badge: "New",         badgeColor: "text-brand-green  bg-brand-green/[0.09]"  },
  { emoji: "⌚", name: "Smart Watch",   price: "$299", sold: 82,  rating: 4.9, badge: "Premium",     badgeColor: "text-brand-violet bg-brand-violet/[0.09]" },
  { emoji: "👜", name: "Leather Bag",   price: "$119", sold: 155, rating: 4.8, badge: "Top Rated",   badgeColor: "text-brand-purple   bg-brand-cyan/[0.09]"   },
  { emoji: "🧢", name: "Sport Cap",     price: "$39",  sold: 312, rating: 4.6, badge: "Popular",     badgeColor: "text-brand-purple bg-brand-purple/[0.09]" },
]

const SPARKLINE = [38, 52, 44, 68, 58, 78, 70, 88, 82, 96, 90, 100]
const MAX_SPARK  = Math.max(...SPARKLINE)

const pe = {
  hidden:  { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)",
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] as const } },
}
const cv = (delay: number) => ({
  hidden:  { opacity: 0, y: 14, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0,  filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const, delay } },
})

export function EcommerceHeroPanel() {
  return (
    <motion.div variants={pe} initial="hidden" animate="visible"
      className="w-full max-w-[440px] mx-auto lg:mx-0 glass-strong rounded-3xl overflow-hidden border border-white/60 shadow-[0_24px_72px_rgba(7,17,47,0.10),0_0_0_1px_rgba(139,92,246,0.12)]">

      {/* Store header */}
      <motion.div variants={cv(0.08)} className="flex items-center gap-2.5 px-4 py-3 bg-gradient-to-r from-brand-purple/[0.06] to-transparent border-b border-white/40">
        <div className="w-7 h-7 rounded-xl bg-brand-purple/[0.12] flex items-center justify-center">
          <ShoppingCart className="w-4 h-4 text-brand-purple" aria-hidden="true" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[12px] font-bold text-text-primary leading-none">ClickStore Admin</p>
          <p className="text-[9px] text-text-muted mt-0.5">Shopify · Pro Plan</p>
        </div>
        <LiveDot color="green" size="sm" label="Live" />
      </motion.div>

      {/* Revenue banner */}
      <motion.div variants={cv(0.15)} className="px-4 py-3 flex items-center gap-4 border-b border-white/30 bg-gradient-to-r from-brand-purple/[0.04] to-brand-blue/[0.02]">
        <div className="flex-1">
          <p className="text-[10px] text-text-muted mb-0.5">Monthly Revenue</p>
          <p className="text-2xl font-bold text-text-primary tabular-nums">
            $<CountUp end={84260} duration={2.2} />
          </p>
          <div className="flex items-center gap-1 mt-0.5">
            <TrendingUp className="w-3 h-3 text-brand-green" aria-hidden="true" />
            <span className="text-[10px] font-semibold text-brand-green">+34% vs last month</span>
          </div>
        </div>
        {/* Mini sparkline */}
        <div className="flex items-end gap-[3px] h-10 shrink-0">
          {SPARKLINE.map((v, i) => (
            <motion.div key={i} className="w-1.5 rounded-sm bg-gradient-to-t from-brand-purple to-brand-violet"
              style={{ height: `${(v / MAX_SPARK) * 40}px`, opacity: 0.45 + (i / SPARKLINE.length) * 0.55 }}
              initial={{ scaleY: 0 }} animate={{ scaleY: 1 }}
              transition={{ duration: 0.5, delay: 0.25 + i * 0.04, ease: "easeOut" }} />
          ))}
        </div>
      </motion.div>

      {/* Product grid */}
      <motion.div variants={cv(0.22)} className="p-3.5">
        <div className="flex items-center justify-between mb-2.5">
          <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider">Top Products</p>
          <div className="flex items-center gap-1">
            <Bell className="w-3 h-3 text-brand-purple" aria-hidden="true" />
            <span className="text-[10px] font-semibold text-brand-purple">+12 orders today</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {PRODUCTS.map(({ emoji, name, price, sold, rating, badge, badgeColor }, i) => (
            <motion.div key={name} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.35 }}
              className="glass-subtle rounded-2xl overflow-hidden border border-white/50 flex flex-col">
              <div className="h-12 bg-gradient-to-br from-brand-purple/[0.07] to-brand-blue/[0.05] flex items-center justify-center text-2xl">
                {emoji}
              </div>
              <div className="p-2 flex flex-col gap-1">
                <span className={`text-[9px] font-bold px-1.5 py-px rounded-full self-start ${badgeColor}`}>{badge}</span>
                <p className="text-[10px] font-semibold text-text-primary leading-tight truncate">{name}</p>
                <p className="text-[11px] font-bold text-brand-purple">{price}</p>
                <div className="flex items-center gap-1">
                  <Star className="w-2.5 h-2.5 text-brand-purple fill-brand-purple" aria-hidden="true" />
                  <span className="text-[9px] text-text-muted">{rating} · {sold}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Footer stats */}
      <motion.div variants={cv(0.32)} className="grid grid-cols-3 gap-0 border-t border-white/30">
        {[
          { icon: ShoppingCart, label: "Orders",      value: 3840, suffix: "",  color: "text-brand-purple" },
          { icon: TrendingUp,   label: "Conv. Rate",  value: 4.8,  suffix: "%", color: "text-brand-purple",   decimals: 1 },
          { icon: Package,      label: "Avg AOV",     value: 127,  prefix: "$", color: "text-brand-blue"   },
        ].map(({ icon: Icon, label, value, suffix, prefix, color, decimals }, i) => (
          <div key={label} className={`flex flex-col items-center py-2.5 gap-0.5 ${i < 2 ? "border-r border-white/25" : ""}`}>
            <Icon className={`w-3.5 h-3.5 ${color} mb-0.5`} aria-hidden="true" />
            <p className={`text-[13px] font-bold tabular-nums ${color}`}>
              <CountUp end={value} decimals={decimals ?? 0} prefix={prefix ?? ""} suffix={suffix ?? ""} />
            </p>
            <p className="text-[9px] text-text-muted">{label}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}
