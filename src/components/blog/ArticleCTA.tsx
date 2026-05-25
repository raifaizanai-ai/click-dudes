"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, TrendingUp } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
}

interface ArticleCTAProps {
  content?: string
}

export function ArticleCTA({ content }: ArticleCTAProps) {
  const body = content ?? "Ready to grow your publisher revenue? Click Dudes helps web, app, and CTV publishers maximize earnings through Google AdX, Header Bidding, and AI-powered optimization."

  return (
    <motion.aside
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="my-10 rounded-2xl glass-strong border border-brand-purple/[0.15] p-8 shadow-[0_8px_40px_rgba(7,17,47,0.08),0_0_0_1px_rgba(139,92,246,0.07)]"
      aria-label="Call to action"
    >
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-brand-purple/20 to-brand-blue/20 flex items-center justify-center border border-brand-purple/[0.15]">
          <TrendingUp className="w-5 h-5 text-brand-purple" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <p className="text-body text-text-secondary text-pretty">{body}</p>
        </div>
        <Link
          href="/apply"
          className={cn(
            buttonVariants({ variant: "glow", size: "sm" }),
            "shrink-0 rounded-full group"
          )}
        >
          Apply Now
          <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 transition-transform duration-200" aria-hidden="true" />
        </Link>
      </div>
    </motion.aside>
  )
}
