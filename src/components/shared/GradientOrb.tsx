import { cn } from "@/lib/utils"

interface GradientOrbProps {
  color?: "purple" | "violet" | "blue" | "cyan" | "mixed"
  size?: "sm" | "md" | "lg" | "xl" | "2xl"
  blur?: "md" | "lg" | "xl" | "2xl"
  opacity?: number
  /** Enable subtle float keyframe */
  animate?: boolean
  className?: string
}

const sizeMap: Record<NonNullable<GradientOrbProps["size"]>, string> = {
  sm:  "w-40  h-40",
  md:  "w-72  h-72",
  lg:  "w-[400px] h-[400px]",
  xl:  "w-[600px] h-[600px]",
  "2xl": "w-[800px] h-[800px]",
}

const blurMap: Record<NonNullable<GradientOrbProps["blur"]>, string> = {
  md:  "blur-3xl",
  lg:  "blur-[60px]",
  xl:  "blur-[90px]",
  "2xl": "blur-[120px]",
}

const colorMap: Record<NonNullable<GradientOrbProps["color"]>, string> = {
  purple: "bg-brand-purple",
  violet: "bg-brand-violet",
  blue:   "bg-brand-blue",
  cyan:   "bg-brand-cyan",
  mixed:  "bg-gradient-purple-cyan",
}

export function GradientOrb({
  color = "purple",
  size = "lg",
  blur = "xl",
  opacity = 0.15,
  animate = false,
  className,
}: GradientOrbProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "absolute rounded-full pointer-events-none select-none",
        sizeMap[size],
        blurMap[blur],
        colorMap[color],
        animate && "animate-[float_7s_ease-in-out_infinite]",
        className
      )}
      style={{ opacity }}
    />
  )
}
