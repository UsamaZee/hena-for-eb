import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import JsonLd from '@/components/seo/JsonLd';
import { createPageMetadata, defaultDescription, siteName, siteUrl } from '@/lib/seo';

export const metadata = createPageMetadata('Hena Mughal | East Brunswick Board of Education', defaultDescription, '/');

export default function Home() {
  return (
    <>
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${siteUrl}/#webpage`,
        url: siteUrl,
        name: 'Hena Mughal | East Brunswick Board of Education',
        description: defaultDescription,
        isPartOf: { '@id': `${siteUrl}/#website` },
        about: { '@id': `${siteUrl}/#hena-mughal` },
        breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: siteName, item: siteUrl }] },
      }} />
      <Hero />
      <About />
      <Contact />
    </>
  );
}
