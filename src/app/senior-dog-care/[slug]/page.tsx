import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getArticle, getAllSlugs } from '../data';

const baseUrl = 'https://www.dogyearsinhumanyears.com';

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return { title: 'Article Not Found' };
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.relatedSearches.join(', '),
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: 'article',
      url: `${baseUrl}/senior-dog-care/${slug}`,
    },
    alternates: { canonical: `${baseUrl}/senior-dog-care/${slug}` },
  };
}

export default async function SeniorCareArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "author": { "@type": "Organization", "name": "Dog Years in Human Years" },
    "datePublished": "2026-01-15",
    "dateModified": "2026-01-15",
    "publisher": { "@type": "Organization", "name": "Dog Years in Human Years" }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div className="container-main" style={{ paddingTop: '15px', paddingBottom: '30px' }}>
        <div className="breadcrumb">
          <Link href="/">Home</Link> &raquo; <Link href="/senior-dog-care">Senior Dog Care</Link> &raquo; {article.title}
        </div>
        <div className="ad-space ad-top-banner">
          <div className="ad-label">Advertisement</div>
          <div style={{ padding: '15px', color: '#999' }}>Ad Space - 728x90</div>
        </div>
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 450px' }}>
            <div className="section-box">
              <h1>{article.title}</h1>
              <div style={{ fontSize: '12px', color: '#777', marginBottom: '15px' }}>
                <span style={{ background: '#f0f0ff', border: '1px solid #d5d5ff', padding: '2px 8px' }}>{article.category}</span>
                <span style={{ marginLeft: '10px' }}>Updated: January 15, 2026</span>
              </div>
              <div className="article-content">
                <p style={{ fontWeight: 'bold', color: '#333' }}>{article.intro}</p>
                <div className="ad-space ad-in-content">
                  <div className="ad-label">Advertisement</div>
                  <div style={{ padding: '10px', color: '#999' }}>In-Content Ad Space</div>
                </div>
                {article.sections.map((section, i) => (
                  <div key={i}>
                    <h2>{section.heading}</h2>
                    <p>{section.content}</p>
                    {(i + 1) % 2 === 0 && (
                      <div className="ad-space ad-in-content" style={{ margin: '15px 0' }}>
                        <div className="ad-label">Advertisement</div>
                        <div style={{ padding: '10px', color: '#999' }}>In-Content Ad Space</div>
                      </div>
                    )}
                  </div>
                ))}
                <h2>Expert Tips</h2>
                <ol>
                  {article.tips.map((tip, i) => <li key={i}><strong>{tip}</strong></li>)}
                </ol>
                <div className="related-links">
                  <strong>Related Articles:</strong><br />
                  <Link href="/#calculator">Use our Dog Age Calculator</Link> |
                  <Link href="/senior-dog-care/senior-dog-nutrition">Senior Dog Nutrition Guide</Link> |
                  <Link href="/guides">Browse all Breed Lifespan Guides</Link>
                </div>
              </div>
            </div>
          </div>
          <div style={{ flex: '1 1 280px', minWidth: '280px' }}>
            <div className="widget">
              <h3>Senior Dog Care Guides</h3>
              <ul>
                {getAllSlugs().map((s) => {
                  const a = getArticle(s);
                  if (!a) return null;
                  return <li key={s}><Link href={`/senior-dog-care/${s}`}>{a.title}</Link></li>;
                })}
              </ul>
            </div>
            <div className="ad-space ad-sidebar">
              <div className="ad-label">Advertisement</div>
              <div style={{ padding: '20px', color: '#999' }}>Ad Space - 300x250</div>
            </div>
            <div className="widget">
              <h3>Popular Resources</h3>
              <ul>
                <li><Link href="/#calculator">Dog Age Calculator</Link></li>
                <li><Link href="/#age-chart">Dog Age Chart</Link></li>
                <li><Link href="/#faq">Dog Years FAQ</Link></li>
                <li><Link href="/guides">Breed Lifespan Guides</Link></li>
                <li><Link href="/dog-health-tips">Dog Health Tips</Link></li>
                <li><Link href="/puppy-care">Puppy Care</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
