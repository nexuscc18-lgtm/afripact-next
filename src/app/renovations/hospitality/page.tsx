import type { Metadata } from 'next';
import HospitalityRenovationsContent from '@/components/pages/HospitalityRenovationsContent';

export const metadata: Metadata = {
  title: 'Hospitality Renovations KZN | Hotels, Guesthouses & Restaurants | Afripact',
  description:
    'Hotel, guesthouse, lodge, and restaurant renovations across KwaZulu-Natal. Phased delivery around your trading schedule. CIDB-registered renovation contractor in Durban and Pietermaritzburg.',
  alternates: { canonical: 'https://www.afripact.net/renovations/hospitality' },
  openGraph: {
    title: 'Hospitality Renovations KZN | Hotels, Guesthouses & Restaurants | Afripact',
    description: 'Hotel, guesthouse, lodge, and restaurant renovations across KwaZulu-Natal. Phased delivery around your trading schedule. CIDB-registered renovation contractor in Durban and Pietermaritzburg.',
    url: 'https://www.afripact.net/renovations/hospitality',
  },
  twitter: {
    title: 'Hospitality Renovations KZN | Hotels, Guesthouses & Restaurants | Afripact',
    description: 'Hotel, guesthouse, lodge, and restaurant renovations across KwaZulu-Natal. Phased delivery around your trading schedule. CIDB-registered renovation contractor in Durban and Pietermaritzburg.',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Hospitality Renovations KwaZulu-Natal',
  description: 'Hotel, guesthouse, lodge, and restaurant renovation services in Durban and Pietermaritzburg.',
  serviceType: 'Hospitality Renovation',
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
      name: 'Can you renovate our hotel or guesthouse without closing it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We plan the work around your occupancy and trading calendar, room by room, wing by wing, or off-season scheduling. You stay open and we stay out of the way of your guests.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a hotel room refurbishment take per room?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A standard room refurbishment typically runs 5 to 10 working days per room depending on scope. We detail the programme at quote stage so you can plan your bookings accordingly.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle restaurant kitchen renovations for hospitality businesses?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Restaurant and commercial kitchen renovations are within scope, layout changes, cabinetry, countertops, tiling, plumbing, and electrical, all managed under one contract.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are you CIDB-registered to carry out commercial hospitality renovation work?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Afripact holds CIDB Grade 2CE and 2GB registration. CRS number 10262268. This covers the civil and general building work involved in hospitality renovation projects.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you work in Durban and surrounding KZN areas for hospitality projects?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We operate across KwaZulu-Natal from our Pietermaritzburg base, Durban, uMhlanga, Ballito, the Midlands, and surrounding areas.',
      },
    },
  ],
};

export default function HospitalityRenovationsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HospitalityRenovationsContent />
    </>
  );
}
