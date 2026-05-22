'use client';

import Link from 'next/link';
import { ImageWithFallback } from './ImageWithFallback';
import { SectionHeader } from './SectionHeader';
import {
  getFeaturedCaseStudies,
  getAdditionalCaseStudies,
} from '@/lib/case-studies';

export function WorkSection() {
  const featured = getFeaturedCaseStudies();
  const additional = getAdditionalCaseStudies();

  return (
    <section id="work" className="section-padding">
      <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
        <SectionHeader
          label="Selected work"
          title="Selected Work"
          subtitle="Case studies in product development, cross-functional leadership, and human-centered engineering"
        />

        <div className="grid lg:grid-cols-3 gap-8 mb-12 items-stretch">
          {featured.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group text-left card-surface overflow-hidden flex flex-col h-full hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden relative bg-[var(--muted)] flex-shrink-0">
                <ImageWithFallback
                  src={study.image}
                  alt={study.imageAlt}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <p className="text-sm font-medium text-[var(--primary)] mb-1">
                  {study.role}
                </p>
                <h3 className="font-semibold text-xl text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors mb-3">
                  {study.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-[var(--muted-foreground)] flex-grow">
                  {study.summary}
                </p>
                <div className="pt-3 mt-auto space-y-2">
                  <p className="text-xs text-[var(--text-subtle)]">
                    <span className="font-medium">Industry:</span>{' '}
                    {study.industry}
                  </p>
                  <p className="text-xs text-[var(--text-subtle)]">
                    <span className="font-medium">Technologies:</span>{' '}
                    {study.technologies.join(', ')}
                  </p>
                  <p className="text-xs text-[var(--text-subtle)]">
                    <span className="font-medium">Impact:</span> {study.impact}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="border-t border-[var(--border)] pt-12">
          <h3 className="text-xl font-semibold tracking-tight text-[var(--foreground)] mb-8">
            Additional Work
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {additional.map((study) => (
              <Link
                key={study.slug}
                href={`/work/${study.slug}`}
                className="group text-left card-surface p-6 block hover:-translate-y-0.5 transition-all duration-300"
              >
                <p className="text-sm font-medium text-[var(--primary)] mb-2">
                  {study.role}
                </p>
                <h4 className="font-semibold text-lg text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors mb-2">
                  {study.title}
                </h4>
                <p className="font-sans text-sm mb-3 text-[var(--muted-foreground)]">
                  {study.summary}
                </p>
                <div className="space-y-2">
                  <p className="text-xs text-[var(--text-subtle)]">
                    <span className="font-medium">Industry:</span>{' '}
                    {study.industry}
                  </p>
                  <p className="text-xs text-[var(--text-subtle)]">
                    <span className="font-medium">Technologies:</span>{' '}
                    {study.technologies.join(', ')}
                  </p>
                  <p className="text-xs text-[var(--text-subtle)]">
                    <span className="font-medium">Impact:</span> {study.impact}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
