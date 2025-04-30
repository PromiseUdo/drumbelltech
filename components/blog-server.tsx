import { createClient } from "contentful";
import BlogClient from "./blog-client";

async function getData(searchQuery: string = "") {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
  });

  const query: any = {
    content_type: "drumbellTech",
  };

  if (searchQuery.trim()) {
    query["query"] = searchQuery.trim();
  }

  const blogPosts = await client.getEntries(query);

  // Sort by createdAt (newest first)
  blogPosts.items.sort(
    (a, b) => Date.parse(b.sys.createdAt) - Date.parse(a.sys.createdAt)
  );

  return blogPosts;
}

export default async function BlogServer({
  searchQuery = "",
}: {
  searchQuery?: string;
}) {
  const blogPosts = await getData(searchQuery);

  // Filter featured posts and limit to 3
  const featuredPosts = blogPosts.items.slice(0, 3).map((post: any) => ({
    title: post.fields.title || "Untitled",
    description: post?.fields?.postBody || "No description",
    image: post?.fields?.featuredImage?.fields?.file?.url || "/app1.png", // Fallback image
    slug: post?.fields?.slug || null,
  }));

  return <BlogClient featuredPosts={featuredPosts} />;
}
