"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

export default function Navbar({ isVisible }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Persist theme changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Reset mobile menu on navigation
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu when switching to desktop mode
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    // Run on mount and resize
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleResumeClick = () => {
    // Open PDF in new tab
    window.open("/resume.pdf", "_blank");
    // Trigger download
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    // Only toggle mobile menu in mobile mode
    if (window.innerWidth < 768) {
      toggleMobileMenu();
    }
  };

  return (
    <nav className={`navbar ${isVisible ? "" : "hidden"}`}>
      <div className="container navbar-content">
        <Link href="/" className="navbar-logo">
          <Image src="/images/logo.png" alt="Logo" width={60} height={60} />
          <span>r_ajeshbehera</span>
        </Link>
        <div className="navbar-links">
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link href="/about" className={pathname === "/about" ? "active" : ""}>
            About
          </Link>
          <Link
            href="/projects"
            className={pathname.startsWith("/projects") ? "active" : ""}
          >
            Projects
          </Link>
          <Link
            href="/blog"
            className={pathname.startsWith("/blog") ? "active" : ""}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
          {!isHomePage && (
            <a
              href="/resume.pdf"
              className="resume-btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeClick}
            >
              Hire me <span className="resume-arrow">↓</span>
            </a>
          )}
          <button
            onClick={toggleTheme}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
            title="Toggle Theme"
          >
            <span className="theme-icon">
              {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </span>
          </button>
        </div>
        <button
          className="navbar-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
        <div className={`navbar-mobile ${isMobileMenuOpen ? "active" : ""}`}>
          <Link
            href="/"
            onClick={toggleMobileMenu}
            className={pathname === "/" ? "active" : ""}
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={toggleMobileMenu}
            className={pathname === "/about" ? "active" : ""}
          >
            About
          </Link>
          <Link
            href="/projects"
            onClick={toggleMobileMenu}
            className={pathname.startsWith("/projects") ? "active" : ""}
          >
            Projects
          </Link>
          <Link
            href="/blog"
            onClick={toggleMobileMenu}
            className={pathname.startsWith("/blog") ? "active" : ""}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            onClick={toggleMobileMenu}
            className={pathname === "/contact" ? "active" : ""}
          >
            Contact
          </Link>
          {!isHomePage && (
            <a
              href="/resume.pdf"
              className="resume-btn"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeClick}
            >
              Resume <span className="resume-arrow">↓</span>
            </a>
          )}
          <button
            onClick={() => {
              toggleTheme();
              toggleMobileMenu();
            }}
            className="theme-toggle-btn"
            aria-label="Toggle theme"
            title="Toggle Theme"
          >
            <span className="theme-icon">
              {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
