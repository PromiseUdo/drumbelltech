import Blog from "@/components/blog";
import Connect from "@/components/connect";
import LoaderWrapper from "@/components/loader-wrapper";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import OurProducts from "@/components/our-products";
import Services from "@/components/services";
import Image from "next/image";

export default function Home() {
  return (
    <LoaderWrapper>
      <main className="bg-background text-foreground">
        <MaxWidthWrapper className="py-16 md:py-20">
          <div className="flex flex-col space-y-12">
            <div className="flex flex-col space-y-6">
              <h1 className="text-5xl  ">
                Your Digital Future, Powered by Innovation.
              </h1>
              <p className="text-base text-white max-w-2xl">
                We deliver cutting-edge development, stunning design, and robust
                cybersecurity solutions.
              </p>
            </div>
            <OurProducts />
            <Services />
            <Blog />
            <Connect />
          </div>
        </MaxWidthWrapper>
      </main>
    </LoaderWrapper>
  );
}
