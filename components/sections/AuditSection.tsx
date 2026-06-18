'use client';

import styles from './AuditSection.module.css';

export default function AuditSection() {
  return (
    <section className={styles.section} id="audit" aria-label="Free Growth Audit">
      {/* Background gradient */}
      <div className={styles.sectionBg}></div>
      
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
              Free Website Growth Audit
            </div>
            
            <h2 className={styles.heading}>
              Find What Is Blocking Your Traffic and Leads
            </h2>
            
            <p className={styles.intro}>
              We review your website, SEO, content, landing pages, and funnel flow.
              You get clear next steps to improve traffic and conversion.
            </p>

            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <h4 className={styles.featureTitle}>1. SEO Leak Check:</h4>
                <p className={styles.featureDesc}>
                  Technical SEO, keyword targeting, service pages, blog structure, and
                  local visibility.
                </p>
              </div>

              <div className={styles.featureItem}>
                <h4 className={styles.featureTitle}>2. Funnel Leak Check:</h4>
                <p className={styles.featureDesc}>
                  Hero section, CTA, page flow, trust signals, forms, and lead path.
                </p>
              </div>

              <div className={styles.featureItem}>
                <h4 className={styles.featureTitle}>3. Growth Action Plan:</h4>
                <p className={styles.featureDesc}>
                  A short plan showing what to fix first and which package fits your
                  business.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Audit Form Card */}
          <div className={styles.formCardWrapper}>
            <div className={styles.formCard}>
              <h3 className={styles.formHeading}>Let&apos;s Grow Your Business Together</h3>
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
