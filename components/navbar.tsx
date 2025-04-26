// "use client";

// import React, { useEffect, useState } from "react";
// import MaxWidthWrapper from "./max-width-wrapper";
// import Link from "next/link";
// import { Moon, Sun } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const Navbar = () => {
//   const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode to match server

//   // Toggle theme and update document class
//   const toggleTheme = () => {
//     const newMode = !isDarkMode;
//     setIsDarkMode(newMode);
//     document.documentElement.classList.toggle("dark", newMode);
//     localStorage.setItem("theme", newMode ? "dark" : "light");
//   };

//   // Sync theme with localStorage on client-side only
//   useEffect(() => {
//     // Only run on client to avoid SSR mismatch
//     const savedTheme = localStorage.getItem("theme");
//     if (savedTheme) {
//       const isDark = savedTheme === "dark";
//       setIsDarkMode(isDark);
//       document.documentElement.classList.toggle("dark", isDark);
//     } else {
//       // Default to dark mode (already set by RootLayout)
//       localStorage.setItem("theme", "dark");
//     }
//   }, []);

//   return (
//     <div className="sticky top-0 z-50 py-3 inset-x-0 bg-background">
//       <header className="relative">
//         <MaxWidthWrapper>
//           <div className="flex items-center justify-between">
//             <div className="flex md:items-center space-y-4 md:space-y-0 md:space-x-24 flex-col md:flex-row">
//               <div className="flex rounded-md ">
//                 <Link
//                   href="/"
//                   className="text-foreground text-xl flex items-center"
//                 >
//                   Drumbell Tech
//                 </Link>
//               </div>
//               <div className="flex items-center gap-10">
//                 <Link
//                   href="/"
//                   className="text-previous-foreground hover:text-[#f1d59f] transition-colors duration-200"
//                 >
//                   About Us
//                 </Link>
//                 <Link
//                   href="/"
//                   className="text-foreground hover:text-[#f1d59f] transition-colors duration-200"
//                 >
//                   Services
//                 </Link>
//                 <Link
//                   href="/"
//                   className="text-foreground hover:text-[#f1d59f] transition-colors duration-200"
//                 >
//                   Products
//                 </Link>
//               </div>
//             </div>
//             <div className="hidden md:flex items-center">
//               <Button
//                 variant="ghost"
//                 size="icon"
//                 onClick={toggleTheme}
//                 aria-label={
//                   isDarkMode ? "Switch to light mode" : "Switch to dark mode"
//                 }
//                 className="hover:bg-accent"
//               >
//                 {isDarkMode ? (
//                   <Sun className="w-5 h-5 text-yellow-400" />
//                 ) : (
//                   <Moon className="w-5 h-5 text-muted-foreground" />
//                 )}
//               </Button>
//             </div>
//           </div>
//         </MaxWidthWrapper>
//       </header>
//     </div>
//   );
// };

// export default Navbar;

"use client";

import React, { useEffect, useState } from "react";
import MaxWidthWrapper from "./max-width-wrapper";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [isLoading, setIsLoading] = useState(true); // Track loader state

  // Toggle theme and update document class
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  // Sync theme and check loader state
  useEffect(() => {
    // Theme sync
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      const isDark = savedTheme === "dark";
      setIsDarkMode(isDark);
      document.documentElement.classList.toggle("dark", isDark);
    } else {
      localStorage.setItem("theme", "dark");
    }

    // Check if loader has completed
    const hasLoaded = sessionStorage.getItem("hasLoaded");
    if (hasLoaded) {
      setIsLoading(false);
    } else {
      // Poll for hasLoaded to handle async loader completion
      const checkLoaded = setInterval(() => {
        if (sessionStorage.getItem("hasLoaded")) {
          setIsLoading(false);
          clearInterval(checkLoaded);
        }
      }, 100); // Check every 100ms

      return () => clearInterval(checkLoaded);
    }
  }, []);

  // Hide navbar during loading
  if (isLoading) {
    return null;
  }

  return (
    <div className="sticky top-0 z-50 py-3 inset-x-0 bg-background">
      <header className="relative">
        <MaxWidthWrapper>
          <div className="flex items-center justify-between">
            <div className="flex md:items-center space-y-4 md:space-y-0 md:space-x-24 flex-col md:flex-row">
              <div className="flex rounded-md">
                <Link
                  href="/"
                  className="text-foreground text-xl flex items-center glassy-effect px-4 py-2 rounded-md transition-colors duration-200 hover:text-[#f1d59f]"
                >
                  Drumbell Tech
                </Link>
              </div>
              <div className="flex items-center gap-10">
                <Link
                  href="/"
                  className="text-foreground glassy-effect px-4 py-2 rounded-md transition-colors duration-200 hover:text-[#f1d59f]"
                >
                  About Us
                </Link>
                <Link
                  href="/"
                  className="text-foreground glassy-effect px-4 py-2 rounded-md transition-colors duration-200 hover:text-[#f1d59f]"
                >
                  Services
                </Link>
                <Link
                  href="/"
                  className="text-foreground glassy-effect px-4 py-2 rounded-md transition-colors duration-200 hover:text-[#f1d59f]"
                >
                  Products
                </Link>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                aria-label={
                  isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                }
                className="glassy-effect p-2 rounded-md hover:bg-accent/50 transition-colors duration-200"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-400" />
                ) : (
                  <Moon className="w-5 h-5 text-muted-foreground" />
                )}
              </Button>
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
