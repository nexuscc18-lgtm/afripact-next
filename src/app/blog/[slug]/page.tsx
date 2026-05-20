import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { posts } from '@/data/posts';
import BlogPostContent from '@/components/pages/BlogPostContent';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.id === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Afripact Civils`,
    description: post.excerpt,
    alternates: { canonical: `https://www.afripact.net/blog/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://www.afripact.net/blog/${slug}`,
    },
  };
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.id }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.id === slug);
  if (!post) notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    datePublished: post.date,
    publisher: {
      '@type': 'Organization',
      name: 'Afripact Civils',
      url: 'https://www.afripact.net',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostContent post={post} />
    </>
  );
}
