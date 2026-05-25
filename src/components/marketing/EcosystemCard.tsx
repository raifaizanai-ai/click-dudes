"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type Accent = "purple" | "cyan" | "blue" | "violet" | "green"

interface EcosystemCardProps {
  icon: LucideIcon
  title: string
  description: string
  accent: Accent
  index: number
}

const accentIcon: Record<Accent, string> = {
  purple: "bg-brand-purple/10 text-brand-purple",
  cyan:   "bg-brand-cyan/10   text-brand-purple",
  blue:   "bg-brand-blue/10   text-brand-blue",
  violet: "bg-brand-violet/10 text-brand-violet",
  green:  "bg-brand-green/10  text-brand-green",
}

const accentGlow: Record<Accent, string> = {
  purple: "hover:shadow-[0_16px_48px_rgba(7,17,47,0.10),0_0_0_1px_rgba(139,92,246,0.18),0_0_24px_rgba(139,92,246,0.12)]",
  cyan:   "hover:shadow-[0_16px_48px_rgba(7,17,47,0.10),0_0_0_1px_rgba(103,232,249,0.18),0_0_24px_rgba(103,232,249,0.10)]",
  blue:   "hover:shadow-[0_16px_48px_rgba(7,17,47,0.10),0_0_0_1px_rgba(96,165,250,0.18),0_0_24px_rgba(96,165,250,0.10)]",
  violet: "hover:shadow-[0_16px_48px_rgba(7,17,47,0.10),0_0_0_1px_rgba(168,85,247,0.18),0_0_24px_rgba(168,85,247,0.12)]",
  green:  "hover:shadow-[0_16px_48px_rgba(7,17,47,0.10),0_0_0_1px_rgba(16,185,129,0.18),0_0_24px_rgba(16,185,129,0.10)]",
}

const cardVariants = {
  hidden:  { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.07 },
  }),
}

export function EcosystemCard({ icon: Icon, title, description, accent, index }: EcosystemCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      animate={{
        y: [0, -6, 0],
        transition: { duration: 4 + index * 0.4, repeat: Infinity, ease: [0.45, 0, 0.55, 1] as const, delay: index * 0.25 },
      }}
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25, ease: "easeOut" } }}
      className={cn(
        "glass-elevated rounded-2xl p-6 flex flex-col gap-4 cursor-default group",
        "border border-brand-purple/[0.10]",
        "shadow-[0_4px_24px_rgba(7,17,47,0.06),0_0_0_1px_rgba(139,92,246,0.04)]",
        "transition-[box-shadow] duration-300",
        accentGlow[accent]
      )}
    >
      <div className={cn(
        "w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0",
        "transition-transform duration-300 group-hover:scale-110",
        accentIcon[accent]
      )}>
        <Icon aria-hidden="true" className="w-5 h-5" />
      </div>
      <div>
        <h3 className="text-[15px] font-semibold text-text-primary leading-snug mb-1.5">{title}</h3>
        <p className="text-[13px] text-text-muted leading-relaxed">{description}</p>
      </div>
    </motion.div>
  )
}
