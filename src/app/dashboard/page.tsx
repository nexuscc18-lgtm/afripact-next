import type { Metadata } from 'next';
import DashboardContent from '@/components/pages/DashboardContent';

export const metadata: Metadata = {
  title: 'Admin Dashboard',
  description: 'Afripact Civils admin dashboard — view and manage contact and quote submissions.',
  robots: { index: false, follow: false },
};

export default function DashboardPage() {
  return <DashboardContent />;
}
