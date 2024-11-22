import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/layout/Navbar";
import { Poppins, Playfair_Display } from 'next/font/google';
import Footer from "@/components/layout/Footer";
import PictureTopbar from "@/components/layout/Home/PictureTopbar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700', '900'],
  variable: '--font-poppins',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: "Rischer Consulting",
  description: "Professional consulting services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} ${playfair.className}`}>
      <body className={`${poppins.variable} ${playfair.variable} font-poppins`}>
        <Providers>
          <Navbar />
          <PictureTopbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
