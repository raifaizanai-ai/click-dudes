"use client"

import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Zap } from "lucide-react"
import { cn } from "@/lib/utils"

type EventColor = "purple" | "cyan" | "green"

interface ActivityEvent {
  id: string
  text: string
  color: EventColor
  time: string
}

const EVENT_POOL: { text: string; color: EventColor }[] = [
  { text: "Floor price optimized for US traffic",         color: "purple" },
  { text: "New demand partner connected",                 color: "cyan"   },
  { text: "AI RPM recalibration completed",               color: "green"  },
  { text: "Header bidding timeout adjusted to 680ms",     color: "purple" },
  { text: "Viewability issue on leaderboard corrected",   color: "cyan"   },
  { text: "Ad density optimized for mobile",              color: "purple" },
  { text: "CTV inventory synced with DV360",              color: "cyan"   },
  { text: "Premium PMP deal activated",                   color: "green"  },
  { text: "Revenue anomaly detected & resolved",          color: "purple" },
  { text: "Smart layout A/B test deployed",               color: "cyan"   },
  { text: "Viewability floor raised to 72%",              color: "green"  },
  { text: "Lazy-load latency reduced by 40ms",            color: "purple" },
]

const colorClass: Record<EventColor, string> = {
  purple: "text-brand-purple",
  cyan:   "text-brand-purple",
  green:  "text-brand-green",
}

const INITIAL: ActivityEvent[] = [
  { id: "a", text: "Floor price optimized for US traffic",     color: "purple", time: "2s ago"  },
  { id: "b", text: "Header bidding timeout adjusted to 680ms", color: "purple", time: "22s ago" },
  { id: "c", text: "New demand partner connected",              color: "cyan",   time: "1m ago"  },
]

let uidCounter = 100

export function DashboardActivityFeed() {
  const [events, setEvents] = useState<ActivityEvent[]>(INITIAL)
  const containerRef = useRef<HTMLDivElement>(null)
  const isVisibleRef = useRef(false)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { isVisibleRef.current = entry.isIntersecting },
      { threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const usedTexts = new Set(INITIAL.map((e) => e.text))

    const interval = setInterval(() => {
      if (!isVisibleRef.current) return

      setEvents((prev) => {
        const currentTexts = new Set(prev.map((e) => e.text))
        const candidates = EVENT_POOL.filter((e) => !currentTexts.has(e.text))
        if (candidates.length === 0) return prev

        const pick = candidates[Math.floor(Math.random() * candidates.length)]
        usedTexts.add(pick.text)

        const fresh: ActivityEvent = {
          id: String(++uidCounter),
          text: pick.text,
          color: pick.color,
          time: "just now",
        }

        return [...prev.slice(1), fresh]
      })
    }, 3800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div ref={containerRef} className="space-y-2 overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
        {events.map((event) => (
          <motion.div
            key={event.id}
            layout
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-start gap-2"
          >
            <Zap
              aria-hidden="true"
              className={cn("w-3 h-3 mt-0.5 flex-shrink-0", colorClass[event.color])}
            />
            <p className="text-[11px] text-text-secondary flex-1 leading-snug">{event.text}</p>
            <span className="text-[10px] text-text-muted whitespace-nowrap tabular-nums">
              {event.time}
            </span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
