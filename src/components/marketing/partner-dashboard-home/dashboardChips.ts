import { UploadCloud, Clock, CheckCircle2, Rocket, Wallet, type LucideIcon } from "lucide-react"

export interface DashboardChipConfig {
  icon: LucideIcon
  label: string
  color: string
  glow: string
  pos: { x: string; y: string }
  line: { x: string; y: string }
}

export const DASHBOARD_CHIPS: DashboardChipConfig[] = [
  {
    icon: UploadCloud, label: "Publisher Submitted",
    color: "text-brand-purple", glow: "rgba(139,92,246,0.45)",
    pos: { x: "4%", y: "8%" }, line: { x: "22%", y: "22%" },
  },
  {
    icon: Clock, label: "In Review",
    color: "text-amber-500", glow: "rgba(245,158,11,0.45)",
    pos: { x: "88%", y: "16%" }, line: { x: "72%", y: "20%" },
  },
  {
    icon: CheckCircle2, label: "Approved",
    color: "text-brand-cyan", glow: "rgba(103,232,249,0.45)",
    pos: { x: "0%", y: "48%" }, line: { x: "16%", y: "45%" },
  },
  {
    icon: Rocket, label: "Live",
    color: "text-brand-green", glow: "rgba(16,185,129,0.45)",
    pos: { x: "90%", y: "54%" }, line: { x: "78%", y: "50%" },
  },
  {
    icon: Wallet, label: "Commission",
    color: "text-brand-violet", glow: "rgba(168,85,247,0.45)",
    pos: { x: "12%", y: "88%" }, line: { x: "30%", y: "80%" },
  },
]
