'use client';

import { useRouter } from 'next/navigation';
import {
  ArrowRight, CheckCircle, X, Shovel, Droplet, Map, ClipboardCheck,
  Shield, Clock, Award, Building2, HardHat, Factory, ChevronDown,
} from 'lucide-react';

export default function HomeContent() {
  const router = useRouter();

  const goToContact = () => router.push('/contact');

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=1600)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="mb-8 inline-flex justify-center">
            <img src="/AfriPact.png" alt="Afripact Civils" className="h-40 w-auto" />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Engineering & Construction Done Right. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500">
              No Delays. No Excuses.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 font-medium">
            CIDB Grade 2CE & 2GB contractor delivering civil and building solutions across KZN.
          </p>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            If you&apos;re building, expanding, or preparing land, you can&apos;t afford sloppy civils work. With us, your project is on schedule, on budget, and built to last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={goToContact}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50 flex items-center gap-2">
              Discuss Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={goToContact}
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white/20 hover:bg-white/20 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-white/30">
              Request Project Assessment
            </button>
          </div>
        </div>
      </section>

      {/* Audience */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for Developers, Contractors, and Industrial Projects
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We don&apos;t take on everything. We work with teams that need reliability, speed, and execution done right the first time.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Building2, title: 'Property Developers', desc: 'Large-scale developments require strict timelines and cost control. We deliver structured execution that keeps projects on track from start to finish.' },
              { icon: HardHat, title: 'Construction Companies', desc: 'We work alongside construction teams as a reliable subcontractor, delivering work on time and to specification without delays or rework.' },
              { icon: Factory, title: 'Industrial & Commercial', desc: 'Precision and compliance are critical. We execute projects to exact requirements, ensuring durability and long-term performance.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-gray-50 border-2 border-gray-200 rounded-xl p-8 hover:border-orange-500 hover:shadow-lg transition-all group">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button onClick={goToContact}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50">
              Discuss Your Project
            </button>
          </div>
        </div>
      </section>

      {/* What you want */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What You Actually Want</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
              You want the ground prepped correctly, the drainage working, the levels perfect, and the job finished when we said it would be finished. That&apos;s exactly what we deliver.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {['No blown timelines', 'No "hidden issues" appearing halfway', 'No shortcuts', 'No crews that disappear after deposit', 'No rework', 'No excuses'].map((item, index) => (
              <div key={index} className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6 flex items-start gap-4 hover:border-orange-500 transition-all">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <span className="text-lg font-semibold text-gray-900">{item}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button onClick={goToContact}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50">
              Discuss Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Civil Engineering That Doesn&apos;t Need Fixing Later</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {[
              { icon: Shovel, title: 'Earthworks', desc: 'Your site cleared, shaped, compacted, and ready — without weak spots or collapses that cost you double later.' },
              { icon: Droplet, title: 'Civil Infrastructure', desc: 'Stormwater, drainage, retaining structures, access roads — built to spec, to code, and to last.' },
              { icon: Map, title: 'Site Preparation', desc: 'A fully prepped site so the next contractor can step in immediately. No delays. No failed groundwork.' },
              { icon: ClipboardCheck, title: 'Project Management', desc: `We handle the planning, sequencing, and execution so you aren't stuck babysitting contractors.` },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 hover:border-orange-500 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-black" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{title}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button onClick={goToContact}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50">
              Tell Us About Your Site
            </button>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why People Choose Us</h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Most contractors avoid responsibility. We take full ownership of the job, the timeline, and the outcome.
              If there&apos;s a problem, we fix it. If there&apos;s a deadline, we meet it. If we say it&apos;s done, it&apos;s done properly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: 'Accountability', desc: 'We take responsibility for the entire project. No finger-pointing. No runaround.' },
              { icon: Clock, title: 'Predictable Timelines', desc: 'You get clear scheduling, weekly updates, and zero surprises.' },
              { icon: Award, title: 'Work That Lasts', desc: `Engineered quality that doesn't need redoing in six months.` },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-8 text-center">
                <Icon className="w-14 h-14 text-orange-500 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
                <p className="text-gray-700 leading-relaxed text-lg">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you avoid */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Here&apos;s What You Avoid With Us</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">Bad civils work costs you twice:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {['fixing rushed mistakes', 'redoing failed groundwork', 'delays caused by poor planning', 'equipment sitting idle', "crews waiting because the site isn't ready", 'bills stacking because timelines slip'].map((item, index) => (
                <div key={index} className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 flex items-start gap-3">
                  <X className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-lg text-gray-200">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed text-center">
              Our clients choose us because they refuse to pay for the same job twice... Why would you?
            </p>
            <div className="text-center">
              <button onClick={goToContact}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50">
                Request A Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Projects Delivered Without Compromise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">Proven execution across real-world projects. Delivered on time, without compromise.</p>
            <p className="text-lg text-gray-500 mb-12">Every project is completed with the same standard. No shortcuts. No rework. No delays.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { src: 'https://images.pexels.com/photos/1078884/pexels-photo-1078884.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Imbali Township Infrastructure', title: 'Imbali Township Infrastructure', desc: 'Water reticulation and road infrastructure upgrade serving over 500 households.' },
              { src: 'https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Commercial Site Development', title: 'Commercial Site Development', desc: 'Full site development including earthworks and stormwater for a 5000m² commercial complex.' },
              { src: 'https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'KZN Rural Road Rehabilitation', title: 'KZN Rural Road Rehabilitation', desc: 'Road rehabilitation delivering improved access and safety for rural communities in KZN.' },
            ].map(({ src, alt, title, desc }) => (
              <div key={title} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button onClick={() => router.push('/projects')}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50 inline-flex items-center gap-2">
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {([
              {
                q: 'What CIDB grade does Afripact Civils hold?',
                a: 'Afripact Civils is registered as a CIDB Grade 2CE (Civil Engineering) and Grade 2GB (General Building) contractor. Our CRS number is 10262268.',
              },
              {
                q: 'Do you work as a subcontractor?',
                a: 'Yes. We regularly work alongside construction companies as a reliable civils subcontractor, delivering to specification without delays or rework.',
              },
              {
                q: 'What areas do you serve?',
                a: 'We operate across KwaZulu-Natal, with a primary base in Pietermaritzburg and active projects throughout the greater KZN region including Durban.',
              },
              {
                q: 'What is the minimum project size you take on?',
                a: 'We focus on commercial, industrial, and development-scale projects. Contact us to discuss your specific scope and we\u2019ll advise on fit.',
              },
              {
                q: 'How long does a typical earthworks project take?',
                a: 'Timeline depends on site size and conditions. We provide a detailed schedule at assessment stage \u2014 and we hold to it. No open-ended timelines.',
              },
              {
                q: 'How do I request a quote or project assessment?',
                a: 'Call 033 001 0397, email quotes@afripact.net, or use the Request Assessment form on this site. We respond within 1 business day.',
              },
              {
                q: 'What is included in your site development service?',
                a: 'Our site development service covers earthworks, bulk services, stormwater, access roads, and full site preparation \u2014 coordinated under one contractor.',
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let&apos;s Discuss Your Project</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Share your requirements and we&apos;ll guide the process with a solid plan, firm timelines, and transparent costs.
            </p>
          </div>
          <div className="bg-white rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <p className="text-xl text-gray-700 mb-8">Ready to start? Head to our contact page to tell us about your project.</p>
              <button onClick={goToContact}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50 mb-8">
                Request Project Assessment
              </button>
              <div className="pt-8 border-t border-gray-200">
                <p className="text-gray-600 mb-2">Need a faster response?</p>
                <a href="tel:0330010397"
                  className="text-2xl font-bold text-orange-500 hover:text-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-3 py-1">
                  033 001 0397
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
