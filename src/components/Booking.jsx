"use client";

import { motion } from 'framer-motion';
import { useBooking } from '@/context/BookingContext';
import styles from './Booking.module.css';

export default function Booking() {
  const { openBooking } = useBooking();
  return (
    <section id="booking" className={styles.section}>
      <div className={styles.bgGradients}>
        <div className={`${styles.blob} ${styles.blobSage}`} />
        <div className={`${styles.blob} ${styles.blobCoral}`} />
      </div>

      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.iconBox}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.dot} />
        </motion.div>

        <motion.h2 
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Ready to breathe easier?
        </motion.h2>

        <motion.p 
          className={styles.subheading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join our waitlist for an initial consultation and experience the Softly difference.
        </motion.p>

        <motion.form 
          className={styles.form}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          onSubmit={(e) => { e.preventDefault(); openBooking(); }}
        >
          <input 
            type="email" 
            placeholder="Your email address" 
            className={styles.input}
            required
          />
          <button type="submit" className={styles.submitBtn}>
            Join Waitlist
          </button>
        </motion.form>
      </div>
    </section>
  );
}
