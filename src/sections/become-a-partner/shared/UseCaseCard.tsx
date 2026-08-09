import type { UseCase } from "@/sections/become-a-partner/data"

export function UseCaseCard({ useCase, index }: { useCase: UseCase; index: number }) {
  return (
    <div className="flex flex-col gap-4 p-6 lg:p-7 rounded-2xl bg-white border border-[rgba(7,17,47,0.07)] card-interactive">
      <div className="flex items-center justify-between">
        <div className="w-11 h-11 rounded-xl bg-brand-purple/10 flex items-center justify-center">
          <useCase.icon aria-hidden="true" className="w-5 h-5 text-brand-purple" />
        </div>
        <span className="text-[11px] font-semibold tracking-widest uppercase text-text-muted">
          Use Case {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <h3 className="text-base font-bold text-text-primary">{useCase.label}</h3>
      <blockquote className="text-sm italic text-brand-purple border-l-2 border-brand-purple/30 pl-3.5">
        &ldquo;{useCase.quote}&rdquo;
      </blockquote>
      <p className="text-sm text-text-secondary leading-relaxed">{useCase.description}</p>
    </div>
  )
}
