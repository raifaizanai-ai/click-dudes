"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle2, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const CONTACT_EMAIL = "contact@clickdudes.com"

const INQUIRY_TYPES = [
  "Publisher Onboarding",
  "Advertiser Partnership",
  "Technical Support",
  "Billing & Payments",
  "Press & Media",
  "General Inquiry",
]

interface FormState {
  name: string; email: string; company: string
  inquiry: string; message: string
  honeypot: string
}

const INITIAL: FormState = { name: "", email: "", company: "", inquiry: "", message: "", honeypot: "" }

async function submitToEmail(data: Omit<FormState, "honeypot">): Promise<void> {
  const subject = encodeURIComponent(
    `[Click Dudes] ${data.inquiry || "Inquiry"} from ${data.name}`
  )
  const body = encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\nCompany/Website: ${data.company}\nInquiry Type: ${data.inquiry}\n\nMessage:\n${data.message}`
  )
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
}

export function ContactForm() {
  const [form, setForm]           = useState<FormState>(INITIAL)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]     = useState(false)
  const [error, setError]         = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Honeypot check — bots fill hidden fields
    if (form.honeypot) return

    if (!form.name.trim())    { setError("Please enter your name.");  return }
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.")
      return
    }
    if (!form.inquiry)        { setError("Please select an inquiry type."); return }
    if (!form.message.trim()) { setError("Please enter a message."); return }

    setLoading(true)
    setError(null)

    try {
      const { honeypot: _, ...payload } = form
      await submitToEmail(payload)
      setSubmitted(true)
    } catch {
      setError("Something went wrong. Please email us directly at contact@clickdudes.com")
    } finally {
      setLoading(false)
    }
  }

  const inputClass = cn(
    "w-full px-4 py-3 rounded-xl text-sm text-text-primary",
    "bg-white/60 border border-brand-purple/[0.12] backdrop-blur-sm",
    "placeholder:text-text-muted/60",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/40 focus:border-brand-purple/30",
    "transition-[border-color,box-shadow] duration-200"
  )

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center gap-4 py-16 text-center"
      >
        <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center">
          <CheckCircle2 aria-hidden="true" className="w-7 h-7 text-brand-green" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-text-primary">Message Ready to Send</h3>
          <p className="text-sm text-text-secondary mt-1">
            Your email client has opened. Hit send — we&apos;ll reply within 24 hours.
          </p>
        </div>
        <button
          onClick={() => setSubmitted(false)}
          className="text-xs text-brand-purple underline underline-offset-2 hover:text-brand-violet transition-colors"
        >
          Send another message
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
      {/* Honeypot — invisible to users, filled by bots */}
      <input
        name="honeypot"
        type="text"
        value={form.honeypot}
        onChange={handleChange}
        tabIndex={-1}
        aria-hidden="true"
        className="sr-only"
        autoComplete="off"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className="text-xs font-semibold text-text-muted uppercase tracking-widest">
            Name <span aria-hidden="true" className="text-brand-purple">*</span>
          </label>
          <input id="contact-name" name="name" type="text" required autoComplete="name"
            placeholder="Your full name" value={form.name} onChange={handleChange} className={inputClass}
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className="text-xs font-semibold text-text-muted uppercase tracking-widest">
            Email <span aria-hidden="true" className="text-brand-purple">*</span>
          </label>
          <input id="contact-email" name="email" type="email" required autoComplete="email"
            placeholder="you@yourdomain.com" value={form.email} onChange={handleChange} className={inputClass}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-company" className="text-xs font-semibold text-text-muted uppercase tracking-widest">Company / Website</label>
        <input id="contact-company" name="company" type="text" autoComplete="organization"
          placeholder="yoursite.com" value={form.company} onChange={handleChange} className={inputClass}
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-inquiry" className="text-xs font-semibold text-text-muted uppercase tracking-widest">
          Inquiry Type <span aria-hidden="true" className="text-brand-purple">*</span>
        </label>
        <select id="contact-inquiry" name="inquiry" required value={form.inquiry} onChange={handleChange}
          className={cn(inputClass, "cursor-pointer")}>
          <option value="" disabled>Select an inquiry type…</option>
          {INQUIRY_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-xs font-semibold text-text-muted uppercase tracking-widest">
          Message <span aria-hidden="true" className="text-brand-purple">*</span>
        </label>
        <textarea id="contact-message" name="message" required rows={5}
          placeholder="Tell us about your website, app, or question…"
          value={form.message} onChange={handleChange}
          className={cn(inputClass, "resize-none")}
        />
      </div>

      {/* Error state */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-red-50 border border-red-200"
          role="alert"
        >
          <AlertCircle aria-hidden="true" className="w-4 h-4 text-red-500 flex-shrink-0" />
          <p className="text-xs text-red-700">{error}</p>
        </motion.div>
      )}

      <button type="submit" disabled={loading}
        className={cn(
          "flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-sm font-semibold text-white",
          "bg-gradient-brand transition-all duration-200",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/60",
          loading ? "opacity-70 cursor-not-allowed" : "hover:shadow-[0_4px_24px_rgba(139,92,246,0.35)]"
        )}
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <svg aria-hidden="true" className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"
                strokeLinecap="round" strokeDasharray="31.4 31.4" />
            </svg>
            Opening email…
          </span>
        ) : (
          <>
            <Send aria-hidden="true" className="w-4 h-4" />
            Send Message
          </>
        )}
      </button>

      <p className="text-center text-xs text-text-muted">
        Or email us directly at{" "}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-brand-purple hover:underline">
          {CONTACT_EMAIL}
        </a>
      </p>
    </form>
  )
}
