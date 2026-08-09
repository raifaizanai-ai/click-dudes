"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertCircle, ArrowLeft, ArrowRight, Loader2 } from "lucide-react"
import { FormProgress } from "@/sections/become-a-partner/form/FormProgress"
import { FormStep1About } from "@/sections/become-a-partner/form/FormStep1About"
import { FormStep2Network } from "@/sections/become-a-partner/form/FormStep2Network"
import { FormStep3Commercial } from "@/sections/become-a-partner/form/FormStep3Commercial"
import { FormStep4Confirm } from "@/sections/become-a-partner/form/FormStep4Confirm"
import { ApplicationSuccess } from "@/sections/become-a-partner/form/ApplicationSuccess"
import {
  INITIAL_APPLICATION_STATE, validateStep1, validateStep2, validateStep3, validateStep4,
  type PartnerApplicationState,
} from "@/sections/become-a-partner/form/formState"
import { useReducedMotion } from "@/hooks/use-media-query"
import { CONTACT_EMAIL, WHATSAPP_NUMBER_DISPLAY } from "@/sections/become-a-partner/data"

const VALIDATORS = [validateStep1, validateStep2, validateStep3, validateStep4]
const TOTAL_STEPS = 4

export function PartnerApplicationForm() {
  const [step, setStep] = useState(1)
  const [state, setState] = useState<PartnerApplicationState>(INITIAL_APPLICATION_STATE)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const reduced = useReducedMotion()

  const set = <K extends keyof PartnerApplicationState>(key: K, value: PartnerApplicationState[K]) => {
    setState((prev) => ({ ...prev, [key]: value }))
    if (error) setError(null)
  }

  const goNext = () => {
    const err = VALIDATORS[step - 1](state)
    if (err) { setError(err); return }
    setError(null)
    setStep((s) => Math.min(s + 1, TOTAL_STEPS))
  }

  const goBack = () => {
    setError(null)
    setStep((s) => Math.max(s - 1, 1))
  }

  const handleSubmit = async () => {
    const err = validateStep4(state)
    if (err) { setError(err); return }

    setLoading(true)
    setError(null)
    try {
      const res = await fetch("/api/partner-applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state),
      })
      const data = await res.json() as { success?: boolean; error?: string }
      if (data.success) {
        setSubmitted(true)
      } else {
        setError(data.error ?? `Something went wrong. Please email ${CONTACT_EMAIL} or WhatsApp ${WHATSAPP_NUMBER_DISPLAY} directly.`)
      }
    } catch {
      setError(`Network error. Please email ${CONTACT_EMAIL} or WhatsApp ${WHATSAPP_NUMBER_DISPLAY} directly.`)
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="glass-strong rounded-3xl p-6 lg:p-10 border border-brand-purple/[0.10]">
        <ApplicationSuccess state={state} />
      </div>
    )
  }

  return (
    <div className="glass-strong rounded-3xl p-6 lg:p-10 border border-brand-purple/[0.10] flex flex-col gap-8">
      <FormProgress currentStep={step} />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={step}
          initial={reduced ? undefined : { opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={reduced ? undefined : { opacity: 0, x: -16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {step === 1 && <FormStep1About state={state} set={set} />}
          {step === 2 && <FormStep2Network state={state} set={set} />}
          {step === 3 && <FormStep3Commercial state={state} set={set} />}
          {step === 4 && <FormStep4Confirm state={state} set={set} />}
        </motion.div>
      </AnimatePresence>

      {error && (
        <div role="alert" className="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-red-50 border border-red-200">
          <AlertCircle aria-hidden="true" className="w-4 h-4 text-red-500 flex-shrink-0" />
          <p className="text-xs text-red-700">{error}</p>
        </div>
      )}

      <div className="flex items-center justify-between gap-3 pt-2 border-t border-[rgba(7,17,47,0.06)]">
        <button
          type="button"
          onClick={goBack}
          disabled={step === 1}
          className="inline-flex items-center gap-2 h-11 px-5 rounded-xl text-sm font-semibold text-text-secondary hover:bg-surface-section disabled:opacity-40 disabled:pointer-events-none transition-colors duration-200 focus-ring"
        >
          <ArrowLeft aria-hidden="true" className="w-4 h-4" />
          Back
        </button>

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={goNext}
            className="inline-flex items-center gap-2 h-11 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-brand hover:shadow-[0_4px_24px_rgba(139,92,246,0.35)] active:scale-[0.98] transition-all duration-200 focus-ring"
          >
            Next
            <ArrowRight aria-hidden="true" className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="inline-flex items-center gap-2 h-11 px-6 rounded-xl text-sm font-semibold text-white bg-gradient-brand hover:shadow-[0_4px_24px_rgba(139,92,246,0.35)] active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none transition-all duration-200 focus-ring"
          >
            {loading ? <Loader2 aria-hidden="true" className="w-4 h-4 animate-spin" /> : null}
            {loading ? "Submitting…" : "Submit Partner Application"}
          </button>
        )}
      </div>
    </div>
  )
}
