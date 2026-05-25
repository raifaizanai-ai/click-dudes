"use client"

import { motion } from "framer-motion"
import {
  BrainCircuit, Megaphone, LineChart, Search,
  Share2, Code2,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type WidgetType =
  | "ai-engine" | "meta-ads" | "seo" | "google-ads"
  | "social" | "webdev"

const G = (c: string) => ({
  background: "rgba(255,255,255,0.92)",
  backdropFilter: "blur(20px)",
  border: `1px solid ${c}1e`,
  boxShadow: `0 8px 40px rgba(7,17,47,0.09), 0 0 0 1px ${c}14`,
})

function Dot({ c, d }: { c: string; d: number }) {
  return (
    <motion.div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: c }}
      animate={{ opacity: [1, 0.2, 1], scale: [1, 1.6, 1] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", delay: d }} />
  )
}

function Bars({ v, c, iv, d }: { v: number[]; c: string; iv: boolean; d: number }) {
  return (
    <div className="flex items-end gap-[2px] h-4" aria-hidden="true">
      {v.map((h, i) => (
        <motion.div key={i} className="flex-1 rounded-t-[1px]"
          style={{ height: `${h * 0.16}px`, transformOrigin: "bottom", background: i >= v.length - 2 ? c : `${c}28` }}
          initial={{ scaleY: 0 }} animate={{ scaleY: iv ? 1 : 0 }}
          transition={{ duration: 0.4, delay: d + i * 0.05, ease: [0.16, 1, 0.3, 1] as const }} />
      ))}
    </div>
  )
}

function Hdr({ icon: I, title, c, d }: { icon: LucideIcon; title: string; c: string; d: number }) {
  return (
    <div className="flex items-center gap-1.5 mb-2.5">
      <div className="w-6 h-6 rounded-xl flex items-center justify-center" style={{ background: `${c}14` }}>
        <I className="w-3 h-3" style={{ color: c }} aria-hidden="true" />
      </div>
      <span className="text-[10px] font-bold text-text-primary flex-1 truncate">{title}</span>
      <Dot c={c} d={d} />
    </div>
  )
}

function Ring({ pct, c, iv, delay, sz = 48 }: { pct: number; c: string; iv: boolean; delay: number; sz?: number }) {
  const r = sz / 2 - 5
  const circ = 2 * Math.PI * r
  return (
    <svg width={sz} height={sz} viewBox={`0 0 ${sz} ${sz}`} aria-hidden="true">
      <circle cx={sz / 2} cy={sz / 2} r={r} fill="none" stroke={`${c}14`} strokeWidth="3.5" />
      <motion.circle cx={sz / 2} cy={sz / 2} r={r} fill="none" stroke={c} strokeWidth="3.5"
        strokeLinecap="round" strokeDasharray={circ}
        initial={{ strokeDashoffset: circ }}
        animate={{ strokeDashoffset: iv ? circ * (1 - pct / 100) : circ }}
        transition={{ duration: 1.2, delay, ease: [0.16, 1, 0.3, 1] as const }} />
    </svg>
  )
}

function ProgBar({ label, pct, c, iv, d }: { label: string; pct: number; c: string; iv: boolean; d: number }) {
  return (
    <div className="flex items-center gap-1.5 mb-1">
      <span className="text-[8px] text-text-muted w-[52px] truncate">{label}</span>
      <div className="flex-1 h-[4px] rounded-full" style={{ background: `${c}14` }}>
        <motion.div className="h-full rounded-full" style={{ background: c }}
          initial={{ width: 0 }} animate={{ width: iv ? `${pct}%` : "0%" }}
          transition={{ duration: 0.65, delay: d, ease: [0.16, 1, 0.3, 1] as const }} />
      </div>
    </div>
  )
}

function AIEngine({ iv }: { iv: boolean }) {
  const C = "#8B5CF6"
  return (
    <div className="w-[152px] rounded-2xl p-3.5 select-none cursor-default" style={G(C)}>
      <Hdr icon={BrainCircuit} title="AI Engine" c={C} d={0} />
      <div className="relative flex justify-center mb-2">
        <Ring pct={99.2} c={C} iv={iv} delay={0.5} sz={52} />
        <div className="absolute inset-0 flex flex-col items-center justify-center"><p className="text-[13px] font-black text-text-primary leading-none">99.2%</p><p className="text-[8px] text-text-muted">Accuracy</p></div>
      </div>
      <p className="text-[18px] font-black text-text-primary leading-none">+41%</p>
      <p className="text-[9px] text-text-muted mb-1.5">Revenue Yield</p>
      <Bars v={[28, 44, 60, 75, 88, 100]} c={C} iv={iv} d={0.3} />
    </div>
  )
}

function MetaAds({ iv }: { iv: boolean }) {
  const C = "#60A5FA"
  const metrics = [["4.6×", "ROAS"], ["$12.4K", "Spend"], ["3.2%", "CTR"]] as const
  const camps   = [["Brand Awareness", 82], ["Retargeting", 94], ["Prospecting", 67]] as const
  return (
    <div className="w-[210px] rounded-2xl p-4 select-none cursor-default" style={G(C)}>
      <Hdr icon={Megaphone} title="Meta Ads Manager" c={C} d={0.4} />
      <div className="flex gap-1 mb-3">
        {metrics.map(([val, label]) => (
          <div key={label} className="flex-1 flex flex-col items-center rounded-lg py-1.5" style={{ background: `${C}0c` }}>
            <span className="text-[10px] font-black text-text-primary leading-none">{val}</span>
            <span className="text-[8px] text-text-muted mt-0.5">{label}</span>
          </div>
        ))}
      </div>
      <p className="text-[8px] text-text-muted font-medium tracking-wide uppercase mb-1.5">Campaign Performance</p>
      {camps.map(([label, pct], i) => (
        <ProgBar key={label} label={label} pct={pct} c={C} iv={iv} d={0.5 + i * 0.1} />
      ))}
      <Bars v={[32, 44, 40, 58, 66, 82]} c={C} iv={iv} d={0.5} />
    </div>
  )
}

function SEO({ iv }: { iv: boolean }) {
  const C = "#10B981"
  const kws = [["ad optimization", 96], ["header bidding", 88], ["google adx", 74]] as const
  return (
    <div className="w-[172px] rounded-2xl p-3.5 select-none cursor-default" style={G(C)}>
      <Hdr icon={LineChart} title="SEO Rankings" c={C} d={0.8} />
      <div className="flex items-end gap-2 mb-3">
        <div><p className="text-[22px] font-black text-text-primary leading-none">#3</p><p className="text-[9px] text-text-muted">Avg Position</p></div>
        <span className="text-[10px] font-black px-1.5 py-0.5 rounded-md text-white mb-0.5 leading-none" style={{ background: C }}>↑24 pos</span>
      </div>
      {kws.map(([kw, pct]) => (
        <ProgBar key={kw} label={kw} pct={pct} c={C} iv={iv} d={0.5} />
      ))}
      <div className="flex gap-3 mt-2">
        <div><p className="text-[11px] font-black text-text-primary">+180%</p><p className="text-[8px] text-text-muted">Organic Traffic</p></div>
        <div><p className="text-[11px] font-black text-text-primary">48</p><p className="text-[8px] text-text-muted">Top 3 Keywords</p></div>
      </div>
    </div>
  )
}

function GoogleAds({ iv }: { iv: boolean }) {
  const C = "#A855F7"
  const metrics = [["$1.84", "CPC"], ["1,240", "Conv."], ["48K", "Impr."]] as const
  return (
    <div className="w-[182px] rounded-2xl p-3.5 select-none cursor-default" style={G(C)}>
      <Hdr icon={Search} title="Google Ads" c={C} d={1.2} />
      <div className="flex items-start gap-2 mb-3">
        <div><p className="text-[22px] font-black text-text-primary leading-none">7.2%</p><p className="text-[9px] text-text-muted">Click-Through Rate</p></div>
        <div className="relative ml-auto">
          <Ring pct={92} c={C} iv={iv} delay={0.6} sz={42} />
          <div className="absolute inset-0 flex items-center justify-center"><span className="text-[9px] font-black text-text-primary">9.2</span></div>
        </div>
      </div>
      <div className="flex gap-1 mb-2.5">
        {metrics.map(([val, label]) => (
          <div key={label} className="flex-1 flex flex-col items-center rounded-lg py-1.5" style={{ background: `${C}0c` }}>
            <span className="text-[9px] font-black text-text-primary leading-none">{val}</span>
            <span className="text-[8px] text-text-muted mt-0.5">{label}</span>
          </div>
        ))}
      </div>
      <Bars v={[35, 46, 57, 65, 78, 92]} c={C} iv={iv} d={0.5} />
    </div>
  )
}

function Social({ iv }: { iv: boolean }) {
  const C = "#A855F7"
  const platforms = [["IG", "#E1306C", 88], ["TT", "#00f2ea", 95], ["X", "#1DA1F2", 62], ["Li", "#0077B5", 74]] as const
  return (
    <div className="w-[158px] rounded-2xl p-3.5 select-none cursor-default" style={G(C)}>
      <Hdr icon={Share2} title="Social Growth" c={C} d={1.4} />
      <p className="text-[20px] font-black text-text-primary leading-none">+200–400%</p>
      <p className="text-[9px] text-text-muted mb-2.5">Follower Growth</p>
      {platforms.map(([label, color, pct]) => (
        <div key={label} className="flex items-center gap-1.5 mb-1">
          <span className="text-[9px] font-bold w-4 text-center" style={{ color }}>{label}</span>
          <div className="flex-1 h-[4px] rounded-full" style={{ background: `${color}18` }}>
            <motion.div className="h-full rounded-full" style={{ background: color }}
              initial={{ width: 0 }} animate={{ width: iv ? `${pct}%` : "0%" }}
              transition={{ duration: 0.65, delay: 0.55, ease: [0.16, 1, 0.3, 1] as const }} />
          </div>
        </div>
      ))}
      <div className="flex gap-3 mt-2">
        <div><p className="text-[11px] font-black text-text-primary">2.8M</p><p className="text-[8px] text-text-muted">Monthly Reach</p></div>
        <div><p className="text-[11px] font-black text-text-primary">6.4%</p><p className="text-[8px] text-text-muted">Eng. Rate</p></div>
      </div>
    </div>
  )
}


function WebDev({ iv }: { iv: boolean }) {
  const C = "#A855F7"
  const vitals = [["LCP", "1.2s", C], ["CLS", "0.02", "#10B981"], ["FID", "18ms", "#60A5FA"]] as const
  return (
    <div className="w-[160px] rounded-2xl p-3.5 select-none cursor-default" style={G(C)}>
      <Hdr icon={Code2} title="Web Performance" c={C} d={2.6} />
      <div className="flex items-center gap-3 mb-3">
        <div className="relative">
          <Ring pct={90} c={C} iv={iv} delay={0.6} sz={48} />
          <div className="absolute inset-0 flex items-center justify-center"><span className="text-[12px] font-black text-text-primary">90+</span></div>
        </div>
        <div>
          <p className="text-[11px] font-black text-text-primary leading-tight">Lighthouse</p>
          <p className="text-[8px] text-text-muted">Score / 100</p>
          <span className="text-[8px] font-black px-1.5 py-0.5 rounded text-white mt-1 inline-block" style={{ background: C }}>#1 Fast</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {vitals.map(([k, v, col]) => (
          <div key={k} className="rounded-lg p-1.5 text-center" style={{ background: `${col}0c` }}>
            <p className="text-[9px] font-black text-text-primary leading-none">{v}</p>
            <p className="text-[7px] text-text-muted">{k}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

interface AgencyCommandWidgetProps {
  type: WidgetType
  inView: boolean
}

export function AgencyCommandWidget({ type, inView }: AgencyCommandWidgetProps) {
  switch (type) {
    case "ai-engine":  return <AIEngine iv={inView} />
    case "meta-ads":   return <MetaAds iv={inView} />
    case "seo":        return <SEO iv={inView} />
    case "google-ads": return <GoogleAds iv={inView} />
    case "social":     return <Social iv={inView} />
    case "webdev":     return <WebDev iv={inView} />
  }
}
