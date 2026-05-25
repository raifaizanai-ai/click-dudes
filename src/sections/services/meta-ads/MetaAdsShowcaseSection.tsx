"use client"

import { motion } from "framer-motion"
import { Target, TrendingUp, Play, Image, Layout, BarChart3 } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"

const AD_FORMATS = [
  {
    format: "Feed Ad",    size: "1:1 Square",    label: "High CTR",
    gradient: "from-brand-blue/35 to-brand-purple/25",
    icon: Image,   badge: "bg-brand-blue/20 text-brand-blue",
  },
  {
    format: "Story Ad",   size: "9:16 Vertical", label: "Max Reach",
    gradient: "from-brand-purple/35 to-brand-violet/25",
    icon: Play,    badge: "bg-brand-purple/20 text-brand-purple",
  },
  {
    format: "Carousel",   size: "Multi-Frame",   label: "Best ROAS",
    gradient: "from-brand-cyan/30 to-brand-blue/25",
    icon: Layout,  badge: "bg-brand-cyan/20 text-brand-purple",
  },
  {
    format: "Reel Ad",    size: "15–60s Video",  label: "Virality",
    gradient: "from-brand-violet/30 to-brand-purple/20",
    icon: Play,    badge: "bg-brand-violet/20 text-brand-violet",
  },
]

const ROAS_BARS = [
  { label: "eCommerce",       roas: "6.8x", pct: 92, color: "from-brand-purple to-brand-violet" },
  { label: "Lead Generation", roas: "4.2x", pct: 68, color: "from-brand-blue to-brand-cyan"     },
  { label: "SaaS / B2B",      roas: "5.1x", pct: 78, color: "from-brand-green to-brand-cyan"    },
  { label: "Service Business", roas: "3.9x",pct: 62, color: "from-brand-cyan to-brand-blue"     },
]

const KPI_METRICS = [
  { label: "Avg ROAS",        value: 5.8, suffix: "x",  color: "text-brand-purple", decimals: 1 },
  { label: "Lower CPL",       value: 44,  suffix: "%",  color: "text-brand-purple",   decimals: 0 },
  { label: "More Conversions",value: 82,  suffix: "%",  color: "text-brand-green",  decimals: 0 },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const item = {
  hidden:  { opacity: 0, scale: 0.9, y: 16 },
  visible: { opacity: 1, scale: 1,   y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const } },
}

export function MetaAdsShowcaseSection() {
  return (
    <Section background="navy" padding="xl" aria-label="Meta ads capabilities">
      <Container>
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-10 left-1/4 w-[350px] h-[350px] rounded-full bg-brand-blue/[0.08] blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] rounded-full bg-brand-purple/[0.07] blur-3xl" />
        </div>

        <div className="relative z-10 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-brand-purple/[0.10] mb-6">
            <Target className="w-3.5 h-3.5 text-brand-blue" aria-hidden="true" />
            <span className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">Advertising Intelligence</span>
          </div>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-4">
            Every Ad Format,{" "}
            <span className="text-gradient-brand">Maximum Impact</span>
          </h2>
          <p className="text-body text-text-secondary max-w-xl mx-auto text-pretty">
            We produce and optimise every Meta ad format — Feed, Story, Reel, Carousel — engineered for your audience and your revenue goals.
          </p>
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ad format gallery */}
          <div>
            <p className="text-[11px] font-bold text-text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
              <LiveDot color="blue" size="sm" /> Ad Creative Formats
            </p>
            <motion.div variants={container} initial="hidden"
              whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-2 gap-3">
              {AD_FORMATS.map(({ format, size, label, gradient, icon: Icon, badge }) => (
                <motion.div key={format} variants={item}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-dark rounded-2xl overflow-hidden border border-brand-purple/[0.09] cursor-default">
                  <div className={`h-20 bg-gradient-to-br ${gradient} flex items-center justify-center`}>
                    <Icon className="w-7 h-7 text-brand-purple/60" aria-hidden="true" />
                  </div>
                  <div className="p-3">
                    <p className="text-[12px] font-bold text-text-primary">{format}</p>
                    <p className="text-[10px] text-text-muted mt-0.5">{size}</p>
                    <span className={`mt-2 inline-block text-[8px] font-bold px-2 py-0.5 rounded-full ${badge}`}>{label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ROAS by vertical + KPIs */}
          <div className="space-y-4">
            <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
              className="glass-dark rounded-3xl p-5 border border-brand-purple/[0.09]">
              <p className="text-[11px] font-bold text-text-muted uppercase tracking-wider mb-4 flex items-center gap-2">
                <BarChart3 className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
                ROAS by Industry
              </p>
              <div className="space-y-3">
                {ROAS_BARS.map(({ label, roas, pct, color }, i) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="text-[11px] text-text-secondary w-28 shrink-0">{label}</span>
                    <div className="flex-1 h-2.5 bg-brand-purple/[0.06] rounded-full overflow-hidden">
                      <motion.div className={`h-full rounded-full bg-gradient-to-r ${color}`}
                        initial={{ width: 0 }} whileInView={{ width: `${pct}%` }}
                        transition={{ duration: 0.9, delay: 0.15 + i * 0.1, ease: "easeOut" }}
                        viewport={{ once: true }} />
                    </div>
                    <span className="text-[12px] font-bold text-brand-purple w-9 text-right shrink-0">{roas}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* KPI cards */}
            <div className="grid grid-cols-3 gap-3">
              {KPI_METRICS.map(({ label, value, suffix, color, decimals }, i) => (
                <motion.div key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  viewport={{ once: true }}
                  className="glass-dark rounded-2xl p-4 text-center border border-brand-purple/[0.09]">
                  <p className={`text-xl font-bold tabular-nums ${color}`}>
                    <CountUp end={value} decimals={decimals} suffix={suffix} />
                  </p>
                  <p className="text-[9px] text-text-muted mt-1 leading-tight">{label}</p>
                </motion.div>
              ))}
            </div>

            <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
              className="glass-dark rounded-2xl p-4 border border-brand-purple/[0.09] flex items-center gap-3">
              <TrendingUp className="w-5 h-5 text-brand-green shrink-0" aria-hidden="true" />
              <div>
                <p className="text-[12px] font-bold text-text-primary">Meta Pixel + CAPI Integration</p>
                <p className="text-[10px] text-text-muted">Full attribution tracking — every conversion measured accurately</p>
              </div>
              <LiveDot color="green" size="sm" />
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
