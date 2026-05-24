import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Leading Aluminium Windows and Doors Manufacturer, Supplier Company | Tostem India",
  description:
    "Tostem India is the world's leading manufacturer and supplier of aluminium windows and doors in India. Browse our premium Japanese products for durable, energy-efficient solutions for your modern windows and doors. Get a quote today!",
  keywords: [
    "aluminium windows",
    "aluminium doors",
    "Tostem India",
    "Japanese windows",
    "steel entrance doors",
    "aluminium facades",
  ],
  icons: {
    icon: "https://cdn-ildpppi.nitrocdn.com/xjROyyheOXReIMzlTkTVBhxlcelzUnWY/assets/images/optimized/rev-c76f7e6/www.tostemindia.com/wp-content/themes/tostem/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased bg-background text-foreground`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
