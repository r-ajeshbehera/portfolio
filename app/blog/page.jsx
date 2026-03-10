"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import BlogCard from "../../components/BlogCard";
import { blogs } from "../../data/blogs";

export default function Blog() {
  const searchParams = useSearchParams();
  const fromAll = searchParams.get("from") === "all";

  useEffect(() => {
    if (fromAll) {
      const header = document.querySelector("h2");
      if (header) {
        const rect = header.getBoundingClientRect();
        const isOutOfViewport =
          rect.top < 0 || rect.bottom > window.innerHeight;
        if (isOutOfViewport) {
          header.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  }, [fromAll]);

  const validBlogs = (blogs || []).slice(0, 6);

  return (
    <main style={{ paddingTop: "2.5rem" }}>
      <section className="section">
        <div className="container">
          <h2>All Blogs</h2>
          <div className="grid-1-2-3">
            {validBlogs.length > 0 ? (
              validBlogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
            ) : (
              <p>No blog posts available.</p>
            )}
          </div>
          {blogs.length > 6 && (
            <div className="view-more-container">
              <Link href="/blog/all" className="view-more" scroll={false}>
                View More
              </Link>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
