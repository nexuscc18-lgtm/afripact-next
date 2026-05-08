import type { Metadata } from 'next';
import IndustriesContent from '@/components/pages/IndustriesContent';

export const metadata: Metadata = {
  title: 'Civil Contractor for Developers, NGOs & Construction Companies | Afripact Civils KZN',
  description:
    'We work with property developers, construction companies, NGOs, and donor-funded organisations across KwaZulu-Natal. CIDB-registered civil contractor for community infrastructure and development projects.',
  alternates: { canonical: 'https://www.afripact.net/industries' },
};

export default function IndustriesPage() {
  return <IndustriesContent />;
}
