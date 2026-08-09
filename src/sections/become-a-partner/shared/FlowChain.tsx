"use client"

import { motion } from "framer-motion"
import { ArrowRight, type LucideIcon } from "lucide-react"
import { BrandMarkNode } from "@/sections/become-a-partner/shared/BrandMarkNode"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

export type FlowNodeSpec =
  | { icon: LucideIcon; label: string; accent?: boolean }
  | { brand: true }

interface FlowChainProps {
  nodes: FlowNodeSpec[]
  pulse?: boolean
  className?: string
}

function FlowNode({ node }: { node: FlowNodeSpec }) {
  if ("brand" in node) return <BrandMarkNode size="sm" />

  return (
    <div
      className={cn(
        "flex flex-col items-center gap-1.5 px-2.5 py-2 rounded-xl border min-w-[64px]",
        node.accent ? "bg-brand-purple/[0.06] border-brand-purple/25" : "glass-strong border-brand-purple/12"
      )}
    >
      <node.icon aria-hidden="true" className="w-4 h-4 text-brand-purple flex-shrink-0" />
      <span className="text-[10px] font-semibold text-text-primary text-center leading-tight whitespace-nowrap">
        {node.label}
      </span>
    </div>
  )
}

export function FlowChain({ nodes, pulse, className }: FlowChainProps) {
  const reduced = useReducedMotion()

  return (
    <div className={cn("flex items-center justify-center gap-1.5 flex-wrap", className)}>
      {nodes.map((node, i) => (
        <div key={i} className="flex items-center gap-1.5">
          <FlowNode node={node} />
          {i < nodes.length - 1 && (
            <div className="relative flex items-center justify-center w-6 h-4 flex-shrink-0">
              <ArrowRight aria-hidden="true" className="w-4 h-4 text-brand-purple/35" />
              {pulse && !reduced && (
                <motion.span
                  className="absolute w-1.5 h-1.5 rounded-full bg-brand-cyan"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1.2, ease: "easeInOut", repeat: Infinity, delay: i * 0.25 }}
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
