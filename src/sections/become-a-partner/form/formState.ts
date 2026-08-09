export interface PartnerApplicationState {
  firstName: string
  lastName: string
  primaryEmail: string
  secondaryEmail: string
  whatsapp: string
  country: string
  partnerType: string
  companyName: string
  linkedinUrl: string
  publisherTypes: string[]
  publisherCount: string
  ownership: string
  monthlyCapacity: string
  revenueRange: string
  eligibilityConfidence: string
  primaryReason: string
  notes: string
  consentAccuracy: boolean
  consentPrivacy: boolean
  marketingConsent: boolean
  hpField: string
}

export const INITIAL_APPLICATION_STATE: PartnerApplicationState = {
  firstName: "", lastName: "", primaryEmail: "", secondaryEmail: "", whatsapp: "", country: "",
  partnerType: "", companyName: "", linkedinUrl: "",
  publisherTypes: [], publisherCount: "", ownership: "", monthlyCapacity: "",
  revenueRange: "", eligibilityConfidence: "", primaryReason: "", notes: "",
  consentAccuracy: false, consentPrivacy: false, marketingConsent: false, hpField: "",
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateStep1(s: PartnerApplicationState): string | null {
  if (!s.firstName.trim()) return "First name is required."
  if (!s.lastName.trim()) return "Last name is required."
  if (!EMAIL_RE.test(s.primaryEmail)) return "A valid primary email is required."
  if (!s.whatsapp.trim()) return "WhatsApp number is required."
  if (!s.country.trim()) return "Country is required."
  if (!s.partnerType) return "Please select a partner type."
  return null
}

export function validateStep2(s: PartnerApplicationState): string | null {
  if (s.publisherTypes.length === 0) return "Select at least one publisher type."
  if (!s.publisherCount) return "Select how many publishers you work with."
  if (!s.ownership) return "Let us know whether you own or refer publishers."
  if (!s.monthlyCapacity) return "Select your realistic monthly referral capacity."
  return null
}

export function validateStep3(s: PartnerApplicationState): string | null {
  if (!s.revenueRange) return "Select an estimated combined monthly revenue range."
  if (!s.eligibilityConfidence) return "Let us know if your publishers meet eligibility requirements."
  if (!s.primaryReason) return "Select your primary reason for partnering."
  return null
}

export function validateStep4(s: PartnerApplicationState): string | null {
  if (!s.consentAccuracy) return "Please confirm the accuracy of your information."
  if (!s.consentPrivacy) return "Please agree to the privacy policy to continue."
  return null
}
