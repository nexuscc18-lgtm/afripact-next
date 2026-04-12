'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import ContactModal from '@/components/ContactModal';

interface QuoteModalContextType {
  openModal: (serviceTitle?: string, type?: 'contact' | 'quote') => void;
}

const QuoteModalContext = createContext<QuoteModalContextType | undefined>(undefined);

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultService, setDefaultService] = useState('');
  const [submissionType, setSubmissionType] = useState<'contact' | 'quote'>('contact');

  const openModal = (serviceTitle = '', type: 'contact' | 'quote' = 'contact') => {
    setDefaultService(serviceTitle);
    setSubmissionType(type);
    setIsOpen(true);
  };

  return (
    <QuoteModalContext.Provider value={{ openModal }}>
      {children}
      <ContactModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        defaultService={defaultService}
        submissionType={submissionType}
      />
    </QuoteModalContext.Provider>
  );
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext);
  if (!context) throw new Error('useQuoteModal must be used within QuoteModalProvider');
  return context;
}
