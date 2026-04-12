import type { Metadata } from 'next';
import AboutContent from '@/components/pages/AboutContent';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Afripact Civils — a CIDB-registered civil engineering contractor in Pietermaritzburg, KwaZulu-Natal. Our values, credentials, and approach.',
  alternates: { canonical: 'https://www.afripact.net/about' },
};

export default function AboutPage() {
  return <AboutContent />;
}
