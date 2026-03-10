"use client";

import Link from "next/link";
import BlogCard from "../../../components/BlogCard";
import { blogs } from "../../../data/blogs";

export default function AllBlogs({ searchParams }) {
  const showAll = searchParams.show === "all";
  const validBlogs = blogs || [];
  const displayedBlogs = showAll ? validBlogs : validBlogs.slice(0, 15);

  return (
    <main style={{ paddingTop: "2.5rem" }}>
      <section className="section">
        <div className="container">
          <h2>All Blogs</h2>
          <div className="grid-1-2-3">
            {displayedBlogs.length > 0 ? (
              displayedBlogs.map((blog) => (
                <BlogCard key={blog.id} blog={blog} />
              ))
            ) : (
              <p>No blog posts available.</p>
            )}
          </div>
          <div
            className="view-more-container"
            style={{ display: "flex", gap: "1rem" }}
          >
            {validBlogs.length > 15 && !showAll && (
              <Link
                href="/blog/all?show=all"
                className="view-more"
                scroll={false}
              >
                View More
              </Link>
            )}
            {showAll && (
              <Link href="/blog?from=all" className="view-more" scroll={false}>
                View Less
              </Link>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
