import type { Metadata } from 'next';
import ContactContent from '@/components/pages/ContactContent';

export const metadata: Metadata = {
  title: 'Request a Civil Engineering Quote | Pietermaritzburg | Afripact Civils',
  description:
    'Request a project assessment from Afripact Civils. Civil engineering and construction across KwaZulu-Natal. Call 033 001 0397 or email quotes@afripact.net.',
  alternates: { canonical: 'https://www.afripact.net/contact' },
};

export default function ContactPage() {
  return <ContactContent />;
}
