"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import styles from './Contact.module.css';

export default function Contact() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={`container ${styles.content}`}>
          
          <div className={styles.heroSection}>
            <motion.h1 
              initial={{ opacity: 0, y: 100, rotate: -5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className={styles.massiveTitle}
            >
              SAY <br />
              <span className={styles.cursive}>Hello</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={styles.description}
            >
              Whether you have questions about our treatments or want to book a consultation, we’re here to help you begin your journey to radiant wellness.
            </motion.p>
          </div>

          <div className={styles.grid}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.4, duration: 0.8 }}
              className={styles.infoCol}
            >
              <h2 className={styles.infoTitle}>Location</h2>
              <p className={styles.infoText}>123 Wellness Ave, Suite 400<br/>New York, NY 10012</p>
              
              <h2 className={styles.infoTitle} style={{ marginTop: '48px' }}>Hours</h2>
              <p className={styles.infoText}>Mon-Fri: 9am - 7pm<br/>Sat: 10am - 4pm</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.5, duration: 0.8 }}
            >
               <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                  <div className={styles.inputGroup}>
                    <input type="text" id="name" placeholder=" " className={styles.input} required />
                    <label htmlFor="name" className={styles.label}>Your Name</label>
                  </div>
                  <div className={styles.inputGroup}>
                    <input type="email" id="email" placeholder=" " className={styles.input} required />
                    <label htmlFor="email" className={styles.label}>Email Address</label>
                  </div>
                  <div className={styles.inputGroup}>
                    <textarea id="message" placeholder=" " rows="4" className={styles.textarea} required></textarea>
                    <label htmlFor="message" className={styles.label}>How can we help?</label>
                  </div>
                  <button type="submit" className={styles.submitBtn}>
                    Send Message
                  </button>
               </form>
            </motion.div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
