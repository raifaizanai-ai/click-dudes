import { LinkedInGlyph } from "@/components/shared/LinkedInGlyph"
import { cn } from "@/lib/utils"

interface LinkedInIconButtonProps {
  href: string
  name: string
  className?: string
}

/** Compact circular LinkedIn control for tight spaces like a portrait nameplate. */
export function LinkedInIconButton({ href, name, className }: LinkedInIconButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} on LinkedIn — opens in a new tab`}
      title="LinkedIn"
      className={cn(
        "group/lii relative flex-shrink-0 inline-flex items-center justify-center w-8 h-8 rounded-full",
        "bg-white/90 border border-brand-purple/[0.16] text-brand-purple shadow-[0_2px_8px_rgba(7,17,47,0.08)]",
        "hover:scale-110 hover:text-white hover:bg-gradient-brand hover:shadow-[0_4px_18px_rgba(139,92,246,0.45)]",
        "transition-all duration-250 focus-ring",
        className
      )}
    >
      <LinkedInGlyph className="w-4 h-4" />
      <span
        aria-hidden="true"
        className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md bg-brand-navy text-white text-[10px] font-medium whitespace-nowrap opacity-0 scale-90 group-hover/lii:opacity-100 group-hover/lii:scale-100 transition-all duration-200 pointer-events-none"
      >
        LinkedIn
      </span>
    </a>
  )
}
