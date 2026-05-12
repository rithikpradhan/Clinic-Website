"use client";

import { BookingProvider } from './BookingContext';
import BookingModal from '@/components/BookingModal';

export default function Providers({ children }) {
  return (
    <BookingProvider>
      {children}
      <BookingModal />
    </BookingProvider>
  );
}
