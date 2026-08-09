"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import { ScreenshotCrop } from "@/sections/partner-dashboard/shared/ScreenshotCrop"
import type { DashboardScreenshot } from "@/sections/partner-dashboard/data"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

interface BentoModuleCardProps {
  icon: LucideIcon
  title: string
  description: string
  screenshot: DashboardScreenshot
  focal: string
  zoom?: number
  variant?: "lg" | "md" | "wide"
  /** Small static rotation for a collage feel — straightens on hover. */
  tilt?: number
  className?: string
}

const CROP_HEIGHT: Record<NonNullable<BentoModuleCardProps["variant"]>, string> = {
  lg: "h-64 sm:h-80",
  md: "h-40 sm:h-44",
  wide: "h-40 sm:h-48",
}

export function BentoModuleCard({
  icon: Icon,
  title,
  description,
  screenshot,
  focal,
  zoom = 2,
  variant = "md",
  tilt = 0,
  className,
}: BentoModuleCardProps) {
  const reducedMotion = useReducedMotion()
  const isLg = variant === "lg"

  const crop = (
    <ScreenshotCrop
      screenshot={screenshot}
      focal={focal}
      zoom={zoom}
      className={cn(CROP_HEIGHT[variant], variant === "wide" ? "w-full md:w-[46%] rounded-xl" : "w-full", isLg && "rounded-b-none rounded-t-[20px]")}
      sizes={variant === "lg" ? "600px" : "360px"}
    />
  )

  const text = (
    <div className={cn("flex flex-col gap-2", variant === "wide" ? "md:flex-1" : isLg ? "px-6 pb-6 pt-5" : "")}>
      <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-purple/10 text-brand-purple">
        <Icon aria-hidden="true" className="w-5 h-5" />
      </span>
      <h3 className="text-h4 font-semibold tracking-heading text-text-primary">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">{description}</p>
    </div>
  )

  return (
    <motion.div
      whileHover={reducedMotion ? {} : { y: -4, rotate: 0 }}
      initial={false}
      animate={{ rotate: tilt }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(
        "card-base flex gap-5",
        variant === "wide" ? "flex-col md:flex-row md:items-center md:justify-between p-5 sm:p-6" : "flex-col",
        isLg ? "overflow-hidden pt-0" : variant === "md" ? "p-5 sm:p-6" : "",
        className
      )}
    >
      {variant === "wide" ? (
        <>
          {text}
          {crop}
        </>
      ) : (
        <>
          {crop}
          {text}
        </>
      )}
    </motion.div>
  )
}
