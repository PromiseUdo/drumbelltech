'use client';

import React, { useEffect, useRef, useState } from 'react';
import MaxWidthWrapper from './max-width-wrapper';
import Link from 'next/link';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true); // Start hidden
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const navRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !navRef.current?.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle('dark', newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  // Sync theme and listen for loader completion
  useEffect(() => {
    // Theme sync
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      const isDark = savedTheme === 'dark';
      setIsDarkMode(isDark);
      document.documentElement.classList.toggle('dark', isDark);
    } else {
      localStorage.setItem('theme', 'dark');
    }

    // Check initial hasLoaded state
    if (sessionStorage.getItem('hasLoaded')) {
      setIsLoading(false);
    }

    // Listen for loader completion
    const handleLoaderComplete = () => {
      setIsLoading(false);
    };
    window.addEventListener('loaderComplete', handleLoaderComplete);

    return () => {
      window.removeEventListener('loaderComplete', handleLoaderComplete);
    };
  }, []);

  // Hide navbar during loading
  // if (isLoading) {
  //   return null;
  // }

  return (
    <div ref={navRef} className="sticky top-0 z-50 py-3 inset-x-0 bg-black">
      <MaxWidthWrapper className="relative">
        <div className="flex items-center justify-between">
          <div className="flex md:items-center space-y-4 md:space-y-0 md:space-x-24 flex-col md:flex-row">
            <div className="flex rounded-md">
              <Link
                href="/"
                className="font-nbInternational text-foreground text-xl flex items-center glassy-effect px-4 py-2 rounded-md transition-colors duration-200 hover:text-[#f1d59f]"
              >
                Drumbell Tech
              </Link>
            </div>
            <div className="hidden md:flex items-center gap-10">
              <Link
                href="/about-us"
                className="font-nbInternational  text-foreground glassy-effect px-4 py-2 rounded-md transition-colors duration-200 hover:text-[#f1d59f]"
              >
                About Us
              </Link>
              <Link
                href="/#services"
                className="font-nbInternational   text-foreground glassy-effect px-4 py-2 rounded-md transition-colors duration-200 hover:text-[#f1d59f]"
              >
                Services
              </Link>
              <Link
                href="/#products"
                className="font-nbInternational  text-foreground glassy-effect px-4 py-2 rounded-md transition-colors duration-200 hover:text-[#f1d59f]"
              >
                Products
              </Link>
              <Link
                href="/articles"
                className="font-nbInternational  text-foreground glassy-effect px-4 py-2 rounded-md transition-colors duration-200 hover:text-[#f1d59f]"
              >
                Articles
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact-us"
              className="font-nbInternational text-xs text-black bg-[#f1d59f] hover:bg-[#e8c882] px-4 py-2 rounded-md transition-colors duration-200"
            >
              Get in Touch
            </Link>
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              aria-label={
                isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
              }
              className="glassy-effect p-2 rounded-md hover:bg-accent/50 transition-colors duration-200"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-muted-foreground" />
              )}
            </Button> */}
          </div>

          {/* Mobile trigger */}
          <div className="md:hidden flex items-center gap-4">
            <Button
              variant="ghost"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div
                className={`transition-transform duration-300 ease-in-out ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-white" />
                ) : (
                  <Menu className="h-6 w-6 text-white" />
                )}
              </div>
            </Button>
          </div>
        </div>

        <div
          ref={mobileMenuRef}
          className={`fixed top-[4rem] left-0 right-0 md:hidden border-b border-t border-[#f1d59f50] bg-background shadow-lg z-50 overflow-y-auto transition-all duration-300 ease-in-out ${
            isMenuOpen
              ? 'opacity-100 pointer-events-auto translate-y-0'
              : 'opacity-0 pointer-events-none -translate-y-5'
          }`}
          style={{ maxHeight: 'calc(100vh - 4rem)' }}
        >
          <div className="px-4 py-4 space-y-1">
            <div className="flex flex-col items-start space-y-1">
              <Link
                href="/about-us"
                className="py-2 font-nbInternational  text-white hover:text-[#f1d59f] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/#services"
                className="py-2 font-nbInternational   text-white hover:text-[#f1d59f] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/#products"
                className="py-2 font-nbInternational  text-white hover:text-[#f1d59f] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/articles"
                className="py-2 font-nbInternational  text-white hover:text-[#f1d59f] transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Articles
              </Link>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Navbar;
