import type { Metadata } from 'next';
import LoginContent from '@/components/pages/LoginContent';

export const metadata: Metadata = {
  title: 'Admin Login',
  description: 'Sign in to the Afripact Civils admin dashboard.',
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return <LoginContent />;
}
