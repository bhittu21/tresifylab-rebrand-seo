import styles from './FAQ.module.css';

const faqs = [
  {
    q: 'What kind of results can Tresify Lab help improve?',
    a: 'We focus on 4 numbers: organic traffic, qualified leads, website conversion rate, and search visibility. Past client results include 923+ leads in 3 days, 12%+ website lead conversion, 40% traffic growth, and ranking movement from 85+ to 15th on TechBehemoths Bangladesh.',
  },
  {
    q: 'How fast can I see results?',
    a: 'For funnel and landing page fixes, you may see early signals within 2–4 weeks if you already have traffic. For SEO, stronger growth usually takes 3–6 months.',
  },
  {
    q: 'Do I need SEO or funnel optimization first?',
    a: 'If your website gets less than 300–500 monthly visitors, start with SEO. If your website gets traffic but leads are below 2–5% conversion, start with funnel optimization.',
  },
  {
    q: 'Can you increase my website traffic?',
    a: 'Yes. We work on technical SEO, keyword research, blog SEO, service page SEO, local SEO, internal links, and marketplace listings. One client received 7%+ traffic from marketplace listings.',
  },
  {
    q: 'Can you improve my website conversion rate?',
    a: 'Yes. We improve hero sections, CTAs, forms, trust signals, page flow, offer clarity, and UI/UX structure. One launch funnel reached 12%+ website lead conversion.',
  },
  {
    q: 'Do you write SEO blogs?',
    a: 'Yes. Selected plans include 2–4 SEO blogs/month. Each blog targets buyer questions, service keywords, search intent, internal links, and lead-focused CTAs.',
  },
  {
    q: 'Can you work without redesigning my whole website?',
    a: 'Yes. Many websites only need 5–10 high-impact fixes first, such as hero copy, CTA placement, page structure, forms, trust sections, and service page SEO.',
  },
  {
    q: 'What is included in the free growth audit?',
    a: 'We check 10 areas: technical SEO, keywords, service pages, blog strategy, local SEO, landing pages, CTA, forms, trust signals, and UI/UX conversion leaks.',
  },
  {
    q: 'Do you guarantee rankings, leads, or sales?',
    a: 'No. We do not guarantee fake numbers. We build the SEO, content, landing page, and funnel system that improves your chance of qualified traffic and conversions.',
  },
  {
    q: 'Who gets the best results from this service?',
    a: 'Service businesses, agencies, consultants, real estate companies, education businesses, and B2B service providers that can invest for 3–6 months get the best fit.',
  },
];

export default function FAQ() {
  return (
    <section className={styles.section} id="faq" aria-label="Frequently asked questions">
      <div className="container">
        <div className={styles.header}>
          <div className={styles.badge}>
            <span className="badge-pill">
              <svg aria-hidden="true" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M202.021 0C122.202 0 70.503 32.703 29.914 91.026c-7.363 10.58-5.093 25.086 5.178 32.874l43.138 32.709c10.373 7.865 25.132 6.026 33.253-4.148 25.049-31.381 43.63-49.449 82.757-49.449 30.764 0 68.816 19.799 68.816 49.631 0 22.552-18.617 34.134-48.993 51.164-35.423 19.86-82.299 44.576-82.299 106.405V320c0 13.255 10.745 24 24 24h72.471c13.255 0 24-10.745 24-24v-5.773c0-42.86 125.268-44.645 125.268-160.627C377.504 66.256 286.902 0 202.021 0zM192 373.459c-38.196 0-69.271 31.075-69.271 69.271 0 38.195 31.075 69.27 69.271 69.27s69.271-31.075 69.271-69.271-31.075-69.27-69.271-69.27z" />
              </svg>
              Questions Before You Start
            </span>
          </div>
          <h2 className={styles.heading}>SEO &amp; Funnel Optimization FAQs</h2>
          <p className={styles.desc}>
            Clear answers with real numbers, possible outcomes, and no fake guarantees.
          </p>
        </div>

        <div className={styles.list}>
          {faqs.map((faq, index) => (
            <details key={index} className={styles.item}>
              <summary className={styles.question}>
                <span>{faq.q}</span>
                <svg
                  className={styles.icon}
                  aria-hidden="true"
                  viewBox="0 0 320 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z" />
                </svg>
              </summary>
              <div className={styles.answer}>{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
