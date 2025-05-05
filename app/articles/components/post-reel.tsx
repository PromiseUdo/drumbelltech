// components/featured-posts-reel.tsx
"use client";
import { motion } from "framer-motion";
import PostCard from "./post-card";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { cn } from "@/lib/utils";
import readingTime from "reading-time";
import { BookOpen, RefreshCw } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function extractTextFromPostBody(postBody: any): string {
  let textContent = "";

  function extractContent(content: any[]) {
    content.forEach((node) => {
      if (node.nodeType === "text") {
        textContent += node.value + " ";
      } else if (node.content && Array.isArray(node.content)) {
        extractContent(node.content);
      }
    });
  }

  if (postBody && postBody.content) {
    extractContent(postBody.content);
  }

  return textContent.trim();
}

const PostsReel = ({
  posts,
  title,
  className,
  emptyTitle,
  emptyDescription,
}: {
  posts: any;
  title: string;
  className?: string;
  emptyTitle: string;
  emptyDescription: string;
}) => {
  // Limit to 3 posts

  return (
    <div className={cn("w-full pt-3 pb-10", className)}>
      <MaxWidthWrapper>
        <div className="border-white/20 relative backdrop-blur-lg">
          {/* Title */}
          <div className="mb-4 mt-5">
            <p className="text-[#f1d59f] font-nbInternational  font-medium uppercase text-xs tracking-wide">
              {title}
            </p>
          </div>

          {/* Scrollable Container */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } },
            }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#04306e] scrollbar-track-gray-100 pb-4"
          >
            {posts.length > 0 ? (
              posts?.map((post: any, idx: number) => {
                const postBodyText = extractTextFromPostBody(
                  post?.fields?.postBody
                );
                const readTime = readingTime(postBodyText).text;
                return (
                  <div key={idx} className="snap-center">
                    <PostCard
                      readTime={readTime}
                      post={post}
                      className={cn("w-full")}
                    />
                  </div>
                );
              })
            ) : (
              <motion.div
                variants={cardVariants}
                className="col-span-full flex flex-col items-center justify-center py-12   border-b border-gray-300"
              >
                <BookOpen className="w-12 h-12 text-[#f1d59f] mb-4" />
                <h3 className="text-xs uppercase font-nbInternational  font-semibold text-white mb-2">
                  {emptyTitle}
                </h3>
                <p className="text-xs font-nbMono text-muted-foreground text-center max-w-md">
                  {emptyDescription}
                </p>
                <a
                  href="/blog"
                  className="mt-4 flex items-center text-xs text-[#f1d59f] hover:text-[#05418f] transition-colors font-nbMono"
                >
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Explore Other Posts
                </a>
              </motion.div>
            )}
          </motion.div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default PostsReel;
