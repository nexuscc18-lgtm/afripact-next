import type { Metadata } from 'next';
import ProjectsContent from '@/components/pages/ProjectsContent';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Civil engineering project case studies from Afripact Civils — earthworks, drainage, and site infrastructure delivered across KwaZulu-Natal.',
  alternates: { canonical: 'https://www.afripact.net/projects' },
};

export default function ProjectsPage() {
  return <ProjectsContent />;
}
