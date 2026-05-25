export interface ArticleSection {
  type:    "h2" | "h3" | "p" | "ul" | "ol" | "cta" | "faqs" | "quote"
  content?: string
  items?:   string[]
  faqs?:    { q: string; a: string }[]
}

export interface BlogArticle {
  slug:             string
  title:            string
  metaTitle:        string
  metaDescription:  string
  ogTitle:          string
  ogDescription:    string
  excerpt:          string
  category:         BlogCategory
  tags:             string[]
  readTime:         number
  publishedAt:      string
  focusKeyword:     string
  featured?:        boolean
  sections:         ArticleSection[]
}

export type BlogCategory =
  | "All"
  | "Monetization"
  | "AdX"
  | "AdSense"
  | "Header Bidding"
  | "AI Optimization"
  | "Programmatic"
  | "CTV"
  | "App Monetization"
  | "Publisher Guides"
  | "Revenue Growth"
  | "Web Development"
  | "SEO"
  | "Digital Marketing"
  | "Social Media"
  | "Branding"
  | "E-Commerce"

export const BLOG_CATEGORIES: BlogCategory[] = [
  "All", "Monetization", "AdX", "AdSense", "Header Bidding",
  "AI Optimization", "Programmatic", "CTV", "App Monetization",
  "Publisher Guides", "Revenue Growth",
  "Web Development", "SEO", "Digital Marketing", "Social Media", "Branding", "E-Commerce",
]

export const CATEGORY_COLOR: Record<BlogCategory, string> = {
  "All":              "text-brand-purple bg-brand-purple/10",
  "Monetization":     "text-brand-purple bg-brand-purple/10",
  "AdX":              "text-brand-violet bg-brand-violet/10",
  "AdSense":          "text-brand-blue   bg-brand-blue/10",
  "Header Bidding":   "text-brand-purple   bg-brand-cyan/10",
  "AI Optimization":  "text-brand-violet bg-brand-violet/10",
  "Programmatic":     "text-brand-blue   bg-brand-blue/10",
  "CTV":              "text-brand-purple   bg-brand-cyan/10",
  "App Monetization": "text-brand-purple bg-brand-purple/10",
  "Publisher Guides": "text-brand-blue   bg-brand-blue/10",
  "Revenue Growth":   "text-brand-green  bg-brand-green/10",
  "Web Development":  "text-brand-blue   bg-brand-blue/10",
  "SEO":              "text-brand-green  bg-brand-green/10",
  "Digital Marketing":"text-brand-violet bg-brand-violet/10",
  "Social Media":     "text-brand-purple bg-brand-purple/10",
  "Branding":         "text-brand-violet bg-brand-violet/10",
  "E-Commerce":       "text-brand-green  bg-brand-green/10",
}

export const CATEGORY_GRADIENT: Record<BlogCategory, string> = {
  "All":              "from-brand-purple/20 to-brand-violet/20",
  "Monetization":     "from-brand-purple/20 to-brand-violet/20",
  "AdX":              "from-brand-violet/20 to-brand-purple/20",
  "AdSense":          "from-brand-blue/20   to-brand-cyan/20",
  "Header Bidding":   "from-brand-cyan/20   to-brand-blue/20",
  "AI Optimization":  "from-brand-violet/20 to-brand-blue/20",
  "Programmatic":     "from-brand-blue/20   to-brand-violet/20",
  "CTV":              "from-brand-cyan/20   to-brand-purple/20",
  "App Monetization": "from-brand-purple/20 to-brand-cyan/20",
  "Publisher Guides": "from-brand-blue/20   to-brand-purple/20",
  "Revenue Growth":   "from-brand-green/15  to-brand-cyan/15",
  "Web Development":  "from-brand-blue/20   to-brand-cyan/20",
  "SEO":              "from-brand-green/20  to-brand-blue/20",
  "Digital Marketing":"from-brand-violet/20 to-brand-cyan/20",
  "Social Media":     "from-brand-purple/20 to-brand-blue/20",
  "Branding":         "from-brand-violet/20 to-brand-purple/20",
  "E-Commerce":       "from-brand-green/20  to-brand-cyan/20",
}

export const AUTHOR = {
  name:   "Click Dudes Editorial Team",
  bio:    "Click Dudes helps publishers maximize revenue through AI-powered monetization, premium demand access, and advanced optimization strategies.",
  avatar: "CD",
}
