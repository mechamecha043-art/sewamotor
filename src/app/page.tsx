'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/sections/Navbar';
import HeroSection from '@/components/sections/HeroSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import MotorList from '@/components/sections/MotorList';
import HowToRent from '@/components/sections/HowToRent';
import Requirements from '@/components/sections/Requirements';
import FAQ from '@/components/sections/FAQ';
import CTASection from '@/components/sections/CTASection';
import Footer from '@/components/sections/Footer';

const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  ssr: false,
});
const GoogleMap = dynamic(() => import('@/components/sections/GoogleMap'), {
  ssr: false,
  loading: () => (
    <div className="py-20 md:py-28 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-[450px] rounded-3xl bg-muted animate-pulse" />
      </div>
    </div>
  ),
});
const FloatingWhatsApp = dynamic(() => import('@/components/FloatingWhatsApp'), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <MotorList />
      <HowToRent />
      <Requirements />
      <FAQ />
      <Testimonials />
      <CTASection />
      <GoogleMap />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
