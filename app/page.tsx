import BlogServer from "@/components/blog-server";
import Connect from "@/components/connect";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import OurProducts from "@/components/our-products";
import Services from "@/components/services";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <MaxWidthWrapper className="py-16 md:py-24">
        <div className="flex flex-col space-y-12">
          {/* Hero */}
          <div className="flex flex-col space-y-8">
            <div className="inline-flex items-center gap-2 border border-[#f1d59f]/40 rounded-full px-4 py-1.5 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#f1d59f] animate-pulse" />
              <span className="font-nbMono text-[10px] text-[#f1d59f] uppercase tracking-widest">
                IT Solutions Company
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-nbInternational leading-tight max-w-4xl">
              Your Digital Future,{" "}
              <span className="text-[#f1d59f]">Powered by Innovation.</span>
            </h1>

            <p className="font-nbMono text-sm text-muted-foreground max-w-xl leading-relaxed">
              We deliver cutting-edge app development, stunning design, and
              robust cybersecurity solutions — with security built in from day
              one.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact-us"
                className="font-nbInternational text-xs text-black bg-[#f1d59f] hover:bg-[#e8c882] px-6 py-3 rounded-md transition-colors duration-200"
              >
                Get in Touch
              </Link>
              <Link
                href="/#products"
                className="font-nbInternational text-xs text-white border border-white/30 hover:border-[#f1d59f] hover:text-[#f1d59f] px-6 py-3 rounded-md transition-colors duration-200"
              >
                View Our Products
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-2">
              <div className="flex flex-col">
                <span className="font-nbInternational text-2xl text-white">2+</span>
                <span className="font-nbMono text-[10px] text-muted-foreground uppercase tracking-wider">Live Products</span>
              </div>
              <div className="w-px bg-white/10 self-stretch" />
              <div className="flex flex-col">
                <span className="font-nbInternational text-2xl text-white">UK &amp; NG</span>
                <span className="font-nbMono text-[10px] text-muted-foreground uppercase tracking-wider">Registered</span>
              </div>
              <div className="w-px bg-white/10 self-stretch" />
              <div className="flex flex-col">
                <span className="font-nbInternational text-2xl text-white">4+</span>
                <span className="font-nbMono text-[10px] text-muted-foreground uppercase tracking-wider">Services</span>
              </div>
            </div>
          </div>

          <div id="products">
            <OurProducts />
          </div>
          <div id="services">
            <Services />
          </div>
          <BlogServer />
          <Connect />
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
