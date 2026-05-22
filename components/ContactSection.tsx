import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export function ContactSection() {
  return (
    <section id="contact" className="section-padding bg-[var(--card)]">
      <div className="w-full px-6 lg:px-12 max-w-3xl mx-auto text-center">
        <SectionHeader
          label="Contact"
          title="Let's build something meaningful"
          subtitle="I'm particularly looking for software and product engineering roles in NYC, as well as mission-driven teams where I can stay close to users, systems, and the decisions that shape real outcomes. If you're building in a fast-moving environment in meaningful industries, or just want to talk, I'd be happy to hear from you."
          className="text-center [&_.section-subtitle]:mx-auto"
        />

        <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
          <a
            href="mailto:singh7anjali@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium text-sm bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 transition-opacity"
          >
            <Mail className="w-4 h-4" />
            singh7anjali@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/anjali-sin-gh/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg font-medium text-sm border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] hover:border-[var(--border-strong)] transition-colors"
          >
            <Linkedin className="w-4 h-4" />
            LinkedIn
            <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
          </a>
        </div>

        <p className="mt-12 pt-8 border-t border-[var(--border)] text-sm text-[var(--muted-foreground)]">
          Open to roles in NYC and surrounding areas
        </p>
      </div>
    </section>
  );
}
