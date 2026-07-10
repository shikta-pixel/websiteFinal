import type { ComponentPropsWithoutRef, ElementType } from 'react'

type Variant = 'primary' | 'outline'

type ButtonProps<T extends ElementType> = {
  as?: T
  variant?: Variant
} & ComponentPropsWithoutRef<T>

const base =
  'inline-flex items-center justify-center gap-2 rounded-md px-6 py-3.5 font-mono text-sm font-semibold uppercase tracking-[0.15em] transition-colors duration-200'

const variants: Record<Variant, string> = {
  primary: 'bg-orange-500 text-cream hover:bg-orange-600',
  outline:
    'border border-line-light text-ink hover:border-orange-500 hover:text-orange-500 dark:border-line-dark dark:text-cream',
}

export function Button<T extends ElementType = 'button'>({
  as,
  variant = 'primary',
  className = '',
  ...props
}: ButtonProps<T>) {
  const Component = as || 'button'
  return <Component className={`${base} ${variants[variant]} ${className}`} {...props} />
}
