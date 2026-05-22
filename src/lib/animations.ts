import type { Variants } from "framer-motion"

/* ─── Easing ─────────────────────────────────────────────────────────────── */

export const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const
export const EASE_OUT_QUAD = [0.25, 0.46, 0.45, 0.94] as const

/* ─── Entrance Variants ──────────────────────────────────────────────────── */

export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: EASE_OUT_QUAD } },
}

export const fadeLeft: Variants = {
  hidden:  { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
}

export const fadeRight: Variants = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE_OUT_EXPO } },
}

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: EASE_OUT_EXPO } },
}

/* ─── Stagger Containers ─────────────────────────────────────────────────── */

export const staggerContainer: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
}

export const staggerContainerFast: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
}

/* ─── Hover States ───────────────────────────────────────────────────────── */

export const cardHover = {
  rest:  { y: 0,  transition: { duration: 0.3, ease: EASE_OUT_QUAD } },
  hover: { y: -4, transition: { duration: 0.3, ease: EASE_OUT_QUAD } },
}

export const buttonHover = {
  rest:  { scale: 1,    transition: { duration: 0.2 } },
  hover: { scale: 1.02, transition: { duration: 0.2 } },
  tap:   { scale: 0.98, transition: { duration: 0.1 } },
}

/* ─── Viewport Config ────────────────────────────────────────────────────── */

export const VIEWPORT_ONCE = { once: true, margin: "-80px" } as const
