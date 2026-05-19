import { MetadataRoute } from 'next'
import { getAllBreedSlugs } from './guides/breedData'
import { getAllSlugs as getHealthSlugs } from './dog-health-tips/data'
import { getAllSlugs as getPuppySlugs } from './puppy-care/data'
import { getAllSlugs as getSeniorSlugs } from './senior-dog-care/data'

const baseUrl = 'https://www.dogyearsinhumanyears.com'

const staticPages = [
  { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 1.0 },
  { url: `${baseUrl}/guides`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.9 },
  { url: `${baseUrl}/dog-health-tips`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.85 },
  { url: `${baseUrl}/puppy-care`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.85 },
  { url: `${baseUrl}/senior-dog-care`, lastModified: new Date(), changeFrequency: 'weekly' as const, priority: 0.85 },
  { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.7 },
  { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.6 },
  { url: `${baseUrl}/privacy`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
  { url: `${baseUrl}/terms`, lastModified: new Date(), changeFrequency: 'yearly' as const, priority: 0.3 },
]

function makeArticleUrls(prefix: string, slugs: string[], priority: number) {
  return slugs.map((slug) => ({
    url: `${baseUrl}/${prefix}/${slug}`,
    lastModified: new Date('2026-01-15'),
    changeFrequency: 'monthly' as const,
    priority,
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const breedUrls = makeArticleUrls('guides', getAllBreedSlugs(), 0.8)
  const healthUrls = makeArticleUrls('dog-health-tips', getHealthSlugs(), 0.75)
  const puppyUrls = makeArticleUrls('puppy-care', getPuppySlugs(), 0.75)
  const seniorUrls = makeArticleUrls('senior-dog-care', getSeniorSlugs(), 0.75)

  return [...staticPages, ...breedUrls, ...healthUrls, ...puppyUrls, ...seniorUrls]
}
