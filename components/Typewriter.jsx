"use client";

import { useState, useEffect } from 'react';

export default function Typewriter() {
  const phrases = ["Software Development Engineer(SDE)", "Full-Stack Developer", "Problem Solver"];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    if (process.env.NODE_ENV === 'development') {
      console.log('Typewriter: Rendering phrase', phrases[currentPhrase], 'Text:', currentText, 'CharIndex:', charIndex, 'IsDeleting:', isDeleting);
    }

    const typeSpeed = 150;
    const deleteSpeed = 75;
    const pauseTime = 1000;
    const fullText = phrases[currentPhrase];

    const handleTyping = () => {
      if (!isDeleting && charIndex < fullText.length) {
        // Typing phase
        setCurrentText(fullText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        // Deleting phase
        setCurrentText(fullText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === fullText.length) {
        // Pause after typing
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && charIndex === 0) {
        // Switch to next phrase after deleting
        setIsDeleting(false);
        setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        setCharIndex(0);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, currentPhrase, isMounted, phrases]);

  if (!isMounted) {
    return <span className="typewriter typewriter-cursor">Loading...</span>;
  }

  return <span className="typewriter typewriter-cursor">{currentText}</span>;
}