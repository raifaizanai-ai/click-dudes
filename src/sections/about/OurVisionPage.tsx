import { VisionHero }     from "@/sections/about/vision/VisionHero"
import { VisionIndustry } from "@/sections/about/vision/VisionIndustry"
import { VisionRoadmap }  from "@/sections/about/vision/VisionRoadmap"
import { VisionPlatform } from "@/sections/about/vision/VisionPlatform"
import { VisionFocused }  from "@/sections/about/vision/VisionFocused"
import { VisionMetrics }  from "@/sections/about/vision/VisionMetrics"
import { VisionCTA }      from "@/sections/about/vision/VisionCTA"

export function OurVisionPage() {
  return (
    <>
      <VisionHero />
      <VisionIndustry />
      <VisionRoadmap />
      <VisionPlatform />
      <VisionFocused />
      <VisionMetrics />
      <VisionCTA />
    </>
  )
}
