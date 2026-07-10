import { ArrowRight } from 'lucide-react'
import { heroStats } from '../data/content'
import { Button } from './ui/Button'

export function Hero() {
  return (
    <section id="home" className="scroll-mt-20 border-b border-line-light dark:border-line-dark">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 lg:pt-28">
        <div className="mb-10 flex items-center gap-4">
          <span className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink/60 dark:text-cream/60">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Available for projects &middot; Q3 2026
          </span>
          <span className="hidden h-px flex-1 bg-line-light sm:block dark:bg-line-dark" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-end">
          <h1 className="font-display text-4xl leading-[0.95] tracking-tight uppercase sm:text-5xl lg:text-6xl">
            <span className="block text-ink dark:text-cream">Technical</span>
            <span className="block text-orange-500">Quality</span>
            <span className="block text-ink dark:text-cream">&amp; Automation</span>
            <span className="block text-ink/25 dark:text-cream/25">Consulting</span>
          </h1>

          <div className="flex flex-col gap-6">
            <p className="text-lg leading-relaxed text-ink/70 dark:text-cream/70">
              Delivering reliable software through quality engineering, automation, and technical
              excellence. We build solutions that last.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button as="a" href="#contact">
                Get Started <ArrowRight size={16} />
              </Button>
              <Button as="a" href="#services" variant="outline">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-line-light border-t border-line-light sm:grid-cols-4 dark:divide-line-dark dark:border-line-dark">
        {heroStats.map((stat) => (
          <div key={stat.label} className="px-6 py-8 sm:px-8">
            <div className="font-display text-4xl text-orange-500 sm:text-5xl">{stat.value}</div>
            <div className="mt-1 font-mono text-xs uppercase tracking-wide text-ink/60 dark:text-cream/60">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
