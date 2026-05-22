import type { Metadata } from "next"

export const metadata: Metadata = {
  title:       "Privacy Policy — Click Dudes",
  description: "Click Dudes Privacy Policy: how we collect, use, and protect your data.",
  alternates: { canonical: "https://clickdudes.com/privacy" },
}

export default function PrivacyPage() {
  return (
    <section className="section-base py-24">
      <div className="container-base">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-h1 font-bold text-text-primary tracking-display mb-4 text-balance">
            Privacy Policy
          </h1>
          <p className="text-sm text-text-muted mb-10">Last updated: January 2025</p>

          <div className="prose-custom space-y-8 text-text-secondary">
            <div>
              <h2>1. Information We Collect</h2>
              <p>Click Dudes collects information you provide directly (such as name, email, and website URL when applying for monetization) and technical data (such as IP address, browser type, and usage data) when you visit our website or use our platform.</p>
            </div>
            <div>
              <h2>2. How We Use Your Information</h2>
              <p>We use collected information to operate and improve our platform, communicate with publishers, provide customer support, and comply with legal obligations. We do not sell your personal data to third parties.</p>
            </div>
            <div>
              <h2>3. Cookies and Tracking</h2>
              <p>We use essential cookies for platform functionality and analytics cookies to understand how our website is used. You can manage cookie preferences through our Cookie Policy settings.</p>
            </div>
            <div>
              <h2>4. Data Retention</h2>
              <p>We retain personal data for as long as your publisher account is active, or as needed to provide services, comply with legal obligations, resolve disputes, and enforce agreements.</p>
            </div>
            <div>
              <h2>5. Your Rights</h2>
              <p>You have the right to access, correct, or delete your personal data. To exercise these rights or with any privacy questions, contact us at <a href="mailto:contact@clickdudes.com" className="text-brand-purple hover:text-brand-violet underline underline-offset-2">contact@clickdudes.com</a>.</p>
            </div>
            <div>
              <h2>6. Contact</h2>
              <p>Click Dudes, Inc. · 86-90 Paul Street, London EC2A 4NE · <a href="mailto:contact@clickdudes.com" className="text-brand-purple hover:text-brand-violet underline underline-offset-2">contact@clickdudes.com</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
