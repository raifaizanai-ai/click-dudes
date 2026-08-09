import { NextResponse } from "next/server"
import { checkRateLimit } from "@/lib/rateLimit"

/**
 * Partner application intake.
 *
 * Required environment configuration for real email delivery:
 *   RESEND_API_KEY                — API key from https://resend.com
 *   PARTNER_APPLICATIONS_FROM     — verified sender, e.g. "Click Dudes Partners <partners@clickdudes.com>"
 *   PARTNER_APPLICATIONS_TO       — optional, defaults to contact@clickdudes.com
 *
 * If RESEND_API_KEY is not set, this route returns a clear 503 error instead
 * of pretending the email was delivered.
 */

interface PartnerApplicationPayload {
  firstName: string
  lastName: string
  primaryEmail: string
  secondaryEmail?: string
  whatsapp: string
  country: string
  partnerType: string
  companyName?: string
  linkedinUrl?: string
  publisherTypes: string[]
  publisherCount: string
  ownership: string
  monthlyCapacity: string
  revenueRange: string
  eligibilityConfidence: string
  primaryReason: string
  notes?: string
  consentAccuracy: boolean
  consentPrivacy: boolean
  marketingConsent?: boolean
  hpField?: string
}

const MAX_LENGTHS: Record<string, number> = {
  firstName: 80, lastName: 80, primaryEmail: 160, secondaryEmail: 160,
  whatsapp: 40, country: 80, partnerType: 80, companyName: 160,
  linkedinUrl: 300, publisherCount: 20, ownership: 40, monthlyCapacity: 20,
  revenueRange: 30, eligibilityConfidence: 20, primaryReason: 80, notes: 1500,
}

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0
}

function isEmail(v: unknown): v is string {
  return isNonEmptyString(v) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
}

function sanitize(v: string, maxLen: number): string {
  return v.replace(/[<>]/g, "").trim().slice(0, maxLen)
}

function clientKey(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for")
  return forwarded?.split(",")[0]?.trim() ?? req.headers.get("x-real-ip") ?? "unknown"
}

export async function POST(req: Request) {
  const key = clientKey(req)
  const rate = checkRateLimit(`partner-application:${key}`, 5, 15 * 60 * 1000)
  if (!rate.allowed) {
    return NextResponse.json(
      { success: false, error: "Too many submissions. Please try again shortly." },
      { status: 429, headers: rate.retryAfterSeconds ? { "Retry-After": String(rate.retryAfterSeconds) } : undefined }
    )
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request body." }, { status: 400 })
  }

  const data = body as Partial<PartnerApplicationPayload>

  // Honeypot — silently accept without sending mail, don't tip off bots.
  if (isNonEmptyString(data.hpField)) {
    return NextResponse.json({ success: true, applicationId: "ok" })
  }

  const requiredStrings: Array<[keyof PartnerApplicationPayload, string]> = [
    ["firstName", "First name is required."],
    ["lastName", "Last name is required."],
    ["whatsapp", "WhatsApp number is required."],
    ["country", "Country is required."],
    ["partnerType", "Partner type is required."],
    ["publisherCount", "Publisher count is required."],
    ["ownership", "Please tell us whether you own or refer publishers."],
    ["monthlyCapacity", "Monthly referral capacity is required."],
    ["revenueRange", "Estimated revenue range is required."],
    ["eligibilityConfidence", "Please answer the eligibility question."],
    ["primaryReason", "Please select a primary reason for partnering."],
  ]

  for (const [field, message] of requiredStrings) {
    if (!isNonEmptyString(data[field] as string | undefined)) {
      return NextResponse.json({ success: false, error: message }, { status: 422 })
    }
  }

  if (!isEmail(data.primaryEmail)) {
    return NextResponse.json({ success: false, error: "A valid primary email is required." }, { status: 422 })
  }

  if (!Array.isArray(data.publisherTypes) || data.publisherTypes.length === 0) {
    return NextResponse.json({ success: false, error: "Select at least one publisher type." }, { status: 422 })
  }

  if (data.consentAccuracy !== true || data.consentPrivacy !== true) {
    return NextResponse.json({ success: false, error: "Both required confirmations must be accepted." }, { status: 422 })
  }

  const clean = {
    firstName: sanitize(data.firstName!, MAX_LENGTHS.firstName),
    lastName: sanitize(data.lastName!, MAX_LENGTHS.lastName),
    primaryEmail: sanitize(data.primaryEmail!, MAX_LENGTHS.primaryEmail),
    secondaryEmail: data.secondaryEmail ? sanitize(data.secondaryEmail, MAX_LENGTHS.secondaryEmail) : "",
    whatsapp: sanitize(data.whatsapp!, MAX_LENGTHS.whatsapp),
    country: sanitize(data.country!, MAX_LENGTHS.country),
    partnerType: sanitize(data.partnerType!, MAX_LENGTHS.partnerType),
    companyName: data.companyName ? sanitize(data.companyName, MAX_LENGTHS.companyName) : "",
    linkedinUrl: data.linkedinUrl ? sanitize(data.linkedinUrl, MAX_LENGTHS.linkedinUrl) : "",
    publisherTypes: data.publisherTypes!.filter(isNonEmptyString).map(t => sanitize(t, 40)).slice(0, 10),
    publisherCount: sanitize(data.publisherCount!, MAX_LENGTHS.publisherCount),
    ownership: sanitize(data.ownership!, MAX_LENGTHS.ownership),
    monthlyCapacity: sanitize(data.monthlyCapacity!, MAX_LENGTHS.monthlyCapacity),
    revenueRange: sanitize(data.revenueRange!, MAX_LENGTHS.revenueRange),
    eligibilityConfidence: sanitize(data.eligibilityConfidence!, MAX_LENGTHS.eligibilityConfidence),
    primaryReason: sanitize(data.primaryReason!, MAX_LENGTHS.primaryReason),
    notes: data.notes ? sanitize(data.notes, MAX_LENGTHS.notes) : "",
    marketingConsent: data.marketingConsent === true,
  }

  const applicationId = `PA-${Date.now().toString(36).toUpperCase()}`

  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.PARTNER_APPLICATIONS_FROM
  const to = process.env.PARTNER_APPLICATIONS_TO ?? "contact@clickdudes.com"

  if (!apiKey || !from) {
    console.error("[partner-applications] Email not configured — set RESEND_API_KEY and PARTNER_APPLICATIONS_FROM.")
    return NextResponse.json(
      { success: false, error: "Applications can't be emailed right now. Please contact us on WhatsApp or email directly." },
      { status: 503 }
    )
  }

  const html = `
    <h2>New Click-Dudes Partner Application</h2>
    <p><strong>Application ID:</strong> ${applicationId}</p>
    <h3>About</h3>
    <p>${clean.firstName} ${clean.lastName}<br/>
    ${clean.primaryEmail}${clean.secondaryEmail ? ` / ${clean.secondaryEmail}` : ""}<br/>
    WhatsApp: ${clean.whatsapp}<br/>
    Country: ${clean.country}<br/>
    Partner Type: ${clean.partnerType}${clean.companyName ? ` (${clean.companyName})` : ""}${clean.linkedinUrl ? `<br/>LinkedIn: ${clean.linkedinUrl}` : ""}</p>
    <h3>Publisher Network</h3>
    <p>Types: ${clean.publisherTypes.join(", ")}<br/>
    Publisher Count: ${clean.publisherCount}<br/>
    Ownership: ${clean.ownership}<br/>
    Monthly Referral Capacity: ${clean.monthlyCapacity}</p>
    <h3>Commercial</h3>
    <p>Estimated Combined Monthly Revenue: ${clean.revenueRange}<br/>
    Meets Eligibility: ${clean.eligibilityConfidence}<br/>
    Primary Reason: ${clean.primaryReason}</p>
    ${clean.notes ? `<h3>Notes</h3><p>${clean.notes}</p>` : ""}
    <p><strong>Marketing consent:</strong> ${clean.marketingConsent ? "Yes" : "No"}</p>
  `

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to,
        reply_to: clean.primaryEmail,
        subject: `New Partner Application — ${clean.firstName} ${clean.lastName} (${clean.partnerType})`,
        html,
      }),
    })

    if (!res.ok) {
      console.error("[partner-applications] Resend API error", res.status)
      return NextResponse.json(
        { success: false, error: "We couldn't send your application. Please try WhatsApp or email us directly." },
        { status: 502 }
      )
    }
  } catch {
    return NextResponse.json(
      { success: false, error: "Network error while sending your application. Please try again." },
      { status: 502 }
    )
  }

  console.log(`[partner-applications] Application ${applicationId} received (${clean.partnerType})`)

  return NextResponse.json({ success: true, applicationId })
}
