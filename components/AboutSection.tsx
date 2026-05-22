import { ImageWithFallback } from './ImageWithFallback';

const HERO_IMAGE_SRC = '/headshot.png';

export function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-[90vh] flex items-center pt-24 pb-20 lg:pt-28"
    >
      <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center">
          <div className="space-y-8 order-2 lg:order-1">
            <p className="section-label">About</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold leading-[1.12] tracking-tight text-[var(--foreground)]">
              Hi! I&apos;m Anjali
            </h1>
            <div className="space-y-5 text-lg leading-relaxed max-w-xl text-[var(--text-body)]">
              <p>
                I&apos;m a software engineer focused on building thoughtful,
                user-driven technology.
              </p>
              <p>
                I enjoy understanding how people interact with technology and
                translating that into experiences that feel intuitive and
                useful. I&apos;m drawn to the opportunity to solve real problems
                for real people, especially in non-technical industries and
                underserved communities where technology can make everyday
                experiences simpler and more accessible.
              </p>
              <p>
                Currently, I work at PMG, a marketing technology company,
                building full-stack systems and workflow tools for Alli, our
                AI-powered marketing intelligence platform. My work focuses on
                turning fragmented data into structured, actionable insights that
                help marketing teams make faster and more informed decisions.
                The industry is fast-moving and constantly evolving alongside
                technology and AI, and I thrive in such a high-stimulating
                environment where collaboration, curiosity, and thoughtful
                problem-solving are a big part of the work.
              </p>
              <p>
                But more than engineering, my real passions lie in storytelling,
                community, and creating opportunities for others. My life purpose
                has always been centered around helping others and creating
                positive change. I care a lot about fostering conversation,
                understanding different perspectives, and creating things that
                feel meaningful to people and society, and I aim to bring those
                values into everything I work on.
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="w-[320px] sm:w-[380px] lg:w-[450px] aspect-[3/4] rounded-xl overflow-hidden relative ring-1 ring-[var(--border)]">
              <ImageWithFallback
                src={HERO_IMAGE_SRC}
                alt="Anjali Singh"
                className="object-cover"
                fill
                sizes="(max-width: 1024px) 380px, 450px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
