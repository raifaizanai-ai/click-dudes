"use client"

import React from "react"
import { motion } from "framer-motion"
import { Sparkles, Layers, Image, Zap } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"

const PORTFOLIO_ITEMS = [
  {
    type: "Instagram Post", size: "1080×1080", label: "Social Creative",
    gradient: "from-brand-purple/40 to-brand-violet/30",
    accent: "text-brand-purple", badge: "bg-brand-purple/20 text-brand-purple",
    preview: "instagram",
  },
  {
    type: "Brand Identity", size: "Full Kit", label: "Branding",
    gradient: "from-brand-blue/40 to-brand-cyan/30",
    accent: "text-brand-purple", badge: "bg-brand-cyan/20 text-brand-purple",
    preview: "brand",
  },
  {
    type: "Meta Ad Creative", size: "1200×628", label: "Paid Ads",
    gradient: "from-brand-green/30 to-brand-cyan/20",
    accent: "text-brand-green", badge: "bg-brand-green/20 text-brand-green",
    preview: "ad",
  },
  {
    type: "Amazon A+ Banner", size: "970×300", label: "eCommerce",
    gradient: "from-brand-violet/40 to-brand-blue/30",
    accent: "text-brand-violet", badge: "bg-brand-violet/20 text-brand-violet",
    preview: "amazon",
  },
  {
    type: "YouTube Thumbnail", size: "1280×720", label: "Video",
    gradient: "from-brand-cyan/30 to-brand-purple/30",
    accent: "text-brand-purple", badge: "bg-brand-cyan/20 text-brand-purple",
    preview: "youtube",
  },
  {
    type: "LinkedIn Banner", size: "1584×396", label: "Personal Brand",
    gradient: "from-brand-blue/35 to-brand-purple/25",
    accent: "text-brand-blue", badge: "bg-brand-blue/20 text-brand-blue",
    preview: "linkedin",
  },
]

function InstagramPreview() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-1.5 p-3">
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple/60 to-brand-violet/40 flex items-center justify-center">
        <Image className="w-5 h-5 text-white" aria-hidden="true" />
      </div>
      <div className="space-y-1 w-full">
        <div className="h-1.5 bg-brand-purple/25 rounded-full w-3/4 mx-auto" />
        <div className="h-1 bg-brand-purple/18 rounded-full w-1/2 mx-auto" />
      </div>
    </div>
  )
}

function BrandPreview() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-2 p-3">
      <div className="flex gap-1.5">
        {["bg-brand-purple/70", "bg-brand-blue/70", "bg-brand-cyan/70", "bg-brand-green/70"].map((c, i) => (
          <div key={i} className={`w-4 h-4 rounded-full ${c}`} />
        ))}
      </div>
      <div className="text-[11px] font-bold text-brand-navy/60 tracking-widest">BRAND</div>
      <div className="space-y-0.5 w-full">
        <div className="h-1 bg-brand-purple/25 rounded-full" />
        <div className="h-1 bg-brand-purple/18 rounded-full w-4/5" />
      </div>
    </div>
  )
}

function AdPreview() {
  return (
    <div className="w-full h-full flex flex-col p-3 gap-1.5">
      <div className="flex-1 rounded-lg bg-brand-green/20 flex items-center justify-center">
        <Zap className="w-5 h-5 text-brand-green/70" aria-hidden="true" />
      </div>
      <div className="h-5 rounded-md bg-brand-green/30 flex items-center justify-center">
        <span className="text-[8px] font-bold text-brand-green/80">Shop Now →</span>
      </div>
    </div>
  )
}

function GenericPreview({ color }: { color: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center p-3">
      <div className={`w-full h-full rounded-lg bg-gradient-to-br ${color} flex items-center justify-center`}>
        <Layers className="w-6 h-6 text-brand-purple/55" aria-hidden="true" />
      </div>
    </div>
  )
}

const PREVIEW_MAP: Record<string, () => React.ReactElement> = {
  instagram: () => <InstagramPreview />,
  brand:     () => <BrandPreview />,
  ad:        () => <AdPreview />,
  amazon:    () => <GenericPreview color="from-brand-violet/40 to-brand-blue/30" />,
  youtube:   () => <GenericPreview color="from-brand-cyan/30 to-brand-purple/30" />,
  linkedin:  () => <GenericPreview color="from-brand-blue/35 to-brand-purple/25" />,
}

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  hidden:  { opacity: 0, y: 24, scale: 0.95 },
  visible: { opacity: 1, y: 0,  scale: 1,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
}

export function GraphicPortfolioSection() {
  return (
    <Section background="navy" padding="xl" aria-label="Design portfolio">
      <Container>
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-brand-purple/[0.08] blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-brand-blue/[0.07] blur-3xl" />
        </div>

        <div className="relative z-10 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-brand-purple/[0.10] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
            <span className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">Creative Portfolio</span>
          </div>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-4">
            Premium Designs That{" "}
            <span className="text-gradient-brand">Perform Across Every Platform</span>
          </h2>
          <p className="text-body text-text-secondary max-w-xl mx-auto text-pretty">
            From scroll-stopping social content to high-converting ad creatives, every asset is crafted to build your brand and drive real results.
          </p>
        </div>

        <motion.div
          variants={container} initial="hidden"
          whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10"
        >
          {PORTFOLIO_ITEMS.map(({ type, size, label, gradient, badge, preview }) => {
            const PreviewComp = PREVIEW_MAP[preview]
            return (
              <motion.div key={type} variants={item}
                whileHover={{ y: -6, scale: 1.03 }}
                className="glass-dark rounded-2xl overflow-hidden border border-brand-purple/[0.09] group cursor-default">
                <div className={`h-24 bg-gradient-to-br ${gradient} relative`}>
                  <PreviewComp />
                </div>
                <div className="p-3">
                  <p className="text-[11px] font-bold text-text-primary leading-tight mb-1">{type}</p>
                  <p className="text-[9px] text-text-muted">{size}</p>
                  <span className={`mt-2 inline-block text-[8px] font-bold px-2 py-0.5 rounded-full ${badge}`}>{label}</span>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { value: "1,200+", label: "Assets Created Monthly", color: "text-brand-purple" },
            { value: "48hrs",  label: "Standard Turnaround",    color: "text-brand-purple"   },
            { value: "100%",   label: "Brand-Custom Every Time", color: "text-brand-green" },
          ].map(({ value, label, color }) => (
            <div key={label} className="glass-dark rounded-2xl p-6 text-center border border-brand-purple/[0.09]">
              <p className={`text-3xl font-bold tabular-nums ${color} mb-1`}>{value}</p>
              <p className="text-[12px] text-text-secondary">{label}</p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
