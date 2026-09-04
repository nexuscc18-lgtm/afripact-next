'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowRight, CheckCircle, Hammer,
  Phone, Shield, Clock, Award,
} from 'lucide-react';
import { CONTACT } from '@/lib/contact';

const roofGallery = [
  { src: '/images/roof/gallery/roof-damaged-1.jpeg', caption: 'Before: cracked and displaced tiles', objectPosition: 'object-bottom' },
  { src: '/images/roof/gallery/roof-green.jpeg', caption: 'Mid-repair: sealing and resecuring' },
  { src: '/images/roof/gallery/roof-1.jpeg', caption: 'Roof maintenance and cleaning' },
];

const renovationServices = [
  {
    id: 'bathroom',
    img: '/bathroom/bathroom-during-04.jpeg',
    alt: 'Bathroom renovation in progress, tiling and fixtures',
    title: 'Bathroom Renovations',
    desc: 'Complete bathroom remodels in Durban and Pietermaritzburg. Tiling, plumbing, waterproofing, fixtures. One team, one quote.',
    href: '/renovations/bathroom',
  },
  {
    id: 'kitchen',
    img: '/images/kitchen/kitchen-in-progress.jpeg',
    alt: 'Kitchen renovation in progress',
    title: 'Kitchen Renovations',
    desc: 'Full kitchen transformations. We handle the plumbing, cabinetry, tiling, and electrical, coordinated under one contractor.',
    href: '/renovations/kitchen',
  },
  {
    id: 'home',
    img: '/images/hero-roof-framing.jpg',
    alt: 'Roof framing on a home renovation project',
    title: 'Full Home Renovations',
    desc: 'Structural changes, layout reconfiguration, complete interior refurbishment. One contractor managing every trade on your behalf.',
    href: '/renovations/home',
  },
  {
    id: 'commercial',
    img: '/images/commercial/door-restoration-after.jpeg',
    alt: 'Restored commercial door installation',
    title: 'Commercial Renovations',
    desc: 'Office, retail, and commercial space refurbishment. Planned around your business operations to minimise downtime.',
    href: '/renovations/commercial',
  },
];

export default function RenovationsContent() {
  const router = useRouter();
  const goToContact = () => router.push('/contact');

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <ArrowRight className="w-4 h-4" />
            <span className="text-orange-500">Renovations</span>
          </nav>
          <div className="max-w-4xl">
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-4">
              KwaZulu-Natal
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Renovation Contractors KZN
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 max-w-3xl">
              Bathroom renovations, kitchen remodels, full home renovations, and commercial refurbishment, serving Durban, Pietermaritzburg, and KwaZulu-Natal.
            </p>
            <p className="text-lg text-gray-400 mb-10 max-w-3xl">
              CIDB-registered contractor. One team handling all trades. No surprises on price or timeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={goToContact}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50 inline-flex items-center gap-2">
                Get a Free Renovation Quote <ArrowRight className="w-5 h-5" />
              </button>
              <a href={CONTACT.phoneMobileHref}
                className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white/20 hover:bg-white/20 hover:scale-105 transition-all inline-flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />{CONTACT.phoneMobile}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Renovation Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We manage every trade in-house. You deal with one point of contact, from first quote to final handover.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {renovationServices.map(({ id, img, alt, title, href }) => (
              <Link key={id} href={href}
                className="group flex flex-col h-full overflow-hidden rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-56 sm:h-64 lg:h-72 flex-shrink-0 overflow-hidden">
                  <Image
                    src={img}
                    alt={alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                <div className="flex-1 flex flex-col justify-center bg-black px-6 py-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{title}</h3>
                  <div className="flex items-center gap-2 text-orange-500 font-bold group-hover:gap-3 transition-all">
                    <span>View Details</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Afripact for Your Renovation?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are a CIDB-registered building contractor with the structure and experience to deliver renovation projects on time, to budget, and to a standard you can be proud of.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Shield, title: 'One Contractor, All Trades', desc: 'Plumbing, electrical, tiling, painting, carpentry: we coordinate everything. You have one number to call.' },
              { icon: Clock, title: 'Clear Timelines, No Drift', desc: 'We set a start date and an end date and we hold to both. No open-ended renovations that drag on for months.' },
              { icon: Award, title: 'CIDB-Registered Contractor', desc: 'Grade 2CE and 2GB registration means verified competency, compliant workmanship, and proper sign-off documentation.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border-2 border-gray-200 rounded-xl p-8 text-center hover:border-orange-500 hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Also do roofing */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-5">
                <Hammer className="w-7 h-7 text-black" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Roof Repair and Maintenance</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Leaking roofs, damaged tiles, failing waterproofing: we repair and maintain residential and commercial roofs across KwaZulu-Natal. Fast response, proper repairs, and documented maintenance programmes.
              </p>
              <div className="space-y-2 mb-8">
                {['Leaking roof repairs', 'Tile and sheeting replacement', 'Waterproofing and flashing', 'Flat roof and IBR repairs', 'Ongoing maintenance contracts'].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <button onClick={goToContact}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:shadow-xl hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50 inline-flex items-center gap-2">
                Get a Roof Repair Quote <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div
              role="region"
              aria-label="Roof repair photos, scroll horizontally to see more"
              tabIndex={0}
              className="no-scrollbar flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth"
            >
              {roofGallery.map((item) => (
                <div key={item.src} className="w-44 flex-shrink-0 snap-start sm:w-56 md:w-64">
                  <div className="relative aspect-square rounded-xl overflow-hidden shadow-md">
                    <Image
                      src={item.src}
                      alt={item.caption}
                      fill
                      sizes="(max-width: 640px) 176px, (max-width: 768px) 224px, 256px"
                      className={`object-cover${item.objectPosition ? ` ${item.objectPosition}` : ''}`}
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-600 text-center">{item.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Location targeting */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Serving All of KwaZulu-Natal</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We carry out renovation projects throughout KZN, with active teams operating out of Pietermaritzburg and Durban.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {['Durban', 'Pietermaritzburg', 'uMhlanga', 'Ballito', 'Pinetown', 'Margate', 'Port Shepstone', 'Greater KZN'].map((area) => (
              <div key={area} className="bg-white/10 border border-white/20 rounded-lg p-4 text-center hover:bg-white/20 transition-all">
                <span className="font-semibold text-white">{area}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button onClick={goToContact}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50 inline-flex items-center gap-2">
              Request a Free Quote <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
