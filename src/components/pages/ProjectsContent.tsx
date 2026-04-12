'use client';

import Link from 'next/link';
import { ArrowRight, MapPin, CheckCircle } from 'lucide-react';

interface CaseStudy {
  id: string;
  name: string;
  location: string;
  scope: string;
  challenge: string;
  whatWasDone: string;
  images: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'driveway-tar-resurfacing',
    name: 'Driveway Tar Resurfacing',
    location: 'Pietermaritzburg, KwaZulu-Natal',
    scope: 'Full driveway removal and tar resurfacing with improved stormwater drainage',
    challenge: 'An existing residential driveway had deteriorated beyond repair — cracked, uneven, with poor water runoff causing pooling and structural damage.',
    whatWasDone: 'Complete removal of the failed driveway surface, sub-base preparation and compaction, installation of a new tar surface with correct fall and edge details to direct water away from the structure.',
    images: ['/project1-before.jpg', '/project1-after.jpg'],
  },
  {
    id: 'pavement-excavation',
    name: 'Pavement Excavation & Weed Removal',
    location: 'KwaZulu-Natal',
    scope: 'Full excavation, root removal, waterproofing layer, and grading to prevent recurrence',
    challenge: 'Persistent weed growth had compromised a paved surface, with root systems undermining the base and causing ongoing damage.',
    whatWasDone: 'Full excavation to expose and remove the root systems, installation of a geotextile membrane barrier, re-grading of the formation level, and reinstatement of the surface.',
    images: ['/project2-before.jpg', '/project2-after.jpg'],
  },
  {
    id: 'aluminium-doors-windows',
    name: 'Aluminium Doors & Window Frames',
    location: 'KwaZulu-Natal',
    scope: 'Aluminium frame installation with frosted glass, new openings, and lock replacement',
    challenge: 'An office building required new openings and upgraded aluminium frames with frosted glass for privacy and security.',
    whatWasDone: 'New structural openings were formed, aluminium frames with frosted glass were fabricated and installed to specification, and all lock systems were replaced with modern, secure hardware.',
    images: ['/project3-door.jpg'],
  },
  {
    id: 'imbali-township-infrastructure',
    name: 'Imbali Township Infrastructure Development',
    location: 'Imbali, Pietermaritzburg',
    scope: 'Water reticulation and road infrastructure upgrade serving 500+ households',
    challenge: 'An established township had inadequate water supply infrastructure and deteriorated road surfaces, limiting access and creating health and safety concerns.',
    whatWasDone: 'Comprehensive water reticulation system installed, existing road surfaces rehabilitated, drainage corrected to prevent erosion, and the full project delivered without disruption to residents.',
    images: ['https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800'],
  },
  {
    id: 'pmb-commercial-site',
    name: 'Pietermaritzburg Commercial Site Development',
    location: 'Pietermaritzburg, KwaZulu-Natal',
    scope: 'Full site development — earthworks, stormwater, parking, and access roads for a 5000m² commercial complex',
    challenge: 'A greenfields commercial development required complete civil site preparation from raw land. Tight programme constraints meant zero tolerance for delays between phases.',
    whatWasDone: 'Bulk earthworks and platform preparation, stormwater design and installation, parking area construction and kerbing, access road formation and surfacing — all phased to allow follow-on contractors to mobilise without delays.',
    images: ['https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800'],
  },
  {
    id: 'kzn-rural-road',
    name: 'KZN Rural Road Rehabilitation',
    location: 'Rural KwaZulu-Natal',
    scope: 'Road rehabilitation to restore access and safety for a rural community',
    challenge: 'A rural access road had failed due to storm damage and years of deferred maintenance. Residents were cut off from essential services.',
    whatWasDone: 'Full road condition assessment, formation re-grading, culvert installation and cleaning, surface preparation and gravel re-sheeting, with compaction to a standard that restored safe, reliable access.',
    images: ['https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800'],
  },
];

function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
      <div className="relative h-56 overflow-hidden">
        <img src={study.images[0]} alt={study.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
        {study.images.length > 1 && (
          <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded">
            Before &amp; After
          </div>
        )}
      </div>
      <div className="p-8">
        <div className="flex items-start gap-2 mb-3">
          <MapPin className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1" />
          <span className="text-sm font-semibold text-gray-500">{study.location}</span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.name}</h3>
        <p className="text-sm font-semibold text-orange-600 mb-6 uppercase tracking-wide">{study.scope}</p>
        <div className="space-y-4 mb-6">
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">The Challenge</h4>
            <p className="text-gray-600 leading-relaxed">{study.challenge}</p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-1">What Was Done</h4>
            <p className="text-gray-600 leading-relaxed">{study.whatWasDone}</p>
          </div>
        </div>
        <div className="border-t border-gray-100 pt-6">
          <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Result</h4>
          <div className="flex flex-wrap gap-3">
            {['On time', 'On budget', 'Built to last'].map((result) => (
              <div key={result} className="flex items-center gap-1.5 bg-green-50 border border-green-200 rounded-full px-3 py-1">
                <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span className="text-sm font-semibold text-green-800">{result}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ProjectsContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8 text-sm text-gray-400 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Projects</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Proven Work. Real Results.</h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Every project below was delivered on time, on budget, and built to last. No compromises.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <CaseStudyCard key={study.id} study={study} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-orange-500 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-black mb-4">Have a Project That Needs This Level of Execution?</h2>
          <p className="text-xl text-black/80 mb-8">We focus on projects where timelines, reliability, and quality are non-negotiable.</p>
          <Link href="/contact"
            className="bg-black text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-900 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-black/30 inline-flex items-center gap-2">
            Request Project Assessment
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
