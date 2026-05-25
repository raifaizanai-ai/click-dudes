"use client"

import { motion } from "framer-motion"
import { Code2, Zap, Globe, Shield } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientText } from "@/components/shared/GradientText"

interface WebDevStory {
  quote: string; name: string; role: string; company: string
  platform: string
  scores: { label: string; value: number; color: string }[]
  loadTime: string; uptime: string
  vertical: string; initials: string
  accentBg: string; accentText: string
}

const STORIES: WebDevStory[] = [
  { quote: "Our old WordPress site scored 28 on Lighthouse. Click Dudes migrated us to a custom Next.js build, optimized every asset, and we now score 97. Our bounce rate dropped 34% in the first month.", name: "Cleo M.", role: "Founder", company: "ArcDesign Studio", platform: "Next.js Custom", scores: [{ label: "Performance", value: 97, color: "#10B981" }, { label: "Accessibility", value: 96, color: "#10B981" }, { label: "Best Practice", value: 100, color: "#10B981" }, { label: "SEO", value: 98, color: "#10B981" }], loadTime: "0.6s", uptime: "99.97%", vertical: "Design Agency", initials: "CM", accentBg: "bg-brand-green/10", accentText: "text-brand-green" },
  { quote: "We needed a Shopify rebuild with custom sections, speed optimization, and mobile checkout fixes. Click Dudes delivered in 3 weeks — conversion rate went from 1.8% to 3.4%, a near doubling.", name: "Ravi S.", role: "eCommerce Director", company: "NovaMed Supplies", platform: "Shopify Custom", scores: [{ label: "Performance", value: 94, color: "#10B981" }, { label: "Accessibility", value: 91, color: "#10B981" }, { label: "Best Practice", value: 100, color: "#10B981" }, { label: "SEO", value: 96, color: "#10B981" }], loadTime: "0.8s", uptime: "99.99%", vertical: "B2B eCommerce", initials: "RS", accentBg: "bg-brand-purple/10", accentText: "text-brand-purple" },
  { quote: "Building a SaaS dashboard from scratch is daunting. Click Dudes architected a clean Next.js + Supabase stack, delivered in 8 weeks with full mobile responsiveness. Onboarding drop-off improved 60%.", name: "Elena F.", role: "CTO", company: "DataFlow Labs", platform: "Full-Stack SaaS", scores: [{ label: "Performance", value: 96, color: "#10B981" }, { label: "Accessibility", value: 94, color: "#10B981" }, { label: "Best Practice", value: 100, color: "#10B981" }, { label: "SEO", value: 92, color: "#10B981" }], loadTime: "0.7s", uptime: "99.95%", vertical: "B2B SaaS", initials: "EF", accentBg: "bg-brand-blue/10", accentText: "text-brand-blue" },
  { quote: "Our WordPress site was hacked twice in a year. Click Dudes rebuilt it with security hardening, CDN, WAF, and auto backups. Zero incidents in 18 months. Load time dropped from 6.2s to 0.9s.", name: "Tom K.", role: "Managing Director", company: "PrimeConsult", platform: "WordPress Enterprise", scores: [{ label: "Performance", value: 93, color: "#10B981" }, { label: "Accessibility", value: 98, color: "#10B981" }, { label: "Best Practice", value: 100, color: "#10B981" }, { label: "SEO", value: 97, color: "#10B981" }], loadTime: "0.9s", uptime: "99.99%", vertical: "Professional Services", initials: "TK", accentBg: "bg-brand-violet/10", accentText: "text-brand-violet" },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 24, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

function LighthouseGauge({ value, label, delay }: { value: number; label: string; delay: number }) {
  const r = 16
  const circ = 2 * Math.PI * r
  const arc = (value / 100) * circ
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="relative w-10 h-10">
        <svg viewBox="0 0 40 40" className="w-full h-full -rotate-90">
          <circle cx="20" cy="20" r={r} fill="none" stroke="rgba(16,185,129,0.12)" strokeWidth="3" />
          <motion.circle cx="20" cy="20" r={r} fill="none" stroke="#10B981" strokeWidth="3"
            strokeLinecap="round" strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            whileInView={{ strokeDashoffset: circ - arc }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }} />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[11px] font-black text-brand-green">{value}</span>
      </div>
      <span className="text-[8px] text-text-muted text-center leading-tight">{label}</span>
    </div>
  )
}

export function WebDevTestimonials() {
  return (
    <Section background="base" padding="xl" aria-label="Web development success stories">
      <div aria-hidden="true" className="absolute top-0 right-1/4 w-[500px] h-[350px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)" }} />

      <Container size="xl" className="relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple mb-5">
            <Code2 className="w-3.5 h-3.5" aria-hidden="true" />
            Build Results
          </span>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-3">
            Lighthouse 90+. Every <GradientText gradient="brand">Single Build.</GradientText>
          </h2>
          <p className="text-body text-text-secondary max-w-lg mx-auto text-pretty">
            Clients who replaced slow, insecure, or underperforming websites with fast, premium Click Dudes builds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {STORIES.map((s, i) => (
            <motion.div key={s.name} custom={i} variants={cardVariants} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6, boxShadow: "0 20px 60px rgba(139,92,246,0.10)" }}
              className="rounded-3xl overflow-hidden flex flex-col cursor-default"
              style={{ background: "rgba(255,255,255,0.95)", border: "1px solid rgba(139,92,246,0.11)", boxShadow: "0 8px 40px rgba(7,17,47,0.06)" }}>

              {/* Lighthouse header */}
              <div className="px-5 pt-4 pb-4" style={{ background: "linear-gradient(135deg, rgba(16,185,129,0.06) 0%, rgba(139,92,246,0.04) 100%)", borderBottom: "1px solid rgba(16,185,129,0.08)" }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-brand-purple/10 flex items-center justify-center">
                      <Zap className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-brand-purple">Lighthouse Audit</p>
                      <p className="text-[9px] text-text-muted">{s.platform}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-right">
                    <div>
                      <p className="text-[8px] text-text-muted">Load Time</p>
                      <p className="text-[13px] font-black text-brand-green">{s.loadTime}</p>
                    </div>
                    <div>
                      <p className="text-[8px] text-text-muted">Uptime</p>
                      <p className="text-[13px] font-black text-brand-blue">{s.uptime}</p>
                    </div>
                  </div>
                </div>

                {/* Score gauges */}
                <div className="flex items-start justify-between px-2">
                  {s.scores.map((sc, si) => (
                    <LighthouseGauge key={sc.label} value={sc.value} label={sc.label} delay={0.3 + si * 0.1 + i * 0.06} />
                  ))}
                </div>
              </div>

              <div className="px-5 py-4 flex-1">
                <blockquote className="text-[13px] text-text-secondary leading-relaxed">&ldquo;{s.quote}&rdquo;</blockquote>
              </div>

              <div className="px-5 pb-4 pt-3 border-t border-brand-purple/[0.07] flex items-center gap-2.5">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${s.accentBg} ${s.accentText}`}>{s.initials}</div>
                <div>
                  <p className="text-[12px] font-bold text-text-primary leading-none">{s.name}</p>
                  <p className="text-[10px] text-text-muted mt-0.5">{s.role} · {s.company}</p>
                </div>
                <div className="ml-auto flex items-center gap-1.5">
                  <Globe className="w-3 h-3 text-brand-blue" aria-hidden="true" />
                  <span className="text-[10px] text-text-muted">{s.vertical}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
