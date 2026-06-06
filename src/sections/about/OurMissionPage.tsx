import { MissionHero }    from "@/sections/about/mission/MissionHero"
import { MissionProblem } from "@/sections/about/mission/MissionProblem"
import { MissionProcess } from "@/sections/about/mission/MissionProcess"
import { MissionPillars } from "@/sections/about/mission/MissionPillars"
import { MissionMetrics } from "@/sections/about/mission/MissionMetrics"
import { MissionCTA }     from "@/sections/about/mission/MissionCTA"

export function OurMissionPage() {
  return (
    <>
      <MissionHero />
      <MissionProblem />
      <MissionProcess />
      <MissionPillars />
      <MissionMetrics />
      <MissionCTA />
    </>
  )
}
