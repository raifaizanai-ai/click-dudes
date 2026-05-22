import type { Metadata } from "next"
import { SITE } from "@/lib/constants"

interface PageMetadataOptions {
  title: string
  description?: string
  path?: string
  image?: string
}

export function generatePageMetadata({
  title,
  description = SITE.description,
  path = "",
  image = "/og/default.png",
}: PageMetadataOptions): Metadata {
  const url = `${SITE.url}${path}`

  return {
    title: `${title} — ${SITE.name} | ${SITE.tagline}`,
    description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      title: `${title} — ${SITE.name}`,
      description,
      url,
      siteName: SITE.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} — ${SITE.name}`,
      description,
      images: [image],
      creator: SITE.twitter,
    },
  }
}
