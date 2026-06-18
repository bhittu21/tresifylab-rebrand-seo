import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import TwoProblems from '@/components/sections/TwoProblems';
import HowItWorks from '@/components/sections/HowItWorks';
import Pricing from '@/components/sections/Pricing';
import Services from '@/components/sections/Services';
import CaseStudies from '@/components/sections/CaseStudies';
import AuditSection from '@/components/sections/AuditSection';
import FAQ from '@/components/sections/FAQ';
import StructuredData from '@/components/ui/StructuredData';


export const metadata: Metadata = {
  title: 'SEO & Funnel Agency For Service Businesses | Tresify Lab',
  description:
    'We help service businesses get more organic traffic and turn visitors into qualified leads through SEO and funnel optimization.',
  alternates: {
    canonical: 'https://tresifylab.com/',
  },
  openGraph: {
    url: 'https://tresifylab.com/',
    title: 'SEO & Funnel Agency For Service Businesses | Tresify Lab',
    description:
      'We help service businesses get more organic traffic and turn visitors into qualified leads through SEO and funnel optimization.',
  },
};

/**
 * Homepage – pixel-perfect replica of tresifylab.com
 * Sections (in order):
 *  1. Hero
 *  2. Two Problems
 *  3. How It Works
 *  4. Pricing
 *  5. Services
 *  6. Case Studies
 *  7. Audit Section (Free Growth Audit form)
 *  8. FAQ
 */
export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Hero />
      <TwoProblems />
      <HowItWorks />
      <Pricing />
      <Services />
      <CaseStudies />
      <AuditSection />
      <FAQ />
    </>
  );
}
