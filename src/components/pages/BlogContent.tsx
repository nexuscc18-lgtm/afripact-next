import Link from 'next/link';
import { ArrowRight, Tag } from 'lucide-react';
import { posts } from '@/data/posts';

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('en-ZA', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export default function BlogContent() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <ArrowRight className="w-4 h-4" />
            <span className="text-orange-500">Blog</span>
          </nav>
          <div className="max-w-4xl">
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-4">
              KwaZulu-Natal
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Renovation Insights
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl">
              Practical advice on bathroom renovations, kitchen remodels, and building in KwaZulu-Natal. Written by the team at Afripact Civils.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-orange-500 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-semibold text-orange-500 uppercase tracking-wide">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-400 mb-4">{formatDate(post.date)}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
                <div className="flex items-center gap-2 text-orange-500 font-semibold group-hover:gap-3 transition-all">
                  <span>Read More</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
