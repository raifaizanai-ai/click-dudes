"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock, Copy, CheckCircle2, MessageSquare, Building2, ExternalLink, Users, Globe2, Zap, Shield } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { RobotImage } from "@/components/shared/RobotImage"
import { SectionHeader } from "@/components/marketing/SectionHeader"
import { ContactForm } from "@/sections/about/ContactForm"
import { ContactFAQ } from "@/sections/about/ContactFAQ"
import { SolutionCTA } from "@/components/marketing/SolutionCTA"
import { cn } from "@/lib/utils"

const EMAIL       = "contact@clickdudes.com"
const PHONE       = "+44 7446 123539"
const PHONE_HREF  = "tel:+447446123539"
const WHATSAPP    = "https://wa.me/447446123539"
const MAPS_HREF   = "https://maps.google.com/?q=86-90+Paul+Street+London+EC2A+4NE"

const fadeUp = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const } },
}
const stagger = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
}
const card = {
  hidden:  { opacity: 0, y: 24 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const } }),
}

const TRUST = [
  { icon: Users,   label: "1,200+ Publishers",    sub: "Onboarded and growing",    color: "text-brand-purple", bg: "bg-brand-purple/10" },
  { icon: Shield,  label: "GCPP Partner Network", sub: "Google Certified Partner", color: "text-brand-blue",   bg: "bg-brand-blue/10"   },
  { icon: Globe2,  label: "Global Support",       sub: "40+ countries, 24/7 AI",   color: "text-brand-violet", bg: "bg-brand-violet/10" },
  { icon: Zap,     label: "24h Response Time",    sub: "Business days guaranteed", color: "text-brand-purple",   bg: "bg-brand-cyan/10"   },
]

const CARD_SHADOW = "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)"

export function ContactUsPage() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setCopied(true); setTimeout(() => setCopied(false), 2200) } catch {}
  }

  return (
    <>
      {/* ── Hero ── */}
      <Section background="hero" padding="none" aria-label="Contact Us hero" className="pt-10 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
        <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.12} animate className="-top-24 left-1/4" />
        <GradientOrb color="cyan"   size="xl"  blur="2xl" opacity={0.09}        className="top-0 -right-16" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div variants={stagger} initial="hidden" animate="visible" className="flex flex-col gap-5">
              <motion.span variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple w-fit">
                <Mail aria-hidden="true" className="w-3.5 h-3.5" />
                Get in Touch
              </motion.span>
              <motion.h1 variants={fadeUp} className="text-h2 sm:text-h1 md:text-display font-bold text-text-primary tracking-display text-balance leading-tight">
                Talk to the{" "}<GradientText gradient="brand">Click Dudes Team</GradientText>
              </motion.h1>
              <motion.p variants={fadeUp} className="text-base md:text-body-lg text-text-secondary text-pretty leading-relaxed max-w-xl">
                Publisher onboarding, advertiser partnerships, technical support — our team responds within 24 hours on business days.
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-wrap gap-2 pt-1">
                {TRUST.map(({ label, color }) => (
                  <span key={label} className={cn("inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-brand-purple/[0.10] text-xs font-semibold", color)}>
                    {label}
                  </span>
                ))}
              </motion.div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }} className="hidden lg:flex justify-center">
              <RobotImage variant="wave" size="lg" floatDelay={0} glowColor="purple" />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* ── Main content ── */}
      <Section background="base" padding="lg" aria-label="Contact details">
        <GradientOrb color="blue" size="xl" blur="2xl" opacity={0.07} className="top-0 right-0" />
        <Container>

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
            {/* Email */}
            <motion.div custom={0} variants={card} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4 }}
              className="glass-strong rounded-2xl p-6 border border-brand-purple/[0.10] flex flex-col gap-4 relative overflow-hidden group"
              style={{ boxShadow: CARD_SHADOW }}
            >
              <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent" />
              <div className="w-10 h-10 rounded-xl bg-brand-purple/10 flex items-center justify-center group-hover:bg-brand-purple/15 transition-colors duration-200">
                <Mail aria-hidden="true" className="w-5 h-5 text-brand-purple" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-text-primary mb-1">Email Us</h3>
                <a href={`mailto:${EMAIL}`} className="text-sm font-semibold text-brand-purple hover:text-brand-violet transition-colors duration-200 break-all">{EMAIL}</a>
                <p className="text-xs text-text-muted mt-1">Response within 24 hours</p>
              </div>
              <button onClick={copyEmail} className="flex items-center gap-2 text-xs font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40 rounded w-fit"
                style={{ color: copied ? "var(--brand-green, #10B981)" : "var(--brand-purple, #8B5CF6)" }}>
                {copied ? <><CheckCircle2 aria-hidden="true" className="w-3.5 h-3.5" />Copied!</> : <><Copy aria-hidden="true" className="w-3.5 h-3.5" />Copy email</>}
              </button>
            </motion.div>

            {/* Phone */}
            <motion.div custom={1} variants={card} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4 }}
              className="glass-strong rounded-2xl p-6 border border-brand-purple/[0.10] flex flex-col gap-4 relative overflow-hidden group"
              style={{ boxShadow: CARD_SHADOW }}
            >
              <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-blue/20 to-transparent" />
              <div className="w-10 h-10 rounded-xl bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue/15 transition-colors duration-200">
                <Phone aria-hidden="true" className="w-5 h-5 text-brand-blue" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-text-primary mb-1">Call or WhatsApp</h3>
                <a href={PHONE_HREF} className="text-sm font-semibold text-brand-blue hover:text-brand-purple transition-colors duration-200">{PHONE}</a>
                <p className="text-xs text-text-muted mt-1">Mon–Fri, 9am–6pm GMT</p>
              </div>
              <div className="flex items-center gap-3">
                <a href={PHONE_HREF} className="flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-brand-purple transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40 rounded">
                  <Phone aria-hidden="true" className="w-3.5 h-3.5" />Click to call
                </a>
                <span aria-hidden="true" className="text-text-muted/30">·</span>
                <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-brand-green hover:opacity-80 transition-opacity duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/40 rounded">
                  <MessageSquare aria-hidden="true" className="w-3.5 h-3.5" />WhatsApp
                </a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div custom={2} variants={card} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -4 }}
              className="glass-strong rounded-2xl p-6 border border-brand-purple/[0.10] flex flex-col gap-4 relative overflow-hidden group"
              style={{ boxShadow: CARD_SHADOW }}
            >
              <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center group-hover:bg-brand-cyan/15 transition-colors duration-200">
                <MapPin aria-hidden="true" className="w-5 h-5 text-brand-cyan" />
              </div>
              <div className="flex-1">
                <h3 className="text-sm font-bold text-text-primary mb-1">Registered Office</h3>
                <address className="text-sm text-text-secondary leading-relaxed not-italic">
                  86-90, Paul Street<br />London, England<br />United Kingdom, EC2A 4NE
                </address>
              </div>
              <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:text-brand-blue transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/40 rounded w-fit">
                <ExternalLink aria-hidden="true" className="w-3.5 h-3.5" />View on map
              </a>
            </motion.div>
          </div>

          {/* Why Click Dudes */}
          <div className="mb-14">
            <p className="text-[10px] font-semibold tracking-widest uppercase text-text-muted mb-5">Why Contact Click Dudes?</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {TRUST.map((t, i) => (
                <motion.div key={t.label} custom={i} variants={card} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-40px" }}
                  whileHover={{ y: -3, transition: { duration: 0.18 } }}
                  className="glass-strong rounded-2xl p-5 border border-brand-purple/[0.09] flex flex-col gap-3 relative overflow-hidden"
                  style={{ boxShadow: "0 4px 20px rgba(7,17,47,0.04), 0 0 0 1px rgba(139,92,246,0.06)" }}
                >
                  <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/15 to-transparent" />
                  <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center", t.bg)}>
                    <t.icon aria-hidden="true" className={cn("w-4 h-4", t.color)} />
                  </div>
                  <div>
                    <p className={cn("text-sm font-bold leading-snug mb-0.5", t.color)}>{t.label}</p>
                    <p className="text-xs text-text-muted">{t.sub}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form + sidebar */}
          <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start scroll-mt-24 mb-14">
            <div className="lg:col-span-3">
              <SectionHeader badge="Send a Message" heading={<>We Read <GradientText gradient="violet">Every Message</GradientText></>} subtext="Fill in the form and the right team member will follow up within 24 hours." align="left" subtextWidth="md" className="mb-8" />
              <div className="glass-strong rounded-2xl p-6 lg:p-8 border border-brand-purple/[0.10]" style={{ boxShadow: CARD_SHADOW }}>
                <ContactForm />
              </div>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-5 pt-2">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="glass-strong rounded-2xl p-6 border border-brand-purple/[0.10]">
                <h3 className="text-sm font-bold text-text-primary mb-4">Quick Contact</h3>
                <div className="flex flex-col gap-3">
                  {([
                    { icon: Mail,      label: "Email",     value: EMAIL,                           href: `mailto:${EMAIL}` as string | undefined, color: "text-brand-purple"    },
                    { icon: Phone,     label: "Phone",     value: PHONE,                           href: PHONE_HREF as string | undefined,         color: "text-brand-blue"      },
                    { icon: MapPin,    label: "Location",  value: "London, UK — EC2A 4NE",         href: undefined,                               color: "text-brand-purple"      },
                    { icon: Clock,     label: "Hours",     value: "Mon–Fri, 9am–6pm GMT",          href: undefined,                               color: "text-text-secondary"  },
                    { icon: Building2, label: "Inquiries", value: "Publisher, Advertiser, Support", href: undefined,                              color: "text-text-secondary"  },
                  ]).map(({ icon: Icon, label, value, href, color }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-7 h-7 rounded-lg bg-brand-purple/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon aria-hidden="true" className="w-3.5 h-3.5 text-brand-purple" />
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">{label}</p>
                        {href
                          ? <a href={href} className={cn("text-sm hover:text-brand-violet transition-colors duration-200", color)}>{value}</a>
                          : <p className={cn("text-sm", color)}>{value}</p>}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
                variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
                whileHover={{ scale: 1.01, transition: { duration: 0.18 } }}
                className="glass-strong rounded-2xl p-5 border border-brand-green/20 flex items-center gap-4 hover:border-brand-green/40 transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                  <MessageSquare aria-hidden="true" className="w-5 h-5 text-brand-green" />
                </div>
                <div>
                  <p className="text-sm font-bold text-text-primary group-hover:text-brand-green transition-colors duration-200">WhatsApp Us</p>
                  <p className="text-xs text-text-muted">{PHONE} · Chat directly</p>
                </div>
              </motion.a>
            </div>
          </div>

          {/* FAQ */}
          <ContactFAQ />
        </Container>
      </Section>

      <SolutionCTA
        heading="Ready to Start Monetizing Smarter?"
        subheading="Apply today and our publisher success team will reach out within 24 hours to discuss your inventory."
        badge="Apply to Join"
        robotVariant="wave"
        primaryCTA={{ label: "Apply Now", href: "/about/contact-us" }}
      />
    </>
  )
}
