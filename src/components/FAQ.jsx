"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
  {
    id: 1,
    question: "Do you accept insurance for clinic visits?",
    answer: "We operate on a direct-care model to ensure we can spend ample time with each patient. We can provide superbills for you to submit to your insurance for potential out-of-network reimbursement."
  },
  {
    id: 2,
    question: "What should I expect during my first consultation?",
    answer: "Your first visit is a 60-minute deep dive into your health history, current concerns, and lifestyle. It's a gentle, conversational process designed to understand you holistically."
  },
  {
    id: 3,
    question: "Is the digital app included in my care plan?",
    answer: "Yes, access to our digital wellness sanctuary app is included for all active patients to help track progress and stay connected."
  }
];

function AccordionItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.accordionContainer}>
      <button 
        className={styles.header} 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{faq.question}</span>
        <motion.div 
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className={styles.iconWrapper}
        >
          <Plus size={20} color="#292524" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className={styles.contentWrapper}
          >
            <div className={styles.content}>
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.heading}>Common Questions</h2>
        <div className={styles.list}>
          {faqs.map(faq => (
            <AccordionItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
