export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
] as const

export const heroStats = [
  { value: '94%', label: 'Avg Test Coverage' },
  { value: '78%', label: 'Defect Reduction' },
  { value: '60%', label: 'Faster MTTR' },
  { value: '200+', label: 'Engineers Supported' },
] as const

export const aboutHighlights = [
  'Enterprise QA leadership',
  'Automation-first methodology',
  'Agile / Scrum',
  'Secure development practices',
  'Performance optimisation',
  'Cross-functional mentoring',
] as const

export type Service = {
  index: string
  icon: 'shield' | 'zap' | 'activity' | 'git-branch' | 'server' | 'bar-chart-3'
  title: string
  description: string
  tags: string[]
}

export const services: Service[] = [
  {
    index: '01',
    icon: 'shield',
    title: 'Quality Assurance',
    description:
      'End-to-end QA strategy design, test planning, and execution across web, mobile, and API layers. Risk-based approach aligned to business objectives.',
    tags: ['Test Strategy', 'Test Planning', 'Risk Analysis'],
  },
  {
    index: '02',
    icon: 'zap',
    title: 'Test Automation',
    description:
      'Robust automation frameworks using Playwright, Selenium, and Cypress — integrated into CI pipelines with actionable reporting.',
    tags: ['Playwright', 'Selenium', 'CI Integration'],
  },
  {
    index: '03',
    icon: 'activity',
    title: 'Application Support',
    description:
      'Incident management, root cause analysis, and proactive production monitoring to reduce MTTR and build resilient support processes.',
    tags: ['Incident Management', 'RCA', 'Monitoring'],
  },
  {
    index: '04',
    icon: 'git-branch',
    title: 'DevOps & CI/CD',
    description:
      'Multi-stage deployment pipelines with automated quality gates, container orchestration, and infrastructure-as-code.',
    tags: ['GitHub Actions', 'Docker', 'Kubernetes'],
  },
  {
    index: '05',
    icon: 'server',
    title: 'API Testing',
    description:
      'Comprehensive REST and GraphQL API validation, contract testing, load benchmarking, and schema-driven test generation.',
    tags: ['REST', 'GraphQL', 'Load Testing'],
  },
  {
    index: '06',
    icon: 'bar-chart-3',
    title: 'Technical Consulting',
    description:
      'Strategic guidance on quality processes, tooling selection, team capability development, and engineering culture improvement.',
    tags: ['Strategy', 'Tooling', 'Team Growth'],
  },
]

export const skillGroups = [
  {
    title: 'Testing & QA',
    items: ['Selenium WebDriver', 'Playwright', 'PyTest', 'RestAssured'],
  },
  {   title: 'DevOps & Cloud',
    items: ['GitHub Actions', 'Docker', 'Azure', 'Jenkins'],
  },
  {
    title: 'Languages & Frameworks',
    items: ['C#', 'TypeScript', 'Python', 'Java', 'React', 'ASP.NET Core', 'Node.js', 'SQL'],
  },
  {
    title: 'Databases & APIs',
    items: ['PostgreSQL', 'REST APIs', 'GraphQL', 'Swagger/OpenAPI', 'Postman'],
  },
] as const

export const techStack = [
  'React',
  'TypeScript',
  'C#',
  'ASP.NET Core',
  'PostgreSQL',
  'Docker',
  'GitHub Actions',
  'Azure',
  'Playwright',
  'Python',
  'Kubernetes',
] as const

export type Project = {
  tag: string
  title: string
  description: string
  tags: string[]
  metrics: { value: string; label: string }[]
  image: string
}

export const testimonials = [
  {
    quote:
      'Transformed our QA practice from reactive to predictive. Our defect escape rate dropped 78% in six months. The automation framework they built is still the backbone of our CI pipeline two years later.',
    name: 'Sarah Chen',
    role: 'VP Engineering, FinTech Corp',
    initials: 'SC',
  },
  {
    quote:
      'They rebuilt our incident response process from the ground up. Mean time to resolution dropped by 60% and our on-call engineers finally get to sleep through the night.',
    name: 'Marcus Ilyas',
    role: 'Director of Platform, HealthStack',
    initials: 'MI',
  },
  {
    quote:
      'The CI/CD overhaul removed every manual deployment step we had. Releases went from a weekly, all-hands event to something that happens quietly, multiple times a day.',
    name: 'Priya Nandan',
    role: 'Head of DevOps, Northbridge SaaS',
    initials: 'PN',
  },
] as const

export const serviceOptions = [
  'Quality Assurance',
  'Test Automation',
  'Application Support',
  'DevOps & CI/CD',
  'API Testing',
  'Technical Consulting',
] as const
