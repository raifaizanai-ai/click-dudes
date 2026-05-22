"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Clock, Tag, ArrowLeft, ArrowRight } from "lucide-react"
import { ReadingProgress } from "@/components/blog/ReadingProgress"
import { ArticleCTA }      from "@/components/blog/ArticleCTA"
import { ArticleFAQs }     from "@/components/blog/ArticleFAQs"
import { BlogCard }         from "@/components/blog/BlogCard"
import { AUTHOR, CATEGORY_COLOR } from "@/types/blog"
import { getRelatedArticles } from "@/lib/blogUtils"
import { cn } from "@/lib/utils"
import type { BlogArticle, ArticleSection } from "@/types/blog"

interface BlogArticlePageProps {
  article: BlogArticle
}

const fadeUp = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
}

function ArticleContent({ sections }: { sections: ArticleSection[] }) {
  return (
    <div className="prose-custom">
      {sections.map((section, i) => {
        switch (section.type) {
          case "h2":
            return (
              <h2 key={i} className="text-2xl font-bold text-text-primary tracking-tight mt-10 mb-4 text-balance">
                {section.content}
              </h2>
            )
          case "h3":
            return (
              <h3 key={i} className="text-xl font-semibold text-text-primary tracking-tight mt-7 mb-3">
                {section.content}
              </h3>
            )
          case "p":
            return (
              <p key={i} className="text-[17px] leading-relaxed text-text-secondary mb-5 text-pretty">
                {section.content}
              </p>
            )
          case "ul":
            return (
              <ul key={i} className="my-5 space-y-2 pl-0 list-none">
                {section.items?.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-[16px] text-text-secondary leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-purple"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            )
          case "ol":
            return (
              <ol key={i} className="my-5 space-y-2 pl-0 list-none counter-reset-[item]">
                {section.items?.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-[16px] text-text-secondary leading-relaxed">
                    <span
                      aria-hidden="true"
                      className="flex-shrink-0 w-6 h-6 rounded-full bg-brand-purple/10 border border-brand-purple/20 flex items-center justify-center text-xs font-bold text-brand-purple"
                    >
                      {j + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ol>
            )
          case "quote":
            return (
              <blockquote key={i} className="my-8 pl-5 border-l-[3px] border-brand-purple/40 italic text-text-secondary text-[17px] leading-relaxed">
                {section.content}
              </blockquote>
            )
          case "cta":
            return <ArticleCTA key={i} content={section.content} />
          case "faqs":
            return section.faqs ? <ArticleFAQs key={i} faqs={section.faqs} /> : null
          default:
            return null
        }
      })}
    </div>
  )
}

export function BlogArticlePage({ article }: BlogArticlePageProps) {
  const related = getRelatedArticles(article.slug, 3)
  const catColor = CATEGORY_COLOR[article.category]

  return (
    <>
      <ReadingProgress />

      <>
        {/* ── Hero ── */}
        <section className="section-base pt-10 pb-8 sm:pt-16 sm:pb-12">
          <div className="container-base">
            <div className="max-w-3xl mx-auto">
              <motion.div variants={fadeUp} initial="hidden" animate="visible">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-sm text-text-muted hover:text-brand-purple transition-colors duration-200 mb-8 focus-ring rounded"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  Back to Blog
                </Link>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.05 }}
                className="flex flex-wrap items-center gap-3 mb-5"
              >
                <span className={cn("inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wide", catColor)}>
                  {article.category}
                </span>
                <span className="flex items-center gap-1.5 text-text-muted text-sm">
                  <Clock className="w-3.5 h-3.5" aria-hidden="true" />
                  {article.readTime} min read
                </span>
                <time
                  dateTime={article.publishedAt}
                  className="text-text-muted text-sm"
                >
                  {new Date(article.publishedAt).toLocaleDateString("en-US", {
                    year: "numeric", month: "long", day: "numeric",
                  })}
                </time>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
                className="text-h2 sm:text-h1 font-bold text-text-primary tracking-display text-balance mb-5 leading-tight"
              >
                {article.title}
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.14 }}
                className="text-base md:text-body-lg text-text-secondary text-pretty mb-6"
              >
                {article.excerpt}
              </motion.p>

              {/* Author */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.18 }}
                className="flex items-center gap-3 pb-8 border-b border-brand-purple/[0.08]"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple/30 to-brand-blue/30 border border-brand-purple/20 flex items-center justify-center text-xs font-bold text-brand-purple">
                  {AUTHOR.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">{AUTHOR.name}</p>
                  <p className="text-xs text-text-muted line-clamp-1">{AUTHOR.bio}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Article Body ── */}
        <section className="section-white pt-10 pb-16">
          <div className="container-base">
            <div className="max-w-3xl mx-auto">
              <ArticleContent sections={article.sections} />

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-brand-purple/[0.08]">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="w-4 h-4 text-text-muted flex-shrink-0" aria-hidden="true" />
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full glass border border-brand-purple/[0.10] text-xs text-text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Related Articles ── */}
        {related.length > 0 && (
          <section className="section-alt py-16">
            <div className="container-base">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-h3 font-bold text-text-primary tracking-heading">
                  Related Articles
                </h2>
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple hover:text-brand-violet transition-colors duration-200 focus-ring rounded"
                >
                  View all <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((rel, i) => (
                  <BlogCard key={rel.slug} article={rel} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}
      </>
    </>
  )
}
