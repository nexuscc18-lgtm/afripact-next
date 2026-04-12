import type { Metadata } from 'next';
import HomeContent from '@/components/pages/HomeContent';

export const metadata: Metadata = {
  title: 'Afripact Civils | Civil Engineering Contractors KZN',
  description:
    'CIDB-registered civil engineering contractor in KwaZulu-Natal. Bulk earthworks, site preparation, stormwater, and civil infrastructure across KZN.',
  alternates: { canonical: 'https://www.afripact.net/' },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Afripact Civils',
  description:
    'CIDB-registered civil engineering contractor (Grade 2CE, 2GB) based in Pietermaritzburg, KwaZulu-Natal.',
  url: 'https://www.afripact.net',
  telephone: '+27330010397',
  email: 'quotes@afripact.net',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Pietermaritzburg',
    addressRegion: 'KwaZulu-Natal',
    addressCountry: 'ZA',
  },
  areaServed: { '@type': 'State', name: 'KwaZulu-Natal' },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Civil Engineering Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bulk Earthworks' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Site Preparation' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Stormwater Systems' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Road Construction' } },
    ],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Afripact Civils',
  url: 'https://www.afripact.net',
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.afripact.net/' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What civil engineering services does Afripact Civils offer?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Afripact Civils offers bulk earthworks, site preparation, stormwater and drainage systems, access roads, water and sewer reticulation, and civil infrastructure across KwaZulu-Natal.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Afripact Civils CIDB registered?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Afripact Civils is a CIDB-registered contractor with Grade 2CE (Civil Engineering) and 2GB (General Building) designations.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where does Afripact Civils operate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Afripact Civils operates across KwaZulu-Natal, including Pietermaritzburg, Durban, Msunduzi, Umgungundlovu, and surrounding areas.',
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeContent />
    </>
  );
}
