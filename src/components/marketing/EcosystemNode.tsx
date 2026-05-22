"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

type NodeAccent = "purple" | "cyan" | "blue" | "violet" | "green"

interface EcosystemNodeProps {
  icon: LucideIcon
  title: string
  description: string
  accent: NodeAccent
  floatDelay?: number
  className?: string
}

const iconStyle: Record<NodeAccent, string> = {
  purple: "bg-brand-purple/10 text-brand-purple shadow-[0_0_14px_rgba(139,92,246,0.28)]",
  cyan:   "bg-brand-cyan/10   text-brand-cyan   shadow-[0_0_14px_rgba(103,232,249,0.22)]",
  blue:   "bg-brand-blue/10   text-brand-blue   shadow-[0_0_14px_rgba(96,165,250,0.22)]",
  violet: "bg-brand-violet/10 text-brand-violet shadow-[0_0_14px_rgba(168,85,247,0.25)]",
  green:  "bg-brand-green/10  text-brand-green  shadow-[0_0_14px_rgba(16,185,129,0.20)]",
}

const nodeHover: Record<NodeAccent, string> = {
  purple: "hover:shadow-[0_8px_32px_rgba(7,17,47,0.10),0_0_0_1px_rgba(139,92,246,0.22),0_0_20px_rgba(139,92,246,0.14)]",
  cyan:   "hover:shadow-[0_8px_32px_rgba(7,17,47,0.10),0_0_0_1px_rgba(103,232,249,0.22),0_0_20px_rgba(103,232,249,0.10)]",
  blue:   "hover:shadow-[0_8px_32px_rgba(7,17,47,0.10),0_0_0_1px_rgba(96,165,250,0.22),0_0_20px_rgba(96,165,250,0.10)]",
  violet: "hover:shadow-[0_8px_32px_rgba(7,17,47,0.10),0_0_0_1px_rgba(168,85,247,0.22),0_0_20px_rgba(168,85,247,0.14)]",
  green:  "hover:shadow-[0_8px_32px_rgba(7,17,47,0.10),0_0_0_1px_rgba(16,185,129,0.22),0_0_20px_rgba(16,185,129,0.10)]",
}

const floatVariants = {
  animate: (d: number) => ({
    y: [0, -8, 0],
    transition: {
      duration: 4.2 + d * 0.6,
      repeat: Infinity,
      ease: [0.45, 0, 0.55, 1] as const,
      delay: d * 0.45,
    },
  }),
}

export function EcosystemNode({ icon: Icon, title, description, accent, floatDelay = 0, className }: EcosystemNodeProps) {
  return (
    <motion.div
      custom={floatDelay}
      variants={floatVariants}
      animate="animate"
      whileHover={{ scale: 1.06, transition: { duration: 0.2, ease: "easeOut" } }}
      className={cn(
        "glass rounded-2xl p-3 sm:p-3.5 w-[144px] flex flex-col items-center gap-2 text-center cursor-default select-none",
        "shadow-[0_4px_20px_rgba(7,17,47,0.08),0_0_0_1px_rgba(139,92,246,0.10)]",
        "transition-[box-shadow] duration-300",
        nodeHover[accent],
        className
      )}
    >
      <div className={cn("w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0", iconStyle[accent])}>
        <Icon aria-hidden="true" className="w-[18px] h-[18px]" />
      </div>
      <div>
        <h3 className="text-[11px] font-semibold text-text-primary leading-tight">{title}</h3>
        <p className="text-[10px] text-text-muted leading-snug mt-0.5">{description}</p>
      </div>
    </motion.div>
  )
}
