import type { Metadata } from "next"
import type { AdFormatItem } from "@/types/ad-formats"
import { AdFormatHero } from "@/sections/ad-formats/AdFormatHero"
import { AdFormatSlider } from "@/components/ad-formats/AdFormatSlider"
import { AdFormatCTV } from "@/sections/ad-formats/AdFormatCTV"
import { AdFormatComparison } from "@/components/ad-formats/AdFormatComparison"
import { AIFormatOptimization } from "@/components/ad-formats/AIFormatOptimization"
import { FinalCTASection } from "@/components/marketing/FinalCTASection"
import { GradientText } from "@/components/shared/GradientText"

export const metadata: Metadata = {
  title: "Ad Formats — Click Dudes | Turning Clicks Into Revenue",
  description: "Premium web, mobile, app, and CTV ad formats managed by Click Dudes. Leaderboard, native, sticky, video, interstitial, rewarded, and CTV formats optimized by AI.",
  openGraph: {
    title: "Ad Formats — Click Dudes",
    description: "14+ premium ad formats for every screen, web, mobile, app, and CTV.",
    url: "https://clickdudes.com/ad-formats",
    siteName: "Click Dudes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ad Formats — Click Dudes",
    description: "14+ premium ad formats for every screen, web, mobile, app, and CTV.",
  },
  alternates: { canonical: "https://clickdudes.com/ad-formats" },
}

const DESKTOP_FORMATS: AdFormatItem[] = [
  {
    id: "leaderboard", name: "Leaderboard Ad", size: "728×90",
    description: "Top-of-page banner with strong visibility and consistent demand. One of the most universally supported formats across all ad networks.",
    bestFor: "News sites, blogs, content publishers",
    rpmPotential: "High", viewability: "High", uxImpact: "Minimal", adPosition: "top-banner",
  },
  {
    id: "billboard", name: "Billboard Ad", size: "970×250",
    description: "Large premium display unit designed for high-impact brand campaigns. Commands premium CPMs from brand advertisers seeking maximum attention.",
    bestFor: "Premium publishers, brand-safety inventory",
    rpmPotential: "Premium", viewability: "Very High", uxImpact: "Moderate", adPosition: "billboard",
  },
  {
    id: "mrec", name: "Medium Rectangle", size: "300×250",
    description: "Flexible ad unit for sidebar and in-content monetization. The most widely demanded format across all DSPs with consistently high fill rates.",
    bestFor: "Sidebars, in-content placements, all verticals",
    rpmPotential: "High", viewability: "High", uxImpact: "Minimal", adPosition: "sidebar",
  },
  {
    id: "half-page", name: "Half Page Ad", size: "300×600",
    description: "Tall high-viewability unit ideal for premium desktop inventory. Double the height of the Medium Rectangle means stronger brand presence and higher CPMs.",
    bestFor: "Long-form content, finance, technology sites",
    rpmPotential: "Premium", viewability: "Very High", uxImpact: "Minimal", adPosition: "half-page",
  },
  {
    id: "sticky-sidebar", name: "Sticky Sidebar Ad",
    description: "Persistent sidebar placement that stays visible while users scroll. Continuous viewability throughout the session drives consistently high active view rates.",
    bestFor: "Desktop content sites with long scroll depth",
    rpmPotential: "Premium", viewability: "Very High", uxImpact: "Minimal", adPosition: "sticky-sidebar",
  },
  {
    id: "in-content", name: "In-Content Ad",
    description: "Native-feeling placement inserted naturally between article content. Readers are engaged in the content flow, higher attention and CTR than sidebar units.",
    bestFor: "Articles, editorial content, review sites",
    rpmPotential: "High", viewability: "High", uxImpact: "Minimal", adPosition: "in-content",
  },
  {
    id: "video-display", name: "Video Display Ad",
    description: "Rich video placement embedded within page content for higher CPM and brand engagement. Outstream video doesn't require existing video content.",
    bestFor: "High-traffic content sites, editorial publishers",
    rpmPotential: "Premium", viewability: "Very High", uxImpact: "Moderate", adPosition: "video-display",
  },
]

const MOBILE_FORMATS: AdFormatItem[] = [
  {
    id: "mobile-banner", name: "Mobile Banner", size: "320×50",
    description: "Lightweight mobile banner for consistent fill and clean UX. The most universally supported mobile format, always-on demand from all major DSPs.",
    bestFor: "All mobile sites and apps",
    rpmPotential: "Standard", viewability: "Good", uxImpact: "Minimal", adPosition: "mobile-banner",
  },
  {
    id: "mobile-sticky", name: "Mobile Sticky Ad",
    description: "Bottom sticky placement that remains fixed while users scroll. Persistent visibility throughout the session drives strong viewability rates and consistent CPMs.",
    bestFor: "Mobile content sites, news apps, blogs",
    rpmPotential: "High", viewability: "Very High", uxImpact: "Minimal", adPosition: "mobile-sticky",
  },
  {
    id: "interstitial", name: "Interstitial Ad",
    description: "Full-screen ad experience shown at natural transition moments, page loads, level completions, or article breaks. Highest mobile CPMs when placed correctly.",
    bestFor: "Apps, games, multi-page mobile content",
    rpmPotential: "Premium", viewability: "Very High", uxImpact: "Noticeable", adPosition: "interstitial",
  },
  {
    id: "native-mobile", name: "Native Mobile Ad",
    description: "Content-style ad placement that blends naturally into mobile feeds. Matches your app or site's visual language, higher CTR with lower UX friction.",
    bestFor: "Feed-based apps, lifestyle content, news",
    rpmPotential: "High", viewability: "High", uxImpact: "Minimal", adPosition: "native-mobile",
  },
  {
    id: "in-article", name: "In-Article Ad",
    description: "Placed inside article content for high engagement and better RPM. Readers are in active reading mode, attention levels are higher than sidebar placements.",
    bestFor: "Mobile editorial sites, long-form content",
    rpmPotential: "High", viewability: "High", uxImpact: "Minimal", adPosition: "in-article",
  },
  {
    id: "rewarded", name: "Rewarded Ad",
    description: "User-initiated ad experience ideal for apps and engagement-based monetization. Users opt in to watch in exchange for in-app rewards, highest completion rates.",
    bestFor: "Gaming apps, productivity apps, freemium content",
    rpmPotential: "Premium", viewability: "Very High", uxImpact: "Minimal", adPosition: "rewarded",
  },
  {
    id: "mobile-video", name: "Mobile Video Ad",
    description: "High-value video placement optimized for mobile screens. Outstream video on mobile delivers 3–5× higher CPMs than display banners with minimal setup.",
    bestFor: "Mobile editorial, lifestyle, and sports content",
    rpmPotential: "Premium", viewability: "Very High", uxImpact: "Moderate", adPosition: "mobile-video",
  },
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home",       item: "https://clickdudes.com" },
    { "@type": "ListItem", position: 2, name: "Ad Formats", item: "https://clickdudes.com/ad-formats" },
  ],
}

export default function AdFormatsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <AdFormatHero />

      <div id="desktop-formats">
        <AdFormatSlider
          badge="Desktop Formats"
          heading={<>Desktop<br /><GradientText gradient="brand">Ad Formats</GradientText></>}
          subtext="High-impact placements built for larger screens: maximum visibility, premium demand competition, and consistently strong CPMs across all verticals."
          formats={DESKTOP_FORMATS}
          variant="desktop"
          background="section"
        />
      </div>

      <AdFormatSlider
        badge="Mobile Formats"
        heading={<>Mobile<br /><GradientText gradient="violet">Ad Formats</GradientText></>}
        subtext="Seamless mobile-first placements designed to monetize scrolling behavior without damaging user experience or Core Web Vitals scores."
        formats={MOBILE_FORMATS}
        variant="mobile"
        background="base"
      />

      <AdFormatCTV />
      <AdFormatComparison />
      <AIFormatOptimization />
      <FinalCTASection />
    </>
  )
}
