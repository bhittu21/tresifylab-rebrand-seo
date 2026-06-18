import Link from 'next/link';
import styles from './CaseStudies.module.css';

export default function CaseStudies() {
  const caseStudies = [
    {
      metric: (
        <>
          85+ <span className={styles.arrow}>→</span> 15th
        </>
      ),
      metricSub: 'TechBehemoths Ranking Improved',
      client: 'Oyolloo',
      details: 'UI/UX Agency | Sheridan, USA',
      result: (
        <>
          <strong>Result:</strong> Improved B2B marketplace traffic to 7%+ and helped move Oyolloo from 85+ to 15th in Bangladesh on TechBehemoths.
        </>
      ),
      link: '#',
    },
    {
      metric: '923+',
      metricSub: 'Leads collected in 3 days',
      client: 'Prep Talks',
      details: 'US Student Consultancy | New York, USA',
      result: (
        <>
          <strong>Result:</strong> Generated 923+ leads in 3 days and $2,000+ in 7 days through an optimized launch funnel.
        </>
      ),
      link: '#',
    },
    {
      metric: '40%',
      metricSub: 'Traffic Increase',
      client: 'Ark Sylhet',
      details: 'Real Estate | Sylhet, Bangladesh',
      result: (
        <>
          <strong>Result:</strong> Built a WordPress CMS website and increased traffic up to 40% through local SEO, backlinks, and website redesign.
        </>
      ),
      link: '#',
    },
  ];

  return (
    <section className={styles.section} id="case-studies" aria-label="Case Studies">
      {/* Background gradient */}
      <div className={styles.sectionBg}></div>
      
      <div className="container">
        {/* Header - Matches the exact text from screenshot */}
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
          {caseStudies.map((study, index) => (
            <div key={index} className={styles.card} style={{ animationDelay: `${0.1 * index}s` }}>
              <div className={styles.cardHeader}>
                <div className={styles.metric}>{study.metric}</div>
                <div className={styles.metricSub}>{study.metricSub}</div>
              </div>
              
              <div className={styles.cardBody}>
                <h3 className={styles.clientName}>{study.client}</h3>
                <div className={styles.clientDetails}>{study.details}</div>
                <p className={styles.resultText}>{study.result}</p>
              </div>

              <div className={styles.cardFooter}>
                <Link href={study.link} className={styles.btnOutline}>
                  View Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCtaWrapper}>
          <Link href="#newsletter" className={styles.bottomCta}>
            Join our case studies list
          </Link>
        </div>
      </div>
    </section>
  );
}
