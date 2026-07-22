"use client";

import { useState, useEffect, useRef } from 'react';

export default function SkillBar({ name, level }) {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const skillBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (skillBarRef.current) {
      observer.observe(skillBarRef.current);
    }

    return () => {
      if (skillBarRef.current) {
        observer.unobserve(skillBarRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targetProgress = parseInt(level, 10);
    let currentProgress = 0;
    const increment = targetProgress / 100;
    const interval = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= targetProgress) {
        currentProgress = targetProgress;
        clearInterval(interval);
      }
      setProgress(Math.round(currentProgress));
    }, 20);

    return () => clearInterval(interval);
  }, [isVisible, level]);

  return (
    <div className="skill-bar" ref={skillBarRef}>
      <div className="skill-bar-header">
        <span>{name}</span>
        <span>{isVisible ? `${progress}%` : '0%'}</span>
      </div>
      <div className="skill-bar-progress">
        <div
          className="skill-bar-fill"
          style={{ width: isVisible ? level : '0%' }}
        />
      </div>
    </div>
  );
}
