'use client';

import React, { useState, useEffect } from 'react';
import { Plane } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.button
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.5, y: 20 }}
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 z-[60] w-12 h-12 bg-brand-yellow text-black rounded-full shadow-2xl flex items-center justify-center group hover:bg-white transition-all duration-300"
              >
                <Plane className="w-6 h-6 -rotate-45 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </TooltipTrigger>
            <TooltipContent side="left" className="bg-brand-dark border-white/10 text-white font-black text-[10px] tracking-widest uppercase py-2 px-4 mb-2">
              Go to top
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      )}
    </AnimatePresence>
  );
}
