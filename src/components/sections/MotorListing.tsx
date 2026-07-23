'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Bike, Zap, Star, Crown, Feather } from 'lucide-react';

interface Motor {
  name: string;
  daily: string;
  weekly: string;
  monthly: string;
  desc: string;
  icon: typeof Bike;
  popular?: boolean;
}

const motors: Motor[] = [
  {
    name: 'Honda Beat',
    daily: 'Rp90.000',
    weekly: 'Rp500.000',
    monthly: 'Rp1.500.000',
    desc: 'Mesin 110cc eSP hemat bahan bakar. Cocok untuk penggunaan harian di dalam kota.',
    icon: Bike,
  },
  {
    name: 'Honda Vario 125',
    daily: 'Rp100.000',
    weekly: 'Rp550.000',
    monthly: 'Rp1.600.000',
    desc: 'Skutik nyaman untuk penggunaan harian. Performa stabil dan irit bahan bakar.',
    icon: Zap,
  },
  {
    name: 'Yamaha Gear',
    daily: 'Rp90.000',
    weekly: 'Rp500.000',
    monthly: 'Rp1.500.000',
    desc: 'Praktis dan irit. Pilihan ekonomis untuk mobilitas sehari-hari.',
    icon: Feather,
  },
  {
    name: 'Honda Scoopy',
    daily: 'Rp125.000',
    weekly: 'Rp600.000',
    monthly: 'Rp1.700.000',
    desc: 'Stylish dan nyaman. Desain retro modern dengan performa handal.',
    icon: Star,
  },
  {
    name: 'Yamaha NMAX',
    daily: 'Rp150.000',
    weekly: 'Rp800.000',
    monthly: 'Rp2.250.000',
    desc: 'Premium Maxi Scooter. Mesin 155cc bertenaga, fitur modern dan nyaman untuk perjalanan jauh.',
    icon: Crown,
    popular: true,
  },
  {
    name: 'Honda PCX',
    daily: 'Rp150.000',
    weekly: 'Rp800.000',
    monthly: 'Rp2.250.000',
    desc: 'Elegant dan nyaman. Skutik premium Honda dengan fitur canggih dan ruang bagasi luas.',
    icon: Crown,
    popular: true,
  },
  {
    name: 'Yamaha Aerox',
    daily: 'Rp140.000',
    weekly: 'Rp650.000',
    monthly: 'Rp2.000.000',
    desc: 'Sporty dan bertenaga. Mesin 155 VVA dengan performa tinggi dan desain agresif.',
    icon: Zap,
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

export default function MotorListing() {
  return (
    <section className="pb-20 md:pb-28 bg-muted/30 relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-rajawali/5 rounded-full blur-[100px]" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rajawali/5 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {motors.map((motor) => (
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

              {/* Top gradient bar */}
              <div className="h-2 bg-gradient-to-r from-rajawali/60 via-rajawali to-rajawali/60" />

              <div className="p-6">
                {/* Icon & Name */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-rajawali/10 flex items-center justify-center group-hover:bg-rajawali transition-colors duration-300">
                    <motor.icon className="w-6 h-6 text-rajawali group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{motor.name}</h3>
                </div>

                {/* Pricing */}
                <div className="space-y-2 mb-5">
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
                <p className="text-sm text-muted-foreground mb-5">{motor.desc}</p>

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
      </div>
    </section>
  );
}
