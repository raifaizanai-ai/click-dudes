import { ResourcesHeroSection } from "@/sections/resources/ResourcesHeroSection"
import { ResourcesInteractive } from "@/sections/resources/ResourcesInteractive"
import { ResourcesToolkit } from "@/sections/resources/ResourcesToolkit"
import { ResourcesHubCTA } from "@/sections/resources/ResourcesHubCTA"

export function ResourcesHubPage() {
  return (
    <main id="main-content">
      <ResourcesHeroSection />
      <ResourcesInteractive />
      <ResourcesToolkit />
      <ResourcesHubCTA />
    </main>
  )
}
