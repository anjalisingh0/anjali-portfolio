'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

interface LeadershipItem {
  id: string;
  title: string;
  subtitle: string;
  framing: string;
  points: string[];
  description: string;
  recognition?: string;
  recognitionLink?: string;
  readMoreLink?: string;
  readMoreLabel?: string;
  embedLink?: string;
}

const leadershipData: LeadershipItem[] = [
  {
    id: 'community',
    title: 'Community Programs & Advocacy',
    subtitle: 'Society of Women Engineers · UW Allen School',
    framing:
      'STEM outreach for first-generation and underrepresented students: building confidence, not just curriculum.',
    points: [
      'VP of Community Outreach on a 30+ officer executive board',
      'Lead Student Ambassador, team of 15',
      '500+ underserved students impacted statewide',
    ],
    description:
      "I've designed and led outreach programs from the ground up, turning feedback and research into experiences that help students see themselves in technical fields. My approach is operational: stay true to the mission, advocate for what young learners actually need, and align partners around a shared vision.",
    recognition: 'UW Allen School Undergraduate Service Award (2024)',
    recognitionLink:
      'https://news.cs.washington.edu/2025/06/25/celebrating-the-graduating-class-of-2025/',
    embedLink:
      'https://news.cs.washington.edu/2025/06/25/celebrating-the-graduating-class-of-2025/',
  },
  {
    id: 'recruitment',
    title: 'Student Recruitment & Counseling',
    subtitle: 'Paul G. Allen School Student Engagement',
    framing:
      'Helping students navigate one of the most uncertain transitions of their lives.',
    points: [
      'Led team of 15 student ambassadors',
      'Managed $20K budget for outreach programs',
      '300+ K-12 students engaged annually',
    ],
    description:
      "I've reviewed essays, presented to large audiences, and held individualized counseling appointments. These experiences shaped how I communicate: translating complex ideas with empathy for people navigating high-stakes decisions.",
  },
  {
    id: 'journalism',
    title: 'Journalism Leadership',
    subtitle: 'The Daily UW',
    framing:
      'Making technical and scientific stories accessible to communities that need them.',
    points: [
      'Development Editor',
      'Managed 60+ journalists',
      'News & science coverage',
    ],
    description:
      "I believe communities can only advocate for themselves when they understand what's happening around them. As Development Editor, I coached hundreds of student writers on storytelling, strategy, and developing an authentic voice. Those skills still shape how I build products and communicate technical work.",
    readMoreLabel: 'Read my articles here',
    readMoreLink:
      'https://dailyuw.com/search?author=Anjali+SIngh&end_date=&keyword=&order=desc&sid=2784553&sort=date&start_date=&tag=&type=article',
  },
];

export function LeadershipSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="community" className="section-padding bg-[var(--card)]">
      <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
        <SectionHeader
          label="Community & outreach"
          title="Access, education, and opportunity"
          subtitle="I care deeply about expanding access to education and creating pathways for underrepresented communities through technology and outreach. This work is as much a part of who I am as engineering."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {leadershipData.map((item) => (
            <div key={item.id} className="card-surface flex flex-col overflow-hidden">
              <button
                type="button"
                onClick={() =>
                  setExpandedId(expandedId === item.id ? null : item.id)
                }
                aria-expanded={expandedId === item.id}
                className="w-full text-left p-5 lg:p-6 flex-1 flex flex-col"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-semibold text-lg tracking-tight text-[var(--foreground)]">
                    {item.title}
                  </h3>
                  <ChevronDown
                    className={`w-4 h-4 flex-shrink-0 text-[var(--muted-foreground)] transition-transform ${
                      expandedId === item.id ? 'rotate-180' : ''
                    }`}
                  />
                </div>
                <p className="text-sm text-[var(--muted-foreground)] mb-3">
                  {item.subtitle}
                </p>
                <p className="text-sm leading-relaxed text-[var(--text-body)]">
                  {item.framing}
                </p>
              </button>

              {expandedId === item.id && (
                <div className="px-5 lg:px-6 pb-5 lg:pb-6 border-t border-[var(--border)] pt-4 space-y-4">
                  <ul className="space-y-2 text-sm text-[var(--text-body)]">
                    {item.points.map((point) => (
                      <li key={point} className="flex gap-2 leading-relaxed">
                        <span className="text-[var(--primary)] mt-1.5">·</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-[var(--text-subtle)] leading-relaxed">
                    {item.description}
                  </p>
                  {item.recognition && (
                    <p className="text-sm border-t border-[var(--border)] pt-4 text-[var(--muted-foreground)]">
                      <span className="font-medium text-[var(--foreground)]">
                        Recognition:{' '}
                      </span>
                      {item.recognitionLink ? (
                        <a
                          href={item.recognitionLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[var(--primary)] hover:underline"
                        >
                          {item.recognition}
                        </a>
                      ) : (
                        item.recognition
                      )}
                    </p>
                  )}
                  {item.embedLink && (
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-wide text-[var(--muted-foreground)]">
                        Embedded reference
                      </p>
                      <div className="w-full overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--background)]">
                        <iframe
                          src={item.embedLink}
                          title={`${item.title} recognition`}
                          className="w-full h-64"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  )}
                  {item.readMoreLink && item.readMoreLabel && (
                    <a
                      href={item.readMoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-medium text-[var(--primary)] hover:underline"
                    >
                      {item.readMoreLabel}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
