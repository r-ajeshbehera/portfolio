"use client";

import { useEffect } from "react";

/**
 * Shared by the "preview" list pages (app/blog/page.jsx, app/projects/page.jsx):
 * when arriving back from the "/all" page via a `?from=all` link, scroll the
 * section heading into view if it isn't already visible. Previously this
 * effect was copy-pasted identically into both pages.
 */
export function useScrollToHeaderOnReturn(shouldScroll) {
  useEffect(() => {
    if (!shouldScroll) return;
    const header = document.querySelector("h2");
    if (!header) return;
    const rect = header.getBoundingClientRect();
    const isOutOfViewport = rect.top < 0 || rect.bottom > window.innerHeight;
    if (isOutOfViewport) {
      header.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [shouldScroll]);
}

/**
 * Shared by the "/all" list pages (app/blog/all/page.jsx,
 * app/projects/all/page.jsx): given the full item list and whether
 * `?show=all` is set, returns what to actually render plus the flags each
 * page needs to decide whether to show "View More" / "View Less" links.
 * Previously this slicing logic was copy-pasted identically into both pages.
 */
export function getPagedItems(items, { showAll, pageSize = 15 }) {
  const validItems = items || [];
  const displayedItems = showAll ? validItems : validItems.slice(0, pageSize);
  return {
    displayedItems,
    hasMore: validItems.length > pageSize && !showAll,
  };
}
