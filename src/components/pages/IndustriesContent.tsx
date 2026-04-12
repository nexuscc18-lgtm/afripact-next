'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Building2, HardHat, Factory, CheckCircle } from 'lucide-react';

export default function IndustriesContent() {
  const router = useRouter();
  const goToContact = () => router.push('/contact');

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-gray-400 mb-6 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <ArrowRight className="w-4 h-4" />
            <span className="text-orange-500">Industries</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Civil Solutions Built Around Your Industry</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We work with the clients who can&apos;t afford delays, rework, or poor execution. If your project has a real deadline and real consequences, we&apos;re built for that.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Property Developers */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Property Developers</h2>
              <h3 className="text-2xl font-semibold text-orange-600 mb-6">Keeping Developments On Schedule and On Budget</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                Delays cost money. Poor execution costs more. We work with developers to ensure every phase of the project is delivered correctly and on time.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Platform preparation ready before follow-on contractors mobilise',
                  'Stormwater and drainage installed to approval standards',
                  'Access roads and parking areas completed to specification',
                  'Full accountability — one point of contact, no runaround',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <button onClick={goToContact}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-7 py-3 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50 inline-flex items-center gap-2">
                Request Project Assessment <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <img src="https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Property development construction" className="rounded-2xl shadow-2xl w-full" loading="lazy" />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-black p-5 rounded-xl shadow-xl hidden md:block">
                <p className="text-xl font-bold">On Time</p>
                <p className="text-sm font-semibold">Every Phase</p>
              </div>
            </div>
          </div>

          {/* Construction Companies */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="order-2 lg:order-1 relative">
              <img src="https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Construction subcontracting" className="rounded-2xl shadow-2xl w-full" loading="lazy" />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-black p-5 rounded-xl shadow-xl hidden md:block">
                <p className="text-xl font-bold">No Delays</p>
                <p className="text-sm font-semibold">No Rework</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <HardHat className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Construction Companies</h2>
              <h3 className="text-2xl font-semibold text-orange-600 mb-6">Subcontracting You Can Rely On</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                We integrate seamlessly into your project, delivering work that meets your timelines, standards, and expectations.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Work delivered to your programme — not ours',
                  'Clear communication at every stage, no chasing required',
                  'Quality that passes inspection first time',
                  'CIDB-registered contractor, compliant documentation',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <button onClick={goToContact}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-7 py-3 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50 inline-flex items-center gap-2">
                Request Project Assessment <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Industrial Projects */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center mb-6">
                <Factory className="w-8 h-8 text-black" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Industrial Projects</h2>
              <h3 className="text-2xl font-semibold text-orange-600 mb-6">Precision Execution for Industrial Requirements</h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                From site preparation to infrastructure, we deliver work that meets strict operational and compliance standards.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Site preparation to exact engineering specifications',
                  'Compliance with industrial access and load requirements',
                  'Stormwater and drainage systems designed for operational environments',
                  'Structured execution that minimises disruption to operations',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <button onClick={goToContact}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-7 py-3 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50 inline-flex items-center gap-2">
                Request Project Assessment <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <div className="relative">
              <img src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Industrial site development" className="rounded-2xl shadow-2xl w-full" loading="lazy" />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-black p-5 rounded-xl shadow-xl hidden md:block">
                <p className="text-xl font-bold">Built to Spec</p>
                <p className="text-sm font-semibold">No Compromises</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Discuss Your Project?</h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto">
            Tell us about your project. We&apos;ll assess whether it&apos;s a fit and come back to you with a clear picture of what we can deliver.
          </p>
          <button onClick={goToContact}
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-10 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50 inline-flex items-center gap-2">
            Request Project Assessment <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
