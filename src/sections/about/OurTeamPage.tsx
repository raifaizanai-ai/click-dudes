import { TeamHeroSection } from "@/sections/about/team/TeamHeroSection"
import { TeamLeadershipIntro } from "@/sections/about/team/TeamLeadershipIntro"
import { TeamMemberSection } from "@/sections/about/team/TeamMemberSection"
import { TeamCultureSection } from "@/sections/about/team/TeamCultureSection"
import { TEAM_MEMBERS } from "@/data/team"

export function OurTeamPage() {
  return (
    <>
      <TeamHeroSection />
      <TeamLeadershipIntro />
      {TEAM_MEMBERS.map((member, index) => (
        <TeamMemberSection key={member.slug} member={member} index={index} />
      ))}
      <TeamCultureSection />
    </>
  )
}
