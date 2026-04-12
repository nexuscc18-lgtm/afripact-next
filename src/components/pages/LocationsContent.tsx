'use client';

import Link from 'next/link';
import { ArrowRight, MapPin, Phone, Mail, Navigation } from 'lucide-react';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

const serviceAreas = ['Pietermaritzburg', 'Durban', 'uMhlanga', 'Ballito', 'Pinetown', 'Margate', 'Port Shepstone'];

export default function LocationsContent() {
  const { openModal } = useQuoteModal();

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-gray-400 mb-6 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <ArrowRight className="w-4 h-4" />
            <span className="text-orange-500">Locations</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Location & Service Area</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Proudly serving Pietermaritzburg and communities throughout KwaZulu-Natal
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-2xl p-8 mb-8">
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Head Office</h2>
                    <address className="not-italic text-gray-700 text-lg leading-relaxed">
                      <strong>Afripact</strong><br />
                      193 Pine Street<br />
                      Pietermaritzburg<br />
                      3201
                    </address>
                  </div>
                </div>
                <div className="space-y-4 pt-6 border-t border-orange-200">
                  {[
                    { href: 'tel:0330010397', label: '033 001 0397', sub: 'Landline', icon: Phone },
                    { href: 'tel:0695036291', label: '069 503 6291', sub: 'Mobile', icon: Phone },
                    { href: 'mailto:quotes@afripact.net', label: 'quotes@afripact.net', sub: 'Email', icon: Mail },
                    { href: 'mailto:cebo@afripact.net', label: 'cebo@afripact.net', sub: 'Direct Email', icon: Mail },
                  ].map(({ href, label, sub, icon: Icon }) => (
                    <a key={href} href={href}
                      className="flex items-center gap-3 text-gray-700 hover:text-orange-500 transition-colors group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded p-2 -ml-2">
                      <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                      <div>
                        <p className="text-xs text-gray-600">{sub}</p>
                        <p className="font-semibold text-lg">{label}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Navigation className="w-8 h-8 text-orange-500" />
                  <h3 className="text-2xl font-bold text-gray-900">Get Directions</h3>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Click the button below to open Google Maps and get directions to our office from your current location.
                </p>
                <a href="https://www.google.com/maps/dir/?api=1&destination=193+Pine+Street+Pietermaritzburg+3201"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
                  <Navigation className="w-5 h-5" />
                  Open in Google Maps
                </a>
              </div>
            </div>

            <div>
              <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg h-[600px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3553.3765870716237!2d30.36793887548204!3d-29.59735982053684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef70647e8e8e8e1%3A0x1234567890abcdef!2s193%20Pine%20St%2C%20Pietermaritzburg%2C%203201!5e0!3m2!1sen!2sza!4v1234567890123!5m2!1sen!2sza"
                  width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade" title="Afripact Civils Location Map" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Area</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide civil engineering and construction services throughout the following areas
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            {serviceAreas.map((area) => (
              <div key={area} className="bg-white border border-gray-200 rounded-lg p-4 hover:border-orange-500 hover:shadow-md transition-all group">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="font-semibold text-gray-900">{area}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 text-center">
            <h3 className="text-3xl font-bold text-black mb-4">Is Your Area Not Listed?</h3>
            <p className="text-xl text-black/80 mb-6 max-w-2xl mx-auto">
              We&apos;re continuously expanding our service area. Contact us to discuss your project location and how we can assist you.
            </p>
            <button onClick={() => openModal('', 'contact')}
              className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-black/30">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Visit Us or Contact Us Today</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Whether you prefer to visit our office, call us, or send an email, we&apos;re here to help with your civil engineering needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0330010397"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50 inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call Us Now
            </a>
            <button onClick={() => openModal('', 'contact')}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white/20 hover:bg-white/20 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-white/30">
              Send a Message
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
