"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export type ServiceCategory = "ecommerce" | "development" | "design" | "social" | "personal-brand" | "paid-social" | "ppc" | "seo"

export interface AgencyServiceCardProps {
  icon:        LucideIcon
  title:       string
  description: string
  category:    ServiceCategory
  href:        string
  index:       number
}

const CATEGORY_STYLES: Record<ServiceCategory, {
  label:    string
  iconBg:   string
  iconText: string
  chipBg:   string
  chipText: string
  glow:     string
  bloom:    string
}> = {
  "ecommerce":    { label: "eCommerce",    iconBg: "bg-brand-purple/10",  iconText: "text-brand-purple", chipBg: "bg-brand-purple/[0.07]", chipText: "text-brand-purple",     glow: "rgba(139,92,246,0.12)",  bloom: "rgba(139,92,246,0.08)"  },
  "development":  { label: "Development",  iconBg: "bg-brand-blue/10",    iconText: "text-brand-blue",   chipBg: "bg-brand-blue/[0.07]",   chipText: "text-brand-blue",       glow: "rgba(96,165,250,0.12)",  bloom: "rgba(96,165,250,0.08)"  },
  "design":       { label: "Design",       iconBg: "bg-brand-violet/10",  iconText: "text-brand-violet", chipBg: "bg-brand-violet/[0.07]", chipText: "text-brand-violet",     glow: "rgba(168,85,247,0.14)",  bloom: "rgba(168,85,247,0.09)"  },
  "social":       { label: "Social Media", iconBg: "bg-brand-cyan/10",    iconText: "text-brand-purple",   chipBg: "bg-brand-cyan/[0.07]",   chipText: "text-brand-purple",       glow: "rgba(103,232,249,0.12)", bloom: "rgba(103,232,249,0.07)" },
  "personal-brand": { label: "Personal Brand", iconBg: "bg-brand-purple/[0.08]", iconText: "text-brand-purple", chipBg: "bg-brand-purple/[0.06]", chipText: "text-brand-purple/80", glow: "rgba(139,92,246,0.10)", bloom: "rgba(139,92,246,0.07)" },
  "paid-social":  { label: "Paid Social",  iconBg: "bg-brand-blue/[0.10]",  iconText: "text-brand-blue",   chipBg: "bg-brand-blue/[0.07]",   chipText: "text-brand-blue",       glow: "rgba(96,165,250,0.12)",  bloom: "rgba(96,165,250,0.07)"  },
  "ppc":          { label: "PPC & SEM",    iconBg: "bg-brand-green/10",   iconText: "text-brand-green",  chipBg: "bg-brand-green/[0.07]",  chipText: "text-brand-green",      glow: "rgba(16,185,129,0.12)",  bloom: "rgba(16,185,129,0.07)"  },
  "seo":          { label: "SEO",          iconBg: "bg-brand-purple/[0.09]", iconText: "text-brand-purple", chipBg: "bg-brand-purple/[0.07]", chipText: "text-brand-purple",   glow: "rgba(139,92,246,0.11)",  bloom: "rgba(139,92,246,0.07)"  },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 30, filter: "blur(4px)" },
  visible: (i: number) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const, delay: i * 0.07 },
  }),
}

export function AgencyServiceCard({ icon: Icon, title, description, category, href, index }: AgencyServiceCardProps) {
  const s = CATEGORY_STYLES[category]

  return (
    <Link href={href} className="block rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/60 focus-visible:ring-offset-2">
      <motion.div
        variants={cardVariants}
        custom={index}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ y: -9, scale: 1.02, transition: { duration: 0.28, ease: "easeOut" } }}
        className="group relative glass-strong rounded-2xl p-5 sm:p-6 flex flex-col gap-4 overflow-hidden border border-white/50 transition-[box-shadow,border-color] duration-350"
        style={{ boxShadow: `0 4px 20px rgba(7,17,47,0.04), 0 0 0 1px rgba(139,92,246,0.07)` }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLDivElement
          el.style.boxShadow = `0 20px 56px ${s.glow}, 0 8px 24px rgba(7,17,47,0.08), 0 0 0 1px ${s.glow}`
          el.style.borderColor = `${s.glow}`
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLDivElement
          el.style.boxShadow = `0 4px 20px rgba(7,17,47,0.04), 0 0 0 1px rgba(139,92,246,0.07)`
          el.style.borderColor = ""
        }}
      >
        {/* Bloom on hover */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
          style={{ background: `radial-gradient(ellipse at 25% 0%, ${s.bloom} 0%, transparent 65%)` }}
        />

        {/* Shimmer sweep */}
        <div
          aria-hidden="true"
          className="absolute inset-0 translate-x-[-110%] group-hover:translate-x-[110%] transition-transform duration-700 ease-in-out pointer-events-none"
          style={{ background: "linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.14) 50%, transparent 70%)" }}
        />

        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div className={cn("relative w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300", s.iconBg)}>
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ boxShadow: `0 0 0 5px ${s.glow}` }}
            />
            <Icon
              aria-hidden="true"
              className={cn("w-5 h-5 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6", s.iconText)}
            />
          </div>
          <span className={cn("text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shrink-0", s.chipBg, s.chipText)}>
            {s.label}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="text-[14.5px] font-bold text-text-primary leading-snug mb-2 group-hover:text-gradient-brand transition-all duration-200">{title}</h3>
          <p className="text-xs text-text-muted leading-relaxed">{description}</p>
        </div>

        {/* CTA arrow */}
        <div className={cn("flex items-center gap-1.5 text-[11px] font-semibold opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-250", s.iconText)}>
          Explore Service
          <ArrowRight aria-hidden="true" className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
        </div>
      </motion.div>
    </Link>
  )
}
