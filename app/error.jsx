"use client";

import { useEffect } from "react";

// Next.js App Router convention: this catches render/runtime errors thrown
// anywhere in the route tree below it and shows a friendly recovery screen
// instead of a blank page or the framework's bare default error overlay.
// Must be a Client Component.
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error("Unhandled application error:", error);
  }, [error]);

  return (
    <main style={{ paddingTop: "2.5rem" }}>
      <section className="section">
        <div className="container">
          <div className="card" style={{ textAlign: "center" }}>
            <h2 className="section-title">Something went wrong</h2>
            <p className="centered-text">
              An unexpected error occurred while loading this page. You can
              try again, or head back to the homepage.
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
              <button
                type="button"
                className="btn-primary"
                onClick={() => reset()}
                style={{ border: "none", cursor: "pointer" }}
              >
                Try Again
              </button>
              <a href="/" className="btn-secondary">
                Back to Home
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
