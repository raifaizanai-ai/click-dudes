"use client"

import { TestimonialsSlider } from "@/components/shared/TestimonialsSlider"
import type { TestimonialItem } from "@/components/shared/TestimonialsSlider"
import { GradientText } from "@/components/shared/GradientText"

const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:      "We launched a streaming documentary channel with zero ad monetization experience. Click Dudes set up our SSAI pipeline, connected us to 8 CTV DSPs, and we were live with $28 CPM pre-roll within 3 weeks of signing. Genuinely impressive.",
    name:       "David H.",
    role:       "Founder & CEO",
    company:    "DocStream Network",
    metric:     "$28 CPM pre-roll",
    vertical:   "Documentary Streaming",
    initials:   "DH",
    accentBg:   "bg-brand-purple/15",
    accentText: "text-brand-purple",
  },
  {
    quote:      "Our FAST channel was monetizing at $12 CPM through a basic ad server. After Click Dudes implemented programmatic CTV with private marketplace deals, we're consistently hitting $38–42 CPM. That's a 3× revenue multiplier on the same content.",
    name:       "Carla N.",
    role:       "VP Revenue",
    company:    "LifestyleTV+",
    metric:     "+250% CPM lift",
    vertical:   "FAST Channels",
    initials:   "CN",
    accentBg:   "bg-brand-blue/15",
    accentText: "text-brand-blue",
  },
  {
    quote:      "The completion rate data was eye-opening. Our pre-roll completion rate went from 71% to 92% after Click Dudes optimized ad pod length and positioning. Higher completion means higher CPMs — the flywheel effect is real.",
    name:       "Marco B.",
    role:       "Head of Ad Operations",
    company:    "SportZone TV",
    metric:     "92% completion",
    vertical:   "Sports Streaming",
    initials:   "MB",
    accentBg:   "bg-brand-green/15",
    accentText: "text-brand-green",
  },
  {
    quote:      "We had unsold inventory costing us money. Click Dudes filled our remnant CTV inventory with programmatic demand at $18 average CPM — inventory that was previously earning zero. That additional revenue stream alone justified the partnership.",
    name:       "Ingrid L.",
    role:       "CRO",
    company:    "Nordic Originals",
    metric:     "$18 CPM remnant fill",
    vertical:   "SVOD/AVOD",
    initials:   "IL",
    accentBg:   "bg-brand-cyan/15",
    accentText: "text-brand-cyan",
  },
  {
    quote:      "What I didn't expect was how much the audience targeting data improved. Click Dudes' demand partners brought first-party data matching that let brand advertisers target our cooking audience with 4× higher CPMs than cookie-based targeting.",
    name:       "Yuna P.",
    role:       "Publisher Director",
    company:    "ChefStream Media",
    metric:     "4× higher CPMs",
    vertical:   "Culinary Streaming",
    initials:   "YP",
    accentBg:   "bg-brand-violet/15",
    accentText: "text-brand-violet",
  },
  {
    quote:      "The SSAI implementation was the piece we'd been putting off for 18 months because it seemed too technical. Click Dudes handled it completely — our engineering team spent two hours on it total. Everything else was managed service.",
    name:       "Oliver W.",
    role:       "Tech Lead",
    company:    "Indie Film Hub",
    metric:     "2-hour integration",
    vertical:   "Independent Film",
    initials:   "OW",
    accentBg:   "bg-brand-purple/15",
    accentText: "text-brand-purple",
  },
  {
    quote:      "CTV ad revenue is now 40% of our total monetization mix, up from 8%. We didn't launch new content — we just monetized what we already had properly. Click Dudes unlocked demand from brand advertisers who specifically wanted our fitness audience.",
    name:       "Rania K.",
    role:       "CEO",
    company:    "FitLife Channel",
    metric:     "40% of revenue mix",
    vertical:   "Health & Fitness",
    initials:   "RK",
    accentBg:   "bg-brand-blue/15",
    accentText: "text-brand-blue",
  },
  {
    quote:      "Pause ads were a revelation. We were skeptical — how could a static ad when viewers pause generate meaningful revenue? Within 60 days, pause ads contributed 18% of our total CTV revenue at $32 CPM. Zero disruption to viewing experience.",
    name:       "Sam T.",
    role:       "VP Monetization",
    company:    "BingeDrop Media",
    metric:     "18% from pause ads",
    vertical:   "General Entertainment",
    initials:   "ST",
    accentBg:   "bg-brand-green/15",
    accentText: "text-brand-green",
  },
]

export function CtvTestimonials() {
  return (
    <TestimonialsSlider
      badge="Streaming Publisher Stories"
      heading={<>Real Results from<br /><GradientText gradient="cyan">Real CTV Publishers</GradientText></>}
      subtext="Streaming publishers and FAST channel operators who upgraded their CTV monetization with Click Dudes in the last 12 months."
      testimonials={TESTIMONIALS}
      background="section"
    />
  )
}
