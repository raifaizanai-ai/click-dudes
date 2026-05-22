"use client"

import { gsap, ScrollTrigger } from "@/lib/gsap"

/** Create a counting tween — call inside useGSAP callback */
export function createCountUp(
  element: HTMLElement,
  end: number,
  options: {
    duration?: number
    decimals?: number
    prefix?: string
    suffix?: string
    ease?: string
  } = {}
): gsap.core.Tween {
  const { duration = 2, decimals = 0, prefix = "", suffix = "", ease = "power2.out" } = options
  const obj = { value: 0 }
  return gsap.to(obj, {
    value: end,
    duration,
    ease,
    onUpdate() {
      element.textContent = prefix + obj.value.toFixed(decimals) + suffix
    },
  })
}

/** Animate an SVG path drawing in — call inside useGSAP callback */
export function createDrawPath(
  path: SVGPathElement,
  options: { duration?: number; ease?: string; delay?: number } = {}
): gsap.core.Tween {
  const { duration = 1.5, ease = "power2.inOut", delay = 0 } = options
  const length = path.getTotalLength()
  gsap.set(path, { strokeDasharray: length, strokeDashoffset: length })
  return gsap.to(path, { strokeDashoffset: 0, duration, ease, delay })
}

/** Pin a section during scroll — call inside useGSAP callback */
export function createPinnedSection(
  trigger: HTMLElement,
  options: {
    endDistance?: string
    scrub?: number | boolean
    start?: string
  } = {}
): ScrollTrigger {
  const { endDistance = "200%", scrub = 1, start = "top top" } = options
  return ScrollTrigger.create({
    trigger,
    pin: true,
    scrub,
    start,
    end: `+=${endDistance}`,
  })
}

/** Stagger animate elements into view — call inside useGSAP callback */
export function createStaggerReveal(
  elements: Element[],
  options: {
    y?: number
    duration?: number
    stagger?: number
    delay?: number
    ease?: string
    trigger?: Element | string
  } = {}
): gsap.core.Tween {
  const {
    y = 32,
    duration = 0.7,
    stagger = 0.08,
    delay = 0,
    ease = "power3.out",
    trigger,
  } = options

  gsap.set(elements, { opacity: 0, y })

  const tweenConfig: gsap.TweenVars = {
    opacity: 1,
    y: 0,
    duration,
    stagger,
    delay,
    ease,
  }

  if (trigger) {
    tweenConfig.scrollTrigger = {
      trigger,
      start: "top 85%",
      once: true,
    }
  }

  return gsap.to(elements, tweenConfig)
}
