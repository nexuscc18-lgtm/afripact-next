import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.afripact.net',                priority: 1.0, changeFrequency: 'weekly' },
    { url: 'https://www.afripact.net/services',       priority: 0.9, changeFrequency: 'monthly' },
    { url: 'https://www.afripact.net/contact',        priority: 0.9, changeFrequency: 'monthly' },
    { url: 'https://www.afripact.net/industries',     priority: 0.8, changeFrequency: 'monthly' },
    { url: 'https://www.afripact.net/projects',       priority: 0.8, changeFrequency: 'monthly' },
    { url: 'https://www.afripact.net/locations',      priority: 0.8, changeFrequency: 'monthly' },
    { url: 'https://www.afripact.net/earthworks-kzn', priority: 0.8, changeFrequency: 'monthly' },
    { url: 'https://www.afripact.net/about',          priority: 0.7, changeFrequency: 'monthly' },
  ]
}
