'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, CheckCircle, Bath, Phone, ChevronDown } from 'lucide-react';

export default function BathroomRenovationsContent() {
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
            <span className="text-orange-500">Bathroom Renovations</span>
          </nav>
          <div className="max-w-4xl">
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-4">
              Durban · Pietermaritzburg · KwaZulu-Natal
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Bathroom Renovations KZN
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Complete bathroom renovations in Durban, Pietermaritzburg, and across KwaZulu-Natal. We handle every element: waterproofing, tiling, plumbing, fixtures, and finishes. You deal with one contractor from start to finish.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={goToContact}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50 inline-flex items-center gap-2">
                Get a Free Quote <ArrowRight className="w-5 h-5" />
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
                <Bath className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What We Do</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A bathroom renovation is one of the highest-value improvements you can make to a residential or commercial property. Done right, it adds lasting value. Done badly, it creates problems - damp, leaks, failed waterproofing - that cost far more to fix later.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We deliver bathroom renovations that are planned, properly waterproofed, and finished to a standard you can see and touch. No sub-standard shortcuts. No disappearing contractors.
              </p>
              <div className="space-y-3">
                {[
                  'Full bathroom strip-out and demolition',
                  'Waterproofing and screeding',
                  'Ceramic, porcelain, and stone tiling - floors and walls',
                  'Plumbing relocation and new fixture installation',
                  'Shower enclosures and bath installations',
                  'Vanity and cabinetry fitting',
                  'Lighting and electrical',
                  'Painting and final finishes',
                  'Ensuite, family bathroom, and guest bathroom renovations',
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
                src="https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Bathroom renovation KwaZulu-Natal"
                className="rounded-2xl shadow-2xl w-full mb-8"
                loading="lazy"
              />
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Start?</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Tell us about your bathroom and what you want to achieve. We will assess it and come back with a clear quote and timeline.
                </p>
                <button onClick={goToContact}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:shadow-xl hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50 inline-flex items-center justify-center gap-2">
                  Request a Free Quote <ArrowRight className="w-5 h-5" />
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
          <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Why Afripact for Bathroom Renovations?</h2>
          <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto mb-12">
            We bring civil-grade accountability to residential renovation: the same discipline that keeps infrastructure projects on time and on budget.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'CIDB-Registered Contractor', desc: 'Grade 2GB (General Building) registration. Verified competency. Proper documentation at completion.' },
              { title: 'All Trades, One Quote', desc: 'Tiling, plumbing, electrical, waterproofing. We coordinate everything in-house. No finger-pointing between sub-trades.' },
              { title: 'Fixed Timeline', desc: 'We agree a start date and a finish date. You keep access to your bathroom within the agreed window.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-orange-500 transition-all">
                <CheckCircle className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Bathroom Renovation FAQs</h2>
          </div>
          <div className="space-y-4">
            {([
              {
                q: 'How long does a bathroom renovation take in KZN?',
                a: '2 to 4 weeks depending on scope. We provide a detailed schedule at quote stage and hold to it.',
              },
              {
                q: 'How much does a bathroom renovation cost in Durban?',
                a: 'Cost depends on scope, fixtures, and finishes. We provide a fixed quote before any work begins, no open-ended billing.',
              },
              {
                q: 'Do you handle waterproofing as part of the renovation?',
                a: 'Yes. Waterproofing is not optional on any bathroom we touch. It is built into every scope.',
              },
              {
                q: 'Can you renovate a bathroom while the house is occupied?',
                a: 'Yes. We phase the work to minimise disruption and agree a clear schedule upfront.',
              },
              {
                q: 'Do you supply fixtures and fittings, or do I source them?',
                a: 'Both options work. We can procure everything or work with client-supplied fixtures, we will advise on what fits the space and budget.',
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
          <h2 className="text-4xl font-bold mb-4">Bathroom Renovation Quote - Durban &amp; Pietermaritzburg</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We serve Durban, Pietermaritzburg, uMhlanga, Ballito, Pinetown, and surrounding KZN areas. Send us your details and we will get back to you within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={goToContact}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50 inline-flex items-center gap-2">
              Get a Free Quote <ArrowRight className="w-5 h-5" />
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
