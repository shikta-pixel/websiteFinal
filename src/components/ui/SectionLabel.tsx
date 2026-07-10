export function SectionLabel({ children }: { children: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-4 w-1 bg-orange-500" />
      <span className="font-mono text-xs font-semibold uppercase tracking-[0.25em] text-orange-500">
        {children}
      </span>
    </div>
  )
}
