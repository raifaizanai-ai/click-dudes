import type { LegalSectionData } from "@/lib/legal/types"

export const COOKIE_SECTIONS: LegalSectionData[] = [
  {
    id: "introduction", number: 1, title: "Introduction",
    body: [
      "This Cookie Policy explains how Click Dudes (\"Click Dudes,\" \"we,\" \"us\") uses cookies and similar technologies on clickdudes.com and the Partner Portal at partners.clickdudes.com (together, the \"Sites\").",
      "It should be read alongside our Privacy Policy, which explains more broadly how we handle personal information.",
    ],
  },
  {
    id: "what-cookies-are", number: 2, title: "What Cookies Are",
    body: [
      "Cookies are small text files placed on your device when you visit a website. They let a site remember information about your visit, such as your preferences or login state, and are widely used to make websites function and to understand how they are used.",
      "\"Similar technologies\" refers to related mechanisms such as local storage, which we may use for comparable purposes.",
    ],
  },
  {
    id: "why-we-use", number: 3, title: "Why Click Dudes Uses Cookies",
    body: [
      "We use cookies to keep our Sites secure and functional, to keep you signed in to the Partner Portal, to remember basic preferences, and, where enabled, to understand aggregate usage of clickdudes.com so we can improve it.",
    ],
  },
  {
    id: "essential-cookies", number: 4, title: "Essential Cookies",
    body: [
      "These cookies are required for the Sites to work and cannot be switched off. They include cookies that maintain your authenticated session in the Partner Portal, protect against cross-site request forgery, and support basic load-balancing and security functions.",
      "Because these cookies are strictly necessary, we do not seek separate consent to set them.",
    ],
  },
  {
    id: "preference-cookies", number: 5, title: "Preference Cookies",
    body: [
      "Where used, preference cookies remember choices you have made, such as interface settings inside the Partner Portal, so you do not need to re-select them on every visit.",
    ],
  },
  {
    id: "analytics-cookies", number: 6, title: "Analytics Cookies",
    body: [
      "Where Google Analytics (GA4) is enabled on clickdudes.com, it uses cookies to help us understand aggregate traffic and usage patterns — for example, which pages are visited and how visitors generally navigate the site. This data is reported in aggregate and is not used by us to build individual advertising profiles.",
      "Analytics is deployed selectively across our environments; if you do not see analytics cookies on a given visit, it may not have been active for that session.",
    ],
  },
  {
    id: "advertising-measurement", number: 7, title: "Advertising / Measurement Technologies",
    body: [
      "Click Dudes helps publisher partners implement monetization technologies — including Google Ad Manager and Google AdX — on the publishers' own websites, apps and CTV properties. Those technologies, and any cookies they set, operate on the partner's property, not on clickdudes.com.",
      "clickdudes.com does not currently serve programmatic advertising or ad-tech tags of this kind on its own pages.",
    ],
  },
  {
    id: "third-party-technologies", number: 8, title: "Third-Party Technologies",
    body: [
      "Some features on our Sites are provided by third parties (for example, embedded scheduling, chat, or hosting infrastructure) who may set their own cookies subject to their own privacy and cookie notices. We select these providers with reasonable care but do not control their cookie practices directly.",
    ],
  },
  {
    id: "cookie-duration", number: 9, title: "Cookie Duration",
    body: [
      "Session cookies are deleted automatically when you close your browser. Persistent cookies, such as those that keep you signed in or remember a preference, remain on your device for a set period or until you delete them manually.",
    ],
  },
  {
    id: "your-choices", number: 10, title: "Your Choices",
    body: [
      "You can choose to accept, limit or block cookies at any time through your browser settings. Blocking essential cookies will likely prevent parts of the Partner Portal — such as staying signed in — from working correctly.",
    ],
  },
  {
    id: "browser-controls", number: 11, title: "Browser Controls",
    body: [
      "Most browsers let you view, delete and block cookies from their settings menu, and many offer a private or incognito mode that limits cookie retention automatically. Consult your browser's help documentation for exact steps, since these vary by browser and version.",
    ],
  },
  {
    id: "consent-management", number: 12, title: "Consent Management Where Applicable",
    body: [
      "We do not currently operate a dedicated cookie-consent banner across every page of our Sites. Essential cookies are used on the basis that they are strictly necessary to deliver the service you request. Where a jurisdiction requires prior consent for non-essential cookies such as analytics, we will provide an appropriate consent mechanism for that jurisdiction; until then, browser-level controls remain your primary tool for managing non-essential cookies.",
    ],
    callout: "If you believe a specific regulatory consent mechanism should apply to your visit and is missing, please contact us — this policy is reviewed periodically and updated as our implementation changes.",
  },
  {
    id: "changes", number: 13, title: "Changes to This Cookie Policy",
    body: [
      "We may update this Cookie Policy as our Sites, technologies, or legal obligations change. Material changes will be reflected in the \"Last Updated\" date at the top of this page.",
    ],
  },
  {
    id: "contact", number: 14, title: "Contact",
    body: [
      "Questions about this Cookie Policy or our cookie practices can be sent to contact@clickdudes.com.",
    ],
  },
]
