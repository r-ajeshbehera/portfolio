import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === '/contact';

  return (
    <footer className="footer">
      <div className="container">
        {!isContactPage && (
          <div className="footer-links">
            <Link
              href="https://github.com/r-ajeshbehera"
              className="footer-link"
            >
              <span className="footer-icon-wrapper">
                <Image
                  src="/images/g-icon.png"
                  alt="GitHub"
                  width={40}
                  height={40}
                  className="footer-icon"
                />
                <span className="icon-label">GitHub</span>
              </span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/rajesh-behera-695a0224b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
              className="footer-link"
            >
              <span className="footer-icon-wrapper">
                <Image
                  src="/images/l-icon.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className="footer-icon"
                />
                <span className="icon-label">LinkedIn</span>
              </span>
            </Link>
            <Link
              href="mailto:rajeshbehera.works@gmail.com"
              className="footer-link"
            >
              <span className="footer-icon-wrapper">
                <Image
                  src="/images/m-icon.png"
                  alt="Email"
                  width={40}
                  height={40}
                  className="footer-icon"
                />
                <span className="icon-label">Email</span>
              </span>
            </Link>
            {/* <Link
              href="https://youtube.com/@r_ajeshbehera"
              className="footer-link"
            >
              <span className="footer-icon-wrapper">
                <Image
                  src="/images/yt-icon.jpg"
                  alt="YouTube"
                  width={40}
                  height={40}
                  className="footer-icon"
                />
                <span className="icon-label">YouTube</span>
              </span>
            </Link> */}
            {/* <Link href="https://wa.me/+919348313504" className="footer-link">
              <span className="footer-icon-wrapper">
                <Image
                  src="/images/wp-icon.png"
                  alt="WhatsApp"
                  width={40}
                  height={40}
                  className="footer-icon"
                />
                <span className="icon-label">WhatsApp</span>
              </span>
            </Link> */}
            <Link href="/rss.xml" className="footer-link" target="_blank">
              <span className="footer-icon-wrapper">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="footer-icon"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="12" fill="currentColor" opacity="0.12" />
                  <circle cx="8.5" cy="15.5" r="1.6" fill="currentColor" />
                  <path
                    d="M6 10.2c4.86 0 8.8 3.94 8.8 8.8h2.4c0-6.19-5.01-11.2-11.2-11.2v2.4Z"
                    fill="currentColor"
                  />
                  <path
                    d="M6 6c7.18 0 13 5.82 13 13h2.4C21.4 10.4 13.6 2.6 6 2.6V6Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="icon-label">RSS</span>
              </span>
            </Link>
          </div>
        )}
        <p>© 2025 Rajesh Behera. All rights reserved.</p>
        <p className="footer-designed">
          Designed & Developed by{" "}
          <a href="https://github.com/r-ajeshbehera" className="link-hover">
            Rajesh Behera
          </a>
        </p>
      </div>
    </footer>
  );
}
