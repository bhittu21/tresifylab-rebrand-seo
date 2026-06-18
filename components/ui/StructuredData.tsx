export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://tresifylab.com/#organization',
        name: 'Tresify Lab',
        url: 'https://tresifylab.com',
        logo: {
          '@type': 'ImageObject',
          '@id': 'https://tresifylab.com/#logo',
          url: 'https://tresifylab.com/wp-content/uploads/2026/05/Tresify-Lab-SEO-Funnel-Optimization-Agency-logo.png',
          contentUrl:
            'https://tresifylab.com/wp-content/uploads/2026/05/Tresify-Lab-SEO-Funnel-Optimization-Agency-logo.png',
          caption: 'Tresify Lab',
          inLanguage: 'en-US',
          width: '1352',
          height: '324',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://tresifylab.com/#website',
        url: 'https://tresifylab.com',
        name: 'Tresify Lab',
        alternateName: 'Tresify',
        publisher: { '@id': 'https://tresifylab.com/#organization' },
        inLanguage: 'en-US',
      },
      {
        '@type': 'WebPage',
        '@id': 'https://tresifylab.com/#webpage',
        url: 'https://tresifylab.com/',
        name: 'SEO & Funnel Agency For Service Businesses | Tresify Lab',
        datePublished: '2026-05-23T18:23:34+06:00',
        dateModified: '2026-06-06T21:43:02+06:00',
        about: { '@id': 'https://tresifylab.com/#organization' },
        isPartOf: { '@id': 'https://tresifylab.com/#website' },
        inLanguage: 'en-US',
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'What kind of results can Tresify Lab help improve?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We focus on 4 numbers: organic traffic, qualified leads, website conversion rate, and search visibility. Past client results include 923+ leads in 3 days, 12%+ website lead conversion, 40% traffic growth, and ranking movement from 85+ to 15th on TechBehemoths Bangladesh.',
            },
          },
          {
            '@type': 'Question',
            name: 'How fast can I see results?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'For funnel and landing page fixes, you may see early signals within 2–4 weeks if you already have traffic. For SEO, stronger growth usually takes 3–6 months.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do I need SEO or funnel optimization first?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'If your website gets less than 300–500 monthly visitors, start with SEO. If your website gets traffic but leads are below 2–5% conversion, start with funnel optimization.',
            },
          },
          {
            '@type': 'Question',
            name: 'Do you guarantee rankings, leads, or sales?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'No. We do not guarantee fake numbers. We build the SEO, content, landing page, and funnel system that improves your chance of qualified traffic and conversions.',
            },
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
