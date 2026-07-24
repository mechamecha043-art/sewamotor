'use client';

import { motion } from 'framer-motion';
import { MapPin, Truck, Navigation, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tangerangAreas = [
  'Tangerang Selatan',
  'Tangerang Kota',
  'Kabupaten Tangerang',
  'BSD',
  'Serpong',
  'Alam Sutera',
  'Gading Serpong',
  'Karawaci',
  'Cikupa',
  'Balaraja',
];

export default function LocationContent() {
  return (
    <div>
      {/* Jakarta Section */}
      <section className="py-16 md:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Jakarta Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-rajawali/10 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-rajawali" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    DKI Jakarta
                  </h2>
                  <p className="text-sm text-muted-foreground">Area Layanan Utama</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Melayani seluruh wilayah DKI Jakarta meliputi Jakarta Pusat, Jakarta Selatan, Jakarta Barat, Jakarta Timur, dan Jakarta Utara. Semua kecamatan terjangkau layanan antar jemput kami.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-rajawali mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Layanan Antar Jemput</h4>
                    <p className="text-sm text-muted-foreground">Motor diantar langsung ke lokasi Anda di seluruh Jakarta.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-rajawali mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Biaya Antar Jemput</h4>
                    <p className="text-sm text-muted-foreground">Rp50.000 sekali jalan untuk wilayah Jakarta.</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/vE1W64qWkfEZQ2D79"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-rajawali hover:bg-rajawali-dark text-white rounded-2xl px-6 py-3 font-semibold shadow-lg shadow-rajawali/20">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Buka di Google Maps
                </Button>
              </a>
            </motion.div>

            {/* Jakarta Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl overflow-hidden border border-border shadow-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15864.269257583079!2d106.56418926212808!3d-6.25486229217151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fd002e0b827b%3A0x23e598ce13fbd0cc!2sPARK%20SERPONG%2C%20XYZ%20CHARM!5e0!3m2!1sid!2sid!4v1784858359736!5m2!1sid!2sid"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Rajawali Motorcycle Rental Jakarta"
                className="w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tangerang Section */}
      <section className="py-16 md:py-20 bg-muted/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Tangerang Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-2xl bg-rajawali/10 flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-rajawali" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                    Tangerang
                  </h2>
                  <p className="text-sm text-muted-foreground">Area Layanan Ekspansi</p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Kami juga melayani wilayah Tangerang dan sekitarnya. Area layanan meliputi Tangerang Selatan, Tangerang Kota, Kabupaten Tangerang, serta kawasan-kawasan strategis seperti BSD, Serpong, Alam Sutera, Gading Serpong, dan lainnya.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Truck className="w-5 h-5 text-rajawali mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Layanan Antar Jemput</h4>
                    <p className="text-sm text-muted-foreground">Motor diantar langsung ke lokasi Anda di wilayah Tangerang.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-rajawali mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Biaya Antar Jemput</h4>
                    <p className="text-sm text-muted-foreground">Rp50.000 sekali jalan untuk wilayah Tangerang (tergantung jarak).</p>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/628119899232?text=Halo%2C%20saya%20ingin%20sewa%20motor%20di%20area%20Tangerang"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-rajawali hover:bg-rajawali-dark text-white rounded-2xl px-6 py-3 font-semibold shadow-lg shadow-rajawali/20">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Tanya Area Tangerang via WhatsApp
                </Button>
              </a>
            </motion.div>

            {/* Tangerang Areas List */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="rounded-3xl bg-card border border-border p-6 md:p-8">
                <h3 className="text-lg font-bold text-foreground mb-6">
                  Area Layanan Tangerang
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {tangerangAreas.map((area, i) => (
                    <motion.div
                      key={area}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-rajawali/5 border border-rajawali/10"
                    >
                      <MapPin className="w-3.5 h-3.5 text-rajawali flex-shrink-0" />
                      <span className="text-sm font-medium text-foreground">{area}</span>
                    </motion.div>
                  ))}
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  * Area di luar daftar di atas dapat ditanyakan terlebih dahulu via WhatsApp.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Delivery Info CTA */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[2rem] overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rajawali via-rajawali-dark to-rajawali-dark" />
            <div className="absolute inset-0 bg-[url('/hero-motorcycle.png')] bg-cover bg-center opacity-10 mix-blend-overlay" />

            <div className="relative z-10 px-8 py-16 md:px-16 md:py-20 text-center">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6">
                Motor Diantar <span className="underline decoration-4 underline-offset-4 decoration-white/30">ke Lokasi</span> Anda
              </h2>
              <p className="text-lg text-white/80 max-w-xl mx-auto mb-10">
                Tidak perlu datang ke tempat kami. Cukup hubungi via WhatsApp, pilih motor, dan motor akan diantar langsung ke lokasi Anda di Jakarta atau Tangerang.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/628119899232?text=Halo%2C%20saya%20ingin%20sewa%20motor"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="inline-flex items-center gap-2 bg-white text-rajawali rounded-2xl px-8 py-4 font-bold shadow-xl hover:shadow-2xl hover:bg-white/90 transition-all cursor-pointer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Hubungi WhatsApp
                  </div>
                </a>
                <a
                  href="https://maps.app.goo.gl/vE1W64qWkfEZQ2D79"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="inline-flex items-center gap-2 rounded-2xl px-8 py-4 font-semibold border-2 border-white/20 text-white hover:bg-white/10 hover:border-white/30 transition-all cursor-pointer">
                    <MapPin className="w-5 h-5" />
                    Lihat di Google Maps
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
