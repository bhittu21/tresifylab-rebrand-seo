import Link from 'next/link';
import styles from './BlogHero.module.css';

export default function BlogHero() {
  return (
    <section className={styles.hero} aria-label="Blog Hero">
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
              SEO, Funnel & CRO Insights
            </div>
            
            <h1 className={styles.heading}>
              Practical blogs for <br />
              traffic, leads, and <br />
              conversion.
            </h1>
            
            <p className={styles.desc}>
              Read simple guides on technical SEO, blog SEO, service page ranking, landing page optimization, funnel leaks, and UI/UX fixes for lead generation.
            </p>
            
            <div className={styles.actions}>
              <Link href="#blog-list" className={`btn btn--primary ${styles.ctaPrimary}`}>
                Browse Blogs
              </Link>
              <Link href="https://calendly.com/tresifylab/let-s-talk" className={`btn btn--outline ${styles.ctaSecondary}`}>
                Get Free Growth Audit
              </Link>
            </div>
            
            {/* Topic Tags */}
            <div className={styles.tagsGrid}>
              <div className={styles.tagBox}>
                <div className={styles.tagTitle}>SEO</div>
                <div className={styles.tagDesc}>Traffic growth topics</div>
              </div>
              <div className={styles.tagBox}>
                <div className={styles.tagTitle}>CRO</div>
                <div className={styles.tagDesc}>Conversion fixes</div>
              </div>
              <div className={styles.tagBox}>
                <div className={styles.tagTitle}>Lead</div>
                <div className={styles.tagDesc}>Funnel strategy</div>
              </div>
            </div>
          </div>

          {/* Right Column: Growth Topic Map Graphic */}
          <div className={styles.graphicWrapper}>
            <div className={styles.graphicCard}>
              
              {/* Graphic Header */}
              <div className={styles.graphicHeader}>
                <h3 className={styles.graphicTitle}>Growth Topic Map</h3>
                <div className={styles.graphicBadge}>
                  <span className={styles.greenDot}></span> Updated weekly
                </div>
              </div>

              {/* Focus Boxes */}
              <div className={styles.focusBoxes}>
                <div className={styles.focusBox}>
                  <div className={styles.focusLabel}>Search Intent</div>
                  <div className={styles.focusValue}>Buyer-first</div>
                </div>
                <div className={styles.focusBox}>
                  <div className={styles.focusLabel}>Core Focus</div>
                  <div className={styles.focusValue}>Leads</div>
                </div>
              </div>

              {/* Chart Area */}
              <div className={styles.chartArea}>
                <div className={styles.chartGrid}></div>
                <svg className={styles.chartLines} viewBox="0 0 400 120" preserveAspectRatio="none">
                  {/* Blue Line (Secondary) */}
                  <path 
                    d="M 0,90 Q 50,70 100,60 T 200,80 T 300,80 T 400,60" 
                    fill="none" 
                    stroke="#3b82f6" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                  />
                  {/* Green Line (Primary) */}
                  <path 
                    d="M 0,80 Q 50,40 100,30 T 200,60 T 300,50 T 400,20" 
                    fill="none" 
                    stroke="#16a34a" 
                    strokeWidth="3" 
                    strokeLinecap="round" 
                  />
                </svg>
              </div>

              {/* Bottom Flowchart */}
              <div className={styles.flowchart}>
                <div className={styles.flowStep}>Search</div>
                <div className={styles.flowArrow}>→</div>
                <div className={styles.flowStep}>Read</div>
                <div className={styles.flowArrow}>→</div>
                <div className={styles.flowStep}>Trust</div>
                <div className={styles.flowArrow}>→</div>
                <div className={styles.flowStep}>Lead</div>
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
