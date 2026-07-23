'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function ServiceAreaBanner() {
  return (
    <section className="relative py-6 bg-gradient-to-r from-rajawali via-rajawali-dark to-rajawali overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('/hero-motorcycle.png')] bg-cover bg-center opacity-5 mix-blend-overlay" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-3 text-white"
        >
          <MapPin className="w-5 h-5 flex-shrink-0" />
          <span className="text-base sm:text-lg md:text-xl font-semibold">
            Melayani Jakarta & Tangerang
          </span>
          <span className="hidden sm:inline text-white/60">·</span>
          <span className="hidden sm:inline text-sm text-white/80">
            Antar Jemput Tersedia
          </span>
        </motion.div>
      </div>
    </section>
  );
}
