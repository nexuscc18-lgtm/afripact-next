import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { CONTACT } from '@/lib/contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Afripact Civils',
  description: 'Privacy Policy for Afripact Civils (Pty) Ltd: how we collect, store, and protect your personal information in accordance with POPIA.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-gray-400 mb-6 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-orange-500 transition-colors focus:outline-none focus:text-orange-500">Home</Link>
            <ArrowRight className="w-4 h-4" />
            <span className="text-orange-500">Privacy Policy</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-lg text-gray-400">Effective 10 September 2026</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 text-gray-700 text-base leading-relaxed">

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p>Afripact Civils (Pty) Ltd (Registration No. 2020/740779/07) (&quot;Afripact&quot;, &quot;we&quot;, &quot;us&quot;) is committed to protecting your personal information in accordance with the Protection of Personal Information Act 4 of 2013 (POPIA). This policy explains what we collect through afripact.net, why we collect it, and how it&apos;s handled.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. What we collect</h2>
              <p className="mb-4">When you submit a quote request, contact form, or callback request, we collect what you provide: your name, phone number, email address, company name (where applicable), the service you&apos;re enquiring about, your suburb, budget band, preferred start date, your message, and any photos you choose to upload.</p>
              <p>We also collect standard website analytics through Google Analytics, including which pages you visit, how you found the site, how long you spend on a page, and whether you click to call us. This data is not directly identifiable to you by name.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Why we collect it</h2>
              <p>Contact and quote information is collected solely to respond to your enquiry, prepare a quote, schedule a site inspection, and deliver our services. Analytics data is used to understand which pages and services people are interested in, so we can improve the site and respond to real demand.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. How we store and protect it</h2>
              <p className="mb-4">Form submissions are stored securely via Supabase and accessed only by authorised Afripact personnel. Notification emails about new enquiries are sent via Resend. We do not sell your personal information, and we don&apos;t share it with third parties except where necessary to deliver our services (for example, the platforms above, or communication tools like WhatsApp).</p>
              <p>Website analytics data is processed by Google Analytics under Google&apos;s own data handling terms.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your rights</h2>
              <p>Under POPIA, you have the right to access, correct, or request deletion of your personal information held by us. To exercise these rights, contact us at <a href={CONTACT.emailHref} className="text-orange-600 hover:text-orange-700 underline">{CONTACT.email}</a>.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact</h2>
              <p>
                Afripact Civils (Pty) Ltd &middot; Reg. No. 2020/740779/07 &middot; {CONTACT.address.line1}, {CONTACT.address.city}, {CONTACT.address.postalCode} &middot;{' '}
                <a href={CONTACT.emailHref} className="text-orange-600 hover:text-orange-700 underline">{CONTACT.email}</a>
                {' '}&middot;{' '}
                <a href={CONTACT.phoneLandlineHref} className="text-orange-600 hover:text-orange-700 underline">{CONTACT.phoneLandline}</a>
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
