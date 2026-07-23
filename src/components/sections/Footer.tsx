'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, Instagram, MapPin, ExternalLink } from 'lucide-react';

const footerLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Daftar Motor', href: '/motor' },
  { label: 'Cara Rental', href: '/cara-rental' },
  { label: 'Lokasi', href: '/lokasi' },
  { label: 'Kontak', href: '/kontak' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white relative">
      {/* Accent line */}
      <div className="h-1 bg-gradient-to-r from-rajawali via-rajawali-light to-rajawali" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-2xl overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="Rajawali Motorcycle Rental Jakarta"
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <span className="font-bold text-lg leading-tight block">Rajawali</span>
                <span className="text-xs text-white/60 leading-tight block">Motorcycle Rental Jakarta & Tangerang</span>
              </div>
            </div>
            <p className="text-white/60 leading-relaxed max-w-md mb-6">
              Rajawali Motorcycle Rental Jakarta menyediakan jasa sewa motor harian, mingguan, hingga bulanan untuk wilayah DKI Jakarta dan Tangerang. Armada terawat, nyaman, harga terjangkau.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/6282310759060"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-rajawali flex items-center justify-center transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/rentalmotorjakarta"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-rajawali flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="mailto:rentalmotorjakarta@gmail.com"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-rajawali flex items-center justify-center transition-colors duration-300"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://maps.app.goo.gl/v8eCHVWnA5Qm5jQu5"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 hover:bg-rajawali flex items-center justify-center transition-colors duration-300"
                aria-label="Google Maps"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-5">Menu</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-rajawali-light transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-5">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-rajawali flex-shrink-0" />
                <a href="tel:+6282310759060" className="text-white/70 hover:text-rajawali-light text-sm transition-colors">
                  0823-1075-9060
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-rajawali flex-shrink-0" />
                <a href="mailto:rentalmotorjakarta@gmail.com" className="text-white/70 hover:text-rajawali-light text-sm transition-colors">
                  rentalmotorjakarta@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-4 h-4 text-rajawali flex-shrink-0" />
                <a
                  href="https://www.instagram.com/rentalmotorjakarta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-rajawali-light text-sm transition-colors inline-flex items-center gap-1"
                >
                  @rentalmotorjakarta
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-rajawali flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.app.goo.gl/v8eCHVWnA5Qm5jQu5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-rajawali-light text-sm transition-colors"
                >
                  Jakarta & Tangerang
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            Copyright © {new Date().getFullYear()} Rajawali Motorcycle Rental Jakarta. All rights reserved.
          </p>
          <div className="flex items-center gap-1 text-white/40 text-sm">
            <span>Minimum Sewa</span>
            <span className="text-rajawali font-bold">3 Hari</span>
            <span className="mx-1">·</span>
            <span>Antar Jemput</span>
            <span className="text-rajawali font-bold">Rp50.000</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
