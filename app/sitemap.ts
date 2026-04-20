import { MetadataRoute } from 'next';
import { homeServices } from '@/lib/services';
import { locationPages } from '@/lib/locations';
import { charterRoutes } from '@/lib/routes';
import { client, isSanityConfigured } from '@/sanity/lib/client';
import { groq } from 'next-sanity';

const BASE_URL = 'https://svnaviation.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Core Static Pages
  const staticPages = [
    '',
    '/contact',
    '/blog',
    '/locations',
    '/routes',
  ].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // 2. Services (from lib/services)
  const servicePages = homeServices.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 3. Locations (from lib/locations)
  const locationPagesList = locationPages.map((loc) => ({
    url: `${BASE_URL}/locations/${loc.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // 4. Routes (from lib/routes)
  const routePages = charterRoutes.map((route) => ({
    url: `${BASE_URL}/routes/${route.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // 5. Blog Posts (from Sanity)
  let blogPages: any[] = [];
  if (isSanityConfigured) {
    try {
      const posts = await client.fetch(groq`*[_type == "post"] { "slug": slug.current, _updatedAt }`);
      blogPages = posts
        .filter((post: any) => post.slug)
        .map((post: any) => ({
          url: `${BASE_URL}/blog/${post.slug}`,
          lastModified: post._updatedAt ? new Date(post._updatedAt) : new Date(),
          changeFrequency: 'weekly' as const,
          priority: 0.5,
        }));
    } catch (error) {
      console.error('Error fetching posts for sitemap:', error);
    }
  }

  return [
    ...staticPages,
    ...servicePages,
    ...locationPagesList,
    ...routePages,
    ...blogPages,
  ];
}
