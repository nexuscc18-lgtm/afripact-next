import type { Metadata } from 'next';
import LocationsContent from '@/components/pages/LocationsContent';

export const metadata: Metadata = {
  title: 'Civil Engineering Services Across KwaZulu-Natal | Afripact Civils',
  description:
    'Afripact Civils operates across KwaZulu-Natal — Pietermaritzburg, Durban, and surrounding areas. CIDB-registered civil contractor serving the full KZN region.',
  alternates: { canonical: 'https://www.afripact.net/locations' },
};

export default function LocationsPage() {
  return <LocationsContent />;
}
