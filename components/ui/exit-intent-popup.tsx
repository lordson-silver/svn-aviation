"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export function ExitIntentPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if mouse leaves top of the window (exit intent)
      if (e.clientY <= 0 && !hasTriggered) {
        setIsOpen(true);
        setHasTriggered(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasTriggered]);

  const closePopup = () => setIsOpen(false);

  // For testing purposes, you could uncomment the following to force open it after 2 seconds:
  // useEffect(() => { const t = setTimeout(() => setIsOpen(true), 2000); return () => clearTimeout(t); }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
            onClick={closePopup}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden flex flex-col md:flex-row z-10 shadow-[0_40px_80px_rgba(0,0,0,0.8)]"
          >
            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/50 hover:bg-black text-white/70 hover:text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/10"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left Content */}
            <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h2 className="text-4xl md:text-5xl font-serif font-black uppercase mb-2 leading-tight">
                Join the <span className="text-brand-yellow">Fleet</span>
              </h2>
              <p className="text-sm md:text-base font-bold tracking-widest uppercase text-white/90 mb-6">
                Before you go, take this insight
              </p>
              <p className="text-white/50 text-sm mb-10 max-w-sm leading-relaxed">
                Get exclusive West African aviation insights, luxury charter updates, and industry safety reports delivered straight to your inbox.
              </p>

              <form 
                className="flex flex-col gap-4 w-full" 
                onSubmit={(e) => { 
                  e.preventDefault(); 
                  // TODO: Connect this to the Next.js API Route later
                  console.log("Newsletter form submitted");
                  closePopup(); 
                }}
              >
                <input
                  type="email"
                  placeholder="ENTER YOUR EMAIL ADDRESS"
                  required
                  className="w-full bg-black/50 border border-white/20 px-6 py-4 text-xs font-bold tracking-widest text-white uppercase placeholder:text-white/30 focus:outline-none focus:border-brand-yellow transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-brand-yellow text-black px-6 py-4 text-xs font-black tracking-widest uppercase hover:bg-white transition-colors"
                >
                  Join Newsletter
                </button>
              </form>
            </div>

            {/* Right Image */}
            <div className="hidden md:block w-2/5 relative min-h-[450px]">
              <Image
                // Currently a placeholder image relevant to luxury aviation
                src="https://images.unsplash.com/photo-1583070494452-f38446c596ec?w=800&q=80&auto=format&fit=crop"
                alt="SVN Aviation Insights"
                fill
                className="object-cover"
              />
              {/* Gradient overlay to seamlessly blend the image into the dark background */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent opacity-80" />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
