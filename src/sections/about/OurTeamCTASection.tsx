"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users, Star, Zap, CheckCircle2, MessageSquare, BarChart3 } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { CountUp } from "@/components/motion/CountUp"
import { LiveDot } from "@/components/shared/LiveDot"

const TEAM_MEMBERS = [
  { initials: "RF", name: "Rai Faizan",     role: "Founder",          color: "bg-brand-purple/15 text-brand-purple", ring: "ring-brand-purple/20" },
  { initials: "SU", name: "Syed Umer",      role: "CFO",              color: "bg-brand-blue/15 text-brand-blue",     ring: "ring-brand-blue/20"   },
  { initials: "MS", name: "Muhammad Sami",  role: "CEO",              color: "bg-brand-violet/15 text-brand-violet", ring: "ring-brand-violet/20" },
  { initials: "AK", name: "Asjad Khalid",   role: "Partnerships",     color: "bg-brand-green/15 text-brand-green",   ring: "ring-brand-green/20"  },
  { initials: "SC", name: "Shumail Chuhan", role: "Publisher Success", color: "bg-brand-cyan/15 text-brand-purple",     ring: "ring-brand-cyan/20"   },
]

const STATS = [
  { icon: Users,    value: 40,   suffix: "+",  label: "Team Members",   color: "text-brand-purple" },
  { icon: Star,     value: 4.9,  suffix: "/5", label: "Publisher NPS",  color: "text-brand-blue",   decimals: 1 },
  { icon: Zap,      value: 24,   suffix: "/7", label: "Support Hours",  color: "text-brand-purple"   },
  { icon: BarChart3, value: 700, suffix: "+",  label: "Publishers Live", color: "text-brand-green"  },
]

const BENEFITS = [
  "Dedicated account manager from day one, not a shared queue",
  "Publisher Success team available 24/7 across time zones",
  "Engineering team on-call for any technical integration issues",
  "Monthly strategy reviews with senior monetization consultants",
]

const itemVariants = {
  hidden:  { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

const memberVariants = {
  hidden:  { opacity: 0, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.45, delay: 0.2 + i * 0.06, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function OurTeamCTASection() {
  return (
    <Section background="navy" padding="xl" aria-label="Work with Click Dudes team">
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.12} animate className="-top-20 left-1/3" />
      <GradientOrb color="blue"   size="xl"  blur="2xl" opacity={0.08}        className="bottom-0 right-1/4" />

      <Container size="lg" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center">

          {/* Left: Team constellation panel */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="glass-dark rounded-3xl overflow-hidden border border-brand-purple/[0.10]"
              style={{ boxShadow: "0 24px 80px rgba(139,92,246,0.18), 0 8px 32px rgba(7,17,47,0.08)" }}>

              {/* Panel header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-brand-purple/[0.10]"
                style={{ background: "rgba(139,92,246,0.08)" }}>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-brand-purple" aria-hidden="true" />
                  <span className="text-[12px] font-bold text-text-primary">Your Click Dudes Team</span>
                </div>
                <LiveDot color="green" size="sm" label="" />
              </div>

              <div className="p-5 space-y-5">
                {/* Member avatars constellation */}
                <div>
                  <p className="text-[10px] text-text-muted font-semibold uppercase tracking-wider mb-3">Assigned to Your Account</p>
                  <div className="flex flex-wrap gap-2.5">
                    {TEAM_MEMBERS.map((m, i) => (
                      <motion.div key={m.name}
                        custom={i} variants={memberVariants}
                        initial="hidden" whileInView="visible" viewport={{ once: true }}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl border"
                        style={{ background: "rgba(139,92,246,0.04)", borderColor: "rgba(139,92,246,0.08)" }}
                      >
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold ring-1 ${m.color} ${m.ring}`}>
                          {m.initials}
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold text-text-primary leading-none">{m.name}</p>
                          <p className="text-[9px] text-text-muted mt-0.5">{m.role}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Live publisher message */}
                <div className="flex items-start gap-3 p-3 rounded-2xl"
                  style={{ background: "rgba(96,165,250,0.08)", border: "1px solid rgba(96,165,250,0.16)" }}>
                  <MessageSquare className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-[11px] font-semibold text-text-primary">Publisher Success Message</p>
                    <p className="text-[10px] text-text-secondary mt-0.5 leading-relaxed">
                      "Your account manager will be in touch within 4 hours of sign-up, not 4 days."
                    </p>
                  </div>
                </div>

                {/* Team stats row */}
                <div className="grid grid-cols-4 gap-2">
                  {STATS.map((s, i) => (
                    <motion.div key={s.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + i * 0.07, duration: 0.4 }}
                      className="flex flex-col items-center gap-1 p-2.5 rounded-xl text-center"
                      style={{ background: "rgba(139,92,246,0.04)", border: "1px solid rgba(139,92,246,0.09)" }}
                    >
                      <s.icon className={`w-3.5 h-3.5 ${s.color}`} aria-hidden="true" />
                      <p className={`text-[15px] font-black tabular-nums leading-none ${s.color}`}>
                        <CountUp end={s.value} decimals={s.decimals ?? 0} duration={1.8} />
                        {s.suffix}
                      </p>
                      <p className="text-[8px] text-text-muted font-medium uppercase tracking-wide leading-tight">{s.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: CTA content */}
          <div className="flex flex-col gap-6">
            <motion.div custom={0} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-purple/[0.14] text-xs font-semibold tracking-widest uppercase text-text-secondary"
                style={{ background: "rgba(139,92,246,0.05)" }}>
                <Users className="w-3.5 h-3.5" aria-hidden="true" />
                Meet Your Team
              </span>
            </motion.div>

            <motion.h2 custom={1} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="font-bold text-text-primary tracking-heading text-balance leading-[1.08]"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.025em" }}>
              Work With a Team That{" "}
              <span style={{ background: "linear-gradient(135deg, #8B5CF6, #60A5FA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Genuinely Cares
              </span>
            </motion.h2>

            <motion.p custom={2} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-base text-text-secondary leading-relaxed text-pretty max-w-md">
              Every publisher gets a dedicated account manager, not just a ticket queue. Our Publisher Success team is built around real relationships and measurable revenue outcomes.
            </motion.p>

            <motion.ul custom={3} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex flex-col gap-2.5">
              {BENEFITS.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-[14px] text-text-secondary">{b}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div custom={4} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link href="/about/contact-us"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[15px] text-white hover:opacity-90 shadow-[0_4px_28px_rgba(139,92,246,0.45)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.60)] transition-all duration-300 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #8B5CF6, #60A5FA)" }}>
                Apply to Join the Network
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link href="/about/our-mission"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl border border-brand-purple/[0.16] text-text-secondary font-semibold text-[14px] hover:border-brand-purple/25 hover:text-text-primary transition-all duration-300"
                style={{ background: "rgba(139,92,246,0.04)" }}>
                Our Mission
              </Link>
            </motion.div>
          </div>

        </div>
      </Container>
    </Section>
  )
}
