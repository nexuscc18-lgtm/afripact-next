import type { Metadata } from 'next';
import NHBRCContent from '@/components/pages/NHBRCContent';

export const metadata: Metadata = {
  title: 'NHBRC Registered Contractor KZN | Afripact Civils | Pietermaritzburg',
  description:
    'Afripact is completing NHBRC registration for residential home building in KwaZulu-Natal. CIDB Grade 2GB currently active. Registration confirmation expected August 2026.',
  alternates: { canonical: 'https://www.afripact.net/nhbrc' },
  openGraph: {
    title: 'NHBRC Registered Contractor KZN | Afripact Civils Pietermaritzburg',
    description: 'Afripact holds CIDB Grade 2CE and 2GB registration. NHBRC registration in progress, expected August 2026. Based in Pietermaritzburg, serving KwaZulu-Natal.',
    url: 'https://www.afripact.net/nhbrc',
  },
  twitter: {
    title: 'NHBRC Registered Contractor KZN | Afripact Civils Pietermaritzburg',
    description: 'Afripact holds CIDB Grade 2CE and 2GB registration. NHBRC registration in progress, expected August 2026. Based in Pietermaritzburg, serving KwaZulu-Natal.',
  },
};

export default function NHBRCPage() {
  return <NHBRCContent />;
}
