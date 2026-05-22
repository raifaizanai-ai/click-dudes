import { cn } from "@/lib/utils"

interface ContainerProps {
  children: React.ReactNode
  className?: string
  size?: "sm" | "md" | "lg" | "xl" | "full"
}

export function Container({ children, className, size = "lg" }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-8 lg:px-12",
        size === "sm"   && "max-w-3xl",
        size === "md"   && "max-w-5xl",
        size === "lg"   && "max-w-7xl",
        size === "xl"   && "max-w-[1440px]",
        size === "full" && "max-w-none",
        className
      )}
    >
      {children}
    </div>
  )
}
