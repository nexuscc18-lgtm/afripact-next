import type { Metadata } from 'next';
import SignUpContent from '@/components/pages/SignUpContent';

export const metadata: Metadata = {
  title: 'Create Admin Account',
  description: 'Create an admin account for the Afripact Civils dashboard.',
  robots: { index: false, follow: false },
};

export default function SignUpPage() {
  return <SignUpContent />;
}
