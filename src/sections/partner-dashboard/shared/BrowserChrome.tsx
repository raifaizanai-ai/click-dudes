import { cn } from "@/lib/utils"

interface BrowserChromeProps {
  urlLabel: string
  className?: string
}

export function BrowserChrome({ urlLabel, className }: BrowserChromeProps) {
  return (
    <div className={cn("flex items-center gap-2 px-4 py-2.5 bg-white/60 border-b border-brand-purple/[0.08]", className)}>
      <div className="flex items-center gap-1.5" aria-hidden="true">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
      </div>
      <div className="flex-1 flex justify-center">
        <span className="text-[11px] text-text-muted/80 bg-surface-section/80 rounded-full px-3 py-0.5 truncate max-w-[220px]">
          {urlLabel}
        </span>
      </div>
    </div>
  )
}
