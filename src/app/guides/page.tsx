import Link from 'next/link';
import type { Metadata } from 'next';
import ArticlesList from './ArticlesList';

export const metadata: Metadata = {
  title: 'Dog Breed Lifespan Guides | Dog Age Calculator',
  description: 'Browse our collection of 10 in-depth dog breed lifespan guides. Learn about Labrador Retriever, German Shepherd, Golden Retriever, French Bulldog, Beagle, Chihuahua, Poodle, Yorkie, Boxer, and Great Dane lifespans.',
  keywords: 'dog breed lifespan, how long do dogs live, breed life expectancy, dog health guides, breed lifespan guide',
};

export default function Guides() {
  return (
    <div className="container-main" style={{ paddingTop: '15px', paddingBottom: '30px' }}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> &raquo; Guides
      </div>

      <div className="section-box">
        <h1 style={{ marginBottom: '5px' }}>Dog Breed Guides &amp; Care Resources</h1>
        <p style={{ fontSize: '14px', color: '#555' }}>
          In-depth guides about dog breed lifespans, health concerns, and expert care tips.
          Learn how to help your dog live a longer, healthier life.
        </p>
      </div>

      <div className="ad-space ad-top-banner">
        <div className="ad-label">Advertisement</div>
        <div style={{ padding: '15px', color: '#999' }}>Ad Space - 728x90</div>
      </div>

      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 450px' }}>
          <ArticlesList />
        </div>
        <div style={{ flex: '1 1 280px', minWidth: '280px' }}>
          <div className="widget">
            <h3>Popular Resources</h3>
            <ul>
              <li><Link href="/#calculator">Dog Age Calculator</Link></li>
              <li><Link href="/#age-chart">Dog Age Chart</Link></li>
              <li><Link href="/#article">Dog Aging Guide</Link></li>
              <li><Link href="/#faq">Dog Years FAQ</Link></li>
            </ul>
          </div>

          <div className="widget">
            <h3>Guide Categories</h3>
            <ul>
              <li><Link href="/guides">Breed Lifespans (10 guides)</Link></li>
              <li><Link href="/guides">Dog Health Tips (coming soon)</Link></li>
              <li><Link href="/guides">Puppy Care (coming soon)</Link></li>
              <li><Link href="/guides">Senior Dog Care (coming soon)</Link></li>
            </ul>
          </div>

          <div className="ad-space ad-sidebar">
            <div className="ad-label">Advertisement</div>
            <div style={{ padding: '20px', color: '#999' }}>Ad Space - 300x250</div>
          </div>

          <div className="widget">
            <h3>Quick Links</h3>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}