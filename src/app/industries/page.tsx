import type { Metadata } from 'next';
import IndustriesContent from '@/components/pages/IndustriesContent';

export const metadata: Metadata = {
  title: 'CIDB Contractor for Developers & Construction Companies | Afripact Civils KZN',
  description:
    'We work with property developers, construction companies, and industrial clients across KwaZulu-Natal. Reliable civils subcontracting and project execution.',
  alternates: { canonical: 'https://www.afripact.net/industries' },
};

export default function IndustriesPage() {
  return <IndustriesContent />;
}
