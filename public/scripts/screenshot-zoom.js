document.addEventListener("DOMContentLoaded", () => {
  const screenshotWrapper = document.querySelector(".screenshot-wrapper");
  const screenshots = document.querySelectorAll(".screenshot");

  function unzoomAll() {
    screenshots.forEach((img) => img.classList.remove("zoomed"));
    screenshotWrapper.classList.remove("zoomed-overlay");
  }

  screenshots.forEach((screenshot) => {
    screenshot.addEventListener("click", (e) => {
      e.stopPropagation();
      const isZoomed = screenshot.classList.contains("zoomed");
      unzoomAll();
      if (!isZoomed) {
        screenshot.classList.add("zoomed");
        screenshotWrapper.classList.add("zoomed-overlay");
        // Ensure the zoomed image is visible in the viewport
        screenshot.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  });

  screenshotWrapper.addEventListener("click", (e) => {
    if (e.target === screenshotWrapper) {
      unzoomAll();
    }
  });

  // Prevent clicks on zoomed image from bubbling to wrapper
  document.querySelectorAll(".screenshot.zoomed").forEach((zoomed) => {
    zoomed.addEventListener("click", (e) => {
      e.stopPropagation();
    });
  });
});
