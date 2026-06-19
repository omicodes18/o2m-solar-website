import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { CallButton } from "@/components/layout/CallButton";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteMetadata } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${geistSans.variable} scroll-smooth`}>
      <head>
        {/* Resource hints — start connections early */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://vtustsrotwhirshhgaxj.supabase.co" />
        <link rel="dns-prefetch" href="https://vtustsrotwhirshhgaxj.supabase.co" />
        <noscript>
          <style dangerouslySetInnerHTML={{ __html: `
            .scroll-reveal {
              opacity: 1 !important;
              transform: none !important;
              transition: none !important;
            }
            .faq-panel {
              grid-template-rows: 1fr !important;
              padding: 0 1.15rem 1rem !important;
              visibility: visible !important;
              overflow: visible !important;
            }
          `}} />
        </noscript>
      </head>
      <body className="antialiased">
        <JsonLd />
        <Navbar />
        <CallButton />
        <main>{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
