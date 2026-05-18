'use client';

import { useState, useEffect } from 'react';

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
    { breed: 'Labrador Retriever', lifespan: '10-12 years' },
    { breed: 'German Shepherd', lifespan: '9-12 years' },
    { breed: 'Golden Retriever', lifespan: '10-13 years' },
    { breed: 'Bulldog', lifespan: '8-10 years' },
    { breed: 'Beagle', lifespan: '12-15 years' },
    { breed: 'Poodle (Toy)', lifespan: '14-16 years' },
    { breed: 'Yorkshire Terrier', lifespan: '13-15 years' },
    { breed: 'Boxer', lifespan: '9-12 years' },
    { breed: 'Dachshund', lifespan: '12-15 years' },
    { breed: 'Great Dane', lifespan: '8-10 years' },
  ];

  const relatedTools = [
    { name: 'Cat Years Calculator', href: '/cat-years-calculator' },
    { name: 'Puppy Growth Calculator', href: '/puppy-growth-calculator' },
    { name: 'Dog Weight Calculator', href: '/dog-weight-calculator' },
    { name: 'Pet Calorie Calculator', href: '/pet-calorie-calculator' },
    { name: 'Dog Breed Selector', href: '/dog-breed-selector' },
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

      {/* Ad Space */}
      <div className="ad-space ad-sidebar">
        <div className="ad-label">Advertisement</div>
        <div style={{ padding: '20px', color: '#999' }}>Ad Space - 300x250</div>
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
        <h3>Popular Dog Breeds &amp; Lifespan</h3>
        <ul>
          {popularBreeds.map((item, i) => (
            <li key={i}>
              <strong>{item.breed}</strong>
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

      {/* Another Ad Space */}
      <div className="ad-space ad-sidebar">
        <div className="ad-label">Advertisement</div>
        <div style={{ padding: '20px', color: '#999' }}>Ad Space - 300x250</div>
      </div>
    </aside>
  );
};

export default SidebarWidgets;