import type { Metadata } from 'next';
import AboutContent from '@/components/pages/AboutContent';

export const metadata: Metadata = {
  title: 'About Afripact Civils | CIDB Grade 2 Contractor KZN | Cebo Mbatha',
  description:
    'Afripact Civils is a CIDB-registered contractor (Grade 2CE & 2GB, CRS 10262268) based in Pietermaritzburg. Founded by Cebo Mbatha. Built on accountability and quality workmanship.',
  alternates: { canonical: 'https://www.afripact.net/about' },
};

export default function AboutPage() {
  return <AboutContent />;
}
