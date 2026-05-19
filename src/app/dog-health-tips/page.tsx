import Link from 'next/link';
import type { Metadata } from 'next';
import { getAllSlugs, getArticle } from './data';

const baseUrl = 'https://www.dogyearsinhumanyears.com';

export const metadata: Metadata = {
  title: 'Dog Health Tips | Expert Guides on Dog Nutrition, Dental Care, and Illness Prevention',
  description: 'Expert dog health tips covering nutrition, dental care, common illnesses, supplements, and more. Keep your dog healthy with our in-depth health guides.',
  openGraph: {
    title: 'Dog Health Tips | Expert Dog Health Guides',
    description: 'Expert dog health tips covering nutrition, dental care, common illnesses, supplements, and more.',
    url: `${baseUrl}/dog-health-tips`,
  },
  alternates: { canonical: `${baseUrl}/dog-health-tips` },
};

export default function DogHealthTips() {
  const slugs = getAllSlugs();

  return (
    <div className="container-main" style={{ paddingTop: '15px', paddingBottom: '30px' }}>
      <div className="breadcrumb">
        <Link href="/">Home</Link> &raquo; Dog Health Tips
      </div>
      <div className="section-box">
        <h1>Dog Health Tips</h1>
        <p className="text-muted">Expert guides to help you keep your dog healthy and happy throughout their life.</p>
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
                  <Link href={`/dog-health-tips/${slug}`}>{article.title}</Link>
                </h3>
                <p style={{ fontSize: '13px', color: '#555', marginBottom: '6px' }}>{article.intro.substring(0, 160)}...</p>
                <div style={{ fontSize: '11px', color: '#999' }}>
                  <span style={{ background: '#f0fff0', border: '1px solid #c5e5c5', padding: '1px 6px', marginRight: '8px' }}>{article.category}</span>
                  <span>January 15, 2026</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="section-box" style={{ textAlign: 'center' }}>
        <p className="text-muted">
          <strong>More health guides coming soon!</strong> Check back regularly or <Link href="/contact">contact us</Link> to suggest a topic.
        </p>
      </div>
    </div>
  );
}
