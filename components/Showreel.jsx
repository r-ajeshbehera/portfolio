"use client";

import { useEffect, useRef, useState } from "react";

export default function Showreel() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    v.play().then(() => setPlaying(true)).catch(() => {});
  }, []);

  const toggle = () => {
    const v = ref.current;
    if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
  };

  return (
    <figure className="reel" data-reel="">
      <video ref={ref} muted loop playsInline preload="metadata" poster="/media/poster.jpg" width="1600" height="900" aria-label="Sample workflow: a customer enquiry gets a reply, is saved to a sheet and creates a follow-up reminder.">
        <source src="/media/showreel.mp4" type="video/mp4" />
      </video>
      <button type="button" className="reel-toggle" onClick={toggle}>{playing ? "Pause video" : "Play video"}</button>
    </figure>
  );
}
