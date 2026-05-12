"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HorizontalScroll from '@/components/HorizontalScroll';
import Booking from '@/components/Booking';

export default function Treatments() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px', minHeight: '100vh' }}>
        <HorizontalScroll />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
