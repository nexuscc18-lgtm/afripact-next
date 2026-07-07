'use client';

import { useState } from 'react';
import { Phone, Loader, CheckCircle } from 'lucide-react';

interface InlineCallbackFormProps {
  service?: string;
  heading?: string;
  subtext?: string;
}

export default function InlineCallbackForm({
  service = '',
  heading = 'Get a Free Quote',
  subtext = 'Leave your name and number. We call you back.',
}: InlineCallbackFormProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          service: service || 'General enquiry',
          submissionType: 'callback',
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('success');
    } catch {
      setStatus('error');
    } finally {
      setSubmitting(false);
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-gray-900 mb-2">We&apos;ll call you back</h3>
        <p className="text-gray-600">Cebo will be in touch shortly to discuss your project.</p>
        <div className="mt-6 pt-4 border-t border-orange-200">
          <a href="tel:0695036291" className="flex items-center justify-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors">
            <Phone className="w-4 h-4" />Can&apos;t wait? Call now: 069 503 6291
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{heading}</h3>
      <p className="text-gray-600 mb-6 text-sm leading-relaxed">{subtext}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="inline-name" className="block text-sm font-semibold text-gray-700 mb-1">Your name</label>
          <input id="inline-name" type="text" required value={name} onChange={(e) => setName(e.target.value)}
            placeholder="John Dlamini"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-gray-900" />
        </div>
        <div>
          <label htmlFor="inline-phone" className="block text-sm font-semibold text-gray-700 mb-1">Phone number</label>
          <input id="inline-phone" type="tel" required value={phone} onChange={(e) => setPhone(e.target.value)}
            placeholder="082 123 4567"
            className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-gray-900" />
        </div>
        {status === 'error' && (
          <p className="text-red-600 text-sm">Something went wrong. Please call us directly.</p>
        )}
        <button type="submit" disabled={submitting}
          className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-orange-500/50 flex items-center justify-center gap-2">
          {submitting ? <><Loader className="w-5 h-5 animate-spin" />Sending...</> : <><Phone className="w-5 h-5" />Call me back</>}
        </button>
      </form>
      <div className="mt-4 pt-4 border-t border-orange-200">
        <a href="tel:0695036291" className="flex items-center justify-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors text-sm">
          <Phone className="w-4 h-4" />Or call us: 069 503 6291
        </a>
      </div>
    </div>
  );
}
