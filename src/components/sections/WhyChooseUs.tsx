'use client';

import { motion } from 'framer-motion';
import { Smartphone, Truck, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'Mudah',
    description:
      'Didukung sistem pemesanan online yang praktis dengan berbagai pilihan motor.',
  },
  {
    icon: Truck,
    title: 'Nyaman',
    description:
      'Layanan antar jemput motor hingga lokasi Anda.',
  },
  {
    icon: ShieldCheck,
    title: 'Aman',
    description:
      'Seluruh armada merupakan unit terawat dan rutin diservis.',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function WhyChooseUs() {
  return (
    <section id="keunggulan" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-rajawali/5 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-rajawali tracking-wider uppercase mb-3">
            Kenapa Memilih Kami
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Solusi Rental Motor{' '}
            <span className="text-rajawali">Terbaik</span> di Jakarta
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative rounded-3xl p-8 lg:p-10 transition-all duration-300 bg-card border border-border hover:border-rajawali/20 hover:shadow-2xl hover:shadow-rajawali/5"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-rajawali/10 flex items-center justify-center mb-6 group-hover:bg-rajawali group-hover:shadow-lg group-hover:shadow-rajawali/30 transition-all duration-300">
                <feature.icon className="w-7 h-7 text-rajawali group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-rajawali/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
