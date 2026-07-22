import { ThemeProvider } from '../components/ThemeProvider';
import ClientWrapper from '../components/ClientWrapper';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://rajeshbehera.vercel.app';

export const metadata = {
  // Lets every page's relative OG/Twitter image URLs (from the
  // opengraph-image.jsx files below) resolve to absolute URLs automatically.
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Rajesh Behera - Portfolio',
    template: '%s',
  },
  description: 'Portfolio of Rajesh Behera, Aspiring Software Engineer',
  openGraph: {
    title: 'Rajesh Behera - Portfolio',
    description: 'Portfolio of Rajesh Behera, Aspiring Software Engineer',
    url: siteUrl,
    siteName: 'Rajesh Behera - Portfolio',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rajesh Behera - Portfolio',
    description: 'Portfolio of Rajesh Behera, Aspiring Software Engineer',
  },
  // Lets RSS readers and browsers auto-discover the feed from app/rss.xml/route.js
  alternates: {
    types: {
      'application/rss+xml': '/rss.xml',
    },
  },
};

// Previously a manual <meta name="viewport" content="width-device-width,..."/>
// tag in <head> -- "width-device-width" (hyphen instead of "=") isn't a
// recognized viewport key, which is exactly the "key not recognized and
// ignored" warning browsers show. Next.js's dedicated `viewport` export is
// also the framework-recommended way to set this in the App Router instead
// of a hand-written meta tag.
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

// Site-wide structured data (schema.org) so search engines can understand
// who this site belongs to, independent of whatever page is being crawled.
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rajesh Behera",
  jobTitle: "Aspiring Software Engineer",
  url: siteUrl,
  sameAs: ["https://github.com/r-ajeshbehera"],
};

export default function Layout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>
          <ClientWrapper>{children}</ClientWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
