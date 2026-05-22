"use client"

import { TestimonialsSlider } from "@/components/shared/TestimonialsSlider"
import type { TestimonialItem } from "@/components/shared/TestimonialsSlider"
import { GradientText } from "@/components/shared/GradientText"

const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:      "We were stuck at $3.80 page RPM for over a year. After Click Dudes deployed their full header bidding stack with AdX, we hit $6.40 in the first month. The AI floor optimizer found CPM floors we were leaving on the table every single day.",
    name:       "Marcus T.",
    role:       "Head of Revenue",
    company:    "UrbanLifestyle Media",
    metric:     "+68% RPM",
    vertical:   "Lifestyle & Culture",
    initials:   "MT",
    accentBg:   "bg-brand-purple/15",
    accentText: "text-brand-purple",
  },
  {
    quote:      "The migration away from AdSense was something I'd been putting off for two years out of fear. The Click Dudes team handled every single technical step. We didn't write a line of code and we were fully live in 6 days.",
    name:       "Priya S.",
    role:       "Publisher Operations",
    company:    "TechInsight Daily",
    metric:     "6-day launch",
    vertical:   "Technology News",
    initials:   "PS",
    accentBg:   "bg-brand-blue/15",
    accentText: "text-brand-blue",
  },
  {
    quote:      "I expected some improvement. I didn't expect the page experience to get better at the same time. Ad quality improved significantly — no more janky creatives, no more layout shift. Revenue is up 52% and bounce rate dropped.",
    name:       "Daniel O.",
    role:       "CEO & Founder",
    company:    "Finance Digest",
    metric:     "+52% revenue",
    vertical:   "Personal Finance",
    initials:   "DO",
    accentBg:   "bg-brand-green/15",
    accentText: "text-brand-green",
  },
  {
    quote:      "Our display CPMs went from $1.20 average to $3.80 within 45 days. The private marketplace deals they negotiated for our finance content vertical were the biggest single driver — something AdSense alone could never access.",
    name:       "Lena K.",
    role:       "Director of Monetization",
    company:    "WealthWeekly",
    metric:     "+217% CPM",
    vertical:   "Financial Media",
    initials:   "LK",
    accentBg:   "bg-brand-cyan/15",
    accentText: "text-brand-cyan",
  },
  {
    quote:      "We have a niche travel blog with 1.2M monthly visitors. Click Dudes unlocked demand partners we'd never heard of — and our September revenue was the best month we've ever had. They genuinely understand content publisher economics.",
    name:       "James R.",
    role:       "Publisher & Editor",
    company:    "Nomad Route",
    metric:     "Best month ever",
    vertical:   "Travel Content",
    initials:   "JR",
    accentBg:   "bg-brand-violet/15",
    accentText: "text-brand-violet",
  },
  {
    quote:      "What surprised me was the reporting depth. I can see which exact ad placement, on which device, at which hour, in which geo is generating the most revenue. That level of visibility changed how we think about content layout entirely.",
    name:       "Sophie L.",
    role:       "VP Growth",
    company:    "NewsGrid Network",
    metric:     "Full visibility",
    vertical:   "News & Media",
    initials:   "SL",
    accentBg:   "bg-brand-purple/15",
    accentText: "text-brand-purple",
  },
  {
    quote:      "Three months after onboarding, I can honestly say the managed service pays for itself ten times over. Our team was spending 15 hours a week on ad ops. Now we spend zero. Revenue is higher and we focus entirely on content.",
    name:       "Ahmed B.",
    role:       "Founder",
    company:    "SportsPulse Media",
    metric:     "Zero ad ops time",
    vertical:   "Sports Content",
    initials:   "AB",
    accentBg:   "bg-brand-blue/15",
    accentText: "text-brand-blue",
  },
  {
    quote:      "Our fill rate was the hidden problem — sitting at 82% with AdSense. Within two weeks of Click Dudes going live, fill rate hit 96.8%. That alone was worth the switch before even factoring in the CPM improvement.",
    name:       "Rachel M.",
    role:       "Ops Manager",
    company:    "HomeImprovement Hub",
    metric:     "96.8% fill rate",
    vertical:   "Home & DIY",
    initials:   "RM",
    accentBg:   "bg-brand-green/15",
    accentText: "text-brand-green",
  },
]

export function WebTestimonials() {
  return (
    <TestimonialsSlider
      badge="Publisher Stories"
      heading={<>Real Results from<br /><GradientText gradient="brand">Real Web Publishers</GradientText></>}
      subtext="Performance data from publishers who upgraded their web monetization stack with Click Dudes in the last 12 months."
      testimonials={TESTIMONIALS}
      background="section"
    />
  )
}
