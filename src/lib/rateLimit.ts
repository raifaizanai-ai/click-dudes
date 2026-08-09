interface Bucket {
  count: number
  resetAt: number
}

/**
 * Best-effort in-memory rate limiter. Resets on cold start / redeploy and is
 * per-instance only — fine for abuse deterrence on a single Next.js server,
 * but a horizontally-scaled deployment should back this with Upstash Redis
 * or Vercel KV for a shared counter across instances.
 */
const buckets = new Map<string, Bucket>()

export interface RateLimitResult {
  allowed: boolean
  retryAfterSeconds?: number
}

export function checkRateLimit(key: string, limit: number, windowMs: number): RateLimitResult {
  const now = Date.now()
  const existing = buckets.get(key)

  if (!existing || existing.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs })
    return { allowed: true }
  }

  if (existing.count >= limit) {
    return { allowed: false, retryAfterSeconds: Math.ceil((existing.resetAt - now) / 1000) }
  }

  existing.count += 1
  return { allowed: true }
}
