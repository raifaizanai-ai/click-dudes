"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { CATEGORY_COLOR, CATEGORY_GRADIENT } from "@/types/blog"
import type { BlogArticle } from "@/types/blog"

interface BlogCardProps {
  article: BlogArticle
  featured?: boolean
  index?: number
}

const cardVariant = {
  hidden:  { opacity: 0, y: 32 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.07 },
  }),
}

export function BlogCard({ article, featured = false, index = 0 }: BlogCardProps) {
  const categoryColor    = CATEGORY_COLOR[article.category]
  const categoryGradient = CATEGORY_GRADIENT[article.category]

  if (featured) {
    return (
      <motion.article
        custom={index}
        variants={cardVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="group relative rounded-3xl glass border border-brand-purple/[0.12] overflow-hidden shadow-[0_8px_40px_rgba(7,17,47,0.08)] cursor-pointer"
      >
        <Link href={`/blog/${article.slug}`} className="block focus-ring rounded-3xl">
          {/* Gradient banner */}
          <div className={cn(
            "relative h-52 bg-gradient-to-br",
            categoryGradient,
            "flex items-end p-8"
          )}>
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30"
              style={{ background: "radial-gradient(ellipse 70% 80% at 20% 30%, rgba(139,92,246,0.25), transparent 65%)" }}
            />
            <span className={cn(
              "relative z-10 inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide",
              categoryColor
            )}>
              {article.category}
            </span>
          </div>

          <div className="p-8">
            <h2 className="text-h3 font-bold text-text-primary tracking-heading text-balance leading-snug mb-3 group-hover:text-brand-purple transition-colors duration-300">
              {article.title}
            </h2>
            <p className="text-body text-text-secondary line-clamp-3 mb-6 text-pretty">
              {article.excerpt}
            </p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-text-muted text-sm">
                <Clock className="w-4 h-4" aria-hidden="true" />
                <span>{article.readTime} min read</span>
              </div>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple group-hover:gap-2.5 transition-all duration-300">
                Read article <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </span>
            </div>
          </div>
        </Link>
      </motion.article>
    )
  }

  return (
    <motion.article
      custom={index}
      variants={cardVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative rounded-2xl glass border border-brand-purple/[0.10] overflow-hidden shadow-[0_4px_20px_rgba(7,17,47,0.06)] cursor-pointer flex flex-col"
    >
      <Link href={`/blog/${article.slug}`} className="flex flex-col flex-1 focus-ring rounded-2xl">
        {/* Mini gradient banner */}
        <div className={cn(
          "h-2 bg-gradient-to-r",
          categoryGradient
        )} />

        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-3">
            <span className={cn(
              "inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wide",
              categoryColor
            )}>
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-text-muted text-xs">
              <Clock className="w-3.5 h-3.5" aria-hidden="true" />
              {article.readTime} min
            </span>
          </div>

          <h3 className="font-bold text-text-primary text-[17px] leading-snug tracking-tight text-balance mb-2 group-hover:text-brand-purple transition-colors duration-300 line-clamp-3">
            {article.title}
          </h3>

          <p className="text-sm text-text-secondary line-clamp-2 flex-1 text-pretty mb-4">
            {article.excerpt}
          </p>

          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-purple group-hover:gap-2 transition-all duration-300 mt-auto">
            Read more <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </span>
        </div>
      </Link>
    </motion.article>
  )
}
