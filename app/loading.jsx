// Next.js App Router convention: automatically shown as a Suspense fallback
// while a route segment is loading (e.g. right after clicking a Link, before
// the new page's JS/data is ready). Keeps navigation feeling responsive
// instead of showing a blank screen.
export default function Loading() {
  return (
    <div className="route-loading" role="status" aria-label="Loading">
      <div className="spinner" />
    </div>
  );
}
