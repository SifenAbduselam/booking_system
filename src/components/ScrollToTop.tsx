// src/components/ScrollToTop.tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop Component
 * Scrolls the window to the top whenever the route path changes.
 * Useful for single-page apps to mimic default browser behavior.
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top-left of the window
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // you can use 'smooth' if you want smooth scrolling
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
