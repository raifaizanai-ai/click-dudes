"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MessageSquare, MapPin, Copy, CheckCircle2, ExternalLink, ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { cn } from "@/lib/utils"

const EMAIL      = "contact@clickdudes.com"
const PHONE      = "+44 7735 316000"
const PHONE_HREF = "tel:+447735316000"
const WHATSAPP   = "https://wa.me/447735316000"
const MAPS_HREF  = "https://maps.google.com/?q=86-90+Paul+Street+London+EC2A+4NE"

const CARD_SHADOW = "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)"

const card = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as const },
  }),
}

export function ContactMethodCards() {
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setCopied(true); setTimeout(() => setCopied(false), 2200) } catch {}
  }

  return (
    <Section background="base" padding="lg" aria-label="Contact methods">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

          {/* Email */}
          <motion.div custom={0} variants={card} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-40px" }} whileHover={{ y: -4 }}
            className="glass-strong rounded-2xl p-6 border border-brand-purple/[0.10] flex flex-col gap-4 relative overflow-hidden group"
            style={{ boxShadow: CARD_SHADOW }}>
            <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-purple/25 to-transparent" />
            <div className="w-12 h-12 rounded-2xl bg-brand-purple/10 flex items-center justify-center group-hover:bg-brand-purple/18 transition-colors duration-200">
              <Mail aria-hidden="true" className="w-5 h-5 text-brand-purple" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="text-sm font-bold text-text-primary">Email Us</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-green/10 text-brand-green font-semibold">24h Reply</span>
              </div>
              <a href={`mailto:${EMAIL}`} className="text-sm font-medium text-brand-purple hover:text-brand-violet transition-colors duration-200 break-all">{EMAIL}</a>
              <p className="text-xs text-text-muted mt-1">Business days, 9am–6pm GMT</p>
            </div>
            <button onClick={copyEmail}
              className="flex items-center gap-2 text-xs font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40 rounded w-fit"
              style={{ color: copied ? "#10B981" : "#8B5CF6" }}>
              {copied
                ? <><CheckCircle2 aria-hidden="true" className="w-3.5 h-3.5" />Copied!</>
                : <><Copy aria-hidden="true" className="w-3.5 h-3.5" />Copy email</>}
            </button>
          </motion.div>

          {/* Phone */}
          <motion.div custom={1} variants={card} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-40px" }} whileHover={{ y: -4 }}
            className="glass-strong rounded-2xl p-6 border border-brand-blue/[0.12] flex flex-col gap-4 relative overflow-hidden group"
            style={{ boxShadow: CARD_SHADOW }}>
            <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-blue/25 to-transparent" />
            <div className="w-12 h-12 rounded-2xl bg-brand-blue/10 flex items-center justify-center group-hover:bg-brand-blue/18 transition-colors duration-200">
              <Phone aria-hidden="true" className="w-5 h-5 text-brand-blue" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="text-sm font-bold text-text-primary">Phone</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-blue/10 text-brand-blue font-semibold">GMT</span>
              </div>
              <a href={PHONE_HREF} className="text-sm font-medium text-brand-blue hover:text-brand-purple transition-colors duration-200">{PHONE}</a>
              <p className="text-xs text-text-muted mt-1">Mon–Fri, 9am–6pm GMT</p>
            </div>
            <a href={PHONE_HREF}
              className="flex items-center gap-1.5 text-xs font-semibold text-brand-blue hover:text-brand-purple transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 rounded w-fit">
              <Phone aria-hidden="true" className="w-3.5 h-3.5" />Click to call
            </a>
          </motion.div>

          {/* WhatsApp */}
          <motion.div custom={2} variants={card} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-40px" }} whileHover={{ y: -4 }}
            className="glass-strong rounded-2xl p-6 border border-brand-green/[0.15] flex flex-col gap-4 relative overflow-hidden group"
            style={{ boxShadow: CARD_SHADOW }}>
            <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-green/25 to-transparent" />
            <div className="w-12 h-12 rounded-2xl bg-brand-green/10 flex items-center justify-center group-hover:bg-brand-green/18 transition-colors duration-200">
              <MessageSquare aria-hidden="true" className="w-5 h-5 text-brand-green" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="text-sm font-bold text-text-primary">WhatsApp</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-green/10 text-brand-green font-semibold">Fastest</span>
              </div>
              <p className="text-sm font-medium text-text-secondary">{PHONE}</p>
              <p className="text-xs text-text-muted mt-1">Typically same-day response</p>
            </div>
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-brand-green hover:opacity-80 transition-opacity duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green/40 rounded w-fit">
              <ArrowRight aria-hidden="true" className="w-3.5 h-3.5" />Chat on WhatsApp
            </a>
          </motion.div>

          {/* Office */}
          <motion.div custom={3} variants={card} initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-40px" }} whileHover={{ y: -4 }}
            className="glass-strong rounded-2xl p-6 border border-brand-cyan/[0.12] flex flex-col gap-4 relative overflow-hidden group"
            style={{ boxShadow: CARD_SHADOW }}>
            <div aria-hidden="true" className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-cyan/25 to-transparent" />
            <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 flex items-center justify-center group-hover:bg-brand-cyan/18 transition-colors duration-200">
              <MapPin aria-hidden="true" className="w-5 h-5 text-brand-cyan" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1.5">
                <h3 className="text-sm font-bold text-text-primary">Office</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-brand-cyan/10 text-brand-cyan font-semibold">London</span>
              </div>
              <address className="text-sm text-text-secondary leading-relaxed not-italic">
                86-90, Paul Street<br />London, EC2A 4NE<br />United Kingdom
              </address>
            </div>
            <a href={MAPS_HREF} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold text-brand-purple hover:text-brand-violet transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-cyan/40 rounded w-fit">
              <ExternalLink aria-hidden="true" className="w-3.5 h-3.5" />View on map
            </a>
          </motion.div>

        </div>
      </Container>
    </Section>
  )
}
