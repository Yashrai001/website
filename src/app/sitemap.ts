import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/halls',
    '/weddings',
    '/services',
    '/gallery',
    '/contact',
    '/book',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : (route === '/privacy' || route === '/terms') ? 0.3 : 0.8,
  }));

  return routes;
}
