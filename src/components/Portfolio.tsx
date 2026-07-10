import { ChevronRight } from 'lucide-react'
import { SectionLabel } from './ui/SectionLabel'
import { Tag } from './ui/Tag'
import laptopImage from '../assets/images/portfolio-laptop.jpg'
import dashboardImage from '../assets/images/portfolio-dashboard.jpg'
import serverImage from '../assets/images/portfolio-server.jpg'

const projects = [
  {
    tag: 'Test Automation',
    title: 'QA Automation Framework',
    description:
      'End-to-end Playwright framework for a financial services platform, cutting regression cycles from 3 days to 4 hours with zero production escapes post-launch.',
    tags: ['Playwright', 'TypeScript', 'GitHub Actions', 'Docker'],
    metrics: [
      { value: '94%', label: 'test coverage' },
      { value: '87%', label: 'time reduction' },
      { value: '0', label: 'production escapes' },
    ],
    image: laptopImage,
    imageAlt: 'Laptop showing an automated test suite running in a code editor',
  },
  {
    tag: 'Application Development',
    title: 'Technical Support Portal',
    description:
      'Full-stack incident management and knowledge base platform serving 200+ engineers across 3 product teams. Halved mean time to resolution.',
    tags: ['React', 'ASP.NET Core', 'PostgreSQL', 'Azure'],
    metrics: [
      { value: '60%', label: 'faster MTTR' },
      { value: '200+', label: 'active users' },
      { value: '99.9%', label: 'uptime' },
    ],
    image: dashboardImage,
    imageAlt: 'Analytics dashboards displaying live product metrics',
  },
  {
    tag: 'DevOps',
    title: 'CI/CD Pipeline Automation',
    description:
      'Multi-stage deployment pipelines with automated quality gates, compliance checks, and rollback mechanisms — zero manual handoffs to production.',
    tags: ['GitHub Actions', 'Docker', 'Azure DevOps', 'Terraform'],
    metrics: [
      { value: '100%', label: 'automated gates' },
      { value: '12x', label: 'deploy frequency' },
      { value: '0', label: 'manual handoffs' },
    ],
    image: serverImage,
    imageAlt: 'Server rack with orange network cabling',
  },
]

function ProjectImage({ src, alt, tag }: { src: string; alt: string; tag: string }) {
  return (
    <div className="relative h-64 overflow-hidden lg:h-full lg:min-h-[22rem]">
      <img src={src} alt={alt} className="h-full w-full object-cover" />
      <span className="absolute top-4 left-4 bg-orange-500 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-wide text-cream">
        {tag}
      </span>
    </div>
  )
}

function ProjectDetails({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="flex flex-col gap-5 p-8 lg:p-12">
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink/50 dark:text-cream/50">
        Project {String(projects.indexOf(project) + 1).padStart(2, '0')}
      </span>
      <h3 className="font-display text-3xl uppercase">{project.title}</h3>
      <p className="leading-relaxed text-ink/70 dark:text-cream/70">{project.description}</p>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <div className="mt-auto grid grid-cols-3 gap-4 border-t border-line-light pt-6 dark:border-line-dark">
        {project.metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col gap-1">
            <ChevronRight size={14} className="text-orange-500" />
            <span className="font-display text-lg text-ink dark:text-cream">{metric.value}</span>
            <span className="text-xs text-ink/60 dark:text-cream/60">{metric.label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-20 border-b border-line-light dark:border-line-dark">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionLabel>Portfolio</SectionLabel>

        <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display text-4xl uppercase sm:text-5xl">Featured Projects</h2>
          <p className="max-w-md text-ink/70 lg:text-right dark:text-cream/70">
            Case studies from enterprise engagements with measurable outcomes.
          </p>
        </div>

        <div className="mt-14 border border-line-light dark:border-line-dark">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`grid grid-cols-1 border-line-light lg:grid-cols-2 dark:border-line-dark ${
                i > 0 ? 'border-t' : ''
              }`}
            >
              {i % 2 === 0 ? (
                <>
                  <ProjectImage src={project.image} alt={project.imageAlt} tag={project.tag} />
                  <div className="border-t border-line-light lg:border-t-0 lg:border-l dark:border-line-dark">
                    <ProjectDetails project={project} />
                  </div>
                </>
              ) : (
                <>
                  <div className="order-2 lg:order-1">
                    <ProjectDetails project={project} />
                  </div>
                  <div className="order-1 border-b border-line-light lg:order-2 lg:border-b-0 lg:border-l dark:border-line-dark">
                    <ProjectImage src={project.image} alt={project.imageAlt} tag={project.tag} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
