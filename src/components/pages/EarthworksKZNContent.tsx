'use client';

import { useRouter } from 'next/navigation';
import { ArrowRight, CheckCircle, Shovel, Map, Droplet } from 'lucide-react';

export default function EarthworksKZNContent() {
  const router = useRouter();
  const goToContact = () => router.push('/contact');

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-4">KwaZulu-Natal</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">Reliable Earthworks Contractors in KZN</h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-3xl">
              Afripact delivers bulk earthworks, site preparation, and civil infrastructure projects across KwaZulu-Natal. Our focus is simple: deliver on time, without rework, and to specification.
            </p>
            <button onClick={goToContact}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50 inline-flex items-center gap-2">
              Request Project Assessment <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Earthworks Done Right, Across KwaZulu-Natal</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>Earthworks is where projects succeed or fail. Get the platform preparation wrong, and everything that follows costs more and takes longer. We&apos;ve seen it happen — and we&apos;ve been brought in to fix it.</p>
                <p>Our earthworks teams operate across the greater KwaZulu-Natal region, from Pietermaritzburg to surrounding areas. We handle bulk excavation, cut and fill, compaction, and platform preparation for residential, commercial, and industrial sites.</p>
                <p>We&apos;re a CIDB-registered contractor — Grade 2CE — which means you get a team with verified competency in civil engineering, not someone learning on your project.</p>
              </div>
            </div>
            <div>
              <img src="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Earthworks in KwaZulu-Natal" className="rounded-2xl shadow-2xl w-full" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">What We Deliver</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Shovel, title: 'Bulk Earthworks',
                items: ['Site clearing', 'Bulk excavation', 'Cut and fill operations', 'Platform compaction', 'Topsoil stripping'],
              },
              {
                icon: Map, title: 'Site Preparation',
                items: ['Formation grading', 'Sub-base preparation', 'Engineered fill placement', 'Proof rolling', 'Level platforms for construction'],
              },
              {
                icon: Droplet, title: 'Civil Infrastructure',
                items: ['Stormwater systems', 'Drainage installation', 'Retaining structures', 'Access roads', 'Water & sewer reticulation'],
              },
            ].map(({ icon: Icon, title, items }) => (
              <div key={title} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-orange-500 transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Afripact for Earthworks in KZN?</h2>
              <div className="space-y-4">
                {[
                  { title: 'CIDB Grade 2CE Registered', desc: 'Verified civil engineering competency. Your project meets compliance requirements from the start.' },
                  { title: 'Operates Across KZN', desc: 'Pietermaritzburg, Durban, and surrounding areas. One reliable contractor, wherever your project is.' },
                  { title: 'No Rework Policy', desc: "We get it right the first time. If there's a problem, we fix it at our cost — not yours." },
                  { title: 'Predictable Timelines', desc: 'Clear programme, regular updates, and a team that shows up and gets the job done.' },
                ].map((point) => (
                  <div key={point.title} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-gray-900">{point.title}</h4>
                      <p className="text-gray-600 mt-1">{point.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-10 text-white">
              <h3 className="text-3xl font-bold mb-4">Ready to Start?</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Tell us about your earthworks or site development project. We&apos;ll assess it and come back with a clear plan.
              </p>
              <div className="space-y-4 mb-8">
                <a href="tel:0330010397" className="block text-2xl font-bold text-orange-500 hover:text-orange-400 transition-colors">
                  033 001 0397
                </a>
                <a href="mailto:projects@afripact.net" className="block text-lg text-gray-300 hover:text-white transition-colors">
                  projects@afripact.net
                </a>
              </div>
              <button onClick={goToContact}
                className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-6 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50 flex items-center justify-center gap-2">
                Request Project Assessment <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm max-w-3xl mx-auto leading-relaxed">
            Afripact Civils is a CIDB-registered civil engineering contractor (Grade 2CE, 2GB) based in Pietermaritzburg, KwaZulu-Natal. We serve clients across KZN including Pietermaritzburg, Msunduzi, Umgungundlovu, and surrounding areas.
          </p>
        </div>
      </section>
    </div>
  );
}
