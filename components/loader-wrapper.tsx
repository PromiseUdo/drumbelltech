// "use client";

// import React, { useState, useEffect } from "react";
// import Loader from "./loader";

// const LoaderWrapper = ({ children }: { children: React.ReactNode }) => {
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     // Check if loader has already been shown in this session
//     const hasLoaded = sessionStorage.getItem("hasLoaded");
//     if (hasLoaded) {
//       setIsLoading(false);
//       return;
//     }

//     // Mark loader as shown after completion
//     const handleComplete = () => {
//       setIsLoading(false);
//       sessionStorage.setItem("hasLoaded", "true");
//     };

//     // Fallback timer to ensure loader completes
//     setTimeout(() => {
//       if (isLoading) handleComplete();
//     }, 4000); // 4s fallback

//     return () => {};
//   }, [isLoading]);

//   return isLoading ? (
//     <Loader onComplete={() => setIsLoading(false)} />
//   ) : (
//     <>{children}</>
//   );
// };

// export default LoaderWrapper;

"use client";

import React, { useState, useEffect, useCallback } from "react";
import Loader from "./loader";

const LoaderWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasStarted, setHasStarted] = useState(false); // Track if loader has started

  // Memoize onComplete
  const onComplete = useCallback(() => {
    setIsLoading(false);
    sessionStorage.setItem("hasLoaded", "true");
  }, []);

  useEffect(() => {
    // Only run loader on initial homepage load
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (hasLoaded && !hasStarted) {
      setIsLoading(false);
      return;
    }

    // Mark loader as started
    setHasStarted(true);

    // Ensure minimum display time (e.g., 1.5s) to allow counter to complete
    const minimumDisplayTime = setTimeout(() => {
      if (isLoading) {
        onComplete();
      }
    }, 1500); // 1.5s to cover ~1s count + 0.3s fade-out + buffer

    return () => {
      clearTimeout(minimumDisplayTime);
    };
  }, [isLoading, hasStarted, onComplete]);

  return isLoading ? <Loader onComplete={onComplete} /> : <>{children}</>;
};

export default LoaderWrapper;
