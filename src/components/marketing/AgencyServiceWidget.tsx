"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import {
  LineChart, Megaphone, Search, Code2, Share2,
  ShoppingCart, Palette, BrainCircuit,
} from "lucide-react"

export interface AgencyServiceData {
  id: string
  icon: LucideIcon
  title: string
  metric: string
  metricLabel: string
  hexColor: string
  bars: number[]
  svgX: number
  svgY: number
  leftPct: number
  topPct: number
  floatDelay: number
}

// ViewBox: 960 × 720 · Robot center: (480, 360)
export const AGENCY_SERVICES: AgencyServiceData[] = [
  {
    id: "ai-opt", icon: BrainCircuit, title: "AI Optimization",
    metric: "+41%", metricLabel: "Revenue Yield",
    hexColor: "#8B5CF6", bars: [28, 40, 55, 68, 82, 100],
    svgX: 480, svgY: 48, leftPct: 50.0, topPct: 6.7, floatDelay: 0,
  },
  {
    id: "web-dev", icon: Code2, title: "Web Development",
    metric: "96 / 100", metricLabel: "Lighthouse Score",
    hexColor: "#A855F7", bars: [45, 56, 62, 72, 85, 96],
    svgX: 820, svgY: 128, leftPct: 85.4, topPct: 17.8, floatDelay: 0.8,
  },
  {
    id: "meta", icon: Megaphone, title: "Meta Ads",
    metric: "4.6×", metricLabel: "Avg ROAS",
    hexColor: "#60A5FA", bars: [32, 44, 40, 58, 54, 78],
    svgX: 864, svgY: 358, leftPct: 90.0, topPct: 49.7, floatDelay: 1.6,
  },
  {
    id: "ecom", icon: ShoppingCart, title: "E-Commerce",
    metric: "+220%", metricLabel: "Revenue Growth",
    hexColor: "#10B981", bars: [22, 36, 48, 62, 78, 100],
    svgX: 820, svgY: 594, leftPct: 85.4, topPct: 82.5, floatDelay: 2.4,
  },
  {
    id: "google-ads", icon: Search, title: "Google Ads",
    metric: "7.2%", metricLabel: "Avg CTR",
    hexColor: "#A855F7", bars: [35, 45, 56, 64, 78, 88],
    svgX: 480, svgY: 672, leftPct: 50.0, topPct: 93.3, floatDelay: 3.2,
  },
  {
    id: "branding", icon: Palette, title: "Brand & Design",
    metric: "1,200+", metricLabel: "Assets / Month",
    hexColor: "#60A5FA", bars: [60, 65, 70, 78, 82, 90],
    svgX: 140, svgY: 594, leftPct: 14.6, topPct: 82.5, floatDelay: 4.0,
  },
  {
    id: "social", icon: Share2, title: "Social Media",
    metric: "+450%", metricLabel: "Follower Growth",
    hexColor: "#A855F7", bars: [20, 28, 40, 56, 74, 100],
    svgX: 96,  svgY: 358, leftPct: 10.0, topPct: 49.7, floatDelay: 4.8,
  },
  {
    id: "seo", icon: LineChart, title: "SEO Services",
    metric: "+180%", metricLabel: "Organic Traffic",
    hexColor: "#10B981", bars: [25, 36, 46, 62, 80, 100],
    svgX: 140, svgY: 128, leftPct: 14.6, topPct: 17.8, floatDelay: 5.6,
  },
]

interface AgencyServiceWidgetProps {
  service: AgencyServiceData
  inView: boolean
}

function MiniServiceBars({ bars, hexColor, inView, delay }: {
  bars: number[]; hexColor: string; inView: boolean; delay: number
}) {
  return (
    <div className="flex items-end gap-[2.5px] h-5 w-full mt-2.5" aria-hidden="true">
      {bars.map((v, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-t-[1.5px]"
          style={{
            height: `${(v / 100) * 20}px`,
            transformOrigin: "bottom",
            background:
              i >= bars.length - 2
                ? hexColor
                : `${hexColor}30`,
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: inView ? 1 : 0 }}
          transition={{ duration: 0.5, delay: delay + i * 0.06, ease: [0.16, 1, 0.3, 1] as const }}
        />
      ))}
    </div>
  )
}

export function AgencyServiceWidget({ service, inView }: AgencyServiceWidgetProps) {
  const { icon: Icon } = service

  return (
    <motion.div
      animate={{ y: [0, -(6 + service.floatDelay * 0.4), 0] }}
      transition={{
        duration: 4.5 + service.floatDelay * 0.35,
        repeat: Infinity,
        ease: "easeInOut",
        delay: service.floatDelay,
      }}
      whileHover={{ scale: 1.08, y: -10, transition: { duration: 0.2, ease: "easeOut" } }}
    >
      <div
        className="rounded-2xl p-3.5 w-[148px] cursor-default select-none"
        style={{
          background: "rgba(255,255,255,0.90)",
          backdropFilter: "blur(16px)",
          border: `1px solid ${service.hexColor}22`,
          boxShadow: `0 4px 24px rgba(7,17,47,0.08), 0 0 0 1px ${service.hexColor}14, 0 0 24px ${service.hexColor}10`,
        }}
      >
        {/* Header row */}
        <div className="flex items-center gap-2 mb-2">
          <div
            className="w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: `${service.hexColor}14` }}
          >
            <Icon className="w-3.5 h-3.5" style={{ color: service.hexColor }} aria-hidden="true" />
          </div>
          <span className="text-[10px] font-bold text-text-primary leading-tight truncate flex-1">
            {service.title}
          </span>
          {/* Breathing indicator */}
          <motion.div
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: service.hexColor }}
            animate={{ opacity: [1, 0.3, 1], scale: [1, 1.4, 1] }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: service.floatDelay * 0.3,
            }}
          />
        </div>

        {/* Metric */}
        <p className="text-[17px] font-black text-text-primary leading-none">{service.metric}</p>
        <p className="text-[9px] text-text-muted mt-0.5 mb-0">{service.metricLabel}</p>

        <MiniServiceBars
          bars={service.bars}
          hexColor={service.hexColor}
          inView={inView}
          delay={0.3 + service.floatDelay * 0.08}
        />
      </div>
    </motion.div>
  )
}
