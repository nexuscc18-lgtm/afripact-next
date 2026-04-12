'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X, Phone, LogOut, LayoutDashboard, LogIn } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useQuoteModal } from '@/contexts/QuoteModalContext';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/industries', label: 'Industries' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const { user, signOut } = useAuth();
  const { openModal } = useQuoteModal();
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    setIsMenuOpen(false);
    router.push('/');
  };

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-black/80'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center group focus:outline-none focus:ring-2 focus:ring-orange-500 rounded-lg p-2">
            <img src="/AfriPact.png" alt="Afripact Civils" className="h-12 w-auto group-hover:scale-105 transition-transform" />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}
                className={`text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-3 py-2 ${
                  isActive(item.href) ? 'text-orange-500' : 'text-white hover:text-orange-400'
                }`}>
                {item.label}
              </Link>
            ))}
            {user ? (
              <>
                <Link href="/dashboard"
                  className={`text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-3 py-2 flex items-center gap-2 ${
                    pathname === '/dashboard' ? 'text-orange-500' : 'text-white hover:text-orange-400'
                  }`}>
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Link>
                <button onClick={handleSignOut}
                  className="text-white hover:text-orange-400 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-3 py-2 flex items-center gap-2">
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </>
            ) : (
              <Link href="/login"
                className="text-white hover:text-orange-400 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-3 py-2 flex items-center gap-2">
                <LogIn className="w-4 h-4" />
                Admin Login
              </Link>
            )}
            <button
              onClick={() => openModal('', 'quote')}
              className="bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Get a Quote
            </button>
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
            aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-white/10 py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                  isActive(item.href)
                    ? 'bg-orange-500/20 text-orange-500 font-semibold'
                    : 'text-white hover:bg-white/10'
                }`}>
                {item.label}
              </Link>
            ))}
            {user ? (
              <>
                <Link href="/dashboard" onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center gap-2 w-full text-left px-4 py-3 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 ${
                    pathname === '/dashboard'
                      ? 'bg-orange-500/20 text-orange-500 font-semibold'
                      : 'text-white hover:bg-white/10'
                  }`}>
                  <LayoutDashboard className="w-4 h-4" />
                  Dashboard
                </Link>
                <button onClick={handleSignOut}
                  className="w-full text-left px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 flex items-center gap-2">
                  <LogOut className="w-4 h-4" />
                  Sign Out
                </button>
              </>
            ) : (
              <Link href="/login" onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 w-full text-left px-4 py-3 rounded-lg text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500">
                <LogIn className="w-4 h-4" />
                Admin Login
              </Link>
            )}
            <button
              onClick={() => { openModal('', 'quote'); setIsMenuOpen(false); }}
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-black px-4 py-3 rounded-lg font-semibold hover:shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-orange-500 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              Get a Quote
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
