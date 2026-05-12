import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HorizontalScroll from '@/components/HorizontalScroll';
import ExperiencePreview from '@/components/ExperiencePreview';
import Journey from '@/components/Journey';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Booking from '@/components/Booking';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HorizontalScroll />
        <ExperiencePreview />
        <Journey />
        <Testimonials />
        <FAQ />
        <Booking />
      </main>
    </>
  );
}
