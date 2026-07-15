import { ArrowRight } from 'lucide-react'
import { aboutHighlights } from '../data/content'
import aboutImage from '../assets/images/about-code.jpg'

export function About() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-line-light dark:border-line-dark">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-display text-4xl leading-[0.95] uppercase sm:text-5xl">
            <span className="block text-ink dark:text-cream">Quality is an</span>
            <span className="block text-orange-500">Engineering</span>
            <span className="block text-ink dark:text-cream">Discipline.</span>
          </h2>

          <div className="mt-8 flex flex-col gap-5 text-ink/70 dark:text-cream/70">
            <p className="leading-relaxed">
              We specialise in building the quality infrastructure that lets engineering teams ship
              faster with confidence. We have worked across financial services, and healthcare
              technology, always automation-first.
            </p>
            <p className="leading-relaxed">
              Whether you need a test framework from scratch, incident management overhauled, or a
              CI/CD pipeline that enforces quality gates automatically — we build solutions that
              outlast the engagement.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-ink/80 dark:text-cream/80">
                <ArrowRight size={14} className="shrink-0 text-orange-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="pointer-events-none absolute -top-3 -left-3 h-16 w-16 border-t-2 border-l-2 border-orange-500" />
          <div className="pointer-events-none absolute -right-3 -bottom-3 h-16 w-16 border-r-2 border-b-2 border-orange-500" />
          <div className="relative overflow-hidden border border-line-light dark:border-line-dark">
            <img
              src={aboutImage}
              alt="Engineer working across multiple monitors on a test automation framework"
              className="h-[420px] w-full object-cover grayscale-[15%]"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center gap-3 border border-line-light bg-cream/95 px-5 py-4 backdrop-blur dark:border-line-dark dark:bg-ink/95">
              <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-500" />
              <div>
                <div className="text-sm font-semibold text-ink dark:text-cream">Accepting engagements</div>
                <div className="font-mono text-xs text-ink/60 dark:text-cream/60">
                  Part-time &amp; full contracts &middot; Worldwide
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
