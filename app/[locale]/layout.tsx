import type { Metadata } from "next";
import "@/styles/globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/layout/Navbar";
import { Poppins, Playfair_Display } from 'next/font/google';
import Footer from "@/components/layout/Footer";
import PictureTopbar from "@/components/layout/Home/PictureTopbar";
import Script from 'next/script';

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
  metadataBase: new URL('https://rischerconsulting.com'),
  title: {
    default: "RISCHER CONSULTING",
    template: "%s | RISCHER CONSULTING"
  },
  description: "We offer consulting and professional development services for businesses, non-profits and organizations that will allow for growth and success.",
  keywords: [
    "consulting services",
    "professional development",
    "business development",
    "non-profit development",
    "grant writing",
    "funding compliance",
    "workforce development",
    "management consulting",
    "leadership development",
    "K-12 professional development",
    "executive coaching",
    "C-Suite management"
  ],
  authors: [{ name: "Rischer Consulting" }],
  creator: "Rischer Consulting",
  publisher: "Rischer Consulting",
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    type: "website",
    title: "RISCHER CONSULTING",
    description: "We offer consulting and professional development services for businesses, non-profits and organizations that will allow for growth and success.",
    url: "https://rischerconsulting.com",
    siteName: "Rischer Consulting",
    images: [{
      url: "https://uploads-ssl.webflow.com/6095179e2c99e08c2f64a94f/609529c7fd275d121c2957bb_COVER%20copy.jpg",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RISCHER CONSULTING",
    description: "We offer consulting and professional development services for businesses, non-profits and organizations that will allow for growth and success.",
    images: ["https://uploads-ssl.webflow.com/6095179e2c99e08c2f64a94f/609529c7fd275d121c2957bb_COVER%20copy.jpg"],
  },
  verification: {
    google: "G-NPY8GHPCN0",
    other: {
      "facebook-domain-verification": "k8jq1ry836719a3nqbqn26yc6o3taz"
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.className} ${playfair.className}`}>
      <head>
        <link rel="icon" href="/images/favicon.jpeg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/images/webclip.jpeg" />
      </head>
      <body className={`${poppins.variable} ${playfair.variable} font-poppins`}>
        <Providers>
          <Navbar />
          <PictureTopbar />
          {children}
          <Footer />
        </Providers>
        
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-NPY8GHPCN0"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-NPY8GHPCN0');
          `}
        </Script>

        {/* LinkedIn Tracking */}
        <Script id="linkedin-tracking" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "1147602";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
            (function(l) {
              if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])}; window.lintrk.q=[]}
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";
              b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '532180104405937');
            fbq('track', 'PageView');
          `}
        </Script>
      </body>
    </html>
  );
}
