export interface CaseStudyFull {
  slug: string;
  title: string;
  role: string;
  summary: string;
  problem: string;
  impact: string;
  industry: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  background: string;
  approach: string;
  detailedImpact: string;
  learned?: string;
  link?: string;
  linkLabel?: string;
  download?: boolean;
  resources?: Array<{ label: string; url: string }>;
  embeds?: Array<{ title: string; url: string }>;
  featured: boolean;
}

export const caseStudies: CaseStudyFull[] = [
  {
    slug: 'pmg-insights-unwrapped',
    title: 'Insights, Unwrapped at PMG',
    role: 'Software Engineer & Cross-functional Lead',
    summary:
      "Built a public-facing interactive microsite showcasing real-time marketing insights for PMG's Q4 launch, managing full-stack development and stakeholder alignment.",
    problem:
      'PMG needed to showcase Q4 marketing intelligence across two companies with no existing infrastructure and a one-month deadline.',
    impact: 'NYT press recognition, flagship PMG campaign',
    industry: 'Martech & Adtech',
    technologies: ['React', 'Node.js', 'Snowflake', 'AWS'],
    image: '/insights-hub.png',
    imageAlt: 'Insights Hub at PMG',
    featured: true,
    background:
      "PMG is a global digital marketing and technology agency that services F500 clients to advertise and grow their brand authentically with marketing intelligence. The company recently acquired Momentum Commerce, a data-driven digital retail consultancy that helps brands win on major online marketplaces like Amazon. Insights, Unwrapped was PMG's goal in developing an interactive site utilizing both companies to showcase real-time marketing insights during the year's most critical quarter (Q4). The project started from scratch, with a timeline of one month to create new infrastructure, build reliable data pipelines, and align engineering, data, marketing, and thought leadership teams to execute.",
    approach:
      'I served as a software engineer and cross-functional bridge between technical teams and stakeholders. As an engineer, I built production data pipelines pulling from Momentum Commerce systems using SQL, Python, and Snowflake, and developed the full-stack backend and frontend in JavaScript/React, involving several meetings with leaders from the company to understand their data structures. I also stood up key infrastructure including AWS S3, Lambda, and CI/CD pipelines via GitHub Actions. This was my first time working in both domains, and I quickly learned while actively delivering under deadline pressure. Beyond the technical execution, I served as the primary communication lead across teams, navigating constantly shifting requirements by flagging unclear specifications, advocating for realistic timelines, and translating technical constraints for non-technical stakeholders. I drove communication forward and was one of the sole contributors to manage site upkeep after launch.',
    detailedImpact:
      'The site launched successfully as a flagship PMG campaign and received executive and NYT press recognition. The project demonstrated my ability to understand technical complexity and support the technical team, while maintaining stakeholder alignment and momentum under high-pressure, high-visibility conditions.',
    learned:
      'Ambiguous, high-visibility projects require as much communication design as technical design.',
  },
  {
    slug: 'apple-dashboard',
    title: 'Dashboard for Chip Launch Readiness at Apple',
    role: 'Engineering Program Manager Intern',
    summary:
      'Designed and built a coordination dashboard from scratch for Apple Silicon chip validation, consolidating data from multiple sources and defining user workflows.',
    problem:
      'Apple Silicon validation spanned 10+ teams using Confluence, Radar, and internal APIs with no centralized visibility into blockers or readiness.',
    impact: '85% adoption in 30 days, demoed to senior leadership',
    industry: 'Hardware Tech',
    technologies: ['Python', 'SQL', 'Tableau'],
    image: '/apple.png',
    imageAlt: 'Apple chip validation dashboard',
    featured: true,
    background:
      "Apple's chip validation process for its Silicon products spans both pre-tape-out validation and post-tape-out bring-up readiness, involving over 100 people across 10+ teams. Teams track bugs, sign-offs, and validations in disconnected systems like Confluence, Radar, and internal APIs. Engineering program managers and individual contributors lack a centralized view into different processes at a glance, as well as detailed visibility into status, blockers, and outstanding work for the overall product. Missing these critical steps can delay hard, immovable deadlines impacting the entire workflow.",
    approach:
      'As an EPM intern, I was given a loose directive with no spec or clear owner: create visibility for this process. I started by meeting with each team to understand their workflow pain points and consolidated technical requirements around data sources and access, outlining the user journey one would take using the product. I then utilized my engineering background to make this a reality: I designed and built a coordination dashboard from scratch, writing ETL pipelines using Python and SQL to consolidate data from multiple third-party sources, then creating Tableau visualizations that showed validation stages, sign-off completion, and user-specific tasks. I iterated on mockups with stakeholders, refining designs to be user-friendly, aesthetic, and readable, and even conducted detailed dashboard tutorials after launch to secure adoption.',
    detailedImpact:
      'The final dashboard was demoed to senior leadership and became the single source of truth for chip validation status, saving teams hours weekly and reducing the risk of missed steps that could delay critical deadlines. It was adopted across the organization and remains in active use today.',
    learned:
      'The best products often start by deeply understanding how people actually work, not waiting for a perfect spec.',
  },
  {
    slug: 'vr-parkinsons',
    title: "Virtual Reality System for Parkinson's Freezing of Gait",
    role: 'Software Engineer & Product Lead',
    summary:
      "Developed first-of-its-kind Virtual Reality environments and tools to safely trigger and study freezing-of-gait in Parkinson's patients, alongside clinicians and physical therapists.",
    problem:
      "Freezing of gait is understudied because it's unpredictable and unsafe to trigger in clinical settings, yet real environments (hallways, crowds) are where it matters.",
    impact:
      'Presented at multiple national conferences, national paper in progress',
    industry: 'Healthcare & Rehabilitation Medicine',
    technologies: ['Unity', 'C#'],
    image: '/vr-hotel.png',
    imageAlt: "VR hotel environment for Parkinson's freezing-of-gait research",
    featured: true,
    background:
      "Freezing of gait (FoG) is a debilitating phenomenon of Parkinson's disease that drastically declines quality of life. The issue is understudied, due to being unpredictable and unsafe to trigger in clinical settings. Traditional labs can't replicate FoG real-world conditions safely, which include dynamic and sensory triggering environments like movie theaters, hotel hallways, and grocery stores. Our cross-disciplinary team developed a system using Virtual Reality to simulate these conditions in a controlled, repeatable way, to contribute to the assessment, treatment, and understanding of FoG, and technology's use cases in rehabilitation medicine.",
    approach:
      'I served as the software engineer and sole technical product lead for this project. I designed VR environments in Unity (C#) and implemented interactive features, including adaptive background movement and automated rehabilitation cues that respond to patient behavior, based on patient and clinician interviews and clinical observation. I balanced realism with safety through iterative testing and feedback cycles. My unique position between engineering and rehabilitation teams allowed me to translate technical constraints into usable clinical tools and communicate research findings to both audiences. I\'ve presented this work at engineering and rehabilitation conferences, and am currently co-authoring a national paper on our findings to publicize the benefits of a technical product approach in this domain.',
    detailedImpact:
      "Our system enabled controlled, repeatable study of freezing-of-gait episodes that weren't previously possible. This work solidified my commitment to healthcare accessibility for vulnerable populations and laid the foundation for my interest in building technology that meaningfully improves people's quality of life.",
    learned:
      'Building for vulnerable populations demands humility, safety-first iteration, and constant translation between technical and clinical worlds.',
    link: '/virtual-reality-parkinsons.pdf',
    linkLabel: 'Download project PDF',
    download: true,
  },
  {
    slug: 'ai-bias',
    title: 'AI Bias Detection in LLMs',
    role: 'AI Researcher',
    summary:
      'Developed the CHAST framework to identify covert biases in large language models used for high-stakes contexts.',
    problem:
      'Most bias detection catches overt harm, but subtle biases around concepts like caste often go undetected in hiring contexts.',
    impact:
      'Published award winning paper nominated at EMNLP 2024, MIT Tech Review & UW News coverage',
    industry: 'AI & Research',
    technologies: ['Python', 'LLMs'],
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    imageAlt: 'AI bias research',
    featured: false,
    background:
      'At UW, our team analyzed subtle biases in LLMs used for hiring, finding that covert social biases, particularly around non-Western concepts like caste, frequently go undetected.',
    approach:
      'We developed the Covert Harms and Social Threats (CHAST) framework. I supported design and evaluation across multiple LLMs, analyzing ~2,000 simulated hiring conversations and scaling detection beyond manual review.',
    detailedImpact:
      "Published at EMNLP with coverage from MIT Tech Review and UW News. We found that non-Western social ideals are more common in these high-stakes conversations and can lead to especially harmful outcomes when left unaddressed. Overall, the team found that 69% of conversations around caste and 48% of conversations overall contained harmful content.",
    learned:
      'Responsible AI requires looking beyond obvious failure modes.',
    embeds: [
      {
        title: 'EMNLP paper (arXiv)',
        url: 'https://arxiv.org/pdf/2405.05378',
      },
    ],
    resources: [
      {
        label: 'MIT Technology Review coverage',
        url: 'https://www.technologyreview.com/2025/10/01/1124621/openai-india-caste-bias/',
      },
      {
        label: 'UW News coverage',
        url: 'https://news.cs.washington.edu/2025/06/25/celebrating-the-graduating-class-of-2025/',
      },
    ],
  },
  {
    slug: 'ooh-automation',
    title: 'Out-of-Home Workflow Automation',
    role: 'Software Engineer at PMG',
    summary:
      "Created automated workflows for PMG's Out-of-Home team managing 15+ clients, saving hours weekly.",
    problem:
      'A small team managed complex, repeatable client journeys manually: coordination, deadlines, reporting, and billing were error-prone despite being automatable.',
    impact: 'Company-wide case study, 10+ hours saved weekly',
    industry: 'Martech & Adtech',
    technologies: ['Google Apps Script', 'Agentic Workflows'],
    image:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80',
    imageAlt: 'Out-of-Home workflow automation',
    featured: false,
    background:
      "PMG's Out-of-Home channel manages billboards, transit ads, and poster placements for 15+ major clients, each with distinct coordination, deadline, and reporting needs maintained largely by hand.",
    approach:
      'I shadowed the team weekly, mapped their workflows, and built automated systems in JavaScript: deadline alerts, billing reports for Nordstrom and Whole Foods, and marketing reporting pipelines now presented company-wide.',
    detailedImpact:
      'The team saves hours weekly with documented, reusable processes. The work deepened my belief that the best engineering starts by understanding the full context of how people work.',
    learned:
      'Small teams with manual pain are often the highest-leverage places to build.',
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudyFull | undefined {
  return caseStudies.find((s) => s.slug === slug);
}

export function getFeaturedCaseStudies(): CaseStudyFull[] {
  return caseStudies.filter((s) => s.featured);
}

export function getAdditionalCaseStudies(): CaseStudyFull[] {
  return caseStudies.filter((s) => !s.featured);
}
