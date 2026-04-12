'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Shovel, Route, Droplet, CloudRain, Square, Building2, ArrowRight,
  Paintbrush, Wrench, Home, Zap, Bath, Fence, Grid3x3, Truck,
} from 'lucide-react';
import { services } from '@/data/services';
import { Service } from '@/types';
import ServiceDetailModal from '@/components/ServiceDetailModal';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shovel, Route, Droplet, CloudRain, Square, Building2, Truck,
  Paintbrush, Wrench, Home, Zap, Bath, Fence, Grid3x3,
};

export default function ServicesContent() {
  const { openModal } = useQuoteModal();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: Service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <nav className="text-sm text-gray-400 mb-6 flex items-center justify-center gap-2">
            <Link href="/" className="hover:text-orange-500 transition-colors focus:outline-none focus:text-orange-500">
              Home
            </Link>
            <ArrowRight className="w-4 h-4" />
            <span className="text-orange-500">Services</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive civil engineering and construction solutions designed to meet the unique needs of your project
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div key={service.id} id={`service-${service.id}`}
                  className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden hover:border-orange-500 hover:shadow-xl transition-all group cursor-pointer"
                  onClick={() => handleServiceClick(service)}>
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <div className="flex items-center gap-2 text-orange-500 font-semibold group-hover:gap-3 transition-all">
                      <span>View Details</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Every project is unique. Let&apos;s discuss how we can tailor our services to meet your specific requirements.
          </p>
          <button onClick={() => openModal('', 'quote')}
            className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:shadow-orange-500/50 hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-orange-500/50">
            Request a Quote
          </button>
        </div>
      </section>

      <ServiceDetailModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onRequestQuote={(title) => { openModal(title, 'quote'); setIsModalOpen(false); }}
      />
    </div>
  );
}
