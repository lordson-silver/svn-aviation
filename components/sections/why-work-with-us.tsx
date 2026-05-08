'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

export function WhyWorkWithUs() {
  return (
    <section className="py-32 bg-[#050505] border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <h4 className="text-brand-yellow text-sm font-bold tracking-[0.3em] uppercase mb-4">The SVN Advantage</h4>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight">Why Work With SVN Aviation</h2>
            <div className="w-12 h-1 bg-brand-yellow mb-8"></div>
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light">
              At SVN Aviation, we understand that every movement has different operational requirements.
            </p>
          </div>
          
          <div className="lg:col-span-7 flex flex-col">
            <div className="prose prose-invert max-w-none">
              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-8">
                That is why we focus on structured aviation solutions tailored to the mission — not simply providing an aircraft.
              </p>
              
              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-8">
                Through our network of trusted aviation operators and partners, we help clients access multiple helicopter and private jet options based on:
              </p>
              
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-12 list-none pl-0">
                {[
                  "Passenger count",
                  "Destination access",
                  "Operational timing",
                  "Aircraft capability",
                  "Availability",
                  "Mission requirements"
                ].map((item, i) => (
                  <motion.li 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex items-center gap-4 text-white/80 text-lg"
                  >
                    <CheckCircle2 className="w-5 h-5 text-brand-yellow shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <p className="text-white/60 text-lg md:text-xl font-light leading-relaxed mb-16">
                This flexible coordination approach allows us to structure more efficient and practical aviation solutions instead of limiting clients to the availability or capability of a single operator or aircraft type.
              </p>

              <h3 className="text-3xl font-serif text-white mb-8">We Support:</h3>
              <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-16 list-none pl-0">
                {[
                  "Executive movement",
                  "Offshore and oil & gas operations",
                  "Corporate travel",
                  "Time-sensitive missions",
                  "VIP movement",
                  "Specialized aviation logistics"
                ].map((item, i) => (
                  <motion.li 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="flex items-center gap-4 text-white/80 text-lg"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow shrink-0"></div>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 md:p-10 bg-white/5 border-l-4 border-brand-yellow rounded-r-lg"
              >
                <div className="text-brand-yellow text-sm font-bold tracking-[0.3em] uppercase mb-4">Our focus is simple:</div>
                <p className="text-2xl md:text-3xl text-white font-serif leading-tight m-0">
                  Deliver reliable, efficient, and properly coordinated aviation solutions that support operational continuity, flexibility, and client efficiency.
                </p>
              </motion.div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
