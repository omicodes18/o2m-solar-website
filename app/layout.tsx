import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { CallButton } from "@/components/layout/CallButton";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteMetadata } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${geistSans.variable} scroll-smooth`}>
      <body className="antialiased">
        <JsonLd />
        <CallButton />
        <main>{children}</main>
        <WhatsAppButton />
      </body>
    </html>
  );
}
