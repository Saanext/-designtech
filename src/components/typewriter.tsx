"use client";

import { useState, useEffect, useRef } from 'react';

interface TypewriterProps {
  words: string[];
  className?: string;
}

export function Typewriter({ words, className }: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const typingSpeed = 150;
    const deletingSpeed = 100;
    const delayAfterTyping = 1500;

    const handleTyping = () => {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        if (text.length > 0) {
          setText(current => current.substring(0, current.length - 1));
          typingTimeoutRef.current = setTimeout(handleTyping, deletingSpeed);
        } else {
          setIsDeleting(false);
          setWordIndex((current) => (current + 1) % words.length);
        }
      } else {
        if (text.length < currentWord.length) {
          setText(current => currentWord.substring(0, current.length + 1));
          typingTimeoutRef.current = setTimeout(handleTyping, typingSpeed);
        } else {
          typingTimeoutRef.current = setTimeout(() => setIsDeleting(true), delayAfterTyping);
        }
      }
    };

    typingTimeoutRef.current = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, [text, isDeleting, wordIndex, words]);

  return (
    <span className="text-primary inline-block">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}
