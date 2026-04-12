'use client';

import { usePathname } from 'next/navigation';
import { QuoteModalProvider } from '@/contexts/QuoteModalContext';
import Header from './Header';
import Footer from './Footer';
import FloatingContact from './FloatingContact';

const AUTH_PATHS = ['/login', '/signup', '/dashboard'];

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showShell = !AUTH_PATHS.includes(pathname);

  if (!showShell) {
    return <>{children}</>;
  }

  return (
    <QuoteModalProvider>
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
      <FloatingContact />
    </QuoteModalProvider>
  );
}
