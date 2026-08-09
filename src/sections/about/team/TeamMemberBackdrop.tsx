import type { TeamBackdropTheme } from "@/data/team"
import { cn } from "@/lib/utils"

interface TeamMemberBackdropProps {
  theme?: TeamBackdropTheme
  className?: string
}

const NETWORK_NODES = [
  { x: 10, y: 20 }, { x: 30, y: 8 }, { x: 46, y: 28 }, { x: 22, y: 44 },
]
const NETWORK_LINES = [[0, 1], [1, 2], [2, 3], [3, 0]]

function NetworkMotif() {
  return (
    <svg viewBox="0 0 100 70" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {NETWORK_LINES.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={NETWORK_NODES[a].x} y1={NETWORK_NODES[a].y}
          x2={NETWORK_NODES[b].x} y2={NETWORK_NODES[b].y}
          stroke="rgba(139,92,246,0.14)" strokeWidth="0.2"
        />
      ))}
      {NETWORK_NODES.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r={i % 2 === 0 ? 0.9 : 0.6} fill="rgba(139,92,246,0.22)" />
      ))}
    </svg>
  )
}

function FinanceMotif() {
  return (
    <svg viewBox="0 0 100 70" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <path
        d="M8 40 L22 33 L36 36 L50 22 L64 26"
        fill="none" stroke="rgba(96,165,250,0.22)" strokeWidth="0.35" strokeLinecap="round" strokeLinejoin="round"
      />
      <rect x="10" y="10" width="14" height="10" rx="1.2" fill="none" stroke="rgba(139,92,246,0.16)" strokeWidth="0.22" />
      <line x1="12.5" y1="14" x2="21.5" y2="14" stroke="rgba(139,92,246,0.16)" strokeWidth="0.22" />
    </svg>
  )
}

export function TeamMemberBackdrop({ theme, className }: TeamMemberBackdropProps) {
  if (!theme) return null
  return (
    <div aria-hidden="true" className={cn("absolute top-0 right-0 w-[46%] h-[60%] overflow-hidden pointer-events-none opacity-70", className)}>
      {theme === "network" && <NetworkMotif />}
      {theme === "finance" && <FinanceMotif />}
    </div>
  )
}
