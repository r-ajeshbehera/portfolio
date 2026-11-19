import "@fontsource-variable/inter";
import "@fontsource-variable/manrope";
import "./globals.css";
import Script from "next/script";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { site } from "../data/agency";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rajeshbehera.vercel.app";
const gaId = process.env.NEXT_PUBLIC_GA_ID;
const title = `${site.brand} | Websites & Business Automation in Bhubaneswar`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${site.brand}` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { title, description: site.description, url: siteUrl, siteName: site.brand, type: "website", locale: "en_IN" },
  twitter: { card: "summary_large_image", title, description: site.description },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#0B1F33" };

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: site.brand,
  description: site.description,
  url: siteUrl,
  email: site.email,
  founder: { "@type": "Person", name: site.founder },
  address: { "@type": "PostalAddress", addressLocality: "Bhubaneswar", addressRegion: "Odisha", addressCountry: "IN" },
  areaServed: "IN",
  sameAs: Object.values(site.social),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#content">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
        <Navbar />
        <main id="content">{children}</main>
        <Footer />
        <Reveal />
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${gaId}');`}</Script>
          </>
        )}
      </body>
    </html>
  );
}
