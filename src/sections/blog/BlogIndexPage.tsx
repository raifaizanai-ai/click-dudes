"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Search, BookOpen } from "lucide-react"
import { BlogCard } from "@/components/blog/BlogCard"
import { getAllArticles, getFeaturedArticle } from "@/lib/blogUtils"
import { BLOG_CATEGORIES } from "@/types/blog"
import type { BlogCategory } from "@/types/blog"
import { cn } from "@/lib/utils"

const containerVariant = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const fadeUp = {
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const } },
}

export function BlogIndexPage() {
  const [activeCategory, setActiveCategory] = useState<BlogCategory>("All")
  const [query, setQuery] = useState("")

  const featured  = getFeaturedArticle()
  const allPosts  = getAllArticles()

  const filtered = useMemo(() => {
    let list = activeCategory === "All"
      ? allPosts
      : allPosts.filter((a) => a.category === activeCategory)

    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.tags.some((t) => t.toLowerCase().includes(q))
      )
    }

    return list
  }, [activeCategory, query, allPosts])

  const gridPosts = featured ? filtered.filter((a) => a.slug !== featured.slug) : filtered

  return (
    <>
      {/* ── Hero ── */}
      <section className="section-base pt-10 pb-14 sm:pt-16 sm:pb-16">
        <div className="container-base">
          <motion.div
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-purple/[0.12] text-xs font-semibold uppercase tracking-widest text-brand-purple mb-6">
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              Publisher Intelligence
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-h2 sm:text-h1 font-bold text-text-primary tracking-display text-balance mb-4">
              The <span className="text-gradient-brand">Publisher Blog</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-body-lg text-text-secondary text-pretty max-w-xl mx-auto">
              Expert monetization strategies, ad-tech insights, and revenue growth guides from the ClickDudes team.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── Featured Post ── */}
      {featured && (
        <section className="section-white pb-0">
          <div className="container-base">
            <div className="max-w-4xl mx-auto">
              <p className="text-label text-brand-purple mb-4 uppercase tracking-label">Featured Article</p>
              <BlogCard article={featured} featured index={0} />
            </div>
          </div>
        </section>
      )}

      {/* ── Category Filter + Search ── */}
      <section className="section-white py-12">
        <div className="container-base">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between mb-10">
            {/* Category pills */}
            <div className="flex flex-wrap gap-2">
              {BLOG_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-ring border",
                    activeCategory === cat
                      ? "bg-brand-purple text-white border-brand-purple shadow-[0_2px_12px_rgba(139,92,246,0.30)]"
                      : "glass border-brand-purple/[0.10] text-text-secondary hover:text-brand-purple hover:border-brand-purple/[0.20]"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full lg:w-64">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" aria-hidden="true" />
              <input
                type="search"
                placeholder="Search articles…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search blog articles"
                className="w-full pl-10 pr-4 py-2.5 rounded-full glass border border-brand-purple/[0.10] text-sm text-text-primary placeholder:text-text-muted focus-ring focus:border-brand-purple/[0.25] outline-none transition-colors"
              />
            </div>
          </div>

          {/* Results count */}
          <p className="text-sm text-text-muted mb-6">
            {filtered.length === 0
              ? "No articles found."
              : `${gridPosts.length} article${gridPosts.length !== 1 ? "s" : ""}`}
          </p>

          {/* Grid */}
          {gridPosts.length > 0 ? (
            <motion.div
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {gridPosts.map((article, i) => (
                <BlogCard key={article.slug} article={article} index={i} />
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20 text-text-muted">
              <Search className="w-10 h-10 mx-auto mb-3 opacity-40" aria-hidden="true" />
              <p className="text-lg font-medium text-text-secondary">No articles match your search.</p>
              <button
                onClick={() => { setQuery(""); setActiveCategory("All") }}
                className="mt-3 text-sm text-brand-purple underline underline-offset-2 hover:text-brand-violet focus-ring rounded"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
