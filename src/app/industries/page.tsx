import type { Metadata } from 'next';
import IndustriesContent from '@/components/pages/IndustriesContent';

export const metadata: Metadata = {
  title: 'Industries We Serve',
  description:
    'Civil engineering solutions for property developers, construction companies, and industrial projects across KwaZulu-Natal. CIDB-registered contractor.',
  alternates: { canonical: 'https://www.afripact.net/industries' },
};

export default function IndustriesPage() {
  return <IndustriesContent />;
}
