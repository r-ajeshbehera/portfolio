"use client";

import { useEffect } from 'react';

export default function ThemeManager({ children }) {
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const setTheme = (theme) => {
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    };

    // Default to light mode on first load
    if (!savedTheme) {
      setTheme('light');
    } else {
      setTheme(savedTheme);
    }
  }, []); // Run only on mount to set initial theme

  return <>{children}</>;
}