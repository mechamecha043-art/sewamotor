'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MessageCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface Motor {
  name: string;
  daily: string;
  weekly: string;
  monthly: string;
  desc: string;
  image: string;
  popular?: boolean;
}

const previewMotors: Motor[] = [
  {
    name: 'Honda Vario 125',
    daily: 'Rp100.000',
    weekly: 'Rp550.000',
    monthly: 'Rp1.600.000',
    desc: 'Skutik nyaman untuk penggunaan harian.',
    image: '/motors/vario.webp',
  },
  {
    name: 'Yamaha NMAX',
    daily: 'Rp150.000',
    weekly: 'Rp800.000',
    monthly: 'Rp2.250.000',
    desc: 'Premium Maxi Scooter.',
    image: '/motors/nmax.webp',
    popular: true,
  },
  {
    name: 'Honda PCX',
    daily: 'Rp150.000',
    weekly: 'Rp800.000',
    monthly: 'Rp2.250.000',
    desc: 'Elegant dan nyaman.',
    image: '/motors/pcx.webp',
    popular: true,
  },
];

const WA_BASE = 'https://wa.me/6282310759060?text=';

function getWaLink(motor: Motor) {
  const text = `Halo, saya ingin menyewa ${motor.name}. Bisa dibantu?`;
  return `${WA_BASE}${encodeURIComponent(text)}`;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function MotorPreview() {
  return (
    <section id="motor" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-rajawali/5 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rajawali/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-semibold text-rajawali tracking-wider uppercase mb-3">
            Motor Populer
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Pilihan <span className="text-rajawali">Terbaik</span> Kami
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Motor paling diminati pelanggan kami. Semua unit terawat, bersih, dan siap pakai.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {previewMotors.map((motor) => (
            <motion.div
              key={motor.name}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`group relative rounded-3xl overflow-hidden bg-card border transition-all duration-300 hover:shadow-2xl hover:shadow-rajawali/5 ${
                motor.popular
                  ? 'border-rajawali/30 ring-1 ring-rajawali/10'
                  : 'border-border hover:border-rajawali/20'
              }`}
            >
              {/* Popular Badge */}
              {motor.popular && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-rajawali text-white text-xs font-bold shadow-lg shadow-rajawali/30">
                  Populer
                </div>
              )}

              {/* Motor Image */}
              <div className="relative w-full h-48 sm:h-52 bg-muted/50 overflow-hidden">
                <Image
                  src={motor.image}
                  alt={motor.name}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <h3 className="text-lg font-bold text-white drop-shadow-lg">{motor.name}</h3>
                </div>
              </div>

              <div className="p-5">
                {/* Pricing */}
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">Harian</span>
                    <span className="font-bold text-foreground">{motor.daily}<span className="text-xs text-muted-foreground font-normal"> / hari</span></span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-sm text-muted-foreground">7 Hari</span>
                    <span className="font-bold text-foreground">{motor.weekly}</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-sm text-muted-foreground">30 Hari</span>
                    <span className="font-bold text-rajawali">{motor.monthly}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground mb-4">{motor.desc}</p>

                {/* CTA */}
                <a href={getWaLink(motor)} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-rajawali hover:bg-rajawali-dark text-white rounded-2xl py-5 font-semibold shadow-lg shadow-rajawali/20 hover:shadow-rajawali/40 transition-all">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Sewa via WhatsApp
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA to full list */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Link href="/motor">
            <Button
              variant="outline"
              size="lg"
              className="rounded-2xl px-8 py-6 text-base font-semibold border-rajawali/30 text-rajawali hover:bg-rajawali/5 hover:border-rajawali/50 transition-all"
            >
              Lihat Semua Motor
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
