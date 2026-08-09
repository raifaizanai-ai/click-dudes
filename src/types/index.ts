import type { LucideIcon } from "lucide-react"

/* ─── Navigation ─────────────────────────────────────────────────────────── */

export interface NavChild {
  label: string
  href: string
  description?: string
  icon?: LucideIcon
  children?: NavChild[]
}

export interface NavLink {
  label:               string
  href:                string
  children?:           NavChild[]
  megaMenu?:           boolean
  megaMenuTitle?:      string
  megaMenuSub?:        string
  megaMenuFooterText?: string
  megaMenuCTALabel?:   string
  megaMenuCTAHref?:    string
}

/* ─── Marketing ──────────────────────────────────────────────────────────── */

export interface FeatureItem {
  icon: LucideIcon
  title: string
  description: string
  href?: string
}

export interface StatItem {
  value: string
  suffix?: string
  label: string
  description?: string
}

export interface TestimonialItem {
  quote: string
  author: string
  role: string
  company: string
  avatar?: string
}

export interface PricingTier {
  name: string
  price: number | "custom"
  period?: string
  description: string
  features: string[]
  cta: string
  ctaHref: string
  highlighted?: boolean
  badge?: string
}

export interface PublisherType {
  slug: "web-publishers" | "app-publishers" | "ctv-publishers"
  title: string
  description: string
  icon: LucideIcon
  href: string
}

/* ─── Content ────────────────────────────────────────────────────────────── */

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  coverImage?: string
}

/* ─── Component Helpers ──────────────────────────────────────────────────── */

export type ColorVariant = "purple" | "blue" | "cyan"
export type SizeVariant  = "sm" | "md" | "lg"
