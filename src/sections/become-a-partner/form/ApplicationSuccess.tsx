"use client"

import { motion } from "framer-motion"
import { CheckCircle2, MessageCircle, Mail } from "lucide-react"
import { RobotImage } from "@/components/shared/RobotImage"
import { WHATSAPP_NUMBER_E164, WHATSAPP_NUMBER_DISPLAY, CONTACT_EMAIL } from "@/sections/become-a-partner/data"
import type { PartnerApplicationState } from "@/sections/become-a-partner/form/formState"

function buildWhatsAppMessage(state: PartnerApplicationState): string {
  const name = `${state.firstName} ${state.lastName}`.trim()
  const companyOrType = state.companyName || state.partnerType
  const publisherTypes = state.publisherTypes.join(", ") || "—"
  return [
    "Hi Click-Dudes Team,",
    "",
    "I've just submitted my application to become a Click-Dudes Partner.",
    "",
    "I'd like to discuss my referral partnership and access to the Partner Portal.",
    "",
    `Name: ${name}`,
    `Company/Partner Type: ${companyOrType}`,
    `Publisher Types: ${publisherTypes}`,
    "",
    "Thank you.",
  ].join("\n")
}

export function ApplicationSuccess({ state }: { state: PartnerApplicationState }) {
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER_E164}?text=${encodeURIComponent(buildWhatsAppMessage(state))}`
  const mailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("Partner Application Follow-up")}&body=${encodeURIComponent(
    `Hi Click-Dudes Team,\n\nI've just submitted my partner application (${state.firstName} ${state.lastName}) and would like to follow up.\n\nThank you.`
  )}`

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center text-center gap-5 py-6"
    >
      <RobotImage variant="celebrate" size="md" glowColor="green" />

      <div className="w-14 h-14 -mt-2 rounded-2xl bg-brand-green/10 flex items-center justify-center">
        <CheckCircle2 aria-hidden="true" className="w-7 h-7 text-brand-green" />
      </div>

      <div>
        <h3 className="text-xl font-bold text-text-primary">Application Submitted.</h3>
        <p className="text-sm text-text-secondary mt-2 max-w-md leading-relaxed">
          Your Click-Dudes Partner application has been received. Connect with our team to discuss your application
          and Partner Portal access.
        </p>
      </div>

      <div className="flex gap-6 w-full max-w-sm justify-center py-2">
        <div className="text-left">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">Application Status</p>
          <p className="text-sm font-bold text-brand-green">Submitted</p>
        </div>
        <div className="text-left">
          <p className="text-[10px] font-semibold tracking-widest uppercase text-text-muted">Next Step</p>
          <p className="text-sm font-bold text-brand-purple">Connect with Click-Dudes</p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 h-12 px-6 rounded-2xl text-sm font-semibold text-white bg-brand-green hover:brightness-105 active:scale-[0.98] transition-all duration-200 focus-ring"
        >
          <MessageCircle aria-hidden="true" className="w-4 h-4" />
          Chat on WhatsApp
        </a>
        <a
          href={mailHref}
          className="flex-1 inline-flex items-center justify-center gap-2 h-12 px-6 rounded-2xl text-sm font-semibold text-text-primary bg-white border border-[rgba(7,17,47,0.09)] hover:border-brand-purple/25 hover:bg-surface-section active:scale-[0.98] transition-all duration-200 focus-ring"
        >
          <Mail aria-hidden="true" className="w-4 h-4" />
          Email Our Team
        </a>
      </div>

      <p className="text-xs text-text-muted max-w-sm">
        {WHATSAPP_NUMBER_DISPLAY} · Access to the Partner Portal is provided after application review and approval.
      </p>
    </motion.div>
  )
}
