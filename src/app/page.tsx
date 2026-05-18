import { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/layout/Hero';
import Calculator from '@/components/ui/Calculator';
import DogAgeChart from '@/components/ui/DogAgeChart';
import FAQSection from '@/components/ui/FAQSection';
import SEOArticleContent from '@/components/ui/SEOArticleContent';
import SidebarWidgets from '@/components/ui/SidebarWidgets';

export const metadata: Metadata = {
  title: 'Dog Years to Human Years Calculator | Free Dog Age Calculator 2026',
  description: 'Convert dog years to human years with our free scientifically-accurate dog age calculator. Includes dog age chart, size-specific calculations, FAQ, and comprehensive dog aging guide.',
  keywords: 'dog years to human years, dog age calculator, dog years chart, dog age in human years, how old is my dog in human years, dog age conversion, dog years calculator, puppy age calculator, senior dog age',
  openGraph: {
    title: 'Dog Years to Human Years Calculator | Free Dog Age Calculator',
    description: 'Convert dog years to human years with our free scientifically-accurate dog age calculator. Includes dog age chart, size-specific calculations, and comprehensive dog aging guide.',
    type: 'website',
    url: 'https://www.dogyearsinhumanyears.com',
  },
  alternates: {
    canonical: 'https://www.dogyearsinhumanyears.com',
  },
};

export default function Home() {
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you calculate dog years in human years?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The traditional 1:7 ratio is outdated. Modern science shows dogs age faster in their first two years, then the rate varies by size. Small dogs age about 4 human years per dog year after age 2, while large dogs age about 6-7 human years per dog year."
        }
      },
      {
        "@type": "Question",
        "name": "Is the 7-year rule for dog years accurate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, the 7-year rule is a myth. Dogs age much faster in their first two years of life, and the aging rate varies significantly based on the dog's size and breed. The first year equals about 15 human years."
        }
      },
      {
        "@type": "Question",
        "name": "How old is a 10-year-old dog in human years?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 10-year-old small dog is about 56 human years, a medium dog about 64 human years, and a large dog about 80 human years. Large dogs age faster, which is why their human age equivalent is higher."
        }
      },
      {
        "@type": "Question",
        "name": "Why do small dogs live longer than large dogs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Scientists believe larger dogs age faster due to higher growth rates and metabolic demands. Large breed puppies grow much more rapidly, which may accelerate cellular aging. Research also suggests large dogs have higher levels of growth hormone IGF-1."
        }
      },
      {
        "@type": "Question",
        "name": "What are the life stages of a dog?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Dogs go through five main life stages: Puppy (0-1 year), Young Adult (1-2 years), Adult (varies by size), Senior (varies by size), and Geriatric. Small dogs enter seniorhood around 10 years while large dogs become seniors as early as 6 years."
        }
      }
    ]
  };

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Ultimate Guide to Dog Years and Canine Aging",
    "description": "Comprehensive guide to understanding dog years, how dogs age, and how to convert dog years to human years using modern veterinary science.",
    "author": {
      "@type": "Organization",
      "name": "Dog Years in Human Years"
    },
    "datePublished": "2024-01-15",
    "dateModified": "2026-01-15",
    "publisher": {
      "@type": "Organization",
      "name": "Dog Years in Human Years"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleStructuredData),
        }}
      />

      <div className="container-main">
        {/* Top Banner Ad */}
        <div className="ad-space ad-top-banner">
          <div className="ad-label">Advertisement</div>
          <div style={{ padding: '15px', color: '#999' }}>Top Banner Ad Space - 728x90</div>
        </div>

        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link href="/">Home</Link> &raquo; Dog Years to Human Years Calculator
        </div>

        {/* Hero */}
        <Hero />

        {/* Trust Bar */}
        <div className="trust-bar">
          <strong>&#10003; Trusted by dog owners since 2013</strong> &nbsp;|&nbsp;
          <strong>&#10003; Updated for 2026</strong> &nbsp;|&nbsp;
          <strong>&#10003; Vet-reviewed formulas</strong> &nbsp;|&nbsp;
          <strong>&#10003; Free to use</strong>
          &nbsp;|&nbsp; <span className="visitor-counter">1,248,293</span> calculations made
        </div>

        {/* Main Content + Sidebar */}
        <div className="content-wrapper">
          <div className="main-content">
            {/* Calculator */}
            <Calculator />

            {/* Ad Below Calculator */}
            <div className="ad-space ad-in-content">
              <div className="ad-label">Advertisement</div>
              <div style={{ padding: '15px', color: '#999' }}>Ad Space - 728x90</div>
            </div>

            {/* Dog Age Chart */}
            <DogAgeChart />

            {/* Ad In Content */}
            <div className="ad-space ad-in-content">
              <div className="ad-label">Advertisement</div>
              <div style={{ padding: '15px', color: '#999' }}>Ad Space - 728x90</div>
            </div>

            {/* FAQ Section */}
            <FAQSection />

            {/* Ad Before Article */}
            <div className="ad-space ad-in-content">
              <div className="ad-label">Advertisement</div>
              <div style={{ padding: '15px', color: '#999' }}>Ad Space - 728x90</div>
            </div>

            {/* SEO Article Content */}
            <SEOArticleContent />
          </div>

          {/* Sidebar */}
          <div className="sidebar">
            <SidebarWidgets />
          </div>
        </div>
      </div>
    </>
  );
}