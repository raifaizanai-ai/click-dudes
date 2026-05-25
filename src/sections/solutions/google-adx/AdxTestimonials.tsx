"use client"

import { motion } from "framer-motion"
import { BarChart3, TrendingUp, Shield } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientText } from "@/components/shared/GradientText"
import { LiveDot } from "@/components/shared/LiveDot"
import { CountUp } from "@/components/motion/CountUp"

const STORIES = [
  { quote: "We switched from AdSense to Click Dudes AdX access in Q3. Within the first 30 days our RPM went from $4.20 to $7.80. The AI floor optimizer found yield opportunities we never knew existed.", name: "Sarah M.", role: "Head of Digital Revenue", company: "TechPulse Media", rpmBefore: 4.20, rpmAfter: 7.80, uplift: 86, vertical: "Finance & Tech News", initials: "SM", accent: "text-brand-purple", accentBg: "bg-brand-purple/10", tag: "AdX + AI Floors" },
  { quote: "The onboarding was genuinely painless. Their team handled the entire GAM setup, and I had our first preferred deal locked in within two weeks. Advertisers are paying CPMs I didn't think were achievable.", name: "James R.", role: "CEO", company: "Outdoor Enthusiast Network", rpmBefore: 2.80, rpmAfter: 3.98, uplift: 42, vertical: "Lifestyle & Sports", initials: "JR", accent: "text-brand-blue", accentBg: "bg-brand-blue/10", tag: "Preferred Deals" },
  { quote: "I was skeptical about the 30% uplift claim. Our actual result in month two was 37% above our previous AdSense baseline. Viewability and user experience both improved at the same time.", name: "Lisa K.", role: "Publisher Manager", company: "RecipeFinder Pro", rpmBefore: 3.10, rpmAfter: 4.25, uplift: 37, vertical: "Food & Lifestyle", initials: "LK", accent: "text-brand-green", accentBg: "bg-brand-green/10", tag: "Quality + Yield" },
]

const cardVariants = {
  hidden:  { opacity: 0, y: 24, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function AdxTestimonials() {
  return (
    <Section background="base" padding="xl" aria-label="AdX publisher success stories">
      <div aria-hidden="true" className="absolute -top-24 left-1/4 w-[500px] h-[400px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.09) 0%, transparent 70%)" }} />

      <Container size="xl" className="relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple mb-5">
            <BarChart3 className="w-3.5 h-3.5" aria-hidden="true" />
            Publisher Stories
          </span>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-3">
            Real Results from <GradientText gradient="brand">Real Publishers</GradientText>
          </h2>
          <p className="text-body text-text-secondary max-w-lg mx-auto text-pretty">
            Our average publisher sees 30%+ uplift within the first 30 days — consistently across verticals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {STORIES.map((s, i) => (
            <motion.div key={s.name} custom={i} variants={cardVariants} initial="hidden"
              whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6 }}
              className="rounded-3xl overflow-hidden flex flex-col cursor-default relative"
              style={{ background: "rgba(255,255,255,0.94)", border: "1px solid rgba(139,92,246,0.12)", boxShadow: "0 8px 40px rgba(7,17,47,0.06)" }}>

              {/* Top gradient edge */}
              <div aria-hidden="true" className="absolute top-0 inset-x-0 h-[2px] pointer-events-none"
                style={{ background: "linear-gradient(to right, transparent 0%, rgba(139,92,246,0.40) 40%, rgba(96,165,250,0.40) 70%, transparent 100%)" }} />

              {/* GAM-style dashboard header */}
              <div className="px-5 pt-5 pb-4" style={{ borderBottom: "1px solid rgba(139,92,246,0.07)" }}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md bg-brand-purple/10 flex items-center justify-center">
                      <BarChart3 className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
                    </div>
                    <span className="text-[10px] font-bold text-brand-purple">Google AdX</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Shield className="w-3 h-3 text-brand-green" aria-hidden="true" />
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${s.accentBg} ${s.accent}`}>{s.tag}</span>
                  </div>
                </div>

                {/* RPM comparison */}
                <div className="grid grid-cols-2 gap-2">
                  <div className="rounded-xl p-2.5 bg-text-muted/[0.05] border border-text-muted/10">
                    <p className="text-[8px] text-text-muted mb-0.5 font-medium">Before</p>
                    <p className="text-[18px] font-black text-text-muted/50 tabular-nums">${s.rpmBefore.toFixed(2)}</p>
                    <p className="text-[8px] text-text-muted">RPM</p>
                  </div>
                  <div className={`rounded-xl p-2.5 ${s.accentBg}`} style={{ border: `1px solid rgba(139,92,246,0.12)` }}>
                    <p className="text-[8px] text-text-muted mb-0.5 font-medium">After AdX</p>
                    <p className={`text-[18px] font-black tabular-nums ${s.accent}`}>
                      $<CountUp end={s.rpmAfter} decimals={2} duration={1.8} />
                    </p>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-2.5 h-2.5 text-brand-green" aria-hidden="true" />
                      <p className="text-[8px] text-brand-green font-bold">+{s.uplift}%</p>
                    </div>
                  </div>
                </div>
                <div className="mt-2.5 flex items-center gap-1">
                  <LiveDot color="green" size="sm" />
                  <span className="text-[9px] text-text-muted">{s.vertical}</span>
                </div>
              </div>

              {/* Quote */}
              <div className="px-5 py-4 flex-1">
                <blockquote className="text-[13px] text-text-secondary leading-relaxed">&ldquo;{s.quote}&rdquo;</blockquote>
              </div>

              {/* Author */}
              <div className="px-5 pb-5 pt-3 border-t border-brand-purple/[0.07] flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[11px] font-bold flex-shrink-0 ${s.accentBg} ${s.accent}`}>{s.initials}</div>
                <div>
                  <p className="text-[13px] font-semibold text-text-primary leading-tight">{s.name}</p>
                  <p className="text-[11px] text-text-muted mt-0.5">{s.role} · {s.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}
