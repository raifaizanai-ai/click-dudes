"use client"

import { forwardRef } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "font-medium transition-all duration-200 select-none",
    "focus-ring disabled:pointer-events-none disabled:opacity-50",
    "cursor-pointer",
  ],
  {
    variants: {
      variant: {
        /* Gradient primary — main CTA */
        primary: [
          "relative overflow-hidden btn-shine",
          "bg-gradient-brand text-white",
          "shadow-[0_4px_20px_rgba(139,92,246,0.28)]",
          "hover:shadow-[0_4px_32px_rgba(139,92,246,0.50)]",
          "hover:scale-[1.02] active:scale-[0.98]",
        ],
        /* Violet-blue gradient — alternate primary */
        violet: [
          "bg-gradient-violet-blue text-white",
          "shadow-[0_4px_20px_rgba(168,85,247,0.28)]",
          "hover:shadow-[0_4px_32px_rgba(168,85,247,0.48)]",
          "hover:scale-[1.02] active:scale-[0.98]",
        ],
        /* White card button — secondary action */
        secondary: [
          "bg-white text-text-primary",
          "border border-[rgba(7,17,47,0.09)]",
          "shadow-[0_2px_8px_rgba(7,17,47,0.06)]",
          "hover:border-brand-purple/25 hover:bg-surface-section",
          "hover:shadow-[0_4px_16px_rgba(7,17,47,0.08)]",
          "active:scale-[0.98]",
        ],
        /* Bordered purple — outlined */
        outline: [
          "bg-transparent text-brand-purple",
          "border border-brand-purple/40",
          "hover:bg-brand-purple/8 hover:border-brand-purple/70",
          "active:scale-[0.98]",
        ],
        /* Minimal — ghost */
        ghost: [
          "bg-transparent text-text-primary",
          "hover:bg-surface-section",
          "active:scale-[0.98]",
        ],
        /* Primary + persistent animated glow ring */
        glow: [
          "relative overflow-hidden btn-shine bg-gradient-brand text-white",
          "shadow-[0_0_0_1px_rgba(139,92,246,0.25),0_4px_24px_rgba(139,92,246,0.40)]",
          "hover:shadow-[0_0_0_1px_rgba(139,92,246,0.50),0_4px_40px_rgba(139,92,246,0.65)]",
          "hover:scale-[1.02] active:scale-[0.98]",
        ],
        /* For use on navy/dark backgrounds */
        light: [
          "bg-white text-brand-navy font-semibold",
          "shadow-[0_4px_20px_rgba(255,255,255,0.20)]",
          "hover:shadow-[0_4px_32px_rgba(255,255,255,0.35)]",
          "hover:scale-[1.02] active:scale-[0.98]",
        ],
      },
      size: {
        sm:   "h-9  px-4  text-sm  rounded-xl",
        md:   "h-11 px-6  text-sm  rounded-xl",
        lg:   "h-12 px-8  text-base rounded-2xl",
        xl:   "h-14 px-10 text-base rounded-2xl",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size:    "md",
    },
  }
)

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  )
)

Button.displayName = "Button"

export { Button, buttonVariants }
