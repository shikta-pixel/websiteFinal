import { skillGroups, techStack } from '../data/content'
import { SectionLabel } from './ui/SectionLabel'
import { Tag } from './ui/Tag'

function SkillGroup({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div>
      <div className="mb-4 flex items-center gap-2.5">
        <span className="h-2.5 w-2.5 bg-orange-500" />
        <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
          {title}
        </span>
      </div>
      <ul className="flex flex-col gap-3">
        {items.map((item) => (
          <li
            key={item}
            className="border-l-2 border-line-light pl-3 text-ink/75 dark:border-line-dark dark:text-cream/75"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20 border-b border-line-light dark:border-line-dark">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <SectionLabel>Technical Skills</SectionLabel>

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1fr_1fr]">
          <div>
            <h2 className="font-display text-4xl leading-[0.95] uppercase sm:text-5xl">Technology Stack</h2>
            <p className="mt-6 text-ink/70 dark:text-cream/70">{techStack.join(' · ')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {techStack.map((item) => (
                <Tag key={item}>{item}</Tag>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <SkillGroup title={skillGroups[0].title} items={skillGroups[0].items} />
            <SkillGroup title={skillGroups[1].title} items={skillGroups[1].items} />
          </div>

          <div className="flex flex-col gap-12">
            <SkillGroup title={skillGroups[2].title} items={skillGroups[2].items} />
            <SkillGroup title={skillGroups[3].title} items={skillGroups[3].items} />
          </div>
        </div>
      </div>
    </section>
  )
}
