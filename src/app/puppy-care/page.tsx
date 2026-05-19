import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllSlugs, getArticle } from './data';

const baseUrl = 'https://www.dogyearsinhumanyears.com';

export const metadata: Metadata = {
  title: 'Puppy Care Guides | New Puppy Checklist, Feeding, Training & More',
  description: 'Essential puppy care guides covering new puppy checklists, feeding schedules, house training, crate training, socialization, and basic obedience for new puppy owners.',
  openGraph: {
    title: 'Puppy Care Guides | Complete Puppy Care Resources',
    description: 'Essential puppy care guides covering new puppy checklists, feeding schedules, house training, crate training, socialization, and basic obedience.',
    url: `${baseUrl}/puppy-care`,
  },
  alternates: { canonical: `${baseUrl}/puppy-care` },
};

export default function PuppyCare() {
  const slugs = getAllSlugs();

  return (
    <div className="container-main" style={{ paddingTop: '15px', paddingBottom: '30px' }}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> &raquo; Puppy Care
      </div>
      <div className="section-box">
        <h1>Puppy Care Guides</h1>
        <p className="text-muted">Everything you need to know about raising a happy, healthy puppy from day one.</p>
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
                  <Link href={`/puppy-care/${slug}`}>{article.title}</Link>
                </h3>
                <p style={{ fontSize: '13px', color: '#555', marginBottom: '6px' }}>{article.intro.substring(0, 160)}...</p>
                <div style={{ fontSize: '11px', color: '#999' }}>
                  <span style={{ background: '#fff8f0', border: '1px solid #e5d0b5', padding: '1px 6px', marginRight: '8px' }}>{article.category}</span>
                  <span>January 15, 2026</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="section-box" style={{ textAlign: 'center' }}>
        <p className="text-muted">
          <strong>More puppy care guides coming soon!</strong> Check back regularly or <Link href="/contact">contact us</Link> to suggest a topic.
        </p>
      </div>
    </div>
  );
}
