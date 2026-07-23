'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'Karyawan Swasta',
    text: 'Motor bersih, terawat, dan prosesnya cepat. Pelayanan antar jemput sangat membantu. Recommended!',
    rating: 5,
  },
  {
    name: 'Siti Rahayu',
    role: 'Mahasiswa',
    text: 'Sudah 3 kali sewa di Rajawali. Harga bersaing dan motor selalu dalam kondisi prima.',
    rating: 5,
  },
  {
    name: 'Andi Pratama',
    role: 'Freelancer',
    text: 'NMAX-nya keren dan nyaman dipakai harian. Pengantaran tepat waktu. Terima kasih Rajawali!',
    rating: 5,
  },
  {
    name: 'Dewi Lestari',
    role: 'Wiraswasta',
    text: 'Sewa PCX untuk kebutuhan bisnis 1 bulan. Pelayanan profesional dan responsif.',
    rating: 5,
  },
  {
    name: 'Rizky Fauzan',
    role: 'Touris',
    text: 'Datang dari luar kota dan butuh motor untuk keliling Jakarta. Rajawali solusinya!',
    rating: 4,
  },
  {
    name: 'Nurul Hidayah',
    role: 'Karyawan BUMN',
    text: 'Beat-nya irit banget, cocok untuk daily commuter. Pasti langganan!',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const itemsPerView = 1;
  const totalPages = Math.ceil(testimonials.length / itemsPerView);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % totalPages);
  }, [totalPages]);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + totalPages) % totalPages);
  }, [totalPages]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -200 : 200, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section id="testimoni" className="py-20 md:py-28 bg-muted/30 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-rajawali tracking-wider uppercase mb-3">
            Testimoni
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Apa Kata <span className="text-rajawali">Mereka</span>
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="rounded-3xl bg-card border border-border p-8 md:p-12 text-center"
            >
              <Quote className="w-10 h-10 text-rajawali/20 mx-auto mb-6" />
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < t.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-muted-foreground/30'
                    }`}
                  />
                ))}
              </div>

              {/* Avatar & Name */}
              <div className="flex items-center justify-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-rajawali/20">
                  <Image
                    src="/foto-client.jpg"
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="text-left">
                  <div className="font-bold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full w-10 h-10"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'bg-rajawali w-8'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full w-10 h-10"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
