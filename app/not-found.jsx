import Link from "next/link";
export const metadata = { title: "Page not found" };
export default function NotFound() {
  return <section className="section contact-page"><div className="container narrow center"><h1 className="h1-sm">This page does not exist</h1><p className="lead">It may have moved, or the link may be wrong.</p><div className="actions center"><Link className="btn btn-blue" href="/">Go to home page</Link><Link className="btn btn-line" href="/projects">View projects</Link></div></div></section>;
}
