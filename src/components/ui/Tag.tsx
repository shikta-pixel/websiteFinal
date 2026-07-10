export function Tag({ children }: { children: string }) {
  return (
    <span className="rounded-md border border-line-light px-3 py-1.5 font-mono text-xs text-ink/70 dark:border-line-dark dark:text-cream/70">
      {children}
    </span>
  )
}
