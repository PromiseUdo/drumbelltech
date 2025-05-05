"use client";

import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get("search") || ""
  );

  // Sync input with URL query parameter
  useEffect(() => {
    setSearchQuery(searchParams.get("search") || "");
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    if (searchQuery.trim()) {
      params.set("search", searchQuery.trim());
    } else {
      params.delete("search");
    }
    router.push(`/blog?${params.toString()}`);
  };

  return (
    <div className="w-full border-b border-gray-200 py-4">
      <MaxWidthWrapper>
        <div className="w-full flex flex-col justify-center sm:flex-row items-center sm:justify-between">
          {/* Blog Title */}
          <h1 className="text-5xl font-nbInternational  text-white">
            Articles
          </h1>

          {/* Search Input */}
          <form onSubmit={handleSearch} className="relative w-full sm:max-w-xs">
            <Input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="font-nbMono focus-visible:!ring-[#04306e] focus-visible:!ring-2 mt-1 py-6 shadow-none border-gray-300 !rounded w-full text-white placeholder-gray-400"
              aria-label="Search blog posts"
            />
            <button
              type="submit"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <Search
                className="h-5 w-5 text-white hover:text-[#04306e]"
                aria-hidden="true"
              />
            </button>
          </form>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Header;
