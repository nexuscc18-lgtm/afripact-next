import type { Metadata } from 'next';
import BathroomRenovationsContent from '@/components/pages/BathroomRenovationsContent';

export const metadata: Metadata = {
  title: 'Bathroom Renovations Durban & Pietermaritzburg | Afripact KZN',
  description:
    'Professional bathroom renovations in Durban and Pietermaritzburg. Tiling, plumbing, waterproofing, and full remodels. CIDB-registered renovation contractor across KwaZulu-Natal.',
  alternates: { canonical: 'https://www.afripact.net/renovations/bathroom' },
  openGraph: {
    title: 'Bathroom Renovations KZN | Afripact',
    description: 'Complete bathroom renovations in Durban, Pietermaritzburg, and KZN. One contractor for all trades.',
    url: 'https://www.afripact.net/renovations/bathroom',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Bathroom Renovations KwaZulu-Natal',
  description: 'Complete bathroom renovation services in Durban and Pietermaritzburg, KZN.',
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

export default function BathroomRenovationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <BathroomRenovationsContent />
    </>
  );
}
