'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, CheckCircle, Award, Shield, Phone } from 'lucide-react';

export default function NHBRCContent() {
  const router = useRouter();
  const goToContact = () => router.push('/contact');

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <ArrowRight className="w-4 h-4" />
            <Link href="/about" className="hover:text-orange-500 transition-colors">About</Link>
            <ArrowRight className="w-4 h-4" />
            <span className="text-orange-500">NHBRC</span>
          </nav>
          <div className="max-w-4xl">
            <p className="text-orange-500 font-semibold uppercase tracking-widest text-sm mb-4">
              Credentials
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              NHBRC Registered Contractor
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl">
              Afripact is in the process of completing NHBRC registration. This page will go live with full registration details upon confirmation. Registration is expected to be confirmed by 30 June 2025.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">What is the NHBRC?</h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  The National Home Builders Registration Council (NHBRC) is a statutory body established under the Housing Consumers Protection Measures Act (Act 95 of 1998). It is mandated to protect housing consumers and to regulate the home building industry.
                </p>
                <p>
                  NHBRC registration is required for home builders who construct new residential homes. It confirms that the builder meets the minimum competency standards set by the NHBRC and provides homebuyers with access to the NHBRC warranty scheme.
                </p>
                <p>
                  For clients, an NHBRC-registered contractor is a verifiable signal of professionalism, compliance, and accountability in residential construction.
                </p>
              </div>

              <div className="mt-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What NHBRC Registration Means for You</h3>
                <div className="space-y-3">
                  {[
                    'Contractor meets nationally recognised competency standards',
                    'New homes qualify for the NHBRC warranty scheme',
                    'Protection against structural defects in residential construction',
                    'Regulatory compliance — required for all new home builds',
                    'Additional confidence in the contractor\'s track record',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-orange-500 to-yellow-500 rounded-2xl p-10 text-black mb-8">
                <Award className="w-16 h-16 mb-6" />
                <h3 className="text-3xl font-bold mb-3">NHBRC Registration</h3>
                <p className="text-xl font-semibold mb-4">Pending Confirmation</p>
                <p className="text-lg leading-relaxed mb-6">
                  Registration is in progress and expected to be confirmed by 30 June 2025. This page will be updated with full registration details upon confirmation.
                </p>
                <div className="bg-black/10 rounded-xl p-5">
                  <p className="font-bold text-lg mb-1">Existing Registration</p>
                  <p className="text-sm leading-relaxed">
                    Afripact currently holds CIDB Grade 2CE (Civil Engineering) and Grade 2GB (General Building) contractor registration — CRS number 10262268.
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8">
                <Shield className="w-10 h-10 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Current Credentials</h3>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>CIDB Grade 2CE</strong> — Civil Engineering contractor</li>
                  <li><strong>CIDB Grade 2GB</strong> — General Building contractor</li>
                  <li><strong>Additional:</strong> 1SQ | 1ME</li>
                  <li><strong>CRS Number:</strong> 10262268</li>
                  <li><strong>NHBRC Registration:</strong> Pending (expected 30 June 2025)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Plan Your New Build or Renovation</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Whether you are building new or renovating an existing property, we bring the same standards of workmanship, documentation, and accountability to every project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={goToContact}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50 inline-flex items-center gap-2">
              Discuss Your Project <ArrowRight className="w-5 h-5" />
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
