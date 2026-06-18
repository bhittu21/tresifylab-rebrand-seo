import type { Metadata } from 'next';
import BlogHero from '@/components/sections/BlogHero';
import BlogList from '@/components/sections/BlogList';
import AuditSection from '@/components/sections/AuditSection';

export const metadata: Metadata = {
  title: 'SEO & Conversion Tips For Service Businesses | Tresify Lab Blog',
  description:
    'SEO tips, funnel strategies, and conversion guides for service businesses. Practical insights you can act on today.',
  alternates: {
    canonical: 'https://tresifylab.com/blog/',
  },
  openGraph: {
    type: 'website',
    url: 'https://tresifylab.com/blog/',
    title: 'SEO & Conversion Tips For Service Businesses | Tresify Lab Blog',
    description:
      'SEO tips, funnel strategies, and conversion guides for service businesses. Practical insights you can act on today.',
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
    title: 'SEO & Conversion Tips For Service Businesses | Tresify Lab Blog',
    description:
      'SEO tips, funnel strategies, and conversion guides for service businesses. Practical insights you can act on today.',
    images: ['https://tresifylab.com/wp-content/uploads/2026/05/icon.png'],
  },
};

/**
 * Blog page – pixel-perfect replica of tresifylab.com/blog/
 * Sections (in order):
 *  1. Blog Hero
 *  2. Blog List (with category filters)
 *  3. Audit Section
 */
export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogList />
      <AuditSection />
    </>
  );
}
