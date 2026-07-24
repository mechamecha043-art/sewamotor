'use client';

import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'Berapa minimal sewa?',
    a: 'Minimal sewa adalah 3 hari.',
  },
  {
    q: 'Apakah bisa diantar?',
    a: 'Ya, tersedia layanan antar jemput motor hingga lokasi Anda.',
  },
  {
    q: 'Berapa biaya antar?',
    a: 'Biaya antar jemput Rp50.000 sekali jalan.',
  },
  {
    q: 'Apakah bisa sewa bulanan?',
    a: 'Ya, kami menyediakan paket harian, mingguan, dan bulanan dengan harga spesial.',
  },
  {
    q: 'Motor dalam kondisi apa?',
    a: 'Seluruh armada kami terawat, rutin diservis, bersih, dan siap pakai.',
  },
  {
    q: 'Area layanan mana saja?',
    a: 'Kami melayani wilayah DKI Jakarta dan sekitarnya.',
  },
  {
    q: 'Bagaimana cara pembayaran?',
    a: 'Pembayaran dilakukan lunas di muka via transfer bank atau tunai saat serah terima motor.',
  },
  {
    q: 'Apakah bisa perpanjang sewa?',
    a: 'Ya, perpanjangan bisa dilakukan dengan konfirmasi minimal 1×24 jam sebelum masa sewa habis.',
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-rajawali/5 rounded-full blur-[150px]" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-sm font-semibold text-red-600 tracking-wider uppercase mb-3">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Pertanyaan <span className="text-red-600">Umum</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border border-border bg-card px-6 data-[state=open]:border-rajawali/20 data-[state=open]:shadow-lg data-[state=open]:shadow-rajawali/5 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
