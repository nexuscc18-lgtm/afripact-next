import type { Metadata } from 'next';
import KitchenRenovationsContent from '@/components/pages/KitchenRenovationsContent';

export const metadata: Metadata = {
  title: 'Kitchen Renovations Durban & Pietermaritzburg | Afripact KZN',
  description:
    'Full kitchen renovations in Durban, Pietermaritzburg, and KwaZulu-Natal. Plumbing, cabinetry, tiling, countertops — all trades under one contractor. CIDB-registered.',
  alternates: { canonical: 'https://www.afripact.net/renovations/kitchen' },
  openGraph: {
    title: 'Kitchen Renovations KZN | Afripact',
    description: 'Full kitchen renovations across KZN. One contractor managing all trades.',
    url: 'https://www.afripact.net/renovations/kitchen',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Kitchen Renovations KwaZulu-Natal',
  description: 'Complete kitchen renovation services in Durban and Pietermaritzburg, KZN.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Afripact Civils',
    url: 'https://www.afripact.net',
    telephone: '+27695036291',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pietermaritzburg',
      addressRegion: 'KwaZulu-Natal',
      addressCountry: 'ZA',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Durban' },
    { '@type': 'City', name: 'Pietermaritzburg' },
    { '@type': 'State', name: 'KwaZulu-Natal' },
  ],
};

export default function KitchenRenovationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <KitchenRenovationsContent />
    </>
  );
}
