import type { LucideIcon } from "lucide-react"
import {
  Globe, Smartphone, Tv2, BarChart3, Layers, BrainCircuit,
  Code2, LineChart, ShoppingCart, Megaphone, Search, Users, Palette,
} from "lucide-react"

export interface TestimonialItem {
  id: string
  category: string
  service: string
  client: string
  role: string
  quote: string
  metric: string
  metricLabel: string
  initials: string
  icon: LucideIcon
  hexColor: string
  dotColor: "purple" | "blue" | "cyan" | "green"
  bars: number[]
}

const B1 = [28, 36, 44, 52, 56, 66, 72, 82, 92, 100]
const B2 = [40, 32, 50, 44, 62, 58, 74, 80, 88, 100]
const B3 = [22, 34, 28, 46, 40, 58, 66, 78, 88, 100]
const B4 = [30, 44, 38, 56, 50, 68, 62, 80, 90, 100]
const B5 = [18, 28, 36, 48, 44, 62, 70, 84, 92, 100]

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "web-pub", category: "Web Publisher", service: "Web Monetization",
    client: "James R.", role: "CTO · TechReview Daily",
    quote: "RPM jumped 47% in the first 30 days. The AI floor optimization is genuinely game-changing for our news site.",
    metric: "+47%", metricLabel: "RPM Lift",
    initials: "JR", icon: Globe, hexColor: "#8B5CF6", dotColor: "purple", bars: B1,
  },
  {
    id: "app-pub", category: "App Publisher", service: "App Monetization",
    client: "Aisha P.", role: "CEO · GameZone Studios",
    quote: "Our eCPM went from $6 to $18 in 60 days. The mediation setup and waterfall optimization was flawless.",
    metric: "+80–120%", metricLabel: "eCPM Growth",
    initials: "AP", icon: Smartphone, hexColor: "#A855F7", dotColor: "purple", bars: B2,
  },
  {
    id: "ctv-pub", category: "CTV Publisher", service: "CTV Monetization",
    client: "Sarah N.", role: "VP Revenue · StreamVault Media",
    quote: "Connected TV CPMs hit $32 average. Click Dudes brought premium demand access we simply never had before.",
    metric: "+52%", metricLabel: "CPM Uplift",
    initials: "SN", icon: Tv2, hexColor: "#60A5FA", dotColor: "blue", bars: B3,
  },
  {
    id: "adx", category: "Google AdX", service: "AdX Solutions",
    client: "David L.", role: "Publisher · MediaPulse Network",
    quote: "AdX access tripled our programmatic revenue. The setup was live in under 72 hours — incredible team.",
    metric: "+38%", metricLabel: "Revenue Lift",
    initials: "DL", icon: BarChart3, hexColor: "#10B981", dotColor: "green", bars: B4,
  },
  {
    id: "hb", category: "Header Bidding", service: "Header Bidding Solutions",
    client: "Rachel K.", role: "Head of Ad Ops · ContentGiant",
    quote: "21 demand partners in one unified auction. Fill rate went from 74% to 96% — almost overnight.",
    metric: "+29%", metricLabel: "Fill Rate",
    initials: "RK", icon: Layers, hexColor: "#8B5CF6", dotColor: "purple", bars: B5,
  },
  {
    id: "ai-opt", category: "AI Optimization", service: "AI Ad Optimization",
    client: "Michael K.", role: "Founder · FinanceHub Pro",
    quote: "The AI adjusted 847 floor configs this week alone. Revenue is up 41% vs our old manual floor strategy.",
    metric: "+41%", metricLabel: "Yield Increase",
    initials: "MK", icon: BrainCircuit, hexColor: "#A855F7", dotColor: "purple", bars: B1,
  },
  {
    id: "web-mon", category: "Web Monetization", service: "Premium Web Monetization",
    client: "Priya S.", role: "Editor · LifestylePro Magazine",
    quote: "Page RPM went from $4 to $14 in 90 days. The premium demand partners made all the difference.",
    metric: "$14.2", metricLabel: "Page RPM",
    initials: "PS", icon: Globe, hexColor: "#60A5FA", dotColor: "blue", bars: B2,
  },
  {
    id: "app-mon", category: "App Monetization", service: "In-App Monetization",
    client: "Tom W.", role: "CTO · FitTrack Health",
    quote: "ARPDAU jumped 3.2× after the rewarded video optimization. Best investment we made in our ad stack.",
    metric: "+35%", metricLabel: "ARPDAU Lift",
    initials: "TW", icon: Smartphone, hexColor: "#10B981", dotColor: "green", bars: B3,
  },
  {
    id: "web-dev", category: "Web Development", service: "Web Development",
    client: "Lisa M.", role: "Founder · Bloom Boutique",
    quote: "Our Shopify store now loads in under 1.8s. Conversions are up 88% since the complete redesign.",
    metric: "+88%", metricLabel: "Conversions",
    initials: "LM", icon: Code2, hexColor: "#8B5CF6", dotColor: "purple", bars: B4,
  },
  {
    id: "seo", category: "SEO Services", service: "SEO & Search Growth",
    client: "Carlos G.", role: "Director · LocalBiz Pro",
    quote: "Organic traffic grew 180% in 6 months. We're ranking page 1 for over 340 competitive keywords now.",
    metric: "+180%", metricLabel: "Organic Traffic",
    initials: "CG", icon: LineChart, hexColor: "#A855F7", dotColor: "purple", bars: B5,
  },
  {
    id: "ecom", category: "E-Commerce", service: "E-Commerce Solutions",
    client: "Nina J.", role: "CMO · FashionForward",
    quote: "Our store revenue tripled in Q4. The UX optimization and full-funnel ad integration was seamless.",
    metric: "+100–200%", metricLabel: "ROAS",
    initials: "NJ", icon: ShoppingCart, hexColor: "#60A5FA", dotColor: "blue", bars: B1,
  },
  {
    id: "meta", category: "Meta Ads", service: "Meta Advertising",
    client: "Ryan B.", role: "Founder · DTC Essentials",
    quote: "ROAS went from 1.8× to 4.6× in 8 weeks. The creative strategy and audience targeting was elite.",
    metric: "4.6×", metricLabel: "ROAS Achieved",
    initials: "RB", icon: Megaphone, hexColor: "#10B981", dotColor: "green", bars: B2,
  },
  {
    id: "google-ads", category: "Google Ads", service: "Google Advertising",
    client: "Emma T.", role: "VP Sales · SaasPlatform",
    quote: "Lead cost dropped 64% while quality improved. Our pipeline grew 290% in just three months.",
    metric: "+150–250%", metricLabel: "Pipeline Growth",
    initials: "ET", icon: Search, hexColor: "#8B5CF6", dotColor: "purple", bars: B3,
  },
  {
    id: "social", category: "Social Media", service: "Social Media Management",
    client: "Marco D.", role: "Owner · La Piazza Dining",
    quote: "From 2K to 110K followers in one year. Every post now drives real, measurable restaurant bookings.",
    metric: "+200–400%", metricLabel: "Follower Growth",
    initials: "MD", icon: Users, hexColor: "#A855F7", dotColor: "purple", bars: B4,
  },
  {
    id: "design", category: "Graphic Design", service: "Graphic Designing",
    client: "Amy C.", role: "CEO · BrandCraft Agency",
    quote: "The visual brand overhaul transformed our client retention to 92%. The creative work is world-class.",
    metric: "92%", metricLabel: "Client Retention",
    initials: "AC", icon: Palette, hexColor: "#60A5FA", dotColor: "blue", bars: B5,
  },
]
