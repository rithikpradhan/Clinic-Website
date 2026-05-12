"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Testimonials.module.css';

const testimonials = [
  {
    id: 1,
    text: "The clinic environment immediately put me at ease. It doesn't feel like a medical office at all—it's like stepping into a serene living room.",
    author: "Sarah J.",
    color: "#E8EFE8"
  },
  {
    id: 2,
    text: "A truly holistic approach to wellness. The digital app keeps me connected to my care plan, but the in-person experience is where the real magic happens.",
    author: "Michael T.",
    color: "#FFDAC1"
  },
  {
    id: 3,
    text: "I've never felt so listened to by a care team. They took the time to understand my concerns and created a customized plan that feels deeply personal.",
    author: "Elena R.",
    color: "#EAE4ED"
  },
  {
    id: 4,
    text: "From the moment you walk in, the sensory experience is calming. The treatments are grounded in science but delivered with incredible warmth.",
    author: "David L.",
    color: "#F3E9E0"
  }
];

const Card = ({ item, i, progress }) => {
  const start = i * 0.25;
  const scale = useTransform(progress, [start, 1], [1, 1 - (4 - i) * 0.05]);

  return (
    <div className={styles.cardContainer}>
      <motion.div 
        className={styles.card}
        style={{ 
          scale,
          top: `calc(15vh + ${i * 30}px)`,
          backgroundColor: item.color
        }}
      >
        <p className={styles.text}>"{item.text}"</p>
        <div className={styles.signatureRow}>
          <div className={styles.line}></div>
          <span className={styles.signature}>{item.author}</span>
        </div>
      </motion.div>
    </div>
  );
};

export default function Testimonials() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  return (
    <section ref={container} id="testimonials" className={styles.section}>
      <div className={`container ${styles.header}`}>
        <h2 className={styles.heading}>Patient Stories</h2>
      </div>

      <div className={styles.stackArea}>
        {testimonials.map((item, i) => (
          <Card key={item.id} i={i} item={item} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
}
