"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';
import { useBooking } from '@/context/BookingContext';
import styles from './BookingModal.module.css';

const servicesList = [
  "Skin Consultation",
  "Holistic Facial",
  "Laser Therapy",
  "Wellness Retreat",
  "Aesthetic Injectables"
];

export default function BookingModal() {
  const { isModalOpen, closeBooking, preselectedService } = useBooking();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    date: '',
    time: '',
    name: '',
    email: ''
  });

  useEffect(() => {
    if (preselectedService) {
      setFormData(prev => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  useEffect(() => {
    if (!isModalOpen) {
      setTimeout(() => {
        setStep(1);
        setFormData({ service: '', date: '', time: '', name: '', email: '' });
      }, 500);
    }
  }, [isModalOpen]);

  const handleNext = () => setStep(prev => prev + 1);
  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(4); // Success step
  };

  return (
    <AnimatePresence>
      {isModalOpen && (
        <div className={styles.overlay}>
          <motion.div 
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeBooking}
          />
          <motion.div 
            className={styles.modal}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <button className={styles.closeBtn} onClick={closeBooking}>
              <X size={24} />
            </button>

            <div className={styles.content}>
              {step < 4 && (
                <div className={styles.progress}>
                  <div className={styles.progressBar} style={{ width: `${(step / 3) * 100}%` }}></div>
                </div>
              )}

              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className={styles.step}>
                  <h2 className={styles.heading}>Select a Service</h2>
                  <div className={styles.serviceGrid}>
                    {servicesList.map(s => (
                      <button 
                        key={s} 
                        className={`${styles.serviceBtn} ${formData.service === s ? styles.selected : ''}`}
                        onClick={() => setFormData({...formData, service: s})}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <button 
                    className={styles.nextBtn} 
                    onClick={handleNext} 
                    disabled={!formData.service}
                  >
                    Continue
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className={styles.step}>
                  <h2 className={styles.heading}>Choose Date & Time</h2>
                  <input 
                    type="date" 
                    className={styles.input} 
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                  />
                  <div className={styles.timeGrid}>
                    {["09:00 AM", "11:00 AM", "02:00 PM", "04:00 PM"].map(t => (
                      <button 
                        key={t} 
                        className={`${styles.timeBtn} ${formData.time === t ? styles.selected : ''}`}
                        onClick={() => setFormData({...formData, time: t})}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                  <button 
                    className={styles.nextBtn} 
                    onClick={handleNext} 
                    disabled={!formData.date || !formData.time}
                  >
                    Continue
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className={styles.step}>
                  <h2 className={styles.heading}>Your Details</h2>
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      required 
                      className={styles.input}
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      required 
                      className={styles.input}
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                    <button type="submit" className={styles.nextBtn}>Confirm Booking</button>
                  </form>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className={styles.successStep}>
                  <CheckCircle size={64} color="var(--color-coral)" className={styles.successIcon} />
                  <h2 className={styles.heading}>Booking Confirmed!</h2>
                  <p className={styles.subtext}>We've sent the details for your {formData.service} appointment to {formData.email}.</p>
                  <button className={styles.nextBtn} onClick={closeBooking}>Done</button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
