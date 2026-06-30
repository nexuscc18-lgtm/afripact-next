'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, CheckCircle, Store, Phone, Shield, Clock, ChevronDown } from 'lucide-react';

export default function CommercialRenovationsContent() {
  const router = useRouter();
  const goToContact = () => router.push('/contact');

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <ArrowRight className="w-4 h-4" />
            <Link href="/renovations" className="hover:text-orange-500 transition-colors">Renovations</Link>
            <ArrowRight className="w-4 h-4" />
            <span className="text-orange-500">Commercial Renovations</span>
          </nav>
          <div className="max-w-4xl">
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-4">
              KwaZulu-Natal
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Commercial Renovations KZN
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Office fitouts, retail refurbishments, hospitality renovations, and commercial building upgrades across Durban, Pietermaritzburg, and KwaZulu-Natal. Planned around your operations to minimise business disruption.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={goToContact}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50 inline-flex items-center gap-2">
                Request a Commercial Quote <ArrowRight className="w-5 h-5" />
              </button>
              <a href="tel:0695036291"
                className="bg-white/10 text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white/20 hover:bg-white/20 hover:scale-105 transition-all inline-flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />069 503 6291
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <Store className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Commercial Renovation Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Commercial renovation work requires a different level of discipline. Timelines cannot slip. Downtime costs money. Work has to be sequenced correctly. Finishes must meet the standards that clients and customers see.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We bring the same project management rigour to commercial renovations that we apply to civil infrastructure work. Detailed scope, agreed programme, single point of accountability.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Office fitout and refurbishment',
                  'Retail space renovation and shopfitting',
                  'Restaurant and hospitality renovation',
                  'Warehouse and industrial facility upgrades',
                  'Reception and client-facing area refurbishment',
                  'Ablution and bathroom upgrades',
                  'Partition walls and layout changes',
                  'Flooring, ceiling, and finishes',
                  'Plumbing, electrical, and fire compliance works',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Commercial renovations KwaZulu-Natal"
                className="rounded-2xl shadow-2xl w-full mb-8"
                loading="lazy"
              />
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Request a Commercial Renovation Quote</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Describe your space and what you need. We will assess the scope, quote the full job, and build a programme around your operational requirements.
                </p>
                <button onClick={goToContact}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:shadow-xl hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50 inline-flex items-center justify-center gap-2">
                  Request a Quote <ArrowRight className="w-5 h-5" />
                </button>
                <div className="mt-4 pt-4 border-t border-orange-200">
                  <a href="tel:0695036291" className="flex items-center justify-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors">
                    <Phone className="w-4 h-4" />069 503 6291
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Built for Businesses That Cannot Afford Delays</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: Shield, title: 'CIDB-Registered Contractor', desc: 'Grade 2CE and 2GB registration gives you a building contractor with verified competency and proper sign-off documentation.' },
              { icon: Clock, title: 'Works Around Your Business', desc: 'We schedule phases to minimise operational disruption: after-hours work, phased delivery, or full shutdown options.' },
              { icon: Store, title: 'Track Record of Delivery', desc: 'Our civil infrastructure background means we are used to delivering complex, multi-trade projects to a strict programme.' },
              { icon: CheckCircle, title: 'One Contractor, Full Scope', desc: 'No coordinating multiple sub-contractors. We take responsibility for the full scope from first day to handover.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border-2 border-gray-200 rounded-xl p-8 flex gap-5 hover:border-orange-500 transition-all">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <Link href="/industries"
              className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 hover:border-orange-500 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">Industries We Serve</h3>
              <p className="text-gray-600 leading-relaxed">Property developers, NGOs, construction companies, and hospitality businesses.</p>
            </Link>
            <Link href="/earthworks-kzn"
              className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 hover:border-orange-500 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">Civil &amp; Earthworks Capability</h3>
              <p className="text-gray-600 leading-relaxed">Site preparation and civil infrastructure alongside renovation work.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Commercial Renovation FAQs</h2>
          </div>
          <div className="space-y-4">
            {([
              {
                q: 'Can you work after hours or in phases to avoid disrupting our business?',
                a: 'Yes. We structure the work programme around your operational requirements, after-hours, weekend, or phased delivery. This is agreed before work begins.',
              },
              {
                q: 'How do you handle a commercial renovation on a tight deadline?',
                a: 'Detailed programme drawn up at the outset, sequenced by trade, with single-point accountability. If something threatens the timeline, you hear about it before it becomes a problem.',
              },
              {
                q: 'Do you carry out retail shopfitting as well as office renovations?',
                a: 'Yes. Retail fitouts, shopfronts, display area renovations, and back-of-house upgrades are all within scope.',
              },
              {
                q: 'What does your CIDB Grade 2CE and 2GB registration mean for a commercial client?',
                a: 'It means verified competency, compliant documentation, and a contractor that meets procurement requirements for formal commercial projects.',
              },
              {
                q: 'Can you renovate a single floor or section of a building while the rest remains operational?',
                a: 'Yes. Phased, floor-by-floor, or section-by-section delivery is standard for us on occupied commercial buildings.',
              },
            ] as { q: string; a: string }[]).map(({ q, a }) => (
              <details key={q} className="group border-2 border-gray-200 rounded-xl overflow-hidden open:border-orange-500 transition-colors">
                <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-lg text-gray-900 list-none select-none hover:bg-orange-50 transition-colors">
                  {q}
                  <ChevronDown className="ml-4 flex-shrink-0 w-5 h-5 text-orange-500 group-open:rotate-180 transition-transform duration-200" />
                </summary>
                <div className="px-6 pb-6 text-gray-700 leading-relaxed border-t border-gray-100 pt-4">
                  {a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Commercial Renovations - Durban, Pietermaritzburg &amp; KZN</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We carry out commercial renovation projects throughout KwaZulu-Natal. Contact us to discuss your space and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={goToContact}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50 inline-flex items-center gap-2">
              Request a Quote <ArrowRight className="w-5 h-5" />
            </button>
            <a href="tel:0695036291"
              className="bg-white/10 text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white/20 hover:bg-white/20 hover:scale-105 transition-all inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />069 503 6291
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
