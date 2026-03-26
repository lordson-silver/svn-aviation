import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { ChevronRight, Plane, MapPin, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/sections/footer';
import { locationPages } from '@/lib/locations';

export const metadata: Metadata = {
  title: 'Charter Flight Locations Nigeria | SVN Aviation Service Areas',
  description: 'SVN Aviation provides private jet and helicopter charter services across Nigeria. Explore our service locations in Lagos, Abuja, Port Harcourt, Warri, and Calabar.',
};

export default function LocationsIndexPage() {
  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col font-sans overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────── */}
      <div className="p-4 md:p-6 w-full h-[50vh] min-h-[440px] flex flex-col">
        <section className="relative flex-1 w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl">
          <Navbar />
          <Image
            src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=2000&q=80&auto=format&fit=crop"
            alt="SVN Aviation Locations"
            fill
            priority
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent z-10" />

          <div className="relative z-20 h-full flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-14 max-w-[1400px] mx-auto w-full">
            <div className="flex items-center gap-2 mb-5">
              <Link href="/" className="text-white/50 hover:text-white text-[11px] font-bold tracking-widest uppercase transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-brand-yellow/60" />
              <span className="text-brand-yellow text-[11px] font-bold tracking-widest uppercase">Locations</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] font-serif uppercase tracking-tighter">
              Our Locations
            </h1>
            <p className="text-lg text-white/60 mt-4 max-w-xl">
              Charter aviation services across Nigeria&apos;s most important cities and energy hubs.
            </p>
          </div>
        </section>
      </div>

      <main>
        <section className="py-20 md:py-28 bg-black">
          <div className="max-w-[1200px] mx-auto px-8 md:px-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {locationPages.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/locations/${loc.slug}`}
                  className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-brand-yellow/30 transition-all block h-[360px]"
                >
                  <Image
                    src={loc.heroImage}
                    alt={`Charter Flights in ${loc.cityName}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />
                  <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                    <div className="flex items-center gap-2 mb-3">
                      <Plane className="w-3.5 h-3.5 text-brand-yellow" />
                      <span className="text-[10px] font-bold text-brand-yellow uppercase tracking-widest">{loc.airportCode}</span>
                    </div>
                    <h2 className="text-2xl font-black font-serif uppercase tracking-tight group-hover:text-brand-yellow transition-colors">
                      {loc.cityName}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <MapPin className="w-3 h-3 text-white/40" />
                      <span className="text-xs text-white/40">{loc.state}</span>
                    </div>
                    <p className="text-xs text-white/50 mt-3 line-clamp-2">{loc.intro.slice(0, 120)}...</p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-bold text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore {loc.cityName} <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
