import type { Metadata } from "next";
import { Inter, Hanken_Grotesk, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

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

export const metadata: Metadata = {
  title: "SVN Aviation | A Branch of Schnell Vogel Nigeria Limited",
  description: "Premium Aviation Charter & Air Logistics. Delivering consistently for Oil and Gas Industries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${inter.variable} ${hankenGrotesk.variable} antialiased relative`}
      >
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
