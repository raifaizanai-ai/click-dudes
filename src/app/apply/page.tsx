import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Globe, Smartphone, Tv2, Zap, Shield, Users, Clock } from "lucide-react"

export const metadata: Metadata = {
  title:       "Apply For Monetization — Click Dudes | Start Earning More Today",
  description: "Apply to join the Click Dudes publisher network. Get access to Google AdX, Header Bidding, AI Optimization, and premium demand to maximize your ad revenue.",
  openGraph: {
    title:       "Apply For Monetization — Click Dudes",
    description: "Join 1,200+ publishers already earning more with Click Dudes. Apply today for Google AdX access, AI optimization, and premium demand.",
    url:         "https://clickdudes.com/apply",
    type:        "website",
  },
  twitter: {
    card:        "summary_large_image",
    title:       "Apply For Monetization — Click Dudes",
    description: "Join 1,200+ publishers earning more with Click Dudes. Apply now.",
  },
  alternates: {
    canonical: "https://clickdudes.com/apply",
  },
}

const BENEFITS = [
  { icon: Globe,      label: "Google AdX Access",       sub: "Premium exchange demand, 2–4× AdSense CPMs"    },
  { icon: Zap,        label: "AI Floor Optimization",    sub: "Self-learning price floors updated every 30 min" },
  { icon: Shield,     label: "GCPP Certified",           sub: "Google Certified Publishing Partner network"    },
  { icon: Smartphone, label: "Web, App & CTV",           sub: "All publisher types, one platform"             },
  { icon: Tv2,        label: "Premium Demand Partners",  sub: "30+ SSPs including Index Exchange & Magnite"   },
  { icon: Clock,      label: "Live Within 7 Days",       sub: "No developer required on your side"            },
]

const INCLUDES = [
  "Google AdX demand access",
  "Header bidding with 30+ partners",
  "AI-powered floor price optimization",
  "24/7 revenue monitoring",
  "Dedicated publisher success manager",
  "Core Web Vitals audit included",
  "No lock-in — 30-day rolling agreement",
  "Payments via wire, ACH, or PayPal",
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",  item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Apply", item: "https://clickdudes.com/apply" },
  ],
}

export default function ApplyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <div className="section-base min-h-[90vh]">

      {/* ── Hero ── */}
      <section className="pt-20 pb-16">
        <div className="container-base">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-purple/[0.12] text-xs font-semibold uppercase tracking-widest text-brand-purple mb-8">
              <Users className="w-3.5 h-3.5" aria-hidden="true" />
              Publisher Application
            </div>
            <h1 className="text-display font-bold text-text-primary tracking-display text-balance mb-5 leading-tight">
              Apply for{" "}
              <span className="text-gradient-brand">Premium Monetization</span>
            </h1>
            <p className="text-body-lg text-text-secondary text-pretty leading-relaxed max-w-xl mx-auto mb-8">
              Join 1,200+ publishers earning 40–80% more with AI-driven monetization infrastructure. Apply takes 2 minutes — our team responds within 24 hours.
            </p>

            {/* Key metrics */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {[
                { value: "1,200+", label: "Active Publishers" },
                { value: "+38%",   label: "Avg RPM Uplift"    },
                { value: "7 Days", label: "Avg Go-Live Time"  },
                { value: "40+",    label: "Countries Served"  },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-bold text-gradient-brand leading-none">{value}</p>
                  <p className="text-xs text-text-muted mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Two-column: Benefits + CTA ── */}
      <section className="pb-24">
        <div className="container-base">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">

            {/* Left — What's included */}
            <div className="glass border border-brand-purple/[0.12] rounded-3xl p-8 shadow-[0_8px_40px_rgba(7,17,47,0.07)]">
              <h2 className="text-xl font-bold text-text-primary tracking-tight mb-6">
                What You Get
              </h2>
              <ul className="space-y-3 mb-8">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-text-secondary">
                    <CheckCircle2 className="w-4 h-4 text-brand-green flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Benefit icons */}
              <div className="grid grid-cols-2 gap-3 pt-6 border-t border-brand-purple/[0.08]">
                {BENEFITS.map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex items-start gap-2.5 p-3 rounded-xl bg-brand-purple/[0.03] border border-brand-purple/[0.06]">
                    <div className="w-7 h-7 rounded-lg bg-brand-purple/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-text-primary leading-snug">{label}</p>
                      <p className="text-[10px] text-text-muted leading-snug mt-0.5">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Application CTA */}
            <div className="glass-strong border border-brand-purple/[0.15] rounded-3xl p-8 shadow-[0_16px_60px_rgba(7,17,47,0.09),0_0_0_1px_rgba(139,92,246,0.08)]">
              <h2 className="text-xl font-bold text-text-primary tracking-tight mb-2">
                Start Your Application
              </h2>
              <p className="text-sm text-text-secondary mb-8">
                Our publisher success team reviews every application personally. Tell us about your property and we&apos;ll confirm eligibility within 24 hours.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <Link
                  href="/about/contact-us"
                  className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-brand-purple to-brand-blue shadow-[0_4px_24px_rgba(139,92,246,0.40)] hover:shadow-[0_8px_40px_rgba(139,92,246,0.55)] hover:-translate-y-0.5 focus-ring"
                >
                  Apply via Contact Form
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>

                <a
                  href="mailto:contact@clickdudes.com?subject=Publisher%20Application"
                  className="flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl text-sm font-semibold text-text-primary glass border border-brand-purple/[0.15] hover:border-brand-purple/[0.30] hover:-translate-y-0.5 transition-all duration-300 focus-ring"
                >
                  Email contact@clickdudes.com
                </a>
              </div>

              <div className="flex flex-col gap-3 pt-6 border-t border-brand-purple/[0.08]">
                <p className="text-xs font-semibold text-text-muted uppercase tracking-wider">Minimum requirements</p>
                {[
                  "500K+ monthly pageviews (web) or 250K+ impressions (app/CTV)",
                  "Tier-1 or Tier-2 geographic traffic majority",
                  "Brand-safe, original content — no adult or piracy sites",
                ].map((req) => (
                  <p key={req} className="text-xs text-text-secondary flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-brand-purple/50 flex-shrink-0 mt-1.5" aria-hidden="true" />
                    {req}
                  </p>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
    </>
  )
}
