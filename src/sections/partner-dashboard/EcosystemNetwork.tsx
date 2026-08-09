"use client"

import { useRef, useState, useEffect, useMemo } from "react"
import { motion, useInView } from "framer-motion"
import { Globe, Smartphone, Tv, Building2, GitBranch, User, Zap, Users, BarChart3, Wallet, LifeBuoy } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { RobotImage } from "@/components/shared/RobotImage"
import { EcosystemNode } from "@/components/marketing/EcosystemNode"
import { useReducedMotion } from "@/hooks/use-media-query"

type Accent = "purple" | "cyan" | "blue" | "violet" | "green"

interface RingNode {
  icon: LucideIcon
  title: string
  description: string
  accent: Accent
  angle: number
}

const INNER: RingNode[] = [
  { icon: Globe, title: "Web Publisher", description: "Sites of any scale", accent: "blue", angle: -90 },
  { icon: Smartphone, title: "App Publisher", description: "iOS & Android", accent: "cyan", angle: -30 },
  { icon: Tv, title: "CTV Publisher", description: "Streaming inventory", accent: "violet", angle: 30 },
  { icon: Building2, title: "Agency", description: "Publisher portfolios", accent: "purple", angle: 90 },
  { icon: GitBranch, title: "Referral Partner", description: "Introduces opportunities", accent: "green", angle: 150 },
  { icon: User, title: "Individual", description: "Qualified referrers", accent: "blue", angle: 210 },
]

const OUTER: RingNode[] = [
  { icon: Zap, title: "Monetization", description: "AdX, header bidding & more", accent: "cyan", angle: -90 },
  { icon: Users, title: "Partnership Management", description: "Every partnership managed", accent: "purple", angle: -18 },
  { icon: BarChart3, title: "Analytics", description: "Performance visibility", accent: "blue", angle: 54 },
  { icon: Wallet, title: "Payments", description: "Commission & payouts", accent: "violet", angle: 126 },
  { icon: LifeBuoy, title: "Support", description: "Direct partnership help", accent: "green", angle: 198 },
]

// World coordinate space is WORLD_SIZE×WORLD_SIZE (square container, any rendered width).
const WORLD_SIZE = 900
const INNER_R = 220
const OUTER_R = 385
const INNER_DUR = 52
const OUTER_DUR = 78
const STEPS = 36
const NODE_SCALE = 1.25

function pos(angle: number, r: number) {
  const rad = (angle * Math.PI) / 180
  const pct = (r / WORLD_SIZE) * 100
  return { left: 50 + pct * Math.cos(rad), top: 50 + pct * Math.sin(rad) }
}

function orbit(angle0: number, r: number, dir: 1 | -1, scale: number) {
  const a0 = (angle0 * Math.PI) / 180
  const x: number[] = []
  const y: number[] = []
  for (let k = 0; k <= STEPS; k++) {
    const a = a0 + dir * (k / STEPS) * 2 * Math.PI
    x.push((Math.cos(a) - Math.cos(a0)) * r * scale)
    y.push((Math.sin(a) - Math.sin(a0)) * r * scale)
  }
  return { x, y }
}

const TIMES = Array.from({ length: STEPS + 1 }, (_, k) => k / STEPS)

export function EcosystemNetwork() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })
  const reducedMotion = useReducedMotion()
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new ResizeObserver(([entry]) => setScale(entry.contentRect.width / WORLD_SIZE))
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const innerOrbits = useMemo(() => INNER.map((n) => orbit(n.angle, INNER_R, 1, scale)), [scale])
  const outerOrbits = useMemo(() => OUTER.map((n) => orbit(n.angle, OUTER_R, -1, scale)), [scale])
  const animate = inView && !reducedMotion

  return (
    <Section background="base" padding="lg" aria-label="Partner ecosystem visualization">
      <Container size="xl" className="flex flex-col gap-6">
        <SectionHeader
          badge="Partner Ecosystem"
          heading="One Network. More Publisher Opportunities."
          subtext="Every partner type feeds one connected infrastructure — and every capability flows back out through it."
          align="center"
        />

        <div ref={ref} className="relative w-full max-w-[1250px] mx-auto" style={{ aspectRatio: "1/1" }}>
          <div aria-hidden="true" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] h-[680px] rounded-full bg-brand-purple/6 blur-[120px]" />

          <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" aria-hidden="true">
            {[...INNER, ...OUTER].map((n, i) => {
              const r = i < INNER.length ? INNER_R : OUTER_R
              const p = pos(n.angle, r)
              return (
                <line
                  key={n.title}
                  x1="50" y1="50" x2={p.left} y2={p.top}
                  stroke="rgba(139,92,246,0.14)"
                  strokeWidth="0.22"
                  strokeDasharray="1 2"
                />
              )
            })}
          </svg>

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
            <RobotImage variant="main" size="md" glowColor="purple" />
            <p className="text-center text-sm font-bold text-gradient-brand mt-1">Click-Dudes</p>
          </div>

          {INNER.map((n, i) => {
            const p = pos(n.angle, INNER_R)
            return (
              <motion.div
                key={n.title}
                className="absolute z-30"
                style={{ left: `${p.left}%`, top: `${p.top}%`, transform: "translate(-50%, -50%)" }}
                animate={animate ? { x: innerOrbits[i].x, y: innerOrbits[i].y } : { x: 0, y: 0 }}
                transition={animate ? { duration: INNER_DUR, repeat: Infinity, ease: "linear", times: TIMES } : { duration: 0 }}
              >
                <div style={{ transform: `scale(${NODE_SCALE})` }}>
                  <EcosystemNode icon={n.icon} title={n.title} description={n.description} accent={n.accent} floatDelay={i} />
                </div>
              </motion.div>
            )
          })}

          {OUTER.map((n, i) => {
            const p = pos(n.angle, OUTER_R)
            return (
              <motion.div
                key={n.title}
                className="absolute z-20"
                style={{ left: `${p.left}%`, top: `${p.top}%`, transform: "translate(-50%, -50%)" }}
                animate={animate ? { x: outerOrbits[i].x, y: outerOrbits[i].y } : { x: 0, y: 0 }}
                transition={animate ? { duration: OUTER_DUR, repeat: Infinity, ease: "linear", times: TIMES } : { duration: 0 }}
              >
                <div style={{ transform: `scale(${NODE_SCALE})` }}>
                  <EcosystemNode icon={n.icon} title={n.title} description={n.description} accent={n.accent} floatDelay={i + 6} />
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
