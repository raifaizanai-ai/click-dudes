"use client"

import { AnimatePresence, motion } from "framer-motion"
import {
  Building2, Briefcase, LineChart, Network, Globe, Handshake, Users, User,
  Smartphone, Tv2, ShieldCheck, Wallet,
} from "lucide-react"
import { FlowChain, type FlowNodeSpec } from "@/sections/become-a-partner/shared/FlowChain"
import { FanFlow } from "@/sections/become-a-partner/shared/FanFlow"
import { useReducedMotion } from "@/hooks/use-media-query"
import type { PartnerTypeKey } from "@/sections/become-a-partner/data"

interface Props {
  typeKey: PartnerTypeKey
  label: string
}

function AgencyVisual() {
  return (
    <FanFlow
      source={{ icon: Building2, label: "Agency" }}
      fanItems={[
        { icon: Globe, label: "Publisher A" },
        { icon: Globe, label: "Publisher B" },
        { icon: Globe, label: "Publisher C" },
      ]}
      targetLabel="Click-Dudes"
    />
  )
}

function CompanyVisual() {
  return (
    <FanFlow
      source={{ icon: Briefcase, label: "Company" }}
      fanItems={[
        { icon: Globe, label: "Web" },
        { icon: Smartphone, label: "App" },
        { icon: Tv2, label: "CTV" },
      ]}
      targetLabel="Click-Dudes"
    />
  )
}

function MonetizationProfessionalVisual() {
  const nodes: FlowNodeSpec[] = [
    { icon: Globe, label: "Publisher" },
    { icon: LineChart, label: "Monetization Review" },
    { brand: true },
  ]
  return <FlowChain nodes={nodes} pulse />
}

function AdTechProfessionalVisual() {
  const nodes: FlowNodeSpec[] = [
    { icon: Globe, label: "Publisher" },
    { icon: Network, label: "Programmatic / AdTech" },
    { brand: true },
  ]
  return <FlowChain nodes={nodes} pulse />
}

function PublisherOwnerVisual() {
  return (
    <FanFlow
      source={{ icon: User, label: "Owner" }}
      fanItems={[
        { icon: Globe, label: "Web" },
        { icon: Smartphone, label: "App" },
        { icon: Tv2, label: "CTV" },
      ]}
      targetLabel="Click-Dudes"
    />
  )
}

function ReferralPartnerVisual() {
  const nodes: FlowNodeSpec[] = [
    { icon: Handshake, label: "Referral Partner" },
    { icon: Globe, label: "Publisher" },
    { brand: true },
    { icon: ShieldCheck, label: "Review" },
    { icon: Wallet, label: "Commission" },
  ]
  return <FlowChain nodes={nodes} />
}

function TeamCommunityVisual() {
  return (
    <FanFlow
      source={{ icon: Users, label: "Team" }}
      fanItems={[
        { icon: Globe, label: "Publisher" },
        { icon: Globe, label: "Publisher" },
        { icon: Globe, label: "Publisher" },
      ]}
      targetLabel="Click-Dudes"
    />
  )
}

function IndividualVisual() {
  const nodes: FlowNodeSpec[] = [
    { icon: User, label: "Individual" },
    { icon: Globe, label: "Publisher" },
    { brand: true },
  ]
  return <FlowChain nodes={nodes} />
}

const VISUALS: Record<PartnerTypeKey, React.ComponentType> = {
  agency: AgencyVisual,
  company: CompanyVisual,
  "monetization-professional": MonetizationProfessionalVisual,
  "adtech-professional": AdTechProfessionalVisual,
  "publisher-owner": PublisherOwnerVisual,
  "referral-partner": ReferralPartnerVisual,
  "team-community": TeamCommunityVisual,
  individual: IndividualVisual,
}

export function IdentityVisualStage({ typeKey, label }: Props) {
  const reduced = useReducedMotion()
  const Visual = VISUALS[typeKey]

  return (
    <div className="relative w-full h-64 sm:h-72 glass-strong rounded-3xl border border-brand-purple/[0.10] shadow-[0_20px_60px_rgba(7,17,47,0.08)] overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={typeKey}
          className="absolute inset-0 p-6 flex items-center justify-center"
          initial={reduced ? undefined : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={reduced ? undefined : { opacity: 0, scale: 0.96 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          aria-label={label}
        >
          <Visual />
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
