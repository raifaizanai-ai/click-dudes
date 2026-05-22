"use client"

import { TestimonialsSlider } from "@/components/shared/TestimonialsSlider"
import type { TestimonialItem } from "@/components/shared/TestimonialsSlider"
import { GradientText } from "@/components/shared/GradientText"

const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:      "We switched from a client-side Prebid setup to Click Dudes' server-side infrastructure and the difference was immediate. Page load times improved by 380ms, Core Web Vitals passed for the first time, and CPMs went up 31% because more demand partners could compete.",
    name:       "Ryan C.",
    role:       "CTO",
    company:    "AutoReview Central",
    metric:     "+31% CPM, faster pages",
    vertical:   "Automotive Media",
    initials:   "RC",
    accentBg:   "bg-brand-purple/15",
    accentText: "text-brand-purple",
  },
  {
    quote:      "We had 4 demand partners in our old waterfall. Click Dudes deployed 18 in a unified auction. Bid density went from 1.2 bids per impression to 6.8 — and when more advertisers compete, publishers win. RPM nearly doubled.",
    name:       "Michelle K.",
    role:       "Head of Revenue",
    company:    "FoodieWorld",
    metric:     "6.8× bid density",
    vertical:   "Food & Recipe",
    initials:   "MK",
    accentBg:   "bg-brand-blue/15",
    accentText: "text-brand-blue",
  },
  {
    quote:      "The AI bid floor optimization was the piece I hadn't seen before. Instead of setting a static floor, the system learns the right floor for each placement at each hour — and it catches high-value moments I would have missed with manual settings.",
    name:       "Victor S.",
    role:       "Publisher Manager",
    company:    "TechReview Weekly",
    metric:     "Dynamic floor AI",
    vertical:   "Technology News",
    initials:   "VS",
    accentBg:   "bg-brand-green/15",
    accentText: "text-brand-green",
  },
  {
    quote:      "Our sports site has massive traffic spikes during live events. The previous setup would timeout during peak load, losing impressions at the worst possible moment. Click Dudes' server-side architecture handled a 40× traffic spike without a single timeout.",
    name:       "Alex D.",
    role:       "VP Technology",
    company:    "LiveScore Pulse",
    metric:     "Zero timeouts at 40× spike",
    vertical:   "Sports Media",
    initials:   "AD",
    accentBg:   "bg-brand-cyan/15",
    accentText: "text-brand-cyan",
  },
  {
    quote:      "The unified auction eliminated the unfairness of the waterfall completely. Every DSP competes on a level playing field — and the result is that the best bid always wins, not just the bid that happened to be highest in the queue.",
    name:       "Sofia M.",
    role:       "Ad Operations Director",
    company:    "LuxuryLiving Media",
    metric:     "True auction fairness",
    vertical:   "Luxury & Lifestyle",
    initials:   "SM",
    accentBg:   "bg-brand-violet/15",
    accentText: "text-brand-violet",
  },
  {
    quote:      "We tried to set up Prebid ourselves using the documentation. After 3 months and zero meaningful results, we called Click Dudes. They went live in 5 days and our header bidding was finally generating the yield we'd read about.",
    name:       "Ben T.",
    role:       "Founder",
    company:    "ParentZone Blog",
    metric:     "Live in 5 days",
    vertical:   "Parenting Content",
    initials:   "BT",
    accentBg:   "bg-brand-purple/15",
    accentText: "text-brand-purple",
  },
  {
    quote:      "Identity resolution through the header bidding layer let us monetize logged-out users more effectively. Our audience has a high match rate on LiveRamp and TradeDesk IDs — premium advertisers pay 3× more for those matched impressions.",
    name:       "Aisha N.",
    role:       "Senior Ad Tech Lead",
    company:    "HealthJourney Media",
    metric:     "3× matched impression value",
    vertical:   "Health & Wellness",
    initials:   "AN",
    accentBg:   "bg-brand-blue/15",
    accentText: "text-brand-blue",
  },
  {
    quote:      "The bid analytics dashboard showed us patterns we'd never seen. We discovered our finance content generated 2.8× higher CPMs between 10am–2pm on weekdays. We restructured our content publishing schedule around those insights.",
    name:       "Tom L.",
    role:       "Revenue Analyst",
    company:    "InvestorInsider",
    metric:     "2.8× time-of-day CPM",
    vertical:   "Investment Media",
    initials:   "TL",
    accentBg:   "bg-brand-green/15",
    accentText: "text-brand-green",
  },
]

export function HBTestimonials() {
  return (
    <TestimonialsSlider
      badge="Publisher Stories"
      heading={<>Real Results from<br /><GradientText gradient="violet">Real HB Publishers</GradientText></>}
      subtext="Publishers who replaced their waterfall setup with Click Dudes' server-side header bidding infrastructure."
      testimonials={TESTIMONIALS}
      background="section"
    />
  )
}
