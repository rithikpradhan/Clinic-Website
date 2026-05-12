"use client";

import { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export function BookingProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState(null);

  const openBooking = (service = null) => {
    setPreselectedService(service);
    setIsModalOpen(true);
  };

  const closeBooking = () => {
    setIsModalOpen(false);
    setTimeout(() => setPreselectedService(null), 300); // clear after animation
  };

  return (
    <BookingContext.Provider value={{ isModalOpen, openBooking, closeBooking, preselectedService }}>
      {children}
    </BookingContext.Provider>
  );
}

export const useBooking = () => useContext(BookingContext);
