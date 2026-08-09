"use client"

import { motion } from "framer-motion"
import { BrandMarkNode } from "@/sections/become-a-partner/shared/BrandMarkNode"
import { VIEWPORT_ONCE } from "@/lib/animations"
import { ENGINE_NODES, CHANNEL_DEVICES } from "@/components/marketing/become-partner-home/engineData"
import { ChannelDevice } from "@/components/marketing/become-partner-home/ChannelDevice"

const RADIUS = 92

export function EngineStageMobile() {
  return (
    <div className="lg:hidden flex flex-col items-center gap-8 py-4">
      <div className="relative" style={{ width: RADIUS * 2 + 70, height: RADIUS * 2 + 70 }}>
        <div className="absolute inset-0 flex items-center justify-center">
          <BrandMarkNode size="md" />
        </div>
        {ENGINE_NODES.map((node, i) => {
          const rad = (node.angle * Math.PI) / 180
          const x = Math.cos(rad) * RADIUS
          const y = Math.sin(rad) * RADIUS
          return (
            <motion.div
              key={node.label}
              className="absolute flex flex-col items-center gap-1"
              style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)`, transform: "translate(-50%, -50%)" }}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: node.depth === "near" ? 1 : 0.75, scale: node.depth === "near" ? 1 : 0.85 }}
              viewport={VIEWPORT_ONCE}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-9 h-9 rounded-xl glass-strong border border-brand-purple/15 flex items-center justify-center">
                <node.icon aria-hidden="true" className="w-3.5 h-3.5 text-brand-purple" />
              </div>
            </motion.div>
          )
        })}
      </div>

      <div className="flex items-center gap-4">
        {CHANNEL_DEVICES.map((ch, i) => (
          <motion.div
            key={ch.key}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT_ONCE}
            transition={{ duration: 0.4, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
          >
            <ChannelDevice channel={ch} />
          </motion.div>
        ))}
      </div>
    </div>
  )
}
