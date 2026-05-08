import type { Metadata } from 'next';
import CommercialRenovationsContent from '@/components/pages/CommercialRenovationsContent';

export const metadata: Metadata = {
  title: 'Commercial Renovations KZN | Office & Retail Refurbishment Durban | Afripact',
  description:
    'Office fitouts, retail refurbishments, and commercial renovations in Durban, Pietermaritzburg, and KwaZulu-Natal. CIDB-registered contractor. Planned around your operations.',
  alternates: { canonical: 'https://www.afripact.net/renovations/commercial' },
  openGraph: {
    title: 'Commercial Renovations KZN | Afripact',
    description: 'Office, retail, and commercial renovations across KZN. CIDB-registered.',
    url: 'https://www.afripact.net/renovations/commercial',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Commercial Renovations KwaZulu-Natal',
  description: 'Office, retail, and commercial building renovation services in Durban and Pietermaritzburg.',
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

export default function CommercialRenovationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <CommercialRenovationsContent />
    </>
  );
}
