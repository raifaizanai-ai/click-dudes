"use client"

import { motion } from "framer-motion"
import { Star, TrendingUp } from "lucide-react"
import { LiveDot } from "@/components/shared/LiveDot"
import type { TestimonialItem } from "@/components/marketing/testimonial-carousel-data"

interface MiniChartProps {
  bars: number[]
  hexColor: string
  isActive: boolean
}

function MiniChart({ bars, hexColor, isActive }: MiniChartProps) {
  return (
    <div className="flex items-end gap-[3px] h-9 w-full mt-3" aria-hidden="true">
      {bars.map((v, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-t-[2px]"
          style={{
            height: `${(v / 100) * 36}px`,
            transformOrigin: "bottom",
            background:
              i >= bars.length - 3
                ? `linear-gradient(to top, ${hexColor}ee, ${hexColor}66)`
                : `${hexColor}22`,
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: isActive ? 1 : 0.25 }}
          transition={{ duration: 0.55, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] as const }}
        />
      ))}
    </div>
  )
}

interface TestimonialCarouselCardProps {
  item: TestimonialItem
  isActive: boolean
}

export function TestimonialCarouselCard({ item, isActive }: TestimonialCarouselCardProps) {
  const { icon: Icon } = item

  return (
    <div
      className="w-full h-full rounded-3xl overflow-hidden flex flex-col select-none"
      style={{
        background: "rgba(255,255,255,0.97)",
        border: `1px solid ${item.hexColor}1e`,
        boxShadow: isActive
          ? `0 32px 80px rgba(7,17,47,0.14), 0 0 0 1px ${item.hexColor}22, 0 0 60px ${item.hexColor}18`
          : `0 8px 32px rgba(7,17,47,0.07)`,
        transition: "box-shadow 0.4s ease",
      }}
    >
      {/* Dark navy header */}
      <div
        className="px-5 pt-4 pb-4 flex-shrink-0"
        style={{ background: "linear-gradient(135deg, #07112F 0%, #0D1F4A 100%)" }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <div
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full"
            style={{
              background: `${item.hexColor}28`,
              border: `1px solid ${item.hexColor}55`,
            }}
          >
            <Icon className="w-3 h-3" style={{ color: item.hexColor }} aria-hidden="true" />
            <span
              className="text-[9.5px] font-bold uppercase tracking-wider"
              style={{ color: item.hexColor }}
            >
              {item.category}
            </span>
          </div>
          <LiveDot color={item.dotColor} size="sm" label="" />
        </div>

        <h3 className="text-[17px] font-black text-white leading-tight tracking-tight">
          {item.service}
        </h3>

        <MiniChart bars={item.bars} hexColor={item.hexColor} isActive={isActive} />
      </div>

      {/* Glass body */}
      <div className="flex-1 p-5 flex flex-col gap-3.5">
        {/* Metric pill + 5-star rating */}
        <div className="flex items-center justify-between">
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full"
            style={{
              background: `${item.hexColor}10`,
              border: `1px solid ${item.hexColor}28`,
            }}
          >
            <TrendingUp className="w-3 h-3" style={{ color: item.hexColor }} aria-hidden="true" />
            <span className="text-[14px] font-black text-text-primary">{item.metric}</span>
            <span className="text-[9.5px] text-text-muted font-medium">{item.metricLabel}</span>
          </div>
          <div className="flex gap-0.5" aria-label="5 out of 5 stars">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" aria-hidden="true" />
            ))}
          </div>
        </div>

        {/* Quote */}
        <blockquote className="text-[13.5px] text-text-secondary leading-relaxed flex-1">
          &ldquo;{item.quote}&rdquo;
        </blockquote>

        {/* Client row */}
        <div
          className="flex items-center gap-3 pt-3.5 border-t"
          style={{ borderColor: `${item.hexColor}18` }}
        >
          <div
            className="w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0 text-[11px] font-black text-white"
            style={{
              background: `linear-gradient(135deg, ${item.hexColor}, ${item.hexColor}99)`,
            }}
          >
            {item.initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-[13px] font-bold text-text-primary leading-tight">{item.client}</p>
            <p className="text-[10px] text-text-muted mt-0.5 truncate">{item.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
