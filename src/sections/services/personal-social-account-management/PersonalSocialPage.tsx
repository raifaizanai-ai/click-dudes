"use client"

import { User2, TrendingUp, Star, MessageSquare, Share2, BarChart3, Zap } from "lucide-react"
import { PersonalSocialHeroPanel } from "@/sections/services/personal-social-account-management/PersonalSocialHeroPanel"
import { PersonalBrandShowcaseSection } from "@/sections/services/personal-social-account-management/PersonalBrandShowcaseSection"
import { PersonalSocialProcessSection } from "@/sections/services/personal-social-account-management/PersonalSocialProcessSection"
import { PersonalSocialCTASection } from "@/sections/services/personal-social-account-management/PersonalSocialCTASection"
import { SolutionHero } from "@/sections/solutions/shared/SolutionHero"
import { SolutionProblemSolution } from "@/sections/solutions/shared/SolutionProblemSolution"
import { SolutionFeatures } from "@/sections/solutions/shared/SolutionFeatures"
import { SolutionWhyUs } from "@/sections/solutions/shared/SolutionWhyUs"
import { SolutionFAQ } from "@/sections/solutions/shared/SolutionFAQ"

const problems = [
  { title: "Invisible Online Presence", body: "Founders and professionals with no consistent online presence miss business deals, partnerships, and opportunities daily." },
  { title: "No Time to Create Content", body: "Running a business leaves zero time to research, write, design, and post high-quality personal brand content consistently." },
  { title: "Generic Profile, No Authority", body: "An unoptimized profile and scattered posting strategy makes it impossible to build the credibility and trust that drives business." },
]

const solutions = [
  { title: "Always-On Presence Without the Work", body: "We manage your personal accounts end-to-end — content, posting, engagement — so you appear active without spending hours on it." },
  { title: "Professional Content Creation", body: "We write, design, and produce content in your authentic voice that positions you as a credible authority in your field." },
  { title: "Strategic Profile Optimization", body: "We optimize your LinkedIn, Instagram, and other profiles to attract the right audience and clearly communicate your value." },
]

const features = [
  { icon: User2, title: "Profile Optimization", description: "Complete profile setup and optimization for LinkedIn, Instagram, Facebook, and TikTok with SEO-friendly copy.", badge: "Profile", accent: "text-brand-purple", glow: "rgba(139,92,246,0.10)" },
  { icon: Star, title: "Thought Leadership Content", description: "Long-form articles, LinkedIn posts, and authority-building content that positions you as an industry leader.", badge: "Authority", accent: "text-brand-purple", glow: "rgba(103,232,249,0.10)" },
  { icon: Share2, title: "Multi-Platform Posting", description: "Consistent content published across LinkedIn, Instagram, Facebook, TikTok, and other relevant platforms.", badge: "Multi-Platform", accent: "text-brand-blue", glow: "rgba(96,165,250,0.10)" },
  { icon: MessageSquare, title: "Engagement Management", description: "We respond to comments, messages, and connection requests to grow your network and nurture relationships.", badge: "Engagement", accent: "text-brand-violet", glow: "rgba(168,85,247,0.10)" },
  { icon: TrendingUp, title: "Growth Strategy", description: "Targeted network building, hashtag strategy, and collaboration opportunities to grow your audience fast.", badge: "Growth", accent: "text-brand-green", glow: "rgba(16,185,129,0.10)" },
  { icon: BarChart3, title: "Monthly Performance Reports", description: "Clear monthly reporting on follower growth, reach, engagement, and business impact of your personal brand.", badge: "Reporting", accent: "text-brand-purple", glow: "rgba(139,92,246,0.10)" },
]


const whyUsItems = [
  { icon: User2, title: "Your Voice, Not a Bot", body: "We write content that sounds authentically like you — not generic, AI-generated filler that your audience can immediately spot.", highlight: "Authentic Content", accent: "text-brand-purple", bg: "rgba(139,92,246,0.08)", dotColor: "purple" as const },
  { icon: Star, title: "Authority-Building Strategy", body: "We position you as a thought leader with strategic content that earns credibility, trust, and inbound opportunities.", highlight: "Industry Authority", accent: "text-brand-purple", bg: "rgba(103,232,249,0.08)", dotColor: "cyan" as const },
  { icon: TrendingUp, title: "Rapid Profile Growth", body: "Our clients average 68% follower growth in the first 90 days with high engagement rates that signal real authority.", highlight: "68% Avg Growth", accent: "text-brand-blue", bg: "rgba(96,165,250,0.08)", dotColor: "blue" as const },
  { icon: Zap, title: "Business Opportunity Driven", body: "Personal branding isn't vanity — it's lead generation. We build your presence to attract deals, partnerships, and clients.", highlight: "ROI Focused", accent: "text-brand-green", bg: "rgba(16,185,129,0.08)", dotColor: "green" as const },
]

const faqs = [
  { question: "Which platforms do you manage for personal brands?", answer: "We manage LinkedIn, Instagram, Facebook, and TikTok. LinkedIn is typically the highest ROI platform for business professionals, but we recommend platforms based on your audience." },
  { question: "Will the content sound like me?", answer: "Yes. We start with a brand voice discovery session to understand your communication style, stories, and perspective. Every post is written to sound authentically like you." },
  { question: "Do I need to provide content ideas?", answer: "No. We come up with all the content ideas based on your industry, audience, and goals. You just review and approve before anything goes live." },
  { question: "Is this suitable for CEOs, founders, and influencers?", answer: "Yes. We serve founders, CEOs, C-suite executives, coaches, consultants, and anyone building a professional personal brand that drives business outcomes." },
  { question: "How quickly will I see follower growth?", answer: "Most clients see measurable growth within 30–45 days. Significant authority building and consistent follower growth typically shows clearly by month 2–3." },
]

export function PersonalSocialPage() {
  return (
    <>
      <SolutionHero
        badge="Personal Brand Management"
        badgeIcon={User2}
        headline={<>Build Your Personal Brand & <span className="text-gradient-brand">Online Authority</span></>}
        subtext="ClickDudes manages your personal social accounts — content creation, posting, engagement, and network growth — so your personal brand works while you focus on your business."
        primaryCTA={{ label: "Grow My Personal Brand", href: "/about/contact-us" }}
        secondaryCTA={{ label: "Free Brand Audit", href: "/about/contact-us" }}
        caption="LinkedIn, Instagram, TikTok · Authentic content · Authority building · Network growth"
        stats={[
          { value: "68%",  label: "Avg Follower Growth" },
          { value: "9.2%", label: "Avg Engagement" },
          { value: "24k",  label: "Avg Profile Views" },
          { value: "87",   label: "Avg Authority Score" },
        ]}
        panelContent={<PersonalSocialHeroPanel />}
        robotVariant="analytics"
      />
      <PersonalBrandShowcaseSection />
      <SolutionProblemSolution
        badge="The Problem"
        heading={<>Why Most Personal Brands <span className="text-gradient-brand">Never Take Off</span></>}
        subtext="Most professionals understand that a strong personal brand matters. The hard part is building one consistently — and that's where most people fall short."
        problems={problems}
        solutions={solutions}
        problemLabel="Without ClickDudes"
        solutionLabel="With ClickDudes"
      />
      <SolutionFeatures
        badge="What We Deliver"
        heading={<>Complete Personal Brand <span className="text-gradient-brand">Growth System</span></>}
        subtext="The tools, strategy, and execution that turn a LinkedIn profile into a lead-generating personal brand."
        features={features}
      />
      <PersonalSocialProcessSection />
      <SolutionWhyUs
        badge="Why ClickDudes"
        heading={<>The Personal Brand Partner <span className="text-gradient-brand">Built for Founders</span></>}
        subtext="We combine authentic content creation, strategic growth, and business-focused thinking to build personal brands that convert."
        items={whyUsItems}
      />
      <SolutionFAQ
        badge="FAQ"
        heading={<>Personal Brand Management <span className="text-gradient-brand">Questions Answered</span></>}
        subtext="How we build your online presence, what consistency looks like month to month, and what results to expect."
        faqs={faqs}
      />
      <PersonalSocialCTASection />
    </>
  )
}
