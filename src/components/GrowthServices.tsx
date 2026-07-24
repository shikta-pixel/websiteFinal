import {
  ArrowRight,
  FileText,
  Megaphone,
  MonitorSmartphone,
  Palette,
  Search,
  Share2,
  Target,
  type LucideIcon,
} from 'lucide-react'
import { growthServices } from '../data/content'
import { SectionLabel } from './ui/SectionLabel'
import { Button } from './ui/Button'

const icons: Record<string, LucideIcon> = {
  megaphone: Megaphone,
  palette: Palette,
  'file-text': FileText,
  share2: Share2,
  'monitor-smartphone': MonitorSmartphone,
  search: Search,
  target: Target,
}

export function GrowthServices() {
  return (
    <section
      id="growth-services"
      className="scroll-mt-20 border-b border-line-light dark:border-line-dark"
    >
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionLabel>Growth &amp; Marketing</SectionLabel>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display text-4xl uppercase sm:text-5xl">Marketing Services</h2>
          <p className="max-w-md text-ink/70 lg:text-right dark:text-cream/70">
            Full-funnel marketing support to build your brand, grow your audience, and turn traffic
            into customers.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 [&>*:last-child]:sm:col-span-2 [&>*:last-child]:lg:col-span-1 [&>*:last-child]:lg:col-start-2">
          {growthServices.map((service) => {
            const Icon = icons[service.icon]
            return (
              <div
                key={service.title}
                className="group flex flex-col gap-5 rounded-2xl border border-line-light bg-cream p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-orange-500 hover:shadow-xl hover:shadow-orange-500/10 dark:border-line-dark dark:bg-ink-dim dark:hover:shadow-black/30"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-colors duration-300 group-hover:bg-orange-500 group-hover:text-cream dark:bg-orange-500/10">
                  <Icon size={26} strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl uppercase tracking-wide">{service.title}</h3>
                <p className="leading-relaxed text-ink/70 dark:text-cream/70">{service.description}</p>
                <a
                  href="#contact"
                  className="mt-auto inline-flex w-fit items-center gap-1.5 font-mono text-xs font-semibold uppercase tracking-[0.15em] text-orange-500 transition-colors hover:text-orange-600"
                >
                  Learn More
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            )
          })}
        </div>

        <div className="mt-16 flex flex-col items-center gap-6 rounded-2xl border border-line-light bg-ink px-8 py-14 text-center dark:border-line-dark dark:bg-cream-dim sm:px-16">
          <h3 className="font-display text-3xl uppercase text-cream sm:text-4xl dark:text-ink">
            Ready to Grow Your Business?
          </h3>
          <p className="max-w-xl text-cream/70 dark:text-ink/70">
            Let&apos;s build a growth engine around your brand — from strategy and content to paid
            campaigns that convert.
          </p>
          <Button as="a" href="#contact">
            Request a Free Consultation <ArrowRight size={16} />
          </Button>
        </div>
      </div>
    </section>
  )
}
