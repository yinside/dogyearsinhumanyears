import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getBreedArticle, getAllBreedSlugs } from '../breedData';

const baseUrl = 'https://www.dogyearsinhumanyears.com';

export function generateStaticParams() {
  const slugs = getAllBreedSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getBreedArticle(slug);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.relatedSearches.join(', '),
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: 'article',
      url: `${baseUrl}/guides/${slug}`,
    },
    alternates: {
      canonical: `${baseUrl}/guides/${slug}`,
    },
  };
}

export default async function BreedArticle({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getBreedArticle(slug);

  if (!article) notFound();

  const articleStructuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "author": {
      "@type": "Organization",
      "name": "Dog Years in Human Years"
    },
    "datePublished": "2024-06-01",
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
          __html: JSON.stringify(articleStructuredData),
        }}
      />

      <div className="container-main" style={{ paddingTop: '15px', paddingBottom: '30px' }}>
        <div className="breadcrumb">
          <Link href="/">Home</Link> &raquo; <Link href="/guides">Guides</Link> &raquo; {article.title}
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
                <span style={{ background: '#f0f0ff', border: '1px solid #d5d5ff', padding: '2px 8px' }}>
                  Breed Lifespan
                </span>
                <span style={{ marginLeft: '10px' }}>Updated: January 15, 2026</span>
              </div>

              {article.imageUrl && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={article.imageUrl}
                  alt={article.breedName}
                  style={{
                    width: '100%',
                    maxWidth: '400px',
                    height: 'auto',
                    border: '1px solid #ccc',
                    marginBottom: '15px',
                    display: 'block',
                  }}
                />
              )}

              <div style={{
                background: '#f7f7f7',
                border: '1px solid #ccc',
                padding: '14px',
                marginBottom: '15px',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
              }}>
                <div style={{ flex: '1 1 120px' }}>
                  <strong>Size:</strong><br />
                  <span style={{ color: '#555' }}>{article.size}</span>
                </div>
                <div style={{ flex: '1 1 120px' }}>
                  <strong>Weight:</strong><br />
                  <span style={{ color: '#555' }}>{article.weight}</span>
                </div>
                <div style={{ flex: '1 1 120px' }}>
                  <strong>Avg Lifespan:</strong><br />
                  <span style={{ color: '#555' }}>{article.lifespan}</span>
                </div>
                <div style={{ flex: '1 1 140px' }}>
                  <strong>Human Age at 5:</strong><br />
                  <span style={{ color: '#555' }}>{article.humanAgeAt5}</span>
                </div>
                <div style={{ flex: '1 1 140px' }}>
                  <strong>Human Age at 10:</strong><br />
                  <span style={{ color: '#555' }}>{article.humanAgeAt10}</span>
                </div>
              </div>

              <div className="article-content">
                <h2>Overview</h2>
                <p>{article.overview}</p>

                <div className="ad-space ad-in-content">
                  <div className="ad-label">Advertisement</div>
                  <div style={{ padding: '10px', color: '#999' }}>In-Content Ad Space</div>
                </div>

                <h2>Factors That Affect {article.breedName} Lifespan</h2>
                <p>Several key factors influence how long a {article.breedName} lives:</p>
                <ul>
                  {article.lifespanFactors.map((factor, i) => (
                    <li key={i}>{factor}</li>
                  ))}
                </ul>

                <div className="ad-space ad-in-content">
                  <div className="ad-label">Advertisement</div>
                  <div style={{ padding: '10px', color: '#999' }}>In-Content Ad Space</div>
                </div>

                <h2>Common Health Issues in {article.breedName}s</h2>
                <p>Understanding breed-specific health conditions helps owners recognize problems early:</p>

                <table className="table-old" style={{ marginTop: '10px' }}>
                  <thead>
                    <tr>
                      <th style={{ width: '30%' }}>Health Issue</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {article.commonHealthIssues.map((item, i) => (
                      <tr key={i}>
                        <td><strong>{item.issue}</strong></td>
                        <td>{item.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="ad-space ad-in-content">
                  <div className="ad-label">Advertisement</div>
                  <div style={{ padding: '10px', color: '#999' }}>In-Content Ad Space</div>
                </div>

                <h2>{article.breedName} Care by Life Stage</h2>
                <p>Your {article.breedName}&apos;s care needs change significantly throughout their life:</p>

                {article.lifeStageCare.map((stage, i) => (
                  <div key={i} style={{ marginBottom: '16px' }}>
                    <h4>{stage.stage}</h4>
                    <p>{stage.description}</p>
                  </div>
                ))}

                <h2>Expert Tips for Extending Your {article.breedName}&apos;s Lifespan</h2>
                <ol>
                  {article.tips.map((tip, i) => (
                    <li key={i}><strong>{tip}</strong></li>
                  ))}
                </ol>

                <h2>Life Stage Overview</h2>
                <div style={{
                  background: '#f7f7f7',
                  border: '1px solid #ccc',
                  padding: '12px',
                  fontSize: '13px',
                  marginBottom: '15px',
                }}>
                  <strong>Typical Life Stages for {article.breedName}:</strong><br />
                  {article.lifeStages}
                </div>

                <div className="related-links">
                  <strong>Related Articles:</strong><br />
                  <Link href="/#calculator">Use our Dog Age Calculator</Link> to find your {article.breedName}&apos;s age in human years |
                  <Link href="/#age-chart">View the complete Dog Age Chart</Link> |
                  <Link href="/guides">Browse all Breed Lifespan Guides</Link>
                </div>
              </div>
            </div>
          </div>

          <div style={{ flex: '1 1 280px', minWidth: '280px' }}>
            <div className="widget">
              <h3>{article.breedName} Quick Facts</h3>
              <ul>
                <li><strong>Average Lifespan:</strong> {article.avgLifespan}</li>
                <li><strong>Size Category:</strong> {article.size}</li>
                <li><strong>Weight Range:</strong> {article.weight}</li>
                <li><strong>Human Age at 5:</strong> {article.humanAgeAt5}</li>
                <li><strong>Human Age at 10:</strong> {article.humanAgeAt10}</li>
              </ul>
            </div>

            <div className="ad-space ad-sidebar">
              <div className="ad-label">Advertisement</div>
              <div style={{ padding: '20px', color: '#999' }}>Ad Space - 300x250</div>
            </div>

            <div className="widget">
              <h3>Related Searches</h3>
              <ul>
                {article.relatedSearches.map((search, i) => (
                  <li key={i}>
                    <span style={{ color: '#551A8B', cursor: 'pointer', textDecoration: 'underline' }}>
                      {search}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="widget">
              <h3>More Breed Articles</h3>
              <ul>
                {getAllBreedSlugs()
                  .filter((s) => s !== slug)
                  .slice(0, 5)
                  .map((s) => {
                    const a = getBreedArticle(s);
                    if (!a) return null;
                    return (
                      <li key={s}>
                        <Link href={`/guides/${s}`}>{a.breedName} Lifespan</Link>
                      </li>
                    );
                  })}
                <li><Link href="/guides">View all 50 guides &raquo;</Link></li>
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
                <li><Link href="/#article">Dog Aging Guide</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}