"use client"

import { motion } from "framer-motion"
import { Users, Code2, BarChart2, Shield, Briefcase, ArrowRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { CTAButtonGroup } from "@/components/marketing/CTAButtonGroup"
import { OurTeamCTASection } from "@/sections/about/OurTeamCTASection"
import { cn } from "@/lib/utils"

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
}
const cardVariant = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

interface TeamMember {
  name: string; role: string; department: string
  bio: string; initials: string; accentBg: string; accentText: string; years?: string
}

const TEAM: TeamMember[] = [
  { name: "Rai Faizan",      role: "Founder & Visioner",                department: "Leadership",        bio: "Founder of ClickDudes, leading the company vision, monetization strategy, AI-powered ad-tech direction, and long-term growth ecosystem.",                                                  initials: "RF", accentBg: "bg-brand-purple/12", accentText: "text-brand-purple", years: "Founder"     },
  { name: "Syed Umer",       role: "Co-Founder & CFO",                  department: "Leadership",        bio: "Oversees finance, business operations, revenue planning, strategic partnerships, and sustainable growth execution for ClickDudes.",                                                        initials: "SU", accentBg: "bg-brand-blue/12",   accentText: "text-brand-blue",   years: "Co-Founder"  },
  { name: "Muhammad Sami",   role: "CEO",                               department: "Leadership",        bio: "Leads company execution, operational strategy, team management, publisher growth, and business development across the ClickDudes ecosystem.",                                              initials: "MS", accentBg: "bg-brand-violet/12", accentText: "text-brand-violet" },
  { name: "Mumtaz Ahmed",    role: "Head of PR Department",             department: "Public Relations",  bio: "Manages public relations, communications, brand positioning, outreach coordination, and partner-facing reputation building.",                                                              initials: "MA", accentBg: "bg-brand-cyan/12",   accentText: "text-brand-purple"   },
  { name: "Asjad Khalid",    role: "Director, Publisher Partnership",   department: "Partnerships",      bio: "Leads publisher partnership strategy, onboarding relationships, monetization opportunities, and growth collaboration with media owners.",                                                  initials: "AK", accentBg: "bg-brand-green/12",  accentText: "text-brand-green"  },
  { name: "Shumail Chuhan",  role: "Publisher Relationship Manager",    department: "Publisher Success", bio: "Manages publisher communication, account support, relationship building, onboarding assistance, and long-term partner success.",                                                           initials: "SC", accentBg: "bg-brand-blue/12",   accentText: "text-brand-blue"   },
]

interface DeptCard { icon: LucideIcon; iconBg: string; iconColor: string; name: string; count: string; description: string }
const DEPARTMENTS: DeptCard[] = [
  { icon: BarChart2, iconBg: "bg-brand-purple/10", iconColor: "text-brand-cyan", name: "Publisher Success", count: "12 people", description: "Dedicated account managers and onboarding specialists for every publisher." },
  { icon: Code2,     iconBg: "bg-brand-blue/10",   iconColor: "text-brand-blue",   name: "Engineering",       count: "18 people", description: "Building the AI infrastructure and publisher-facing technology." },
  { icon: Briefcase, iconBg: "bg-brand-cyan/10",   iconColor: "text-brand-cyan",   name: "Demand Partnerships", count: "6 people", description: "Managing relationships with 500+ DSPs, SSPs, and direct advertisers." },
  { icon: Shield,    iconBg: "bg-brand-green/10",  iconColor: "text-brand-green",  name: "Ad Quality",        count: "4 people",  description: "Ensuring every ad served meets brand safety and quality standards." },
]

export function OurTeamPage() {
  return (
    <>
      <Section background="hero" padding="none" aria-label="Team hero"
        className="pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden"
      >
        <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.12} animate className="-top-24 left-1/4" />
        <GradientOrb color="blue"   size="xl"  blur="2xl" opacity={0.09}        className="top-0 -right-16" />
        <Container>
          <motion.div variants={stagger} initial="hidden" animate="visible"
            className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto"
          >
            <motion.span variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple"
            >
              <Users aria-hidden="true" className="w-3.5 h-3.5" />
              Our Team
            </motion.span>
            <motion.h1 variants={fadeUp}
              className="text-h2 sm:text-h1 md:text-display font-bold text-text-primary tracking-display text-balance leading-tight"
            >
              The People Behind{" "}
              <GradientText gradient="brand">Click Dudes</GradientText>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-base md:text-body-lg text-text-secondary text-pretty leading-relaxed max-w-2xl">
              Ad-tech veterans, engineers, and publisher advocates — unified by one goal: giving every publisher the technology and expertise to earn their true inventory value.
            </motion.p>
          </motion.div>
        </Container>
      </Section>

      <Section background="base" padding="lg" aria-label="Leadership team">
        <GradientOrb color="violet" size="xl" blur="2xl" opacity={0.07} className="top-0 right-0" />
        <Container>
          <SectionHeader
            badge="Leadership"
            heading={<>Meet the <GradientText gradient="violet">Founding Team</GradientText></>}
            subtext="Industry veterans who&apos;ve worked at Google, OpenX, The Trade Desk, PubMatic, and more."
            align="center" subtextWidth="md" className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEAM.map((member, i) => (
              <motion.div key={member.name} custom={i} variants={cardVariant}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                whileHover={{ y: -6, transition: { duration: 0.22, ease: "easeOut" } }}
                className="glass-strong rounded-2xl p-6 border border-brand-purple/[0.10] flex flex-col gap-4 relative overflow-hidden"
                style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}
              >
                <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
                <div className="flex items-center gap-4">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-base font-bold flex-shrink-0", member.accentBg, member.accentText)}>
                    {member.initials}
                  </div>
                  <div className="min-w-0">
                    <p className="font-bold text-text-primary leading-tight">{member.name}</p>
                    <p className="text-xs text-text-muted mt-0.5">{member.role}</p>
                    {member.years && (
                      <span className={cn("text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 inline-block", member.accentBg, member.accentText)}>
                        {member.years}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">{member.bio}</p>
                <div className="pt-3 border-t border-brand-purple/[0.08]">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">{member.department}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section background="section" padding="lg" aria-label="Team structure">
        <GradientOrb color="cyan" size="xl" blur="2xl" opacity={0.08} className="bottom-0 left-0" />
        <Container>
          <SectionHeader
            badge="The Team"
            heading={<>40+ People, <GradientText gradient="cyan">One Mission</GradientText></>}
            subtext="Four specialized teams working in sync to grow publisher revenue every single day."
            align="center" subtextWidth="sm" className="mb-10"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {DEPARTMENTS.map((d, i) => (
              <motion.div key={d.name} custom={i} variants={cardVariant}
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                className="glass-strong rounded-2xl p-5 border border-brand-purple/[0.10] flex flex-col gap-3"
              >
                <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", d.iconBg)}>
                  <d.icon aria-hidden="true" className={cn("w-5 h-5", d.iconColor)} />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <p className="font-bold text-text-primary text-sm">{d.name}</p>
                    <span className="text-[10px] text-text-muted">{d.count}</span>
                  </div>
                  <p className="text-xs text-text-secondary leading-relaxed mt-1">{d.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
            className="mt-12 glass-strong rounded-2xl p-8 border border-brand-purple/[0.12] flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div>
              <h3 className="text-h3 font-bold text-text-primary">We&apos;re Hiring</h3>
              <p className="text-text-secondary mt-1">Join a team building the future of publisher monetization.</p>
            </div>
            <CTAButtonGroup
              primary={{ label: "Apply to Join the Network", href: "/about/contact-us" }}
              secondary={{ label: "Our Mission", href: "/about/our-mission" }}
              align="center"
              size="md"
            />
          </motion.div>
        </Container>
      </Section>

      <OurTeamCTASection />
    </>
  )
}
