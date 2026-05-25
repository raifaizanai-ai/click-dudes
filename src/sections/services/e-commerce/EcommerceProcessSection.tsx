"use client"

import { motion } from "framer-motion"
import { Search, Palette, Package, TrendingUp, ArrowRight } from "lucide-react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"

const STAGES = [
  {
    icon: Search, num: "01", title: "Store Audit & Strategy",
    body: "We analyse your store, traffic patterns, and conversion data to uncover the highest-value growth opportunities.",
    time: "Day 1–3", color: "text-brand-purple", bg: "bg-brand-purple/[0.08]", border: "border-brand-purple/[0.15]",
    bar: "from-brand-purple to-brand-violet",
  },
  {
    icon: Palette, num: "02", title: "Platform Design & Build",
    body: "Full store build or migration on Shopify or WooCommerce with conversion-first UX and branded design.",
    time: "Week 1–2", color: "text-brand-blue", bg: "bg-brand-blue/[0.08]", border: "border-brand-blue/[0.15]",
    bar: "from-brand-blue to-brand-cyan",
  },
  {
    icon: Package, num: "03", title: "Product & Content Setup",
    body: "Listings, copy, images, A+ content, and category structure fully optimised for maximum conversions.",
    time: "Week 2–3", color: "text-brand-purple", bg: "bg-brand-cyan/[0.08]", border: "border-brand-cyan/[0.15]",
    bar: "from-brand-cyan to-brand-blue",
  },
  {
    icon: TrendingUp, num: "04", title: "Launch & Continuous Growth",
    body: "We go live, monitor every metric, and continuously optimise for higher revenue month over month.",
    time: "Week 3+", color: "text-brand-green", bg: "bg-brand-green/[0.08]", border: "border-brand-green/[0.15]",
    bar: "from-brand-green to-brand-cyan",
  },
]

export function EcommerceProcessSection() {
  return (
    <Section background="white" padding="xl" aria-label="E-commerce build process">
      <Container>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-60 rounded-full bg-brand-purple/[0.04] blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-purple/[0.07] border border-brand-purple/[0.12] mb-6">
            <TrendingUp className="w-3.5 h-3.5 text-brand-purple" aria-hidden="true" />
            <span className="text-label font-semibold text-brand-purple">Launch Roadmap</span>
          </div>
          <h2 className="text-h2 font-bold text-text-primary tracking-heading text-balance mb-4">
            From Brief to <span className="text-gradient-brand">Revenue in Weeks</span>
          </h2>
          <p className="text-body text-text-muted max-w-xl mx-auto">
            A structured launch process that gets your store live fast and optimised for conversion from day one.
          </p>
        </div>

        {/* Horizontal pipeline */}
        <div className="relative">
          {/* Connecting progress line */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-purple/30 via-brand-cyan/40 to-brand-green/30" aria-hidden="true" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {STAGES.map(({ icon: Icon, num, title, body, time, color, bg, border, bar }, i) => (
              <motion.div key={num}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="relative flex flex-col">
                {/* Step icon bubble */}
                <div className={`w-14 h-14 rounded-2xl ${bg} border ${border} flex items-center justify-center mb-5 mx-auto lg:mx-0 shadow-sm relative z-10`}>
                  <Icon className={`w-6 h-6 ${color}`} aria-hidden="true" />
                </div>
                {/* Card */}
                <div className={`flex-1 glass rounded-2xl p-5 border ${border} group hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] transition-shadow duration-300`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[11px] font-black ${color} opacity-60`}>{num}</span>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full ${bg} border ${border} ${color}`}>{time}</span>
                  </div>
                  <p className="text-[14px] font-bold text-text-primary mb-2 leading-snug">{title}</p>
                  <p className="text-[12px] text-text-muted leading-relaxed">{body}</p>
                  <div className={`mt-4 h-1 rounded-full bg-gradient-to-r ${bar} opacity-50`} />
                </div>
                {/* Arrow connector (mobile) */}
                {i < STAGES.length - 1 && (
                  <div className="flex justify-center mt-4 lg:hidden">
                    <ArrowRight className="w-4 h-4 text-text-muted/40 rotate-90" aria-hidden="true" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}
