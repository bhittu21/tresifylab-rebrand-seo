'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site Footer">
      <div className="container">
        
        {/* Top Pre-Footer / CTA Section */}
        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              Accepting New Partners
            </div>
            <h2 className={styles.ctaHeading}>Ready to grow?</h2>
            <p className={styles.ctaSub}>
              Stop losing traffic to competitors. Build a website that ranks, converts, and brings qualified leads.
            </p>
          </div>
          
          <div className={styles.ctaFormCard}>
            <h3 className={styles.formHeading}>Free Growth Audit</h3>
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

        <div className={styles.divider}></div>

        {/* Links Section */}
        <div className={styles.linksSection}>
          
          {/* Col 1: Brand Info */}
          <div className={styles.brandCol}>
            <div className={styles.brandName}>Tresify Lab</div>
            <p className={styles.brandDesc}>
              SEO & funnel optimization for service businesses that need more traffic, better leads, and less guesswork.
            </p>
            <Link href="#audit" className={styles.brandLink}>
              Book Free Growth Audit ➔
            </Link>
          </div>

          {/* Col 2: Services */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeader}>Services</h4>
            <ul className={styles.linkList}>
              <li><Link href="#seo">Technical SEO</Link></li>
              <li><Link href="#seo">Service Page SEO</Link></li>
              <li><Link href="#seo">SEO Content Writing</Link></li>
              <li><Link href="#seo">Local SEO</Link></li>
              <li><Link href="#seo">Blog SEO</Link></li>
              <li><Link href="#seo">SEO Traffic Growth</Link></li>
            </ul>
          </div>

          {/* Col 3: Funnel */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeader}>Funnel</h4>
            <ul className={styles.linkList}>
              <li><Link href="#funnel">Lead Tracking Setup</Link></li>
              <li><Link href="#funnel">UI/UX Guidance</Link></li>
              <li><Link href="#funnel">CTA Improvement</Link></li>
              <li><Link href="#funnel">CRO Audit</Link></li>
              <li><Link href="#funnel">Landing Page Opt.</Link></li>
              <li><Link href="#funnel">Funnel Optimization</Link></li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeader}>Company</h4>
            <ul className={styles.linkList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="/blog">blog</Link></li>
              <li><Link href="#case-studies">Case Studies</Link></li>
              <li><Link href="#contact">Contact</Link></li>
              <li><Link href="#pricing">Pricing</Link></li>
            </ul>
          </div>

          {/* Col 5: Legal */}
          <div className={styles.linkCol}>
            <h4 className={styles.colHeader}>Legal</h4>
            <ul className={styles.linkList}>
              <li><Link href="#privacy">Privacy Policy</Link></li>
              <li><Link href="#terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        {/* Giant Logo */}
        <div className={styles.giantLogo}>
          Tresify<span className={styles.giantLogoGreen}>Lab</span>
        </div>

        <div className={styles.divider}></div>

        {/* Copyright & Bottom Bar */}
        <div className={styles.bottomBar}>
          <div className={styles.copyright}>
            © 2026 Tresify Lab. All rights reserved.
          </div>
          
          <div className={styles.socials}>
            <a href="#" aria-label="WhatsApp" className={styles.socialLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>

          <div className={styles.bottomTagline}>
            Built for search, leads, and scale.
          </div>
        </div>

      </div>
    </footer>
  );
}
