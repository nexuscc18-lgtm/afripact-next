import type { Metadata } from 'next';
import NHBRCContent from '@/components/pages/NHBRCContent';

export const metadata: Metadata = {
  title: 'NHBRC Registered Contractor KZN | Afripact Civils | Pietermaritzburg',
  description:
    'Afripact is completing NHBRC registration for residential home building in KwaZulu-Natal. CIDB Grade 2GB currently active. Registration confirmation expected August 2026.',
  alternates: { canonical: 'https://www.afripact.net/nhbrc' },
};

export default function NHBRCPage() {
  return <NHBRCContent />;
}
