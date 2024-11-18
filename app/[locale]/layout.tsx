import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/layout/Navbar";
import { Lato } from 'next/font/google';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
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
    <html lang="en" className={lato.className}>
      <body className={`${lato.variable} font-lato`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
