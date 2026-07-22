"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark'); // Default to dark
  const [isManualOverride, setIsManualOverride] = useState(true); // Default to true
  const pathname = usePathname();

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

  // Keep the applied theme in sync with localStorage on every route change.
  // NOTE: the previous version used `router.asPath` from `next/router`, which
  // doesn't exist on the App Router's `useRouter()` (that's a Pages Router
  // API). It always evaluated to `undefined`, so this effect never actually
  // re-ran on navigation. Using `usePathname()` from `next/navigation` fixes
  // that -- the effect now re-runs on every route change as intended.
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || 'dark';
      const currentTheme = document.documentElement.getAttribute('data-theme');
      if (currentTheme !== savedTheme) {
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
      }
    }
  }, [pathname]);

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
