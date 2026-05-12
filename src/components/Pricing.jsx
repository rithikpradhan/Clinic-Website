"use client";

import { motion } from 'framer-motion';
import styles from './Pricing.module.css';

const plans = [
  {
    name: 'BASIC',
    desc: 'Essential Skincare\nConsultation & Maintenance',
    price: '65',
    gradient: 'linear-gradient(180deg, #02AAB0 0%, #00CDAC 100%)', // Cyan
    popular: false,
    benefits: [
      'One Time GP consultation',
      'Skin Analysis',
      'Basic Deep Cleansing',
      'Hydration Mask',
      'LED Light Therapy (10 mins)',
      'Home Care Plan',
      'Follow-up Call'
    ]
  },
  {
    name: 'MEDIUM',
    desc: 'Advanced Treatments\nPeels & Hydration',
    price: '75',
    gradient: 'linear-gradient(180deg, #11998e 0%, #38ef7d 100%)', // Teal/Green
    popular: false,
    benefits: [
      'One Time GP consultation',
      'Advanced Skin Analysis',
      'Chemical Peel (Level 1)',
      'Microdermabrasion',
      'Vitamin C Infusion',
      'LED Light Therapy (20 mins)',
      'Home Care Routine'
    ]
  },
  {
    name: 'STANDARD',
    desc: 'Clinical Rejuvenation\nLaser & Injectables',
    price: '85',
    gradient: 'linear-gradient(180deg, #8E2DE2 0%, #4A00E0 100%)', // Purple
    popular: true,
    benefits: [
      'One Time GP consultation',
      'Custom Treatment Plan',
      'Laser Skin Resurfacing',
      'Botulinum Toxin (1 Area)',
      'Dermal Filler Consultation',
      'LED Light Therapy (30 mins)',
      'Priority Booking',
      'Premium Aftercare Kit'
    ]
  },
  {
    name: 'PREMIUM',
    desc: 'Ultimate Wellness\nFull Body & Face Harmony',
    price: '95',
    gradient: 'linear-gradient(180deg, #ff758c 0%, #ff7eb3 100%)', // Pink
    popular: false,
    benefits: [
      'One Time GP consultation',
      'Full Face Rejuvenation',
      'Liquid Facelift',
      'Body Contouring Session',
      'IV Hydration Therapy',
      'Unlimited LED Light Therapy',
      'VIP Concierge Service',
      'Exclusive Skincare Line'
    ]
  }
];

export default function Pricing() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.container}`}>
        <h2 className={styles.heading}>Treatment Plans</h2>
        
        <div className={styles.grid}>
          {plans.map((plan, index) => (
            <motion.div 
              key={plan.name}
              className={`${styles.card} ${plan.popular ? styles.popularCard : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className={styles.cardHeader} style={{ background: plan.gradient }}>
                {plan.popular && (
                  <div className={styles.badgeWrapper}>
                    <span className={styles.badge}>Most Popular</span>
                  </div>
                )}
                <h3 className={styles.name}>{plan.name}</h3>
                <p className={styles.desc}>{plan.desc}</p>
                <div className={styles.priceContainer}>
                  <span className={styles.currency}>$</span>
                  <span className={styles.price}>{plan.price}</span>
                </div>
                <p className={styles.billing}>User/Month (Billed Annually)</p>
                
                {/* SVG Curve Separator */}
                <svg className={styles.curve} viewBox="0 0 1440 150" preserveAspectRatio="none">
                  <path fill="#F9F9F9" d="M0,64L80,74.7C160,85,320,107,480,101.3C640,96,800,64,960,53.3C1120,43,1280,53,1360,58.7L1440,64L1440,150L1360,150C1280,150,1120,150,960,150C800,150,640,150,480,150C320,150,160,150,80,150L0,150Z"></path>
                </svg>
              </div>
              
              <div className={styles.cardBody}>
                <h4 className={styles.benefitsTitle}>Benefits</h4>
                <ul className={styles.benefitsList}>
                  {plan.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
