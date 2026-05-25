"use client"

import { motion } from "framer-motion"
import { Palette, ArrowRight, CheckCircle2, Sparkles } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"

const TRUST = ["1,200+ Assets/Month", "48hr Turnaround", "Platform-Optimised", "Unlimited Revisions"]

const FORMATS = [
  { label: "Instagram Post",    size: "1080×1080", color: "from-brand-purple/40 to-brand-violet/25" },
  { label: "Facebook Ad",       size: "1200×628",  color: "from-brand-blue/35 to-brand-cyan/25"     },
  { label: "YouTube Thumbnail", size: "1280×720",  color: "from-brand-cyan/35 to-brand-blue/25"     },
  { label: "Amazon A+ Banner",  size: "970×300",   color: "from-brand-violet/35 to-brand-purple/25" },
]

const PALETTE = [
  "bg-brand-purple", "bg-brand-violet", "bg-brand-blue",
  "bg-brand-cyan",   "bg-brand-green",  "bg-brand-navy/40",
]

export function GraphicDesignCTASection() {
  return (
    <Section background="navy" padding="xl" aria-label="Graphic design get started CTA">
      <Container>
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 right-1/3 w-[400px] h-[400px] rounded-full bg-brand-violet/[0.08] blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-blue/[0.06] blur-3xl" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-brand-purple/[0.10] mb-7">
              <Sparkles className="w-3.5 h-3.5 text-brand-violet" aria-hidden="true" />
              <span className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">Creative Studio</span>
            </div>
            <h2 className="text-h1 font-bold text-text-primary tracking-heading text-balance mb-5">
              Visuals That <span className="text-gradient-brand">Build Your Brand</span>
            </h2>
            <p className="text-body-lg text-text-secondary leading-relaxed mb-8 max-w-md text-pretty">
              Click Dudes creates premium visual content that makes your brand stand out, drives engagement, and converts across every platform and channel.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-violet text-white font-semibold text-[14px] hover:opacity-90 transition-opacity group shadow-[0_4px_20px_rgba(139,92,246,0.30)]">
                Design My Brand Content
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl glass-dark border border-brand-purple/[0.14] text-text-secondary font-semibold text-[14px] hover:border-brand-purple/25 transition-all">
                Talk to Our Team
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {TRUST.map((t) => (
                <span key={t} className="text-[10px] font-semibold px-3 py-1.5 rounded-full glass-dark border border-brand-purple/[0.10] text-text-muted flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3 text-brand-green" aria-hidden="true" /> {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: design format preview */}
          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
            className="space-y-3">
            <div className="grid grid-cols-2 gap-3">
              {FORMATS.map(({ label, size, color }, i) => (
                <motion.div key={label}
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }} viewport={{ once: true }}
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="glass-dark rounded-2xl overflow-hidden border border-brand-purple/[0.09] cursor-default">
                  <div className={`h-14 bg-gradient-to-br ${color} flex items-center justify-center`}>
                    <Palette className="w-5 h-5 text-brand-purple/60" aria-hidden="true" />
                  </div>
                  <div className="px-3 py-2">
                    <p className="text-[11px] font-bold text-text-primary">{label}</p>
                    <p className="text-[9px] text-text-muted">{size}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Colour palette */}
            <div className="glass-dark rounded-2xl p-4 border border-brand-purple/[0.09]">
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-3">Your Brand Palette</p>
              <div className="flex gap-2">
                {PALETTE.map((c, i) => (
                  <motion.div key={i}
                    initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.05, type: "spring", bounce: 0.4 }}
                    viewport={{ once: true }}
                    className={`flex-1 h-8 rounded-lg ${c}`} />
                ))}
              </div>
              <p className="text-[10px] text-text-muted mt-2">Brand-native design — every asset on-brand, every time</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
