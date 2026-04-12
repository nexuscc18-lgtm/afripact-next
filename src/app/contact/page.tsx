import type { Metadata } from 'next';
import ContactContent from '@/components/pages/ContactContent';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Afripact Civils for civil engineering projects in KwaZulu-Natal. Call 033 001 0397 or email quotes@afripact.net.',
  alternates: { canonical: 'https://www.afripact.net/contact' },
};

export default function ContactPage() {
  return <ContactContent />;
}
