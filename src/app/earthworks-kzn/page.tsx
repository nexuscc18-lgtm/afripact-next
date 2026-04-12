import type { Metadata } from 'next';
import EarthworksKZNContent from '@/components/pages/EarthworksKZNContent';

export const metadata: Metadata = {
  title: 'Earthworks Contractors KwaZulu-Natal | Site Clearing & Grading | Afripact Civils',
  description:
    'Professional earthworks in KZN. Site clearing, excavation, compaction, and land grading by a CIDB Grade 2CE registered contractor. No weak spots. No rework.',
  alternates: { canonical: 'https://www.afripact.net/earthworks-kzn' },
};

export default function EarthworksKZNPage() {
  return <EarthworksKZNContent />;
}
