'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight, Send } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black pt-32 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        
        {/* Top Section: Branding & Global Offices */}
        <div className="grid lg:grid-cols-4 gap-16 mb-24 text-center lg:text-left">
          <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-12 h-8">
                <Image src="/logo.svg" alt="SVN Aviation Logo" fill className="object-contain" />
              </div>
              <div className="flex flex-col leading-none text-left">
                <span className="text-lg font-bold tracking-tight text-white font-serif uppercase">SVN Aviation</span>
                <span className="text-[8px] tracking-[0.2em] text-brand-yellow font-bold uppercase mt-0.5">Schnell Vogel Nigeria</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed font-light max-w-xs">
              SVN Aviation provides specialized air logistics, executive charter, and mission-critical aviation coordination across Nigeria and West Africa.
            </p>
          </div>

          
        </div>

        {/* Middle Section: Floating Navigation Card */}
        <div className="relative mb-24">
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-brand-yellow/20 to-transparent" />
          <div className="bg-brand-navy/10 backdrop-blur-2xl border border-white/5 rounded-[2.5rem] p-12 md:p-16 grid lg:grid-cols-4 gap-12 md:gap-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </div>

            <div className="relative z-10 flex flex-col">
              <h5 className="text-white font-bold text-lg mb-8 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-brand-yellow">Get Started</h5>
              <ul className="space-y-4">
                {[
                  { name: 'Private Jet', href: '/services/private-jet-charter' },
                  { name: 'Heli Charter', href: '/services/helicopter-charter' },
                  { name: 'Logistics Quote', href: '/contact' },
                  { name: 'Mobile App', href: '/contact' }
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/40 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group">
                      {link.name} <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-yellow" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 flex flex-col">
              <h5 className="text-white font-bold text-lg mb-8 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-brand-yellow">Solutions</h5>
              <ul className="space-y-4">
                {[
                  { name: 'Offshore Transfer', href: '/services/offshore-crew-transfer' },
                  { name: 'Medical Evac', href: '/services/emergency-operations' },
                  { name: 'Aerial Survey', href: '/services/aerial-survey-filming' },
                  { name: 'Cargo Services', href: '/services/air-cargo-logistics' }
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/40 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group">
                      {link.name} <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-yellow" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 flex flex-col">
              <h5 className="text-white font-bold text-lg mb-8 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-brand-yellow">About SVN</h5>
              <ul className="space-y-4">
                {[
                   { name: 'Company', href: '/about' },
                   { name: 'Safety & Standards', href: '/about' },
                   { name: 'News & Press', href: '/blog' },
                   { name: 'Careers', href: '/careers' }
                ].map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/40 hover:text-white transition-colors text-sm font-medium flex items-center gap-2 group">
                      {link.name} <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-yellow" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 flex flex-col lg:col-span-1">
              <h5 className="text-white font-bold text-lg mb-8 relative after:absolute after:bottom-[-8px] after:left-0 after:w-8 after:h-0.5 after:bg-brand-yellow">Newsletter</h5>
              <p className="text-white/40 text-sm mb-6 leading-relaxed">
                Stay updated with SVN Aviation operational highlights and industry updates.
              </p>
              <div className="relative group/input">
                <input 
                  type="email" 
                  placeholder="Enter Email" 
                  className="w-full bg-white text-black px-6 py-4 rounded-xl text-sm font-medium focus:outline-none focus:ring-2 focus:ring-brand-yellow transition-all"
                  suppressHydrationWarning
                />
                <button className="absolute right-2 top-2 bottom-2 bg-brand-yellow hover:bg-black text-black hover:text-brand-yellow px-4 rounded-lg transition-all flex items-center justify-center group/btn shadow-xl">
                    <Send className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                </button>
              </div>
              <button className="mt-4 w-full bg-brand-yellow/10 border border-brand-yellow/30 hover:border-brand-yellow text-brand-yellow py-4 rounded-xl font-black text-[10px] tracking-widest uppercase transition-all flex items-center justify-center gap-2">
                  Subscribe Us <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
          <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-brand-yellow/20 to-transparent" />
        </div>

        {/* Bottom Section: Socials & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-12 border-t border-white/5 pt-12">
          <div className="flex gap-4">
            {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
              <a 
                key={i} 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-brand-yellow hover:border-brand-yellow hover:bg-brand-yellow/5 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          
          <div className="text-center md:text-right flex flex-col items-center md:items-end gap-2">
            <div className="text-[10px] font-black tracking-[0.2em] text-white/30 uppercase">
              &copy; {currentYear} SVN Aviation. All Rights Reserved.
            </div>
            <div className="text-[9px] font-bold tracking-[0.1em] text-brand-yellow/40 uppercase">
              A Trading Name of Schnell Vogel Nigeria Limited
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
