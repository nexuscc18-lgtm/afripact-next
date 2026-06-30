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

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What does a full home renovation include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Structural changes, bathroom and kitchen renovations, flooring, painting, roofing, plumbing and electrical updates, and external works, all under one contract.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a full home renovation take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Scope-dependent. A typical full home renovation runs 6 to 12 weeks. We provide a detailed programme at quote stage and hold to it.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can we live in the house during the renovation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Depends on the scope. For full renovations we recommend vacating for the main construction phase. We will advise based on your specific project.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle council approvals and building plans?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We advise on what requires approval and can assist with the process. Our CIDB registration supports the compliance documentation.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do you handle unexpected structural issues discovered mid-renovation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We stop, show you exactly what was found, give you options and costs, and only proceed with your sign-off. No surprises added to the bill without your agreement.',
      },
    },
  ],
};

export default function FullHomeRenovationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <FullHomeRenovationsContent />
    </>
  );
}
