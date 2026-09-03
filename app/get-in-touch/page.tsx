import type { Metadata } from 'next';
import GetInTouch from '@/components/pages/GetInTouch';
import JsonLd from '@/components/seo/JsonLd';
import { createPageMetadata, siteName, siteUrl } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata(
  'Get in Touch with Hena Mughal',
  'Contact Hena Mughal, share your thoughts, and learn how to get involved with her East Brunswick Board of Education campaign.',
  '/get-in-touch',
);

export default function GetInTouchPage() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        '@id': `${siteUrl}/get-in-touch#webpage`,
        url: `${siteUrl}/get-in-touch`,
        name: 'Get in Touch with Hena Mughal',
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#hena-mughal` },
        breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: siteName, item: siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Get In Touch', item: `${siteUrl}/get-in-touch` },
        ] },
      }} />
      <GetInTouch />
    </>
  );
}
