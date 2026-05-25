export const STATS = {
  // Network scale
  publishers:          '250+',
  publishersLabel:     'Publishers in Network',
  countries:           '25+',
  countriesLabel:      'Publisher Countries',
  yearsOperating:      '5+',
  yearsOperatingLabel: 'Years of Publisher Monetization',
  demandPartners:      '50+',
  demandPartnersLabel: 'Premium Demand Sources',

  // Performance (ranges, not point estimates)
  rpmLift:      '+25–40%',
  rpmLiftLabel: 'Typical RPM Lift (first 90 days)',
  fillRate:      '90%+',
  fillRateLabel: 'Average Fill Rate',
  uptime:        '99.5%',
  uptimeLabel:   'Network Uptime',

  // Process
  goLive:            '7–14 Days',
  goLiveLabel:       'Average Go-Live Time',
  integration:       '3–7 Days',
  integrationLabel:  'Technical Integration',
  responseTime:      '24 Hours',
  responseTimeLabel: 'Response Time (business days)',

  // Partnership
  partnership:      'GCPP-Verified',
  partnershipLabel: 'Google MCM Partner',
  payoutTerms:      'Net-30',
  payoutTermsLabel: 'Monthly Payouts',
} as const

export type StatKey = keyof typeof STATS
