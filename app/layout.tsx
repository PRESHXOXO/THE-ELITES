import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'LUXEury — Ultra Exclusive Access for UHNWI',
    template: '%s | LUXEury',
  },
  description:
    'LUXEury is the world\'s most exclusive private members\' platform. Curated hotels, Michelin Key properties, penthouses, villas, fine dining, and luxury shopping — by invitation only for ultra high net worth individuals.',
  keywords: [
    'luxury travel',
    'UHNWI',
    'Michelin Key hotels',
    'private members club',
    'ultra luxury',
    'penthouses',
    'luxury villas',
    'fine dining',
    'luxury shopping',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'LUXEury',
  },
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-obsidian text-ivory font-inter antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
