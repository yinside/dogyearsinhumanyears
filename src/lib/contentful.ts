import { createClient } from 'contentful';

// Create a mock client if environment variables are not set
const client = (() => {
  try {
    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
    
    console.log('Contentful Environment Check:');
    console.log('CONTENTFUL_SPACE_ID:', spaceId ? 'Set' : 'Not set');
    console.log('CONTENTFUL_ACCESS_TOKEN:', accessToken ? 'Set' : 'Not set');
    
    if (spaceId && accessToken) {
      console.log('Creating Contentful client with valid credentials');
      return createClient({
        space: spaceId,
        accessToken: accessToken,
      });
    } else {
      console.log('Contentful environment variables not configured, using mock client');
      // Return a mock client that will throw errors to trigger fallback content
      return {
        getEntries: () => Promise.reject(new Error('Contentful not configured - missing environment variables')),
        getEntry: () => Promise.reject(new Error('Contentful not configured - missing environment variables')),
      } as unknown;
    }
  } catch (error) {
    console.error('Error creating Contentful client:', error);
    // Return a mock client if there's any error
    return {
      getEntries: () => Promise.reject(new Error(`Contentful client creation failed: ${error}`)),
      getEntry: () => Promise.reject(new Error(`Contentful client creation failed: ${error}`)),
    } as unknown;
  }
})();

export default client;

// Types for Contentful entries
export interface Article {
  title: string;
  slug: string;
  excerpt: string;
  content: unknown;
  featuredImage?: string | null;
  publishedDate: string;
  author?: string;
  category?: string;
}

export interface ContentfulArticle {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    slug: string;
    excerpt: string;
    content: unknown;
    featuredImage?: {
      fields: {
        file: {
          url: string;
        };
        title: string;
      };
    };
    publishedDate?: string;
    'Publish Date'?: string;
    author?: string;
    'Author'?: string;
    category?: string;
    'Category'?: string;
  };
}

export interface InterestingFact {
  sys: {
    id: string;
  };
  fields: {
    title: string;
    description: string;
    icon?: string;
  };
}

// Helper function to transform Contentful article to our Article interface
function transformArticle(contentfulArticle: ContentfulArticle): Article {
  let featuredImageUrl = null;
  if (contentfulArticle.fields.featuredImage?.fields?.file?.url) {
    const url = contentfulArticle.fields.featuredImage?.fields?.file?.url;
    // Add https: protocol if URL starts with //
    featuredImageUrl = url.startsWith('//') ? `https:${url}` : url;
  }
  
  return {
    title: contentfulArticle.fields.title,
    slug: contentfulArticle.fields.slug,
    excerpt: contentfulArticle.fields.excerpt,
    content: contentfulArticle.fields.content,
    featuredImage: featuredImageUrl,
    publishedDate: contentfulArticle.fields.publishedDate || contentfulArticle.fields['Publish Date'] || new Date().toISOString().split('T')[0],
    author: contentfulArticle.fields.author || contentfulArticle.fields['Author'],
    category: contentfulArticle.fields.category || contentfulArticle.fields['Category'],
  };
}

// Function to get articles from Contentful
export async function getArticles(): Promise<Article[]> {
  try {
    // First, try to get all entries to see what content types are available
    const allEntries = await (client as any).getEntries({
      limit: 10
    });
    
    // Try different possible content type names
    const possibleContentTypes = ['article', 'blogPost', 'post', 'articles'];
    
    for (const contentType of possibleContentTypes) {
      try {
        const response = await (client as any).getEntries({
          content_type: contentType,
          order: '-fields.publishedDate',
        });
        
        if (response.items.length > 0) {
          return response.items.map((item: unknown) => transformArticle(item as ContentfulArticle));
        }
      } catch {
        continue;
      }
    }
    
    // If no specific content type works, return all entries that look like articles
    const articleLikeEntries = allEntries.items.filter((item: unknown) => {
      const fields = (item as any).fields;
      return fields && (fields.title || fields.name) && (fields.excerpt || fields.description || fields.content);
    });
    
    if (articleLikeEntries.length > 0) {
      return articleLikeEntries.map((item: unknown) => transformArticle(item as ContentfulArticle));
    }
    
    return [];
  } catch (error) {
    console.error('Failed to fetch articles from Contentful:', error);
    throw error;
  }
}

// Function to get a single article by slug
export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    // Try different possible content type names
    const possibleContentTypes = ['article', 'blogPost', 'post', 'articles'];
    
    for (const contentType of possibleContentTypes) {
      try {
        const response = await (client as any).getEntries({
          content_type: contentType,
          'fields.slug': slug,
          limit: 1,
        });
        
        if (response.items.length > 0) {
          return transformArticle(response.items[0] as ContentfulArticle);
        }
      } catch {
        continue;
      }
    }
    
    // If no specific content type works, try searching all entries
    try {
      const allEntries = await (client as any).getEntries({
        'fields.slug': slug,
        limit: 1
      });
      
      if (allEntries.items.length > 0) {
        const item = allEntries.items[0];
        const fields = (item as any).fields;
        // Check if it looks like an article
        if (fields && (fields.title || fields.name) && (fields.excerpt || fields.description || fields.content)) {
          return transformArticle(item as ContentfulArticle);
        }
      }
    } catch {
      console.log('Could not search all entries, article not found');
    }
    
    return null;
  } catch (error) {
    console.error('Failed to fetch article by slug from Contentful:', error);
    return null;
  }
}