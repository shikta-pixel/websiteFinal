import { navLinks } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-line-light dark:border-line-dark">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-8 sm:flex-row sm:justify-between">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-7 items-center rounded-sm bg-orange-500 px-2 font-mono text-xs font-bold tracking-wider text-cream">
            GFU
          </span>
          <span className="font-display text-base tracking-wide">Consultancy</span>
          <span className="ml-1 font-mono text-xs text-ink/50 dark:text-cream/50">© 2026</span>
        </a>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-[0.15em] text-ink/60 transition-colors hover:text-orange-500 dark:text-cream/60"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
