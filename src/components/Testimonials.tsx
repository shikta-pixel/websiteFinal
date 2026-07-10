import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { testimonials } from '../data/content'
import { SectionLabel } from './ui/SectionLabel'

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const testimonial = testimonials[index]

  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setIndex((i) => (i + 1) % testimonials.length)

  return (
    <section id="testimonials" className="scroll-mt-20 border-b border-line-light dark:border-line-dark">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-24 lg:grid-cols-[1fr_1.4fr] lg:items-start">
        <div>
          <SectionLabel>Testimonials</SectionLabel>
          <h2 className="mt-6 font-display text-4xl uppercase sm:text-5xl">Client Outcomes</h2>
          <p className="mt-6 max-w-xs text-ink/70 dark:text-cream/70">
            Real feedback from engineering leaders we&apos;ve partnered with.
          </p>
        </div>

        <div>
          <div className="border-l-4 border-orange-500 bg-cream-dim/60 p-10 dark:bg-ink-dim/60">
            <div className="flex gap-1 text-orange-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="mt-6 text-xl leading-relaxed text-ink dark:text-cream">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center border border-orange-500/40 bg-orange-50 font-mono text-sm font-semibold text-orange-600 dark:bg-orange-500/10 dark:text-orange-400">
                {testimonial.initials}
              </div>
              <div>
                <div className="font-semibold text-ink dark:text-cream">{testimonial.name}</div>
                <div className="font-mono text-xs text-ink/60 dark:text-cream/60">{testimonial.role}</div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center border border-line-light text-ink transition-colors hover:border-orange-500 hover:text-orange-500 dark:border-line-dark dark:text-cream"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.name}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-1 rounded-full transition-all ${
                    i === index ? 'w-8 bg-orange-500' : 'w-4 bg-line-light dark:bg-line-dark'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center border border-line-light text-ink transition-colors hover:border-orange-500 hover:text-orange-500 dark:border-line-dark dark:text-cream"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
