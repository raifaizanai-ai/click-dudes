"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Monitor, Smartphone } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { useReducedMotion } from "@/hooks/use-media-query"
import { cn } from "@/lib/utils"

const DESKTOP_FORMATS = [
  { name: "Leaderboard",  size: "728×90",  colorClass: "bg-brand-blue/10 border-brand-blue/25 text-brand-blue"   },
  { name: "Sticky Header",size: "970×90",  colorClass: "bg-brand-purple/10 border-brand-purple/25 text-brand-purple" },
  { name: "Sidebar",      size: "300×600", colorClass: "bg-brand-violet/10 border-brand-violet/25 text-brand-violet" },
  { name: "In-Content",   size: "300×250", colorClass: "bg-brand-cyan/10 border-brand-cyan/25 text-brand-cyan"    },
  { name: "Interstitial", size: "Full Screen", colorClass: "bg-brand-green/10 border-brand-green/25 text-brand-green" },
  { name: "Video Ads",    size: "640×360", colorClass: "bg-brand-purple/10 border-brand-purple/25 text-brand-purple" },
  { name: "Native Ads",   size: "Native",  colorClass: "bg-brand-blue/10 border-brand-blue/25 text-brand-blue"    },
]

const MOBILE_FORMATS = [
  { name: "Sticky Footer", size: "320×50",     colorClass: "bg-brand-purple/10 border-brand-purple/25 text-brand-purple" },
  { name: "Anchor Ads",    size: "320×50",     colorClass: "bg-brand-cyan/10 border-brand-cyan/25 text-brand-cyan"    },
  { name: "Rewarded Ads",  size: "Rewarded",   colorClass: "bg-brand-green/10 border-brand-green/25 text-brand-green"  },
  { name: "Interstitial",  size: "Full Screen",colorClass: "bg-brand-violet/10 border-brand-violet/25 text-brand-violet"},
  { name: "Native Ads",    size: "Native",     colorClass: "bg-brand-blue/10 border-brand-blue/25 text-brand-blue"    },
  { name: "Video Ads",     size: "640×360",    colorClass: "bg-brand-purple/10 border-brand-purple/25 text-brand-purple"},
]

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

function DesktopMockup({ fi }: { fi: number }) {
  const f = DESKTOP_FORMATS[fi]
  return (
    <div className="rounded-t-2xl rounded-b-lg overflow-hidden shadow-xl" style={{ width: 360, background: "#e8ecf4" }}>
      <div className="bg-white/90 px-4 py-2.5 flex items-center gap-2 border-b border-brand-purple/[0.08]">
        <div className="flex gap-1.5">
          {["#FF5F57","#FFBD2E","#28C840"].map(c => <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />)}
        </div>
        <div className="flex-1 ml-2 h-5 rounded-full bg-brand-purple/6 flex items-center px-2">
          <span className="text-[9px] text-text-muted">yoursite.com</span>
        </div>
      </div>
      <div className="bg-white relative p-3" style={{ height: 210 }}>
        <div className="flex gap-2 h-full">
          <div className="flex-1 flex flex-col gap-2">
            <div className="h-3 bg-brand-purple/8 rounded w-3/4" />
            <div className="h-2 bg-brand-purple/5 rounded" />
            <div className="h-2 bg-brand-purple/5 rounded w-5/6" />
            <div className="h-2 bg-brand-purple/5 rounded w-4/6" />
            <div className="flex-1" />
            <AnimatePresence mode="wait">
              <motion.div key={fi}
                initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className={cn("rounded-lg border p-3 flex flex-col items-center justify-center gap-1", f.colorClass)}>
                <span className="text-xs font-bold">{f.name}</span>
                <span className="text-[10px] opacity-70">{f.size}</span>
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="w-20 flex flex-col gap-2">
            <div className="h-2 bg-brand-purple/5 rounded" />
            <div className="flex-1 rounded-lg border border-brand-purple/10 bg-brand-purple/4 flex items-center justify-center">
              <span className="text-[8px] text-text-muted text-center leading-tight px-1">Sidebar Ad</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function MobileMockup({ fi }: { fi: number }) {
  const f = MOBILE_FORMATS[fi]
  return (
    <div className="rounded-3xl overflow-hidden" style={{ width: 176, height: 340, background: "white", border: "4px solid rgba(7,17,47,0.12)" }}>
      <div className="bg-white px-4 py-2 flex items-center justify-between border-b border-brand-purple/[0.06]">
        <span className="text-[9px] font-semibold text-text-primary">9:41</span>
        <div className="flex items-end gap-0.5">
          {[3,4,5].map(b => <div key={b} className="w-1 rounded-sm bg-text-primary/50" style={{ height: b * 2 }} />)}
        </div>
      </div>
      <div className="px-3 py-2 flex flex-col gap-2 relative" style={{ height: "calc(100% - 52px)" }}>
        <div className="h-2 bg-brand-purple/8 rounded w-3/4" />
        <div className="h-2 bg-brand-purple/5 rounded" />
        <div className="h-2 bg-brand-purple/5 rounded w-5/6" />
        <div className="flex-1" />
        <AnimatePresence mode="wait">
          <motion.div key={fi}
            initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className={cn("rounded-lg border p-2 flex flex-col items-center justify-center gap-0.5 w-full", f.colorClass)}>
            <span className="text-[10px] font-bold">{f.name}</span>
            <span className="text-[9px] opacity-70">{f.size}</span>
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute bottom-1 left-0 right-0 flex justify-center">
        <div className="w-16 h-1 rounded-full bg-text-primary/20" />
      </div>
    </div>
  )
}

export function AdFormatsShowcase() {
  const reduced = useReducedMotion()
  const [dfi, setDfi] = useState(0)
  const [mfi, setMfi] = useState(0)

  useEffect(() => {
    if (reduced) return
    const d = setInterval(() => setDfi(i => (i + 1) % DESKTOP_FORMATS.length), 3000)
    const m = setInterval(() => setMfi(i => (i + 1) % MOBILE_FORMATS.length), 3500)
    return () => { clearInterval(d); clearInterval(m) }
  }, [reduced])

  return (
    <Section background="base" padding="xl" aria-label="Supported ad formats">
      <GradientOrb color="blue" size="xl" blur="2xl" opacity={0.08} className="top-0 right-0" />
      <Container>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="text-center mb-12">
          <span className="text-[11px] font-semibold tracking-widest uppercase text-text-muted">Ad Formats</span>
          <h2 className="text-h3 sm:text-h2 font-bold text-text-primary tracking-heading text-balance mt-2">
            Supported{" "}<GradientText gradient="brand">Ad Formats</GradientText>
          </h2>
          <p className="text-sm text-text-secondary mt-3 max-w-lg mx-auto">
            Explore the monetization opportunities available across desktop, mobile, app, and CTV inventory.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">

          {/* Desktop */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 mb-1">
              <Monitor aria-hidden="true" className="w-4 h-4 text-brand-blue" />
              <span className="text-sm font-semibold text-text-primary">Desktop</span>
            </div>
            <DesktopMockup fi={dfi} />
            <div className="flex gap-1.5">
              {DESKTOP_FORMATS.map((_, i) => (
                <button key={i} onClick={() => setDfi(i)} aria-label={`Show ${DESKTOP_FORMATS[i].name}`}
                  className={cn("h-1.5 rounded-full transition-all duration-200", dfi === i ? "bg-brand-purple w-5" : "bg-brand-purple/25 w-1.5")} />
              ))}
            </div>
            <p className="text-xs font-semibold text-text-primary">{DESKTOP_FORMATS[dfi].name}</p>
          </motion.div>

          {/* Mobile */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-2 mb-1">
              <Smartphone aria-hidden="true" className="w-4 h-4 text-brand-purple" />
              <span className="text-sm font-semibold text-text-primary">Mobile</span>
            </div>
            <MobileMockup fi={mfi} />
            <div className="flex gap-1.5">
              {MOBILE_FORMATS.map((_, i) => (
                <button key={i} onClick={() => setMfi(i)} aria-label={`Show ${MOBILE_FORMATS[i].name}`}
                  className={cn("h-1.5 rounded-full transition-all duration-200", mfi === i ? "bg-brand-purple w-5" : "bg-brand-purple/25 w-1.5")} />
              ))}
            </div>
            <p className="text-xs font-semibold text-text-primary">{MOBILE_FORMATS[mfi].name}</p>
          </motion.div>

        </div>
      </Container>
    </Section>
  )
}
