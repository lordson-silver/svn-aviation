'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Helicopter, Plane, Ship, Package, LifeBuoy, Camera } from 'lucide-react';

import { homeServices } from '@/lib/services';
import Link from 'next/link';

export function ServicesGrid() {
  return (
    <section id="services" className="py-32 bg-black">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="mb-20">
          <h4 className="text-brand-yellow text-sm font-bold tracking-[0.3em] uppercase mb-4">Our Expertise</h4>
          <h2 className="text-4xl md:text-6xl font-serif">Complete Aviation Charter Solutions</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0.5 bg-white/5 border border-white/5">
          {homeServices.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-black p-12 hover:bg-brand-yellow/5 transition-all flex flex-col h-full"
            >
              <div className="text-brand-yellow mb-8 group-hover:scale-110 transition-transform origin-left">
                {/* Fallback icons since we moved the array */}
                {i === 0 && <Helicopter className="w-8 h-8" />}
                {i === 1 && <Plane className="w-8 h-8" />}
                {i === 2 && <Ship className="w-8 h-8" />}
                {i === 3 && <Package className="w-8 h-8" />}
                {i === 4 && <LifeBuoy className="w-8 h-8" />}
                {i === 5 && <Camera className="w-8 h-8" />}
              </div>
              <h3 className="text-2xl font-serif mb-4">{service.title}</h3>
              <p className="text-white/60 mb-8 leading-relaxed font-light">
                {service.desc}
              </p>
              <div className="mt-auto">
                 <div className="text-brand-yellow text-[10px] font-black uppercase tracking-widest mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {service.tagline}
                 </div>
                 <Link 
                   href={`/services/${service.slug}`}
                   className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest border-b border-brand-yellow/30 pb-1 hover:border-brand-yellow transition-all w-fit"
                 >
                   Learn More <ChevronRight className="w-3.5 h-3.5 text-brand-yellow" />
                 </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
