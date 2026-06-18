import type { Metadata } from 'next';
import '../styles/globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollToTop from '@/components/ui/ScrollToTop';

export const metadata: Metadata = {
  metadataBase: new URL('https://tresifylab.com'),
  title: {
    default: 'SEO & Funnel Agency For Service Businesses | Tresify Lab',
    template: '%s | Tresify Lab',
  },
  description:
    'We help service businesses get more organic traffic and turn visitors into qualified leads through SEO and funnel optimization.',
  keywords: [
    'seo agency',
    'funnel optimization',
    'organic traffic',
    'service business SEO',
    'lead generation SEO',
  ],
  authors: [{ name: 'Sheikh' }],
  creator: 'Tresify Lab',
  publisher: 'Tresify Lab',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-video-preview': -1,
      'max-image-preview': 'large',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tresifylab.com',
    siteName: 'Tresify Lab',
    title: 'SEO & Funnel Agency For Service Businesses | Tresify Lab',
    description:
      'We help service businesses get more organic traffic and turn visitors into qualified leads through SEO and funnel optimization.',
    images: [
      {
        url: 'https://tresifylab.com/wp-content/uploads/2026/05/icon.png',
        width: 448,
        height: 388,
        alt: 'Tresify Lab - SEO & Funnel Optimization Agency icon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SEO & Funnel Agency For Service Businesses | Tresify Lab',
    description:
      'We help service businesses get more organic traffic and turn visitors into qualified leads through SEO and funnel optimization.',
    images: ['https://tresifylab.com/wp-content/uploads/2026/05/icon.png'],
    creator: '@tresifylab',
  },
  alternates: {
    canonical: 'https://tresifylab.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
