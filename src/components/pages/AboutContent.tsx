'use client';

import Link from 'next/link';
import { ArrowRight, Target, Award, Users, Heart, Shield, TrendingUp } from 'lucide-react';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

export default function AboutContent() {
  const { openModal } = useQuoteModal();

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-gray-400 mb-6 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-orange-500 transition-colors focus:outline-none focus:text-orange-500">Home</Link>
            <ArrowRight className="w-4 h-4" />
            <span className="text-orange-500">About Us</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Afripact Civils</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Building stronger communities through quality infrastructure and dedicated service
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>When you work with Afripact Civils, you get a contractor you don&apos;t have to chase, correct, or babysit. Your project moves forward without the delays, rework, or budget creep that come from poor workmanship.</p>
                <p>You get civil works built to hold up under real pressure - roads that don&apos;t collapse after the first storm, stormwater that actually drains, trenches done properly, and site prep that doesn&apos;t come back to bite you later.</p>
                <p>Our experience across earthworks, roads, stormwater, water and sewer systems, paving, and full site development means one thing for you: fewer contractors to manage, fewer problems to solve, and a project that gets delivered the way it&apos;s supposed to.</p>
                <p>We&apos;re a CIDB Registered Contractor – Grade 2CE, 2GB – which means you get work that passes inspections, meets standards, and protects you from failures that cost you more in the long run.</p>
                <p>If you want a build that performs for years, not months … we&apos;re the people you bring in.</p>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction site" className="rounded-2xl shadow-2xl" loading="lazy" />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-black p-6 rounded-xl shadow-xl">
                <p className="text-2xl font-bold">CIDB Grade 2CE & 2GB</p>
                <p className="text-sm font-semibold">Registered Contractor</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Target, title: 'Our Mission', desc: 'To deliver high-quality civil engineering solutions that uplift communities and create lasting infrastructure for future generations.' },
              { icon: Heart, title: 'Our Values', desc: 'Integrity, quality, safety, community empowerment, and environmental responsibility guide everything we do.' },
              { icon: TrendingUp, title: 'Our Vision', desc: 'To be the leading civil engineering partner in KwaZulu-Natal, recognized for excellence and community impact.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-8 text-center">
                <Icon className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-700 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl p-8 shadow-2xl">
                <div className="w-32 h-32 bg-black rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-16 h-16 text-orange-500" />
                </div>
                <div className="text-center text-black">
                  <h3 className="text-3xl font-bold mb-2">Cebo Mbatha</h3>
                  <p className="text-xl font-semibold mb-4">Founder & CEO</p>
                  <p className="text-lg leading-relaxed">Leading Afripact Civils with a vision to transform communities through quality infrastructure and dedicated service excellence.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl font-bold mb-6">Leadership</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>Under the leadership of Founder and CEO Cebo Mbatha, Afripact Civils is built on years of hard work, personal sacrifice, and the determination to create opportunities within the communities we call home.</p>
                <p>Growing up in KwaZulu-Natal, he saw firsthand how reliable infrastructure changes lives. That understanding drives every decision we make. Our leadership ensures that each project reflects our values: solid workmanship, integrity in every interaction, and a responsibility to uplift the people around us.</p>
                <p>Our team brings together professionals who&apos;ve faced the same challenges, learned the hard lessons, and remain committed to building work that stands the test of time.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="certifications" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Certifications & Registration</h2>
          <ul className="space-y-4 text-lg text-gray-700 mb-6">
            <li><strong>CIDB Registered Contractor</strong>: Grade 2CE, 2GB</li>
            <li><strong>Additional Registrations</strong>: 1SQ | 1ME</li>
            <li><strong>CRS Number</strong>: 10262268</li>
          </ul>
          <p className="text-gray-700 text-lg leading-relaxed">
            Afripact is a CIDB-registered contractor with Grade 2CE (Civil Engineering) and Grade 2GB (General Building) certifications.
            For tender or project enquiries, contact us at{' '}
            <a href="tel:0330010397" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">033 001 0397</a>
            {' '}or{' '}
            <a href="mailto:info@afripact.net" className="text-orange-500 font-semibold hover:text-orange-600 transition-colors">info@afripact.net</a>.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Let&apos;s Work Together</h2>
          <p className="text-xl text-black/80 mb-8 leading-relaxed">
            Partner with us for your next civil engineering project and experience the Afripact difference
          </p>
          <button onClick={() => openModal('', 'contact')}
            className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-black/30">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}
