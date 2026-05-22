export interface Experience {
  id: string;
  company: string;
  role: string;
  dates: string;
  ownership: string;
  problem: string;
  whyItMattered: string;
  isCurrent: boolean;
  details: string[];
}

export const experiences: Experience[] = [
  {
    id: 'pmg',
    company: 'PMG Worldwide',
    role: 'AI Software Engineer',
    dates: 'Jun 2025 – Present',
    ownership:
      "Building full-stack systems within Alli, PMG's AI-powered marketing intelligence platform.",
    problem:
      'Marketing teams work with fragmented data across channels, clients, and tools — making it hard to report consistently or move quickly on insights.',
    whyItMattered:
      'Better internal systems directly shape how analysts serve Fortune 500 clients and how confidently teams can act on data.',
    isCurrent: true,
    details: [
      'Ship end-to-end features across workflow systems, reporting infrastructure, and data tooling',
      'Translate ambiguous operational needs into structured, scalable product solutions',
      'Collaborate closely with users to iterate on tools built from real workflows and feedback',
      'Led development of Insights Unwrapped — a flagship campaign microsite with production data pipelines',
    ],
  },
  {
    id: 'apple',
    company: 'Apple',
    role: 'Engineering Program Manager Intern',
    dates: 'Jun – Sep 2024',
    ownership:
      'Designed and built a chip validation coordination dashboard from scratch — no spec, no clear owner.',
    problem:
      '100+ engineers across 10+ teams tracked validation in disconnected systems, with no single view of status, blockers, or readiness.',
    whyItMattered:
      'Missed validation steps could delay immovable silicon launch deadlines affecting the entire product line.',
    isCurrent: false,
    details: [
      'Met with teams to map workflows and consolidated requirements across Confluence, Radar, and internal APIs',
      'Built ETL pipelines (Python/SQL) and Tableau dashboards adopted as the org-wide source of truth',
      '85% adoption within 30 days; demoed to senior leadership',
    ],
  },
  {
    id: 'wapo',
    company: 'The Washington Post',
    role: 'Software Engineering Intern',
    dates: 'Jun – Aug 2023',
    ownership:
      'Developed and shipped a personalized recommendation framework for the iOS app.',
    problem:
      'Readers weren\'t discovering related content efficiently, and load times suffered from reactive fetching.',
    whyItMattered:
      'Engagement and retention on mobile directly shape how journalism reaches audiences at scale.',
    isCurrent: false,
    details: [
      'Built recommendation system (Swift, SQL) to preload related content based on user behavior',
      '15% engagement lift and 30% reduction in load times',
      'Independently led production App Store release under tight deadlines',
    ],
  },
  {
    id: 'uw-amp',
    company: 'UW AMP Lab',
    role: 'Software Lead & Product Manager',
    dates: 'Nov 2022 – Jun 2025',
    ownership:
      "Led technical product development for a first-of-its-kind VR system studying Parkinson's freezing of gait.",
    problem:
      'Freezing of gait is unpredictable and unsafe to trigger in clinical settings — yet real-world environments (hallways, crowds) are where it matters most.',
    whyItMattered:
      'Patients and clinicians needed controlled, repeatable ways to study episodes that traditional labs couldn\'t safely replicate.',
    isCurrent: false,
    details: [
      'Designed VR environments in Unity (C#) with clinicians, balancing realism and patient safety',
      'Bridged engineering and rehabilitation teams to translate research needs into usable tools',
      'Presented at national conferences; co-authoring publication on findings',
    ],
  },
];
