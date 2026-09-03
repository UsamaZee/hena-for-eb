import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteUrl}/why-am-i-running`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/get-in-touch`, changeFrequency: 'monthly', priority: 0.7 },
  ];
}
