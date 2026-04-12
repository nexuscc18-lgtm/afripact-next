import type { Metadata } from 'next';
import EarthworksKZNContent from '@/components/pages/EarthworksKZNContent';

export const metadata: Metadata = {
  title: 'Earthworks Contractors KZN | Bulk Earthworks KwaZulu-Natal',
  description:
    'Reliable earthworks contractors in KwaZulu-Natal. Bulk excavation, cut and fill, platform compaction, and site preparation. CIDB Grade 2CE registered.',
  alternates: { canonical: 'https://www.afripact.net/earthworks-kzn' },
};

export default function EarthworksKZNPage() {
  return <EarthworksKZNContent />;
}
