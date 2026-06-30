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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does a bathroom renovation take in KZN?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '2 to 4 weeks depending on scope. We provide a detailed schedule at quote stage and hold to it.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does a bathroom renovation cost in Durban?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Cost depends on scope, fixtures, and finishes. We provide a fixed quote before any work begins, no open-ended billing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle waterproofing as part of the renovation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Waterproofing is not optional on any bathroom we touch. It is built into every scope.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you renovate a bathroom while the house is occupied?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We phase the work to minimise disruption and agree a clear schedule upfront.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you supply fixtures and fittings, or do I source them?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Both options work. We can procure everything or work with client-supplied fixtures, we will advise on what fits the space and budget.',
      },
    },
  ],
};

export default function BathroomRenovationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BathroomRenovationsContent />
    </>
  );
}
