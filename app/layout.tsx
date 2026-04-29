import type { Metadata } from "next";
export const revalidate = 60;
import { Inter, Hanken_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Script from "next/script";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
});

import { BackToTop } from "@/components/ui/back-to-top";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";
import { client } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/lib/queries";

export async function generateMetadata(): Promise<Metadata> {
  let settings = null;
  try {
    settings = await client.fetch(siteSettingsQuery);
  } catch (error) {
    console.error("Failed to fetch site settings in generateMetadata:", error);
  }
  
  const siteTitle = settings?.title || "Private Jet & Helicopter Charter Services in Nigeria | SVN Aviation";
  const siteDescription = settings?.description || "SVN Aviation provides private jet and helicopter charter services in Nigeria, offering reliable charter flight solutions across Lagos, Abuja, and nationwide. SVN Aviation is a trading name of Schnell Vogel Nigeria Limited.";
  const keywords = settings?.keywords || ["Private Jet Charter Nigeria", "Helicopter Charter Lagos", "Charter Flight Abuja", "Lagos to Abuja Private Jet", "Oil and Gas Aviation Nigeria", "Air Ambulance Nigeria", "SVN Aviation", "Schnell Vogel Nigeria", "Charter Flight Port Harcourt"];
  const ogImage = settings?.ogImage || "/og-image.jpg";

  return {
    title: {
      default: siteTitle,
      template: `%s | ${siteTitle}`,
    },
    description: siteDescription,
    keywords: keywords,
    authors: [{ name: "SVN Aviation" }],
    creator: "SVN Aviation",
    publisher: "Schnell Vogel Nigeria Limited",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: "https://svnaviation.com",
      siteName: siteTitle,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
    verification: {
      google: "17wGzU2GcU8mgnCFAOs5S1J_T5ghO1Czc8RL12wZg2Y",
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let settings = null;
  try {
    settings = await client.fetch(siteSettingsQuery);
  } catch (error) {
    console.error("Failed to fetch site settings in RootLayout:", error);
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": settings?.title || "SVN Aviation",
    "url": "https://svnaviation.com",
    "logo": "https://svnaviation.com/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": settings?.phone || "+2348060740721",
      "contactType": "customer service",
      "areaServed": "NG",
      "availableLanguage": "en"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": settings?.address || "Lagos, Nigeria",
      "addressLocality": "Lagos",
      "addressCountry": "NG"
    }
  };

  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <head>
        {/* Structured Data – Organization JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-524Z90K9VN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-524Z90K9VN');
          `}
        </Script>
      </head>
      <body
        className={`${inter.variable} ${hankenGrotesk.variable} antialiased relative`}
      >
        {children}
        <BackToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
