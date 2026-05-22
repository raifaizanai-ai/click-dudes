import { Globe, Smartphone, Tv2, BarChart3, Layers, BrainCircuit, TrendingUp, Star, HelpCircle, BookOpen, BarChart2, Gift, Target, Compass, Users, Mail, History } from "lucide-react"
import type { NavLink } from "@/types"

export const SITE = {
  name:        "Click Dudes",
  tagline:     "Turning Clicks Into Revenue",
  description: "AI-powered ad-tech, monetization, and advertising platform helping web publishers, app publishers, and CTV publishers maximize revenue through Google AdX, Header Bidding, AI optimization, premium demand, and smart ad solutions.",
  url:         "https://clickdudes.com",
  email:       "contact@clickdudes.com",
  twitter:     "@clickdudes",
} as const

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label:    "Publisher Solutions",
    href:     "/publishers",
    children: [
      {
        label:       "Web Monetization",
        href:        "/publisher-solutions/web-monetization",
        description: "Maximize RPM on every page with premium demand & AI floors",
        icon:        Globe,
      },
      {
        label:       "App Monetization",
        href:        "/publisher-solutions/app-monetization",
        description: "Cross-platform ad revenue for iOS, Android, and web apps",
        icon:        Smartphone,
      },
      {
        label:       "CTV Monetization",
        href:        "/publisher-solutions/ctv-monetization",
        description: "Connected TV premium inventory with direct demand access",
        icon:        Tv2,
      },
      {
        label:       "Google AdX Solutions",
        href:        "/publisher-solutions/google-adx-solutions",
        description: "Access Google AdX demand with 30%+ revenue uplift vs AdSense",
        icon:        BarChart3,
      },
      {
        label:       "Header Bidding Solutions",
        href:        "/publisher-solutions/header-bidding-solutions",
        description: "Real-time unified auction with 20–40% revenue increase",
        icon:        Layers,
      },
      {
        label:       "AI Ad Optimization",
        href:        "/publisher-solutions/ai-ad-optimization",
        description: "Self-learning AI recalculates price floors and demand 24/7",
        icon:        BrainCircuit,
      },
      {
        label:       "AdSense Revenue Optimization",
        href:        "/publisher-solutions/adsense-revenue-optimization",
        description: "~40% avg uplift on existing AdSense with AI A/B testing",
        icon:        TrendingUp,
      },
    ],
  },
  { label: "Ad Formats",          href: "/ad-formats" },
  {
    label: "Resources",
    href:  "/resources",
    children: [
      { label: "Success Stories",          href: "/resources/success-stories",          description: "Real publisher results and case studies",        icon: Star       },
      { label: "FAQs",                     href: "/resources/faqs",                     description: "Answers to common monetization questions",       icon: HelpCircle },
      { label: "Monetization Guides",      href: "/resources/monetization-guides",      description: "In-depth guides for every publisher type",       icon: BookOpen   },
      { label: "AdSense vs AdX",           href: "/resources/adsense-vs-adx",           description: "Full comparison — when to upgrade and why",      icon: BarChart2  },
      { label: "App Monetization Guide",   href: "/resources/app-monetization-guide",   description: "Complete guide to in-app advertising revenue",   icon: Smartphone },
      { label: "Publisher Referral Program", href: "/resources/publisher-referral-program", description: "Earn commissions by referring publishers", icon: Gift       },
    ],
  },
  { label: "Revenue Calculator", href: "/revenue-calculator" },
  { label: "Blog",               href: "/blog" },
  {
    label: "About Us",
    href:  "/about",
    children: [
      { label: "Our Mission", href: "/about/our-mission",  description: "Our publisher-first philosophy and purpose", icon: Target  },
      { label: "Our Vision",  href: "/about/our-vision",   description: "The future of AI-powered monetization",     icon: Compass },
      { label: "Our Team",    href: "/about/our-team",     description: "The people building Click Dudes",            icon: Users   },
      { label: "Our History", href: "/about/our-history",  description: "Our journey from agency to global platform", icon: History },
      { label: "Contact Us",  href: "/about/contact-us",   description: "Get in touch with our team",                icon: Mail    },
    ],
  },
]

export const SOCIAL_LINKS = [
  { label: "Twitter",  href: "https://twitter.com/clickdudes" },
  { label: "LinkedIn", href: "https://linkedin.com/company/clickdudes" },
] as const

export const FOOTER_COLUMNS = [
  {
    heading: "Solutions",
    links: [
      { label: "Web Publishers", href: "/publisher-solutions/web-monetization" },
      { label: "App Publishers", href: "/publisher-solutions/app-monetization" },
      { label: "CTV Publishers", href: "/publisher-solutions/ctv-monetization" },
      { label: "AdSense",        href: "/publisher-solutions/adsense-revenue-optimization" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about/our-mission" },
      { label: "Blog",     href: "/blog" },
      { label: "Careers",  href: "/apply" },
      { label: "Contact",  href: "/about/contact-us" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "Header Bidding",  href: "/publisher-solutions/header-bidding-solutions" },
      { label: "Google AdX",      href: "/publisher-solutions/google-adx-solutions" },
      { label: "AI Optimization", href: "/publisher-solutions/ai-ad-optimization" },
      { label: "Ad Formats",      href: "/ad-formats" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Revenue Calculator", href: "/revenue-calculator" },
      { label: "Success Stories",    href: "/resources/success-stories" },
      { label: "Monetization Guides", href: "/resources/monetization-guides" },
      { label: "Partner Program",    href: "/resources/publisher-referral-program" },
    ],
  },
] as const

export const LEGAL_LINKS = [
  { label: "Privacy Policy",   href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy",    href: "/cookies" },
] as const
