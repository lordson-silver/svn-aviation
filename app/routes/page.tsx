import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { ChevronRight, ArrowRight, Clock, MapPin } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/sections/footer';
import { charterRoutes } from '@/lib/routes';

export const metadata: Metadata = {
  title: 'Charter Flight Routes Nigeria | Private Jet & Helicopter Routes | SVN Aviation',
  description: 'Explore all private jet and helicopter charter routes available across Nigeria. Lagos to Abuja, Port Harcourt, Warri, Calabar and more. Request a quote today.',
};

export default function RoutesIndexPage() {
  // Group routes by origin
  const routesByOrigin = charterRoutes.reduce((acc, route) => {
    if (!acc[route.origin]) acc[route.origin] = [];
    acc[route.origin].push(route);
    return acc;
  }, {} as Record<string, typeof charterRoutes>);

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col font-sans overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────── */}
      <div className="p-4 md:p-6 w-full h-[50vh] min-h-[440px] flex flex-col">
        <section className="relative flex-1 w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl">
          <Navbar />
          <Image
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=2000&q=80&auto=format&fit=crop"
            alt="SVN Aviation Charter Routes"
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
              <span className="text-brand-yellow text-[11px] font-bold tracking-widest uppercase">Routes</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] font-serif uppercase tracking-tighter">
              Charter Routes
            </h1>
            <p className="text-lg text-white/60 mt-4 max-w-xl">
              Explore all private jet and helicopter charter routes available across Nigeria.
            </p>
          </div>
        </section>
      </div>

      <main>
        <section className="py-20 md:py-28 bg-black">
          <div className="max-w-[1200px] mx-auto px-8 md:px-12">
            {Object.entries(routesByOrigin).map(([origin, routes]) => (
              <div key={origin} className="mb-16 last:mb-0">
                <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">Departing From</span>
                <h2 className="text-3xl md:text-4xl font-serif font-black mt-2 mb-8">{origin}</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {routes.map((route) => (
                    <Link
                      key={route.slug}
                      href={`/routes/${route.slug}`}
                      className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-brand-yellow/30 transition-all group block"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-brand-yellow" />
                          <span className="text-[10px] font-bold text-brand-yellow uppercase tracking-widest">{route.flightTime}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5 text-white/30" />
                          <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">{route.distance}</span>
                        </div>
                      </div>
                      <h3 className="text-xl font-black group-hover:text-brand-yellow transition-colors mb-2">
                        {route.origin} → {route.destination}
                      </h3>
                      <p className="text-xs text-white/40 line-clamp-3">{route.intro.slice(0, 150)}...</p>
                      <div className="mt-6 flex items-center gap-2 text-xs font-bold text-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity">
                        View Route Details <ArrowRight className="w-3 h-3" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
