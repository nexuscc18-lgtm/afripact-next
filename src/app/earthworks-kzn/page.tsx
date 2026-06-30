import type { Metadata } from 'next';
import EarthworksKZNContent from '@/components/pages/EarthworksKZNContent';

export const metadata: Metadata = {
  title: 'Earthworks Contractors KwaZulu-Natal | Site Clearing & Grading | Afripact Civils',
  description:
    'Professional earthworks in KZN. Site clearing, excavation, compaction, and land grading by a CIDB Grade 2CE registered contractor. No weak spots. No rework.',
  alternates: { canonical: 'https://www.afripact.net/earthworks-kzn' },
  openGraph: {
    title: 'Earthworks Contractors KZN | Bulk Excavation & Site Preparation | Afripact',
    description: 'CIDB Grade 2CE registered earthworks contractor in KwaZulu-Natal. Bulk excavation, site clearing, compaction, and civil infrastructure across Durban and Pietermaritzburg.',
    url: 'https://www.afripact.net/earthworks-kzn',
  },
  twitter: {
    title: 'Earthworks Contractors KZN | Bulk Excavation & Site Preparation | Afripact',
    description: 'CIDB Grade 2CE registered earthworks contractor in KwaZulu-Natal. Bulk excavation, site clearing, compaction, and civil infrastructure across Durban and Pietermaritzburg.',
  },
};

export default function EarthworksKZNPage() {
  return <EarthworksKZNContent />;
}
