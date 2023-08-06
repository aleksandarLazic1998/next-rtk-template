import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/sass/main.scss';
import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { LayoutComponent } from '../LayoutComponents/LayoutComponent';
import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next RTK Template',
  description: 'Template for generating Next.js projects with RTK and RTKQuery',
  keywords: [
    'next.js',
    'ReduxToolkit',
    'RTKQuery',
    'Axios',
    'TypeScript',
    'Redux',
    'Template',
  ],
  applicationName: 'Next ReduxToolkit Template',
  creator: 'Aleksandar Lazic',
  icons: { icon: ['/favicon.ico?v=1'], apple: ['/apple-touch-icon.png?v=1'] },
  manifest: '/manifest.json',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Analytics />
        <LayoutComponent>{children}</LayoutComponent>
      </body>
    </html>
  );
}
