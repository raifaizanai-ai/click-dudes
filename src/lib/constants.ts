import { Globe, Smartphone, Tv2, BarChart3, Layers, BrainCircuit, TrendingUp, Star, HelpCircle, BookOpen, BarChart2, Gift, Target, Compass, Users, Mail, History, ShoppingCart, Code2, Palette, Share2, User2, Megaphone, Search, LineChart } from "lucide-react"
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
    megaMenuFooterText: "1,200+ publishers trust Click Dudes — GCPP Certified",
    megaMenuCTALabel:   "Apply for monetization",
    megaMenuCTAHref:    "/apply",
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
  {
    label:            "Services",
    href:             "/services",
    megaMenu:         true,
    megaMenuTitle:      "Digital Services",
    megaMenuSub:        "Full-service agency solutions for brands that want to grow",
    megaMenuFooterText: "Trusted by 500+ businesses worldwide",
    megaMenuCTALabel:   "View All Services",
    megaMenuCTAHref:    "/services",
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
    label:              "About Us",
    href:               "/about",
    megaMenu:           true,
    megaMenuTitle:      "About Click Dudes",
    megaMenuSub:        "The team turning publisher clicks into revenue",
    megaMenuFooterText: "GCPP Certified · London, United Kingdom",
    megaMenuCTALabel:   "Contact our team",
    megaMenuCTAHref:    "/about/contact-us",
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
  { label: "Twitter",  href: "https://twitter.com/Click Dudes" },
  { label: "LinkedIn", href: "https://linkedin.com/company/Click Dudes" },
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
    heading: "Services",
    links: [
      { label: "E-Commerce",         href: "/services/e-commerce" },
      { label: "Web Development",    href: "/services/web-development" },
      { label: "Meta Ads",           href: "/services/meta-ads" },
      { label: "SEO Services",       href: "/services/seo-services" },
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
