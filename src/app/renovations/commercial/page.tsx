import type { Metadata } from 'next';
import CommercialRenovationsContent from '@/components/pages/CommercialRenovationsContent';

export const metadata: Metadata = {
  title: 'Commercial Renovations KZN | CIDB-Registered | Afripact Civils',
  description:
    'CIDB-registered commercial renovation contractor in KZN. Office fitouts, retail refurbishments, hospitality renovations. Phased delivery planned around your business hours.',
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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can you work after hours or in phases to avoid disrupting our business?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We structure the work programme around your operational requirements, after-hours, weekend, or phased delivery. This is agreed before work begins.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you handle a commercial renovation on a tight deadline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Detailed programme drawn up at the outset, sequenced by trade, with single-point accountability. If something threatens the timeline, you hear about it before it becomes a problem.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you carry out retail shopfitting as well as office renovations?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Retail fitouts, shopfronts, display area renovations, and back-of-house upgrades are all within scope.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does your CIDB Grade 2CE and 2GB registration mean for a commercial client?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It means verified competency, compliant documentation, and a contractor that meets procurement requirements for formal commercial projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you renovate a single floor or section of a building while the rest remains operational?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Phased, floor-by-floor, or section-by-section delivery is standard for us on occupied commercial buildings.',
      },
    },
  ],
};

export default function CommercialRenovationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <CommercialRenovationsContent />
    </>
  );
}
