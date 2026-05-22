"use client"

import { TestimonialsSlider } from "@/components/shared/TestimonialsSlider"
import type { TestimonialItem } from "@/components/shared/TestimonialsSlider"
import { GradientText } from "@/components/shared/GradientText"

const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:      "The AI floor optimizer was the single biggest revenue driver we've ever deployed. Within 21 days it had identified 340 unique floor price micro-segments across our content — each one independently optimized. Manual settings would take a team of 10 to maintain.",
    name:       "Chris L.",
    role:       "Director of Monetization",
    company:    "MediaPeak Group",
    metric:     "340 price micro-segments",
    vertical:   "News & Media",
    initials:   "CL",
    accentBg:   "bg-brand-purple/15",
    accentText: "text-brand-purple",
  },
  {
    quote:      "We were manually updating bid floors weekly based on gut feel. Click Dudes' AI replaced that with real-time dynamic floors that respond to bid pressure hour by hour. We stopped leaving money on the table and stopped blocking valid demand.",
    name:       "Emma H.",
    role:       "Revenue Operations",
    company:    "WealthAdvisor Media",
    metric:     "Real-time dynamic floors",
    vertical:   "Finance Content",
    initials:   "EH",
    accentBg:   "bg-brand-blue/15",
    accentText: "text-brand-blue",
  },
  {
    quote:      "The viewability prediction feature is genuinely novel. The AI predicts which placements will be in-view before serving — so it routes high-value impressions to the placements most likely to complete. Our active view rate went from 58% to 81%.",
    name:       "Sonia P.",
    role:       "VP Product",
    company:    "StyleGuide Online",
    metric:     "81% active view rate",
    vertical:   "Fashion & Lifestyle",
    initials:   "SP",
    accentBg:   "bg-brand-green/15",
    accentText: "text-brand-green",
  },
  {
    quote:      "We publish across 6 verticals and the AI correctly identifies that our finance content should have 3× higher floors than our general news content, and adjusts accordingly by the second. It would take a full-time analyst to do this manually.",
    name:       "Darius N.",
    role:       "Founder",
    company:    "MultiNiche Publishing",
    metric:     "3× vertical-aware floors",
    vertical:   "Multi-vertical Media",
    initials:   "DN",
    accentBg:   "bg-brand-cyan/15",
    accentText: "text-brand-cyan",
  },
  {
    quote:      "Seasonal CPM optimization was something we'd always done manually with a calendar. Click Dudes' AI detected holiday demand patterns automatically and raised floors proactively before Q4 — our November RPM was the highest in our 8-year history.",
    name:       "Laura F.",
    role:       "Head of Ad Revenue",
    company:    "FamilyLife Hub",
    metric:     "8-year RPM record",
    vertical:   "Family & Parenting",
    initials:   "LF",
    accentBg:   "bg-brand-violet/15",
    accentText: "text-brand-violet",
  },
  {
    quote:      "The AI's demand gap detection feature flagged that we had zero coverage from automotive advertisers despite having a 40% male 25–45 audience — exactly their target. They fixed the demand gap and automotive CPMs added $0.90/RPM immediately.",
    name:       "Martin K.",
    role:       "CEO",
    company:    "SportsTech Daily",
    metric:     "+$0.90 RPM from gap fill",
    vertical:   "Sports Technology",
    initials:   "MK",
    accentBg:   "bg-brand-purple/15",
    accentText: "text-brand-purple",
  },
  {
    quote:      "We had 14 different ad placements and the AI ranked them by yield efficiency in the first week. Three placements were generating 71% of revenue on 28% of impressions. We optimized the layout based on that — total revenue up 39%.",
    name:       "Joanna S.",
    role:       "Editorial Director",
    company:    "HealthyHabits.co",
    metric:     "+39% layout optimization",
    vertical:   "Health & Wellness",
    initials:   "JS",
    accentBg:   "bg-brand-blue/15",
    accentText: "text-brand-blue",
  },
  {
    quote:      "The AI recommendation engine is where I spend my time now instead of in spreadsheets. Every week I get actionable suggestions — three last week alone added up to $1,200/month in identified revenue. That's an incredible ROI for a managed service.",
    name:       "Patrick R.",
    role:       "Publisher Manager",
    company:    "DIY Central",
    metric:     "+$1,200/mo identified",
    vertical:   "Home Improvement",
    initials:   "PR",
    accentBg:   "bg-brand-green/15",
    accentText: "text-brand-green",
  },
]

export function AITestimonials() {
  return (
    <TestimonialsSlider
      badge="Publisher Stories"
      heading={<>Real Results from<br /><GradientText gradient="brand">AI-Optimized Publishers</GradientText></>}
      subtext="Publishers who let Click Dudes' AI engine take control of yield optimization — and what happened to their revenue."
      testimonials={TESTIMONIALS}
      background="base"
    />
  )
}
