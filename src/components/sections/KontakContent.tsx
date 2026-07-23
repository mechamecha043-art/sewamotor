'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Phone, Mail, Instagram, MapPin, ExternalLink, MessageCircle, Clock } from 'lucide-react';

const WA_LINK = 'https://wa.me/6282310759060?text=Halo%2C%20saya%20ingin%20sewa%20motor';

const faqs = [
  {
    q: 'Berapa minimal sewa?',
    a: 'Minimal sewa adalah 3 hari.',
  },
  {
    q: 'Apakah bisa diantar?',
    a: 'Ya, tersedia layanan antar jemput motor hingga lokasi Anda di Jakarta maupun Tangerang. Biaya antar Rp50.000 sekali jalan.',
  },
  {
    q: 'Berapa biaya antar?',
    a: 'Biaya antar jemput Rp50.000 sekali jalan untuk wilayah Jakarta dan Tangerang.',
  },
  {
    q: 'Apakah bisa sewa bulanan?',
    a: 'Ya, kami menyediakan paket harian, mingguan, dan bulanan dengan harga spesial. Semakin lama sewa, semakin hemat per harinya.',
  },
  {
    q: 'Motor dalam kondisi apa?',
    a: 'Seluruh armada kami terawat, rutin diservis, bersih, dan siap pakai. Kami memastikan setiap motor dalam kondisi prima sebelum disewakan.',
  },
  {
    q: 'Area layanan mana saja?',
    a: 'Kami melayani wilayah DKI Jakarta (seluruh kecamatan) dan Tangerang (Tangerang Selatan, Tangerang Kota, Kab. Tangerang, BSD, Serpong, Alam Sutera, Gading Serpong, Karawaci, Cikupa, Balaraja).',
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

export default function KontakContent() {
  return (
    <div>
      {/* Contact Info */}
      <section className="py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Phone,
                label: 'WhatsApp',
                value: '0823-1075-9060',
                href: 'https://wa.me/6282310759060?text=Halo%2C%20saya%20ingin%20sewa%20motor',
                external: true,
              },
              {
                icon: Mail,
                label: 'Email',
                value: 'rentalmotorjakarta@gmail.com',
                href: 'mailto:rentalmotorjakarta@gmail.com',
                external: false,
              },
              {
                icon: Instagram,
                label: 'Instagram',
                value: '@rentalmotorjakarta',
                href: 'https://www.instagram.com/rentalmotorjakarta',
                external: true,
              },
              {
                icon: MapPin,
                label: 'Lokasi',
                value: 'Jakarta & Tangerang',
                href: 'https://maps.app.goo.gl/v8eCHVWnA5Qm5jQu5',
                external: true,
              },
            ].map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group rounded-3xl bg-card border border-border p-6 hover:border-rajawali/20 hover:shadow-xl hover:shadow-rajawali/5 transition-all duration-300 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-rajawali/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-rajawali transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-rajawali group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="font-bold text-foreground mb-1">{item.label}</h3>
                <p className="text-sm text-muted-foreground break-all">{item.value}</p>
                {item.external && (
                  <ExternalLink className="w-3 h-3 text-muted-foreground mt-2 mx-auto" />
                )}
              </motion.a>
            ))}
          </div>

          {/* Operating Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8 rounded-3xl bg-card border border-border p-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left"
          >
            <div className="w-12 h-12 rounded-2xl bg-rajawali/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-rajawali" />
            </div>
            <div>
              <h3 className="font-bold text-foreground">Jam Operasional</h3>
              <p className="text-sm text-muted-foreground">Setiap hari, 08:00 - 21:00 WIB</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-rajawali via-rajawali-dark to-rajawali-dark relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-motorcycle.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
              <Phone className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white/90">
                Respon Cepat via WhatsApp
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
              Ingin <span className="underline decoration-4 underline-offset-4 decoration-white/30">Sewa Motor</span>?
            </h2>

            <p className="text-lg text-white/80 max-w-xl mx-auto mb-10">
              Hubungi kami langsung via WhatsApp untuk respon tercepat. Kami siap membantu Anda memilih motor yang tepat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WA_LINK} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-white text-rajawali hover:bg-white/90 rounded-2xl px-8 py-6 text-base font-bold shadow-xl transition-all hover:shadow-2xl"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat WhatsApp Sekarang
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
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-rajawali/5 rounded-full blur-[150px]" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-sm font-semibold text-rajawali tracking-wider uppercase mb-3">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Pertanyaan <span className="text-rajawali">Umum</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              Temukan jawaban atas pertanyaan yang sering diajukan pelanggan kami.
            </p>
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

      {/* Google Maps */}
      <section className="py-16 md:py-20 bg-muted/30">
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0671117665183!2d106.57361379999999!3d-6.254888999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e4201b41c687ab7%3A0xd429bcf58aa4a714!2sMie%20Jawa%20Seramie!5e0!3m2!1sen!2sus!4v1784829635276!5m2!1sen!2sus"
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
    </div>
  );
}
