import { MetadataRoute } from 'next'
import { getAllBreedSlugs } from './guides/breedData'

const baseUrl = 'https://www.dogyearsinhumanyears.com'

const staticPages = [
  {
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  },
  {
    url: `${baseUrl}/guides`,
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

export default function sitemap(): MetadataRoute.Sitemap {
  const breedSlugs = getAllBreedSlugs()

  const breedUrls = breedSlugs.map((slug) => ({
    url: `${baseUrl}/guides/${slug}`,
    lastModified: new Date('2026-01-15'),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [...staticPages, ...breedUrls]
}