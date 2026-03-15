import React from "react";
import { LogoCloud } from "@/components/ui/logo-cloud-3";
import { ServicesGrid } from "@/components/sections/services-grid";
import { IndustriesServed } from "@/components/sections/industries-served";
import { OperationalCapability } from "@/components/sections/operational-capability";
import { AviationInsights } from "@/components/sections/aviation-insights";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { HeroSlider } from "@/components/sections/hero-slider";
import { client } from "@/sanity/lib/client";
import { latestPostsQuery } from "@/sanity/lib/queries";

export default async function Home() {
  const posts = await client.fetch(latestPostsQuery);

  return (
    <div className="relative min-h-screen w-full bg-white text-white flex flex-col font-sans overflow-x-hidden">
      {/* Hero Slider (Client Component) */}
      <HeroSlider />

      {/* Logo Cloud Section - Integrated with parent brand */}
      <div className="relative z-20 bg-black py-16 border-y border-white/5">
         <div className="max-w-[1400px] mx-auto px-8 md:px-12">
            <div className="text-center mb-8">
              <span className="text-brand-yellow text-[10px] font-black tracking-[0.3em] uppercase">Strategic Partner Network</span>
            </div>
            <LogoCloud />
         </div>
      </div>

      {/* Content Sections */}
      <ServicesGrid />
      <OperationalCapability />
      <IndustriesServed />
      <AviationInsights posts={posts} />
      <FinalCTA />
      <Footer />
    </div>
  );
}
