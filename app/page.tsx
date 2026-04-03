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
import { latestPostsQuery, homePageQuery, siteSettingsQuery } from "@/sanity/lib/queries";

export default async function Home() {
  const [posts, homeData, settings] = await Promise.all([
    client.fetch(latestPostsQuery),
    client.fetch(homePageQuery),
    client.fetch(siteSettingsQuery),
  ]);

  return (
    <div className="relative min-h-screen w-full bg-white text-white flex flex-col font-sans overflow-x-hidden">
      {/* Primary SEO Heading (Visually Hidden if redundant with Hero, but good for SEO crawlers) */}
      <h1 className="sr-only">
        {settings?.title || "SVN Aviation | Private Jet & Helicopter Charter Services in Nigeria"}
      </h1>

      <main>
        {/* Hero Slider (Client Component) */}
        <HeroSlider slides={homeData?.heroSlides} />

        {/* Logo Cloud Section - Integrated with parent brand */}
        <div className="relative z-20 bg-black py-16 border-y border-white/5">
           <div className="max-w-[1400px] mx-auto px-8 md:px-12">
              <div className="text-center mb-8">
                <span className="text-brand-yellow text-[10px] font-black tracking-[0.3em] uppercase">
                  {homeData?.logoCloudTitle || "Business Network"}
                </span>
              </div>
              <LogoCloud />
           </div>
        </div>

        {/* Content Sections */}
        <ServicesGrid />
        <OperationalCapability 
          title={homeData?.operationalTitle} 
          description={homeData?.operationalDescription}
          hubs={homeData?.capabilities}
        />
        <IndustriesServed 
          title={homeData?.industryTitle}
          description={homeData?.industryDescription}
        />
        <AviationInsights posts={posts} />
        <FinalCTA />
      </main>
      
      <Footer />
    </div>
  );
}
