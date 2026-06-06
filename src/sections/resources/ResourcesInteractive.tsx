"use client"

import { useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Search, ArrowRight, Clock, TrendingUp, BookOpen, Smartphone, Monitor, BarChart2, Zap, Globe, Shield, Star, FileCheck } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { cn } from "@/lib/utils"

type ResourceType = "guide" | "checklist" | "comparison" | "playbook" | "tool"

interface ResourceCard {
  id: string
  category: string
  title: string
  description: string
  readTime: string
  type: ResourceType
  href: string
  icon: LucideIcon
  iconBg: string
  iconColor: string
  isNew?: boolean
  trending?: boolean
}

const RESOURCE_CARDS: ResourceCard[] = [
  { id: "adx-req",   category: "Google AdX",            title: "Google AdX Requirements Guide",          description: "Traffic thresholds, content requirements, policy rules, and the step-by-step approval process for Google AdX access.",                     readTime: "10 min", type: "guide",      href: "/resources/google-adx-requirements",              icon: BarChart2,  iconBg: "bg-brand-purple/10", iconColor: "text-brand-purple", isNew: true  },
  { id: "hb-guide",  category: "Header Bidding",         title: "Header Bidding Explained",               description: "How header bidding works, why it beats waterfall auctions, and how to implement it correctly for maximum RPM uplift.",                    readTime: "12 min", type: "guide",      href: "/resources/header-bidding-guide",                 icon: Zap,        iconBg: "bg-brand-blue/10",   iconColor: "text-brand-blue",   isNew: true  },
  { id: "rpm",       category: "Publisher Monetization", title: "Why Your RPM Is Low",                    description: "Six proven causes of low RPM, and exactly how to diagnose and fix each one to recover lost ad revenue.",                                  readTime: "9 min",  type: "guide",      href: "/resources/rpm-optimization",                     icon: TrendingUp, iconBg: "bg-brand-violet/10", iconColor: "text-brand-violet", trending: true },
  { id: "app-check", category: "App Monetization",       title: "App Monetization Checklist",             description: "Complete pre-launch and optimization checklist for iOS and Android app publishers, from SDK setup to eCPM maximization.",                  readTime: "8 min",  type: "checklist",  href: "/resources/app-monetization-checklist",           icon: Smartphone, iconBg: "bg-brand-cyan/10",   iconColor: "text-brand-cyan",   isNew: true  },
  { id: "policy",    category: "Policy & Compliance",    title: "Google Publisher Policy Checklist",       description: "Stay compliant and protect your account. A practical checklist of Google's content, traffic, and ad implementation policies.",              readTime: "7 min",  type: "checklist",  href: "/resources/google-publisher-policy-checklist",    icon: Shield,     iconBg: "bg-brand-green/10",  iconColor: "text-brand-green",  isNew: true  },
  { id: "seo",       category: "SEO & Traffic",          title: "SEO Traffic Growth Playbook",            description: "How publishers grow organic traffic that converts to ad revenue, technical SEO, content strategy, and Core Web Vitals.",                  readTime: "15 min", type: "playbook",   href: "/resources/seo-traffic-growth",                   icon: Globe,      iconBg: "bg-brand-blue/10",   iconColor: "text-brand-blue",   isNew: true  },
  { id: "adx-cmp",   category: "Google AdX",            title: "AdSense vs Google AdX, Full Comparison", description: "The honest comparison covering CPM, demand sources, header bidding, floor price control, and when the upgrade is actually worth it.",      readTime: "8 min",  type: "comparison", href: "/resources/adsense-vs-adx",                       icon: BarChart2,  iconBg: "bg-brand-purple/10", iconColor: "text-brand-purple", trending: true },
  { id: "web-master",category: "Publisher Monetization", title: "Web Monetization Masterclass",           description: "The complete guide to header bidding, AdX access, floor price optimization, and multi-demand monetization for web publishers.",              readTime: "18 min", type: "guide",      href: "/resources/monetization-guides",                  icon: BookOpen,   iconBg: "bg-brand-violet/10", iconColor: "text-brand-violet", trending: true },
  { id: "app-guide", category: "App Monetization",       title: "In-App Advertising Revenue Guide",       description: "From mediation setup to rewarded video strategy, everything you need to maximize eCPM on iOS and Android.",                               readTime: "22 min", type: "guide",      href: "/resources/app-monetization-guide",               icon: Smartphone, iconBg: "bg-brand-blue/10",   iconColor: "text-brand-blue"   },
  { id: "ctv",       category: "CTV Monetization",       title: "CTV Monetization Playbook",              description: "Access premium CTV/OTT demand, structure your ad breaks, and reach the $25+ CPMs available in programmatic TV advertising.",               readTime: "15 min", type: "playbook",   href: "/publisher-solutions/ctv-monetization",           icon: Monitor,    iconBg: "bg-brand-cyan/10",   iconColor: "text-brand-cyan"   },
  { id: "ai-opt",    category: "AI Optimization",        title: "AI Ad Optimization Guide",               description: "How self-learning AI recalculates price floors 24/7, and why it consistently outperforms manually managed floor strategies.",              readTime: "12 min", type: "guide",      href: "/publisher-solutions/ai-ad-optimization",         icon: Zap,        iconBg: "bg-brand-violet/10", iconColor: "text-brand-violet"  },
  { id: "stories",   category: "Case Studies",           title: "Publisher Success Stories",              description: "Real publishers, real results. See how web, app, and CTV publishers lifted RPM by 68–217% after joining Click Dudes.",                     readTime: "5 min",  type: "guide",      href: "/resources/success-stories",                      icon: Star,       iconBg: "bg-brand-green/10",  iconColor: "text-brand-green"  },
]

const CATEGORIES = ["All", "Publisher Monetization", "Google AdX", "Header Bidding", "App Monetization", "CTV Monetization", "AI Optimization", "SEO & Traffic", "Policy & Compliance", "Case Studies"]

const typeLabel: Record<ResourceType, string> = {
  guide: "Guide", checklist: "Checklist", comparison: "Comparison", playbook: "Playbook", tool: "Tool",
}

const cardVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] as const } }),
}

export function ResourcesInteractive() {
  const [query, setQuery]               = useState("")
  const [activeCategory, setCategory]  = useState("All")

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return RESOURCE_CARDS.filter((c) => {
      const matchSearch = !q || c.title.toLowerCase().includes(q) || c.description.toLowerCase().includes(q) || c.category.toLowerCase().includes(q)
      const matchCat    = activeCategory === "All" || c.category === activeCategory
      return matchSearch && matchCat
    })
  }, [query, activeCategory])

  return (
    <Section background="base" padding="lg" aria-label="Resource library">
      <Container size="lg">
        {/* Search + filters */}
        <div className="flex flex-col gap-5 mb-10">
          <div className="relative max-w-xl mx-auto w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" aria-hidden="true" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search monetization, AdX, SEO, policies…"
              className="w-full h-12 pl-11 pr-4 rounded-2xl glass-strong border border-brand-purple/15 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40 focus:border-brand-purple/30 transition-all duration-200"
              aria-label="Search resources"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200",
                  activeCategory === cat
                    ? "bg-brand-purple text-white shadow-[0_2px_12px_rgba(139,92,246,0.35)]"
                    : "glass border border-brand-purple/10 text-text-secondary hover:border-brand-purple/25 hover:text-brand-purple"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Result count */}
        <p className="text-xs text-text-muted mb-6 text-center">
          {filtered.length} resource{filtered.length !== 1 ? "s" : ""} {query || activeCategory !== "All" ? "found" : "available"}
        </p>

        {filtered.length === 0 ? (
          <div className="text-center py-16 glass rounded-2xl border border-brand-purple/10">
            <FileCheck className="w-8 h-8 text-text-muted mx-auto mb-3" aria-hidden="true" />
            <p className="text-sm font-semibold text-text-secondary">No resources match your search.</p>
            <button onClick={() => { setQuery(""); setCategory("All") }} className="mt-3 text-xs text-brand-purple hover:underline">Clear filters</button>
          </div>
        ) : (
          <motion.div
            key={`${query}-${activeCategory}`}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filtered.map((card, i) => {
              const Icon = card.icon
              return (
                <motion.article
                  key={card.id}
                  custom={i}
                  variants={cardVariant}
                  whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
                  className="glass-strong rounded-2xl p-6 border border-brand-purple/[0.10] flex flex-col gap-4 relative overflow-hidden group"
                  style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.05), 0 0 0 1px rgba(139,92,246,0.07)" }}
                >
                  <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />

                  <div className="flex items-start justify-between gap-2">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0", card.iconBg)}>
                      <Icon aria-hidden="true" className={cn("w-5 h-5", card.iconColor)} />
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap justify-end">
                      {card.isNew     && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue">New</span>}
                      {card.trending  && <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-green/10 text-brand-green">Trending</span>}
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-brand-purple/8 text-brand-purple">{typeLabel[card.type]}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5 flex-1">
                    <p className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">{card.category}</p>
                    <h3 className="text-sm font-bold text-text-primary leading-snug group-hover:text-brand-purple transition-colors duration-200">{card.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{card.description}</p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-brand-purple/[0.08]">
                    <span className="flex items-center gap-1.5 text-[11px] text-text-muted">
                      <Clock aria-hidden="true" className="w-3.5 h-3.5" />
                      {card.readTime} read
                    </span>
                    <Link
                      href={card.href}
                      className="flex items-center gap-1 text-xs font-semibold text-brand-purple group-hover:gap-2 transition-all duration-200"
                      aria-label={`Read: ${card.title}`}
                    >
                      {card.type === "checklist" ? "View Checklist" : card.type === "comparison" ? "Compare Now" : "Read Guide"}
                      <ArrowRight aria-hidden="true" className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.article>
              )
            })}
          </motion.div>
        )}
      </Container>
    </Section>
  )
}
