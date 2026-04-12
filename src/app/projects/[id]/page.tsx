import type { Metadata } from 'next';
import ProjectDetailContent from '@/components/pages/ProjectDetailContent';

interface Props {
  params: Promise<{ id: string }>;
}

const projectTitles: Record<string, string> = {
  '1': 'Residential Development Platform Preparation',
  '2': 'Industrial Stormwater System',
  '3': 'Access Road Construction',
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const title = projectTitles[id] ?? 'Project Case Study';
  return {
    title,
    description: `Case study: ${title} — civil engineering project delivered by Afripact Civils in KwaZulu-Natal.`,
    alternates: { canonical: `https://www.afripact.net/projects/${id}` },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  return <ProjectDetailContent projectId={id} />;
}
