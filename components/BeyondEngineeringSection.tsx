import { SectionHeader } from './SectionHeader';

const interests = [
  { label: 'Running' },
  { label: 'Startups' },
  { label: 'Education & outreach' },
  { label: 'Writing (My Substack Link)', href: 'https://substack.com/@anjali1771' },
  {
    label: 'Podcasts (My Podcast Link)',
    href: 'https://open.spotify.com/show/7MLaS03jSuQ5hnZ95J5WTO?si=3033f65fb5b74b0d',
  },
  { label: 'Mentorship' },
  { label: 'Human-centered technology' },
];

export function BeyondEngineeringSection() {
  return (
    <section id="beyond" className="section-padding">
      <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
        <SectionHeader
          label="Beyond engineering"
          title="What keeps me grounded"
          subtitle="I have a wide range of interests that keep me grounded and fuel my creativity, including writing and mentorship."
        />

        <div className="flex flex-wrap gap-4 lg:gap-5 justify-center lg:justify-start">
          {interests.map((interest) => {
            const content = (
              <span className="text-sm font-medium leading-snug text-[var(--primary)]">
                {interest.label}
              </span>
            );

            if (interest.href) {
              return (
                <a
                  key={interest.label}
                  href={interest.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-[var(--border)] bg-[var(--primary-muted)] text-center px-3 hover:border-[var(--border-strong)] transition-colors"
                >
                  {content}
                </a>
              );
            }

            return (
              <div
                key={interest.label}
                className="flex items-center justify-center w-28 h-28 sm:w-32 sm:h-32 rounded-full border border-[var(--border)] bg-[var(--primary-muted)] text-center px-3"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
