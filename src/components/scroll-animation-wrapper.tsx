"use client";

import { useRef, useEffect, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-in' | 'slide-in-up' | 'slide-in-left' | 'slide-in-right';
  delay?: string;
}

export function ScrollAnimationWrapper({ children, className, animation = 'fade-in', delay = '0ms' }: ScrollAnimationWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animationClasses = {
    'fade-in': 'opacity-0',
    'slide-in-up': 'opacity-0 translate-y-8',
    'slide-in-left': 'opacity-0 -translate-x-8',
    'slide-in-right': 'opacity-0 translate-x-8',
  };

  const visibleClasses = {
    'fade-in': 'opacity-100',
    'slide-in-up': 'opacity-100 translate-y-0',
    'slide-in-left': 'opacity-100 translate-x-0',
    'slide-in-right': 'opacity-100 translate-x-0',
  }

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-1000 ease-out',
        className,
        isVisible ? visibleClasses[animation] : animationClasses[animation]
      )}
      style={{ transitionDelay: delay }}
    >
      {children}
    </div>
  );
}
