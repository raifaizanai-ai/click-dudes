"use client"

import { motion } from "framer-motion"
import { Globe, Smartphone, Tv2 } from "lucide-react"
import { BrandMarkNode } from "@/sections/become-a-partner/shared/BrandMarkNode"
import { useReducedMotion } from "@/hooks/use-media-query"
import { VIEWPORT_ONCE } from "@/lib/animations"

interface Item {
  label: string
  icon: typeof Globe
  chaos: { x: string; y: string; rotate: number }
  order: { x: string; y: string; rotate: number }
}

const ITEMS: Item[] = [
  { label: "Publisher A", icon: Globe,      chaos: { x: "6%",  y: "8%",  rotate: -8 },  order: { x: "8%",  y: "70%", rotate: 0 } },
  { label: "Publisher B", icon: Globe,      chaos: { x: "72%", y: "4%",  rotate: 10 },  order: { x: "30%", y: "82%", rotate: 0 } },
  { label: "Publisher C", icon: Globe,      chaos: { x: "38%", y: "2%",  rotate: -4 },  order: { x: "52%", y: "82%", rotate: 0 } },
  { label: "App",         icon: Smartphone, chaos: { x: "82%", y: "58%", rotate: 6 },   order: { x: "72%", y: "70%", rotate: 0 } },
  { label: "CTV",         icon: Tv2,        chaos: { x: "4%",  y: "62%", rotate: -12 }, order: { x: "88%", y: "58%", rotate: 0 } },
]

export function ChaosToSystemDiagram() {
  const reduced = useReducedMotion()

  return (
    <motion.div
      initial="chaos"
      whileInView="order"
      viewport={VIEWPORT_ONCE}
      className="relative w-full h-[340px] sm:h-[400px] glass rounded-3xl border border-brand-purple/[0.08] overflow-hidden"
    >
      {/* Hub */}
      <motion.div
        variants={{ chaos: { opacity: 0, scale: 0.8 }, order: { opacity: 1, scale: 1 } }}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="absolute left-1/2 top-[18%] -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
      >
        <BrandMarkNode size="md" />
        <span className="text-[10px] font-semibold tracking-widest uppercase text-brand-purple">Click-Dudes</span>
      </motion.div>

      {ITEMS.map((item, i) => (
        <motion.div
          key={item.label}
          variants={{
            chaos: { left: item.chaos.x, top: item.chaos.y, rotate: item.chaos.rotate, opacity: 0.55 },
            order: { left: item.order.x, top: item.order.y, rotate: item.order.rotate, opacity: 1 },
          }}
          transition={reduced ? { duration: 0 } : { duration: 0.7, delay: 0.1 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="absolute flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl glass-strong border border-brand-purple/12"
        >
          <item.icon aria-hidden="true" className="w-3.5 h-3.5 text-brand-purple flex-shrink-0" />
          <span className="text-[11px] font-semibold text-text-primary whitespace-nowrap">{item.label}</span>
        </motion.div>
      ))}
    </motion.div>
  )
}
