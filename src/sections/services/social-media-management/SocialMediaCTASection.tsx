"use client"

import { motion } from "framer-motion"
import { Share2, ArrowRight, TrendingUp, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"

const TRUST = ["10+ Posts/Week", "5 Platforms", "AI-Timed Posts", "Monthly Reports"]

const PLATFORM_STATS = [
  { name: "Instagram",  metric: "284K",  label: "Monthly reach",    color: "text-brand-purple", dot: "purple" as const },
  { name: "LinkedIn",   metric: "8.4%",  label: "Eng. rate",        color: "text-brand-blue",   dot: "blue"   as const },
  { name: "TikTok",     metric: "+67%",  label: "Follower growth",  color: "text-brand-purple",   dot: "cyan"   as const },
]

const SPARK = [38, 52, 44, 66, 58, 78, 70, 90, 84, 100]

export function SocialMediaCTASection() {
  return (
    <Section background="section" padding="xl" aria-label="Social media management get started CTA">
      <Container>
        <div className="absolute top-0 left-0 w-[400px] h-[350px] rounded-full bg-brand-cyan/[0.05] blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-cyan/[0.08] border border-brand-cyan/[0.12] mb-7">
              <Share2 className="w-3.5 h-3.5 text-brand-cyan" aria-hidden="true" />
              <span className="text-label font-semibold text-brand-purple">Grow Your Audience</span>
            </div>
            <h2 className="text-h1 font-bold text-text-primary tracking-heading text-balance mb-5">
              Your Social, <span className="text-gradient-brand">Handled End to End</span>
            </h2>
            <p className="text-body-lg text-text-muted leading-relaxed mb-8 max-w-md text-pretty">
              ClickDudes manages your social media presence — strategy, content, scheduling, engagement, and reporting — so you grow your audience while you focus on running your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-cyan text-white font-semibold text-[14px] hover:opacity-90 transition-opacity group shadow-[0_4px_20px_rgba(103,232,249,0.20)]">
                Start Growing My Audience
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl glass border border-white/50 text-text-primary font-semibold text-[14px] hover:border-brand-cyan/25 transition-all">
                Talk to Our Team
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {TRUST.map((t) => (
                <span key={t} className="text-[10px] font-semibold px-3 py-1.5 rounded-full bg-brand-cyan/[0.07] border border-brand-cyan/[0.12] text-brand-purple flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3" aria-hidden="true" /> {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: live platform stats */}
          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
            className="space-y-3">
            {/* Reach sparkline card */}
            <div className="glass rounded-3xl p-5 border border-white/50">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-[10px] text-text-muted font-semibold uppercase tracking-wider">Combined Reach</p>
                  <p className="text-2xl font-bold text-text-primary tabular-nums">
                    <CountUp end={284} duration={2.0} suffix="K" />
                  </p>
                </div>
                <div className="flex items-center gap-1.5">
                  <TrendingUp className="w-3.5 h-3.5 text-brand-green" aria-hidden="true" />
                  <span className="text-[12px] font-bold text-brand-green">+67% growth</span>
                </div>
              </div>
              <div className="flex items-end gap-[4px] h-10">
                {SPARK.map((v, i) => (
                  <motion.div key={i}
                    className="flex-1 rounded-sm bg-gradient-to-t from-brand-cyan/70 to-brand-purple/40"
                    style={{ height: `${(v / 100) * 40}px`, opacity: 0.4 + (i / SPARK.length) * 0.6 }}
                    initial={{ scaleY: 0, transformOrigin: "bottom" }}
                    whileInView={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.04, ease: "easeOut" }}
                    viewport={{ once: true }} />
                ))}
              </div>
            </div>

            {/* Platform cards */}
            <div className="grid grid-cols-3 gap-2">
              {PLATFORM_STATS.map(({ name, metric, label, color, dot }, i) => (
                <motion.div key={name}
                  initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }} viewport={{ once: true }}
                  className="glass rounded-2xl p-3 border border-white/50 text-center">
                  <div className="flex justify-center mb-1.5">
                    <LiveDot color={dot} size="sm" />
                  </div>
                  <p className={`text-[14px] font-bold ${color} tabular-nums`}>{metric}</p>
                  <p className="text-[9px] text-text-muted mt-0.5 leading-tight">{name}</p>
                  <p className="text-[9px] text-text-muted">{label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
