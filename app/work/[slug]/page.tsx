import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { getCaseStudyBySlug, caseStudies } from '@/lib/case-studies';

export async function generateStaticParams() {
  return caseStudies.map((s) => ({ slug: s.slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to work
          </Link>
          <Link
            href="/"
            className="text-sm font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
          >
            Anjali Singh
          </Link>
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 lg:px-12 py-16">
        <p className="section-label mb-3">{study.role}</p>
        <h1 className="text-3xl lg:text-4xl font-semibold tracking-tight text-[var(--foreground)] mb-4">
          {study.title}
        </h1>
        <p className="text-lg text-[var(--muted-foreground)] mb-10 leading-relaxed">
          {study.problem}
        </p>

        <div className="space-y-10 text-[var(--text-body)] leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">
              Background
            </h2>
            <p>{study.background}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">
              My approach
            </h2>
            <p>{study.approach}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">
              Impact
            </h2>
            <p>{study.detailedImpact}</p>
            <p className="mt-3 text-sm font-medium text-[var(--primary)]">
              {study.impact}
            </p>
          </section>

          {study.learned && (
            <section className="border-l-2 border-[var(--primary)] pl-5">
              <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">
                What I learned
              </h2>
              <p className="text-[var(--text-subtle)] italic">{study.learned}</p>
            </section>
          )}

          {study.embeds && study.embeds.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">
                Embedded references
              </h2>
              <div className="space-y-4">
                {study.embeds.map((embed) => (
                  <div key={embed.url} className="space-y-2">
                    <p className="text-sm font-medium text-[var(--foreground)]">
                      {embed.title}
                    </p>
                    <div className="w-full overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)]">
                      <iframe
                        src={embed.url}
                        title={embed.title}
                        className="w-full h-[520px]"
                        loading="lazy"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {study.resources && study.resources.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-[var(--foreground)] mb-3">
                Additional coverage
              </h2>
              <div className="flex flex-col gap-2">
                {study.resources.map((resource) => (
                  <a
                    key={resource.url}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-[var(--primary)] hover:underline"
                  >
                    {resource.label}
                  </a>
                ))}
              </div>
            </section>
          )}

          {study.link && (
            <a
              href={study.link}
              {...(study.download
                ? { download: true }
                : { target: '_blank', rel: 'noopener noreferrer' })}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 transition-opacity"
            >
              {study.linkLabel ?? (study.download ? 'Download project PDF' : 'View project')}
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </article>
    </div>
  );
}
