import Link from 'next/link';
import styles from './HowItWorks.module.css';

export default function HowItWorks() {
  return (
    <section className={styles.section} id="how-it-works" aria-label="Our process">
      {/* Background gradient */}
      <div className={styles.sectionBg}></div>
      
      <div className="container">
        {/* Header */}
        <div className={`section-header section-header--center ${styles.header}`}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                <path d="M5 3v4" />
                <path d="M19 17v4" />
                <path d="M3 5h4" />
                <path d="M17 19h4" />
              </svg>
            </span>
            Our Growth System
          </div>
          
          <h2 className={styles.heading}>From Search Traffic to Qualified Leads</h2>
          <p className={styles.subtext}>
            We connect SEO, content, landing pages, and funnel optimization into one clear growth path.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className={styles.grid}>
          
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.stepNumber}>01</div>
            <h3 className={styles.cardTitle}>Find the Leak</h3>
            <p className={styles.cardDesc}>
              We audit your SEO, content, website structure, landing pages, and conversion flow.
            </p>
          </div>

          {/* Card 2 (Highlighted) */}
          <div className={`${styles.card} ${styles.cardHighlighted}`}>
            <div className={styles.stepNumber}>02</div>
            <h3 className={styles.cardTitle}>Build the Traffic Path</h3>
            <p className={styles.cardDesc}>
              We improve technical SEO, keyword strategy, blog SEO, service pages, and local SEO.
            </p>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.stepNumber}>03</div>
            <h3 className={styles.cardTitle}>Fix the Conversion Path</h3>
            <p className={styles.cardDesc}>
              We improve landing pages, CTAs, copy, trust signals, forms, and UI/UX flow.
            </p>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCtaWrapper}>
          <Link href="https://calendly.com/tresifylab/let-s-talk" className={styles.btnGreen}>
            Get My Growth Audit
          </Link>
        </div>
      </div>
    </section>
  );
}
