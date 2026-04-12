import type { Metadata } from 'next';
import ServicesContent from '@/components/pages/ServicesContent';

export const metadata: Metadata = {
  title: 'Civil Engineering Services Pietermaritzburg | Afripact Civils',
  description:
    'Full-scope civil and building services in KZN. Earthworks, stormwater, roads, site development, paving, and more. CIDB-registered. Get a quote today.',
  alternates: { canonical: 'https://www.afripact.net/services' },
};

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Afripact Civils',
    url: 'https://www.afripact.net',
  },
  areaServed: { '@type': 'State', name: 'KwaZulu-Natal' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Civil Engineering Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bulk Earthworks & Excavation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Site Preparation & Grading' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Stormwater & Drainage Systems' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Access Roads & Paving' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Water & Sewer Reticulation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Retaining Structures' } },
    ],
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <ServicesContent />
    </>
  );
}
