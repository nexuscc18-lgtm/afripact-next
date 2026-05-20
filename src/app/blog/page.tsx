import { Metadata } from 'next';
import BlogContent from '@/components/pages/BlogContent';

export const metadata: Metadata = {
  title: 'Renovation Blog | Afripact Civils',
  description:
    'Practical renovation advice for homeowners and property owners in KwaZulu-Natal. Bathroom costs, kitchen planning, contractor selection, and more.',
  alternates: { canonical: 'https://www.afripact.net/blog' },
  openGraph: {
    title: 'Renovation Blog | Afripact Civils',
    description:
      'Practical renovation advice for homeowners and property owners in KwaZulu-Natal.',
    url: 'https://www.afripact.net/blog',
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
