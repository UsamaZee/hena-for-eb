import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import { defaultDescription, instagramUrl, personName, siteName, siteUrl, socialImageUrl } from '@/lib/seo';

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Hena Mughal | East Brunswick Board of Education',
  description: defaultDescription,
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: 'Hena Mughal | East Brunswick Board of Education',
    description: defaultDescription,
    url: siteUrl,
    siteName,
    type: 'website',
    locale: 'en_US',
    images: [{ url: socialImageUrl, alt: 'Hena Mughal for the East Brunswick Board of Education' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hena Mughal | East Brunswick Board of Education',
    description: defaultDescription,
    images: [socialImageUrl],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${nunitoSans.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text)' }}>
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@graph': [
            { '@type': 'Person', '@id': `${siteUrl}/#hena-mughal`, name: personName, url: siteUrl, image: socialImageUrl, sameAs: [instagramUrl] },
            { '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: siteUrl, name: siteName, description: defaultDescription, publisher: { '@id': `${siteUrl}/#hena-mughal` } },
          ],
        }} />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
