"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useBooking } from '@/context/BookingContext';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Header.module.css';

export default function Header() {
  const { openBooking } = useBooking();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <div className={styles.logoContainer}>
          <div className={styles.logoMark}>
            <div className={styles.logoDot}></div>
          </div>
          <Link href="/" className={styles.logoText}>Zenvia Care</Link>
        </div>
        
        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            <li><Link href="/treatments">Treatments</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <button onClick={() => openBooking()} className={styles.contactBtn}>
            Book Consultation
          </button>
          <button className={styles.mobileMenuBtn} onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            className={styles.mobileOverlay}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className={styles.mobileOverlayHeader}>
              <span className={styles.logoText}>Aura Clinic</span>
              <button className={styles.closeMenuBtn} onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <nav className={styles.mobileNav}>
              <ul className={styles.mobileNavLinks}>
                <li><Link href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                <li><Link href="/treatments" onClick={() => setIsMobileMenuOpen(false)}>Treatments</Link></li>
                <li><Link href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
                <li><Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link></li>
              </ul>
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openBooking();
                }} 
                className={styles.mobileBookBtn}
              >
                Book Consultation
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
