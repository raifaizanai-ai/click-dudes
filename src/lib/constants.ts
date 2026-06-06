import { Globe, Smartphone, Tv2, BarChart3, Layers, BrainCircuit, TrendingUp, Star, HelpCircle, BookOpen, BarChart2, Gift, Target, Compass, Users, Mail, History, ShoppingCart, Code2, Palette, Share2, User2, Megaphone, Search, LineChart, ClipboardCheck, Shield, Zap } from "lucide-react"
import type { NavLink } from "@/types"

export const SITE = {
  name:        "Click Dudes",
  tagline:     "Turning Clicks Into Revenue",
  description: "Click Dudes is an AI-powered monetization, advertising, SEO, and publisher growth platform helping websites, apps, brands, and CTV publishers scale traffic, engagement, and revenue through intelligent digital growth solutions.",
  url:         "https://clickdudes.com",
  email:       "contact@clickdudes.com",
  twitter:     "@clickdudes",
} as const

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label:              "Publisher Solutions",
    href:               "/publishers",
    megaMenu:           true,
    megaMenuTitle:      "Publisher Solutions",
    megaMenuSub:        "AI-powered revenue tools for every publisher type",
    megaMenuFooterText: "250+ publishers trust Click Dudes — GCPP Certified",
    megaMenuCTALabel:   "Check Your Eligibility",
    megaMenuCTAHref:    "/publisher-solutions/monetization-eligibility-criteria",
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
      {
        label:       "Monetization Eligibility Criteria",
        href:        "/publisher-solutions/monetization-eligibility-criteria",
        description: "Check if your site, app, or CTV platform qualifies for premium monetization",
        icon:        ClipboardCheck,
      },
    ],
  },
  {
    label:            "Services",
    href:             "/services",
    megaMenu:         true,
    megaMenuTitle:      "Digital Services",
    megaMenuSub:        "Full-service agency solutions for brands that want to grow",
    megaMenuFooterText: "Trusted by 500+ businesses worldwide",
    megaMenuCTALabel:   "Contact Us for Services",
    megaMenuCTAHref:    "/about/contact-us",
    children: [
      {
        label:       "E-Commerce",
        href:        "/services/e-commerce",
        description: "Build, optimize, and scale online stores that convert",
        icon:        ShoppingCart,
      },
      {
        label:       "Web Development",
        href:        "/services/web-development",
        description: "Shopify, WordPress, full-stack & custom websites",
        icon:        Code2,
      },
      {
        label:       "Graphic Designing",
        href:        "/services/graphic-designing",
        description: "Social media content, brand visuals & ad creatives",
        icon:        Palette,
      },
      {
        label:       "Social Media Management",
        href:        "/services/social-media-management",
        description: "Content planning, posting, engagement & growth",
        icon:        Share2,
      },
      {
        label:       "Personal Social Account Management",
        href:        "/services/personal-social-account-management",
        description: "Personal brand building for founders & creators",
        icon:        User2,
      },
      {
        label:       "Meta Ads",
        href:        "/services/meta-ads",
        description: "Facebook & Instagram ads for leads and conversions",
        icon:        Megaphone,
      },
      {
        label:       "Google Ads",
        href:        "/services/google-ads",
        description: "Search, display & YouTube performance campaigns",
        icon:        Search,
      },
      {
        label:       "SEO Services",
        href:        "/services/seo-services",
        description: "Technical, on-page, off-page & ecommerce SEO",
        icon:        LineChart,
      },
    ],
  },
  { label: "Ad Formats",          href: "/ad-formats" },
  {
    label:              "Resources",
    href:               "/resources",
    megaMenu:           true,
    megaMenuTitle:      "Resources & Guides",
    megaMenuSub:        "Everything you need to grow your publisher revenue",
    megaMenuFooterText: "Free tools, calculators, and expert guides",
    megaMenuCTALabel:   "Try Revenue Calculator",
    megaMenuCTAHref:    "/revenue-calculator",
    children: [
      { label: "Resources Hub",              href: "/resources",                          description: "All guides, tools, and knowledge in one place",  icon: BookOpen   },
      { label: "Success Stories",            href: "/resources/success-stories",          description: "Real publisher results and case studies",        icon: Star       },
      { label: "Monetization Guides",        href: "/resources/monetization-guides",      description: "In-depth guides for every publisher type",       icon: BookOpen   },
      { label: "FAQs",                       href: "/resources/faqs",                     description: "Answers to common monetization questions",       icon: HelpCircle },
      { label: "Google AdX Requirements",    href: "/resources/google-adx-requirements",  description: "Traffic, content & policy requirements for AdX", icon: BarChart2  },
      { label: "Header Bidding Guide",       href: "/resources/header-bidding-guide",     description: "How header bidding works and delivers +20–40% RPM", icon: Zap     },
      { label: "Google Policy Checklist",    href: "/resources/google-publisher-policy-checklist", description: "Stay compliant with Google Publisher Policies", icon: Shield },
      { label: "Publisher Referral Program", href: "/resources/publisher-referral-program", description: "Earn commissions by referring publishers",    icon: Gift       },
    ],
  },
  { label: "Revenue Calculator", href: "/revenue-calculator" },
  { label: "Blog",               href: "/blog" },
  {
    label:              "About Us",
    href:               "/about",
    megaMenu:           true,
    megaMenuTitle:      "About Click Dudes",
    megaMenuSub:        "The team turning publisher clicks into revenue",
    megaMenuFooterText: "GCPP Certified · London, United Kingdom",
    megaMenuCTALabel:   "Meet the Team",
    megaMenuCTAHref:    "/about/our-team",
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
  { label: "X",        href: "https://x.com/ClickDudes" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/clickdudes" },
  { label: "Facebook", href: "https://facebook.com/ClickDudesOfficial" },
] as const

export const FOOTER_COLUMNS = [
  {
    heading: "Solutions",
    links: [
      { label: "Web Monetization",   href: "/publisher-solutions/web-monetization" },
      { label: "App Monetization",   href: "/publisher-solutions/app-monetization" },
      { label: "CTV Monetization",   href: "/publisher-solutions/ctv-monetization" },
      { label: "Google AdX",         href: "/publisher-solutions/google-adx-solutions" },
      { label: "Header Bidding",     href: "/publisher-solutions/header-bidding-solutions" },
      { label: "AI Optimization",    href: "/publisher-solutions/ai-ad-optimization" },
      { label: "Eligibility Criteria",href: "/publisher-solutions/monetization-eligibility-criteria" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "SEO Services",    href: "/services/seo-services" },
      { label: "Google Ads",      href: "/services/google-ads" },
      { label: "Meta Ads",        href: "/services/meta-ads" },
      { label: "Web Development", href: "/services/web-development" },
      { label: "Social Media",    href: "/services/social-media-management" },
      { label: "E-Commerce",      href: "/services/e-commerce" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Resources Hub",          href: "/resources" },
      { label: "Revenue Calculator",     href: "/revenue-calculator" },
      { label: "Monetization Guides",    href: "/resources/monetization-guides" },
      { label: "Google AdX Guide",       href: "/resources/google-adx-requirements" },
      { label: "Publisher Referral",     href: "/resources/publisher-referral-program" },
      { label: "FAQs",                   href: "/resources/faqs" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Our History", href: "/about/our-history" },
      { label: "Mission",     href: "/about/our-mission" },
      { label: "Vision",      href: "/about/our-vision" },
      { label: "Our Team",    href: "/about/our-team" },
      { label: "Contact Us",  href: "/about/contact-us" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "AI Revenue Engine",    href: "/publisher-solutions/ai-ad-optimization" },
      { label: "Google AdX",           href: "/publisher-solutions/google-adx-solutions" },
      { label: "Header Bidding",       href: "/publisher-solutions/header-bidding-solutions" },
      { label: "Revenue Optimization", href: "/resources/rpm-optimization" },
      { label: "Ad Formats",           href: "/ad-formats" },
    ],
  },
] as const

export const LEGAL_LINKS = [
  { label: "Privacy Policy",   href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy",    href: "/cookies" },
] as const
