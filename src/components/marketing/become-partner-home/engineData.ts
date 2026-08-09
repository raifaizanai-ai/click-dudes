import {
  Building2, Briefcase, Globe, Handshake, User, Network, Globe as WebIcon, Smartphone, Tv2,
  type LucideIcon,
} from "lucide-react"

export interface EngineNode {
  icon: LucideIcon
  label: string
  angle: number
  tooltip: string
  depth: "near" | "far"
}

export const ENGINE_NODES: EngineNode[] = [
  { icon: Building2, label: "Agency", angle: -90, depth: "near", tooltip: "Manage multiple publisher relationships." },
  { icon: Briefcase, label: "Company", angle: -30, depth: "far", tooltip: "Bring your organization's publisher relationships into one workflow." },
  { icon: Globe, label: "Publisher Owner", angle: 30, depth: "near", tooltip: "Bring your own web, app or CTV properties." },
  { icon: Handshake, label: "Referral Partner", angle: 90, depth: "far", tooltip: "Introduce qualified publisher opportunities." },
  { icon: User, label: "Individual", angle: 150, depth: "near", tooltip: "One qualified publisher opportunity is enough to start." },
  { icon: Network, label: "AdTech / Monetization", angle: 210, depth: "far", tooltip: "Connect your publisher network through one partner workflow." },
]

export interface ChannelDeviceConfig {
  key: "web" | "app" | "ctv"
  icon: LucideIcon
  label: string
}

export const CHANNEL_DEVICES: ChannelDeviceConfig[] = [
  { key: "web", icon: WebIcon, label: "Web" },
  { key: "app", icon: Smartphone, label: "App" },
  { key: "ctv", icon: Tv2, label: "CTV" },
]
