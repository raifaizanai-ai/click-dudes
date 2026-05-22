import type { Metadata } from "next"
import { notFound }        from "next/navigation"
import { BlogArticlePage } from "@/sections/blog/BlogArticlePage"
import { getAllSlugs, getArticleBySlug } from "@/lib/blogUtils"
import { AUTHOR } from "@/types/blog"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug }  = await params
  const article   = getArticleBySlug(slug)
  if (!article) return {}

  return {
    title:       `${article.metaTitle} — Click Dudes`,
    description: article.metaDescription,
    keywords:    article.tags,
    openGraph: {
      title:         article.ogTitle,
      description:   article.ogDescription,
      url:           `https://clickdudes.com/blog/${article.slug}`,
      type:          "article",
      publishedTime: article.publishedAt,
      authors:       [AUTHOR.name],
    },
    twitter: {
      card:        "summary_large_image",
      title:       article.ogTitle,
      description: article.ogDescription,
    },
    alternates: {
      canonical: `https://clickdudes.com/blog/${article.slug}`,
    },
  }
}

export default async function Page({ params }: PageProps) {
  const { slug }    = await params
  const article     = getArticleBySlug(slug)
  if (!article) notFound()

  const articleSchema = {
    "@context": "https://schema.org",
    "@type":    "Article",
    headline:   article.title,
    description: article.metaDescription,
    author: {
      "@type": "Organization",
      name:    AUTHOR.name,
      url:     "https://clickdudes.com",
    },
    publisher: {
      "@type": "Organization",
      name:    "Click Dudes",
      url:     "https://clickdudes.com",
    },
    datePublished:  article.publishedAt,
    dateModified:   article.publishedAt,
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://clickdudes.com/blog/${article.slug}` },
    keywords:       article.tags.join(", "),
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type":    "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home",          item: "https://clickdudes.com" },
      { "@type": "ListItem", position: 2, name: "Blog",          item: "https://clickdudes.com/blog" },
      { "@type": "ListItem", position: 3, name: article.title,   item: `https://clickdudes.com/blog/${article.slug}` },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BlogArticlePage article={article} />
    </>
  )
}
