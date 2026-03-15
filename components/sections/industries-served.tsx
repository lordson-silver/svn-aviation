'use client';

import React from 'react';
import { motion } from 'framer-motion';

const industries = [
  "Oil & Gas",
  "Energy & Infrastructure",
  "Corporate Executives",
  "Government & Diplomatic Missions",
  "Film & Media Production",
  "Maritime & Logistics Operations"
];

export function IndustriesServed() {
  return (
    <section className="py-32 bg-black border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2">
          <h4 className="text-brand-yellow text-sm font-bold tracking-[0.3em] uppercase mb-4">Sectors</h4>
          <h2 className="text-4xl md:text-6xl font-serif mb-8">Industries We Serve</h2>
          <p className="text-xl text-white/60 font-light leading-relaxed max-w-xl">
            SVN Aviation, supported by the broader capabilities of Schnell Vogel Nigeria Limited, serves a diverse range of industries requiring controlled aviation logistics and executive mobility.
          </p>
        </div>
        
        <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
          {industries.map((industry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 border border-white/5 bg-brand-navy/5 flex items-center group hover:border-brand-yellow/30 transition-colors"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow mr-4 group-hover:scale-150 transition-transform" />
              <span className="text-lg font-serif italic text-white/80 group-hover:text-white transition-colors">{industry}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
