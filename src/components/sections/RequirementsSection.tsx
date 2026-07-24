'use client';

import { motion } from 'framer-motion';
import { FileText, AlertTriangle, CheckCircle2 } from 'lucide-react';

const requirements = [
  'Fotokopi KTP',
  'Fotokopi KK',
  'Menunjukkan dokumen asli',
  'Bersedia difoto',
  'Pembayaran lunas di muka',
  'Survei tempat tinggal bila diperlukan',
  'Penyewa luar kota wajib meninggalkan identitas asli',
];

const terms = [
  'Kendaraan harus dikembalikan dalam kondisi baik.',
  'Pengembalian wajib tepat waktu.',
  'Perpanjangan minimal konfirmasi 1×24 jam.',
  'Penyalahgunaan kendaraan untuk tindakan melanggar hukum dilarang.',
  'Penggantian sparepart tanpa izin dikenakan sanksi.',
  'Pemilik berhak menolak penyewaan apabila dianggap tidak memenuhi syarat.',
  'Keterlambatan tanpa konfirmasi dapat diproses sesuai hukum yang berlaku.',
];

export default function RequirementsSection() {
  return (
    <section className="py-20 md:py-28 bg-muted/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Syarat Rental */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-rajawali/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <span className="text-sm font-semibold text-red-600 tracking-wider uppercase">
                  Dokumen
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Syarat Rental
                </h2>
              </div>
            </div>

            <ul className="space-y-4">
              {requirements.map((req, i) => (
                <motion.li
                  key={req}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-foreground/90 leading-relaxed">{req}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Ketentuan */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-rajawali/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <span className="text-sm font-semibold text-red-600 tracking-wider uppercase">
                  Peraturan
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Ketentuan
                </h2>
              </div>
            </div>

            <ul className="space-y-4">
              {terms.map((term, i) => (
                <motion.li
                  key={term}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <span className="w-6 h-6 rounded-lg bg-rajawali/10 text-red-600 text-xs font-bold flex items-center justify-center mt-0.5 flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-foreground/90 leading-relaxed">{term}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
