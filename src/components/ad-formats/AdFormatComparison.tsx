"use client"

import { motion } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { GradientText } from "@/components/shared/GradientText"
import { cn } from "@/lib/utils"

interface ComparisonRow {
  format:    string
  bestFor:   string
  device:    string
  revenue:   "Standard" | "High" | "Premium"
  uxImpact:  "Minimal" | "Moderate" | "Noticeable"
}

const ROWS: ComparisonRow[] = [
  { format: "Display Ads",     bestFor: "Brand awareness, general publishers",   device: "Web",     revenue: "High",     uxImpact: "Minimal"    },
  { format: "Native Ads",      bestFor: "Content sites, high-engagement traffic", device: "All",     revenue: "High",     uxImpact: "Minimal"    },
  { format: "Sticky Ads",      bestFor: "Long-form content, news, blogs",         device: "All",     revenue: "High",     uxImpact: "Minimal"    },
  { format: "Video Ads",       bestFor: "Video content, premium inventory",        device: "Web/App", revenue: "Premium",  uxImpact: "Moderate"   },
  { format: "Interstitial Ads",bestFor: "Apps, natural transition moments",        device: "Mobile",  revenue: "Premium",  uxImpact: "Noticeable" },
  { format: "Rewarded Ads",    bestFor: "Gaming apps, opt-in monetization",        device: "App",     revenue: "Premium",  uxImpact: "Minimal"    },
  { format: "CTV Ads",         bestFor: "Streaming content, brand campaigns",      device: "CTV",     revenue: "Premium",  uxImpact: "Moderate"   },
]

const REVENUE_STYLE: Record<string, string> = {
  Standard: "bg-brand-blue/10 text-brand-blue",
  High:     "bg-brand-purple/10 text-brand-purple",
  Premium:  "bg-brand-violet/10 text-brand-violet",
}

const UX_STYLE: Record<string, string> = {
  "Minimal":    "bg-brand-green/10 text-brand-green",
  "Moderate":   "bg-brand-blue/10 text-brand-blue",
  "Noticeable": "bg-yellow-400/10 text-yellow-600",
}

const DEVICE_STYLE: Record<string, string> = {
  "Web":     "bg-brand-purple/10 text-brand-purple",
  "Mobile":  "bg-brand-blue/10 text-brand-blue",
  "App":     "bg-brand-cyan/10 text-brand-purple",
  "All":     "bg-brand-green/10 text-brand-green",
  "CTV":     "bg-brand-violet/10 text-brand-violet",
  "Web/App": "bg-brand-blue/10 text-brand-blue",
}

const rowVariant = {
  hidden:  { opacity: 0, x: -16 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function AdFormatComparison() {
  return (
    <Section background="section" padding="lg" aria-label="Ad format comparison" className="mesh-bg">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.08} animate className="-top-24 right-0" />

      <Container>
        <SectionHeader
          badge="Format Guide"
          heading={<>Choose the Right Format<br /><GradientText gradient="brand">for Your Inventory</GradientText></>}
          subtext="Every ad format has a distinct purpose. Use this guide to match the right format to your content type, device mix, and revenue goals."
          align="center"
          subtextWidth="md"
          className="mb-12"
        />

        <div className="overflow-x-auto rounded-2xl border border-brand-purple/[0.10]"
          style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06)" }}>
          <table className="w-full min-w-[700px] border-collapse">
            <thead>
              <tr className="glass-strong">
                {["Format", "Best For", "Device", "Revenue Potential", "UX Impact"].map(col => (
                  <th key={col}
                    className="px-5 py-4 text-left text-[11px] font-bold tracking-widest uppercase text-text-muted border-b border-brand-purple/[0.08]">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, i) => (
                <motion.tr key={row.format} custom={i} variants={rowVariant} initial="hidden"
                  whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                  className={cn(
                    "group transition-colors duration-200",
                    i % 2 === 0 ? "bg-white/50" : "bg-surface-section/30",
                    "hover:bg-brand-purple/[0.03]"
                  )}>
                  <td className="px-5 py-4 border-b border-brand-purple/[0.06]">
                    <span className="text-sm font-bold text-text-primary">{row.format}</span>
                  </td>
                  <td className="px-5 py-4 border-b border-brand-purple/[0.06]">
                    <span className="text-[12px] text-text-secondary">{row.bestFor}</span>
                  </td>
                  <td className="px-5 py-4 border-b border-brand-purple/[0.06]">
                    <span className={cn("text-[11px] font-semibold px-2.5 py-1 rounded-full", DEVICE_STYLE[row.device])}>
                      {row.device}
                    </span>
                  </td>
                  <td className="px-5 py-4 border-b border-brand-purple/[0.06]">
                    <span className={cn("text-[11px] font-semibold px-2.5 py-1 rounded-full", REVENUE_STYLE[row.revenue])}>
                      {row.revenue}
                    </span>
                  </td>
                  <td className="px-5 py-4 border-b border-brand-purple/[0.06]">
                    <span className={cn("text-[11px] font-semibold px-2.5 py-1 rounded-full", UX_STYLE[row.uxImpact])}>
                      {row.uxImpact}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  )
}
