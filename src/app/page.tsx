import type { Metadata } from 'next';
import HomeContent from '@/components/pages/HomeContent';

export const metadata: Metadata = {
  title: 'Civil Engineering Contractors KZN | Earthworks, Roads & Site Prep | Afripact Civils',
  description:
    'CIDB Grade 2CE & 2GB civil contractors in KwaZulu-Natal. Earthworks, stormwater, roads, and site development \u2014 on time, on budget. Request a free project assessment.',
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
      "name": "What CIDB grade does Afripact Civils hold?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Afripact Civils is registered as a CIDB Grade 2CE (Civil Engineering) and Grade 2GB (General Building) contractor. Our CRS number is 10262268."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work as a subcontractor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We regularly work alongside construction companies as a reliable civils subcontractor, delivering to specification without delays or rework."
      }
    },
    {
      "@type": "Question",
      "name": "What areas do you serve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We operate across KwaZulu-Natal, with a primary base in Pietermaritzburg and active projects throughout the greater KZN region including Durban."
      }
    },
    {
      "@type": "Question",
      "name": "What is the minimum project size you take on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We focus on commercial, industrial, and development-scale projects. Contact us to discuss your specific scope and we will advise on fit."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a typical earthworks project take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Timeline depends on site size and conditions. We provide a detailed schedule at assessment stage and we hold to it. No open-ended timelines."
      }
    },
    {
      "@type": "Question",
      "name": "How do I request a quote or project assessment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Call 033 001 0397, email quotes@afripact.net, or use the Request Assessment form on this site. We respond within 1 business day."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in your site development service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our site development service covers earthworks, bulk services, stormwater, access roads, and full site preparation — coordinated under one contractor."
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
