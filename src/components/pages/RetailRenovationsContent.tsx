'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, CheckCircle, ShoppingBag, Phone, Shield, Clock, Hammer, ChevronDown } from 'lucide-react';

export default function RetailRenovationsContent() {
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
            <span className="text-orange-500">Retail Renovations</span>
          </nav>
          <div className="max-w-4xl">
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-4">
              Durban · KwaZulu-Natal · South Africa
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Retail Renovations &amp; Shopfitting KZN
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Retail store renovations, shopfronts, display area refurbishments, and commercial fitouts across KwaZulu-Natal. We work around your trading schedule and deliver to a programme you can plan your business around.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={goToContact}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50 inline-flex items-center gap-2">
                Request a Retail Quote <ArrowRight className="w-5 h-5" />
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
                <ShoppingBag className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Retail Renovation Built Around Your Trading</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A retail renovation that runs over schedule costs you trading days. A fitout done poorly loses you customers before they walk through the door. We build retail spaces that look right, function correctly, and get handed over on the date we agreed.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Whether it is a shopfront upgrade, a full internal refit, or a display area reconfiguration, we manage all trades under one contract and we deliver around your hours of operation.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Shopfront construction and glazing',
                  'Internal store fitouts and layouts',
                  'Display area and fixture installation',
                  'Floor tiling and surface finishes',
                  'Ceiling works and lighting upgrades',
                  'Electrical reconfiguration and new points',
                  'Partition walls and feature elements',
                  'Back-of-house and storage area renovations',
                  'After-hours and weekend delivery options',
                  'Ablution and staff facilities renovation',
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
                src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Retail renovation and shopfitting KwaZulu-Natal"
                className="rounded-2xl shadow-2xl w-full mb-8"
                loading="lazy"
              />
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Request a Retail Renovation Quote</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Tell us about your space and what you need. We will assess the scope, confirm the programme, and quote the full job.
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
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Retail Renovation Delivered on Time and on Brief</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Clock, title: 'Delivered to Programme', desc: 'Agreed start date and finish date before work begins. Retail clients need certainty, and we provide it with a fixed programme that we hold to.' },
              { icon: Shield, title: 'CIDB-Registered Contractor', desc: 'Grade 2CE and 2GB registration gives you a contractor with verified competency and compliant documentation for commercial fitout projects.' },
              { icon: Hammer, title: 'All Trades Under One Roof', desc: 'Tiling, electrical, partitioning, and painting all managed in-house. One quote, one point of contact, and full accountability from first day to handover.' },
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
            <Link href="/renovations/office"
              className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 hover:border-orange-500 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">Office Renovations</h3>
              <p className="text-gray-600 leading-relaxed">Office fitouts and refurbishments across KZN.</p>
            </Link>
            <Link href="/renovations/commercial"
              className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 hover:border-orange-500 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">Commercial Renovations</h3>
              <p className="text-gray-600 leading-relaxed">Full commercial building renovation and refurbishment.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Retail Renovation FAQs</h2>
          </div>
          <div className="space-y-4">
            {([
              {
                q: 'How long does a retail renovation or shopfit take?',
                a: 'A standard shopfit runs 2 to 5 weeks depending on scope. Larger store renovations with structural changes take longer. We provide a firm programme at quote stage.',
              },
              {
                q: 'Can you carry out the renovation after hours so we can keep trading?',
                a: 'Yes. After-hours and weekend delivery is standard for us on occupied retail environments. The schedule is agreed upfront and we hold to it.',
              },
              {
                q: 'Do you do shopfronts and signage structures as part of the renovation?',
                a: 'Yes. Shopfront construction, aluminium framing, glazing, and structural signage support are within scope.',
              },
              {
                q: 'Are you CIDB-registered for retail renovation work?',
                a: 'Yes. Afripact holds CIDB Grade 2CE and 2GB registration. CRS number 10262268. This covers the civil and general building work involved in retail renovation and shopfitting.',
              },
              {
                q: 'Do you work outside KZN for national retail clients?',
                a: 'Primarily KwaZulu-Natal, but we consider national retail projects on a case-by-case basis. Contact us to discuss your scope and locations.',
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
          <h2 className="text-4xl font-bold mb-4">Retail Renovation Quote - KZN &amp; South Africa</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Based in Pietermaritzburg, operating across KZN and considering national retail projects. Enquire today.
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
