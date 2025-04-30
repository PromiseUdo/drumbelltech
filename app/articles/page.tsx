import React from "react";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { createClient } from "contentful";
import { Suspense } from "react";
import { LoaderCircle } from "lucide-react";
import PostsReel from "./components/post-reel";
import Header from "./components/header";

// Client component to render posts
const PostsRenderer = ({
  blogPosts,
  searchQuery,
}: {
  blogPosts: any;
  searchQuery: string;
}) => {
  // Filter featured posts (server-side filtering already applied)
  const featuredPosts = blogPosts.items
    .filter((post: any) => post.fields.featuredPost === true)
    .slice(0, 3);

  return (
    <>
      <PostsReel
        title="Featured Posts"
        posts={featuredPosts}
        emptyTitle="No Featured Posts Found"
        emptyDescription={
          searchQuery
            ? `No featured posts match your search for "${searchQuery}". Try a different term!`
            : "It looks like there are no featured posts to display right now. Check back later for new content!"
        }
      />
      <PostsReel
        title="Recent Posts"
        posts={blogPosts.items}
        className=""
        emptyTitle="No Recent Posts Found"
        emptyDescription={
          searchQuery
            ? `No recent posts match your search for "${searchQuery}". Try a different term!`
            : "It looks like there are no recent posts to display right now. Check back later for new content!"
        }
      />
    </>
  );
};

async function getData(searchQuery: string = "") {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  });

  const query: any = {
    content_type: "drumbellTech",
  };

  // Add search filter if query exists
  if (searchQuery.trim()) {
    query["query"] = searchQuery.trim();
  }

  const blogPosts = await client.getEntries(query);

  // Sort all posts by createdAt (newest first)
  blogPosts.items.sort(
    (a, b) => Date.parse(b.sys.createdAt) - Date.parse(a.sys.createdAt)
  );

  return [blogPosts];
}

const Page = async ({
  searchParams,
}: {
  searchParams: { search?: string };
}) => {
  const searchQuery = searchParams.search || "";
  const [blogPosts] = await getData(searchQuery);

  return (
    <div className="w-full bg-background border border-b border-gray-300">
      <Header />
      <Suspense
        fallback={
          <MaxWidthWrapper>
            <div className="py-8 flex flex-col items-center gap-4">
              <LoaderCircle
                className="h-8 w-8 animate-spin text-primary"
                aria-hidden="true"
              />
              <p className="text-lg font-medium text-foreground">
                Loading posts...
              </p>
              <p className="text-sm text-muted-foreground">
                Please wait while we fetch the latest posts.
              </p>
            </div>
          </MaxWidthWrapper>
        }
      >
        <PostsRenderer blogPosts={blogPosts} searchQuery={searchQuery} />
      </Suspense>
    </div>
  );
};

export const revalidate = 60;
export default Page;
