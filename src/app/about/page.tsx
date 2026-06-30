import type { Metadata } from 'next';
import AboutContent from '@/components/pages/AboutContent';

export const metadata: Metadata = {
  title: 'About Afripact Civils | CIDB Grade 2 Contractor KZN',
  description:
    'Afripact Civils is a CIDB-registered contractor (Grade 2CE & 2GB, CRS 10262268) based in Pietermaritzburg. Built on accountability and quality workmanship.',
  alternates: { canonical: 'https://www.afripact.net/about' },
  openGraph: {
    title: 'About Afripact Civils | CIDB Grade 2 Contractor KZN',
    description: 'Afripact Civils is a CIDB-registered contractor (Grade 2CE & 2GB, CRS 10262268) based in Pietermaritzburg. Built on accountability and quality workmanship.',
    url: 'https://www.afripact.net/about',
  },
  twitter: {
    title: 'About Afripact Civils | CIDB Grade 2 Contractor KZN',
    description: 'Afripact Civils is a CIDB-registered contractor (Grade 2CE & 2GB, CRS 10262268) based in Pietermaritzburg. Built on accountability and quality workmanship.',
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
