import { useEffect, useState } from 'react'
import { LogIn, Moon, Sun } from 'lucide-react'
import { navLinks } from '../data/content'
import { useTheme } from '../context/ThemeContext'
import { Button } from './ui/Button'

export function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [active, setActive] = useState<string>('#home')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(`#${visible.target.id}`)
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-line-light bg-cream/90 backdrop-blur dark:border-line-dark dark:bg-ink/90">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="flex h-8 items-center rounded-sm bg-orange-500 px-2 font-mono text-sm font-bold tracking-wider text-cream">
            AshiN
          </span>
          <span className="font-display text-lg tracking-wide text-ink dark:text-cream">Consultancy</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`font-mono text-xs font-medium uppercase tracking-[0.2em] transition-colors ${
                active === link.href
                  ? 'text-orange-500'
                  : 'text-ink/60 hover:text-ink dark:text-cream/60 dark:hover:text-cream'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleTheme}
            aria-label="Toggle color theme"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-line-light text-ink transition-colors hover:border-orange-500 hover:text-orange-500 dark:border-line-dark dark:text-cream"
          >
            {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
          </button>
        {/*  <button className="flex h-10 items-center gap-1.5 rounded-md border border-line-light px-4 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:border-orange-500 hover:text-orange-500 dark:border-line-dark dark:text-cream">
            <LogIn size={14} />
            Admin
          </button>=*/}
          <Button as="a" href="#contact">
            Hire Us
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-line-light text-ink lg:hidden dark:border-line-dark dark:text-cream"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <span className="font-mono text-xs">{menuOpen ? 'X' : '☰'}</span>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-line-light bg-cream px-6 py-4 lg:hidden dark:border-line-dark dark:bg-ink">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-mono text-xs font-medium uppercase tracking-[0.2em] ${
                  active === link.href ? 'text-orange-500' : 'text-ink/70 dark:text-cream/70'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-2 flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-line-light text-ink dark:border-line-dark dark:text-cream"
                aria-label="Toggle color theme"
              >
                {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
              </button>
              <Button as="a" href="#contact" className="flex-1" onClick={() => setMenuOpen(false)}>
                Hire Us
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
