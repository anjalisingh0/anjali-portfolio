export interface CurrentWorkHighlight {
  title: string;
  description: string;
}

export const currentWork = {
  company: 'PMG Worldwide',
  role: 'AI Software Engineer',
  product: 'Alli',
  productLink: 'https://www.pmg.com/alli',
  tagline:
    'Building full-stack systems that turn fragmented marketing data into structured, usable workflows.',
  narrative: [
    'At PMG, I work inside Alli, an AI-powered marketing intelligence platform used by analysts and marketers managing complex, high-volume client data. My work sits at the intersection of product engineering and systems thinking: translating ambiguous operational problems into end-to-end features people actually use.',
    'I build workflow systems, reporting infrastructure, and data tooling that help teams move faster with more consistency. A lot of my time is spent understanding how people work: shadowing workflows, gathering feedback, and shaping technical decisions around real user needs rather than assumptions.',
  ],
  highlights: [
    {
      title: 'End-to-end feature ownership',
      description:
        'Designing and shipping full-stack capabilities across the MERN stack, from data models and APIs to frontend interfaces analysts interact with daily.',
    },
    {
      title: 'Workflow & systems architecture',
      description:
        'Structuring how fragmented marketing data flows through Alli, improving consistency, reducing manual steps, and making complex processes legible.',
    },
    {
      title: 'User-driven product development',
      description:
        'Partnering closely with analysts and stakeholders to iterate on reporting tools and workflow features built directly from feedback and observed pain points.',
    },
  ] as CurrentWorkHighlight[],
  stack: ['TypeScript', 'React', 'Node.js', 'SQL', 'Redux', 'Python'],
};
