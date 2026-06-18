import Link from 'next/link';
import styles from './Pricing.module.css';

export default function Pricing() {
  return (
    <section className={styles.section} id="pricing" aria-label="Pricing plans">
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
            Our Pricing Plan
          </div>
          
          <h2 className={styles.heading}>Done-for-You SEO & Funnel Plans</h2>
          <p className={styles.subtext}>
            We handle your SEO, content, landing pages, and conversion flow so you can focus on running the business.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className={styles.grid}>
          
          {/* Card 1: SEO Foundation */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>SEO Foundation</h3>
              <div className={styles.priceWrap}>
                <span className={styles.price}>$499</span>
                <span className={styles.period}>/month</span>
              </div>
              <p className={styles.cardDesc}>
                For websites with low traffic and weak search visibility.
              </p>
            </div>
            
            <ul className={styles.checkList}>
              <li><CheckIcon /> SEO audit</li>
              <li><CheckIcon /> Technical SEO fixes</li>
              <li><CheckIcon /> Keyword research</li>
              <li><CheckIcon /> Service page SEO</li>
              <li><CheckIcon /> Blog topic plan</li>
              <li><CheckIcon /> Internal linking plan</li>
              <li><CheckIcon /> Search Console review</li>
              <li><CheckIcon /> Monthly SEO report</li>
            </ul>
            
            <Link href="https://calendly.com/tresifylab/let-s-talk" className={styles.btnOutline}>
              Start SEO Foundation
            </Link>
          </div>

          {/* Card 2: Traffic + Conversion Growth (Highlighted) */}
          <div className={`${styles.card} ${styles.cardHighlighted}`}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Traffic + Conversion Growth</h3>
              <div className={styles.priceWrap}>
                <span className={styles.price}>$899</span>
                <span className={styles.period}>/month</span>
              </div>
              <p className={styles.cardDesc}>
                For businesses that need more traffic and better leads.
              </p>
            </div>
            
            <ul className={styles.checkList}>
              <li><CheckIcon /> Everything in SEO Foundation</li>
              <li><CheckIcon /> Local SEO</li>
              <li><CheckIcon /> Content SEO strategy</li>
              <li><CheckIcon /> <strong>2 SEO blogs/month</strong></li>
              <li><CheckIcon /> 4 optimized pages/month</li>
              <li><CheckIcon /> Landing page optimization</li>
              <li><CheckIcon /> CTA improvement</li>
              <li><CheckIcon /> Funnel audit</li>
              <li><CheckIcon /> CRO recommendations</li>
              <li><CheckIcon /> Basic UI/UX audit</li>
            </ul>
            
            <Link href="https://calendly.com/tresifylab/let-s-talk" className={styles.btnGreen}>
              Start My Growth Plan
            </Link>
          </div>

          {/* Card 3: Full System */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Full SEO + Funnel System</h3>
              <div className={styles.priceWrap}>
                <span className={styles.price}>$1,499</span>
                <span className={styles.period}>/month</span>
              </div>
              <p className={styles.cardDesc}>
                For businesses that want SEO, content, funnel, and UI/UX handled together.
              </p>
            </div>
            
            <ul className={styles.checkList}>
              <li><CheckIcon /> Everything in Growth</li>
              <li><CheckIcon /> Full technical SEO audit</li>
              <li><CheckIcon /> Full content roadmap</li>
              <li><CheckIcon /> <strong>4 SEO blogs/month</strong></li>
              <li><CheckIcon /> 6 optimized pages/month</li>
              <li><CheckIcon /> Location page strategy</li>
              <li><CheckIcon /> Competitor SEO analysis</li>
              <li><CheckIcon /> Competitor funnel analysis</li>
              <li><CheckIcon /> Advanced CRO roadmap</li>
              <li><CheckIcon /> UI/UX improvement plan</li>
              <li><CheckIcon /> Lead tracking setup</li>
            </ul>
            
            <Link href="https://calendly.com/tresifylab/let-s-talk" className={styles.btnOutline}>
              Start My Full System
            </Link>
          </div>

        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCtaWrapper}>
          <Link href="#case-studies" className={styles.bottomCta}>
            Our Case Studies
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
