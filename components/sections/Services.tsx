import Link from 'next/link';
import styles from './Services.module.css';

export default function Services() {
  const services = [
    {
      title: 'SEO Strategy',
      desc: 'Keyword research, competitor gaps, search intent, and monthly SEO roadmap.',
    },
    {
      title: 'Technical SEO',
      desc: 'Site speed, indexing, crawl issues, metadata, internal links, and Search Console checks.',
    },
    {
      title: 'SEO Content Writing',
      desc: 'Search-optimized blogs built around buyer questions, service keywords, and lead intent.',
    },
    {
      title: 'Landing Page Optimization',
      desc: 'Hero section, page flow, CTA placement, trust signals, forms, and lead path cleanup.',
    },
    {
      title: 'Funnel & CRO',
      desc: 'We find where visitors drop, why they do not convert, and what needs to change.',
    },
    {
      title: 'UI/UX Guidance',
      desc: 'Clear layout, better user flow, stronger visual hierarchy, and conversion-focused design direction.',
    },
  ];

  return (
    <section className={styles.section} id="services" aria-label="Our services">
      <div className={styles.sectionBg}></div>
      
      <div className="container">
        {/* Header */}
        <div className={`section-header section-header--center ${styles.header}`}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="6" />
                <circle cx="12" cy="12" r="2" />
              </svg>
            </span>
            Done-for-You Growth Work
          </div>
          
          <h2 className={styles.heading}>We Handle the Work That Slows You Down</h2>
          <p className={styles.subtext}>
            From SEO planning to content, landing pages, and conversion fixes, we manage the growth tasks your team does not have time for.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card} style={{ animationDelay: `${0.1 * index}s` }}>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDesc}>{service.desc}</p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={styles.bottomCtaWrapper}>
          <Link href="https://calendly.com/tresifylab/let-s-talk" className={styles.btnGreen}>
            Get Free Growth Audit
          </Link>
        </div>
      </div>
    </section>
  );
}
