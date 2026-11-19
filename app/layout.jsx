import "@fontsource-variable/inter";
import "@fontsource-variable/plus-jakarta-sans";
import "./globals.css";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";
import { JsonLd } from "../components/Blocks";
import { site, services } from "../data/site";

const title = `${site.brand} | Website Design, SEO & Automation in Bhubaneswar`;
const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata = {
  metadataBase: new URL(site.url),
  title: { default: title, template: `%s | ${site.short}` },
  description: site.description,
  keywords: ["website design Bhubaneswar", "web development Odisha", "SEO services Bhubaneswar", "small business website India", "business automation", "Google Sheets dashboard", "website maintenance"],
  authors: [{ name: site.founder }],
  creator: site.founder,
  alternates: { canonical: "/" },
  openGraph: { title, description: site.description, url: site.url, siteName: site.brand, type: "website", locale: "en_IN" },
  twitter: { card: "summary_large_image", title, description: site.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  formatDetection: { telephone: false },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#0A1022" };

const orgLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#business`,
      name: site.brand,
      description: site.description,
      url: site.url,
      email: site.email,
      ...(site.phone ? { telephone: site.phone } : {}),
      image: `${site.url}/opengraph-image`,
      founder: { "@type": "Person", name: site.founder, url: `${site.url}/about` },
      address: { "@type": "PostalAddress", addressLocality: site.city, addressRegion: site.region, addressCountry: "IN" },
      areaServed: [{ "@type": "City", name: "Bhubaneswar" }, { "@type": "State", name: "Odisha" }, { "@type": "Country", name: "India" }],
      knowsLanguage: ["en", "hi", "or"],
      sameAs: Object.values(site.social),
      hasOfferCatalog: {
        "@type": "OfferCatalog", name: "Digital services",
        itemListElement: services.filter((s) => s.status !== "coming").map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title, url: `${site.url}/services/${s.slug}` } })),
      },
    },
    { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.brand, publisher: { "@id": `${site.url}/#business` }, inLanguage: "en-IN" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <JsonLd data={orgLd} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Reveal />
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}</Script>
          </>
        )}
      </body>
    </html>
  );
}
