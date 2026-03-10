"use client";

import FeedbackForm from '../../components/FeedbackForm';
import FeedbackList from '../../components/FeedbackList';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  return (
    <section className="section contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <p className="centered-text">
          I’m here to help and answer any questions you might have. Feel free to
          reach out through the form below or connect with me directly.
        </p>
        <div className="card contact-card">
          <h3>Get in Touch</h3>
          <div className="contact-links">
            <div className="contact-row">
              <Link
                href="mailto:rajeshbehera.works@gmail.com"
                className="contact-item"
              >
                <Image
                  src="/images/m-icon.png"
                  alt="Email"
                  width={40}
                  height={40}
                  className="contact-icon"
                />
                <span className="icon-label">Email</span>
              </Link>
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
              </Link>
              <Link href="tel:+919348313504" className="contact-item">
                <Image
                  src="/images/phone-icon.png"
                  alt="Phone"
                  width={40}
                  height={40}
                  className="contact-icon"
                />
                <span className="icon-label">Phone</span>
              </Link> */}
              <Link
                href="https://www.linkedin.com/in/rajesh-behera-695a0224b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="contact-item"
                target="_blank"
              >
                <Image
                  src="/images/i-icon.png"
                  alt="LinkedIn"
                  width={40}
                  height={40}
                  className="contact-icon"
                />
                <span className="icon-label">LinkedIn</span>
              </Link>
            </div>
            <div className="contact-row">
              <Link
                href="https://github.com/r-ajeshbehera"
                className="contact-item"
                target="_blank"
              >
                <Image
                  src="/images/g-icon.png"
                  alt="GitHub"
                  width={40}
                  height={40}
                  className="contact-icon"
                />
                <span className="icon-label">GitHub</span>
              </Link>
              <Link
                href="https://youtube.com/r_ajeshbehera"
                className="contact-item"
                target="_blank"
              >
                <Image
                  src="/images/yt-icon.jpg"
                  alt="YouTube"
                  width={40}
                  height={40}
                  className="contact-icon"
                />
                <span className="icon-label">YouTube</span>
              </Link>
              <Link
                href="https://instagram.com/r_ajeshbehera"
                className="contact-item"
                target="_blank"
              >
                <Image
                  src="/images/instagram-icon.jpg"
                  alt="Instagram"
                  width={40}
                  height={40}
                  className="contact-icon"
                />
                <span className="icon-label">Instagram</span>
              </Link>
              <Link
                href=" https://www.facebook.com/share/19kZUU6XWo/"
                className="contact-item"
                target="_blank"
              >
                <Image
                  src="/images/f-icon.jpg"
                  alt="Facebook"
                  width={40}
                  height={40}
                  className="contact-icon"
                />
                <span className="icon-label">Facebook</span>
              </Link>
              {/* <Link
                href="https://twitter.com/r_ajeshbehera"
                className="contact-item"
                target="_blank"
              >
                <Image
                  src="/images/twitter-icon.png"
                  alt="Twitter"
                  width={40}
                  height={40}
                  className="contact-icon"
                />
                <span className="icon-label">Twitter</span>
              </Link> */}
            </div>
            <div className="address-item">
              <Image
                src="/images/location-icon.jpg"
                alt="Location"
                width={40}
                height={40}
                className="contact-icon location-icon"
              />
              <span className="icon-label"></span>
              <p> 767040, Balangir, Odisha, India</p>
            </div>
          </div>
        </div>
        <div className="card-spacing"></div>
        <div className="feedback-form-container">
          <h3 className="feedback-form-title">Feedback Form</h3>
          <FeedbackForm />
        </div>
        <FeedbackList />
      </div>
    </section>
  );
}