"use client";

import React, { useState, useEffect, useCallback } from "react";
import Loader from "./loader";

const LoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  // Memoize onComplete
  const onComplete = useCallback(() => {
    setIsLoading(false);
    sessionStorage.setItem("hasLoaded", "true");
    // Dispatch custom event to notify Navbar and Footer
    window.dispatchEvent(new Event("loaderComplete"));
  }, []);

  useEffect(() => {
    // Only run loader on initial homepage load
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (hasLoaded) {
      setIsLoading(false);
      window.dispatchEvent(new Event("loaderComplete"));
      return;
    }

    // Ensure minimum display time (1.5s) to allow counter to complete
    const minimumDisplayTime = setTimeout(() => {
      if (isLoading) {
        onComplete();
      }
    }, 1500); // 1.5s for ~1s count + 0.3s fade-out + buffer

    return () => {
      clearTimeout(minimumDisplayTime);
    };
  }, [isLoading, onComplete]);

  return isLoading ? <Loader onComplete={onComplete} /> : <>{children}</>;
};

export default LoaderWrapper;