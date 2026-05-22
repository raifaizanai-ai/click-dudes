"use client"

import { TestimonialsSlider } from "@/components/shared/TestimonialsSlider"
import type { TestimonialItem } from "@/components/shared/TestimonialsSlider"
import { GradientText } from "@/components/shared/GradientText"

const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:      "Our mobile game was monetized with AdMob at a $4.20 eCPM. Click Dudes brought in AppLovin, ironSource, and Unity into a mediated stack — we're averaging $11.80 eCPM now. That's almost 3× for the same traffic.",
    name:       "Tomás V.",
    role:       "CTO & Co-Founder",
    company:    "PixelCraft Games",
    metric:     "+181% eCPM",
    vertical:   "Mobile Gaming",
    initials:   "TV",
    accentBg:   "bg-brand-purple/15",
    accentText: "text-brand-purple",
  },
  {
    quote:      "The rewarded video implementation was seamless. Users actually prefer it over intrusive interstitials, our review scores improved by 0.4 stars, and rewarded ad revenue is now 60% of our total monetization revenue.",
    name:       "Kira S.",
    role:       "Head of Product",
    company:    "Mindful Minutes",
    metric:     "+60% rewarded share",
    vertical:   "Wellness Apps",
    initials:   "KS",
    accentBg:   "bg-brand-blue/15",
    accentText: "text-brand-blue",
  },
  {
    quote:      "We'd tried managing our own mediation for 18 months and it was a constant headache. Click Dudes took over everything — SDK integration, waterfall tuning, A/B testing formats. Revenue went up 74% and my team's stress went down 90%.",
    name:       "Noah C.",
    role:       "CEO",
    company:    "RunTracker Pro",
    metric:     "+74% revenue",
    vertical:   "Fitness Apps",
    initials:   "NC",
    accentBg:   "bg-brand-green/15",
    accentText: "text-brand-green",
  },
  {
    quote:      "They identified that we were showing interstitials at the wrong moments in our game flow. After repositioning them to natural level transition points, completion rates went from 65% to 91% and CPMs increased by 38%.",
    name:       "Yuki T.",
    role:       "Growth Lead",
    company:    "Puzzle Kingdom",
    metric:     "91% completion",
    vertical:   "Casual Gaming",
    initials:   "YT",
    accentBg:   "bg-brand-cyan/15",
    accentText: "text-brand-cyan",
  },
  {
    quote:      "Our utility app has a modest audience but hyper-engaged users. Click Dudes matched us with premium demand partners specifically interested in our productivity vertical — eCPM jumped from $2.10 to $7.40 for the same impressions.",
    name:       "Fatima A.",
    role:       "Founder",
    company:    "FocusFlow App",
    metric:     "+252% eCPM",
    vertical:   "Productivity Apps",
    initials:   "FA",
    accentBg:   "bg-brand-violet/15",
    accentText: "text-brand-violet",
  },
  {
    quote:      "The in-app bidding setup eliminated our waterfall latency completely. Load times dropped, users are happier, and because bidding is real-time, we're capturing demand we were missing in the old sequential waterfall setup.",
    name:       "Ben P.",
    role:       "Head of Engineering",
    company:    "Weather Atlas",
    metric:     "Zero waterfall lag",
    vertical:   "Utility Apps",
    initials:   "BP",
    accentBg:   "bg-brand-purple/15",
    accentText: "text-brand-purple",
  },
  {
    quote:      "We're a cooking app with a predominantly female 35–55 audience. Click Dudes found CPG and food brand advertisers paying 4× more for our demographic than generic ad networks were offering us. Incredibly targeted demand matching.",
    name:       "Maria G.",
    role:       "Monetization Manager",
    company:    "RecipeBox App",
    metric:     "4× vertical CPM",
    vertical:   "Food & Lifestyle",
    initials:   "MG",
    accentBg:   "bg-brand-blue/15",
    accentText: "text-brand-blue",
  },
  {
    quote:      "The IAP + ad revenue balance was something I struggled with for years. Click Dudes helped us build a hybrid model where ads actually complement the premium features — LTV went up and churn went down simultaneously.",
    name:       "Luis F.",
    role:       "Product Director",
    company:    "LearnSpan Languages",
    metric:     "Higher LTV",
    vertical:   "Education Apps",
    initials:   "LF",
    accentBg:   "bg-brand-green/15",
    accentText: "text-brand-green",
  },
]

export function AppTestimonials() {
  return (
    <TestimonialsSlider
      badge="App Developer Stories"
      heading={<>Real Results from<br /><GradientText gradient="violet">Real App Publishers</GradientText></>}
      subtext="App developers across gaming, utility, and lifestyle who upgraded their monetization stack with Click Dudes in the last 12 months."
      testimonials={TESTIMONIALS}
      background="base"
    />
  )
}
