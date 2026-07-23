import HeroSection from '@/components/sections/HeroSection';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import MotorPreview from '@/components/sections/MotorPreview';
import ServiceAreaBanner from '@/components/sections/ServiceAreaBanner';
import Testimonials from '@/components/sections/Testimonials';
import CTASection from '@/components/sections/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceAreaBanner />
      <WhyChooseUs />
      <MotorPreview />
      <Testimonials />
      <CTASection />
    </>
  );
}
