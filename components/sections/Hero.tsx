'use client';

import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero} aria-label="Hero">
      {/* Background gradient specifically for the hero */}
      <div className={styles.heroBg}></div>
      
      <div className="container">
        <div className={styles.inner}>
          
          {/* Left Column: Copy */}
          <div className={styles.content}>
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
              SEO & Funnel Optimization Agency
            </div>
            
            <h1 className={styles.heading}>
              Get More Traffic. <br />
              Convert More Visitors.
            </h1>
            
            <p className={styles.desc}>
              We help service businesses improve technical SEO, service pages,
              content, landing pages, and conversion paths so their website brings
              more qualified inquiries.
            </p>
            
            <div className={styles.actions}>
              <Link href="https://calendly.com/tresifylab/let-s-talk" className={`btn btn--primary ${styles.ctaPrimary}`}>
                Book Free Growth Audit
              </Link>
              <Link href="#pricing" className={`btn btn--outline ${styles.ctaSecondary}`}>
                View Plan
              </Link>
            </div>
            
            <p className={styles.subtext}>
              Built for agencies, consultants, education businesses, real estate
              companies, and local service providers.
            </p>
          </div>

          {/* Right Column: Audit Form Card */}
          <div className={styles.formCardWrapper}>
            <div className={styles.formCard}>
              <h2 className={styles.formHeading}>Free Growth Audit</h2>
              <p className={styles.formSub}>
                Get clear fixes for SEO, content, landing pages, and conversion leaks.
              </p>
              
              <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                <div className={styles.fieldGroup}>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    required 
                    className={styles.input} 
                    aria-label="Email Address"
                  />
                  <span className={styles.fieldIcon}>
                    {/* Placeholder for red input icon seen in screenshot */}
                    <svg viewBox="0 0 24 24" fill="#E11D48">
                      <rect width="24" height="16" y="4" rx="4" />
                      <circle cx="6" cy="12" r="1.5" fill="white" />
                      <circle cx="12" cy="12" r="1.5" fill="white" />
                      <rect x="16" y="8" width="2" height="8" fill="white" />
                    </svg>
                  </span>
                </div>
                
                <div className={styles.fieldGroup}>
                  <input 
                    type="url" 
                    placeholder="Website URL - https://tresifylab.com" 
                    required 
                    className={styles.input}
                    aria-label="Website URL"
                  />
                </div>
                
                <div className={styles.fieldGroup}>
                  <select className={styles.select} required aria-label="Service Need">
                    <option value="">Need SEO + Funnel Help</option>
                    <option value="seo">SEO Only</option>
                    <option value="funnel">Funnel Only</option>
                  </select>
                </div>
                
                <button type="submit" className={styles.submitBtn}>
                  Get Audit
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
