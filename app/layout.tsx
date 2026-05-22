import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anjali Singh | Software Engineer',
  description:
    'Software engineer building thoughtful, user-driven systems. Product-minded engineering across marketing intelligence, healthcare, and mission-driven technology.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
