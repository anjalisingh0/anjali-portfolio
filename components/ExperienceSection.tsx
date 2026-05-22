'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { experiences } from '@/lib/experience';
import { SectionHeader } from './SectionHeader';

export function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="experience" className="section-padding bg-[var(--card)]">
      <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
        <SectionHeader
          label="Experience"
          title="Where I've built"
          subtitle="Across healthcare, media, and marketing technology — always close to the people using what I ship."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {experiences.map((exp) => (
            <div key={exp.id} className="card-surface flex flex-col overflow-hidden">
              <button
                type="button"
                onClick={() =>
                  setExpandedId(expandedId === exp.id ? null : exp.id)
                }
                className="w-full text-left p-5 lg:p-6 flex-1 flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-semibold text-lg tracking-tight text-[var(--foreground)]">
                    {exp.company}
                  </h3>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 text-[var(--muted-foreground)] transition-transform ${
                      expandedId === exp.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                {exp.isCurrent && (
                  <span className="inline-flex w-fit mb-3 px-2.5 py-0.5 text-xs font-medium rounded-full bg-[var(--primary-muted)] text-[var(--primary)]">
                    Current
                  </span>
                )}
                <p className="text-sm text-[var(--muted-foreground)] mb-3">
                  {exp.role} · {exp.dates}
                </p>
                <p className="text-sm leading-relaxed text-[var(--text-body)]">
                  {exp.ownership}
                </p>
              </button>

              {expandedId === exp.id && (
                <div className="px-5 lg:px-6 pb-5 lg:pb-6 border-t border-[var(--border)] pt-4 space-y-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-[var(--primary)] mb-1">
                      The problem
                    </p>
                    <p className="text-sm text-[var(--text-subtle)] leading-relaxed">
                      {exp.problem}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-[var(--primary)] mb-1">
                      Why it mattered
                    </p>
                    <p className="text-sm text-[var(--text-subtle)] leading-relaxed">
                      {exp.whyItMattered}
                    </p>
                  </div>
                  <ul className="space-y-2 text-sm text-[var(--text-body)]">
                    {exp.details.map((detail) => (
                      <li key={detail} className="flex gap-2 leading-relaxed">
                        <span className="text-[var(--primary)] mt-1.5">·</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
