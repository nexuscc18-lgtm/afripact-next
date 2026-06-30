import type { Metadata } from 'next';
import HomeContent from '@/components/pages/HomeContent';

export const metadata: Metadata = {
  title: 'Renovation Contractors KZN | Home Renovations Durban & Pietermaritzburg | Afripact',
  description:
    'CIDB-registered renovation and civil contractor in KwaZulu-Natal. Bathroom renovations, kitchen remodels, full home and commercial renovations in Durban, Pietermaritzburg, and KZN.',
  alternates: { canonical: 'https://www.afripact.net/' },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.afripact.net/' },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you do bathroom and kitchen renovations in Durban and Pietermaritzburg?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We carry out bathroom renovations, kitchen renovations, and full home renovations across KwaZulu-Natal, including Durban, Pietermaritzburg, uMhlanga, Ballito, and surrounding areas."
      }
    },
    {
      "@type": "Question",
      "name": "Do you manage all trades in a renovation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We manage all trades under one contract: plumbing, tiling, electrical, waterproofing, painting, and carpentry. You deal with one point of contact from start to finish."
      }
    },
    {
      "@type": "Question",
      "name": "What CIDB grade does Afripact hold?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are registered as a CIDB Grade 2CE (Civil Engineering) and Grade 2GB (General Building) contractor. CRS number: 10262268."
      }
    },
    {
      "@type": "Question",
      "name": "Are you NHBRC registered?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NHBRC registration is in progress and expected to be confirmed by August 2026. Our current CIDB Grade 2GB registration covers general building work."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We operate across KwaZulu-Natal: Durban, Pietermaritzburg, uMhlanga, Ballito, Pinetown, Margate, Port Shepstone, and surrounding KZN areas."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a bathroom renovation take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard bathroom renovation typically takes 2 to 4 weeks depending on scope. We provide a detailed schedule at quote stage and we hold to it."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get a quote?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call 069 503 6291, email info@afripact.net, or use the contact form on this site. We respond within one business day."
      }
    }
  ]
};

export default function HomePage() {
  return (
    <>
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
