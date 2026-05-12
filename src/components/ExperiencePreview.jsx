"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './ExperiencePreview.module.css';

export default function ExperiencePreview() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // Parallax and Fan-out Effects
  const yLeft = useTransform(scrollYProgress, [0, 1], [250, -150]);
  const rotateLeft = useTransform(scrollYProgress, [0, 1], [-12, -2]);
  
  const yCenter = useTransform(scrollYProgress, [0, 1], [150, -50]);
  
  const yRight = useTransform(scrollYProgress, [0, 1], [350, -250]);
  const rotateRight = useTransform(scrollYProgress, [0, 1], [12, 2]);

  const headingWords = "Your Digital Sanctuary".split(" ");
  return (
    <section ref={targetRef} id="experience" className={styles.section}>
      <div className={`container ${styles.header}`}>
        <h2 className={styles.heading}>
          {headingWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 50, rotateZ: 5 }}
              whileInView={{ opacity: 1, y: 0, rotateZ: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
              style={{ display: "inline-block", marginRight: "0.25em" }}
            >
              {word}
            </motion.span>
          ))}
        </h2>
        <motion.p 
          className={styles.subheading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Manage your wellness journey from anywhere.
        </motion.p>
      </div>

      <div className={styles.mockupContainer}>
        {/* Left Phone */}
        <motion.div 
          className={`${styles.phone} ${styles.leftPhone}`}
          style={{ y: yLeft, rotate: rotateLeft }}
        >
          <div className={styles.screenSage}>
            <div className={styles.appHeader}>Upcoming</div>
            <div className={styles.mockCard}>
              <div className={styles.mockDate}>May 15 &bull; 2:00 PM</div>
              <div className={styles.mockTitle}>Holistic Facial</div>
              <div className={styles.mockDoctor}>with Sarah Jenkins</div>
            </div>
            <div className={styles.mockCard}>
              <div className={styles.mockDate}>Jun 02 &bull; 10:00 AM</div>
              <div className={styles.mockTitle}>Follow-up</div>
              <div className={styles.mockDoctor}>with Dr. Rostova</div>
            </div>
          </div>
        </motion.div>

        {/* Center Phone */}
        <motion.div 
          className={`${styles.phone} ${styles.centerPhone}`}
          style={{ y: yCenter }}
        >
          <div className={styles.screenWhite}>
            <div className={styles.centerPhoneContent}>
              <h3 className={styles.centerTitle}>Take a moment.</h3>
              <p className={styles.centerSub}>Inhale peace, exhale stress.</p>
            </div>
            <div className={styles.pulsingBtnContainer}>
              <div className={styles.pulseRing}></div>
              <button className={styles.breatheBtn}>Breathe</button>
            </div>
          </div>
        </motion.div>

        {/* Right Phone */}
        <motion.div 
          className={`${styles.phone} ${styles.rightPhone}`}
          style={{ y: yRight, rotate: rotateRight }}
        >
          <div className={styles.screenLavender}>
            <div className={styles.appHeader}>Care Plan</div>
            <div className={styles.progressCircle}>
              <span className={styles.progressText}>85%</span>
            </div>
            <p className={styles.progressLabel}>Hydration Goal</p>
            <div className={styles.todoItem}>
              <div className={styles.todoBox}></div>
              <span>Morning Routine</span>
            </div>
            <div className={styles.todoItem}>
              <div className={styles.todoBox}></div>
              <span>Evening Serums</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
