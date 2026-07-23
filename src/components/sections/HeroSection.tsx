'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const WA_LINK = 'https://wa.me/6282310759060?text=Halo%2C%20saya%20ingin%20sewa%20motor';

export default function HeroSection() {


  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/hero-motorcycle.png"
          alt="Rajawali Motorcycle Rental Jakarta - Sewa Motor Premium"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
      </div>

      {/* Blue Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rajawali/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-rajawali/15 rounded-full blur-[100px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rajawali/10 border border-rajawali/20 backdrop-blur-sm mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-rajawali animate-pulse" />
            <span className="text-sm font-medium text-rajawali-light">
              #1 Motorcycle Rental di Jakarta & Tangerang
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight"
          >
            Rajawali{' '}
            <span className="text-rajawali">Motorcycle</span>
            <br />
            Rental Jakarta
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-6 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Sewa Motor Harian, Mingguan, dan Bulanan di Jakarta & Tangerang{' '}
            <br className="hidden sm:block" />
            dengan Harga Terjangkau.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-rajawali hover:bg-rajawali-dark text-white rounded-2xl px-8 py-6 text-base font-semibold shadow-xl shadow-rajawali/30 hover:shadow-rajawali/50 transition-all"
              >
                Sewa Sekarang
              </Button>
            </a>
            <Link href="/motor">
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl px-8 py-6 text-base font-semibold border-white/20 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm transition-all"
              >
                Lihat Daftar Motor
              </Button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-4 sm:gap-8 max-w-lg mx-auto"
          >
            {[
              { value: '500+', label: 'Pelanggan Puas' },
              { value: '7', label: 'Unit Motor' },
              { value: '4.9', label: 'Rating' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-rajawali">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/60 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      >
      <ChevronDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
