"use client"

import { motion } from "framer-motion"
import { Lightbulb, Palette, Calendar, BarChart3, ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"

const PHASES = [
  {
    icon: Lightbulb, phase: "Strategy",
    title: "Content Strategy & Brand Voice",
    body: "We define your content pillars, target audience, posting frequency, and platform priorities — the foundation of everything we create.",
    outputs: ["Content pillars", "Brand voice guide", "Platform strategy"],
    color: "text-brand-purple", bg: "bg-brand-purple/[0.08]", border: "border-brand-purple/[0.15]",
    gradient: "from-brand-purple/20 to-transparent",
  },
  {
    icon: Palette, phase: "Creation",
    title: "Content Design & Copywriting",
    body: "Our team designs platform-native visuals and writes engaging captions — every post crafted to your brand's unique voice and audience.",
    outputs: ["Branded graphics", "Captions & hashtags", "Video scripts"],
    color: "text-brand-blue", bg: "bg-brand-blue/[0.08]", border: "border-brand-blue/[0.15]",
    gradient: "from-brand-blue/20 to-transparent",
  },
  {
    icon: Calendar, phase: "Scheduling",
    title: "Smart Scheduling & Publishing",
    body: "We schedule every post at the optimal time for your audience — maximising reach, engagement, and algorithm performance automatically.",
    outputs: ["Optimal time slots", "10+ posts/week", "4 platforms"],
    color: "text-brand-purple", bg: "bg-brand-cyan/[0.08]", border: "border-brand-cyan/[0.15]",
    gradient: "from-brand-cyan/20 to-transparent",
  },
  {
    icon: BarChart3, phase: "Analytics",
    title: "Monthly Reporting & Growth",
    body: "Monthly analytics reports showing follower growth, engagement rates, reach, and ROI — with strategy refinements built in every cycle.",
    outputs: ["Growth metrics", "Engagement report", "Next-month plan"],
    color: "text-brand-green", bg: "bg-brand-green/[0.08]", border: "border-brand-green/[0.15]",
    gradient: "from-brand-green/20 to-transparent",
  },
]

export function SocialMediaProcessSection() {
  return (
    <Section background="white" padding="xl" aria-label="Social media content engine">
      <Container>
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full bg-brand-cyan/[0.04] blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/[0.08] border border-brand-cyan/[0.12] mb-6">
            <BarChart3 className="w-3.5 h-3.5 text-brand-cyan" aria-hidden="true" />
            <span className="text-label font-semibold text-brand-purple">Content Engine</span>
          </div>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-4">
            How We Turn Your Brand Into{" "}
            <span className="text-gradient-brand">a Social Powerhouse</span>
          </h2>
          <p className="text-body text-text-muted max-w-xl mx-auto">
            A repeatable content engine that consistently delivers engagement, growth, and brand awareness every single month.
          </p>
        </div>

        {/* Horizontal workflow */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {PHASES.map(({ icon: Icon, phase, title, body, outputs, color, bg, border, gradient }, i) => (
            <div key={phase} className="relative flex flex-col">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`flex-1 glass rounded-3xl overflow-hidden border ${border} cursor-default`}>
                {/* Gradient top bar */}
                <div className={`h-1.5 bg-gradient-to-r ${gradient}`} />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className={`w-9 h-9 rounded-xl ${bg} border ${border} flex items-center justify-center`}>
                      <Icon className={`w-4.5 h-4.5 ${color}`} aria-hidden="true" />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${color}`}>{phase}</span>
                  </div>
                  <p className="text-[14px] font-bold text-text-primary mb-2 leading-snug">{title}</p>
                  <p className="text-[12px] text-text-muted leading-relaxed mb-4">{body}</p>
                  <ul className="space-y-1.5">
                    {outputs.map((o) => (
                      <li key={o} className={`text-[11px] font-medium ${color} flex items-center gap-1.5`}>
                        <span className="w-1 h-1 rounded-full bg-current shrink-0" />
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {i < PHASES.length - 1 && (
                <div className="hidden xl:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-white/60 shadow-sm items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-text-muted" aria-hidden="true" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
