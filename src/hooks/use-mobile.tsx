import * as React from "react";

const MOBILE_BREAKPOINT = 768; // breakpoint for mobile devices (px)

export function useIsMobile(): boolean {
  // State to track if the viewport is mobile-sized
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Initialize with current window width if available, else false for SSR compatibility
    if (typeof window !== "undefined") {
      return window.innerWidth < MOBILE_BREAKPOINT;
    }
    return false;
  });

  React.useEffect(() => {
    const mediaQueryList = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);

    // Handler to update state on media query change
    const handleMediaChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Initial check in case effect runs after window resize
    setIsMobile(mediaQueryList.matches);

    // Listen for media query changes
    mediaQueryList.addEventListener("change", handleMediaChange);

    // Cleanup listener on unmount
    return () => mediaQueryList.removeEventListener("change", handleMediaChange);
  }, []);

  return isMobile;
}
