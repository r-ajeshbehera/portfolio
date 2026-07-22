import Link from "next/link";

export const metadata = {
  title: "Page Not Found - Rajesh Behera",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <main style={{ paddingTop: "2.5rem" }}>
      <section className="section">
        <div className="container">
          <div className="card" style={{ textAlign: "center" }}>
            <h1 style={{ fontSize: "5rem", marginBottom: "0.5rem" }}>404</h1>
            <h2 className="section-title">Page Not Found</h2>
            <p className="centered-text">
              The page you're looking for doesn't exist, may have been moved,
              or the link might be broken.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "1rem",
                flexWrap: "wrap",
                marginTop: "1.5rem",
              }}
            >
              <Link href="/" className="btn-primary">
                Back to Home
              </Link>
              <Link href="/projects" className="btn-secondary">
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
