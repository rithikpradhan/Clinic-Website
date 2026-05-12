"use client";

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useBooking } from '@/context/BookingContext';
import { X } from 'lucide-react';
import styles from './HorizontalScroll.module.css';

const services = [
  { id: 1, duration: '45 MIN', price: '$65', title: 'Skin Consultation', desc: 'A comprehensive analysis of your skin health, leading to a customized clinical care plan.', gradient: 'linear-gradient(180deg, #E8EFE8 0%, #D3DFD3 100%)', popular: false },
  { id: 2, duration: '60 MIN', price: '$75', title: 'Holistic Facial', desc: 'A deeply relaxing facial treatment blending medical-grade products with gentle massage.', gradient: 'linear-gradient(180deg, #FFDAC1 0%, #FFB7B2 100%)', popular: false },
  { id: 3, duration: '30 MIN', price: '$85', title: 'Laser Therapy', desc: 'Advanced laser treatments for pigmentation, texture, and overall skin rejuvenation.', gradient: 'linear-gradient(180deg, #EAE4ED 0%, #D4C9DA 100%)', popular: true },
  { id: 4, duration: '90 MIN', price: '$95', title: 'Wellness Retreat', desc: 'A full-body experience designed to reset your nervous system and restore your glow.', gradient: 'linear-gradient(180deg, #FDF7F2 0%, #F3E9E0 100%)', popular: false },
  { id: 5, duration: '45 MIN', price: '$105', title: 'Aesthetic Injectables', desc: 'Subtle, natural-looking enhancements performed by our expert medical team.', gradient: 'linear-gradient(180deg, #E1E5F2 0%, #C9D3E8 100%)', popular: false },
];

export default function HorizontalScroll() {
  const [selectedId, setSelectedId] = useState(null);
  const { openBooking } = useBooking();
  const targetRef = useRef(null);

  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedId]);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Map scroll progress to horizontal movement (translate track left by 65% of its own width)
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-65%"]);
  
  const selectedService = services.find(s => s.id === selectedId);
  return (
    <section ref={targetRef} id="services" className={styles.section} style={{ zIndex: selectedId ? 9999 : 1 }}>
      <div className={styles.stickyContainer}>
        <div className={`container ${styles.header}`}>
          <h2 className={styles.heading}>Our Treatments</h2>
          <p className={styles.subheading}>Gentle, science-backed care tailored to your unique skin.</p>
        </div>
        
        <div className={styles.scrollWrapper}>
          <motion.div 
            className={styles.scrollContainer}
            style={{ x }}
          >
            {services.map((service) => (
              <motion.div 
                layoutId={`card-${service.id}`}
                key={service.id} 
                className={`${styles.card} ${service.popular ? styles.popularCard : ''}`}
                onClick={() => setSelectedId(service.id)}
              >
                <motion.div layoutId={`cardHeader-${service.id}`} className={styles.cardHeader} style={{ background: service.gradient }}>
                  {service.popular && (
                    <div className={styles.badgeWrapper}>
                      <span className={styles.badge}>Most Popular</span>
                    </div>
                  )}
                  <motion.h3 layoutId={`title-${service.id}`} className={styles.title}>{service.title}</motion.h3>
                  <div className={styles.priceContainer}>
                    <span className={styles.price}>{service.price}</span>
                  </div>
                  {/* SVG Curve */}
                  <svg className={styles.curve} viewBox="0 0 1440 150" preserveAspectRatio="none">
                    <path fill="#ffffff" d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,53.3C1120,43,1280,53,1360,58.7L1440,64L1440,150L1360,150C1280,150,1120,150,960,150C800,150,640,150,480,150C320,150,160,150,80,150L0,150Z"></path>
                  </svg>
                </motion.div>
                
                <motion.div layoutId={`cardBody-${service.id}`} className={styles.cardBody}>
                  <motion.span layoutId={`duration-${service.id}`} className={styles.duration}>{service.duration}</motion.span>
                  <div className={styles.hoverReveal}>Explore</div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      <AnimatePresence>
        {selectedId && selectedService && (
          <div className={styles.overlay}>
            <motion.div 
              className={styles.backdrop}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
            />
            <motion.div 
              layoutId={`card-${selectedService.id}`}
              className={styles.expandedCard}
            >
              <button className={styles.closeBtn} onClick={() => setSelectedId(null)}><X size={24} /></button>

              <motion.div layoutId={`cardHeader-${selectedService.id}`} className={styles.expandedHeader} style={{ background: selectedService.gradient }}>
                {selectedService.popular && (
                  <div className={styles.badgeWrapper}>
                    <span className={styles.badge}>Most Popular</span>
                  </div>
                )}
                <motion.h3 layoutId={`title-${selectedService.id}`} className={styles.expandedTitle}>{selectedService.title}</motion.h3>
                <div className={styles.priceContainer}>
                  <span className={styles.priceExpanded}>{selectedService.price}</span>
                </div>
                {/* SVG Curve */}
                <svg className={styles.curve} viewBox="0 0 1440 150" preserveAspectRatio="none">
                  <path fill="#ffffff" d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,53.3C1120,43,1280,53,1360,58.7L1440,64L1440,150L1360,150C1280,150,1120,150,960,150C800,150,640,150,480,150C320,150,160,150,80,150L0,150Z"></path>
                </svg>
              </motion.div>

              <motion.div layoutId={`cardBody-${selectedService.id}`} className={styles.expandedBody}>
                <motion.span layoutId={`duration-${selectedService.id}`} className={styles.duration}>{selectedService.duration}</motion.span>
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.1 }}
                  className={styles.expandedDesc}
                >
                  {selectedService.desc}
                </motion.p>
                <motion.button 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.2 }}
                  className={styles.bookBtn}
                  onClick={() => {
                    setSelectedId(null);
                    openBooking(selectedService.title);
                  }}
                >
                  Book This Treatment
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      </div>
    </section>
  );
}
