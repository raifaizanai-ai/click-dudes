import { Mail, MessageCircle } from "lucide-react"
import { SITE } from "@/lib/constants"

export function LegalContactCard() {
  return (
    <div className="glass-strong rounded-2xl p-6 sm:p-8 border border-brand-purple/[0.10] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 mt-10">
      <div>
        <h3 className="text-base font-bold text-text-primary">Questions about this policy?</h3>
        <p className="text-sm text-text-secondary mt-1">Our team is available to help clarify anything on this page.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-2.5 w-full sm:w-auto">
        <a
          href={`mailto:${SITE.email}`}
          className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl text-sm font-semibold text-white bg-gradient-brand hover:shadow-[0_4px_20px_rgba(139,92,246,0.30)] transition-all duration-200 focus-ring"
        >
          <Mail aria-hidden="true" className="w-4 h-4" />
          Email Us
        </a>
        <a
          href={`https://wa.me/${SITE.phone.replace(/[^0-9]/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl text-sm font-semibold text-brand-purple border border-brand-purple/25 hover:bg-brand-purple/[0.06] transition-all duration-200 focus-ring"
        >
          <MessageCircle aria-hidden="true" className="w-4 h-4" />
          WhatsApp
        </a>
      </div>
    </div>
  )
}
