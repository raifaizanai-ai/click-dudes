"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bot, CheckCircle2, AlertCircle, Mail, Phone, MapPin, Clock } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { cn } from "@/lib/utils"

const CONTACT_EMAIL = "contact@clickdudes.com"
const WHATSAPP      = "https://wa.me/447735316000"
const PHONE         = "+44 7735 316000"
const PHONE_HREF    = "tel:+447735316000"

const PLATFORM_TYPES  = ["Website", "App", "CTV", "Advertiser"]
const GOALS           = ["Increase RPM", "Google AdX", "Header Bidding", "AI Optimization", "General Inquiry"]
const TRAFFIC_RANGES  = ["Under 10K/mo", "10K–50K/mo", "50K–200K/mo", "200K–1M/mo", "1M+/mo"]

interface FormState {
  name: string; email: string; website: string
  traffic: string; platform: string; goal: string
  message: string; honeypot: string
}

const INITIAL: FormState = {
  name: "", email: "", website: "", traffic: "", platform: "", goal: "", message: "", honeypot: "",
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
}

const INPUT = cn(
  "w-full px-4 py-3 rounded-xl text-sm text-text-primary",
  "bg-white/60 border border-brand-purple/[0.12] backdrop-blur-sm",
  "placeholder:text-text-muted/60",
  "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40 focus:border-brand-purple/30",
  "transition-[border-color,box-shadow] duration-200"
)

export function ContactSmartForm() {
  const [form, setForm]           = useState<FormState>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (form.honeypot) return
    if (!form.name.trim())    { setError("Please enter your name."); return }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address."); return
    }
    if (!form.message.trim()) { setError("Please describe your goals."); return }

    setLoading(true); setError(null)
    try {
      const subject = encodeURIComponent(`[Click Dudes] ${form.goal || "Inquiry"} from ${form.name}`)
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nWebsite/App: ${form.website}\nMonthly Traffic: ${form.traffic}\nPlatform: ${form.platform}\nGoal: ${form.goal}\n\nMessage:\n${form.message}`
      )
      window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please email contact@clickdudes.com directly.")
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <Section background="base" padding="lg" id="contact-form" className="scroll-mt-20">
        <Container>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md mx-auto flex flex-col items-center justify-center gap-4 py-16 text-center">
            <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center">
              <CheckCircle2 aria-hidden="true" className="w-7 h-7 text-brand-green" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-text-primary">Message Ready to Send</h3>
              <p className="text-sm text-text-secondary mt-1">Your email client has opened. Hit send, we&apos;ll reply within 24 hours.</p>
            </div>
            <button onClick={() => setSubmitted(false)} className="text-xs text-brand-purple underline underline-offset-2 hover:text-brand-violet transition-colors">Send another message</button>
          </motion.div>
        </Container>
      </Section>
    )
  }

  return (
    <Section background="base" padding="lg" id="contact-form" className="scroll-mt-20" aria-label="Contact form">
      <GradientOrb color="violet" size="xl" blur="2xl" opacity={0.07} className="top-0 left-0" />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">

          {/* Form */}
          <div className="lg:col-span-3">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} className="mb-8">
              <span className="text-[11px] font-semibold tracking-widest uppercase text-text-muted">Send a Message</span>
              <h2 className="text-h3 sm:text-h2 font-bold text-text-primary tracking-heading text-balance mt-2">
                Talk to{" "}<GradientText gradient="violet">ClickBot™</GradientText>
              </h2>
              <p className="text-sm text-text-secondary mt-3 max-w-md">Fill in the form and the right team member will follow up within 24 hours.</p>
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              className="glass-strong rounded-2xl p-6 lg:p-8 border border-brand-purple/[0.10]"
              style={{ boxShadow: "0 8px 40px rgba(7,17,47,0.06), 0 0 0 1px rgba(139,92,246,0.07)" }}>
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                <input name="honeypot" type="text" value={form.honeypot} onChange={handleChange} tabIndex={-1} aria-hidden="true" className="sr-only" autoComplete="off" />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="cf-name" className="text-xs font-semibold text-text-muted uppercase tracking-widest">Name <span aria-hidden="true" className="text-brand-purple">*</span></label>
                    <input id="cf-name" name="name" type="text" required autoComplete="name" placeholder="Your full name" value={form.name} onChange={handleChange} className={INPUT} />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="cf-email" className="text-xs font-semibold text-text-muted uppercase tracking-widest">Email <span aria-hidden="true" className="text-brand-purple">*</span></label>
                    <input id="cf-email" name="email" type="email" required autoComplete="email" placeholder="you@domain.com" value={form.email} onChange={handleChange} className={INPUT} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-website" className="text-xs font-semibold text-text-muted uppercase tracking-widest">Website / App URL</label>
                  <input id="cf-website" name="website" type="url" autoComplete="url" placeholder="https://yoursite.com" value={form.website} onChange={handleChange} className={INPUT} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="cf-traffic" className="text-xs font-semibold text-text-muted uppercase tracking-widest">Monthly Traffic</label>
                    <select id="cf-traffic" name="traffic" value={form.traffic} onChange={handleChange} className={cn(INPUT, "cursor-pointer")}>
                      <option value="" disabled>Select range…</option>
                      {TRAFFIC_RANGES.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="cf-platform" className="text-xs font-semibold text-text-muted uppercase tracking-widest">Platform Type</label>
                    <select id="cf-platform" name="platform" value={form.platform} onChange={handleChange} className={cn(INPUT, "cursor-pointer")}>
                      <option value="" disabled>Select type…</option>
                      {PLATFORM_TYPES.map(p => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-goal" className="text-xs font-semibold text-text-muted uppercase tracking-widest">Goal</label>
                  <select id="cf-goal" name="goal" value={form.goal} onChange={handleChange} className={cn(INPUT, "cursor-pointer")}>
                    <option value="" disabled>Select your goal…</option>
                    {GOALS.map(g => <option key={g} value={g}>{g}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="cf-message" className="text-xs font-semibold text-text-muted uppercase tracking-widest">Message <span aria-hidden="true" className="text-brand-purple">*</span></label>
                  <textarea id="cf-message" name="message" required rows={4} placeholder="Tell us about your inventory, goals, or questions…" value={form.message} onChange={handleChange} className={cn(INPUT, "resize-none")} />
                </div>
                {error && (
                  <motion.div initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-red-50 border border-red-200" role="alert">
                    <AlertCircle aria-hidden="true" className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <p className="text-xs text-red-700">{error}</p>
                  </motion.div>
                )}
                <button type="submit" disabled={loading}
                  className={cn("flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-brand transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/60",
                    loading ? "opacity-70 cursor-not-allowed" : "hover:shadow-[0_4px_24px_rgba(139,92,246,0.35)]")}>
                  {loading
                    ? <><span className="w-4 h-4 rounded-full border-2 border-white/40 border-t-white animate-spin" aria-hidden="true" />Opening email…</>
                    : <><Bot aria-hidden="true" className="w-4 h-4" />Send To ClickBot™</>}
                </button>
              </form>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-4 pt-2">
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }}
              className="glass-strong rounded-2xl p-6 border border-brand-purple/[0.10]">
              <h3 className="text-sm font-bold text-text-primary mb-4">Quick Contact</h3>
              <div className="flex flex-col gap-3.5">
                {([
                  { icon: Mail,   label: "Email",    value: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, color: "text-brand-purple" },
                  { icon: Phone,  label: "Phone",    value: PHONE,         href: PHONE_HREF,                 color: "text-brand-blue"   },
                  { icon: MapPin, label: "Location", value: "London, UK, EC2A 4NE", href: undefined,        color: "text-brand-purple" },
                  { icon: Clock,  label: "Hours",    value: "Mon–Fri, 9am–6pm GMT",  href: undefined,        color: "text-text-secondary" },
                ] as const).map(({ icon: Icon, label, value, href, color }) => (
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
              whileHover={{ scale: 1.01 }}
              className="glass-strong rounded-2xl p-5 border border-brand-green/20 flex items-center gap-4 hover:border-brand-green/40 transition-colors duration-200 group">
              <div className="w-10 h-10 rounded-xl bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                <Bot aria-hidden="true" className="w-5 h-5 text-brand-green" />
              </div>
              <div>
                <p className="text-sm font-bold text-text-primary group-hover:text-brand-green transition-colors duration-200">WhatsApp Us</p>
                <p className="text-xs text-text-muted">{PHONE} · Chat directly</p>
              </div>
            </motion.a>
          </div>

        </div>
      </Container>
    </Section>
  )
}
