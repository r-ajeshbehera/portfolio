"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark'); // Default to dark
  const [isManualOverride, setIsManualOverride] = useState(true); // Default to true
  const router = useRouter();

  // Initialize theme on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'dark';
      const savedOverride = localStorage.getItem('isManualOverride') !== 'false';
      setTheme(savedTheme);
      setIsManualOverride(savedOverride);
      document.documentElement.setAttribute('data-theme', savedTheme);
      localStorage.setItem('theme', savedTheme);
      localStorage.setItem('isManualOverride', savedOverride.toString());
    }
  }, []);

  // Sync theme on route changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'dark';
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme !== savedTheme) {
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
      }
    }
  }, [router.asPath]); // Use router.asPath for all route changes

  const toggleTheme = () => {
    if (typeof window !== 'undefined') {
      const newTheme = theme === 'light' ? 'dark' : 'light';
      setTheme(newTheme);
      setIsManualOverride(true);
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      localStorage.setItem('isManualOverride', 'true');
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isManualOverride }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}