import { currentWork } from '@/lib/current-work';
import { SectionHeader } from './SectionHeader';

export function CurrentlyBuildingSection() {
  return (
    <section id="building" className="section-padding bg-[var(--card)]">
      <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
        <SectionHeader
          label="Currently building"
          title="Product engineering at scale"
          subtitle={currentWork.tagline}
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-5 text-[var(--text-body)] leading-relaxed">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)]">
              <span className="w-2 h-2 rounded-full bg-[var(--primary)] animate-pulse" />
              {currentWork.company} · {currentWork.role}
            </div>
            <p className="text-xl font-semibold text-[var(--foreground)] tracking-tight">
              <a href={currentWork.productLink} className="underline">
                {currentWork.product}
              </a>{''}
             , AI-powered marketing intelligence
            </p>
            {currentWork.narrative.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
            <div className="flex flex-wrap gap-2 pt-2">
              {currentWork.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-medium rounded-md bg-[var(--primary-muted)] text-[var(--primary)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {currentWork.highlights.map((item) => (
              <div
                key={item.title}
                className="card-surface p-5 lg:p-6"
              >
                <h3 className="font-semibold text-[var(--foreground)] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--text-subtle)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
