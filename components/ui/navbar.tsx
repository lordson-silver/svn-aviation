'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, ChevronDown, Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { SERVICES, LOCATIONS, homeServices } from '@/lib/services';
import { locationPages } from '@/lib/locations';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from '@/components/ui/sheet';

const Logo = () => (
  <div className="flex items-center gap-3">
    <div className="relative w-14 h-10 flex items-center justify-center">
      <Image src="/logo.svg" alt="SVN Aviation Logo" width={56} height={40} className="object-contain" priority />
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-lg md:text-xl font-bold tracking-tight text-white font-serif uppercase">SVN Aviation</span>
      <span className="text-[8px] md:text-[9px] tracking-[0.2em] text-brand-yellow font-bold uppercase mt-0.5">Schnell Vogel Nigeria</span>
    </div>
  </div>
);

const navDropServices = [
  {
    category: "Charter Services",
    items: [
      { name: "Private Jet Charter", href: "/services/private-jet-charter-nigeria" },
      { name: "Helicopter Charter", href: "/services/helicopter-charter-nigeria" },
      { name: "General Charter Flights", href: "/services/charter-flight-services-nigeria" },
    ]
  },
  {
    category: "Specialized Aviation",
    items: [
      { name: "Oil & Gas Charter Flights", href: "/services/offshore-crew-transfer" },
      { name: "Air Cargo & Logistics", href: "/services/air-cargo-logistics" },
      { name: "Emergency Charter Flights", href: "/services/emergency-operations" },
      { name: "Aerial Survey & Filming", href: "/services/aerial-survey-filming" },
    ]
  }
];

export function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services', hasDropdown: true },
    { name: 'Routes', href: '/routes', hasDropdown: false },
    { name: 'Locations', href: '/locations', hasDropdown: true },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
  ];



  return (
    <nav className={cn(
      "fixed left-0 right-0 z-50 transition-all duration-500 flex items-center justify-between mx-auto",
      isScrolled 
        ? "top-0 py-3 px-6 md:py-4 md:px-16 lg:px-24 bg-black/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl w-full max-w-none" 
        : "top-4 px-5 md:top-8 md:px-12 w-full max-w-[1400px]"
    )}>
      <Logo />

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-2 bg-brand-dark/60 backdrop-blur-xl border border-white/10 px-6 py-2 rounded-full shadow-2xl">
        {navLinks.map((link) => (
          <div
            key={link.name}
            className="relative group px-4"
            onMouseEnter={() => link.hasDropdown && setActiveDropdown(link.name)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <a
              href={link.href}
              className={cn(
                "hover:text-brand-yellow transition-colors flex items-center gap-1.5 py-2 text-[10px] font-black tracking-[0.15em] uppercase text-white/80",
                activeDropdown === link.name && "text-brand-yellow"
              )}
            >
              {link.name}
              {link.hasDropdown && (
                <ChevronDown className={cn("w-3 h-3 transition-transform duration-300", activeDropdown === link.name && "rotate-180")} />
              )}
            </a>

            <AnimatePresence>
              {activeDropdown === link.name && link.hasDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-full mt-4 w-max min-w-[220px] bg-brand-dark/95 backdrop-blur-2xl border border-white/10 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl"
                >
                  {link.name === 'Services' ? (
                    <div className="flex gap-10">
                      {navDropServices.map((category) => (
                        <div key={category.category} className="flex flex-col gap-4">
                          <h3 className="text-brand-yellow text-[10px] tracking-[0.2em] font-black border-b border-brand-yellow/20 pb-2 mb-2 uppercase">
                            {category.category}
                          </h3>
                          <ul className="flex flex-col gap-3">
                            {category.items.map((item) => (
                              <li key={item.name}>
                                <a 
                                  href={item.href} 
                                  className="text-white/60 hover:text-white transition-colors normal-case tracking-normal font-semibold text-xs whitespace-nowrap block py-0.5"
                                >
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ) : link.name === 'Locations' ? (
                    <div className="flex flex-col gap-4">
                      <h3 className="text-brand-yellow text-[10px] tracking-[0.2em] font-black border-b border-brand-yellow/20 pb-2 mb-2 uppercase">
                        Our Presence
                      </h3>
                      <ul className="grid grid-cols-1 gap-4">
                        {LOCATIONS.map((loc) => {
                          const locationPage = locationPages.find(p => p.cityName === loc.name);
                          const hrefUrl = locationPage ? `/locations/${locationPage.slug}` : '/locations';
                          return (
                            <li key={loc.name}>
                              <a href={hrefUrl} className="flex flex-col transition-all group/loc">
                                <span className="text-white/80 group-hover/loc:text-white text-xs font-bold leading-tight">{loc.name}</span>
                                <span className="text-[10px] text-white/40 group-hover/loc:text-brand-yellow/60 uppercase tracking-widest mt-0.5">Strategic Operations</span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ) : null}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Desktop CTA */}
      <div className="hidden lg:flex items-center gap-6">
        <Link href="/contact" className="flex items-center gap-3 bg-white hover:bg-white/90 text-brand-yellow px-6 py-2 rounded-full transition-all font-black text-[10px] tracking-[0.1em] uppercase shadow-xl group">
          Contact
          <div className="w-7 h-7 rounded-full bg-brand-yellow flex items-center justify-center -mr-3 group-hover:rotate-45 transition-transform">
            <ArrowRight className="w-3.5 h-3.5 text-white" />
          </div>
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="flex lg:hidden items-center">
        <Sheet>
          <SheetTrigger asChild>
            <button
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="right"
            showCloseButton={false}
            className="w-full sm:w-[380px] bg-[#0a0f1a] border-white/10 p-0 overflow-y-auto"
          >
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            {/* Mobile Menu Header */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
              <Logo />
              <SheetClose asChild>
                <button className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 transition-all">
                  <X className="w-4 h-4" />
                </button>
              </SheetClose>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex flex-col px-4 py-6 gap-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <button
                    onClick={() => link.hasDropdown
                      ? setMobileExpanded(mobileExpanded === link.name ? null : link.name)
                      : undefined
                    }
                    className="w-full"
                  >
                    <a
                      href={link.hasDropdown ? undefined : link.href}
                      className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-white/70 hover:text-white hover:bg-white/5 transition-all text-sm font-bold tracking-widest uppercase"
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <ChevronDown className={cn("w-4 h-4 transition-transform duration-300 text-brand-yellow/60", mobileExpanded === link.name && "rotate-180")} />
                      )}
                    </a>
                  </button>

                  {/* Mobile Submenu */}
                  <AnimatePresence>
                    {mobileExpanded === link.name && link.hasDropdown && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-3 pt-1">
                          {link.name === 'Services' ? (
                            <div className="flex flex-col gap-6">
                              {navDropServices.map((category) => (
                                <div key={category.category}>
                                  <h3 className="text-brand-yellow text-[9px] tracking-[0.25em] font-black uppercase mb-3 px-2">{category.category}</h3>
                                  <ul className="flex flex-col gap-1">
                                    {category.items.map((item) => (
                                      <li key={item.name}>
                                        <a 
                                          href={item.href} 
                                          className="text-white/50 hover:text-white text-xs font-semibold transition-colors block px-2 py-1.5 rounded-lg hover:bg-white/5"
                                        >
                                          {item.name}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ) : link.name === 'Locations' ? (
                            <ul className="flex flex-col gap-1">
                              {LOCATIONS.map((loc) => {
                                const locationPage = locationPages.find(p => p.cityName === loc.name);
                                const hrefUrl = locationPage ? `/locations/${locationPage.slug}` : '/locations';
                                return (
                                  <li key={loc.name}>
                                    <a href={hrefUrl} className="flex flex-col px-2 py-2 rounded-lg hover:bg-white/5 transition-all group/loc">
                                      <span className="text-white/70 group-hover/loc:text-white text-xs font-bold">{loc.name}</span>
                                      <span className="text-[9px] text-white/30 group-hover/loc:text-brand-yellow/60 uppercase tracking-widest mt-0.5">Strategic Operations</span>
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          ) : null}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="px-6 pb-8 pt-4 mt-auto border-t border-white/5 flex flex-col gap-3">
              <Link href="/contact" className="w-full flex items-center justify-center gap-3 bg-brand-yellow hover:bg-brand-yellow/90 text-black px-6 py-4 rounded-xl transition-all font-black text-sm tracking-widest uppercase shadow-xl">
                Contact
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+234800SVN0000" className="w-full flex items-center justify-center gap-3 border border-white/10 hover:border-white/30 text-white/60 hover:text-white px-6 py-3 rounded-xl transition-all font-bold text-xs tracking-widest uppercase">
                <Phone className="w-4 h-4" />
                Call Us
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
