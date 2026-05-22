"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Send, CheckCircle2, FileText, MessageSquare } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { GradientOrb } from "@/components/shared/GradientOrb"
import { GradientText } from "@/components/shared/GradientText"
import { RobotImage } from "@/components/shared/RobotImage"
import type { CalcInputs, CalcResults } from "@/lib/revenueCalculator"
import { fmtCurrency } from "@/lib/revenueCalculator"
import { cn } from "@/lib/utils"

interface LeadCaptureSectionProps {
  inputs:  CalcInputs
  results: CalcResults
}

interface LeadForm { name: string; email: string; website: string; whatsapp: string }
const EMPTY: LeadForm = { name: "", email: "", website: "", whatsapp: "" }

const INPUT_CLS = cn(
  "w-full px-4 py-3 rounded-xl text-sm text-text-primary bg-white/60",
  "border border-brand-purple/[0.12] backdrop-blur-sm",
  "placeholder:text-text-muted/60 outline-none",
  "focus-visible:ring-2 focus-visible:ring-brand-purple/40 focus:border-brand-purple/30",
  "transition-[border-color,box-shadow] duration-200"
)

export function LeadCaptureSection({ inputs, results }: LeadCaptureSectionProps) {
  const [form, setForm]         = useState<LeadForm>(EMPTY)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading]    = useState(false)
  const [error, setError]        = useState("")

  const set = (k: keyof LeadForm) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      const res = await fetch("/api/revenue-leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          ...inputs,
          lowEstimate:       results.lowEstimate,
          expectedEstimate:  results.expectedEstimate,
          highEstimate:      results.highEstimate,
          potentialRPM:      results.potentialRPM,
          aiScore:           results.aiScore,
          opportunityLevel:  results.opportunityLevel,
          insights:          results.insights,
        }),
      })
      const data = await res.json() as { success?: boolean; error?: string }
      if (data.success) setSubmitted(true)
      else setError(data.error ?? "Something went wrong. Please try again.")
    } catch {
      setError("Network error. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Section background="hero" padding="lg" aria-label="Get free revenue report" className="mesh-animated">
      <GradientOrb color="purple" size="2xl" blur="2xl" opacity={0.14} animate className="-top-24 left-1/4" />
      <GradientOrb color="cyan"   size="xl"  blur="2xl" opacity={0.10}        className="bottom-0 right-0" />

      <Container size="md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left — headline + robot */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-dark border border-brand-purple/20 text-xs font-semibold tracking-widest uppercase text-brand-purple w-fit">
              <FileText aria-hidden="true" className="w-3.5 h-3.5" />
              Free Revenue Report
            </span>
            <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance">
              Want a Detailed <GradientText gradient="brand">Revenue Report?</GradientText>
            </h2>
            <p className="text-body text-text-secondary leading-relaxed max-w-md">
              Get a personalized PDF report with your full revenue analysis, AI optimization recommendations, and a custom monetization roadmap.
            </p>

            <div className="flex flex-col gap-3">
              {[
                { icon: FileText,      text: `Your estimate: ${fmtCurrency(results.expectedEstimate)}/mo` },
                { icon: MessageSquare, text: `AI score: ${results.aiScore}/100 — ${results.opportunityLevel} opportunity` },
                { icon: Mail,          text: "Sent to your inbox within 24 hours" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
                    <Icon aria-hidden="true" className="w-3.5 h-3.5 text-brand-purple" />
                  </div>
                  <span className="text-sm text-text-secondary">{text}</span>
                </div>
              ))}
            </div>

            <div className="hidden lg:block mt-2">
              <RobotImage variant="laptop" size="sm" floatDelay={1} glowColor="purple" />
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="glass-strong rounded-3xl p-6 lg:p-8 border border-brand-purple/[0.12]"
            style={{ boxShadow: "0 8px 48px rgba(7,17,47,0.07), 0 0 0 1px rgba(139,92,246,0.08)" }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-8 text-center">
                <div className="w-14 h-14 rounded-2xl bg-brand-green/10 flex items-center justify-center">
                  <CheckCircle2 aria-hidden="true" className="w-7 h-7 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-text-primary">Report Requested!</h3>
                  <p className="text-sm text-text-secondary mt-1">Your personalized revenue report is on its way within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                <h3 className="text-base font-bold text-text-primary">Get Your Free Report</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
                    <label htmlFor="lead-name" className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">Name</label>
                    <input id="lead-name" type="text" required placeholder="Your name" value={form.name} onChange={set("name")} className={INPUT_CLS} />
                  </div>
                  <div className="flex flex-col gap-1.5 col-span-2 sm:col-span-1">
                    <label htmlFor="lead-email" className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">Email</label>
                    <input id="lead-email" type="email" required placeholder="you@site.com" value={form.email} onChange={set("email")} className={INPUT_CLS} />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lead-website" className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">Website</label>
                  <input id="lead-website" type="text" required placeholder="yoursite.com" value={form.website} onChange={set("website")} className={INPUT_CLS} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="lead-wa" className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">WhatsApp (optional)</label>
                  <input id="lead-wa" type="tel" placeholder="+1 234 567 8900" value={form.whatsapp} onChange={set("whatsapp")} className={INPUT_CLS} />
                </div>
                {error && <p className="text-xs text-red-500">{error}</p>}
                <button type="submit" disabled={loading}
                  className={cn(
                    "flex items-center justify-center gap-2 w-full px-6 py-3.5 rounded-xl text-sm font-semibold text-white",
                    "bg-gradient-brand transition-all duration-200",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/60",
                    loading ? "opacity-70 cursor-not-allowed" : "hover:shadow-[0_4px_24px_rgba(139,92,246,0.35)]"
                  )}
                >
                  {loading ? (
                    <>
                      <svg aria-hidden="true" className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="31.4 31.4" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <><Send aria-hidden="true" className="w-4 h-4" /> Get Free Report</>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
