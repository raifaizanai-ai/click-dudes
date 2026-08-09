export interface DashboardScreenshot {
  src: string
  alt: string
}

const shot = (file: string, alt: string): DashboardScreenshot => ({
  src: `/partner-dashboard/${file}`,
  alt,
})

export const SCREENSHOTS = {
  signIn:          shot("01-sign-in.png",                  "Click Dudes partner portal sign-in screen"),
  dashboard:       shot("02-dashboard.png",                 "Partner dashboard overview showing commissions, publishers, and revenue"),
  submitPublisher: shot("03-submit-publisher.png",          "Submit publisher form in the partner dashboard"),
  eligibility:     shot("04-eligibility-requirements.png",  "Publisher eligibility and requirements checklist"),
  publishers:      shot("05-publishers.png",                "Publishers table showing status and stats"),
  payments:        shot("06-payments.png",                  "Payments screen showing balance and payout timeline"),
  agreements:      shot("07-my-agreements.png",              "Partner agreements list with status"),
  organization:    shot("08-organization.png",              "Organization profile and account settings"),
  announcements:   shot("09-announcements.png",             "Partner announcements feed"),
  notifications:   shot("10-notifications.png",             "Notifications center"),
  liveChat:        shot("11-live-chat.png",                 "Live chat support conversation"),
  support:         shot("12-support.png",                   "Support ticket view"),
  analytics:       shot("13-analytics.png",                 "Analytics dashboard showing performance metrics"),
} as const

export type ScreenshotKey = keyof typeof SCREENSHOTS

/** Every screenshot shares this intrinsic aspect ratio (~1700x1300). */
export const SCREENSHOT_ASPECT = "1700/1300"
