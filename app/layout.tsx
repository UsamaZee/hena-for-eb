import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-editorial",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hena for East Brunswick Board of Education",
  description: "Education is a human right. Vote Hena for the East Brunswick Board of Education.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${lora.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text)' }}>
        <Header />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
