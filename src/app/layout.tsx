import type { Metadata } from "next";
import Script from 'next/script';
import "./globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export const metadata: Metadata = {
  title: "Dog Years in Human Years Calculator - Accurate Pet Age Converter",
  description: "Convert your dog's age to human years with our scientifically accurate calculator. Discover how old your dog is in human years, learn about canine aging, and get expert pet care insights.",
  keywords: "dog years in human years, dog age calculator, pet age converter, canine aging, dog years calculator, how old is my dog in human years, dog lifespan, pet health, dog care",
  authors: [{ name: "Dog Years in Human Years Team" }],
  metadataBase: new URL('https://www.dogyearsinhumanyears.com'),
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  alternates: {
    canonical: 'https://www.dogyearsinhumanyears.com',
  },
  openGraph: {
    title: "Dog Years in Human Years Calculator - Accurate Pet Age Converter",
    description: "Convert your dog's age to human years with our scientifically accurate calculator. Discover how old your dog is in human years and learn about canine aging.",
    type: "website",
    locale: "en_US",
    url: "https://www.dogyearsinhumanyears.com",
    siteName: "Dog Years in Human Years",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dog Years in Human Years Calculator',
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dog Years in Human Years Calculator - Accurate Pet Age Converter",
    description: "Convert your dog's age to human years with our scientifically accurate calculator. Discover how old your dog is in human years.",
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Dog Years in Human Years Calculator",
    "description": "Convert your dog's age to human years with our scientifically accurate calculator",
    "url": "https://www.dogyearsinhumanyears.com",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Organization",
      "name": "Dog Years in Human Years"
    },
    "potentialAction": {
      "@type": "UseAction",
      "target": "https://www.dogyearsinhumanyears.com",
      "object": {
        "@type": "Thing",
        "name": "Dog Age Calculator"
      }
    }
  };

  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        {gtmId && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `,
            }}
          />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />

      </head>
      <body className="antialiased">
        {/* Google Tag Manager (noscript) */}
        {gtmId && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}
        {/* Google AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9798221829361812"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
