'use client';

import { useState } from 'react';
import Link from 'next/link';

const articles = [
  { slug: 'labrador-retriever-lifespan', title: 'Labrador Retriever Lifespan: How Long Do Labs Live?', description: 'Learn about the average Labrador Retriever lifespan, common health issues, and tips to help your Lab live a longer, healthier life.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'german-shepherd-lifespan', title: 'German Shepherd Lifespan and Health Guide', description: 'Everything you need to know about German Shepherd life expectancy, common health concerns, and how to maximize your GSD\'s healthy years.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'golden-retriever-lifespan', title: 'Golden Retriever Lifespan: Complete Care Guide', description: 'Discover how long Golden Retrievers live, factors that affect their lifespan, and expert tips for keeping your Golden healthy through every life stage.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'french-bulldog-lifespan', title: 'French Bulldog Lifespan: What French Bulldog Owners Should Know', description: 'A comprehensive guide to French Bulldog life expectancy, breed-specific health issues, and how to provide the best care for your Frenchie.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'beagle-lifespan', title: 'Beagle Lifespan: How Long Do Beagles Live?', description: 'Learn about Beagle life expectancy, common health problems, nutrition needs, and how to ensure your Beagle stays healthy for years to come.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'chihuahua-lifespan', title: 'Chihuahua Lifespan: Why Chihuahuas Live So Long', description: 'Discover why Chihuahuas are one of the longest-living dog breeds, their average lifespan, and how to care for a senior Chihuahua.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'poodle-lifespan', title: 'Poodle Lifespan: Toy, Miniature, and Standard Poodle Life Expectancy', description: 'Compare Poodle lifespans across all sizes. Learn about Toy Poodle, Miniature Poodle, and Standard Poodle life expectancy and health tips.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'yorkshire-terrier-lifespan', title: 'Yorkshire Terrier Lifespan: How Long Do Yorkies Live?', description: 'A complete guide to Yorkshire Terrier life expectancy, common Yorkie health problems, and expert care tips for every stage of your Yorkie\'s life.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'boxer-lifespan', title: 'Boxer Lifespan: How Long Do Boxers Live and How to Extend It', description: 'Learn about Boxer life expectancy, breed-specific health challenges, and proven strategies to help your Boxer live a longer, healthier life.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'great-dane-lifespan', title: 'Great Dane Lifespan: Understanding the Gentle Giant\'s Years', description: 'Everything you need to know about Great Dane life expectancy, the challenges of giant breed aging, and how to care for your Dane at every age.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'shih-tzu-lifespan', title: 'Shih Tzu Lifespan: How Long Do Shih Tzus Live?', description: 'Complete Shih Tzu lifespan guide (10-16 years). Learn about brachycephalic issues, eye problems, dental disease, and expert care tips for your Shih Tzu.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'dachshund-lifespan', title: 'Dachshund Lifespan: How Long Do Dachshunds Live?', description: 'Complete Dachshund lifespan guide (12-16 years). Learn about IVDD prevention, obesity risks, and how to protect your Dachshund\'s long back.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'rottweiler-lifespan', title: 'Rottweiler Lifespan: How Long Do Rottweilers Live?', description: 'Complete Rottweiler lifespan guide (8-10 years). Learn about hip dysplasia, cancer risks, and how to maximize your Rottweiler\'s healthy years.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'siberian-husky-lifespan', title: 'Siberian Husky Lifespan: How Long Do Huskies Live?', description: 'Complete Siberian Husky lifespan guide (12-14 years). Learn about eye conditions, hip dysplasia, and keeping your Husky healthy through proper care.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'pembroke-welsh-corgi-lifespan', title: 'Pembroke Welsh Corgi Lifespan: How Long Do Corgis Live?', description: 'Complete Pembroke Welsh Corgi lifespan guide (12-15 years). Learn about IVDD prevention, hip dysplasia, DM, and protecting your Corgi\'s long back.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'doberman-pinscher-lifespan', title: 'Doberman Pinscher Lifespan: How Long Do Dobermans Live?', description: 'Complete Doberman lifespan guide (10-12 years). Learn about DCM, von Willebrand disease, and critical heart health monitoring.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'australian-shepherd-lifespan', title: 'Australian Shepherd Lifespan: How Long Do Australian Shepherds Live?', description: 'Complete Australian Shepherd lifespan guide (12-15 years). Learn about hip dysplasia, epilepsy, MDR1 drug sensitivity, and how to keep your Aussie thriving.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'cavalier-king-charles-spaniel-lifespan', title: 'Cavalier King Charles Spaniel Lifespan: How Long Do Cavaliers Live?', description: 'Complete Cavalier lifespan guide (9-14 years). Learn about mitral valve disease, syringomyelia, and how to care for your Cavalier at every life stage.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'boston-terrier-lifespan', title: 'Boston Terrier Lifespan: How Long Do Boston Terriers Live?', description: 'Complete Boston Terrier lifespan guide (11-13 years). Learn about brachycephalic issues, eye problems, and expert tips for keeping your Boston healthy.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'maltese-lifespan', title: 'Maltese Lifespan: How Long Do Maltese Dogs Live?', description: 'Complete Maltese lifespan guide (12-15 years). Learn about dental disease, tracheal collapse, white shaker syndrome, and how to care for your Maltese.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'miniature-schnauzer-lifespan', title: 'Miniature Schnauzer Lifespan: How Long Do Mini Schnauzers Live?', description: 'Complete Miniature Schnauzer lifespan guide (12-15 years). Learn about pancreatitis, bladder stones, eye problems, and how to keep your Mini Schnauzer healthy.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'shetland-sheepdog-lifespan', title: 'Shetland Sheepdog Lifespan: How Long Do Shelties Live?', description: 'Complete Sheltie lifespan guide (12-14 years). Learn about Collie Eye Anomaly, MDR1 drug sensitivity, dermatomyositis, and keeping your Sheltie thriving.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'bernese-mountain-dog-lifespan', title: 'Bernese Mountain Dog Lifespan: Understanding Their Brief But Beautiful Years', description: 'Complete Bernese Mountain Dog lifespan guide (7-10 years). Learn why Berners have short lives, cancer risks, and how to cherish every moment with your gentle giant.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'border-collie-lifespan', title: 'Border Collie Lifespan: How Long Do Border Collies Live?', description: 'Complete Border Collie lifespan guide (12-15 years). Learn about Collie Eye Anomaly, epilepsy, MDR1 sensitivity, and keeping the smartest breed healthy.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'bichon-frise-lifespan', title: 'Bichon Frise Lifespan: How Long Do Bichons Live?', description: 'Complete Bichon Frise lifespan guide (12-15 years). Learn about allergies, dental disease, bladder stones, and how to care for your fluffy Bichon at every age.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'cocker-spaniel-lifespan', title: 'Cocker Spaniel Lifespan: How Long Do Cocker Spaniels Live?', description: 'Complete Cocker Spaniel lifespan guide (12-15 years). Learn about ear infections, eye problems, hip dysplasia, and caring for your Cocker at every stage.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'english-bulldog-lifespan', title: 'English Bulldog Lifespan: How Long Do English Bulldogs Live?', description: 'Complete English Bulldog lifespan guide (8-10 years). Learn about brachycephalic syndrome, skin fold infections, and maximizing your Bulldog\'s health.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'pug-lifespan', title: 'Pug Lifespan: How Long Do Pugs Live?', description: 'Complete Pug lifespan guide (12-15 years). Learn about brachycephalic syndrome, eye problems, Pug Dog Encephalitis, and keeping your Pug healthy.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'pomeranian-lifespan', title: 'Pomeranian Lifespan: How Long Do Pomeranians Live?', description: 'Complete Pomeranian lifespan guide (12-16 years). Learn about tracheal collapse, dental disease, black skin disease, and how to keep your Pom thriving.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'havanese-lifespan', title: 'Havanese Lifespan: How Long Do Havanese Dogs Live?', description: 'Complete Havanese lifespan guide (13-16 years). Learn about patellar luxation, cataracts, Legg-Calve-Perthes disease, and care for your Havanese at every age.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'weimaraner-lifespan', title: 'Weimaraner Lifespan: How Long Do Weimaraners Live?', description: 'Complete Weimaraner lifespan guide (10-13 years). Learn about bloat prevention, hip dysplasia, separation anxiety, and keeping your Silver Ghost healthy.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'newfoundland-lifespan', title: 'Newfoundland Lifespan: How Long Do Newfoundlands Live?', description: 'Complete Newfoundland lifespan guide (8-10 years). Learn about hip dysplasia, heart disease, bloat, and caring for your gentle giant Newfie at every stage.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'basset-hound-lifespan', title: 'Basset Hound Lifespan: How Long Do Basset Hounds Live?', description: 'Complete Basset Hound lifespan guide (10-12 years). Learn about IVDD, ear infections, bloat, and caring for your Basset Hound through every stage.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'saint-bernard-lifespan', title: 'Saint Bernard Lifespan: How Long Do Saint Bernards Live?', description: 'Complete Saint Bernard lifespan guide (8-10 years). Learn about hip dysplasia, bloat, heart conditions, and how to maximize your Saint\'s healthy years.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'rhodesian-ridgeback-lifespan', title: 'Rhodesian Ridgeback Lifespan: How Long Do Rhodesian Ridgebacks Live?', description: 'Complete Ridgeback lifespan guide (10-12 years). Learn about hip dysplasia, dermoid sinus, bloat, and keeping your Ridgeback healthy at every age.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'west-highland-white-terrier-lifespan', title: 'West Highland White Terrier Lifespan: How Long Do Westies Live?', description: 'Complete Westie lifespan guide (12-16 years). Learn about skin allergies, dental disease, patellar luxation, and Westie care tips.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'scottish-terrier-lifespan', title: 'Scottish Terrier Lifespan: How Long Do Scottish Terriers Live?', description: 'Complete Scottish Terrier lifespan guide (11-13 years). Learn about Scottie Cramp, bladder cancer, von Willebrand disease, and Scottie care.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'akita-lifespan', title: 'Akita Lifespan: How Long Do Akitas Live?', description: 'Complete Akita lifespan guide (10-13 years). Learn about hip dysplasia, autoimmune diseases, bloat, sebaceous adenitis, and Akita care.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'cane-corso-lifespan', title: 'Cane Corso Lifespan: How Long Do Cane Corsos Live?', description: 'Complete Cane Corso lifespan guide (9-12 years). Learn about hip dysplasia, bloat, cherry eye, epilepsy, and Cane Corso care at every stage.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'papillon-lifespan', title: 'Papillon Lifespan: How Long Do Papillons Live?', description: 'Complete Papillon lifespan guide (13-16 years). Learn about patellar luxation, dental disease, PRA, tracheal collapse, and Papillon care at every age.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'chinese-shar-pei-lifespan', title: 'Chinese Shar-Pei Lifespan: How Long Do Shar-Peis Live?', description: 'Complete Shar-Pei lifespan guide (8-12 years). Learn about Shar-Pei Fever, skin fold infections, entropion, kidney disease, and Shar-Pei care.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'chow-chow-lifespan', title: 'Chow Chow Lifespan: How Long Do Chow Chows Live?', description: 'Complete Chow Chow lifespan guide (9-15 years). Learn about entropion, hip dysplasia, elbow dysplasia, bloat, and how to keep your Chow healthy.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'alaskan-malamute-lifespan', title: 'Alaskan Malamute Lifespan: How Long Do Alaskan Malamutes Live?', description: 'Complete Alaskan Malamute lifespan guide (10-14 years). Learn about hip dysplasia, bloat, inherited polyneuropathy, eye conditions, and Malamute care.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'irish-setter-lifespan', title: 'Irish Setter Lifespan: How Long Do Irish Setters Live?', description: 'Complete Irish Setter lifespan guide (12-15 years). Learn about bloat prevention, hip dysplasia, PRA, epilepsy, and Irish Setter care.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'staffordshire-bull-terrier-lifespan', title: 'Staffordshire Bull Terrier Lifespan: How Long Do Staffies Live?', description: 'Complete Staffordshire Bull Terrier lifespan guide (12-14 years). Learn about hip dysplasia, skin allergies, cataracts, L-2-HGA, and Staffy care.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'whippet-lifespan', title: 'Whippet Lifespan: How Long Do Whippets Live?', description: 'Complete Whippet lifespan guide (12-15 years). Learn about eye problems, heart murmurs, skin care, anesthesia sensitivity, and Whippet care.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'samoyed-lifespan', title: 'Samoyed Lifespan: How Long Do Samoyeds Live?', description: 'Complete Samoyed lifespan guide (12-14 years). Learn about hip dysplasia, eye conditions, diabetes, bloat, and keeping your Sammie healthy.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'belgian-malinois-lifespan', title: 'Belgian Malinois Lifespan: How Long Do Belgian Malinois Live?', description: 'Complete Belgian Malinois lifespan guide (14-16 years). Learn about hip dysplasia, epilepsy, PRA, and caring for this elite working breed.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'shiba-inu-lifespan', title: 'Shiba Inu Lifespan: How Long Do Shiba Inus Live?', description: 'Complete Shiba Inu lifespan guide (12-16 years). Learn about allergies, patellar luxation, glaucoma, hip dysplasia, and Shiba care.', category: 'Breed Lifespan', date: 'January 15, 2026' },
  { slug: 'lhasa-apso-lifespan', title: 'Lhasa Apso Lifespan: How Long Do Lhasa Apsos Live?', description: 'Complete Lhasa Apso lifespan guide (12-15 years). Learn about eye problems, hip dysplasia, kidney disease, and Lhasa Apso care at every age.', category: 'Breed Lifespan', date: 'January 15, 2026' },
];

const ITEMS_PER_PAGE = 10;

const ArticlesList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(articles.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const displayedArticles = articles.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="articles-list">
      <div className="section-box">
        <h2>All Guides (50)</h2>
        <p className="text-muted mb-15">
          Browse our collection of 50 in-depth dog breed lifespan guides. Page {currentPage} of {totalPages}.
        </p>
      </div>

      {displayedArticles.map((article, index) => {
        const globalIndex = startIndex + index + 1;
        return (
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
                minWidth: '36px',
                textAlign: 'center',
              }}>
                {String(globalIndex).padStart(2, '0')}
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
        );
      })}

      <div className="section-box" style={{ textAlign: 'center', padding: '16px 20px' }}>
        <div style={{
          display: 'inline-flex',
          gap: '4px',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
          {currentPage > 1 && (
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              style={{
                padding: '5px 12px',
                border: '1px solid #aaa',
                background: '#f0f0f0',
                cursor: 'pointer',
                fontSize: '13px',
                fontFamily: 'Arial, sans-serif',
                color: '#0066cc',
              }}
            >
              &laquo; Prev
            </button>
          )}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              style={{
                padding: '5px 12px',
                border: page === currentPage ? '1px solid #0066cc' : '1px solid #aaa',
                background: page === currentPage ? '#0066cc' : '#f0f0f0',
                color: page === currentPage ? '#fff' : '#0066cc',
                cursor: page === currentPage ? 'default' : 'pointer',
                fontSize: '13px',
                fontFamily: 'Arial, sans-serif',
                fontWeight: page === currentPage ? 'bold' : 'normal',
              }}
            >
              {page}
            </button>
          ))}
          {currentPage < totalPages && (
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              style={{
                padding: '5px 12px',
                border: '1px solid #aaa',
                background: '#f0f0f0',
                cursor: 'pointer',
                fontSize: '13px',
                fontFamily: 'Arial, sans-serif',
                color: '#0066cc',
              }}
            >
              Next &raquo;
            </button>
          )}
        </div>
        <p style={{ fontSize: '12px', color: '#999', marginTop: '10px' }}>
          Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, articles.length)} of {articles.length} guides
        </p>
      </div>

      <div className="section-box" style={{ textAlign: 'center' }}>
        <p className="text-muted">
          <strong>More guides coming soon!</strong> We are constantly adding new breed lifespan guides and
          dog care articles. Check back regularly or <Link href="/contact">contact us</Link> to suggest a topic.
        </p>
      </div>
    </div>
  );
};

export default ArticlesList;