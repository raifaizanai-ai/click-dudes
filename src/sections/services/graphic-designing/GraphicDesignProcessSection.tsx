"use client"

import { motion } from "framer-motion"
import { Star, Palette, Layers, Zap } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"

const PHASES = [
  {
    col: "Brand Brief", status: "Briefing", statusColor: "text-brand-purple",
    cards: [
      { icon: Star, title: "Brand Discovery", body: "Goals, audience, competitors, tone of voice — we build the full creative brief.", color: "text-brand-purple", bg: "bg-brand-purple/[0.08]" },
      { icon: Palette, title: "Style Exploration", body: "Mood boards, colour palettes, and reference curation aligned to your brand.", color: "text-brand-violet", bg: "bg-brand-violet/[0.08]" },
    ],
  },
  {
    col: "Concept Design", status: "Creating", statusColor: "text-brand-blue",
    cards: [
      { icon: Layers, title: "Concept Creation", body: "Multiple design directions delivered for your review and feedback session.", color: "text-brand-blue", bg: "bg-brand-blue/[0.08]" },
      { icon: Star, title: "Platform Specs", body: "Platform-native sizing and specifications applied for every channel.", color: "text-brand-purple", bg: "bg-brand-cyan/[0.08]" },
    ],
  },
  {
    col: "Refinement", status: "Revising", statusColor: "text-brand-purple",
    cards: [
      { icon: Zap, title: "Unlimited Revisions", body: "We iterate based on your feedback until every asset is exactly right.", color: "text-brand-purple", bg: "bg-brand-cyan/[0.08]" },
      { icon: Palette, title: "Brand Consistency", body: "Final review ensures all assets align perfectly to your brand system.", color: "text-brand-blue", bg: "bg-brand-blue/[0.08]" },
    ],
  },
  {
    col: "Delivery", status: "Delivered", statusColor: "text-brand-green",
    cards: [
      { icon: Layers, title: "All Formats", body: "PNG, SVG, PDF, AI — every format you need, export-ready and organised.", color: "text-brand-green", bg: "bg-brand-green/[0.08]" },
      { icon: Zap, title: "Asset Library", body: "Structured library with naming conventions for easy ongoing management.", color: "text-brand-purple", bg: "bg-brand-purple/[0.08]" },
    ],
  },
]

export function GraphicDesignProcessSection() {
  return (
    <Section background="base" padding="xl" aria-label="Graphic design creative process">
      <Container>
        <div className="absolute top-10 left-1/3 w-[350px] h-[350px] rounded-full bg-brand-violet/[0.05] blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-violet/[0.08] border border-brand-violet/[0.12] mb-6">
            <Palette className="w-3.5 h-3.5 text-brand-violet" aria-hidden="true" />
            <span className="text-label font-semibold text-brand-violet">Creative Process</span>
          </div>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-4">
            From Brief to <span className="text-gradient-brand">Beautiful in Days</span>
          </h2>
          <p className="text-body text-text-muted max-w-xl mx-auto">
            A fast, collaborative creative workflow that delivers premium quality without wasting your time.
          </p>
        </div>

        {/* Kanban-style board */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PHASES.map(({ col, status, statusColor, cards }, phaseIdx) => (
            <motion.div key={col}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: phaseIdx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="flex flex-col gap-3">
              {/* Column header */}
              <div className="flex items-center justify-between px-3 py-2">
                <p className="text-[12px] font-bold text-text-primary">{col}</p>
                <span className={`text-[9px] font-bold ${statusColor}`}>{status}</span>
              </div>

              {/* Cards in column */}
              {cards.map(({ icon: Icon, title, body, color, bg }, cardIdx) => (
                <motion.div key={title}
                  initial={{ opacity: 0, scale: 0.94 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: phaseIdx * 0.1 + cardIdx * 0.08 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3, scale: 1.02 }}
                  className="glass rounded-2xl p-4 border border-white/50 cursor-default">
                  <div className={`w-8 h-8 rounded-xl ${bg} flex items-center justify-center mb-3`}>
                    <Icon className={`w-4 h-4 ${color}`} aria-hidden="true" />
                  </div>
                  <p className="text-[13px] font-bold text-text-primary mb-1.5">{title}</p>
                  <p className="text-[11px] text-text-muted leading-relaxed">{body}</p>
                </motion.div>
              ))}

              {/* Phase indicator bar */}
              <div className="h-1 rounded-full bg-gradient-to-r from-brand-purple/20 to-brand-cyan/20 mx-1" />
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-[13px] text-text-muted">
            Standard delivery: <span className="font-semibold text-brand-purple">48 hours</span> · Rush delivery available · Unlimited revisions included
          </p>
        </div>
      </Container>
    </Section>
  )
}
