'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Dog } from 'lucide-react';
import { getArticles, Article } from '@/lib/contentful';

const ArticlesList = () => {
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
        const data = await response.json();
        
        if (data.success && data.articles && data.articles.length > 0) {
          // Use articles directly from API (already in correct format)
          setArticles(data.articles);
        } else {
          // No articles available
          setArticles([]);
        }
      } catch (error) {
        // If API fails, show empty state
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading articles...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="warm-text-gradient">Dog Years</span> Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights on canine aging, health, and care to help you understand your dog better.
          </p>
        </div>

        {articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No articles available. Please add content to Contentful.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => {
              const imageUrl = article.featuredImage || 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=800';
            
            return (
              <article key={article.slug || index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <Link href={`/articles/${article.slug}`} className="block">
                  <div className="relative overflow-hidden cursor-pointer">
                    <img
                      src={imageUrl}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </Link>
                
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <time dateTime={article.publishedDate}>
                      {formatDate(article.publishedDate)}
                    </time>
                  </div>
                  
                  <Link href={`/articles/${article.slug}`}>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-200 cursor-pointer">
                      {article.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <Link
                    href={`/articles/${article.slug}`}
                    className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors duration-200"
                  >
                    Read More
                    <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
              );
            })}
          </div>
        )}

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Want to Calculate Your Dog's Age?
            </h2>
            <p className="text-gray-600 mb-6">
              Use our scientific calculator to find out how old your dog is in human years.
            </p>
            <Link
              href="/#calculator"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:from-orange-600 hover:to-amber-600 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Dog className="w-5 h-5 mr-2" />
              Calculate Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlesList;