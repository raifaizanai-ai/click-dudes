import { Container } from "@/components/layout/Container"
import { LegalHero } from "@/components/legal/LegalHero"
import { LegalTableOfContents } from "@/components/legal/LegalTableOfContents"
import { LegalSection } from "@/components/legal/LegalSection"
import { LegalContactCard } from "@/components/legal/LegalContactCard"
import { LegalBottomNav } from "@/components/legal/LegalBottomNav"
import type { LegalSectionData } from "@/lib/legal/types"

interface LegalPageShellProps {
  title: string
  subtitle: string
  lastUpdated: string
  sections: LegalSectionData[]
  currentHref: string
}

// Legal content should receive final review by qualified legal counsel
// before publication. See PART 7 of the polish-pass brief for the audit
// this content is based on (verified GA4/AdX usage, address, payout terms).
export function LegalPageShell({ title, subtitle, lastUpdated, sections, currentHref }: LegalPageShellProps) {
  return (
    <>
      <LegalHero title={title} subtitle={subtitle} lastUpdated={lastUpdated} />
      <section className="section-base py-12 sm:py-16">
        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-10 xl:gap-16">
            <LegalTableOfContents sections={sections} />
            <div className="max-w-2xl">
              {sections.map((s) => (
                <LegalSection key={s.id} {...s} />
              ))}
              <LegalContactCard />
              <LegalBottomNav currentHref={currentHref} />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
