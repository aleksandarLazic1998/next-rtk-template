import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/sass/main.scss';
import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { LayoutComponent } from '../LayoutComponents/LayoutComponent';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next RTK Template',
  description: 'Template for generating Next.js projects with RTK and RTKQuery',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>
        <LayoutComponent>{children}</LayoutComponent>
      </body>
    </html>
  );
}
