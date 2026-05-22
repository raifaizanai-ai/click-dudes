import type { Metadata } from "next"

export const metadata: Metadata = {
  title:       "Cookie Policy — Click Dudes",
  description: "Click Dudes Cookie Policy: what cookies we use and how to manage them.",
  alternates: { canonical: "https://clickdudes.com/cookies" },
}

export default function CookiesPage() {
  return (
    <section className="section-base py-12 sm:py-24">
      <div className="container-base">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-h2 sm:text-h1 font-bold text-text-primary tracking-display mb-4 text-balance">
            Cookie Policy
          </h1>
          <p className="text-sm text-text-muted mb-10">Last updated: January 2025</p>

          <div className="prose-custom space-y-8 text-text-secondary">
            <div>
              <h2>1. What Are Cookies</h2>
              <p>Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and understand how you use the site.</p>
            </div>
            <div>
              <h2>2. Cookies We Use</h2>
              <p><strong>Essential cookies</strong> are required for the platform to function. They cannot be disabled. <strong>Analytics cookies</strong> (such as Google Analytics) help us understand visitor behavior so we can improve our website. <strong>Preference cookies</strong> remember settings you have chosen.</p>
            </div>
            <div>
              <h2>3. Third-Party Cookies</h2>
              <p>Our advertising technology integrations (Google Ad Manager, Google AdX) may set third-party cookies for ad delivery and measurement purposes. These are governed by Google's Privacy Policy.</p>
            </div>
            <div>
              <h2>4. Managing Cookies</h2>
              <p>You can control cookies through your browser settings. Note that disabling essential cookies may affect platform functionality. Most modern browsers allow you to refuse all cookies or accept them selectively.</p>
            </div>
            <div>
              <h2>5. Contact</h2>
              <p>Questions about our cookie practices? Contact us at <a href="mailto:contact@clickdudes.com" className="text-brand-purple hover:text-brand-violet underline underline-offset-2">contact@clickdudes.com</a>.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
