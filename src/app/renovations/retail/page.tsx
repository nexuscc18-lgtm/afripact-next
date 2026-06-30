import type { Metadata } from 'next';
import RetailRenovationsContent from '@/components/pages/RetailRenovationsContent';

export const metadata: Metadata = {
  title: 'Retail Renovations & Shopfitting KZN | Afripact',
  description:
    'Retail renovation and shopfitting contractor in KwaZulu-Natal and South Africa. Shopfronts, display areas, store fitouts, and retail refurbishment. CIDB-registered. Durban and Pietermaritzburg.',
  alternates: { canonical: 'https://www.afripact.net/renovations/retail' },
  openGraph: {
    title: 'Retail Renovations & Shopfitting KZN | Afripact',
    description: 'Retail renovation and shopfitting contractor in KwaZulu-Natal and South Africa. Shopfronts, display areas, store fitouts, and retail refurbishment. CIDB-registered. Durban and Pietermaritzburg.',
    url: 'https://www.afripact.net/renovations/retail',
  },
  twitter: {
    title: 'Retail Renovations & Shopfitting KZN | Afripact',
    description: 'Retail renovation and shopfitting contractor in KwaZulu-Natal and South Africa. Shopfronts, display areas, store fitouts, and retail refurbishment. CIDB-registered. Durban and Pietermaritzburg.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Retail Renovations & Shopfitting KwaZulu-Natal',
  description: 'Retail store renovation, shopfitting, and display area refurbishment services in Durban and Pietermaritzburg.',
  serviceType: 'Retail Renovation',
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
    { '@type': 'Country', name: 'South Africa' },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does a retail renovation or shopfit take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard shopfit runs 2 to 5 weeks depending on scope. Larger store renovations with structural changes take longer. We provide a firm programme at quote stage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you carry out the renovation after hours so we can keep trading?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. After-hours and weekend delivery is standard for us on occupied retail environments. The schedule is agreed upfront and we hold to it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you do shopfronts and signage structures as part of the renovation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Shopfront construction, aluminium framing, glazing, and structural signage support are within scope.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you CIDB-registered for retail renovation work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Afripact holds CIDB Grade 2CE and 2GB registration. CRS number 10262268. This covers the civil and general building work involved in retail renovation and shopfitting.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work outside KZN for national retail clients?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Primarily KwaZulu-Natal, but we consider national retail projects on a case-by-case basis. Contact us to discuss your scope and locations.',
      },
    },
  ],
};

export default function RetailRenovationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <RetailRenovationsContent />
    </>
  );
}
