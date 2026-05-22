import type { Metadata } from "next"

export const metadata: Metadata = {
  title:       "Terms of Service — Click Dudes",
  description: "Click Dudes Terms of Service: the rules and guidelines governing use of our platform.",
  alternates: { canonical: "https://clickdudes.com/terms" },
}

export default function TermsPage() {
  return (
    <section className="section-base py-12 sm:py-24">
      <div className="container-base">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-h2 sm:text-h1 font-bold text-text-primary tracking-display mb-4 text-balance">
            Terms of Service
          </h1>
          <p className="text-sm text-text-muted mb-10">Last updated: January 2025</p>

          <div className="prose-custom space-y-8 text-text-secondary">
            <div>
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing or using the Click Dudes platform, you agree to be bound by these Terms of Service. If you do not agree, do not use our services.</p>
            </div>
            <div>
              <h2>2. Publisher Eligibility</h2>
              <p>Publishers must meet minimum traffic and content quality requirements. Click Dudes reserves the right to accept or reject publisher applications at its discretion. Publishers must comply with all applicable advertising standards including Google Publisher Policies.</p>
            </div>
            <div>
              <h2>3. Revenue and Payments</h2>
              <p>Revenue is calculated based on verified ad impressions and clicks. Payments are made on a net-30 or net-60 basis depending on your publisher agreement. Click Dudes charges a revenue share fee as outlined in your individual agreement.</p>
            </div>
            <div>
              <h2>4. Prohibited Conduct</h2>
              <p>Publishers may not engage in invalid click activity, artificially inflate impressions, publish prohibited content, or violate Google Publisher Policies or the Coalition for Better Ads standards.</p>
            </div>
            <div>
              <h2>5. Limitation of Liability</h2>
              <p>Click Dudes is not liable for interruptions in ad delivery due to third-party platform issues, advertiser budget changes, or factors outside our reasonable control.</p>
            </div>
            <div>
              <h2>6. Contact</h2>
              <p>Questions about these Terms? Contact us at <a href="mailto:contact@clickdudes.com" className="text-brand-purple hover:text-brand-violet underline underline-offset-2">contact@clickdudes.com</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
