'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, CheckCircle, House, Phone, Shield, Clock, Award, ChevronDown } from 'lucide-react';

export default function FullHomeRenovationsContent() {
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
            <span className="text-orange-500">Full Home Renovations</span>
          </nav>
          <div className="max-w-4xl">
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-4">
              KwaZulu-Natal
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Full Home Renovations KZN
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Complete home renovation services in Durban, Pietermaritzburg, and across KwaZulu-Natal. Structural changes, full interior refurbishment, and extensions, managed end-to-end under one roof.
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
                <House className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Home Renovations Built to Last</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A full home renovation is a major undertaking. It involves structural decisions, multiple trades working in sequence, procurement, and a level of project management that most homeowners do not have the time for.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We take that responsibility off your hands. One contract. One timeline. One number to call when you need an update. Your home is handed back renovated, clean, and ready to live in.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Structural modifications and additions',
                  'Internal layout changes and knock-throughs',
                  'Bathroom and kitchen renovations',
                  'Flooring - tiling, screed, and finishes',
                  'Painting - interior and exterior',
                  'Roofing repairs and replacement',
                  'Plumbing and electrical updates',
                  'Window and door replacement',
                  'Fencing and external works',
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
                src="https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Full home renovations KwaZulu-Natal"
                className="rounded-2xl shadow-2xl w-full mb-8"
                loading="lazy"
              />
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Discuss Your Home Renovation</h3>
                <p className="text-gray-700 mb-6">
                  Tell us what you want to achieve. We will come back with an honest assessment, a detailed quote, and a timeline you can plan around.
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
          <h2 className="text-4xl font-bold text-gray-900 mb-14 text-center">
            Why One Contractor Makes the Difference
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'One Accountable Contractor', desc: 'We take full responsibility for the project from first day to handover. No passing blame between sub-trades. If it needs fixing, we fix it.' },
              { icon: Clock, title: 'A Completion Date You Can Trust', desc: 'We set a date at the outset and we hold to it. Your renovation does not drag on indefinitely.' },
              { icon: Award, title: 'CIDB-Registered - Grade 2GB', desc: 'General Building contractor registration. The same standards and accountability we bring to commercial and civil projects.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-orange-500 hover:shadow-lg transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/renovations/bathroom"
              className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 hover:border-orange-500 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">Bathroom Renovations</h3>
              <p className="text-gray-600 leading-relaxed">Waterproofing, tiling, plumbing, and fixtures.</p>
            </Link>
            <Link href="/renovations/kitchen"
              className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 hover:border-orange-500 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">Kitchen Renovations</h3>
              <p className="text-gray-600 leading-relaxed">Full kitchen remodels and updates across KZN.</p>
            </Link>
            <Link href="/earthworks-kzn"
              className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 hover:border-orange-500 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">Earthworks &amp; Site Preparation</h3>
              <p className="text-gray-600 leading-relaxed">Need site preparation or external civil work?</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Home Renovation FAQs</h2>
          </div>
          <div className="space-y-4">
            {([
              {
                q: 'What does a full home renovation include?',
                a: 'Structural changes, bathroom and kitchen renovations, flooring, painting, roofing, plumbing and electrical updates, and external works, all under one contract.',
              },
              {
                q: 'How long does a full home renovation take?',
                a: 'Scope-dependent. A typical full home renovation runs 6 to 12 weeks. We provide a detailed programme at quote stage and hold to it.',
              },
              {
                q: 'Can we live in the house during the renovation?',
                a: 'Depends on the scope. For full renovations we recommend vacating for the main construction phase. We will advise based on your specific project.',
              },
              {
                q: 'Do you handle council approvals and building plans?',
                a: 'We advise on what requires approval and can assist with the process. Our CIDB registration supports the compliance documentation.',
              },
              {
                q: 'How do you handle unexpected structural issues discovered mid-renovation?',
                a: 'We stop, show you exactly what was found, give you options and costs, and only proceed with your sign-off. No surprises added to the bill without your agreement.',
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
          <h2 className="text-4xl font-bold mb-4">Home Renovations - Durban, Pietermaritzburg &amp; KZN</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We carry out full home renovations throughout KwaZulu-Natal. Contact us to discuss your project.
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
