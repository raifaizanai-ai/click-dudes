"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type Accent = "purple" | "cyan" | "blue" | "violet" | "green"

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  accent: Accent
  index: number
  href?: string
}

const accentMap: Record<Accent, { icon: string; glow: string }> = {
  purple: {
    icon: "bg-brand-purple/10 text-brand-purple group-hover:bg-brand-purple/18",
    glow: "hover:shadow-[0_20px_56px_rgba(7,17,47,0.12),0_0_0_1px_rgba(139,92,246,0.18),0_0_32px_rgba(139,92,246,0.10)]",
  },
  cyan: {
    icon: "bg-brand-cyan/10 text-brand-cyan group-hover:bg-brand-cyan/18",
    glow: "hover:shadow-[0_20px_56px_rgba(7,17,47,0.12),0_0_0_1px_rgba(103,232,249,0.18),0_0_32px_rgba(103,232,249,0.08)]",
  },
  blue: {
    icon: "bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue/18",
    glow: "hover:shadow-[0_20px_56px_rgba(7,17,47,0.12),0_0_0_1px_rgba(96,165,250,0.18),0_0_32px_rgba(96,165,250,0.08)]",
  },
  violet: {
    icon: "bg-brand-violet/10 text-brand-violet group-hover:bg-brand-violet/18",
    glow: "hover:shadow-[0_20px_56px_rgba(7,17,47,0.12),0_0_0_1px_rgba(168,85,247,0.18),0_0_32px_rgba(168,85,247,0.10)]",
  },
  green: {
    icon: "bg-brand-green/10 text-brand-green group-hover:bg-brand-green/18",
    glow: "hover:shadow-[0_20px_56px_rgba(7,17,47,0.12),0_0_0_1px_rgba(16,185,129,0.18),0_0_32px_rgba(16,185,129,0.08)]",
  },
}

const arrowColors: Record<Accent, string> = {
  purple: "text-brand-purple", cyan: "text-brand-cyan", blue: "text-brand-blue",
  violet: "text-brand-violet", green: "text-brand-green",
}

const cardVariants = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.06 },
  }),
}

export function ServiceCard({ icon: Icon, title, description, accent, index, href }: ServiceCardProps) {
  const colors = accentMap[accent]

  const inner = (
    <motion.div
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.25, ease: "easeOut" } }}
      className={cn(
        "group glass-elevated rounded-2xl p-7 flex flex-col gap-5",
        href ? "cursor-pointer" : "cursor-default",
        "border border-brand-purple/[0.10]",
        "shadow-[0_4px_24px_rgba(7,17,47,0.06)]",
        "hover:border-brand-purple/[0.05]",
        "transition-[box-shadow,border-color] duration-300",
        colors.glow
      )}
    >
      <div className={cn(
        "w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0",
        "transition-all duration-300",
        colors.icon
      )}>
        <Icon aria-hidden="true" className="w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
      </div>

      <div className="flex-1">
        <h3 className="text-base font-semibold text-text-primary leading-snug mb-2">{title}</h3>
        <p className="text-sm text-text-muted leading-relaxed">{description}</p>
      </div>

      <div className={cn(
        "flex items-center gap-1.5 text-xs font-medium",
        "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0",
        "transition-all duration-250",
        arrowColors[accent]
      )}>
        Learn more
        <ArrowRight aria-hidden="true" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
      </div>
    </motion.div>
  )

  if (href) {
    return (
      <Link
        href={href}
        aria-label={`Learn more about ${title}`}
        className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/60 focus-visible:ring-offset-2"
      >
        {inner}
      </Link>
    )
  }

  return inner
}
