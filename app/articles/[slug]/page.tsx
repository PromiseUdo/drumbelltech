import React from "react";
import { createClient } from "contentful";
import { format } from "date-fns";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import Banner from "./components/banner";
import Header from "./components/header";
import PostContent from "./components/post-content";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_KEY!,
});

interface IParams {
  slug?: string;
}

const page = async ({ params }: { params: IParams }) => {
  const { items } = await client.getEntries({
    content_type: "blogPost",
    "fields.slug": params.slug,
  });

  const blogPost = items[0] as any;

  //   console.dir(blogPost, { depth: null });

  const imageUrl = blogPost?.fields?.featuredImage?.fields?.file?.url
    ? `https:${blogPost.fields.featuredImage.fields.file.url}`
    : "/default-image.jpg"; // Fallback image
  return (
    <div className="border-b pb-6 md:pb-12 border-gray-300 w-full bg-background ">
      <Banner
        title={String(blogPost?.fields?.title ?? "")}
        date={format(blogPost?.sys?.createdAt, "d MMM yyy")}
        featuredImage={imageUrl}
        post={blogPost}
      />
      <Header title={String(blogPost?.fields?.title ?? "")} />

      <MaxWidthWrapper>
        <PostContent items={items} />
      </MaxWidthWrapper>
    </div>
  );
};
export const revalidate = 60;

export default page;
