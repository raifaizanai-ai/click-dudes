"use client"

import { motion } from "framer-motion"
import { Layers, Sparkles } from "lucide-react"
import { LiveDot } from "@/components/shared/LiveDot"

const PALETTE = [
  { hex: "#8B5CF6", label: "Brand"  },
  { hex: "#60A5FA", label: "Sky"    },
  { hex: "#67E8F9", label: "Cyan"   },
  { hex: "#A855F7", label: "Violet" },
  { hex: "#10B981", label: "Green"  },
  { hex: "#F59E0B", label: "Amber"  },
]

const LAYERS = [
  { name: "Brand Headline",   color: "text-brand-purple", bg: "bg-brand-purple/[0.08]", visible: true  },
  { name: "Background Blob",  color: "text-brand-blue",   bg: "bg-brand-blue/[0.08]",   visible: true  },
  { name: "Product Image",    color: "text-brand-purple",   bg: "bg-brand-cyan/[0.08]",   visible: true  },
  { name: "CTA Button",       color: "text-brand-green",  bg: "bg-brand-green/[0.08]",  visible: true  },
]

const FORMATS = [
  { label: "Instagram Post",  size: "1080×1080", emoji: "🖼" },
  { label: "Story",           size: "1080×1920", emoji: "📱" },
  { label: "LinkedIn Banner", size: "1584×396",  emoji: "💼" },
  { label: "Facebook Ad",     size: "1200×628",  emoji: "📢" },
]

const CONTENT_CHIPS = ["Brand Identity", "Social Creatives", "Ad Graphics", "Amazon A+", "Product Imagery"]

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

export function GraphicDesignHeroPanel() {
  return (
    <motion.div variants={pe} initial="hidden" animate="visible"
      className="w-full max-w-[440px] mx-auto lg:mx-0 glass-strong rounded-3xl overflow-hidden border border-white/60 shadow-[0_24px_72px_rgba(7,17,47,0.10),0_0_0_1px_rgba(168,85,247,0.12)]">

      {/* Design tool header */}
      <div className="flex items-center gap-2.5 px-4 py-2.5 bg-white/55 border-b border-white/45">
        <div className="flex gap-1.5 shrink-0">
          <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <div className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <div className="flex-1 flex items-center gap-1.5 px-2">
          <Sparkles className="w-3 h-3 text-brand-violet" aria-hidden="true" />
          <span className="text-[11px] font-semibold text-text-primary">Brand_Campaign_v3.fig</span>
        </div>
        <LiveDot color="purple" size="sm" label="Editing" />
      </div>

      {/* Canvas + layers panel */}
      <motion.div variants={cv(0.12)} className="flex gap-2 p-3 border-b border-white/30">
        {/* Layers panel */}
        <div className="w-28 shrink-0">
          <p className="text-[9px] font-semibold text-text-muted uppercase tracking-wider mb-1.5 px-1">
            <Layers className="w-3 h-3 inline mr-1 text-brand-violet" aria-hidden="true" />
            Layers
          </p>
          <div className="flex flex-col gap-1">
            {LAYERS.map(({ name, color, bg, visible }, i) => (
              <motion.div key={name} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.06, duration: 0.3 }}
                className={`flex items-center gap-1.5 px-2 py-1.5 rounded-lg ${bg} border border-white/30`}>
                <div className={`w-2 h-2 rounded-sm ${visible ? "bg-brand-violet" : "bg-text-muted/30"}`} />
                <span className={`text-[9px] font-medium truncate ${color}`}>{name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Canvas mockup */}
        <div className="flex-1 glass-subtle rounded-2xl overflow-hidden border border-white/40">
          {/* Canvas content - mini Instagram post */}
          <div className="relative h-full min-h-[120px] bg-gradient-to-br from-brand-purple/[0.10] via-brand-violet/[0.07] to-brand-blue/[0.08] flex flex-col items-center justify-center gap-2 p-3">
            <div aria-hidden="true" className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, rgba(139,92,246,0.18) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(96,165,250,0.14) 0%, transparent 50%)" }} />
            <div className="relative z-10 text-center">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple to-brand-violet mx-auto mb-1.5 flex items-center justify-center">
                <span className="text-white font-bold text-xs">CD</span>
              </div>
              <div className="h-2 w-20 rounded-full bg-white/50 mx-auto mb-1" />
              <div className="h-1.5 w-14 rounded-full bg-white/35 mx-auto mb-2.5" />
              <div className="h-5 w-16 rounded-full bg-gradient-to-r from-brand-purple to-brand-violet mx-auto flex items-center justify-center">
                <span className="text-[9px] font-bold text-white">Shop Now</span>
              </div>
            </div>
            {/* Selection handles */}
            <div className="absolute inset-3 border border-brand-violet/40 rounded-lg pointer-events-none">
              {["-top-1 -left-1", "-top-1 -right-1", "-bottom-1 -left-1", "-bottom-1 -right-1"].map(pos => (
                <div key={pos} className={`absolute ${pos} w-2 h-2 bg-white border border-brand-violet rounded-sm`} />
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Color palette */}
      <motion.div variants={cv(0.22)} className="px-4 py-3 border-b border-white/30">
        <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">Brand Palette</p>
        <div className="flex items-center gap-2">
          {PALETTE.map(({ hex, label }, i) => (
            <motion.div key={hex} className="flex flex-col items-center gap-1" title={label}
              initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.3, ease: "backOut" }}>
              <div className="w-7 h-7 rounded-xl border border-white/60 shadow-sm" style={{ backgroundColor: hex }} />
              <span className="text-[8px] text-text-muted">{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Format grid */}
      <motion.div variants={cv(0.30)} className="px-4 py-3 border-b border-white/30">
        <p className="text-[10px] font-semibold text-text-muted uppercase tracking-wider mb-2">Supported Formats</p>
        <div className="grid grid-cols-2 gap-1.5">
          {FORMATS.map(({ label, size, emoji }) => (
            <div key={label} className="glass-subtle rounded-xl px-2.5 py-1.5 flex items-center gap-2 border border-white/35">
              <span className="text-[13px]" role="img" aria-hidden="true">{emoji}</span>
              <div>
                <p className="text-[10px] font-semibold text-text-primary leading-tight">{label}</p>
                <p className="text-[9px] text-text-muted">{size}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Content type chips */}
      <motion.div variants={cv(0.38)} className="px-4 py-3 flex flex-wrap gap-1.5">
        {CONTENT_CHIPS.map((chip, i) => (
          <motion.span key={chip} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45 + i * 0.06, duration: 0.28 }}
            className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-brand-violet/[0.08] text-brand-violet border border-brand-violet/[0.12]">
            {chip}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  )
}
