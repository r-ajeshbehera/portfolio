import Link from "next/link";
import Icon from "../../components/Icon";

export const metadata = { title: "Thank you", robots: { index: false } };

export default function Thanks() {
  return (
    <section className="nf">
      <div className="container narrow">
        <span className="svc-ic" style={{ margin: "0 auto 24px", width: 72, height: 72, borderRadius: 22, background: "var(--ok-soft)", color: "var(--ok)" }}><Icon name="check" size={34} stroke={2.4} /></span>
        <h1>Thank you — message received!</h1>
        <p className="lead" style={{ margin: "16px auto 28px", maxWidth: 520 }}>I'll read your message and reply by email soon. Meanwhile, have a look at my work or read a guide.</p>
        <div className="phero-actions" style={{ justifyContent: "center" }}><Link href="/work" className="btn btn-primary">See my work</Link><Link href="/blog" className="btn btn-ghost">Read insights</Link></div>
      </div>
    </section>
  );
}
