import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllSlugs, getArticle } from './data';

const baseUrl = 'https://www.dogyearsinhumanyears.com';

export const metadata: Metadata = {
  title: 'Senior Dog Care Guides | Nutrition, Exercise, and Aging Care for Older Dogs',
  description: 'Comprehensive senior dog care guides covering nutrition, exercise, cognitive health, chronic pain management, and end-of-life care for your aging best friend.',
  openGraph: {
    title: 'Senior Dog Care Guides | Complete Guide to Caring for Aging Dogs',
    description: 'Comprehensive senior dog care guides covering nutrition, exercise, cognitive health, chronic pain management, and end-of-life care.',
    url: `${baseUrl}/senior-dog-care`,
  },
  alternates: { canonical: `${baseUrl}/senior-dog-care` },
};

export default function SeniorDogCare() {
  const slugs = getAllSlugs();

  return (
    <div className="container-main" style={{ paddingTop: '15px', paddingBottom: '30px' }}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> &raquo; Senior Dog Care
      </div>
      <div className="section-box">
        <h1>Senior Dog Care</h1>
        <p className="text-muted">Helping your best friend age gracefully with expert advice on nutrition, exercise, and health management.</p>
      </div>
      {slugs.map((slug, i) => {
        const article = getArticle(slug);
        if (!article) return null;
        return (
          <div key={slug} className="section-box" style={{ padding: '16px 20px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'flex-start' }}>
              <div style={{ background: '#e8e8e8', border: '1px solid #ccc', padding: '3px 8px', fontSize: '12px', fontWeight: 'bold', color: '#555', flexShrink: 0, minWidth: '30px', textAlign: 'center' }}>
                {String(i + 1).padStart(2, '0')}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontSize: '16px', margin: '0 0 6px 0' }}>
                  <Link href={`/senior-dog-care/${slug}`}>{article.title}</Link>
                </h3>
                <p style={{ fontSize: '13px', color: '#555', marginBottom: '6px' }}>{article.intro.substring(0, 160)}...</p>
                <div style={{ fontSize: '11px', color: '#999' }}>
                  <span style={{ background: '#f0f0ff', border: '1px solid #d5d5ff', padding: '1px 6px', marginRight: '8px' }}>{article.category}</span>
                  <span>January 15, 2026</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="section-box" style={{ textAlign: 'center' }}>
        <p className="text-muted">
          <strong>More senior care guides coming soon!</strong> Check back regularly or <Link href="/contact">contact us</Link> to suggest a topic.
        </p>
      </div>
    </div>
  );
}
