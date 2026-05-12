import { Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.col}>
          <h4 className={styles.brand}>Aura Clinic</h4>
          <p className={styles.text}>
            Modern care that feels softly human. We blend advanced medicine with a gentle, holistic approach to your health.
          </p>
        </div>
        
        <div className={styles.col}>
          <h5 className={styles.heading}>Navigation</h5>
          <ul className={styles.links}>
            <li><Link href="/treatments">Treatments</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h5 className={styles.heading}>Legal</h5>
          <ul className={styles.links}>
            <li><Link href="#terms">Terms of Service</Link></li>
            <li><Link href="#privacy">Privacy Policy</Link></li>
            <li><Link href="#cookies">Cookie Policy</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h5 className={styles.heading}>Contact</h5>
          <ul className={styles.contact}>
            <li><Mail size={16} /> hello@auraclinic.com</li>
            <li><Phone size={16} /> +1 (800) 555-0199</li>
            <li><MapPin size={16} /> 123 Wellness Ave, NY 10012</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className="container">
          &copy; {new Date().getFullYear()} AURA CLINIC. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
}
