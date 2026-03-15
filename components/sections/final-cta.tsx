'use client';

import React from 'react';
import { MessageSquare, Mail, Phone, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export function FinalCTA() {
  return (
    <section id="contact" className="py-24 bg-black border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="bg-brand-navy/10 border border-white/5 p-12 md:p-20 relative overflow-hidden group rounded-3xl">
          {/* Decorative Background Element */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-brand-yellow/10 rounded-full blur-[100px] group-hover:bg-brand-yellow/20 transition-all duration-1000" />
          
          <div className="relative z-10 grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif mb-8 max-w-lg leading-tight uppercase font-black italic">
                Ready for <br /> Deployment?
              </h2>
              <p className="text-xl text-white/50 font-light leading-relaxed mb-12 max-w-md">
                SVN Aviation operations team is available 24/7. Backed by the logistics power of Schnell Vogel Nigeria Limited.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link href="/contact" className="w-full sm:w-auto">
                  <button className="w-full bg-brand-yellow hover:bg-white text-black px-10 py-5 font-black transition-all flex items-center justify-center gap-3 group/btn shadow-[0_10px_30px_rgba(253,184,19,0.2)] uppercase text-[10px] tracking-widest">
                    Request Quote <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </button>
                </Link>
                <a 
                  href="https://wa.me/234800SVNOPS" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white px-10 py-5 font-black transition-all flex items-center justify-center gap-3 uppercase text-[10px] tracking-widest rounded-sm">
                    <MessageSquare className="w-5 h-5" /> WhatsApp Operations
                  </button>
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
               <div className="p-8 border border-white/5 bg-white/[0.01] rounded-2xl">
                  <Phone className="text-brand-yellow w-6 h-6 mb-4" />
                  <h4 className="text-[10px] tracking-[0.2em] font-black uppercase opacity-40 mb-2">Speak to Ops</h4>
                  <p className="text-lg font-bold tracking-tight">+234 (0) 800 SVN OPS</p>
               </div>
               <div className="p-8 border border-white/5 bg-white/[0.01] rounded-2xl">
                  <Mail className="text-brand-yellow w-6 h-6 mb-4" />
                  <h4 className="text-[10px] tracking-[0.2em] font-black uppercase opacity-40 mb-2">General Inquiry</h4>
                  <p className="text-lg font-bold tracking-tight">info@svnaviation.com</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
