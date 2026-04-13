import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Task Admin Lab',
  description: 'Minimal task admin app scaffold'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
