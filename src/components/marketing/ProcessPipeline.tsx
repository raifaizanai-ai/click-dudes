"use client"

import { useReducedMotion } from "@/hooks/use-media-query"

const PIPE = "M 100,80 C 185,80 185,220 275,220 C 365,220 365,80 450,80 C 535,80 535,220 625,220 C 715,220 715,80 800,80"

const NODES: [number, number][] = [
  [100, 80],
  [275, 220],
  [450, 80],
  [625, 220],
  [800, 80],
]

interface Props { className?: string }

export function ProcessPipeline({ className }: Props) {
  const reduced = useReducedMotion()

  return (
    <svg
      viewBox="0 0 900 300"
      fill="none"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="pp-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="rgba(139,92,246,0.50)" />
          <stop offset="50%"  stopColor="rgba(103,232,249,0.60)" />
          <stop offset="100%" stopColor="rgba(139,92,246,0.50)" />
        </linearGradient>
        <filter id="pp-glow" x="-10%" y="-120%" width="120%" height="340%">
          <feGaussianBlur stdDeviation="4" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="pp-light" x="-400%" y="-400%" width="900%" height="900%">
          <feGaussianBlur stdDeviation="7" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="pp-node" x="-120%" y="-120%" width="340%" height="340%">
          <feGaussianBlur stdDeviation="6" result="b" />
          <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <radialGradient id="pp-node-fill" cx="38%" cy="25%" r="65%">
          <stop offset="0%"   stopColor="rgba(255,255,255,0.96)" />
          <stop offset="100%" stopColor="rgba(238,242,255,0.82)" />
        </radialGradient>
      </defs>

      {/* Atmospheric outer glow */}
      <path d={PIPE} stroke="rgba(139,92,246,0.06)" strokeWidth="28" strokeLinecap="round" />
      {/* Main tube */}
      <path d={PIPE} stroke="url(#pp-grad)" strokeWidth="3" strokeLinecap="round" opacity={0.50} />
      {/* Inner glow */}
      <path d={PIPE} stroke="rgba(103,232,249,0.40)" strokeWidth="1.5" strokeLinecap="round" filter="url(#pp-glow)" />
      {/* Specular highlight dashes */}
      <path d={PIPE} stroke="rgba(255,255,255,0.55)" strokeWidth="1" strokeLinecap="round" strokeDasharray="6 12" />

      {/* Traveling light */}
      {!reduced && (
        <>
          <circle r="15" fill="rgba(139,92,246,0.18)" filter="url(#pp-light)">
            <animateMotion path={PIPE} dur="3.6s" repeatCount="indefinite" />
          </circle>
          <circle r="7" fill="rgba(103,232,249,0.62)" filter="url(#pp-light)">
            <animateMotion path={PIPE} dur="3.6s" repeatCount="indefinite" />
          </circle>
          <circle r="3.5" fill="rgba(255,255,255,0.95)">
            <animateMotion path={PIPE} dur="3.6s" repeatCount="indefinite" />
          </circle>
        </>
      )}

      {/* Nodes */}
      {NODES.map(([cx, cy], i) => (
        <g key={i}>
          <circle cx={cx} cy={cy} r="24" fill="rgba(139,92,246,0.10)" filter="url(#pp-node)" />
          <circle cx={cx} cy={cy} r="15" fill="url(#pp-node-fill)" stroke="rgba(139,92,246,0.26)" strokeWidth="1.5" />
          <circle cx={cx} cy={cy} r="4.5" fill="rgba(139,92,246,0.72)" />
        </g>
      ))}
    </svg>
  )
}
