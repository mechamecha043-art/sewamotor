'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, MapPin } from 'lucide-react';

const WA_LINK = 'https://wa.me/6282310759060?text=Halo%2C%20saya%20ingin%20sewa%20motor';

export default function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2rem] overflow-hidden"
        >
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-rajawali via-rajawali-dark to-rajawali-dark" />
          <div className="absolute inset-0 bg-[url('/hero-motorcycle.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
                <Phone className="w-4 h-4 text-white" />
                <span className="text-sm font-medium text-white/90">
                  Tersedia Hari Ini
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6"
            >
              Butuh Motor <span className="underline decoration-4 underline-offset-4 decoration-white/30">Hari Ini</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-white/80 max-w-xl mx-auto mb-10"
            >
              Hubungi Rajawali Motorcycle Rental Jakarta sekarang juga.
              Motor siap diantar ke lokasi Anda.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-white text-rajawali hover:bg-white/90 rounded-2xl px-8 py-6 text-base font-bold shadow-xl transition-all hover:shadow-2xl"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat WhatsApp
                </Button>
              </a>
              <a
                href="https://maps.app.goo.gl/v8eCHVWnA5Qm5jQu5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-2xl px-8 py-6 text-base font-semibold border-white/20 text-white hover:bg-white/10 hover:text-white transition-all"
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Lihat Lokasi
                </Button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
