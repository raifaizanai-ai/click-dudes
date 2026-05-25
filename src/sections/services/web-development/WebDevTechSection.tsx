"use client"

import { motion } from "framer-motion"
import { Code2, Globe, ShoppingCart, Layers, Smartphone, Zap, BarChart3, Layout, CheckCircle2, Star } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"

const SITE_TYPES = [
  { icon: Globe,        label: "WordPress",    desc: "Content & business",  color: "text-brand-purple", bg: "bg-brand-purple/[0.08]", border: "border-brand-purple/[0.15]", glow: "hover:shadow-[0_0_28px_rgba(139,92,246,0.18)]" },
  { icon: ShoppingCart, label: "Shopify",       desc: "eCommerce stores",    color: "text-brand-purple",   bg: "bg-brand-cyan/[0.08]",   border: "border-brand-cyan/[0.15]",   glow: "hover:shadow-[0_0_28px_rgba(103,232,249,0.18)]" },
  { icon: Layers,       label: "Full-Stack",    desc: "Custom web apps",     color: "text-brand-blue",   bg: "bg-brand-blue/[0.08]",   border: "border-brand-blue/[0.15]",   glow: "hover:shadow-[0_0_28px_rgba(96,165,250,0.18)]"  },
  { icon: Code2,        label: "SaaS Platform", desc: "Dashboards & tools",  color: "text-brand-violet", bg: "bg-brand-violet/[0.08]", border: "border-brand-violet/[0.15]", glow: "hover:shadow-[0_0_28px_rgba(168,85,247,0.18)]"  },
  { icon: Smartphone,   label: "PWA",           desc: "App-like experiences",color: "text-brand-green",  bg: "bg-brand-green/[0.08]",  border: "border-brand-green/[0.15]",  glow: "hover:shadow-[0_0_28px_rgba(16,185,129,0.18)]"  },
  { icon: Layout,       label: "Landing Pages", desc: "High-converting CRO", color: "text-brand-purple", bg: "bg-brand-purple/[0.08]", border: "border-brand-purple/[0.15]", glow: "hover:shadow-[0_0_28px_rgba(139,92,246,0.18)]"  },
  { icon: BarChart3,    label: "Analytics App", desc: "Data visualisation",  color: "text-brand-purple",   bg: "bg-brand-cyan/[0.08]",   border: "border-brand-cyan/[0.15]",   glow: "hover:shadow-[0_0_28px_rgba(103,232,249,0.18)]" },
  { icon: Star,         label: "Portfolio",     desc: "Showcase & branding", color: "text-brand-blue",   bg: "bg-brand-blue/[0.08]",   border: "border-brand-blue/[0.15]",   glow: "hover:shadow-[0_0_28px_rgba(96,165,250,0.18)]"  },
]

const TECH_STACK = [
  "Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS",
  "PostgreSQL", "Prisma", "Stripe", "Vercel", "Cloudflare",
]

const PERF_SCORES = [
  { label: "Performance", score: 98, color: "text-brand-green",  bar: "from-brand-green to-brand-cyan"   },
  { label: "Accessibility",score: 96, color: "text-brand-blue",  bar: "from-brand-blue to-brand-cyan"    },
  { label: "Best Practices",score:100, color: "text-brand-purple",bar: "from-brand-purple to-brand-violet"},
  { label: "SEO",          score:100, color: "text-brand-purple",   bar: "from-brand-cyan to-brand-blue"   },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}
const card = {
  hidden:  { opacity: 0, y: 20, scale: 0.96 },
  visible: { opacity: 1, y: 0,  scale: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
}

export function WebDevTechSection() {
  return (
    <Section background="white" padding="xl" aria-label="Technology stack and website types">
      <Container>
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-brand-purple/[0.04] blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-blue/[0.03] blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/[0.08] border border-brand-blue/[0.12] mb-6">
            <Code2 className="w-3.5 h-3.5 text-brand-blue" aria-hidden="true" />
            <span className="text-label font-semibold text-brand-blue">Technology Ecosystem</span>
          </div>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-4">
            Every Website Type,{" "}
            <span className="text-gradient-brand">Every Modern Stack</span>
          </h2>
          <p className="text-body text-text-muted max-w-xl mx-auto text-pretty">
            From WordPress sites to custom SaaS dashboards — we build on the right platform for your business with modern, performance-first technology.
          </p>
        </div>

        {/* Website type cards */}
        <motion.div variants={container} initial="hidden"
          whileInView="visible" viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          {SITE_TYPES.map(({ icon: Icon, label, desc, color, bg, border, glow }) => (
            <motion.div key={label} variants={card}
              whileHover={{ y: -5, scale: 1.03 }}
              className={`${bg} ${border} ${glow} rounded-2xl p-4 border cursor-default transition-all duration-300 group`}>
              <div className={`w-9 h-9 rounded-xl ${bg} border ${border} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                <Icon className={`w-4.5 h-4.5 ${color}`} aria-hidden="true" />
              </div>
              <p className="text-[13px] font-bold text-text-primary leading-tight">{label}</p>
              <p className="text-[11px] text-text-muted mt-0.5">{desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tech stack */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
            className="glass rounded-3xl p-7 border border-white/50">
            <p className="text-[12px] font-bold text-text-primary uppercase tracking-wider mb-5 flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-purple" aria-hidden="true" />
              Modern Tech Stack
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {TECH_STACK.map((t) => (
                <span key={t} className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-brand-purple/[0.07] border border-brand-purple/[0.12] text-brand-purple hover:bg-brand-purple/[0.12] transition-colors duration-200 cursor-default">{t}</span>
              ))}
            </div>
            <div className="pt-4 border-t border-white/40 grid grid-cols-3 gap-3 text-center">
              {[
                { v: "0.8s", l: "Avg Load Time" },
                { v: "99.9%", l: "Uptime SLA"  },
                { v: "200+",  l: "Sites Delivered"},
              ].map(({ v, l }) => (
                <div key={l}>
                  <p className="text-[18px] font-bold text-text-primary tabular-nums">{v}</p>
                  <p className="text-[10px] text-text-muted mt-0.5">{l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Lighthouse performance */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
            className="glass rounded-3xl p-7 border border-white/50">
            <div className="flex items-center justify-between mb-5">
              <p className="text-[12px] font-bold text-text-primary uppercase tracking-wider flex items-center gap-2">
                <Zap className="w-4 h-4 text-brand-green" aria-hidden="true" />
                Lighthouse Scores
              </p>
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-brand-green/[0.10] text-brand-green border border-brand-green/[0.15]">All 90+</span>
            </div>
            <div className="space-y-4">
              {PERF_SCORES.map(({ label, score, color, bar }, i) => (
                <div key={label}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[12px] text-text-secondary">{label}</span>
                    <span className={`text-[13px] font-bold tabular-nums ${color}`}>{score}</span>
                  </div>
                  <div className="h-2 bg-brand-navy/[0.06] rounded-full overflow-hidden">
                    <motion.div className={`h-full rounded-full bg-gradient-to-r ${bar}`}
                      initial={{ width: 0 }} whileInView={{ width: `${score}%` }}
                      transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease: "easeOut" }}
                      viewport={{ once: true }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-white/40 flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" aria-hidden="true" />
              <span className="text-[11px] text-text-muted">Every site audited before launch — no exceptions</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
