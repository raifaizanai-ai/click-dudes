"use client"

import { motion } from "framer-motion"
import { Code2, ArrowRight, Zap, Shield, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"

const TRUST = ["200+ Sites Delivered", "90+ Lighthouse Score", "WordPress & Shopify", "Post-Launch Support"]

const SCORES = [
  { label: "Performance",    score: 98, color: "bg-brand-green"  },
  { label: "Accessibility",  score: 96, color: "bg-brand-blue"   },
  { label: "Best Practices", score: 100, color: "bg-brand-purple" },
  { label: "SEO",            score: 100, color: "bg-brand-cyan"  },
]

const TECH_CHIPS = ["Next.js", "TypeScript", "React", "Node.js", "Shopify", "WordPress"]

export function WebDevCTASection() {
  return (
    <Section background="section" padding="xl" aria-label="Web development get started CTA">
      <Container>
        <div className="absolute top-0 right-0 w-[450px] h-[400px] rounded-full bg-brand-blue/[0.05] blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-blue/[0.08] border border-brand-blue/[0.12] mb-7">
              <Code2 className="w-3.5 h-3.5 text-brand-blue" aria-hidden="true" />
              <span className="text-label font-semibold text-brand-blue">Start Your Build</span>
            </div>
            <h2 className="text-h1 font-bold text-text-primary tracking-heading text-balance mb-5">
              Your Website, <span className="text-gradient-brand">Built to Perform</span>
            </h2>
            <p className="text-body-lg text-text-muted leading-relaxed mb-8 max-w-md text-pretty">
              ClickDudes builds fast, custom websites on WordPress, Shopify, and modern frameworks. From landing pages to full SaaS platforms — delivered on time and above expectation.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white font-semibold text-[14px] hover:opacity-90 transition-opacity group shadow-[0_4px_20px_rgba(139,92,246,0.25)]">
                Build My Website
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl glass border border-white/50 text-text-primary font-semibold text-[14px] hover:border-brand-purple/30 hover:shadow-sm transition-all">
                Get a Free Quote
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {TRUST.map((t) => (
                <span key={t} className="text-[10px] font-semibold px-3 py-1.5 rounded-full bg-brand-purple/[0.07] border border-brand-purple/[0.12] text-brand-purple flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3" aria-hidden="true" /> {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: Browser mockup card */}
          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
            className="glass rounded-3xl overflow-hidden border border-white/50 shadow-[0_24px_64px_rgba(7,17,47,0.08)]">
            {/* Browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-brand-blue/[0.05] to-transparent border-b border-white/30">
              <div className="flex gap-1.5">
                {["bg-red-400/60","bg-yellow-400/60","bg-green-400/60"].map((c,i) => (
                  <div key={i} className={`w-2.5 h-2.5 rounded-full ${c}`} />
                ))}
              </div>
              <div className="flex-1 flex items-center gap-2 bg-white/50 rounded-lg px-3 py-1 border border-white/40">
                <Shield className="w-3 h-3 text-brand-green shrink-0" aria-hidden="true" />
                <span className="text-[11px] text-text-muted truncate">yourwebsite.com</span>
              </div>
              <Zap className="w-3.5 h-3.5 text-brand-green" aria-hidden="true" />
            </div>

            {/* Lighthouse scores */}
            <div className="p-5 border-b border-white/25">
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-3">Lighthouse Report</p>
              <div className="grid grid-cols-4 gap-2">
                {SCORES.map(({ label, score, color }, i) => (
                  <motion.div key={label} initial={{ scale: 0 }} whileInView={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.07, type: "spring", bounce: 0.3 }}
                    viewport={{ once: true }}
                    className="flex flex-col items-center gap-1.5">
                    <div className="relative w-10 h-10">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth="3" />
                        <motion.circle cx="18" cy="18" r="14" fill="none"
                          strokeWidth="3" strokeLinecap="round"
                          className={`${color.replace("bg-","stroke-")}`}
                          strokeDasharray={`${score * 0.88} 88`}
                          initial={{ strokeDasharray: "0 88" }}
                          whileInView={{ strokeDasharray: `${score * 0.88} 88` }}
                          transition={{ duration: 1.0, delay: 0.3 + i * 0.1, ease: "easeOut" }}
                          viewport={{ once: true }} />
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold text-text-primary">{score}</span>
                    </div>
                    <span className="text-[8px] text-text-muted text-center leading-tight">{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech stack */}
            <div className="p-5">
              <p className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-1.5">
                {TECH_CHIPS.map((t) => (
                  <span key={t} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-brand-purple/[0.07] border border-brand-purple/[0.12] text-brand-purple">{t}</span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-[11px] text-brand-green font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                0.8s avg load time · 99.9% uptime SLA
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
