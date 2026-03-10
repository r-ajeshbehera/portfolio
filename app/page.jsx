"use client";

import Image from "next/image";
import Link from "next/link";
import Typewriter from "../components/Typewriter";
import ProjectCard from "../components/ProjectCard";
import BlogCard from "../components/BlogCard";
import FeedbackSlider from "../components/FeedbackSlider";
import Search from "../components/Search";
import ScrollToTop from "../components/ScrollToTop";
import { blogs } from "../data/blogs";
import { projects } from "../data/projects";

export default function Home() {
  const validBlogs = (blogs || []).slice(0, 3);

  const handleResumeClick = () => {
    window.open("/resume.pdf", "_blank");
  };

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container flex-col-md-row">
          <div className="hero-text">
            <h1>Hi, I am Rajesh Behera</h1>
            <div className="typewriter-wrapper">
              <Typewriter />
            </div>
            <div className="hero-content">
              <p className="hero-description">
                I enjoy to build simple, fast, and impactful software solutions that
                address real-world problems and deliver value.
                <Link href="/about" className="link-hover know-more">
                  {" "}
                  more.
                </Link>
              </p>
              <p className="hero-contact">
                📩 Contact me:{" "}
                <a
                  href="mailto:rajeshbehera.works@gmail.com"
                  className="link-hover"
                >
                  rajeshbehera.works@gmail.com
                </a>{" "}
                {/* | Phone:{" "}
                <a href="tel:+911234567890" className="link-hover">
                  +91 934 831 3504
                </a> */}
              </p>
              <div className="hero-buttons">
                <a
                  href="/resume.pdf"
                  download
                  className="btn-primary resume-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleResumeClick}
                >
                  Hire Me <span className="resume-arrow">↓</span>
                </a>
                <Link
                  href="https://github.com/r-ajeshbehera"
                  className="btn-secondary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <Image
              src="/images/profile.jpg"
              alt="Rajesh Behera"
              width={300}
              height={375}
              className="profile-image"
            />
          </div>
        </div>
      </section>

      <FeedbackSlider />

      <section
        className="section problem-solving-section"
        style={{ marginBottom: "0.5rem" }}
      >
        <div
          className="container"
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}
        >
          <div
            className="problem-solving-content"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.4rem",
              width: "100%",
              margin: "0 auto",
            }}
          >
            <p
              style={{
                color: "var(--text-primary, #333)",
                fontSize: "1rem",
                margin: 7,
                textAlign: "center",
              }}
            >
              Enhance Your Problem Solving and Logic Building
            </p>
            <Link
              href="https://github.com/r-ajeshbehera/problem-logic-solution"
              className="btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go GitHub
            </Link>
          </div>
        </div>
      </section>

      <section className="section search-section" style={{ marginTop: 0 }}>
        <div
          className="container"
          style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}
        >
          <Search />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Projects</h2>
          <div className="grid-1-2-3">
            {Array.isArray(projects) && projects.length > 0 ? (
              projects
                .slice(0, 3)
                .map((project) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    isSearchResult={false}
                  />
                ))
            ) : (
              <p>No projects available.</p>
            )}
          </div>
          <div className="view-more-container">
            <Link href="/projects" className="view-more">
              View More
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Blog</h2>
          <div className="grid-1-2-3">
            {validBlogs.length > 0 ? (
              validBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
            ) : (
              <p>No blog posts available.</p>
            )}
          </div>
          <div className="view-more-container">
            <Link href="/blog" className="view-more">
              View More
            </Link>
          </div>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
}
