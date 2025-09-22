import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { AuthProvider } from '@/contexts/auth-context';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Alex Johnson - Full-Stack Engineer Portfolio',
  description: 'Professional portfolio showcasing full-stack engineering expertise with integrated applications',
  keywords: 'full-stack developer, Next.js, React, TypeScript, portfolio',
  authors: [{ name: 'Alex Johnson' }],
  openGraph: {
    title: 'Alex Johnson - Full-Stack Engineer',
    description: 'Professional portfolio showcasing full-stack engineering expertise',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>

            {children}
      </body>
    </html>
  );
}