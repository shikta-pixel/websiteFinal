import { useRef, useState, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { Mail, MapPin, Monitor, Send } from 'lucide-react'
import { serviceOptions } from '../data/content'

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const inputClasses =
  'w-full rounded-md border border-line-light bg-transparent px-4 py-3 text-sm text-ink placeholder:text-ink/40 focus:border-orange-500 focus:outline-none dark:border-line-dark dark:text-cream dark:placeholder:text-cream/40'

const labelClasses = 'font-mono text-xs uppercase tracking-[0.2em] text-ink/60 dark:text-cream/60'

const contactInfo = [
  { icon: Mail, label: 'Contact us' },
  { icon: MapPin, label: 'Remote — Worldwide' },
  { icon: Monitor, label: 'Part-time & full contract engagements' },
]

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formRef.current) return

    setStatus('sending')
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(() => {
        setStatus('sent')
        formRef.current?.reset()
      })
      .catch((error) => {
        console.error('EmailJS send failed:', error)
        setStatus('error')
      })
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

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className={labelClasses} htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="user_name"
                required
                placeholder="Alex Johnson"
                className={inputClasses}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className={labelClasses} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="user_email"
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
            <input id="company" name="company" placeholder="Acme Corp" className={inputClasses} />
          </div>

          <div className="flex flex-col gap-2">
            <label className={labelClasses} htmlFor="service">
              Service Required *
            </label>
            <select
              id="service"
              name="service"
              required
              defaultValue=""
              className={inputClasses}
            >
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
              name="message"
              required
              rows={5}
              placeholder="Tell us about your project, timeline, and key challenges..."
              className={inputClasses}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-2 flex items-center justify-center gap-2 rounded-md bg-orange-500 px-6 py-4 font-mono text-sm font-semibold uppercase tracking-[0.15em] text-cream transition-colors hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent' : 'Contact Us'}
            <Send size={16} />
          </button>
          {status === 'sent' && (
            <p className="text-sm text-emerald-600 dark:text-emerald-400">
              Thanks — we&apos;ll be in touch with you.
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm text-red-600 dark:text-red-400">
              Something went wrong sending your message. Please try again or email us directly.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
