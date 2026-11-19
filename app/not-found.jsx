import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow center thanks">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p className="lead">The page you're looking for doesn't exist or has moved.</p>
        <div className="hero-ctas center"><Link href="/" className="btn btn-primary">Go to home</Link><Link href="/contact" className="btn btn-ghost">Contact</Link></div>
      </div>
    </section>
  );
}
