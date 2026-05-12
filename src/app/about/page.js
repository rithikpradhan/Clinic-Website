"use client";

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import styles from './About.module.css';

const team = [
  { name: 'Dr. Elena Rostova', role: 'Medical Director' },
  { name: 'Dr. James Chen', role: 'Dermatologist' },
  { name: 'Sarah Jenkins, RN', role: 'Lead Aesthetic Nurse' }
];

export default function About() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={`container ${styles.content}`}>
          
          <div className={styles.heroSection}>
            <motion.h1 
              initial={{ opacity: 0, y: 100, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 1, type: "spring", bounce: 0.4 }}
              className={styles.massiveTitle}
            >
              Science & <br />
              <span className={styles.cursive}>Sanctuary</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className={styles.description}
            >
              We believe that true wellness stems from a delicate balance of science and sanctuary. Our philosophy centers around providing medical-grade treatments within an environment that feels like a gentle embrace. Every detail of our clinic has been intentionally designed to reduce anxiety and promote healing.
            </motion.p>
          </div>

          <div className={styles.teamSection}>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={styles.subtitle}
            >
              The Collective
            </motion.h2>
            
            <div className={styles.teamList}>
              {team.map((member, i) => (
                <motion.div 
                  key={member.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className={styles.teamRow}
                >
                  <h3 className={styles.name}>{member.name}</h3>
                  <div className={styles.roleWrapper}>
                    <p className={styles.role}>{member.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
