'use client';

import { Phone } from 'lucide-react';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

export default function FloatingContact() {
  const { openModal } = useQuoteModal();

  return (
    <button
      onClick={() => openModal('', 'contact')}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-yellow-500 text-black p-4 rounded-full shadow-2xl hover:shadow-orange-500/50 hover:scale-110 transition-all z-40 focus:outline-none focus:ring-4 focus:ring-orange-500/50 group"
      aria-label="Contact us">
      <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
    </button>
  );
}
