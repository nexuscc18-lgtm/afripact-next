'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, CheckCircle, Hotel, Phone, Shield, Calendar, Wrench, ChevronDown } from 'lucide-react';
import InlineCallbackForm from '@/components/InlineCallbackForm';

export default function HospitalityRenovationsContent() {
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
            <span className="text-orange-500">Hospitality Renovations</span>
          </nav>
          <div className="max-w-4xl">
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-4">
              Durban · Pietermaritzburg · KwaZulu-Natal
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Hospitality Renovations KZN
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Hotels, guesthouses, lodges, and restaurants across KwaZulu-Natal. We plan renovation work around your trading calendar so your business keeps running while the work gets done.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={goToContact}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50 inline-flex items-center gap-2">
                Request a Hospitality Quote <ArrowRight className="w-5 h-5" />
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
                <Hotel className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Renovation Without Closing Your Doors</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                A hospitality renovation is different from any other type of project. Your rooms are your revenue. Your restaurant is your reputation. Closing down to renovate is not always an option, and with the right contractor, it does not have to be.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We plan the work around your occupancy, your season, and your operations. Room by room, wing by wing, or floor by floor. You agree the programme before work starts, and we hold to it.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Hotel and guesthouse room refurbishment',
                  'Bathroom and en-suite renovations',
                  'Restaurant and commercial kitchen renovations',
                  'Reception and front-of-house upgrades',
                  'Dining area and lounge renovations',
                  'Conference and function room refurbishment',
                  'External and pool area upgrades',
                  'Phased delivery around trading operations',
                  'Off-season and after-hours scheduling',
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
                src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Hotel and hospitality renovation KwaZulu-Natal"
                className="rounded-2xl shadow-2xl w-full mb-8"
                loading="lazy"
              />
              <InlineCallbackForm
                service="Hospitality Renovation"
                heading="Get a Free Quote"
                subtext="Leave your name and number. Cebo will call you back to discuss your property."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Planned Around the Way Hospitality Businesses Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Calendar, title: 'Trading-Schedule Delivery', desc: 'Work is phased around your bookings, trading season, and revenue periods. The programme is agreed before work starts, and we hold to it.' },
              { icon: Shield, title: 'CIDB-Registered Contractor', desc: 'Grade 2CE and 2GB registration gives you a contractor with verified competency and proper sign-off documentation for commercial hospitality projects.' },
              { icon: Wrench, title: 'All Trades, One Contract', desc: 'Bathrooms, kitchens, electrical, tiling, and painting all managed under one contract. One point of contact from first day to handover.' },
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
            <Link href="/renovations/commercial"
              className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 hover:border-orange-500 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">Commercial Renovations</h3>
              <p className="text-gray-600 leading-relaxed">Office, retail, and commercial building refurbishment across KZN.</p>
            </Link>
            <Link href="/industries"
              className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 hover:border-orange-500 hover:shadow-lg transition-all group">
              <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-500 transition-colors">Industries We Serve</h3>
              <p className="text-gray-600 leading-relaxed">Developers, construction companies, NGOs, and hospitality businesses.</p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Hospitality Renovation FAQs</h2>
          </div>
          <div className="space-y-4">
            {([
              {
                q: 'Can you renovate our hotel or guesthouse without closing it?',
                a: 'Yes. We plan the work around your occupancy and trading calendar, room by room, wing by wing, or off-season scheduling. You stay open and we stay out of the way of your guests.',
              },
              {
                q: 'How long does a hotel room refurbishment take per room?',
                a: 'A standard room refurbishment typically runs 5 to 10 working days per room depending on scope. We detail the programme at quote stage so you can plan your bookings accordingly.',
              },
              {
                q: 'Do you handle restaurant kitchen renovations for hospitality businesses?',
                a: 'Yes. Restaurant and commercial kitchen renovations are within scope, layout changes, cabinetry, countertops, tiling, plumbing, and electrical, all managed under one contract.',
              },
              {
                q: 'Are you CIDB-registered to carry out commercial hospitality renovation work?',
                a: 'Yes. Afripact holds CIDB Grade 2CE and 2GB registration. CRS number 10262268. This covers the civil and general building work involved in hospitality renovation projects.',
              },
              {
                q: 'Do you work in Durban and surrounding KZN areas for hospitality projects?',
                a: 'Yes. We operate across KwaZulu-Natal from our Pietermaritzburg base, Durban, uMhlanga, Ballito, the Midlands, and surrounding areas.',
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
          <h2 className="text-4xl font-bold mb-4">Hospitality Renovation Quote - KZN</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We serve Durban, Pietermaritzburg, uMhlanga, Ballito, the KZN Midlands, and surrounding areas. Send us your details and we will respond within one business day.
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
