import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

/* ─── Variants ───────────────────────────────────────────── */

const cardVariants = cva(
  "relative rounded-2xl transition-shadow duration-300",
  {
    variants: {
      variant: {
        default: "card-base",
        glass:   "glass",
        navy:    "card-navy",
        outline: "bg-transparent border border-brand-purple/20",
        flat:    "bg-surface-section",
        white:   "bg-white border border-[rgba(7,17,47,0.06)]",
      },
      padding: {
        none: "p-0",
        sm:   "p-4",
        md:   "p-6",
        lg:   "p-8",
        xl:   "p-10",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
    },
  }
)

/* ─── Types ──────────────────────────────────────────────── */

interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

interface CardHeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h2" | "h3" | "h4"
}

/* ─── Card ───────────────────────────────────────────────── */

function Card({ className, variant, padding, ...props }: CardProps) {
  return (
    <div
      className={cn(cardVariants({ variant, padding }), className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)} {...props} />
  )
}

function CardTitle({ className, as: Tag = "h3", ...props }: CardHeadingProps) {
  return (
    <Tag
      className={cn(
        "text-h4 font-semibold tracking-subhead text-text-primary",
        className
      )}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-text-secondary leading-relaxed", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("pt-4", className)} {...props} />
  )
}

function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex items-center pt-4", className)} {...props} />
  )
}

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cardVariants,
}
