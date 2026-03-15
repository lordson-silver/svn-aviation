'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/ui/navbar";
import { cn } from "@/lib/utils";

const HERO_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=2000&auto=format&fit=crop",
    title: "Premium Aviation Charter",
    subtitle: "On-demand executive flights and helicopter services across Nigeria's strategic corridors.",
    tag: "WE CONNECT AND DELIVER"
  },
  {
    image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=2000&auto=format&fit=crop",
    title: "Critical Air Logistics",
    subtitle: "Delivering consistently for Oil & Gas industries with offshore crew transfers and specialized cargo.",
    tag: "A BRANCH OF SCHNELL VOGEL"
  },
  {
    image: "https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?q=80&w=2000&auto=format&fit=crop",
    title: "Global Reach, Local Expertise",
    subtitle: "Strategic aviation coordination supported by Schnell Vogel's nationwide logistics network.",
    tag: "NATIONWIDE DEPLOYMENT"
  }
];

import Link from "next/link";

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="p-4 md:p-6 w-full h-[100vh] min-h-[750px] flex flex-col">
      <section className="relative flex-1 w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-brand-dark/20 border border-white/5 shadow-2xl">
        <Navbar />
        
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={HERO_SLIDES[currentSlide].image}
              alt={HERO_SLIDES[currentSlide].title}
              fill
              priority
              className="object-cover scale-105"
            />
            {/* Dark Overlays to match parent site style */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent z-10" />
            <div className="absolute inset-0 bg-black/20 z-10" />
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black to-transparent z-10" />
          </motion.div>
        </AnimatePresence>

        <main className="relative z-20 h-full flex flex-col justify-end px-8 md:px-12 lg:px-20 max-w-[1400px] w-full mx-auto pb-32">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="w-full"
            >
              {/* Pill Tag */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-1.5 rounded-full mb-6"
              >
                <span className="text-white text-[10px] font-black tracking-[0.2em] uppercase">
                  {HERO_SLIDES[currentSlide].tag}
                </span>
              </motion.div>

              <div className="flex flex-col lg:flex-row items-end justify-between gap-12">
                <div className="max-w-4xl">
                  {/* Title */}
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] font-serif uppercase tracking-tighter mb-4"
                  >
                    {HERO_SLIDES[currentSlide].title}
                  </motion.h1>
                  
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-4 mt-8"
                  >
                    <Link href="/contact" className="bg-brand-yellow hover:bg-white text-black px-10 py-5 font-black transition-all text-sm tracking-widest uppercase rounded-sm shadow-2xl flex items-center justify-center">
                      Request Charter
                    </Link>
                    <Link href="/#services" className="border border-white/20 hover:bg-white hover:text-black text-white px-10 py-5 font-black transition-all text-sm tracking-widest uppercase rounded-sm backdrop-blur-sm flex items-center justify-center">
                      View Fleet
                    </Link>
                  </motion.div>
                </div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="max-w-md text-right hidden lg:block"
                >
                  <p className="text-lg text-white/80 leading-relaxed font-medium">
                    {HERO_SLIDES[currentSlide].subtitle}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide Indicators/Pagination */}
          <div className="absolute inset-x-8 bottom-8 md:inset-x-auto md:bottom-auto md:right-20 md:top-1/2 md:-translate-y-1/2 flex flex-row md:flex-col justify-center gap-4">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className="group relative w-12 h-1 md:h-12 md:w-1 flex items-center justify-center"
              >
                <div className={cn(
                  "transition-all duration-500 rounded-full",
                  currentSlide === i ? "w-12 h-1 md:w-1 md:h-12 bg-brand-yellow" : "w-4 h-1 md:w-1 md:h-4 bg-white/20 group-hover:bg-white/50"
                )} />
                <span className={cn(
                  "absolute bottom-4 md:bottom-auto md:right-6 text-[10px] font-black tracking-widest uppercase transition-all whitespace-nowrap hidden md:block",
                  currentSlide === i ? "opacity-100 translate-x-0 text-brand-yellow" : "opacity-0 translate-x-4 pointer-events-none"
                )}>
                  0{i + 1}
                </span>
              </button>
            ))}
          </div>
        </main>
      </section>
    </div>
  );
}
