"use client"

import { TestimonialsSlider } from "@/components/shared/TestimonialsSlider"
import type { TestimonialItem } from "@/components/shared/TestimonialsSlider"
import { GradientText } from "@/components/shared/GradientText"

const TESTIMONIALS: TestimonialItem[] = [
  {
    quote:      "I'd been using AdSense since 2015 and thought $2.40 RPM was just the ceiling for my content. Click Dudes showed me I was wrong. Within 45 days of switching, I was averaging $6.80 RPM — nearly 3× more for the same traffic.",
    name:       "Helen T.",
    role:       "Independent Publisher",
    company:    "RecipeJoy.com",
    metric:     "+183% RPM",
    vertical:   "Food & Recipe",
    initials:   "HT",
    accentBg:   "bg-brand-purple/15",
    accentText: "text-brand-purple",
  },
  {
    quote:      "AdSense has a CPM ceiling that independent publishers never break through. Click Dudes brought in premium demand that simply doesn't exist in the Google ecosystem — finance and insurance brands paying $12–18 CPMs for our financial content.",
    name:       "Robert K.",
    role:       "Blog Owner",
    company:    "PersonalFinance101",
    metric:     "$12–18 CPM finance ads",
    vertical:   "Personal Finance",
    initials:   "RK",
    accentBg:   "bg-brand-blue/15",
    accentText: "text-brand-blue",
  },
  {
    quote:      "The comparison report Click Dudes showed at onboarding was humbling. We were monetizing at 31% of our potential based on traffic quality and audience intent. Now we're at 78%. There's still upside but the improvement was immediate and significant.",
    name:       "Amy W.",
    role:       "Site Owner",
    company:    "MomLifeAdvice",
    metric:     "31% → 78% yield potential",
    vertical:   "Parenting & Family",
    initials:   "AW",
    accentBg:   "bg-brand-green/15",
    accentText: "text-brand-green",
  },
  {
    quote:      "My travel blog was on AdSense for 4 years. After switching, travel brands — airlines, hotels, OTAs — started bidding for my audience. CPMs are 4–7× higher from vertically relevant advertisers than from Google's demand pool alone.",
    name:       "Carlos M.",
    role:       "Travel Blogger",
    company:    "WanderWide Blog",
    metric:     "4–7× vertical CPMs",
    vertical:   "Travel Content",
    initials:   "CM",
    accentBg:   "bg-brand-cyan/15",
    accentText: "text-brand-cyan",
  },
  {
    quote:      "The one thing I didn't want to lose was AdSense stability. Click Dudes kept AdSense running as one demand partner in the stack — it still wins impressions when it bids highest. I kept the floor and added a ceiling. Best of both worlds.",
    name:       "Sarah J.",
    role:       "Content Creator",
    company:    "FitnessFreq.com",
    metric:     "AdSense + premium stack",
    vertical:   "Health & Fitness",
    initials:   "SJ",
    accentBg:   "bg-brand-violet/15",
    accentText: "text-brand-violet",
  },
  {
    quote:      "The AdSense alternative didn't feel risky once I understood the MCM framework. Click Dudes are a certified Google partner — we still have Google demand, but we have 14 more demand partners bidding alongside it in real time.",
    name:       "Ian P.",
    role:       "Publisher",
    company:    "DIYHome.net",
    metric:     "Google + 14 partners",
    vertical:   "Home Improvement",
    initials:   "IP",
    accentBg:   "bg-brand-purple/15",
    accentText: "text-brand-purple",
  },
  {
    quote:      "Q4 was always my best quarter — then I joined Click Dudes before Q4 last year. Revenue was 2.4× my previous Q4 record. The AI floor optimizer captured every dollar of holiday advertiser demand. I've recommended them to every publisher I know.",
    name:       "Diane L.",
    role:       "Lifestyle Publisher",
    company:    "HomeDecorMaven",
    metric:     "2.4× Q4 record",
    vertical:   "Home Decor & Lifestyle",
    initials:   "DL",
    accentBg:   "bg-brand-blue/15",
    accentText: "text-brand-blue",
  },
  {
    quote:      "I was skeptical of the 41% average RPM claim. After 30 days I was at +62%. After 90 days I was at +89%. It compounds as the AI learns your audience. AdSense was comfortable but it was quietly costing me thousands of dollars every month.",
    name:       "Omar S.",
    role:       "Tech Blogger",
    company:    "GadgetGuru.io",
    metric:     "+89% RPM at 90 days",
    vertical:   "Consumer Technology",
    initials:   "OS",
    accentBg:   "bg-brand-green/15",
    accentText: "text-brand-green",
  },
]

export function AdsenseTestimonials() {
  return (
    <TestimonialsSlider
      badge="Publisher Stories"
      heading={<>Real Results from<br /><GradientText gradient="brand">Publishers Who Upgraded</GradientText></>}
      subtext="Publishers who moved beyond AdSense limits and unlocked their true revenue potential with Click Dudes."
      testimonials={TESTIMONIALS}
      background="section"
    />
  )
}
