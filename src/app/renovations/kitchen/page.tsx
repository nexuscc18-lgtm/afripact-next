import type { Metadata } from 'next';
import KitchenRenovationsContent from '@/components/pages/KitchenRenovationsContent';

export const metadata: Metadata = {
  title: 'Kitchen Renovations Durban & Pietermaritzburg | Afripact KZN',
  description:
    'Full kitchen renovations in Durban, Pietermaritzburg, and KwaZulu-Natal. Plumbing, cabinetry, tiling, countertops, all trades under one contractor. CIDB-registered.',
  alternates: { canonical: 'https://www.afripact.net/renovations/kitchen' },
  openGraph: {
    title: 'Kitchen Renovations KZN | Afripact',
    description: 'Full kitchen renovations across KZN. One contractor managing all trades.',
    url: 'https://www.afripact.net/renovations/kitchen',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Kitchen Renovations KwaZulu-Natal',
  description: 'Complete kitchen renovation services in Durban and Pietermaritzburg, KZN.',
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
      name: 'How long does a kitchen renovation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Typically 3 to 5 weeks for a full remodel. Layout changes and structural work extend the timeline, we detail this at quote stage.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can you move plumbing and electrical as part of the renovation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We handle plumbing relocation, new connections, and electrical reconfiguration in-house.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you do commercial kitchen fit-outs as well as residential?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We carry out restaurant, guesthouse, and catering facility kitchen builds to compliance and operational standards.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between a kitchen update and a full renovation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'An update replaces surfaces, cabinetry, countertops, tiling, without demolition. A full renovation starts from scratch and can include layout changes. We will tell you which one your kitchen actually needs.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you supply cabinetry and countertops?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We can procure and install, or work with a client-supplied joiner. We manage the coordination either way.',
      },
    },
  ],
};

export default function KitchenRenovationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <KitchenRenovationsContent />
    </>
  );
}
