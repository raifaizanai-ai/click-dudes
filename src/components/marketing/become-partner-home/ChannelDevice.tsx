import { cn } from "@/lib/utils"
import type { ChannelDeviceConfig } from "@/components/marketing/become-partner-home/engineData"

interface ChannelDeviceProps {
  channel: ChannelDeviceConfig
  className?: string
}

function WebGlyph() {
  return (
    <div className="w-9 h-7 rounded-[3px] bg-white border border-brand-purple/20 overflow-hidden flex flex-col">
      <div className="h-1.5 bg-surface-section flex items-center gap-0.5 px-1 flex-shrink-0">
        <span className="w-0.5 h-0.5 rounded-full bg-brand-purple/30" />
        <span className="w-0.5 h-0.5 rounded-full bg-brand-purple/30" />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <div className="w-4 h-1 rounded-full bg-brand-purple/15" />
      </div>
    </div>
  )
}

function AppGlyph() {
  return (
    <div className="w-5 h-8 rounded-[5px] bg-white border border-brand-purple/20 flex flex-col items-center justify-center gap-0.5">
      <div className="w-2.5 h-2.5 rounded-[2px] bg-brand-purple/15" />
      <div className="w-3 h-0.5 rounded-full bg-brand-purple/10" />
    </div>
  )
}

function CtvGlyph() {
  return (
    <div className="w-9 h-6 rounded-[3px] bg-brand-navy flex items-center justify-center">
      <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan/60" />
    </div>
  )
}

const GLYPHS: Record<ChannelDeviceConfig["key"], React.ComponentType> = { web: WebGlyph, app: AppGlyph, ctv: CtvGlyph }

export function ChannelDevice({ channel, className }: ChannelDeviceProps) {
  const Glyph = GLYPHS[channel.key]
  return (
    <div className={cn("flex flex-col items-center gap-1.5", className)}>
      <div className="w-14 h-14 rounded-2xl glass-strong border border-brand-purple/15 flex items-center justify-center shadow-[0_8px_20px_rgba(7,17,47,0.08)]">
        <Glyph />
      </div>
      <span className="text-[10px] font-semibold text-text-muted">{channel.label}</span>
    </div>
  )
}
