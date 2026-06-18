import Link from 'next/link';
import styles from './TwoProblems.module.css';

export default function TwoProblems() {
  return (
    <section className={styles.section} aria-label="Two common problems">
      {/* Background gradient */}
      <div className={styles.sectionBg}></div>
      
      <div className="container">
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
            Find Your Growth Leak
          </div>
          
          <h2 className={styles.heading}>Your Website Has One of Two Problems</h2>
          <p className={styles.subtext}>
            You either need more traffic, or more visitors to become leads.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Problem 1: No Traffic */}
          <div className={`${styles.card} ${styles.cardGreen}`}>
            <h3 className={styles.cardTitle}>No Traffic?</h3>
            <p className={styles.cardDesc}>
              Your website is not ranking or bringing qualified visitors.
            </p>
            <ul className={styles.checkList}>
              <li>
                <CheckIcon /> Technical SEO
              </li>
              <li>
                <CheckIcon /> Keyword research
              </li>
              <li>
                <CheckIcon /> Blog SEO
              </li>
              <li>
                <CheckIcon /> Service page SEO
              </li>
              <li>
                <CheckIcon /> Local SEO
              </li>
            </ul>
            <Link href="#pricing" className={styles.btnGreen}>
              🚀 Build My Traffic
            </Link>
          </div>

          {/* Problem 2: No Leads */}
          <div className={`${styles.card} ${styles.cardBlue}`}>
            <h3 className={styles.cardTitle}>Traffic But No Leads?</h3>
            <p className={styles.cardDesc}>
              People visit your website but leave without taking action.
            </p>
            <ul className={styles.checkList}>
              <li>
                <CheckIcon /> Landing page improvement
              </li>
              <li>
                <CheckIcon /> CTA fixes
              </li>
              <li>
                <CheckIcon /> Contact form cleanup
              </li>
              <li>
                <CheckIcon /> Trust signal placement
              </li>
              <li>
                <CheckIcon /> Page flow improvement
              </li>
            </ul>
            <Link href="#pricing" className={styles.btnGreen}>
              <svg 
                className={styles.btnIcon} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
              Fix My Conversion
            </Link>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCtaWrapper}>
          <Link href="https://calendly.com/tresifylab/let-s-talk" className={styles.bottomCta}>
            <svg 
              className={styles.bottomCtaIcon} 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
            </svg>
            Don&apos;t have a website yet? No worries, Let&apos;s Build!
          </Link>
        </div>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg 
      className={styles.checkIcon} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="3" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}
