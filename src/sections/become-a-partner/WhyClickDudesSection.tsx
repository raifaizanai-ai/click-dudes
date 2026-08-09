import {
  ClipboardCheck, Handshake, LayoutDashboard, Wallet, FileText, MessageCircle, LineChart,
  type LucideIcon,
} from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { FadeUp } from "@/components/motion/FadeUp"
import { ChaosToSystemDiagram } from "@/sections/become-a-partner/shared/ChaosToSystemDiagram"

interface Benefit { icon: LucideIcon; label: string }

const BENEFITS: Benefit[] = [
  { icon: ClipboardCheck, label: "One submission workflow" },
  { icon: Handshake, label: "One partner relationship" },
  { icon: LayoutDashboard, label: "Central publisher tracking" },
  { icon: Wallet, label: "Commission visibility" },
  { icon: FileText, label: "Agreements and records" },
  { icon: MessageCircle, label: "Support and communication" },
  { icon: LineChart, label: "Analytics" },
]

export function WhyClickDudesSection() {
  return (
    <Section background="section" padding="lg" aria-label="Why partner with Click-Dudes">
      <Container size="lg">
        <SectionHeader
          badge="Why Click-Dudes"
          heading="Stop Searching for a Different Monetization Partner for Every Publisher."
          subtext="Click-Dudes gives partners one relationship for publisher submissions while our team evaluates each opportunity and works to identify an appropriate monetization-partner route."
          align="center"
          subtextWidth="lg"
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <FadeUp>
            <ChaosToSystemDiagram />
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="glass-strong rounded-2xl p-6 lg:p-8 border border-brand-purple/[0.10]">
              <h3 className="text-base font-bold text-text-primary mb-5">What one partnership gives you</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BENEFITS.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 p-3 rounded-xl bg-white/60 border border-brand-purple/[0.08]">
                    <div className="w-8 h-8 rounded-lg bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
                      <Icon aria-hidden="true" className="w-4 h-4 text-brand-purple" />
                    </div>
                    <span className="text-sm font-medium text-text-secondary">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </Container>
    </Section>
  )
}
