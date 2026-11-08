import Script from "next/script";
import "@fontsource-variable/geist";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Motion from "../components/Motion";
import { site } from "../data/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://rajeshbehera.vercel.app";
const gaId = process.env.NEXT_PUBLIC_GA_ID;
const title = `${site.name} | ${site.positioning}`;
const description = site.message;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: title, template: `%s | ${site.name}` },
  description,
  openGraph: { title, description, url: siteUrl, siteName: site.brand, type: "website" },
  twitter: { card: "summary_large_image", title, description },
  alternates: { types: { "application/rss+xml": "/rss.xml" } },
};

export const viewport = { width: "device-width", initialScale: 1 };

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.positioning,
  url: siteUrl,
  sameAs: [site.github, site.linkedin],
};

export default function Layout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `if(!matchMedia("(prefers-reduced-motion: reduce)").matches){var d=document.documentElement;d.classList.add("js-anim");setTimeout(function(){d.classList.add("anim-ready")},2500)}` }} />
      </head>
      <body>
        <a className="skip" href="#content">Skip to content</a>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <Navbar />
        <main id="content">{children}</main>
        <Footer />
        <Motion />
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
