import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/layout/Navbar";
import { Poppins } from 'next/font/google';
import Footer from "@/components/layout/Footer";
import PictureTopbar from "@/components/layout/Home/PictureTopbar";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700', '900'],
  variable: '--font-poppins',
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
    <html lang="en" className={poppins.className}>
      <body className={`${poppins.variable} font-poppins`}>
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
