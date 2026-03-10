"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projects } from "../data/projects";
import { rawBlogs as blogs } from "../data/blogs";
import LikeDislike from "./LikeDislike";

export default function Search() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleClear = () => {
    setSearchQuery("");
  };

  const formatDate = (date) => {
    if (!date || typeof date !== "string") return "Date not available";
    return date;
  };

  const filteredItems = [...projects, ...blogs].filter((item) => {
    if (!searchQuery) return false;
    const query = searchQuery.toLowerCase();

    const titleMatch = item.title?.toLowerCase().includes(query) || false;
    const categoryMatch = item.category?.toLowerCase().includes(query) || false;
    const descriptionMatch =
      item.description?.toLowerCase().includes(query) || false;

    const projectContent = item.overview
      ? [
          ...(item.overview.problem?.map((p) => p || "") || []),
          ...(item.overview.solution?.map((s) => s || "") || []),
          ...(item.overview.impact?.map((i) => i || "") || []),
          ...(item.technicalDetails?.architecture?.map((a) => a || "") || []),
          ...(item.technicalDetails?.keyComponents?.map((k) => k || "") || []),
          ...(item.technicalDetails?.implementation?.map((i) => i || "") || []),
          ...(item.challengesOvercome?.map(
            (c) => `${c.challenge} ${c.solution}` || ""
          ) || []),
          ...(item.skillsDemonstrated?.map((s) => s || "") || []),
          ...(item.futureScope?.map((f) => f || "") || []),
          ...(item.metrics?.map((m) => m || "") || []),
        ].join(" ")
      : "";

    const blogContent = item.story
      ? [
          ...(item.story.inspiration?.map((i) => i || "") || []),
          ...(item.story.journey?.map((j) => j || "") || []),
          ...(item.story.breakthroughs?.map((b) => b || "") || []),
          ...(item.challengesFaced?.map((c) => c || "") || []),
          ...(item.lessonsLearned?.map((l) => l || "") || []),
          ...(item.readerTakeaways?.map((t) => t || "") || []),
          ...(item.callToAction?.map((a) => a || "") || []),
        ].join(" ")
      : "";

    const contentMatch = (
      descriptionMatch +
      " " +
      projectContent +
      " " +
      blogContent
    )
      .toLowerCase()
      .includes(query);

    return titleMatch || categoryMatch || contentMatch;
  });

  return (
    <div className="search-container">
      <div className="search-input-wrapper">
        <Image
          src="/images/search-icon.png"
          alt="Search Icon"
          width={20}
          height={20}
          className="search-icon"
        />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search projects and blogs..."
          className="search-input"
        />
        {searchQuery && (
          <button onClick={handleClear} className="clear-button">
            <Image
              src="/images/clear-icon.png"
              alt="Clear Icon"
              width={20}
              height={20}
              className="clear-icon"
            />
          </button>
        )}
      </div>
      {searchQuery && (
        <div className="search-results grid-1-2-3">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => {
              const isBlog = item.hasOwnProperty("story");
              const project =
                isBlog && item.projectId
                  ? projects.find((p) => p.id === item.projectId)
                  : null;
              const title = item.title || "Untitled";
              const imageSrc =
                isBlog && project
                  ? project.image || "/images/logo.jpg"
                  : item.image || "/images/logo.jpg";
              const category =
                isBlog && project
                  ? project.category || item.category || "Unknown"
                  : item.category || "Unknown";
              const date =
                isBlog && project
                  ? project.date || item.date || "Date not available"
                  : item.date || "Date not available";

              return (
                <div
                  key={isBlog ? `blog-${item.id}` : `project-${item.id}`}
                  className="card-wrapper"
                >
                  <div className="card-type-badge">
                    {isBlog ? "Blog" : "Project"}
                  </div>
                  <div className="card">
                    <div
                      className={
                        isBlog ? "blog-card-image" : "project-card-image"
                      }
                    >
                      <Image
                        src={imageSrc}
                        alt={title}
                        width={400}
                        height={200}
                        className={isBlog ? "blog-card-image" : "project-image"}
                      />
                    </div>
                    <div
                      className={
                        isBlog ? "blog-card-content" : "project-card-content"
                      }
                    >
                      <LikeDislike
                        itemId={item.id}
                        itemType={isBlog ? "Blog" : "Project"}
                      />
                      <h3>{title}</h3>
                      <div
                        className={
                          isBlog
                            ? "blog-card-category"
                            : "project-card-category"
                        }
                      >
                        <p>Category: {category}</p>
                      </div>
                      <div
                        className={
                          isBlog ? "blog-card-meta" : "project-card-meta"
                        }
                      >
                        <p>
                          {isBlog ? "Published Date: " : "Live Date: "}
                          {formatDate(date)}
                        </p>
                      </div>
                      <div
                        className={
                          isBlog ? "blog-card-links" : "project-card-links"
                        }
                      >
                        <Link
                          href={
                            isBlog ? `/blog/${item.id}` : `/projects/${item.id}`
                          }
                          className="btn-view-project"
                        >
                          {isBlog ? "Read More" : "View Project"}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No results found.</p>
          )}
        </div>
      )}
    </div>
  );
}
