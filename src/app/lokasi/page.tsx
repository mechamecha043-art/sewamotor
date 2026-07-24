import type { Metadata } from 'next';
import LocationContent from '@/components/sections/LocationContent';

export const metadata: Metadata = {
  title: 'Lokasi Layanan Rental Motor Jakarta & Tangerang | Rajawali Motorcycle Rental',
  description:
    'Layanan rental motor Rajawali melayani wilayah DKI Jakarta (seluruh kecamatan) dan Tangerang (Tangerang Selatan, Tangerang Kota, Kab. Tangerang, BSD, Serpong, Alam Sutera, Gading Serpong, Karawaci). Layanan antar jemput tersedia.',
  alternates: {
    canonical: 'https://rentalmotorjakarta.com/lokasi',
  },
};

export default function LokasiPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-rajawali/10 rounded-full blur-[150px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <span className="inline-block text-sm font-semibold text-red-600 tracking-wider uppercase mb-3">
              Area Layanan
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              Layanan <span className="text-red-600">Jakarta</span> & <span className="text-red-600">Tangerang</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Kami melayani penyewaan motor di seluruh wilayah DKI Jakarta dan Tangerang. Motor diantarkan langsung ke lokasi Anda.
            </p>
          </div>
        </div>
      </section>

      <LocationContent />
    </>
  );
}
