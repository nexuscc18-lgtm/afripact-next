import type { Metadata } from 'next';
import LocationsContent from '@/components/pages/LocationsContent';

export const metadata: Metadata = {
  title: 'Service Areas in KwaZulu-Natal',
  description:
    'Afripact Civils serves Pietermaritzburg, Durban, Msunduzi, Umgungundlovu, and surrounding areas across KwaZulu-Natal. Contact us for your area.',
  alternates: { canonical: 'https://www.afripact.net/locations' },
};

export default function LocationsPage() {
  return <LocationsContent />;
}
