'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const SidebarWidgets = () => {
  const [visitorCount, setVisitorCount] = useState(1248293);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisitorCount((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const recentSearches = [
    "how old is my 3 year old dog",
    "dog years to human years chart",
    "golden retriever age in human years",
    "10 year old dog in human years",
    "puppy age calculator",
    "how old is a 5 year old dog",
    "senior dog age in human years",
    "chihuahua age in human years",
  ];

  const popularBreeds = [
    { breed: 'Labrador Retriever', lifespan: '10-12 years', slug: 'labrador-retriever-lifespan' },
    { breed: 'German Shepherd', lifespan: '9-12 years', slug: 'german-shepherd-lifespan' },
    { breed: 'Golden Retriever', lifespan: '10-13 years', slug: 'golden-retriever-lifespan' },
    { breed: 'Bulldog', lifespan: '8-10 years', slug: 'french-bulldog-lifespan' },
    { breed: 'Beagle', lifespan: '12-15 years', slug: 'beagle-lifespan' },
    { breed: 'Poodle (Toy)', lifespan: '14-16 years', slug: 'poodle-lifespan' },
    { breed: 'Yorkshire Terrier', lifespan: '13-15 years', slug: 'yorkshire-terrier-lifespan' },
    { breed: 'Boxer', lifespan: '9-12 years', slug: 'boxer-lifespan' },
    { breed: 'Dachshund', lifespan: '12-15 years', slug: 'dachshund-lifespan' },
    { breed: 'Great Dane', lifespan: '8-10 years', slug: 'great-dane-lifespan' },
  ];

  const relatedTools = [
    { name: 'All Dog Breed Lifespan Guides', href: '/guides' },
    { name: 'Labrador Retriever Lifespan', href: '/guides/labrador-retriever-lifespan' },
    { name: 'Golden Retriever Lifespan', href: '/guides/golden-retriever-lifespan' },
    { name: 'German Shepherd Lifespan', href: '/guides/german-shepherd-lifespan' },
    { name: 'Chihuahua Lifespan', href: '/guides/chihuahua-lifespan' },
  ];

  return (
    <aside>
      {/* Visitor Counter */}
      <div className="widget text-center">
        <h3>Calculations Made</h3>
        <div className="visitor-counter" style={{ fontSize: '16px' }}>
          {visitorCount.toLocaleString()}
        </div>
        <div className="text-small text-muted mt-10">and counting...</div>
      </div>

      {/* Recent Searches */}
      <div className="widget">
        <h3>Recent Searches</h3>
        <ul>
          {recentSearches.map((search, i) => (
            <li key={i}>
              <span style={{ color: '#551A8B', cursor: 'pointer', textDecoration: 'underline' }}>
                {search}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Breeds */}
      <div className="widget">
        <h3>Popular Breeds &amp; Lifespan</h3>
        <ul>
          {popularBreeds.map((item, i) => (
            <li key={i}>
              {item.slug ? (
                <Link href={`/guides/${item.slug}`}><strong>{item.breed}</strong></Link>
              ) : (
                <strong>{item.breed}</strong>
              )}
              <span className="text-muted" style={{ display: 'block', fontSize: '11px' }}>
                {item.lifespan}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Related Tools */}
      <div className="widget">
        <h3>Related Pet Tools</h3>
        <ul>
          {relatedTools.map((tool, i) => (
            <li key={i}>
              <a href={tool.href}>{tool.name}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Pet Care Tips */}
      <div className="widget">
        <h3>Quick Pet Care Tips</h3>
        <ul>
          <li>Feed age-appropriate dog food for optimal nutrition</li>
          <li>Brush your dog&apos;s teeth 2-3 times per week</li>
          <li>Keep your dog at a healthy weight to extend lifespan</li>
          <li>Schedule annual vet checkups for preventive care</li>
          <li>Socialize puppies during their critical 3-14 week period</li>
          <li>Provide mental stimulation with puzzle toys and training</li>
        </ul>
      </div>

      {/* Breed Articles Link */}
      <div className="widget">
        <h3>Breed Lifespan Guides</h3>
        <ul>
          <li><Link href="/guides/labrador-retriever-lifespan">Labrador Retriever Lifespan</Link></li>
          <li><Link href="/guides/german-shepherd-lifespan">German Shepherd Lifespan</Link></li>
          <li><Link href="/guides/golden-retriever-lifespan">Golden Retriever Lifespan</Link></li>
          <li><Link href="/guides/french-bulldog-lifespan">French Bulldog Lifespan</Link></li>
          <li><Link href="/guides/chihuahua-lifespan">Chihuahua Lifespan</Link></li>
          <li><Link href="/guides">View all 50 guides &raquo;</Link></li>
        </ul>
      </div>
    </aside>
  );
};

export default SidebarWidgets;