import type { Metadata } from 'next';
import ContactContent from '@/components/pages/ContactContent';

export const metadata: Metadata = {
  title: 'Get a Renovation or Building Quote | KZN | Afripact',
  description:
    'Request a free quote from Afripact. Bathroom renovations, kitchen remodels, full home renovations, and civil engineering across KwaZulu-Natal. Call 069 503 6291 or email info@afripact.net.',
  alternates: { canonical: 'https://www.afripact.net/contact' },
};

export default function ContactPage() {
  return <ContactContent />;
}
