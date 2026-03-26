import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ChevronRight, Clock, MapPin, Plane, Users, Shield, ArrowRight, Phone } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/sections/footer';
import { charterRoutes, getRouteBySlug, getRelatedRoutes } from '@/lib/routes';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return charterRoutes.map((route) => ({
    slug: route.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const route = getRouteBySlug(slug);
  if (!route) return { title: 'Route Not Found' };

  return {
    title: route.metaTitle,
    description: route.metaDescription,
    openGraph: {
      title: route.metaTitle,
      description: route.metaDescription,
      images: [{ url: route.heroImage, width: 1200, height: 630, alt: `${route.origin} to ${route.destination} Charter Flight` }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: route.metaTitle,
      description: route.metaDescription,
    },
  };
}

export default async function RoutePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = getRouteBySlug(slug);

  if (!route) {
    notFound();
  }

  const related = getRelatedRoutes(route.relatedRoutes);

  // JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `${route.origin} to ${route.destination} Private Charter Flight`,
    "description": route.metaDescription,
    "provider": {
      "@type": "Organization",
      "name": "SVN Aviation",
      "url": "https://svnaviation.com",
    },
    "areaServed": {
      "@type": "Country",
      "name": "Nigeria",
    },
    "serviceType": "Private Jet Charter",
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col font-sans overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────── */}
      <div className="p-4 md:p-6 w-full h-[55vh] min-h-[480px] flex flex-col">
        <section className="relative flex-1 w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl">
          <Navbar />
          <Image
            src={route.heroImage}
            alt={`${route.origin} to ${route.destination} Charter Flight`}
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
              <Link href="/routes" className="text-white/50 hover:text-white text-[11px] font-bold tracking-widest uppercase transition-colors">Routes</Link>
              <ChevronRight className="w-3 h-3 text-brand-yellow/60" />
              <span className="text-brand-yellow text-[11px] font-bold tracking-widest uppercase">{route.origin} → {route.destination}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] font-serif uppercase tracking-tighter">
              {route.origin} to {route.destination}<br />
              <span className="text-brand-yellow">Private Charter</span>
            </h1>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                <Clock className="w-3.5 h-3.5 text-brand-yellow" />
                <span className="text-xs font-bold">{route.flightTime}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
                <span className="text-xs font-bold">{route.distance}</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main>
        {/* ── INTRO ────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-black">
          <div className="max-w-[900px] mx-auto px-8 md:px-12">
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light italic border-l-2 border-brand-yellow/30 pl-8">
              {route.intro}
            </p>
          </div>
        </section>

        {/* ── ABOUT THE ROUTE ──────────────────────────────── */}
        <section className="pb-20 md:pb-28 bg-black">
          <div className="max-w-[1200px] mx-auto px-8 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">Route Details</span>
                <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 mb-8">About This Route</h2>
                <p className="text-lg text-white/60 leading-relaxed">{route.aboutRoute}</p>
              </div>
              <div className="bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10">
                <h3 className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase mb-6">Airports</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                      <Plane className="w-4 h-4 text-brand-yellow rotate-45" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Departure</p>
                      <p className="text-sm text-white/80 mt-1">{route.originAirport}</p>
                    </div>
                  </div>
                  <div className="w-px h-8 bg-white/10 ml-5" />
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-4 h-4 text-brand-yellow" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Arrival</p>
                      <p className="text-sm text-white/80 mt-1">{route.destinationAirport}</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Flight Time</p>
                    <p className="text-2xl font-black text-brand-yellow mt-1">{route.flightTime}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white/40 uppercase tracking-widest">Distance</p>
                    <p className="text-2xl font-black text-white mt-1">{route.distance}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── AIRCRAFT OPTIONS ─────────────────────────────── */}
        <section className="pb-20 md:pb-28 bg-black">
          <div className="max-w-[1200px] mx-auto px-8 md:px-12">
            <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">Fleet</span>
            <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 mb-12">Aircraft Options</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {route.aircraftOptions.map((aircraft, i) => (
                <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-brand-yellow/30 transition-all group">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-black">{aircraft.type}</h3>
                    <span className="text-[10px] font-bold text-brand-yellow bg-brand-yellow/10 px-3 py-1 rounded-full flex items-center gap-1.5">
                      <Users className="w-3 h-3" />
                      {aircraft.passengers}
                    </span>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">{aircraft.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHO USES THIS ROUTE ──────────────────────────── */}
        <section className="pb-20 md:pb-28 bg-black">
          <div className="max-w-[1200px] mx-auto px-8 md:px-12">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">Clients</span>
                <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 mb-8">Who Uses This Route</h2>
                <ul className="space-y-4">
                  {route.whoUsesThisRoute.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/60">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-2 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">Advantages</span>
                <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 mb-8">Why Charter</h2>
                <ul className="space-y-4">
                  {route.whyCharter.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-white/60">
                      <Shield className="w-4 h-4 text-brand-yellow mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────────── */}
        <section className="pb-20 md:pb-28 bg-black">
          <div className="max-w-[900px] mx-auto px-8 md:px-12">
            <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">Process</span>
            <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 mb-12">How Charter Works</h2>
            <div className="space-y-0">
              {route.howItWorks.map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-black text-brand-yellow">{String(i + 1).padStart(2, '0')}</span>
                    </div>
                    {i < route.howItWorks.length - 1 && <div className="w-px h-12 bg-white/10" />}
                  </div>
                  <p className="text-sm text-white/60 pt-2.5 pb-8">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="pb-20 md:pb-28 bg-black">
          <div className="max-w-[900px] mx-auto px-8 md:px-12">
            <div className="bg-gradient-to-br from-brand-yellow/10 to-transparent border border-brand-yellow/20 rounded-3xl p-10 md:p-14 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-black mb-4">
                Request {route.origin} to {route.destination} Charter
              </h2>
              <p className="text-white/60 text-sm max-w-lg mx-auto mb-8">
                Contact SVN Aviation today to arrange your private charter flight from {route.origin} to {route.destination}. Our coordination team is available 24/7.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 bg-brand-yellow hover:bg-white text-black px-8 py-4 font-black transition-all text-sm tracking-widest uppercase rounded-sm shadow-2xl"
                >
                  <ArrowRight className="w-4 h-4" />
                  Request a Charter Quote
                </Link>
                <a
                  href={`https://wa.me/2347081744560?text=${encodeURIComponent(`Hello SVN Aviation, I'd like to request a charter flight from ${route.origin} to ${route.destination}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 border border-white/20 hover:bg-white hover:text-black text-white px-8 py-4 font-black transition-all text-sm tracking-widest uppercase rounded-sm"
                >
                  <Phone className="w-4 h-4" />
                  Speak to an Advisor
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── RELATED ROUTES ───────────────────────────────── */}
        {related.length > 0 && (
          <section className="pb-20 md:pb-28 bg-black border-t border-white/5 pt-20">
            <div className="max-w-[1200px] mx-auto px-8 md:px-12">
              <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">More Routes</span>
              <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 mb-12">Related Charter Routes</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/routes/${r.slug}`}
                    className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-brand-yellow/30 transition-all group block"
                  >
                    <p className="text-brand-yellow text-[10px] font-black tracking-[0.2em] uppercase mb-2">{r.flightTime}</p>
                    <h3 className="text-lg font-black group-hover:text-brand-yellow transition-colors">
                      {r.origin} → {r.destination}
                    </h3>
                    <p className="text-xs text-white/40 mt-2 line-clamp-2">{r.intro.slice(0, 120)}...</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
