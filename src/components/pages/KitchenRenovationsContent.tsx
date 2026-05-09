'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, CheckCircle, Utensils, Phone } from 'lucide-react';

export default function KitchenRenovationsContent() {
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
            <span className="text-orange-500">Kitchen Renovations</span>
          </nav>
          <div className="max-w-4xl">
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-4">
              Durban · Pietermaritzburg · KwaZulu-Natal
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Kitchen Renovations KZN
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Full kitchen renovations in Durban, Pietermaritzburg, and across KwaZulu-Natal. We manage every trade - demolition, plumbing, tiling, cabinetry, countertops, and electrical - under one contract.
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
                <Utensils className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Kitchen Renovations Done Properly</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A kitchen renovation involves more trades than most homeowners anticipate. Plumbing has to move. Electrical needs reconfiguring. Walls come down or go up. Tiling needs proper surface preparation or it fails within months.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We manage the entire process, so you are not coordinating five different contractors who do not talk to each other. One point of contact, one timeline, one sign-off.
              </p>
              <div className="space-y-3">
                {[
                  'Full kitchen demolition and strip-out',
                  'Layout reconfiguration and structural changes',
                  'Plumbing relocation and new connections',
                  'Electrical and lighting installation',
                  'Floor and wall tiling',
                  'Cabinetry and built-in cupboard installation',
                  'Countertop and sink fitting',
                  'Splashback and feature finishes',
                  'Painting and final interior finishes',
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
                src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Kitchen renovation KwaZulu-Natal"
                className="rounded-2xl shadow-2xl w-full mb-8"
                loading="lazy"
              />
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Get a Kitchen Renovation Quote</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Tell us what you want to change. We will assess the scope, quote for the full job, and give you a clear start-to-finish timeline.
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
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Kitchen Renovation Contractors Serving Durban &amp; Pietermaritzburg
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Residential Kitchen Renovations', desc: 'Full kitchen remodels for homes across KZN, from layout redesign through to the final coat of paint.' },
              { title: 'Open-Plan Conversions', desc: 'We handle the structural work, knock-through, and finish to create open, modern kitchen-living spaces.' },
              { title: 'Commercial Kitchen Fit-Outs', desc: 'Restaurants, guesthouses, and commercial catering facilities. Built to compliance and operational standards.' },
              { title: 'Kitchen Updates and Upgrades', desc: 'Not a full remodel? We update cabinetry, replace countertops, retile, and refresh without full demolition.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-orange-500 transition-all">
                <CheckCircle className="w-8 h-8 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Kitchen Renovation Quote - KZN</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We operate across Durban, Pietermaritzburg, and the broader KwaZulu-Natal region. Enquire today and we will respond within one business day.
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
