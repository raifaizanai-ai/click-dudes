import type { BlogArticle, BlogCategory } from "@/types/blog"
import { ARTICLES_1_5 }   from "@/lib/blogArticles1"
import { ARTICLES_6_10 }  from "@/lib/blogArticles2"
import { ARTICLES_11_15 } from "@/lib/blogArticles3"
import { ARTICLES_16_20 } from "@/lib/blogArticles4"
import { ARTICLES_21_25 } from "@/lib/blogArticles5"
import { ARTICLES_26_30 } from "@/lib/blogArticles6"
import { ARTICLES_31_35 } from "@/lib/blogArticles7"
import { ARTICLES_36_40 } from "@/lib/blogArticles8"

export const ALL_ARTICLES: BlogArticle[] = [
  ...ARTICLES_1_5,
  ...ARTICLES_6_10,
  ...ARTICLES_11_15,
  ...ARTICLES_16_20,
  ...ARTICLES_21_25,
  ...ARTICLES_26_30,
  ...ARTICLES_31_35,
  ...ARTICLES_36_40,
]

export function getAllArticles(): BlogArticle[] {
  return ALL_ARTICLES
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  return ALL_ARTICLES.find((a) => a.slug === slug)
}

export function getArticlesByCategory(category: BlogCategory): BlogArticle[] {
  if (category === "All") return ALL_ARTICLES
  return ALL_ARTICLES.filter((a) => a.category === category)
}

export function getRelatedArticles(slug: string, limit = 3): BlogArticle[] {
  const current = getArticleBySlug(slug)
  if (!current) return ALL_ARTICLES.slice(0, limit)

  const sameCategory = ALL_ARTICLES.filter(
    (a) => a.slug !== slug && a.category === current.category
  )
  if (sameCategory.length >= limit) return sameCategory.slice(0, limit)

  const sameTags = ALL_ARTICLES.filter(
    (a) =>
      a.slug !== slug &&
      a.category !== current.category &&
      a.tags.some((t) => current.tags.includes(t))
  )

  return [...sameCategory, ...sameTags].slice(0, limit)
}

export function getFeaturedArticle(): BlogArticle | undefined {
  return ALL_ARTICLES.find((a) => a.featured)
}

export function getAllSlugs(): string[] {
  return ALL_ARTICLES.map((a) => a.slug)
}
