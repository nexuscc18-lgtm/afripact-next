import type { Metadata } from 'next';
import OfficeRenovationsContent from '@/components/pages/OfficeRenovationsContent';

export const metadata: Metadata = {
  title: 'Office Renovations Durban & Pietermaritzburg | Afripact KZN',
  description:
    'Office renovation contractor in KwaZulu-Natal. Fitouts, refurbishments, and commercial office builds in Durban, Pietermaritzburg, and across KZN. CIDB-registered. Delivered around your operations.',
  alternates: { canonical: 'https://www.afripact.net/renovations/office' },
  openGraph: {
    title: 'Office Renovations Durban & Pietermaritzburg | Afripact KZN',
    description: 'Office renovation contractor in KwaZulu-Natal. Fitouts, refurbishments, and commercial office builds in Durban, Pietermaritzburg, and across KZN. CIDB-registered. Delivered around your operations.',
    url: 'https://www.afripact.net/renovations/office',
  },
  twitter: {
    title: 'Office Renovations Durban & Pietermaritzburg | Afripact KZN',
    description: 'Office renovation contractor in KwaZulu-Natal. Fitouts, refurbishments, and commercial office builds in Durban, Pietermaritzburg, and across KZN. CIDB-registered. Delivered around your operations.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Office Renovations KwaZulu-Natal',
  description: 'Office fitout, refurbishment, and renovation services in Durban and Pietermaritzburg.',
  serviceType: 'Office Renovation',
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
      name: 'How long does an office renovation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Scope-dependent. A standard office refurbishment runs 2 to 6 weeks. Full fitouts including partitioning, electrical, and mechanical take longer. We detail the programme at quote stage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you renovate our office while we keep working?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We phase the work, section by section or after hours, to keep disruption to a minimum. The schedule is agreed before work starts.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle partitioning, electrical, and data points as part of the renovation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Demountable partitioning, electrical reconfiguration, lighting upgrades, and data conduit are all within scope. We manage all trades under one contract.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you CIDB-registered for commercial office renovation work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Afripact holds CIDB Grade 2CE and 2GB registration. CRS number 10262268. This covers the civil and general building work involved in office renovation and fitout projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you carry out office renovations in Durban as well as Pietermaritzburg?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We operate across KwaZulu-Natal from our Pietermaritzburg base, Durban, uMhlanga, Pinetown, and surrounding KZN areas.',
      },
    },
  ],
};

export default function OfficeRenovationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <OfficeRenovationsContent />
    </>
  );
}
