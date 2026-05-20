import Link from 'next/link';
import { ArrowRight, ArrowLeft, Tag } from 'lucide-react';
import { Post } from '@/data/posts';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-ZA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogPostContent({ post }: { post: Post }) {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <ArrowRight className="w-4 h-4" />
            <Link href="/blog" className="hover:text-orange-500 transition-colors">Blog</Link>
            <ArrowRight className="w-4 h-4" />
            <span className="text-orange-500">{post.title}</span>
          </nav>
          <div className="max-w-4xl">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-orange-500 uppercase tracking-widest">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-gray-400 text-sm">{formatDate(post.date)}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="space-y-6 text-lg text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.body }}
          />
          <div className="mt-16 pt-8 border-t border-gray-100">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to all articles
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
