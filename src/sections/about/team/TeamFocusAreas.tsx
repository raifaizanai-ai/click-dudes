import type { TeamFocusArea } from "@/data/team"

interface TeamFocusAreasProps {
  focusAreas: TeamFocusArea[]
}

export function TeamFocusAreas({ focusAreas }: TeamFocusAreasProps) {
  return (
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-brand-purple/[0.10]">
      {focusAreas.map((area) => (
        <div key={area.label}>
          <p className="text-[10px] font-bold tracking-[0.18em] uppercase text-brand-purple">{area.label}</p>
          <p className="mt-1.5 text-[13px] font-semibold text-text-primary leading-snug">{area.value}</p>
        </div>
      ))}
    </div>
  )
}
