import type { Metadata } from 'next';
import KontakContent from '@/components/sections/KontakContent';

export const metadata: Metadata = {
  title: 'Kontak & FAQ | Rajawali Motorcycle Rental Jakarta Tangerang',
  description:
    'Hubungi Rajawali Motorcycle Rental Jakarta & Tangerang. WhatsApp: 0823-1075-9060, Email: rentalmotorjakarta@gmail.com, Instagram: @rentalmotorjakarta. FAQ rental motor: syarat, harga, area layanan, cara pembayaran.',
  alternates: {
    canonical: 'https://rentalmotorjakarta.com/kontak',
  },
};

export default function KontakPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-rajawali/10 rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <span className="inline-block text-sm font-semibold text-rajawali tracking-wider uppercase mb-3">
              Hubungi Kami
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              <span className="text-rajawali">Kontak</span> & FAQ
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Ada pertanyaan atau ingin menyewa motor? Hubungi kami melalui salah satu kanal berikut atau cek FAQ kami.
            </p>
          </div>
        </div>
      </section>

      <KontakContent />
    </>
  );
}
