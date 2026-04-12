'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Request Assessment' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <img src="/AfriPact.png" alt="Afripact Civils" className="h-16 w-auto" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium quality civil engineering and construction services. Built right the first time.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-2 py-1 -ml-2">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contact Info</h3>
            <ul className="space-y-3">
              <li>
                <a href="tel:0330010397" className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors text-sm group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-2 py-1 -ml-2">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  033 001 0397
                </a>
              </li>
              <li>
                <a href="tel:0695036291" className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors text-sm group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-2 py-1 -ml-2">
                  <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  069 503 6291
                </a>
              </li>
              <li>
                <a href="mailto:quotes@afripact.net" className="flex items-center gap-2 text-gray-400 hover:text-orange-500 transition-colors text-sm group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-2 py-1 -ml-2">
                  <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  quotes@afripact.net
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Location</h3>
            <div className="flex items-start gap-2 text-gray-400 text-sm">
              <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-orange-500" />
              <address className="not-italic leading-relaxed">
                193 Pine Street<br />
                Pietermaritzburg<br />
                3201
              </address>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center sm:text-left">
            © {currentYear} Afripact Civils (PTY) LTD. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs text-center sm:text-right">
            Registered civil engineering and construction company
          </p>
        </div>
      </div>
    </footer>
  );
}
