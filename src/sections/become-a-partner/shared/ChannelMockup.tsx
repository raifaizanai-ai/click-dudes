"use client"

import { motion } from "framer-motion"
import { BrowserChrome } from "@/sections/partner-dashboard/shared/BrowserChrome"
import type { ChannelOption } from "@/sections/become-a-partner/data"
import { cn } from "@/lib/utils"

interface Props {
  channel: ChannelOption
  focused: boolean
  aligned: boolean
}

function WebBody() {
  return (
    <div className="p-4 flex flex-col gap-2.5 bg-white">
      <div className="h-3 rounded-full bg-surface-section w-1/2" />
      <div className="grid grid-cols-3 gap-2 mt-1">
        <div className="h-12 rounded-lg bg-brand-purple/10" />
        <div className="h-12 rounded-lg bg-brand-cyan/10" />
        <div className="h-12 rounded-lg bg-brand-blue/10" />
      </div>
      <div className="h-2 rounded-full bg-surface-section w-full" />
      <div className="h-2 rounded-full bg-surface-section w-2/3" />
    </div>
  )
}

function AppBody() {
  return (
    <div className="p-3 flex flex-col gap-2 bg-white h-full">
      <div className="h-16 rounded-xl bg-gradient-to-br from-brand-purple/15 to-brand-blue/10" />
      <div className="h-2 rounded-full bg-surface-section w-3/4" />
      <div className="h-2 rounded-full bg-surface-section w-1/2" />
      <div className="grid grid-cols-2 gap-1.5 mt-auto">
        <div className="h-8 rounded-lg bg-surface-section" />
        <div className="h-8 rounded-lg bg-brand-purple/10" />
      </div>
    </div>
  )
}

function CtvBody() {
  return (
    <div className="p-4 bg-gradient-to-br from-brand-navy to-[#0D1F52] h-full flex items-center justify-center">
      <div className="w-10 h-10 rounded-full bg-brand-cyan/15 flex items-center justify-center">
        <div className="w-2 h-2 rounded-full bg-brand-cyan animate-[ping-slow_1.8s_ease-out_infinite]" />
      </div>
    </div>
  )
}

const BODY: Record<ChannelOption["key"], React.ComponentType> = { web: WebBody, app: AppBody, ctv: CtvBody }

const FRAME_SHAPE: Record<ChannelOption["key"], string> = {
  web: "aspect-[16/10] rounded-2xl",
  app: "aspect-[9/16] rounded-[28px] max-w-[180px] mx-auto",
  ctv: "aspect-video rounded-xl",
}

export function ChannelMockup({ channel, focused, aligned }: Props) {
  const Body = BODY[channel.key]

  return (
    <motion.div
      animate={{
        scale: aligned ? 0.82 : focused ? 1 : 0.86,
        opacity: aligned ? 1 : focused ? 1 : 0.45,
        y: aligned ? 0 : focused ? 0 : 18,
      }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-4 items-center"
    >
      <div
        className={cn(
          "w-full overflow-hidden glass-strong border transition-colors duration-300",
          FRAME_SHAPE[channel.key],
          focused || aligned ? "border-brand-purple/20 shadow-[0_24px_64px_rgba(139,92,246,0.16)]" : "border-brand-purple/[0.08]"
        )}
      >
        {channel.key === "web" && <BrowserChrome urlLabel="publisher-site.com" />}
        <Body />
      </div>
      <div className="flex flex-wrap justify-center gap-1.5 max-w-xs">
        {channel.tags.map((tag) => (
          <span key={tag} className="px-2.5 py-1 rounded-full glass text-[10px] font-semibold text-text-secondary">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
