import { Activity, BarChart3, GitBranch, Server, Shield, Zap, type LucideIcon } from 'lucide-react'
import { services } from '../data/content'
import { SectionLabel } from './ui/SectionLabel'
import { Tag } from './ui/Tag'

const icons: Record<string, LucideIcon> = {
  shield: Shield,
  zap: Zap,
  activity: Activity,
  'git-branch': GitBranch,
  server: Server,
  'bar-chart-3': BarChart3,
}

export function Services() {
  return (
    <section id="services" className="scroll-mt-20 border-b border-line-light dark:border-line-dark">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionLabel>Services</SectionLabel>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display text-4xl uppercase sm:text-5xl">What We Deliver</h2>
          <p className="max-w-md text-ink/70 lg:text-right dark:text-cream/70">
            End-to-end quality engineering — from strategy through automation to production
            reliability.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 divide-y divide-line-light border border-line-light sm:grid-cols-2 sm:divide-x lg:grid-cols-3 dark:divide-line-dark dark:border-line-dark">
          {services.map((service) => {
            const Icon = icons[service.icon]
            return (
              <div key={service.index} className="flex flex-col gap-5 p-8">
                <div className="flex items-center justify-between">
                  <Icon size={28} strokeWidth={1.75} className="text-orange-500" />
                  <span className="font-mono text-sm text-ink/40 dark:text-cream/40">{service.index}</span>
                </div>
                <h3 className="font-display text-xl uppercase tracking-wide">{service.title}</h3>
                <p className="leading-relaxed text-ink/70 dark:text-cream/70">{service.description}</p>
                <div className="mt-auto flex flex-wrap gap-2 pt-2">
                  {service.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
