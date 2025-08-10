import { Metadata } from 'next';
import Hero from '@/components/layout/Hero';
import Calculator from '@/components/ui/Calculator';
import UserTestimonials from '@/components/ui/UserTestimonials';
import HowItWorks from '@/components/ui/HowItWorks';
import InterestingFacts from '@/components/ui/InterestingFacts';
import FeaturedArticles from '@/components/ui/FeaturedArticles';

export const metadata: Metadata = {
  title: 'Dog Years in Human Years Calculator - Convert Your Pet\'s Age Accurately',
  description: 'Calculate your dog\'s age in human years with our scientific calculator. Learn how old your dog is in human years, understand canine aging, and discover fascinating facts about dog lifespan and health.',
  keywords: 'dog years in human years, dog age calculator, pet age converter, how old is my dog in human years, canine aging calculator, dog lifespan, pet health calculator, dog years conversion',
  openGraph: {
    title: 'Dog Years in Human Years Calculator - Convert Your Pet\'s Age Accurately',
    description: 'Calculate your dog\'s age in human years with our scientific calculator. Learn how old your dog is in human years and understand canine aging.',
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
          "text": "The traditional 1:7 ratio is outdated. Modern science shows that dogs age faster in their first two years, then the aging rate varies by size. Small dogs age about 4 human years per dog year after age 2, while large dogs age about 6-7 human years per dog year."
        }
      },
      {
        "@type": "Question",
        "name": "Is the 7-year rule for dog years accurate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, the 7-year rule is a myth. Dogs age much faster in their first two years of life, and the aging rate varies significantly based on the dog's size and breed."
        }
      },
      {
        "@type": "Question",
        "name": "How old is a 10-year-old dog in human years?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A 10-year-old dog's age in human years depends on their size. Small dogs (under 20 lbs) would be about 56 human years, medium dogs (21-50 lbs) about 60 human years, and large dogs (over 50 lbs) about 66 human years."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      <main>
        <Hero />
        <Calculator />
        <UserTestimonials />
        <HowItWorks />
        <InterestingFacts />
        <FeaturedArticles />
      </main>
    </>
  );
}
