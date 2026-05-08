import type { Metadata } from 'next';
import RenovationsContent from '@/components/pages/RenovationsContent';

export const metadata: Metadata = {
  title: 'Renovation Contractors KZN | Home & Commercial Renovations Durban & Pietermaritzburg',
  description:
    'Bathroom renovations, kitchen remodels, full home renovations, and commercial refurbishment across KwaZulu-Natal. CIDB-registered renovation contractor serving Durban, Pietermaritzburg, and KZN.',
  alternates: { canonical: 'https://www.afripact.net/renovations' },
  openGraph: {
    title: 'Renovation Contractors KZN | Afripact',
    description: 'Bathroom, kitchen, full home, and commercial renovations across KZN. One contractor, all trades, clear timelines.',
    url: 'https://www.afripact.net/renovations',
  },
};

const renovationsSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Renovation Contractors KwaZulu-Natal',
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
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Renovation Services KZN',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bathroom Renovations Durban' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kitchen Renovations Pietermaritzburg' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Home Renovations KZN' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Renovations KwaZulu-Natal' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Repair and Maintenance KZN' } },
    ],
  },
};

export default function RenovationsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(renovationsSchema) }}
      />
      <RenovationsContent />
    </>
  );
}
