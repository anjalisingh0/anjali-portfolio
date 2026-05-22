'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const sections = [
  { id: 'about', label: 'About' },
  { id: 'building', label: 'Building' },
  { id: 'work', label: 'Work' },
  { id: 'community', label: 'Community' },
  { id: 'resume', label: 'Resume' },
  { id: 'beyond', label: 'Beyond' },
  { id: 'contact', label: 'Contact' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      for (const { id } of sections) {
        const element = document.getElementById(id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setMobileOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <div className="w-full px-6 lg:px-12 max-w-6xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-semibold text-lg tracking-tight text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
          >
            Anjali Singh
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`px-3 py-2 text-sm rounded-md transition-colors ${
                  activeSection === id
                    ? 'text-[var(--primary)] bg-[var(--primary-muted)] font-medium'
                    : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-md text-[var(--foreground)] hover:bg-[var(--muted)]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-[var(--border)] py-3 pb-4">
          <div className="flex flex-col gap-0.5">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`text-left py-2.5 px-3 text-sm rounded-md transition-colors ${
                  activeSection === id
                    ? 'text-[var(--primary)] bg-[var(--primary-muted)] font-medium'
                    : 'text-[var(--muted-foreground)]'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
