import { Navigation } from '@/components/Navigation';
import { AboutSection } from '@/components/AboutSection';
import { CurrentlyBuildingSection } from '@/components/CurrentlyBuildingSection';
import { LeadershipSection } from '@/components/LeadershipSection';
import { WorkSection } from '@/components/WorkSection';
import { ResumeSection } from '@/components/ResumeSection';
import { BeyondEngineeringSection } from '@/components/BeyondEngineeringSection';
import { ContactSection } from '@/components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <AboutSection />
        <CurrentlyBuildingSection />
        <WorkSection />
        <LeadershipSection />
        <ResumeSection />
        <BeyondEngineeringSection />
        <ContactSection />
      </main>

      <footer className="py-10 border-t border-[var(--border)]">
        <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto text-center">
          <p className="text-sm text-[var(--muted-foreground)]">
            © 2026 Anjali Singh
          </p>
        </div>
      </footer>
    </div>
  );
}
