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
          I am actively seeking internship and entry-level Software Engineer opportunities.
          Feel free to reach out for any relevant roles or professional discussions.
        </p>

        <div className="card contact-card">
          <h3>Professional Contact</h3>

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
                <span className="icon-label">Email (Primary)</span>
              </Link>

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
                <span className="icon-label">LinkedIn Profile</span>
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
                <span className="icon-label">GitHub Profile</span>
              </Link>
            </div>

            <div className="address-item">
              <p>Balangir, Odisha, India</p>
            </div>

          </div>
        </div>

        <div className="card-spacing"></div>

        <div className="feedback-form-container">
          <h3 className="feedback-form-title">Connect / Message</h3>
          <FeedbackForm />
        </div>

        <FeedbackList />

      </div>
    </section>
  );
}
