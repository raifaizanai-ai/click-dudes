"use client"

import { motion } from "framer-motion"
import {
  Activity,
  Shield,
  TrendingUp,
  Eye,
  Lock,
  Zap,
  LayoutGrid,
  BarChart3,
} from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { GlassCard } from "@/components/shared/GlassCard"
import { LiveDot } from "@/components/shared/LiveDot"
import { staggerContainer, fadeUp } from "@/lib/animations"

interface QualityFeature {
  icon: React.ElementType
  title: string
  description: string
}

const FEATURES: QualityFeature[] = [
  {
    icon:        Activity,
    title:       "Traffic Quality Monitoring",
    description: "Real-time detection of traffic anomalies, spikes, and quality degradation signals.",
  },
  {
    icon:        Shield,
    title:       "Invalid Traffic Risk Checks",
    description: "Automated IVT scanning to protect publisher accounts and demand partner relationships.",
  },
  {
    icon:        TrendingUp,
    title:       "Revenue Performance Tracking",
    description: "Daily revenue analytics with anomaly alerts and trend analysis across all ad units.",
  },
  {
    icon:        Eye,
    title:       "Viewability Optimization",
    description: "AI-driven ad placement adjustments to maximize viewable impressions and CPM rates.",
  },
  {
    icon:        Lock,
    title:       "Policy Safety Monitoring",
    description: "Continuous content scanning for compliance with advertiser and Google Publisher guidelines.",
  },
  {
    icon:        Zap,
    title:       "Demand Partner Matching",
    description: "Intelligent matching of publisher inventory to highest-value demand sources in real time.",
  },
  {
    icon:        LayoutGrid,
    title:       "Ad Placement Intelligence",
    description: "Machine learning models that optimize ad unit placement for RPM and user experience.",
  },
  {
    icon:        BarChart3,
    title:       "eCPM/RPM Optimization",
    description: "Dynamic price floor management to maximize yield on every impression served.",
  },
]

export function AINetworkQuality() {
  return (
    <Section background="section" padding="lg" aria-label="AI Network Quality Monitoring">
      <Container size="lg">
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          <SectionHeader
            badge="AI-Powered Monitoring"
            heading={
              <>
                AI-Powered{" "}
                <span className="text-gradient-brand">Network Health</span>
              </>
            }
            subtext="Click Dudes uses intelligent monitoring to protect publishers, advertisers, and demand partners across the network."
            align="center"
            subtextWidth="md"
          />
          <LiveDot color="green" size="md" label="All systems operational" />
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <motion.div key={feature.title} variants={fadeUp} className="h-full">
                <GlassCard variant="default" padding="md" hover rounded="2xl" className="h-full">
                  <div className="w-9 h-9 rounded-xl bg-brand-purple/10 flex items-center justify-center mb-3">
                    <Icon className="w-4 h-4 text-brand-purple" aria-hidden="true" />
                  </div>
                  <h3 className="text-sm font-bold text-text-primary mb-1.5">{feature.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{feature.description}</p>
                </GlassCard>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </Section>
  )
}
