import { NextResponse } from "next/server"

interface LeadPayload {
  name:              string
  email:             string
  website:           string
  whatsapp?:         string
  category:          string
  monthlyPageviews:  number
  geography:         string
  platform:          string
  currentRPM:        number
  fillRate:          number
  deviceDesktop:     number
  deviceMobile:      number
  adPlacementQuality:number
  contentQuality:    number
  viewabilityRate:   number
  userExperience:    number
  coreWebVitals:     number
  pageLoadSpeed:     number
  lowEstimate:       number
  expectedEstimate:  number
  highEstimate:      number
  potentialRPM:      number
  aiScore:           number
  opportunityLevel:  string
  insights:          string[]
}

function isString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0
}

function isEmail(v: unknown): boolean {
  return isString(v) && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v as string)
}

export async function POST(req: Request) {
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  const data = body as Partial<LeadPayload>

  if (!isString(data.name))    return NextResponse.json({ error: "Name is required" }, { status: 422 })
  if (!isEmail(data.email))    return NextResponse.json({ error: "Valid email is required" }, { status: 422 })
  if (!isString(data.website)) return NextResponse.json({ error: "Website is required" }, { status: 422 })

  const lead: LeadPayload & { createdAt: string } = {
    name:              data.name!,
    email:             data.email!,
    website:           data.website!,
    whatsapp:          data.whatsapp ?? "",
    category:          data.category ?? "general",
    monthlyPageviews:  data.monthlyPageviews ?? 0,
    geography:         data.geography ?? "mixed",
    platform:          data.platform ?? "adsense",
    currentRPM:        data.currentRPM ?? 0,
    fillRate:          data.fillRate ?? 0,
    deviceDesktop:     data.deviceDesktop ?? 0,
    deviceMobile:      data.deviceMobile ?? 0,
    adPlacementQuality:data.adPlacementQuality ?? 0,
    contentQuality:    data.contentQuality ?? 0,
    viewabilityRate:   data.viewabilityRate ?? 0,
    userExperience:    data.userExperience ?? 0,
    coreWebVitals:     data.coreWebVitals ?? 0,
    pageLoadSpeed:     data.pageLoadSpeed ?? 0,
    lowEstimate:       data.lowEstimate ?? 0,
    expectedEstimate:  data.expectedEstimate ?? 0,
    highEstimate:      data.highEstimate ?? 0,
    potentialRPM:      data.potentialRPM ?? 0,
    aiScore:           data.aiScore ?? 0,
    opportunityLevel:  data.opportunityLevel ?? "Low",
    insights:          data.insights ?? [],
    createdAt:         new Date().toISOString(),
  }

  // ─── Persist lead here (Prisma, Supabase, etc.) ───
  // await db.revenueLead.create({ data: lead })
  console.log("[Revenue Lead Captured]", lead)
  // ──────────────────────────────────────────────────

  return NextResponse.json({ success: true })
}
