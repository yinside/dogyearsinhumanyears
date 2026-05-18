import Link from 'next/link';

const articles = [
  {
    slug: 'labrador-retriever-lifespan',
    title: 'Labrador Retriever Lifespan: How Long Do Labs Live?',
    description: 'Learn about the average Labrador Retriever lifespan, common health issues, and tips to help your Lab live a longer, healthier life.',
    category: 'Breed Lifespan',
    date: 'January 15, 2026',
  },
  {
    slug: 'german-shepherd-lifespan',
    title: 'German Shepherd Lifespan and Health Guide',
    description: 'Everything you need to know about German Shepherd life expectancy, common health concerns, and how to maximize your GSD&apos;s healthy years.',
    category: 'Breed Lifespan',
    date: 'January 15, 2026',
  },
  {
    slug: 'golden-retriever-lifespan',
    title: 'Golden Retriever Lifespan: Complete Care Guide',
    description: 'Discover how long Golden Retrievers live, factors that affect their lifespan, and expert tips for keeping your Golden healthy through every life stage.',
    category: 'Breed Lifespan',
    date: 'January 15, 2026',
  },
  {
    slug: 'french-bulldog-lifespan',
    title: 'French Bulldog Lifespan: What French Bulldog Owners Should Know',
    description: 'A comprehensive guide to French Bulldog life expectancy, breed-specific health issues, and how to provide the best care for your Frenchie.',
    category: 'Breed Lifespan',
    date: 'January 15, 2026',
  },
  {
    slug: 'beagle-lifespan',
    title: 'Beagle Lifespan: How Long Do Beagles Live?',
    description: 'Learn about Beagle life expectancy, common health problems, nutrition needs, and how to ensure your Beagle stays healthy for years to come.',
    category: 'Breed Lifespan',
    date: 'January 15, 2026',
  },
  {
    slug: 'chihuahua-lifespan',
    title: 'Chihuahua Lifespan: Why Chihuahuas Live So Long',
    description: 'Discover why Chihuahuas are one of the longest-living dog breeds, their average lifespan, and how to care for a senior Chihuahua.',
    category: 'Breed Lifespan',
    date: 'January 15, 2026',
  },
  {
    slug: 'poodle-lifespan',
    title: 'Poodle Lifespan: Toy, Miniature, and Standard Poodle Life Expectancy',
    description: 'Compare Poodle lifespans across all sizes. Learn about Toy Poodle, Miniature Poodle, and Standard Poodle life expectancy and health tips.',
    category: 'Breed Lifespan',
    date: 'January 15, 2026',
  },
  {
    slug: 'yorkshire-terrier-lifespan',
    title: 'Yorkshire Terrier Lifespan: How Long Do Yorkies Live?',
    description: 'A complete guide to Yorkshire Terrier life expectancy, common Yorkie health problems, and expert care tips for every stage of your Yorkie&apos;s life.',
    category: 'Breed Lifespan',
    date: 'January 15, 2026',
  },
  {
    slug: 'boxer-lifespan',
    title: 'Boxer Lifespan: How Long Do Boxers Live and How to Extend It',
    description: 'Learn about Boxer life expectancy, breed-specific health challenges, and proven strategies to help your Boxer live a longer, healthier life.',
    category: 'Breed Lifespan',
    date: 'January 15, 2026',
  },
  {
    slug: 'great-dane-lifespan',
    title: 'Great Dane Lifespan: Understanding the Gentle Giant&apos;s Years',
    description: 'Everything you need to know about Great Dane life expectancy, the challenges of giant breed aging, and how to care for your Dane at every age.',
    category: 'Breed Lifespan',
    date: 'January 15, 2026',
  },
];

const ArticlesList = () => {
  return (
    <div className="articles-list">
      <div className="section-box">
        <h2>All Articles</h2>
        <p className="text-muted mb-15">
          Browse our collection of articles about dog aging, breed lifespans, and pet care tips.
        </p>
      </div>

      {articles.map((article, index) => (
        <div key={article.slug} className="section-box" style={{ padding: '16px 20px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', alignItems: 'flex-start' }}>
            <div style={{
              background: '#e8e8e8',
              border: '1px solid #ccc',
              padding: '3px 8px',
              fontSize: '12px',
              fontWeight: 'bold',
              color: '#555',
              flexShrink: 0,
              minWidth: '80px',
              textAlign: 'center',
            }}>
              {String(index + 1).padStart(2, '0')}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3 style={{ fontSize: '16px', margin: '0 0 6px 0' }}>
                <Link href={`/guides/${article.slug}`}>{article.title}</Link>
              </h3>
              <p style={{ fontSize: '13px', color: '#555', marginBottom: '6px' }}>
                {article.description}
              </p>
              <div style={{ fontSize: '11px', color: '#999' }}>
                <span style={{
                  background: '#f0f0ff',
                  border: '1px solid #d5d5ff',
                  padding: '1px 6px',
                  marginRight: '8px',
                }}>
                  {article.category}
                </span>
                <span>{article.date}</span>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="section-box" style={{ textAlign: 'center' }}>
        <p className="text-muted">
          <strong>More articles coming soon!</strong> We are constantly adding new breed lifespan guides and
          dog care articles. Check back regularly or <Link href="/contact">contact us</Link> to suggest a topic.
        </p>
      </div>
    </div>
  );
};

export default ArticlesList;