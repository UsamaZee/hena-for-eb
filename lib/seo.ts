import type { Metadata } from 'next';
import socialImage from '@/components/layout/Hena-for-BOE.jpg';

export const siteUrl = 'https://henaforeb.com';
export const siteName = 'Hena for East Brunswick Board of Education';
export const personName = 'Hena Mughal';
export const instagramUrl = 'https://www.instagram.com/henaforeb/';
export const socialImageUrl = `${siteUrl}${socialImage.src}`;

export const defaultDescription =
  'Hena Mughal is running for the East Brunswick Board of Education to support strong public schools, inclusive communities, and students across the district.';

export function createPageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: 'website',
      locale: 'en_US',
      images: [
        {
          url: socialImage.src,
          width: socialImage.width,
          height: socialImage.height,
          alt: 'Hena Mughal for the East Brunswick Board of Education',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [socialImage.src],
    },
  };
}
