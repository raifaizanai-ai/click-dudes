import { ArrowUpRight } from "lucide-react"
import { LinkedInGlyph } from "@/components/shared/LinkedInGlyph"
import { cn } from "@/lib/utils"

interface LinkedInButtonProps {
  href: string
  name: string
  className?: string
}

export function LinkedInButton({ href, name, className }: LinkedInButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${name} on LinkedIn — opens in a new tab`}
      className={cn(
        "group/li inline-flex items-center gap-2.5 pl-3 pr-4 py-2.5 rounded-full",
        "bg-white border border-brand-purple/[0.14] shadow-[0_2px_10px_rgba(7,17,47,0.06)]",
        "hover:border-brand-purple/30 hover:shadow-[0_8px_28px_rgba(139,92,246,0.22)]",
        "transition-all duration-300 hover:-translate-y-0.5 focus-ring",
        className
      )}
    >
      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-brand-purple/10 text-brand-purple group-hover/li:scale-110 transition-transform duration-300">
        <LinkedInGlyph className="w-3.5 h-3.5" />
      </span>
      <span className="text-[13px] font-semibold text-text-primary tracking-wide">
        View LinkedIn
      </span>
      <ArrowUpRight
        aria-hidden="true"
        className="w-3.5 h-3.5 text-transparent -ml-1.5 -translate-x-1 group-hover/li:text-brand-purple group-hover/li:ml-0 group-hover/li:translate-x-0 transition-all duration-300"
      />
    </a>
  )
}
