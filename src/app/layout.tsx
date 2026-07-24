import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import FloatingWhatsAppWrapper from "@/components/FloatingWhatsAppWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rentalmotorjakarta.com"),
  title: {
    default: "Rajawali Motorcycle Rental Jakarta | Sewa Motor Harian, Mingguan & Bulanan",
    template: "%s | Rajawali Motorcycle Rental Jakarta",
  },
  description:
    "Rajawali Motorcycle Rental Jakarta menyediakan jasa sewa motor harian, mingguan, hingga bulanan untuk wilayah DKI Jakarta dan Tangerang. Armada terawat, nyaman, harga terjangkau. Tersedia Honda Beat, Vario, NMAX, PCX, Aerox, Scoopy, Yamaha Gear.",
  keywords: [
    "Rental Motor Jakarta",
    "Sewa Motor Jakarta",
    "Rental Motor Harian Jakarta",
    "Sewa Motor Bulanan Jakarta",
    "Rental NMAX Jakarta",
    "Rental Beat Jakarta",
    "Rental Vario Jakarta",
    "Rental PCX Jakarta",
    "Rental Aerox Jakarta",
    "Rental Scoopy Jakarta",
    "Sewa Motor Murah Jakarta",
    "Rental Motor Terdekat",
    "Sewa Motor Online Jakarta",
    "Rental Motor Tangerang",
    "Sewa Motor Tangerang",
    "Rental Motor Jakarta Tangerang",
  ],
  authors: [{ name: "Rajawali Motorcycle Rental Jakarta" }],
  creator: "Rajawali Motorcycle Rental Jakarta",
  publisher: "Rajawali Motorcycle Rental Jakarta",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.jpg",
  },
  openGraph: {
    title: "Rajawali Motorcycle Rental Jakarta & Tangerang | Sewa Motor Mudah, Aman, Nyaman",
    description:
      "Sewa motor harian, mingguan, dan bulanan di Jakarta & Tangerang dengan harga terjangkau. Honda Beat, Vario, NMAX, PCX, Aerox, Scoopy tersedia.",
    url: "https://rentalmotorjakarta.com",
    siteName: "Rajawali Motorcycle Rental Jakarta",
    images: [
      {
        url: "/hero-motorcycle.png",
        width: 1344,
        height: 768,
        alt: "Rajawali Motorcycle Rental Jakarta - Sewa Motor Premium",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajawali Motorcycle Rental Jakarta & Tangerang | Sewa Motor Mudah, Aman, Nyaman",
    description:
      "Sewa motor harian, mingguan, dan bulanan di Jakarta & Tangerang dengan harga terjangkau.",
    images: ["/hero-motorcycle.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rentalmotorjakarta.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://rentalmotorjakarta.com/#business",
        name: "Rajawali Motorcycle Rental Jakarta",
        description:
          "Jasa sewa motor harian, mingguan, hingga bulanan untuk wilayah DKI Jakarta dan Tangerang.",
        url: "https://rentalmotorjakarta.com",
        telephone: "+6282310759060",
        email: "rentalmotorjakarta@gmail.com",
        image: "https://rentalmotorjakarta.com/hero-motorcycle.png",
        logo: "https://rentalmotorjakarta.com/logo.jpg",
        priceRange: "Rp90.000 - Rp150.000 / hari",
        address: [
          {
            "@type": "PostalAddress",
            addressLocality: "Jakarta",
            addressRegion: "DKI Jakarta",
            addressCountry: "ID",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Tangerang",
            addressRegion: "Banten",
            addressCountry: "ID",
          },
        ],
        areaServed: [
          {
            "@type": "City",
            name: "DKI Jakarta",
          },
          {
            "@type": "City",
            name: "Tangerang",
          },
        ],
        geo: {
          "@type": "GeoCoordinates",
          latitude: -6.2088,
          longitude: 106.8456,
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "08:00",
          closes: "21:00",
        },
        sameAs: ["https://www.instagram.com/rentalmotorjakarta"],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "328",
        },
      },
      {
        "@type": "AutoRental",
        "@id": "https://rentalmotorjakarta.com/#autorental",
        name: "Rajawali Motorcycle Rental Jakarta",
        description: "Rental motor terpercaya di Jakarta dan Tangerang dengan armada terawat",
        url: "https://rentalmotorjakarta.com",
        telephone: "+6282310759060",
        address: [
          {
            "@type": "PostalAddress",
            addressLocality: "Jakarta",
            addressRegion: "DKI Jakarta",
            addressCountry: "ID",
          },
          {
            "@type": "PostalAddress",
            addressLocality: "Tangerang",
            addressRegion: "Banten",
            addressCountry: "ID",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://rentalmotorjakarta.com/#website",
        url: "https://rentalmotorjakarta.com",
        name: "Rajawali Motorcycle Rental Jakarta",
        publisher: {
          "@id": "https://rentalmotorjakarta.com/#business",
        },
      },
    ],
  };

  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen flex flex-col">
            {children}
          </main>
          <Footer />
          <FloatingWhatsAppWrapper />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
