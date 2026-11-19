"use client";

import { useRef, useState } from "react";

export default function ShowreelVideo() {
  const ref = useRef(null);
  const [playing, setPlaying] = useState(true);
  const toggle = () => {
    const v = ref.current; if (!v) return;
    if (v.paused) { v.play(); setPlaying(true); } else { v.pause(); setPlaying(false); }
  };
  return (
    <div className="lw-video reveal d1">
      <video ref={ref} src="/media/showreel.mp4" poster="/media/poster.jpg" autoPlay muted loop playsInline aria-label="Sample workflow: an enquiry gets an instant reply and is saved for follow-up" />
      <span className="lw-video-tag">Sample workflow</span>
      <button type="button" className="lw-video-btn" onClick={toggle} aria-label={playing ? "Pause video" : "Play video"}>
        {playing
          ? <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><rect x="2" y="1" width="3.5" height="12" rx="1" fill="currentColor"/><rect x="8.5" y="1" width="3.5" height="12" rx="1" fill="currentColor"/></svg>
          : <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><path d="M3 1.5v11l9-5.5-9-5.5Z" fill="currentColor"/></svg>}
      </button>
    </div>
  );
}
