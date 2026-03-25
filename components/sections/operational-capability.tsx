'use client';

import React from 'react';
import { motion } from 'framer-motion';

const DEFAULT_HUBS = [
  { name: "Lagos", hub: "Primary Aviation Hub" },
  { name: "Abuja", hub: "Administrative Operations" },
  { name: "Port Harcourt", hub: "Energy Sector Logistics" },
  { name: "Warri", hub: "Offshore Coordination" },
];

export function OperationalCapability({ 
  title, 
  description, 
  hubs 
}: { 
  title?: string; 
  description?: string; 
  hubs?: { title: string; description: string; stat: string }[] 
}) {
  const displayHubs = hubs && hubs.length > 0 ? hubs : DEFAULT_HUBS.map(h => ({ title: h.name, description: h.hub, stat: '' }));

  return (
    <section id="locations" className="py-32 bg-black relative overflow-hidden">
      <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-yellow/5 skew-x-12 translate-x-1/2" />
      
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h4 className="text-brand-yellow text-sm font-bold tracking-[0.3em] uppercase mb-4">Network</h4>
            <h2 className="text-4xl md:text-6xl font-serif">{title || "Capability & Coverage"}</h2>
          </div>
          <div className="text-right">
             <div className="text-5xl font-serif italic text-brand-yellow">Nationwide</div>
             <div className="text-[10px] tracking-[0.3em] font-black uppercase text-white/30 mt-2">Deployment Network</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
           {displayHubs.map((hub, i) => (
             <motion.div
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="p-10 bg-brand-navy/20 backdrop-blur-md border border-white/5 hover:border-brand-yellow/30 transition-colors"
             >
               <h3 className="text-2xl font-serif text-brand-yellow mb-2">{hub.title}</h3>
               <p className="text-[10px] tracking-[0.2em] font-black uppercase text-white/40">{hub.description}</p>
               {hub.stat && <div className="mt-4 text-white/60 text-xs font-bold">{hub.stat}</div>}
             </motion.div>
           ))}
        </div>

        <div className="mt-20 p-12 border border-white/5 bg-brand-navy/20 backdrop-blur-sm max-w-3xl">
           <p className="text-lg text-white/70 italic font-serif leading-relaxed">
             {description || `"Precision aviation coordination requires more than aircraft access. It requires operational structure, responsiveness, and regulatory alignment."`}
           </p>
        </div>
      </div>
    </section>
  );
}
