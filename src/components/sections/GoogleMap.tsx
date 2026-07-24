'use client';

import { motion } from 'framer-motion';

export default function GoogleMap() {
  return (
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-rajawali tracking-wider uppercase mb-3">
            Lokasi Kami
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Temukan <span className="text-rajawali">Kami</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-3xl overflow-hidden border border-border shadow-xl"
        >
 <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15864.269257583079!2d106.56418926212808!3d-6.25486229217151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fd002e0b827b%3A0x23e598ce13fbd0cc!2sPARK%20SERPONG%2C%20XYZ%20CHARM!5e0!3m2!1sid!2sid!4v1784858359736!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Lokasi Rajawali Motorcycle Rental Jakarta"
            className="w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
