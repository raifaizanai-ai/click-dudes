"use client"

import { BrainCircuit, BarChart3, Zap, TrendingUp, Shield, DollarSign, Users, Clock, Award, Layers } from "lucide-react"
import { AIOptimizationHero } from "@/sections/solutions/ai-ad-optimization/AIOptimizationHero"
import { SolutionPartners } from "@/sections/solutions/shared/SolutionPartners"
import { SolutionProblemSolution } from "@/sections/solutions/shared/SolutionProblemSolution"
import { SolutionFeatures } from "@/sections/solutions/shared/SolutionFeatures"
import { SolutionAnalytics } from "@/sections/solutions/shared/SolutionAnalytics"
import { SolutionWhyUs } from "@/sections/solutions/shared/SolutionWhyUs"
import { SolutionMetrics } from "@/sections/solutions/shared/SolutionMetrics"
import { SolutionFAQ } from "@/sections/solutions/shared/SolutionFAQ"
import { AITestimonials } from "@/sections/solutions/ai-ad-optimization/AITestimonials"
import { AiAdProcessSection } from "@/sections/solutions/ai-ad-optimization/AiAdProcessSection"
import { AiAdCTASection } from "@/sections/solutions/ai-ad-optimization/AiAdCTASection"
import { GradientText } from "@/components/shared/GradientText"

const PARTNERS = [
  "Google AdX", "OpenX", "Magnite", "Index Exchange", "PubMatic",
  "Criteo", "Xandr", "ShareThrough", "TripleLift", "AppLovin",
  "Meta Audience Network", "Amazon DSP", "Sovrn", "GumGum", "Yieldmo",
]

const PROBLEMS = [
  { title: "Static Floors Leave Revenue Behind", body: "Manual price floor configurations set once and forgotten. They don't adapt to hourly CPM patterns, seasonal variance, or demand shifts, leaving money on the table every time market conditions change." },
  { title: "Revenue Anomalies Go Undetected", body: "Without automated monitoring, CPM drops, fill rate crashes, and demand partner outages can run undetected for days, costing thousands in missed revenue before anyone investigates." },
  { title: "No Predictive Revenue Visibility", body: "Publishers manage monetization reactively, looking at yesterday's data to make today's decisions. Without revenue forecasting, budget planning, deal negotiation, and seasonal preparation are all done blind." },
]

const SOLUTIONS = [
  { title: "Self-Learning Dynamic Floor Pricing", body: "AI models continuously update price floors based on real-time bid patterns, session context, and historical CPM curves, no human intervention required. Floors that are always in the optimal range." },
  { title: "Real-Time Revenue Anomaly Detection", body: "Machine learning monitors every metric in real time. When a CPM drop, fill rate spike, or demand partner outage is detected, alerts fire within 5 minutes, before significant revenue is lost." },
  { title: "Predictive Revenue Intelligence", body: "30-day revenue forecasts, seasonal CPM projection models, and demand scenario analysis give you forward visibility to plan, negotiate, and optimize proactively rather than reactively." },
]

const FEATURES = [
  {
    icon: BrainCircuit, title: "Dynamic Floor Pricing AI",
    description: "Self-learning models adjust price floors every 30 minutes based on bid density, win rates, and CPM patterns by placement, device, hour, and geography. Always optimal, never stale.",
    badge: "Core AI", accent: "text-brand-purple", glow: "rgba(139,92,246,0.12)",
  },
  {
    icon: Zap, title: "Revenue Anomaly Detection",
    description: "Statistical anomaly detection monitors 40+ metrics simultaneously. CPM drops, fill rate crashes, and demand outages trigger alerts within 5 minutes, day or night.",
    badge: "24/7 Guard", accent: "text-brand-blue", glow: "rgba(96,165,250,0.12)",
  },
  {
    icon: BarChart3, title: "Predictive Revenue Forecasting",
    description: "30-day rolling revenue forecasts with seasonal CPM adjustment models. Understand exactly how holidays, news cycles, and campaign seasons will affect your revenue.",
    badge: "Forecasting", accent: "text-brand-purple", glow: "rgba(103,232,249,0.12)",
  },
  {
    icon: Layers, title: "Automated A/B Testing Engine",
    description: "Continuous multivariate testing across floor configurations, timeout settings, demand partner order, and ad format parameters, running in the background without manual setup.",
    accent: "text-brand-green", glow: "rgba(16,185,129,0.12)",
  },
  {
    icon: Shield, title: "Yield Protection System",
    description: "AI identifies undervalued inventory, over-suppressed floors, and demand partner imbalances that are costing revenue, then corrects them automatically within your defined guardrails.",
    accent: "text-brand-violet", glow: "rgba(168,85,247,0.12)",
  },
  {
    icon: TrendingUp, title: "AI Revenue Intelligence Reports",
    description: "Weekly AI-generated revenue reports highlight yield opportunities, anomaly summaries, A/B test conclusions, and recommended configuration changes, in plain English.",
    badge: "Premium", accent: "text-brand-purple", glow: "rgba(139,92,246,0.10)",
  },
]

const WHY_US_ITEMS = [
  {
    icon: Award,      title: "Trained on $200M+ in Auction Data",
    body: "Our AI models were trained on anonymized auction data from 700+ publishers over 3+ years. They understand patterns that no human analyst could derive from a single publisher's data.",
    highlight: "Deep Training", accent: "text-brand-purple", bg: "rgba(139,92,246,0.10)", dotColor: "purple" as const,
  },
  {
    icon: Zap,        title: "5-Minute Anomaly Response",
    body: "Our monitoring system checks every key metric every 5 minutes. When something goes wrong, an alert is in your inbox before the revenue impact is significant.",
    highlight: "Always Watching", accent: "text-brand-blue", bg: "rgba(96,165,250,0.10)", dotColor: "blue" as const,
  },
  {
    icon: BarChart3,  title: "98% Floor Prediction Accuracy",
    body: "Our floor pricing AI achieves 98% accuracy in predicting optimal CPM floors across diverse inventory types, a benchmark built through years of iterative model refinement.",
    highlight: "98% Accuracy", accent: "text-brand-purple", bg: "rgba(103,232,249,0.10)", dotColor: "cyan" as const,
  },
  {
    icon: Users,      title: "AI + Human Intelligence",
    body: "Our AI handles the continuous optimization; our human publishers managers handle strategy, deals, and escalations. The combination outperforms pure-AI or pure-human management.",
    highlight: "Hybrid Model", accent: "text-brand-green", bg: "rgba(16,185,129,0.10)", dotColor: "green" as const,
  },
]

const METRICS = [
  { icon: TrendingUp, value: 28,  decimals: 0, prefix: "",  suffix: "%",    label: "AI Yield Lift",      caption: "Over manual optimization baseline",             accent: "text-brand-purple", bg: "rgba(139,92,246,0.10)" },
  { icon: Zap,        value: 5,   decimals: 0, prefix: "",  suffix: " min", label: "Alert Response",     caption: "P95 time from anomaly to notification",        accent: "text-brand-blue",   bg: "rgba(96,165,250,0.10)" },
  { icon: BarChart3,  value: 98.1, decimals: 1, prefix: "", suffix: "%",   label: "Prediction Accuracy",caption: "Floor price model accuracy rate",               accent: "text-brand-green",  bg: "rgba(16,185,129,0.10)" },
  { icon: Clock,      value: 3,   decimals: 0, prefix: "",  suffix: " days", label: "Time to Insights",  caption: "From data ingestion to first AI recommendations", accent: "text-brand-purple",   bg: "rgba(103,232,249,0.10)" },
]


const FAQS = [
  {
    question: "How is AI optimization different from just setting better price floors manually?",
    answer:   "Manual floors are updated infrequently, weekly or monthly at best, and apply the same rate across all contexts. Our AI updates floors every 30 minutes with separate configurations for each placement, device type, geographic market, hour of day, and day of week. The optimization depth is thousands of times more granular than any analyst could manage manually.",
  },
  {
    question: "What data does the AI need to work effectively?",
    answer:   "The AI uses your auction log data (bids, wins, floors, CPMs) from your ad server. We typically ingest 90 days of historical data to establish baseline patterns. The models begin producing useful predictions within 3–5 days and reach peak accuracy after 30 days of live optimization.",
  },
  {
    question: "How does anomaly detection work?",
    answer:   "We monitor 40+ metrics in real time including CPM by placement, fill rate by SSP, bid density, timeout rates, and revenue per session. Statistical models establish normal ranges for each metric based on historical patterns. Deviations beyond defined thresholds trigger immediate alerts to your team and our operations team simultaneously.",
  },
  {
    question: "Will the AI ever set a floor that's too high and hurt fill rate?",
    answer:   "Our AI optimizes for a revenue-fill balance, not just maximum floor price. It's trained to avoid fill rate degradation beyond configurable thresholds. You define your minimum acceptable fill rate as a guardrail, and the AI optimizes yield within those constraints.",
  },
  {
    question: "Can the AI work with my existing header bidding or GAM setup?",
    answer:   "Yes. Our AI layer integrates with your existing Prebid.js or Google Ad Manager configuration through API and log-level data access. It doesn't replace your ad stack, it optimizes on top of it.",
  },
  {
    question: "What if the AI makes a bad recommendation?",
    answer:   "All AI recommendations are implemented within human-defined guardrails. You can review any pending changes before they apply. Our operations team reviews daily performance reports and can override or pause the AI optimization at any point. We also maintain rollback capabilities for every configuration change.",
  },
]

export function AiOptimizationPage() {
  return (
    <>
      <AIOptimizationHero />

      <SolutionPartners label="Integrated Demand Partners" partners={PARTNERS} />

      <SolutionProblemSolution
        badge="The Problem"
        heading={<>Why Manual Optimization<br /><GradientText gradient="brand">Can't Keep Up</GradientText></>}
        subtext="Ad market conditions change by the minute. Static floors, reactive monitoring, and backward-looking analytics are structurally unable to maximize yield in a dynamic auction environment."
        problems={PROBLEMS}
        solutions={SOLUTIONS}
      />

      <SolutionFeatures
        badge="AI Platform Features"
        heading={<>The Full AI Yield<br /><GradientText gradient="violet">Optimization Stack</GradientText></>}
        subtext="Every AI capability your ad operation needs to optimize autonomously, from real-time floor adjustment to 30-day revenue forecasting."
        features={FEATURES}
      />

      <SolutionAnalytics
        badge="Revenue Intelligence"
        heading={<>AI-Powered Analytics<br /><GradientText gradient="brand">That See the Future</GradientText></>}
        subtext="Not just what happened, what's going to happen. Our AI dashboard shows current performance alongside 30-day projections and proactive optimization recommendations."
        bullets={[
          "Real-time CPM and fill rate monitoring with AI anomaly scoring",
          "30-day revenue forecast with seasonal adjustment overlays",
          "A/B test results with statistical significance reporting",
          "AI-identified yield opportunities with estimated revenue impact",
          "Weekly AI narrative report with plain-English optimization guidance",
        ]}
        robotVariant="analytics"
        robotLabel="Revenue AI Advisor"
        robotCaption="Generates actionable optimization recommendations from your auction data every 30 minutes."
      />

      <AiAdProcessSection />

      <SolutionWhyUs
        badge="Why Click Dudes AI"
        heading={<>Publisher AI Built on<br /><GradientText gradient="violet">Real Auction Data</GradientText></>}
        subtext="Not a generic ML framework applied to ad tech, an AI system built specifically for publisher yield optimization, trained on years of real auction data."
        items={WHY_US_ITEMS}
      />

      <SolutionMetrics
        badge="Proven AI Results"
        heading={<>What AI Optimization<br /><GradientText gradient="brand">Actually Delivers</GradientText></>}
        subtext="Observed performance improvements from publishers running our AI optimization layer."
        metrics={METRICS}
      />

      <AITestimonials />

      <SolutionFAQ
        badge="FAQ"
        heading={<>AI Optimization<br /><GradientText gradient="brand">Questions Answered</GradientText></>}
        subtext="Technical and commercial questions about our AI yield optimization platform."
        faqs={FAQS}
      />

      <AiAdCTASection />
    </>
  )
}
