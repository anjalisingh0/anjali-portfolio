import { Award, Newspaper, GraduationCap, Presentation } from 'lucide-react';

const items = [
  {
    icon: Newspaper,
    title: 'The New York Times',
    subtitle: 'PMG Insights Unwrapped',
  },
  {
    icon: Newspaper,
    title: 'MIT Technology Review',
    subtitle: 'AI Bias Research',
  },
  {
    icon: Presentation,
    title: 'EMNLP 2024',
    subtitle: 'Conference Presentation',
  },
  {
    icon: Presentation,
    title: 'Apple Leadership',
    subtitle: 'Senior Leadership Demo',
  },
  {
    icon: Award,
    title: 'UW Service Award',
    subtitle: 'Allen School 2024',
  },
  {
    icon: GraduationCap,
    title: "Dean's List",
    subtitle: 'All Quarters',
  },
];

export function PressSection() {
  return (
    <section id="press" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <h2
            className="font-serif text-4xl lg:text-5xl mb-4"
            style={{ color: 'var(--foreground)' }}
          >
            Press & Recognition
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 lg:gap-8">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl border"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--border)',
              }}
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ backgroundColor: 'var(--muted)' }}
              >
                <item.icon
                  className="w-8 h-8"
                  style={{ color: 'var(--primary)' }}
                />
              </div>
              <div
                className="font-sans text-sm"
                style={{ color: 'rgba(42, 37, 32, 0.9)' }}
              >
                <div className="font-medium">{item.title}</div>
                <div
                  className="text-xs mt-1"
                  style={{ color: 'var(--muted-foreground)' }}
                >
                  {item.subtitle}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
