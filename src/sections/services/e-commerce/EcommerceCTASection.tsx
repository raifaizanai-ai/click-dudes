"use client"

import { motion } from "framer-motion"
import { ShoppingCart, TrendingUp, Star, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { CountUp } from "@/components/motion/CountUp"

const TRUST = ["500+ Stores Built", "2× Avg Revenue", "Shopify & WooCommerce", "30-Day Launch"]

const FLOAT_CARDS = [
  { label: "Monthly Revenue", value: 148, suffix: "K", prefix: "$", color: "text-brand-green",  delay: 0    },
  { label: "Conv. Rate",       value: 8.4, suffix: "%", prefix: "",  color: "text-brand-purple",   delay: 0.12 },
  { label: "Cart Recovery",    value: 28,  suffix: "%", prefix: "",  color: "text-brand-purple", delay: 0.24 },
]

export function EcommerceCTASection() {
  return (
    <Section background="navy" padding="xl" aria-label="E-commerce get started CTA">
      <Container>
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-[450px] h-[450px] rounded-full bg-brand-purple/[0.08] blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] rounded-full bg-brand-green/[0.06] blur-3xl" />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: content */}
          <motion.div initial={{ opacity: 0, x: -28 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-brand-purple/[0.10] mb-7">
              <ShoppingCart className="w-3.5 h-3.5 text-brand-green" aria-hidden="true" />
              <span className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">Ready to Scale?</span>
            </div>
            <h2 className="text-h1 font-bold text-text-primary tracking-heading text-balance mb-5">
              Build a Store That <span className="text-gradient-brand">Actually Converts</span>
            </h2>
            <p className="text-body-lg text-text-secondary leading-relaxed mb-8 text-pretty max-w-md">
              ClickDudes builds and optimises ecommerce stores that convert. From Shopify setup to full-stack growth strategy, we deliver measurable revenue results.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-brand-purple to-brand-blue text-white font-semibold text-[14px] hover:opacity-90 transition-opacity group">
                Scale My Online Store
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Link>
              <Link href="/about/contact-us"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-xl glass-dark border border-brand-purple/[0.14] text-text-secondary font-semibold text-[14px] hover:border-brand-purple/25 hover:text-text-primary transition-all">
                Talk to Our Team
              </Link>
            </div>
            <div className="flex flex-wrap gap-2">
              {TRUST.map((t) => (
                <span key={t} className="text-[10px] font-semibold px-3 py-1.5 rounded-full glass-dark border border-brand-purple/[0.10] text-text-muted">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: floating metric cards */}
          <motion.div initial={{ opacity: 0, x: 28 }} whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}
            className="flex flex-col gap-4">
            {FLOAT_CARDS.map(({ label, value, suffix, prefix, color, delay }) => (
              <motion.div key={label}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay }} viewport={{ once: true }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="glass-dark rounded-2xl p-5 border border-brand-purple/[0.08] flex items-center justify-between cursor-default transition-shadow duration-300 hover:shadow-[0_8px_24px_rgba(7,17,47,0.08)]">
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-xl bg-brand-purple/[0.06] border border-brand-purple/[0.08] flex items-center justify-center`}>
                    <TrendingUp className={`w-4 h-4 ${color}`} aria-hidden="true" />
                  </div>
                  <span className="text-[13px] text-text-secondary">{label}</span>
                </div>
                <span className={`text-[20px] font-bold tabular-nums ${color}`}>
                  {prefix}<CountUp end={value} decimals={value % 1 !== 0 ? 1 : 0} suffix={suffix} />
                </span>
              </motion.div>
            ))}
            <div className="glass-dark rounded-2xl p-5 border border-brand-purple/[0.09] flex items-center gap-3">
              <Star className="w-5 h-5 text-brand-purple shrink-0" aria-hidden="true" />
              <div>
                <p className="text-[13px] font-bold text-text-primary">500+ Stores Delivered</p>
                <p className="text-[11px] text-text-muted">Shopify & WooCommerce certified team</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  )
}
