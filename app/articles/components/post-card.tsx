"use client";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { extractTextFromPostBody } from "./post-reel";

interface PostCardProps {
  post: any;
  readTime?: string;
  className?: string;
}

const PostCard = ({ post, className, readTime }: PostCardProps) => {
  // Normalize image URL
  const imageUrl = post?.fields?.featuredImage?.fields?.file?.url
    ? `https:${post.fields.featuredImage.fields.file.url}`
    : "/default-image.jpg"; // Fallback image

  // Extract snippet from post body
  const postBodyText =
    extractTextFromPostBody(post?.fields?.postBody) || "No content available";

  // Safely access slug, fallback to a default or disable link
  const slug = post?.fields?.slug || null;
  const href = slug ? `/articles/${slug}` : "#"; // Fallback to "#" if no slug

  return (
    <motion.div transition={{ duration: 0.2, ease: "easeOut" }}>
      <Link
        href={href}
        aria-disabled={!slug}
        className={cn(!slug && "pointer-events-none")}
      >
        <Card
          className={cn(
            "w-56 h-[30rem] flex-shrink-0 bg-background hover:shadow-md transition-shadow duration-300 rounded overflow-hidden border border-[#f1d59f]",
            className
          )}
        >
          <CardContent className="p-0 flex space-y-3 flex-col h-full">
            {/* Post Image */}
            <div className="relative w-full h-48">
              <Image
                src={imageUrl}
                alt={
                  post?.fields?.title
                    ? `${post.fields.title} thumbnail`
                    : "Post thumbnail"
                }
                fill
                className="object-cover"
                sizes="224px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            {/* Post Title */}
            <div className="px-4 py-1 mt-3 h-28">
              <h3 className="text-[#ffffff] text-2xl line-clamp-3">
                {post?.fields?.title}
              </h3>
            </div>

            {/* Post Snippet */}
            <div className="px-4 flex-1">
              <p className="text-sm text-muted-foreground line-clamp-4">
                {postBodyText}
              </p>
            </div>

            {/* Read Time */}
            <div className="px-4 py-3">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#f1d59f]" />
                <p className="text-xs text-white">{readTime}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

export default PostCard;
