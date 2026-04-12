'use client';

import { useState, useEffect } from 'react';
import { X, Phone, Mail, MapPin, Send, Loader } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { ContactFormData } from '@/types';
import { services } from '@/data/services';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  submissionType?: 'contact' | 'quote';
}

export default function ContactModal({
  isOpen,
  onClose,
  defaultService = '',
  submissionType = 'contact',
}: ContactModalProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
    service: defaultService,
    submissionType,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        company: '',
        phone: '',
        email: '',
        message: '',
        service: defaultService,
        submissionType,
      });
      setSubmitStatus('idle');
    }
  }, [isOpen, defaultService, submissionType]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error: dbError } = await supabase.from('contact_submissions').insert([
        {
          name: formData.name,
          company: formData.company || null,
          phone: formData.phone,
          email: formData.email,
          message: formData.message,
          service: formData.service || null,
          submission_type: formData.submissionType,
        },
      ]);

      if (dbError) throw new Error(dbError.message);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SUPABASE_URL}/functions/v1/send-contact-email`,
          {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          },
        );
        if (!response.ok) console.warn('Email notification failed, submission was saved');
      } catch (emailError) {
        console.warn('Email notification failed, submission was saved:', emailError);
      }

      setSubmitStatus('success');
      setFormData({ name: '', company: '', phone: '', email: '', message: '', service: '', submissionType: 'contact' });
      setTimeout(() => {
        onClose();
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (!isSubmitting) {
      onClose();
      setTimeout(() => setSubmitStatus('idle'), 300);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-yellow-500 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-black">
            {submissionType === 'quote' ? 'Request a Quote' : 'Contact Us'}
          </h2>
          <button
            onClick={handleClose}
            disabled={isSubmitting}
            className="p-2 hover:bg-black/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50"
            aria-label="Close"
          >
            <X className="w-6 h-6 text-black" />
          </button>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <a href="tel:0330010397" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group focus:outline-none focus:ring-2 focus:ring-orange-500">
              <Phone className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-xs text-gray-600">Landline</p>
                <p className="font-semibold text-gray-900">033 001 0397</p>
              </div>
            </a>
            <a href="tel:0695036291" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group focus:outline-none focus:ring-2 focus:ring-orange-500">
              <Phone className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-xs text-gray-600">Mobile</p>
                <p className="font-semibold text-gray-900">069 503 6291</p>
              </div>
            </a>
            <a href="mailto:quotes@afripact.net" className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group focus:outline-none focus:ring-2 focus:ring-orange-500">
              <Mail className="w-5 h-5 text-orange-500 group-hover:scale-110 transition-transform" />
              <div>
                <p className="text-xs text-gray-600">Email</p>
                <p className="font-semibold text-gray-900 text-sm">quotes@afripact.net</p>
              </div>
            </a>
          </div>

          <div className="mb-6 p-4 bg-gray-50 rounded-lg flex items-start gap-3">
            <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
            <address className="not-italic text-gray-700 text-sm leading-relaxed">
              <strong className="text-gray-900">Visit Us:</strong><br />
              193 Pine Street<br />
              Pietermaritzburg<br />
              KwaZulu-Natal, South Africa, 3201
            </address>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800 font-medium">
                Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800 font-medium">
                Sorry, there was an error. Please try again or contact us directly.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="modal-name" className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input type="text" id="modal-name" required minLength={2} maxLength={100}
                  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="modal-company" className="block text-sm font-semibold text-gray-700 mb-2">Company</label>
                <input type="text" id="modal-company"
                  value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="Company Name" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="modal-phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                <input type="tel" id="modal-phone" required minLength={10} maxLength={20}
                  value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="082 123 4567" />
              </div>
              <div>
                <label htmlFor="modal-email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <input type="email" id="modal-email" required minLength={5} maxLength={255}
                  value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  placeholder="john@example.com" />
              </div>
            </div>

            <div>
              <label htmlFor="modal-service" className="block text-sm font-semibold text-gray-700 mb-2">Service Required</label>
              <select id="modal-service"
                value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all">
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service.id} value={service.title}>{service.title}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="modal-message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
              <textarea id="modal-message" required minLength={10} maxLength={2000}
                value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your project..." />
            </div>

            <button type="submit" disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black font-bold py-3 px-6 rounded-lg hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 flex items-center justify-center gap-2">
              {isSubmitting ? (
                <><Loader className="w-5 h-5 animate-spin" />Sending...</>
              ) : (
                <><Send className="w-5 h-5" />Send Message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
