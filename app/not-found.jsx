import Link from "next/link";

export const metadata = { title: "Page not found", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="nf">
      <div className="container narrow">
        <b>404</b>
        <h1 style={{ fontSize: "2rem", margin: "12px 0" }}>This page doesn't exist</h1>
        <p className="lead" style={{ marginBottom: 28 }}>It may have moved. Try one of these instead.</p>
        <div className="phero-actions" style={{ justifyContent: "center" }}><Link href="/" className="btn btn-primary">Go home</Link><Link href="/services" className="btn btn-ghost">Services</Link><Link href="/contact" className="btn btn-ghost">Contact</Link></div>
      </div>
    </section>
  );
}
