import Link from 'next/link';
import styles from './page.module.css';

export default function TechnicalSeoPage() {
  return (
    <main className={styles.main}>
      
      {/* 1. HERO SECTION */}
      <section className={`${styles.section} ${styles.hero}`}>
        <div className={styles.sectionBg}></div>
        <div className="container">
          <div className={styles.headerCenter}>
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
              Technical SEO Services
            </div>
            <h1 className={styles.heading}>Fix The Errors Blocking Your Traffic Growth</h1>
            <p className={styles.subheadline}>
              For service businesses struggling to rank. We rebuild your technical foundation so search engines can crawl, index, and rank your site faster.
            </p>
            <div className={styles.actions}>
              <Link href="https://calendly.com/tresifylab/let-s-talk" className={styles.btnGreen}>
                Get Free SEO Audit
              </Link>
              <Link href="#case-studies" className={styles.btnOutline}>
                View Case Studies
              </Link>
            </div>
            <div className={styles.trustSignals}>
              <span>Trusted by 50+ Service Businesses</span>
              <span className={styles.dotSeparator}>•</span>
              <span>Avg. 40% Speed Increase</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.headerCenter}>
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
              Identify The Leaks
            </div>
            <h2 className={styles.heading}>Why Your Content Isn&apos;t Ranking</h2>
            <p className={styles.subheadline}>You could write the best content in the world, but if your technical foundation is broken, Google won&apos;t show it.</p>
          </div>
          
          <div className={styles.grid2Col}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Site not ranking despite great content</h3>
              <p className={styles.cardDesc}>Search engines can&apos;t properly read your pages.</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Slow website performance</h3>
              <p className={styles.cardDesc}>High load times are killing your conversions and rankings.</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Indexing issues</h3>
              <p className={styles.cardDesc}>Google isn&apos;t even finding your newest pages.</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Technical errors blocking growth</h3>
              <p className={styles.cardDesc}>Broken links, redirect loops, and server errors.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SERVICE BREAKDOWN */}
      <section className={styles.section} style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className={styles.headerCenter}>
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
              Our Approach
            </div>
            <h2 className={styles.heading}>What We Actually Do</h2>
            <p className={styles.subheadline}>A transparent look at how we fix your website&apos;s foundation.</p>
          </div>
          
          <div className={styles.grid3Col}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Technical Audit</h3>
              <p className={styles.cardDesc}>Identify indexation blocks, crawl budget waste, and structural errors.</p>
            </div>
            <div className={`${styles.card} ${styles.cardHighlighted}`}>
              <h3 className={styles.cardTitle}>Speed Optimization</h3>
              <p className={styles.cardDesc}>Compress images, minify code, leverage caching, and optimize scripts.</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Indexation & Crawl</h3>
              <p className={styles.cardDesc}>Fix robots.txt, optimize XML sitemaps, and resolve canonical tags.</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Core Web Vitals</h3>
              <p className={styles.cardDesc}>Improve LCP, FID, and CLS scores across mobile and desktop.</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Schema Markup</h3>
              <p className={styles.cardDesc}>Implement LocalBusiness, Service, and FAQ schema markup.</p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Technical Monitoring</h3>
              <p className={styles.cardDesc}>Monitor Search Console, fix new 404s, and track uptime to prevent drops.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESS SECTION */}
      <section className={styles.section}>
        <div className={styles.sectionBg}></div>
        <div className="container">
          <div className={styles.headerCenter}>
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
              Our Process
            </div>
            <h2 className={styles.heading}>How We Work</h2>
            <p className={styles.subheadline}>A simple, proven system to rebuild your SEO foundation.</p>
          </div>
          
          <div className={styles.grid3Col}>
            <div className={styles.card}>
              <div className={styles.stepNumber}>01</div>
              <h3 className={styles.cardTitle}>Audit</h3>
              <p className={styles.cardDesc}>We crawl your site and identify every technical roadblock.</p>
            </div>
            <div className={`${styles.card} ${styles.cardHighlighted}`}>
              <div className={styles.stepNumber}>02</div>
              <h3 className={styles.cardTitle}>Prioritize</h3>
              <p className={styles.cardDesc}>We rank fixes by highest impact on traffic and revenue.</p>
            </div>
            <div className={styles.card}>
              <div className={styles.stepNumber}>03</div>
              <h3 className={styles.cardTitle}>Implement</h3>
              <p className={styles.cardDesc}>Our developers safely deploy fixes directly to your environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CASE STUDIES / PROOF */}
      <section className={styles.section} id="case-studies" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className={styles.headerCenter}>
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
              Proof It Works
            </div>
            <h2 className={styles.heading}>Real Technical SEO Results</h2>
          </div>
          
          <div className={styles.grid2Col}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>B2B Service Agency</h3>
              <p className={styles.cardDesc}><strong>Fix:</strong> Image compression, caching, and script deferral.</p>
              <div className={styles.caseResults}>
                <span className={styles.metric}>-65% Load Time</span>
                <span className={styles.metric}>+42% Conversions</span>
              </div>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Local Law Firm</h3>
              <p className={styles.cardDesc}><strong>Fix:</strong> Sitemap restructuring and internal link optimization.</p>
              <div className={styles.caseResults}>
                <span className={styles.metric}>+120% Indexed Pages</span>
                <span className={styles.metric}>+85% Organic Traffic</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className={styles.section} id="audit">
        <div className={styles.sectionBg}></div>
        <div className="container">
          <div className={styles.headerCenter} style={{ marginBottom: 0 }}>
            <h2 className={styles.heading}>Fix Your SEO Foundation Before Scaling Traffic</h2>
            <p className={styles.subheadline}>Stop losing leads to a slow, unoptimized website.</p>
            <div className={styles.actions} style={{ marginBottom: 0 }}>
              <Link href="https://calendly.com/tresifylab/let-s-talk" className={styles.btnGreen}>Get Free SEO Audit</Link>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
