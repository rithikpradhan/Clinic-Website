"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useBooking } from '@/context/BookingContext';
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
  const { openBooking } = useBooking();
  const { scrollY } = useScroll();
  
  // Marquee moves left as user scrolls down
  const x1 = useTransform(scrollY, [0, 1000], [0, -800]);
  const x2 = useTransform(scrollY, [0, 1000], [-800, 0]);

  const headlineText = "Modern care that feels softly human.";
  const words = headlineText.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 80,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className={styles.hero}>
      {/* Background Marquee */}
      <div className={styles.marqueeContainer}>
        <motion.div className={styles.marquee} style={{ x: x1 }}>
          <span>AURA CLINIC • DIGITAL WELLNESS • AURA CLINIC • DIGITAL WELLNESS • AURA CLINIC • DIGITAL WELLNESS • </span>
        </motion.div>
        <motion.div className={styles.marquee} style={{ x: x2 }}>
          <span>SANCTUARY • SCIENCE • SANCTUARY • SCIENCE • SANCTUARY • SCIENCE • SANCTUARY • SCIENCE • </span>
        </motion.div>
      </div>

      <div className={`container ${styles.content}`}>
        <motion.div
          style={{ overflow: "hidden", display: "flex", flexWrap: "wrap", justifyContent: "center" }}
          variants={container}
          initial="hidden"
          animate="visible"
          className={styles.headlineWrapper}
        >
          {words.map((word, index) => (
            <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index} className={styles.headlineWord}>
              {word === "softly" ? <span className={styles.cursive}>{word}</span> : word}
            </motion.span>
          ))}
        </motion.div>

        <motion.div 
          className={styles.ctaGroup}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <button onClick={() => openBooking()} className={styles.primaryBtn}>
            Book Consultation
          </button>
          <Link href="#services" className={styles.secondaryBtn}>
            Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
