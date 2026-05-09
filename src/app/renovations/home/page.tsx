import type { Metadata } from 'next';
import FullHomeRenovationsContent from '@/components/pages/FullHomeRenovationsContent';

export const metadata: Metadata = {
  title: 'Full Home Renovations KZN | Durban & Pietermaritzburg | Afripact',
  description:
    'Complete home renovation services across KwaZulu-Natal. Structural changes, bathrooms, kitchens, flooring, painting, all managed under one contractor. Serving Durban, Pietermaritzburg, and KZN.',
  alternates: { canonical: 'https://www.afripact.net/renovations/home' },
  openGraph: {
    title: 'Full Home Renovations KZN | Afripact',
    description: 'Complete home renovations in Durban, Pietermaritzburg, and KZN. One contractor, all trades.',
    url: 'https://www.afripact.net/renovations/home',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Full Home Renovations KwaZulu-Natal',
  description: 'Complete home renovation and remodelling services in Durban and Pietermaritzburg.',
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

export default function FullHomeRenovationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <FullHomeRenovationsContent />
    </>
  );
}
