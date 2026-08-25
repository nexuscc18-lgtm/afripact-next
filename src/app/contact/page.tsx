import type { Metadata } from 'next';
import ContactContent from '@/components/pages/ContactContent';
import { CONTACT } from '@/lib/contact';

export const metadata: Metadata = {
  title: 'Get a Renovation or Building Quote | KZN | Afripact',
  description:
    `Request a free quote from Afripact. Bathroom renovations, kitchen remodels, full home renovations, and civil engineering across KwaZulu-Natal. Call ${CONTACT.phoneMobile} or email ${CONTACT.email}.`,
  alternates: { canonical: 'https://www.afripact.net/contact' },
};

export default function ContactPage() {
  return <ContactContent />;
}
