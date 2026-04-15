import type { Metadata } from 'next';
import ProjectsContent from '@/components/pages/ProjectsContent';

export const metadata: Metadata = {
  title: 'Civil Engineering Projects KwaZulu-Natal | Afripact Civils Portfolio',
  description:
    'Completed civil engineering projects across KZN \u2014 township infrastructure, commercial site development, and road rehabilitation. Delivered on time, without compromise.',
  alternates: { canonical: 'https://www.afripact.net/projects' },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
