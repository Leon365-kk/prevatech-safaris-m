import { useState, useEffect } from 'react';

// Hook for exit-intent detection (desktop only)
export const useExitIntent = (onExitIntent: () => void, delay: number = 0) => {
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (hasTriggered) return;

    let timer: NodeJS.Timeout;

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves through the top of the viewport
      if (e.clientY <= 0 && !hasTriggered) {
        if (delay > 0) {
          timer = setTimeout(() => {
            onExitIntent();
            setHasTriggered(true);
          }, delay);
        } else {
          onExitIntent();
          setHasTriggered(true);
        }
      }
    };

    // Only add listener on desktop devices
    if (window.innerWidth > 768) {
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (timer) clearTimeout(timer);
    };
  }, [onExitIntent, hasTriggered, delay]);

  return hasTriggered;
};

// Hook for scroll-triggered lead capture
export const useScrollTrigger = (onScrollTrigger: () => void, threshold: number = 0.7) => {
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (hasTriggered) return;

    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const scrollPercentage = scrollPosition / scrollHeight;

      if (scrollPercentage >= threshold) {
        onScrollTrigger();
        setHasTriggered(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onScrollTrigger, hasTriggered, threshold]);

  return hasTriggered;
};
