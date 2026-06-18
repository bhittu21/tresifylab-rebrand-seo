'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.stickyEffects : ''}`} id="ast-desktop-header">
      <div className={styles.inner}>
        {/* Logo */}
        <div className={styles.logo}>
          <Link href="/" aria-label="Tresify Lab Home">
            <Image
              src="/images/logo.png"
              alt="Tresify Lab – SEO & Funnel Optimization Agency"
              width={180}
              height={43}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.navList}>
            <li>
              <Link href="/" className={`${styles.navLink} ${styles.navLinkActive}`}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/blog" className={styles.navLink}>
                Blog
              </Link>
            </li>
            <li>
              <Link href="/#pricing" className={styles.navLink}>
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/#faq" className={styles.navLink}>
                FAQ&apos;s
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div className={styles.cta}>
          <a
            href="https://calendly.com/tresifylab/let-s-talk"
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn--primary btn--sm ${styles.ctaBtn}`}
          >
            Get Free Audit
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className={styles.mobileMenu} aria-hidden={!mobileOpen}>
          <nav aria-label="Mobile navigation">
            <ul className={styles.mobileNavList}>
              <li>
                <Link href="/" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/#faq" className={styles.mobileNavLink} onClick={() => setMobileOpen(false)}>
                  FAQ&apos;s
                </Link>
              </li>
              <li>
                <a
                  href="https://calendly.com/tresifylab/let-s-talk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn--primary ${styles.mobileCta}`}
                >
                  Get Free Audit
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
