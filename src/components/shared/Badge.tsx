import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 font-medium uppercase tracking-label rounded-full border transition-colors select-none",
  {
    variants: {
      variant: {
        purple:  "bg-brand-purple/10 text-brand-purple border-brand-purple/20",
        violet:  "bg-brand-violet/10 text-brand-violet border-brand-violet/20",
        blue:    "bg-brand-blue/10   text-brand-blue   border-brand-blue/20",
        cyan:    "bg-brand-cyan/10   text-brand-cyan   border-brand-cyan/20",
        green:   "bg-brand-green/10  text-brand-green  border-brand-green/20",
        navy:    "bg-brand-navy      text-white         border-brand-navy/80",
        neutral: "bg-surface-section text-text-secondary border-[rgba(7,17,47,0.08)]",
        glass:   "glass text-text-primary",
        outline: "bg-transparent text-brand-purple border-brand-purple/40",
      },
      size: {
        sm: "text-[10px] px-2.5 py-1",
        md: "text-label px-3 py-1.5",
        lg: "text-xs px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "purple",
      size: "md",
    },
  }
)

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean
}

export function Badge({ className, variant, size, dot = false, children, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {dot && (
        <span
          aria-hidden="true"
          className="inline-block w-1.5 h-1.5 rounded-full bg-current opacity-70"
        />
      )}
      {children}
    </span>
  )
}

export { badgeVariants }
