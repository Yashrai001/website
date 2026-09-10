import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

import { siteConfig } from "@/lib/config";
import { MobileActionBar } from "@/components/ui/MobileActionBar";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Premium Marriage Hall & Event Venue`,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: `${siteConfig.name} | Premium Marriage Hall & Event Venue`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Luxury Event Venue`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Premium Marriage Hall & Event Venue`,
    description: siteConfig.description,
    images: ["https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1200&auto=format&fit=crop"],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans pb-16 md:pb-0">
        {children}
        <MobileActionBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EventVenue",
              "name": siteConfig.name,
              "image": "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop",
              "@id": siteConfig.url,
              "url": siteConfig.url,
              "telephone": siteConfig.phone,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": siteConfig.address.street,
                "addressLocality": siteConfig.address.locality,
                "addressRegion": siteConfig.address.region,
                "postalCode": siteConfig.address.postalCode,
                "addressCountry": siteConfig.address.country
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 18.9220, // Mock coordinates for Mumbai
                "longitude": 72.8347
              }
            })
          }}
        />
      </body>
    </html>
  );
}
