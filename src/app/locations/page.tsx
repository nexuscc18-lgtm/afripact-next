import type { Metadata } from 'next';
import LocationsContent from '@/components/pages/LocationsContent';

export const metadata: Metadata = {
  title: 'Renovation & Civil Contractor Across KwaZulu-Natal | Afripact',
  description:
    'Afripact serves Durban, Pietermaritzburg, uMhlanga, Ballito, Pinetown, and the wider KZN region. Bathroom renovations, kitchen remodels, commercial refurbishment, and civil construction.',
  alternates: { canonical: 'https://www.afripact.net/locations' },
  openGraph: {
    title: 'Renovation & Civil Contractor Serving Durban, Pietermaritzburg & KZN | Afripact',
    description: 'Afripact operates across KwaZulu-Natal from our Pietermaritzburg base. Renovation and civil engineering services in Durban, uMhlanga, Ballito, Pinetown, and surrounding areas.',
    url: 'https://www.afripact.net/locations',
  },
  twitter: {
    title: 'Renovation & Civil Contractor Serving Durban, Pietermaritzburg & KZN | Afripact',
    description: 'Afripact operates across KwaZulu-Natal from our Pietermaritzburg base. Renovation and civil engineering services in Durban, uMhlanga, Ballito, Pinetown, and surrounding areas.',
  },
};

export default function LocationsPage() {
  return <LocationsContent />;
}
