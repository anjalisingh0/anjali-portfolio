import { FileText, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export function ResumeSection() {
  return (
    <section id="resume" className="section-padding">
      <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto text-center">
        <SectionHeader
          label="Resume"
          title="Resume"
          subtitle="A fuller view of my experience, projects, and leadership."
          className="text-center [&_.section-subtitle]:mx-auto"
        />
        <a
          href="/resume.pdf"
          download="Anjali-Singh-Resume.pdf"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium text-sm bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 transition-opacity"
        >
          <FileText className="w-4 h-4" />
          Download resume
          <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
        </a>
      </div>
    </section>
  );
}
