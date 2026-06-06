"use client"

import { Share2, TrendingUp, BarChart3, Calendar, MessageSquare, Star, Zap } from "lucide-react"
import { SocialMediaHeroPanel } from "@/sections/services/social-media-management/SocialMediaHeroPanel"
import { SocialShowcaseSection } from "@/sections/services/social-media-management/SocialShowcaseSection"
import { SocialMediaProcessSection } from "@/sections/services/social-media-management/SocialMediaProcessSection"
import { SocialMediaCTASection } from "@/sections/services/social-media-management/SocialMediaCTASection"
import { SolutionHero } from "@/sections/solutions/shared/SolutionHero"
import { SolutionProblemSolution } from "@/sections/solutions/shared/SolutionProblemSolution"
import { SolutionFeatures } from "@/sections/solutions/shared/SolutionFeatures"
import { SolutionWhyUs } from "@/sections/solutions/shared/SolutionWhyUs"
import { SolutionFAQ } from "@/sections/solutions/shared/SolutionFAQ"
import { SocialMediaTestimonials } from "@/sections/services/social-media-management/SocialMediaTestimonials"

const problems = [
  { title: "Inconsistent Posting Schedule", body: "Sporadic posting kills algorithm reach and trains your audience to expect nothing from your brand." },
  { title: "Generic, Off-Brand Content", body: "Random posts with no strategy or brand voice make your business look unprofessional and lose followers." },
  { title: "Zero Community Engagement", body: "Brands that don't respond to comments and messages miss relationship-building opportunities that drive loyalty." },
]

const solutions = [
  { title: "Strategic Content Calendar", body: "We plan and schedule 30+ days of on-brand content that aligns with your goals, campaigns, and audience behavior." },
  { title: "Brand-Native Creative Content", body: "Every post is crafted to your brand voice and visual identity, making your feed look premium and professional." },
  { title: "Active Community Management", body: "We respond to comments, DMs, and mentions to build real connections and turn followers into customers." },
]

const features = [
  { icon: Calendar, title: "Monthly Content Calendar", description: "A fully planned content calendar aligned with your business goals, campaigns, and seasonal trends.", badge: "Strategy", accent: "text-brand-purple", glow: "rgba(139,92,246,0.10)" },
  { icon: Share2, title: "Multi-Platform Posting", description: "Scheduled publishing across Instagram, Facebook, LinkedIn, TikTok, Twitter, and Pinterest.", badge: "Multi-Platform", accent: "text-brand-purple", glow: "rgba(103,232,249,0.10)" },
  { icon: MessageSquare, title: "Community Management", description: "Active engagement, comments, DMs, mentions, and brand sentiment monitoring daily.", badge: "Engagement", accent: "text-brand-blue", glow: "rgba(96,165,250,0.10)" },
  { icon: TrendingUp, title: "Growth Strategy", description: "Follower acquisition strategies, hashtag research, and collaboration opportunities to grow your audience.", badge: "Growth", accent: "text-brand-violet", glow: "rgba(168,85,247,0.10)" },
  { icon: BarChart3, title: "Analytics & Reporting", description: "Monthly performance reports covering reach, engagement, follower growth, and content insights.", badge: "Reporting", accent: "text-brand-green", glow: "rgba(16,185,129,0.10)" },
  { icon: Zap, title: "Brand Consistency", description: "Visual templates, brand voice guidelines, and content themes that keep your brand consistent at scale.", badge: "Brand", accent: "text-brand-purple", glow: "rgba(139,92,246,0.10)" },
]


const whyUsItems = [
  { icon: Share2, title: "Platform-Native Expertise", body: "We know the algorithms, best practices, and content formats for every major platform, not generic social media management.", highlight: "Platform Experts", accent: "text-brand-purple", bg: "rgba(139,92,246,0.08)", dotColor: "purple" as const },
  { icon: Star, title: "Brand-First Content", body: "Every post reflects your brand voice, visual identity, and business goals, no off-brand template content.", highlight: "100% On-Brand", accent: "text-brand-purple", bg: "rgba(103,232,249,0.08)", dotColor: "cyan" as const },
  { icon: TrendingUp, title: "Measurable Growth", body: "We track follower growth, reach, engagement, and conversions monthly to prove the ROI of your social investment.", highlight: "42% Avg Growth", accent: "text-brand-blue", bg: "rgba(96,165,250,0.08)", dotColor: "blue" as const },
  { icon: MessageSquare, title: "Proactive Community Building", body: "We actively build your community through engagement, partnerships, and relationship management that creates loyal customers.", highlight: "Community First", accent: "text-brand-green", bg: "rgba(16,185,129,0.08)", dotColor: "green" as const },
]

const faqs = [
  { question: "Which social media platforms do you manage?", answer: "We manage Instagram, Facebook, LinkedIn, TikTok, Twitter/X, Pinterest, and YouTube. We recommend platforms based on where your target audience actually spends their time." },
  { question: "How many posts per week do you create?", answer: "Our standard package includes 5–7 posts per week across your platforms. Custom posting frequencies are available based on your goals and budget." },
  { question: "Do I get to approve content before it goes live?", answer: "Yes, absolutely. We share the monthly content calendar for your review and approval before any content is published. You're always in the loop." },
  { question: "Do you also run paid social ads?", answer: "Social media management covers organic content. Paid social advertising (Meta Ads) is a separate service we also offer with full campaign management." },
  { question: "How quickly will I see results?", answer: "Organic social media growth is a 3–6 month compounding strategy. Most clients see meaningful engagement improvements within the first 30–60 days and significant growth by month 3." },
]

export function SocialMediaPage() {
  return (
    <>
      <SolutionHero
        badge="Social Media Management"
        badgeIcon={Share2}
        headline={<>Consistent Brand Presence <span className="text-gradient-brand">Across Every Platform</span></>}
        subtext="Click Dudes manages your business social media end-to-end, content strategy, creation, scheduling, community management, and monthly reporting."
        primaryCTA={{ label: "Manage My Social Media", href: "/about/contact-us" }}
        secondaryCTA={{ label: "Get a Free Audit", href: "/about/contact-us" }}
        caption="Multi-platform management · Brand-native content · Community management · Monthly reporting"
        stats={[
          { value: "42%",  label: "Avg Follower Growth" },
          { value: "6.8%", label: "Avg Engagement Rate" },
          { value: "180k", label: "Avg Monthly Reach" },
          { value: "100%", label: "On-Brand Content" },
        ]}
        panelContent={<SocialMediaHeroPanel />}
        robotVariant="wave"
      />
      <SocialShowcaseSection />
      <SolutionProblemSolution
        badge="The Problem"
        heading={<>Why Your Social Media <span className="text-gradient-brand">Isn&apos;t Growing</span></>}
        subtext="Most businesses fail at social media for the same predictable reasons. Here's the truth and how we solve it."
        problems={problems}
        solutions={solutions}
        problemLabel="Without Click Dudes"
        solutionLabel="With Click Dudes"
      />
      <SolutionFeatures
        badge="What We Manage"
        heading={<>Complete Social Media <span className="text-gradient-brand">Management Suite</span></>}
        subtext="Every layer of social media management handled professionally so you can focus on running your business."
        features={features}
      />
      <SocialMediaProcessSection />
      <SolutionWhyUs
        badge="Why Click Dudes"
        heading={<>The Social Media Partner That <span className="text-gradient-brand">Grows Your Brand</span></>}
        subtext="We bring platform expertise, brand-first strategy, and measurable results to every social media account we manage."
        items={whyUsItems}
      />
      <SocialMediaTestimonials />
      <SolutionFAQ
        badge="FAQ"
        heading={<>Social Media Management <span className="text-gradient-brand">Questions Answered</span></>}
        subtext="How we handle content, posting schedules, approvals, and results. No vague promises, just how it works."
        faqs={faqs}
      />
      <SocialMediaCTASection />
    </>
  )
}
