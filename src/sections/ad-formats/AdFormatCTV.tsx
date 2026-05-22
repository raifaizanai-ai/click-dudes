"use client"

import { motion } from "framer-motion"
import { PlayCircle, FastForward, StopCircle, Tv2, PauseCircle, Layers } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { GradientText } from "@/components/shared/GradientText"

interface CTVFormat {
  icon:        LucideIcon
  name:        string
  description: string
  cpm:         string
  completion:  string
  badge?:      string
}

const CTV_FORMATS: CTVFormat[] = [
  {
    icon:        PlayCircle,
    name:        "Pre-Roll Video Ads",
    description: "Shown before content begins — highest completion rates and brand recall. Ideal for awareness campaigns commanding $18–45 CPM.",
    cpm:         "$18–45 CPM",
    completion:  "85–95%",
    badge:       "Most Demanded",
  },
  {
    icon:        FastForward,
    name:        "Mid-Roll Video Ads",
    description: "Inserted at natural content breaks for maximum attention. Viewers are already engaged, driving stronger brand impact at premium CPMs.",
    cpm:         "$22–50 CPM",
    completion:  "88–96%",
    badge:       "Premium CPM",
  },
  {
    icon:        StopCircle,
    name:        "Post-Roll Video Ads",
    description: "Plays after content ends — served to highly engaged viewers. Lower volume but strong intent signals and brand safety.",
    cpm:         "$12–28 CPM",
    completion:  "70–85%",
  },
  {
    icon:        Tv2,
    name:        "CTV Instream Ads",
    description: "Full-screen ads delivered into connected TV streaming environments via SSAI. Broadcast-quality experience with living-room context.",
    cpm:         "$25–55 CPM",
    completion:  "90–98%",
    badge:       "Highest CPM",
  },
  {
    icon:        PauseCircle,
    name:        "Pause Ads",
    description: "Non-intrusive ads appearing when viewers pause content. High viewability and brand safety with zero disruption to the viewing experience.",
    cpm:         "$20–40 CPM",
    completion:  "100%",
  },
  {
    icon:        Layers,
    name:        "Overlay Ads",
    description: "Semi-transparent display units overlaid on video content. Viewer-dismissible with strong click-through on relevant in-content messaging.",
    cpm:         "$8–20 CPM",
    completion:  "View-based",
  },
]

const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function AdFormatCTV() {
  return (
    <Section background="navy" padding="lg" aria-label="Video and CTV ad formats">
      <GradientOrb color="purple" size="xl" blur="2xl" opacity={0.18} animate className="-top-24 right-0" />
      <GradientOrb color="cyan"   size="md" blur="xl"  opacity={0.12}        className="bottom-0 left-0" />

      <Container>
        <SectionHeader
          badge="CTV & Video"
          heading={<><GradientText gradient="cyan">Video & CTV</GradientText><br />Ad Formats</>}
          subtext="The highest-CPM ad formats in digital advertising. Connected TV and video inventory commands premium rates from brand advertisers at $20–55 CPMs."
          align="center"
          subtextWidth="md"
          className="mb-14"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CTV_FORMATS.map((fmt, i) => {
            const Icon = fmt.icon
            return (
              <motion.div key={fmt.name} custom={i} variants={cardVariant} initial="hidden"
                whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -4, transition: { duration: 0.22, ease: "easeOut" } }}
                className="glass-dark rounded-2xl p-6 border border-white/[0.08] group relative overflow-hidden"
                style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.20), 0 0 0 1px rgba(255,255,255,0.06)" }}>

                {/* Glow on hover */}
                <div aria-hidden="true"
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                  style={{ background: "radial-gradient(ellipse at 20% 20%, rgba(139,92,246,0.15) 0%, transparent 70%)" }} />

                {/* Video frame glow border at top */}
                <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/40 to-transparent pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-brand-purple/20 border border-brand-purple/30 flex items-center justify-center"
                      style={{ boxShadow: "0 0 20px rgba(139,92,246,0.25)" }}>
                      <Icon aria-hidden="true" className="w-6 h-6 text-brand-purple" />
                    </div>
                    {fmt.badge && (
                      <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-brand-purple/20 text-brand-cyan border border-brand-purple/30">
                        {fmt.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-[15px] font-bold text-white mb-2 leading-snug">{fmt.name}</h3>
                  <p className="text-[12px] text-white/60 leading-relaxed mb-4">{fmt.description}</p>

                  <div className="flex items-center gap-3">
                    <div className="flex-1 glass-dark rounded-xl p-2.5 border border-white/[0.08]">
                      <p className="text-[9px] text-white/40 uppercase tracking-wider mb-0.5">CPM Range</p>
                      <p className="text-[13px] font-bold text-brand-cyan">{fmt.cpm}</p>
                    </div>
                    <div className="flex-1 glass-dark rounded-xl p-2.5 border border-white/[0.08]">
                      <p className="text-[9px] text-white/40 uppercase tracking-wider mb-0.5">Completion</p>
                      <p className="text-[13px] font-bold text-brand-green">{fmt.completion}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
