'use client';

import { motion } from 'framer-motion';
import { MousePointerClick, MessageCircle, FileCheck, Truck } from 'lucide-react';

const steps = [
  {
    icon: MousePointerClick,
    step: '01',
    title: 'Pilih Motor',
    description: 'Pilih motor yang sesuai kebutuhan dan budget Anda. Lihat daftar lengkap motor beserta harga di halaman Daftar Motor.',
  },
  {
    icon: MessageCircle,
    step: '02',
    title: 'Hubungi WhatsApp',
    description: 'Hubungi kami via WhatsApp untuk konfirmasi ketersediaan motor dan menyepakati tanggal sewa.',
  },
  {
    icon: FileCheck,
    step: '03',
    title: 'Verifikasi Data',
    description: 'Siapkan KTP dan KK untuk proses verifikasi. Data Anda aman bersama kami.',
  },
  {
    icon: Truck,
    step: '04',
    title: 'Motor Diantar',
    description: 'Motor diantarkan langsung ke lokasi Anda di Jakarta atau Tangerang. Biaya antar Rp50.000 sekali jalan.',
  },
];

export default function HowToRentSection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-rajawali/5 rounded-full blur-[150px] -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-red-600 tracking-wider uppercase mb-3">
            Cara Rental
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            4 Langkah <span className="text-red-600">Mudah</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Proses rental yang cepat dan simpel, dari pilihan motor hingga motor diantar ke lokasi Anda.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.15, duration: 0.5, ease: 'easeOut' }}
              className="relative"
            >
              {/* Connector Line (not on last item) */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-[calc(50%+40px)] w-[calc(100%-80px)] h-px border-t-2 border-dashed border-rajawali/20" />
              )}

              <div className="text-center group">
                {/* Step Number */}
                <div className="relative inline-flex mb-6">
                  <div className="w-28 h-28 rounded-3xl bg-rajawali/5 flex items-center justify-center group-hover:bg-rajawali/10 transition-colors duration-300 border border-rajawali/10">
                    <item.icon className="w-10 h-10 text-red-600" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-rajawali text-white text-sm font-bold flex items-center justify-center shadow-lg shadow-rajawali/30">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
