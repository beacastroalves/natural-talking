
import React, { useEffect, useRef, useState } from 'react';

interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
  delay?: number;
}

export function useScrollReveal<T extends HTMLElement>(options: RevealOptions = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -40px 0px', delay = 0 } = options;
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, delay]);

  return {
    ref: ref as React.RefObject<T>,
    isVisible
  };
}

export function useStaggerReveal(itemCount: number, baseDelay = 0, staggerMs = 80) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));
  const triggered = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !triggered.current) {
          triggered.current = true;
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => {
                const next = [...prev];
                next[i] = true;
                return next;
              });
            }, baseDelay + i * staggerMs);
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [itemCount, baseDelay, staggerMs]);

  return {
    containerRef: containerRef as React.RefObject<HTMLDivElement>,
    visibleItems
  };
}

// CSS class helper
export const revealClass = (isVisible: boolean, direction: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade' = 'up') => {
  const base = 'transition-all duration-700 ease-out';
  
  if (isVisible) return `${base} opacity-100 translate-x-0 translate-y-0 scale-100`;

  switch (direction) {
    case 'up': return `${base} opacity-0 translate-y-8`;
    case 'down': return `${base} opacity-0 -translate-y-8`;
    case 'left': return `${base} opacity-0 translate-x-8`;
    case 'right': return `${base} opacity-0 -translate-x-8`;
    case 'scale': return `${base} opacity-0 scale-95`;
    case 'fade': return `${base} opacity-0`;
    default: return `${base} opacity-0 translate-y-8`;
  }
};

export const staggerItemClass = (isVisible: boolean, direction: 'up' | 'left' | 'right' | 'scale' = 'up') => {
  const base = 'transition-all duration-500 ease-out';
  
  if (isVisible) return `${base} opacity-100 translate-x-0 translate-y-0 scale-100`;

  switch (direction) {
    case 'up': return `${base} opacity-0 translate-y-6`;
    case 'left': return `${base} opacity-0 translate-x-6`;
    case 'right': return `${base} opacity-0 -translate-x-6`;
    case 'scale': return `${base} opacity-0 scale-90`;
    default: return `${base} opacity-0 translate-y-6`;
  }
};
