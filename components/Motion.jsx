"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export default function Motion() {
  const path = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      root.classList.remove("js-anim");
      root.classList.add("anim-ready");
      return undefined;
    }

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (t) => lenis.raf(t * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      root.classList.add("anim-ready");
      gsap.fromTo("[data-hero-rise]", { y: 22, autoAlpha: 0, filter: "blur(8px)" }, { y: 0, autoAlpha: 1, filter: "blur(0px)", duration: 1.1, ease: "power3.out", stagger: 0.11, delay: 0.1, clearProps: "filter" });

      gsap.fromTo(".nav-row", { y: -24, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.9, ease: "power3.out", clearProps: "transform,opacity,visibility" });
      if (document.querySelector(".aurora")) {
        gsap.to(".aurora", { yPercent: 22, opacity: 0.45, ease: "none", scrollTrigger: { trigger: ".hero", start: "top top", end: "bottom top", scrub: true } });
      }
      const reel = document.querySelector("[data-reel]");
      if (reel) {
        gsap.fromTo(reel, { rotateX: 8, scale: 0.96, transformPerspective: 1400 }, { rotateX: 0, scale: 1, ease: "none", scrollTrigger: { trigger: reel, start: "top 88%", end: "top 25%", scrub: 0.6 } });
      }

      gsap.set("[data-reveal]", { y: 20, autoAlpha: 0 });
      ScrollTrigger.batch("[data-reveal]", {
        start: "top 90%", once: true,
        onEnter: (els) => gsap.to(els, { y: 0, autoAlpha: 1, duration: 0.9, ease: "power3.out", stagger: 0.07, overwrite: true }),
      });
    });

    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const onMove = (e) => {
      const tile = e.target.closest?.("[data-glow]");
      if (!tile) return;
      const r = tile.getBoundingClientRect();
      tile.style.setProperty("--mx", `${e.clientX - r.left}px`);
      tile.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    if (fine) document.addEventListener("pointermove", onMove, { passive: true });
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      document.removeEventListener("pointermove", onMove);
      gsap.ticker.remove(tick);
      lenis.destroy();
      ctx.revert();
    };
  }, [path]);

  return null;
}
