"use client";

import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import styles from './Journey.module.css';

const steps = [
  { 
    id: 1, 
    title: 'Arrival & Ambience', 
    desc: 'Step into a serene environment designed to melt away stress before your treatment even begins.', 
    top: '5%' 
  },
  { 
    id: 2, 
    title: 'Expert Consultation', 
    desc: 'We take the time to understand your unique skin profile and wellness goals.', 
    top: '30%' 
  },
  { 
    id: 3, 
    title: 'Tailored Treatment', 
    desc: 'Experience science-backed procedures delivered with a gentle, human touch.', 
    top: '55%' 
  },
  { 
    id: 4, 
    title: 'Aftercare & Glow', 
    desc: 'Leave with a personalized care plan to maintain your radiant results at home.', 
    top: '80%' 
  },
];

export default function Journey() {
  const containerRef = useRef(null);
  
  // Track scroll progress through the container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 60%", "end 90%"]
  });

  return (
    <section ref={containerRef} className={styles.section}>
      <div className={`container ${styles.container}`}>
        <motion.h2 
          className={styles.heading}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Clinic Journey
        </motion.h2>
        
        <div className={styles.timelineWrapper}>
          <div className={styles.svgContainer}>
            <svg 
              viewBox="0 0 200 1000" 
              fill="none" 
              preserveAspectRatio="none"
              className={styles.svgLine}
            >
              {/* Background faint line */}
              <path 
                d="M 100,0 C 200,250 0,400 100,600 C 200,800 0,900 100,1000" 
                stroke="var(--color-lavender)" 
                strokeWidth="4" 
                vectorEffect="non-scaling-stroke"
              />
              {/* Animated pink line that draws itself on scroll */}
              <motion.path 
                d="M 100,0 C 200,250 0,400 100,600 C 200,800 0,900 100,1000" 
                stroke="var(--color-coral)" 
                strokeWidth="8"
                strokeLinecap="round"
                style={{ pathLength: scrollYProgress }}
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>

          <div className={styles.stepsContainer}>
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div 
                  key={step.id} 
                  className={`${styles.step} ${isLeft ? styles.leftStep : styles.rightStep}`}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50, scale: 0.9 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: false, margin: "-10%" }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
                  style={{ top: step.top }}
                >
                  <div className={styles.stepNumber}>0{step.id}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
