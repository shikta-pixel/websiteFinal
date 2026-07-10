import { useState, type FormEvent } from 'react'
import { Mail, MapPin, Monitor, Send } from 'lucide-react'
import { serviceOptions } from '../data/content'

const inputClasses =
  'w-full rounded-md border border-line-light bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-orange-500 focus:outline-none dark:border-line-dark dark:text-cream dark:placeholder:text-cream/40'

const labelClasses = 'font-mono text-xs uppercase tracking-[0.2em] text-ink/60 dark:text-cream/60'

const contactInfo = [
  { icon: Mail, label: 'contact@ashinconsultancy.com' },
  { icon: MapPin, label: 'Remote — Worldwide' },
  { icon: Monitor, label: 'Part-time & full contract engagements' },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-5xl leading-[0.95] uppercase sm:text-6xl">
            <span className="block text-orange-500">Something</span>
            <span className="block text-ink dark:text-cream">Reliable.</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-ink/70 dark:text-cream/70">
            Whether you need a QA strategy, automation framework, or incident management processes
            — reach out and let&apos;s talk about what we can deliver together.
          </p>

          <div className="mt-10 flex flex-col gap-4">
            {contactInfo.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center border border-line-light text-orange-500 dark:border-line-dark">
                  <Icon size={18} />
                </div>
                <span className="text-ink/80 dark:text-cream/80">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className={labelClasses} htmlFor="name">
                Name
              </label>
              <input id="name" required placeholder="Alex Johnson" className={inputClasses} />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClasses} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="alex@company.com"
                className={inputClasses}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className={labelClasses} htmlFor="company">
              Company
            </label>
            <input id="company" placeholder="Acme Corp" className={inputClasses} />
          </div>

          <div className="flex flex-col gap-2">
            <label className={labelClasses} htmlFor="service">
              Service Required *
            </label>
            <select id="service" required defaultValue="" className={inputClasses}>
              <option value="" disabled>
                Select a service...
              </option>
              {serviceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className={labelClasses} htmlFor="message">
              Message *
            </label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder="Tell us about your project, timeline, and key challenges..."
              className={inputClasses}
            />
          </div>

          <button
            type="submit"
            className="mt-2 flex items-center justify-center gap-2 rounded-md bg-orange-500 px-6 py-4 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-cream transition-colors hover:bg-orange-600"
          >
            {submitted ? 'Message Sent' : 'Contact Us'}
            <Send size={16} />
          </button>
          {submitted && (
            <p className="text-sm text-emerald-600 dark:text-emerald-400">
              Thanks — we&apos;ll be in touch within one business day.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
