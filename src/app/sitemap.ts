import { MetadataRoute } from 'next'
import { getArticles } from '@/lib/contentful'

const baseUrl = 'https://www.dogyearsinhumanyears.com'

// Static pages configuration
const staticPages = [
  {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  },
  {
    url: `${baseUrl}/articles`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  },
  {
    url: `${baseUrl}/about`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  },
  {
    url: `${baseUrl}/contact`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  },
  {
    url: `${baseUrl}/privacy`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  },
  {
    url: `${baseUrl}/terms`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    // Try to get articles from Contentful
    const articles = await getArticles()
    
    // Generate article URLs with proper encoding
    const articleUrls = articles.map((article) => ({
      url: `${baseUrl}/articles/${encodeURIComponent(article.slug)}`,
      lastModified: new Date(article.publishedDate),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
    
    // Combine static pages and article pages
    return [...staticPages, ...articleUrls]
  } catch (error) {
    console.error('Failed to generate dynamic sitemap, falling back to static pages:', error)
    
    // Fallback to static pages only if Contentful fails
    return staticPages
  }
}