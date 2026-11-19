import Link from "next/link";
import Icon from "../../components/Icon";

export const metadata = { title: "Thank you", robots: { index: false } };

export default function ThankYou() {
  return (
    <section className="section">
      <div className="container narrow center thanks">
        <span className="icon-box lg"><Icon name="check" size={32} /></span>
        <h1>Thank you — your enquiry was sent.</h1>
        <p className="lead">I'll read your message and reply by email. If it's urgent, you can also email me directly.</p>
        <div className="hero-ctas center"><Link href="/" className="btn btn-primary">Back to home</Link><Link href="/work" className="btn btn-ghost">See our work</Link></div>
      </div>
    </section>
  );
}
