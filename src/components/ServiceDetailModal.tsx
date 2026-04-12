'use client';

import { X, CheckCircle, FileText } from 'lucide-react';
import {
  Shovel, Route, Droplet, CloudRain, Square, Building2, Truck,
  Paintbrush, Wrench, Home, Zap, Bath, Fence, Grid3x3,
} from 'lucide-react';
import { Service } from '@/types';

interface ServiceDetailModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Shovel, Route, Droplet, CloudRain, Square, Building2, Truck,
  Paintbrush, Wrench, Home, Zap, Bath, Fence, Grid3x3,
};

export default function ServiceDetailModal({
  service, isOpen, onClose, onRequestQuote,
}: ServiceDetailModalProps) {
  if (!isOpen || !service) return null;

  const Icon = iconMap[service.icon];

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="sticky top-0 bg-gradient-to-r from-orange-500 to-yellow-500 p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-black">{service.title}</h2>
          </div>
          <button onClick={onClose}
            className="p-2 hover:bg-black/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-black"
            aria-label="Close">
            <X className="w-6 h-6 text-black" />
          </button>
        </div>

        <div className="p-8">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">About This Service</h3>
            <p className="text-gray-700 leading-relaxed text-lg">{service.detailedDescription}</p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-orange-500" />
              Key Benefits
            </h3>
            <ul className="space-y-3">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-orange-500" />
              Example Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {service.examples.map((example, index) => (
                <div key={index} className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:border-orange-500 transition-colors">
                  <p className="text-gray-800 font-medium">{example}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to get started?</h3>
            <p className="text-gray-700 mb-4">
              Request a quote for {service.title.toLowerCase()} services and one of our experts will get back to you within 24 hours.
            </p>
            <button
              onClick={() => { onRequestQuote(service.title); onClose(); }}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:shadow-lg hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2">
              Request Quote for {service.title}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
