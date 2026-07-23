'use client';

import { useState, useEffect, useSyncExternalStore } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun, Bike } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Daftar Motor', href: '#motor' },
  { label: 'Cara Rental', href: '#cara-rental' },
  { label: 'Syarat', href: '#syarat' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Testimoni', href: '#testimoni' },
];

const WA_LINK = 'https://wa.me/6282310759060?text=Halo%2C%20saya%20ingin%20sewa%20motor';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#beranda"
            onClick={(e) => { e.preventDefault(); handleNavClick('#beranda'); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-xl bg-rajawali flex items-center justify-center shadow-lg shadow-rajawali/30">
              <Bike className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-sm md:text-base text-foreground leading-tight block">
                Rajawali
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground leading-tight block">
                Motorcycle Rental
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-rajawali dark:hover:text-rajawali-light transition-colors rounded-lg hover:bg-rajawali/5"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2">
            {mounted && (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                className="rounded-xl"
              >
                {resolvedTheme === 'dark' ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </Button>
            )}
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hidden sm:block">
              <Button className="bg-rajawali hover:bg-rajawali-dark text-white rounded-xl shadow-lg shadow-rajawali/25 transition-all hover:shadow-rajawali/40">
                Sewa Sekarang
              </Button>
            </a>
            {/* Mobile Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-xl"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden glass border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium text-muted-foreground hover:text-rajawali dark:hover:text-rajawali-light hover:bg-rajawali/5 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2"
              >
                <Button className="w-full bg-rajawali hover:bg-rajawali-dark text-white rounded-xl">
                  Sewa Sekarang
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
