'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Phone, Mail, MapPin, Send, Loader, CheckCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { ContactFormData } from '@/types';

const projectTypes = [
  'Earthworks & Bulk Excavation',
  'Road Construction & Rehabilitation',
  'Stormwater & Drainage',
  'Water & Sewer Reticulation',
  'Site Development & Preparation',
  'Paving & Surfacing',
  'General Building',
  'Other Civil Works',
];

const budgetRanges = [
  'Under R500,000',
  'R500,000 – R1,000,000',
  'R1,000,000 – R2,500,000',
  'R2,500,000 – R5,000,000',
  'R5,000,000+',
  'Not yet determined',
];

interface AssessmentFormData {
  name: string; company: string; phone: string; email: string;
  projectType: string; location: string; timeline: string; budgetRange: string; message: string;
}

const emptyForm: AssessmentFormData = {
  name: '', company: '', phone: '', email: '',
  projectType: '', location: '', timeline: '', budgetRange: '', message: '',
};

export default function ContactContent() {
  const [formData, setFormData] = useState<AssessmentFormData>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const contactPayload: ContactFormData = {
        name: formData.name,
        company: formData.company,
        phone: formData.phone,
        email: formData.email,
        message: `Project Type: ${formData.projectType}\nLocation: ${formData.location}\nTimeline: ${formData.timeline}\nBudget Range: ${formData.budgetRange}\n\n${formData.message}`,
        service: formData.projectType,
        submissionType: 'quote',
      };

      const { error: dbError } = await supabase.from('contact_submissions').insert([{
        name: contactPayload.name,
        company: contactPayload.company || null,
        phone: contactPayload.phone,
        email: contactPayload.email,
        message: contactPayload.message,
        service: contactPayload.service || null,
        submission_type: contactPayload.submissionType,
      }]);

      if (dbError) throw dbError;

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-contact-email`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contactPayload),
        },
      );

      if (!response.ok) throw new Error('Failed to send email');

      setSubmitStatus('success');
      setFormData(emptyForm);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const field = (id: string, label: string, value: string, onChange: (v: string) => void, opts: {
    type?: string; required?: boolean; placeholder?: string;
  } = {}) => (
    <div>
      <label htmlFor={id} className="block text-sm font-bold text-gray-700 mb-2">
        {label}{opts.required && ' *'}
      </label>
      <input type={opts.type ?? 'text'} id={id} required={opts.required} value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
        placeholder={opts.placeholder ?? ''} />
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-gray-400 mb-6 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <ArrowRight className="w-4 h-4" />
            <span className="text-orange-500">Request a Project Assessment</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Request a Project Assessment</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We focus on projects where execution, timelines, and reliability matter. Provide a few details and we will assess how we can support your project.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitStatus === 'success' && (
            <div className="max-w-3xl mx-auto mb-12 bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-900 mb-2">Assessment Request Received</h3>
              <p className="text-green-800 text-lg">We&apos;ll review your project details and get back to you within 24 hours.</p>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Phone, title: 'Call Us', items: [{ href: 'tel:0330010397', label: '033 001 0397' }, { href: 'tel:0695036291', label: '069 503 6291' }] },
              { icon: Mail, title: 'Email Us', items: [{ href: 'mailto:quotes@afripact.net', label: 'quotes@afripact.net' }, { href: 'mailto:cebo@afripact.net', label: 'cebo@afripact.net' }] },
            ].map(({ icon: Icon, title, items }) => (
              <div key={title} className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-8 hover:shadow-lg transition-all">
                <Icon className="w-12 h-12 text-orange-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
                <div className="space-y-3">
                  {items.map(({ href, label }) => (
                    <a key={href} href={href}
                      className="block text-gray-700 hover:text-orange-500 transition-colors font-semibold focus:outline-none focus:ring-2 focus:ring-orange-500 rounded p-2 -ml-2">
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
            <div className="bg-gradient-to-br from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-8 hover:shadow-lg transition-all">
              <MapPin className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visit Us</h3>
              <address className="not-italic text-gray-700 leading-relaxed">
                193 Pine Street<br />Pietermaritzburg<br />KwaZulu-Natal<br />South Africa<br />3201
              </address>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">Project Assessment Form</h2>
              <p className="text-gray-600 text-center mb-8">
                Provide a few details and we will assess how we can support your project.
              </p>

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800 font-medium">Sorry, there was an error. Please try again or contact us directly.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {field('name', 'Name', formData.name, (v) => setFormData({ ...formData, name: v }), { required: true, placeholder: 'Your full name' })}
                  {field('company', 'Company', formData.company, (v) => setFormData({ ...formData, company: v }), { placeholder: 'Company or organisation name' })}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {field('phone', 'Phone Number', formData.phone, (v) => setFormData({ ...formData, phone: v }), { type: 'tel', required: true, placeholder: '082 123 4567' })}
                  {field('email', 'Email Address', formData.email, (v) => setFormData({ ...formData, email: v }), { type: 'email', required: true, placeholder: 'you@company.com' })}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-bold text-gray-700 mb-2">Project Type *</label>
                    <select id="projectType" required value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all">
                      <option value="">Select project type</option>
                      {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                  {field('location', 'Project Location', formData.location, (v) => setFormData({ ...formData, location: v }), { required: true, placeholder: 'e.g. Pietermaritzburg, KZN' })}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {field('timeline', 'Timeline', formData.timeline, (v) => setFormData({ ...formData, timeline: v }), { placeholder: 'e.g. Start Q2 2025, 3-month duration' })}
                  <div>
                    <label htmlFor="budgetRange" className="block text-sm font-bold text-gray-700 mb-2">Budget Range</label>
                    <select id="budgetRange" value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all">
                      <option value="">Select a range (optional)</option>
                      {budgetRanges.map((r) => <option key={r} value={r}>{r}</option>)}
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Additional Project Details</label>
                  <textarea id="message" value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                    placeholder="Describe your project scope, any specific requirements, or questions..." />
                </div>
                <button type="submit" disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold py-4 px-6 rounded-lg hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-orange-500/50 flex items-center justify-center gap-2 text-lg">
                  {isSubmitting ? (
                    <><Loader className="w-5 h-5 animate-spin" />Submitting Assessment...</>
                  ) : (
                    <><Send className="w-5 h-5" />Submit Project Assessment</>
                  )}
                </button>
                <p className="text-center text-gray-600 text-sm">
                  We&apos;ll review your project details and respond within 24 hours during business days
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Prefer to Talk Directly?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">Give us a call and speak with one of our team members about your project</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:0330010397"
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />033 001 0397
            </a>
            <a href="tel:0695036291"
              className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-bold text-lg border-2 border-white/20 hover:bg-white/20 hover:scale-105 transition-all inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />069 503 6291
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
