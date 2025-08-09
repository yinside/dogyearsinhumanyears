'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Article } from '@/lib/contentful';

const FeaturedArticles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Date not available';
    
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      console.log('Invalid date string:', dateString);
      return 'Date not available';
    }
    
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };



  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('/api/articles');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        
        if (data.success && Array.isArray(data.articles) && data.articles.length > 0) {
          setArticles(data.articles.slice(0, 3));
        } else {
          setArticles([]);
        }
      } catch (error) {
        console.error('Error fetching articles:', error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <section className="py-16 bg-gradient-to-br from-warm-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Loading articles...
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 w-3/4"></div>
                  <div className="h-3 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 bg-gradient-to-br from-warm-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover expert insights about dog health, aging, and care
          </p>
        </div>
        
        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No featured articles available. Please add content to Contentful.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {articles.map((article, index) => (
            <article key={article.slug} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <Link href={`/articles/${article.slug}`} className="block">
                <div className="h-48 bg-gradient-to-br from-orange-200 to-warm-300 flex items-center justify-center cursor-pointer">
                  {article.featuredImage ? (
                    <img 
                      src={article.featuredImage} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-6xl text-white/80">
                      {index === 0 ? '🐕' : index === 1 ? '🔬' : '❤️'}
                    </div>
                  )}
                </div>
              </Link>
              
              <div className="p-6">
                <Link href={`/articles/${article.slug}`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200 cursor-pointer">
                    {article.title}
                  </h3>
                </Link>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {formatDate(article.publishedDate)}
                  </span>
                  
                  <Link 
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium transition-colors duration-200"
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
            ))}
          </div>
        )}
        
        <div className="text-center">
          <Link 
            href="/articles"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors duration-200"
          >
            View All Articles
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;