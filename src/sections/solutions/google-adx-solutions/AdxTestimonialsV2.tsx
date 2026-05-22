"use client"

import { TestimonialsSlider } from "@/components/shared/TestimonialsSlider"
import type { TestimonialItem } from "@/components/shared/TestimonialsSlider"
import { GradientText } from "@/components/shared/GradientText"

const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:      "Getting into Google AdX directly as a small publisher was impossible. Click Dudes' MCM partnership gave us full AdX access in days, not months. Our average CPM went from $1.40 to $4.20 — and that's before the header bidding layer.",
    name:       "Jake M.",
    role:       "Publisher & CEO",
    company:    "CryptoNews Daily",
    metric:     "+200% CPM",
    vertical:   "Finance & Crypto",
    initials:   "JM",
    accentBg:   "bg-brand-purple/15",
    accentText: "text-brand-purple",
  },
  {
    quote:      "We applied directly to Google AdX twice and got rejected both times. Click Dudes got us live under their MCM account within a week. The demand quality difference between AdSense and AdX is not subtle — it's massive.",
    name:       "Claire D.",
    role:       "Head of Digital",
    company:    "LegalPulse Network",
    metric:     "Rejected → Live in 7d",
    vertical:   "Legal & Professional",
    initials:   "CD",
    accentBg:   "bg-brand-blue/15",
    accentText: "text-brand-blue",
  },
  {
    quote:      "The programmatic guaranteed deals they set up through AdX for our B2B tech audience were the game changer. Fortune 500 tech brands paying $28 CPMs for our engineering audience versus $2.80 from open exchange. That's a 10× difference.",
    name:       "Raj P.",
    role:       "VP Operations",
    company:    "DevStack Weekly",
    metric:     "10× CPM from PG deals",
    vertical:   "Developer Media",
    initials:   "RP",
    accentBg:   "bg-brand-green/15",
    accentText: "text-brand-green",
  },
  {
    quote:      "Brand safety was our biggest concern moving off AdSense. Within AdX, the advertiser quality is genuinely better. We've had zero ad quality complaints since switching — and we get to review and approve buyers through Click Dudes' managed team.",
    name:       "Simone T.",
    role:       "Editor-in-Chief",
    company:    "ParentingFirst",
    metric:     "Zero quality complaints",
    vertical:   "Family & Parenting",
    initials:   "ST",
    accentBg:   "bg-brand-cyan/15",
    accentText: "text-brand-cyan",
  },
  {
    quote:      "I was paying an ad tech consultant $4,000/month to manage our Google Ad Manager setup. Click Dudes replaced that entirely at a fraction of the cost — and they actively manage it, not just configure-and-forget like consultants do.",
    name:       "Nadia R.",
    role:       "CFO",
    company:    "ShoppingInsights",
    metric:     "Reduced ad ops cost",
    vertical:   "Retail & Shopping",
    initials:   "NR",
    accentBg:   "bg-brand-violet/15",
    accentText: "text-brand-violet",
  },
  {
    quote:      "The private marketplace access through AdX was something I couldn't access alone. Health and pharmaceutical advertisers pay 5–8× open exchange CPMs for contextually relevant placements — that vertical premium is the biggest single win for us.",
    name:       "Dr. Paul E.",
    role:       "Publisher Director",
    company:    "MedicalAdvice Pro",
    metric:     "5–8× vertical premium",
    vertical:   "Health & Medical",
    initials:   "PE",
    accentBg:   "bg-brand-purple/15",
    accentText: "text-brand-purple",
  },
  {
    quote:      "Our e-commerce comparison site traffic converts at 3× the industry benchmark, but AdSense was paying us commodity CPMs. Through AdX, retail brands now compete in private auctions for our high-intent audience. RPM tripled in 60 days.",
    name:       "Zara H.",
    role:       "Monetization Lead",
    company:    "CompareIt Hub",
    metric:     "3× RPM in 60 days",
    vertical:   "Comparison Shopping",
    initials:   "ZH",
    accentBg:   "bg-brand-blue/15",
    accentText: "text-brand-blue",
  },
  {
    quote:      "Real-time bidding through AdX means every single impression is priced correctly. The old AdSense waterfall was leaving money on the table every day. Under Click Dudes' managed setup, yield went up 88% in the first 30 days.",
    name:       "Lee C.",
    role:       "CTO",
    company:    "GadgetReview.io",
    metric:     "+88% yield",
    vertical:   "Consumer Tech",
    initials:   "LC",
    accentBg:   "bg-brand-green/15",
    accentText: "text-brand-green",
  },
]

export function AdxTestimonialsV2() {
  return (
    <TestimonialsSlider
      badge="Publisher Stories"
      heading={<>Real AdX Results from<br /><GradientText gradient="brand">Real Publishers</GradientText></>}
      subtext="Publishers who gained Google AdX access and premium demand through Click Dudes' certified MCM partnership."
      testimonials={TESTIMONIALS}
      background="base"
    />
  )
}
