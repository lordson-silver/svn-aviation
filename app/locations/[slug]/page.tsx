import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { ChevronRight, Plane, MapPin, Building2, ArrowRight, Clock, Users, Shield, CheckCircle2, Phone } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/sections/footer';
import { locationPages, getLocationBySlug } from '@/lib/locations';
import { charterRoutes } from '@/lib/routes';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return locationPages.map((loc) => ({
    slug: loc.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);
  if (!loc) return { title: 'Location Not Found' };

  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      images: [{ url: loc.heroImage, width: 1200, height: 630, alt: `Charter Flights ${loc.cityName}` }],
      type: 'website',
    },
  };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const loc = getLocationBySlug(slug);

  if (!loc) {
    notFound();
  }

  const allRoutes = [...loc.outboundRoutes, ...loc.inboundRoutes];
  const connectedRoutes = allRoutes
    .map(s => charterRoutes.find(r => r.slug === s))
    .filter(Boolean) as typeof charterRoutes;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": `${loc.cityName} Charter Aviation Hub`,
    "description": loc.metaDescription,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": loc.cityName,
      "addressRegion": loc.state,
      "addressCountry": "NG",
    },
  };

  // Determine if this is a "rich" location page (Lagos-style with extended content)
  const isRichPage = !!(loc.airportDetails || loc.charterServicesDetail || loc.popularRoutes);

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col font-sans overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* ── HERO ─────────────────────────────────────────── */}
      <div className="p-4 md:p-6 w-full h-[55vh] min-h-[480px] flex flex-col">
        <section className="relative flex-1 w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl">
          <Navbar />
          <Image
            src={loc.heroImage}
            alt={`Charter Flight Services in ${loc.cityName}`}
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
              <Link href="/locations" className="text-white/50 hover:text-white text-[11px] font-bold tracking-widest uppercase transition-colors">Locations</Link>
              <ChevronRight className="w-3 h-3 text-brand-yellow/60" />
              <span className="text-brand-yellow text-[11px] font-bold tracking-widest uppercase">{loc.cityName}</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] font-serif uppercase tracking-tighter">
              Charter Flights in<br />
              <span className="text-brand-yellow">{loc.cityName}</span>
            </h1>
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                <Plane className="w-3.5 h-3.5 text-brand-yellow" />
                <span className="text-xs font-bold">{loc.airport} ({loc.airportCode})</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                <MapPin className="w-3.5 h-3.5 text-brand-yellow" />
                <span className="text-xs font-bold">{loc.state}</span>
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
              {loc.intro}
            </p>
          </div>
        </section>

        {/* ── OVERVIEW / AVIATION HUB ─────────────────────── */}
        <section className="pb-20 md:pb-28 bg-black">
          <div className="max-w-[900px] mx-auto px-8 md:px-12">
            <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">Overview</span>
            <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 mb-8">Aviation in {loc.cityName}</h2>
            <p className="text-lg text-white/60 leading-relaxed">{loc.overview}</p>
          </div>
        </section>

        {/* ── AIRPORT DETAILS (Rich pages only) ───────────── */}
        {loc.airportDetails && loc.airportDetails.length > 0 && (
          <section className="pb-20 md:pb-28 bg-black">
            <div className="max-w-[1200px] mx-auto px-8 md:px-12">
              <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">Infrastructure</span>
              <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 mb-12">Major Airports in {loc.cityName}</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {loc.airportDetails.map((apt, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-brand-yellow/30 transition-all">
                    <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center mb-5">
                      <Plane className="w-4 h-4 text-brand-yellow" />
                    </div>
                    <h3 className="text-lg font-black mb-3">{apt.name}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{apt.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CHARTER SERVICES DETAIL (Rich pages) ─────────── */}
        {loc.charterServicesDetail && loc.charterServicesDetail.length > 0 && (
          <section className="pb-20 md:pb-28 bg-black border-t border-white/5 pt-20">
            <div className="max-w-[1200px] mx-auto px-8 md:px-12">
              <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">Services</span>
              <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 mb-12">Charter Services Available in {loc.cityName}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {loc.charterServicesDetail.map((svc, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-brand-yellow/30 transition-all group">
                    <div className="w-8 h-8 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center mb-4 group-hover:bg-brand-yellow transition-all">
                      <Plane className="w-3.5 h-3.5 text-brand-yellow group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-base font-black mb-2">{svc.title}</h3>
                    <p className="text-xs text-white/50 leading-relaxed">{svc.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── AVAILABLE SERVICES (fallback for non-rich pages) */}
        {!loc.charterServicesDetail && (
          <section className="pb-20 md:pb-28 bg-black">
            <div className="max-w-[1200px] mx-auto px-8 md:px-12">
              <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">What We Offer</span>
              <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 mb-12">Available Services in {loc.cityName}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {loc.availableServices.map((svc, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-brand-yellow/30 transition-all">
                    <div className="w-8 h-8 rounded-lg bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center mb-4">
                      <Plane className="w-3.5 h-3.5 text-brand-yellow" />
                    </div>
                    <p className="text-sm font-bold">{svc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── POPULAR ROUTES + FLIGHT TIMES (Rich pages) ─── */}
        {loc.popularRoutes && loc.popularRoutes.length > 0 && (
          <section className="pb-20 md:pb-28 bg-black">
            <div className="max-w-[1200px] mx-auto px-8 md:px-12">
              <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">Connectivity</span>
              <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 mb-4">Popular Charter Routes from {loc.cityName}</h2>
              <p className="text-white/50 text-sm mb-12 max-w-2xl">
                Charter flights from {loc.cityName} significantly reduce travel time compared to commercial airlines. Passengers can avoid long queues, delays, and rigid schedules.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {loc.popularRoutes.map((r, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-brand-yellow/30 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Plane className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                      <span className="text-sm font-bold">{r.route}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3 h-3 text-brand-yellow" />
                      <span className="text-[10px] font-bold text-brand-yellow uppercase tracking-wider">{r.flightTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── AIRCRAFT OPTIONS (Rich pages) ────────────────── */}
        {loc.aircraftOptions && loc.aircraftOptions.length > 0 && (
          <section className="pb-20 md:pb-28 bg-black">
            <div className="max-w-[1200px] mx-auto px-8 md:px-12">
              <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">Fleet</span>
              <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 mb-12">Aircraft Options Available</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {loc.aircraftOptions.map((aircraft, i) => (
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
              <p className="text-xs text-white/30 mt-6">Aircraft selection depends on number of passengers, travel distance, budget, and operational requirements.</p>
            </div>
          </section>
        )}

        {/* ── WHO USES CHARTER (Rich pages) ────────────────── */}
        {loc.whoUsesCharter && loc.whoUsesCharter.length > 0 && (
          <section className="pb-20 md:pb-28 bg-black border-t border-white/5 pt-20">
            <div className="max-w-[1200px] mx-auto px-8 md:px-12">
              <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">Clients</span>
              <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 mb-12">Who Uses Charter Flight Services in {loc.cityName}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {loc.whoUsesCharter.map((client, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-brand-yellow/30 transition-all">
                    <h3 className="text-base font-black mb-2">{client.title}</h3>
                    <p className="text-xs text-white/50 leading-relaxed">{client.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── BENEFITS OF CHARTER (Rich pages) ────────────── */}
        {loc.benefitsOfCharter && loc.benefitsOfCharter.length > 0 && (
          <section className="pb-20 md:pb-28 bg-black">
            <div className="max-w-[1200px] mx-auto px-8 md:px-12">
              <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">Advantages</span>
              <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 mb-12">Benefits of Charter Flights in {loc.cityName}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {loc.benefitsOfCharter.map((benefit, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-brand-yellow/30 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center mb-5 group-hover:bg-brand-yellow group-hover:border-brand-yellow transition-all">
                      <CheckCircle2 className="w-5 h-5 text-brand-yellow group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-base font-black mb-2">{benefit.title}</h3>
                    <p className="text-xs text-white/50 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── HOW CHARTER WORKS (Rich pages) ───────────────── */}
        {loc.howCharterWorks && loc.howCharterWorks.length > 0 && (
          <section className="pb-20 md:pb-28 bg-black">
            <div className="max-w-[900px] mx-auto px-8 md:px-12">
              <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">Process</span>
              <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 mb-12">How Charter Flight Works</h2>
              <p className="text-white/50 text-sm mb-12">SVN Aviation follows a structured process to coordinate charter flights from {loc.cityName}.</p>
              <div className="space-y-0">
                {loc.howCharterWorks.map((step, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-black text-brand-yellow">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      {i < loc.howCharterWorks!.length - 1 && <div className="w-px h-12 bg-white/10" />}
                    </div>
                    <div className="pt-1 pb-8">
                      <h3 className="text-sm font-black text-white mb-1">{step.step}</h3>
                      <p className="text-sm text-white/50">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── KEY INDUSTRIES ───────────────────────────────── */}
        <section className="pb-20 md:pb-28 bg-black">
          <div className="max-w-[900px] mx-auto px-8 md:px-12">
            <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">Sectors</span>
            <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 mb-8">Key Industries in {loc.cityName}</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {loc.keyIndustries.map((ind, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-xl p-5">
                  <Building2 className="w-5 h-5 text-brand-yellow flex-shrink-0" />
                  <span className="text-sm font-medium text-white/70">{ind}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONNECTED ROUTES ─────────────────────────────── */}
        {connectedRoutes.length > 0 && (
          <section className="pb-20 md:pb-28 bg-black border-t border-white/5 pt-20">
            <div className="max-w-[1200px] mx-auto px-8 md:px-12">
              <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">Connectivity</span>
              <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 mb-12">Charter Routes from {loc.cityName}</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {connectedRoutes.map((r) => (
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

        {/* ── WHY CHOOSE SVN (Rich pages) ──────────────────── */}
        {isRichPage && (
          <section className="pb-20 md:pb-28 bg-black">
            <div className="max-w-[900px] mx-auto px-8 md:px-12">
              <div className="bg-white/[0.02] border border-white/5 p-12 rounded-3xl">
                <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">Why SVN Aviation</span>
                <h2 className="text-2xl md:text-3xl font-serif font-black mt-4 mb-6">
                  Why Choose SVN Aviation in {loc.cityName}
                </h2>
                <p className="text-sm text-white/40 mb-8">
                  SVN Aviation is a trading name of Schnell Vogel Nigeria Limited. We provide reliable charter flight coordination services with a focus on efficiency and client satisfaction.
                </p>
                <ul className="grid md:grid-cols-2 gap-4">
                  {[
                    'Strong aviation network',
                    'Fast response time',
                    'Nationwide and regional coverage',
                    'Tailored travel solutions',
                    'Professional coordination',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-1.5 flex-shrink-0" />
                      <span className="text-sm text-white/60">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-white/30 mt-8">
                  We ensure that every charter flight is handled with precision and attention to detail.
                </p>
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="pb-20 md:pb-28 bg-black">
          <div className="max-w-[900px] mx-auto px-8 md:px-12">
            <div className="bg-gradient-to-br from-brand-yellow/10 to-transparent border border-brand-yellow/20 rounded-3xl p-10 md:p-14 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-black mb-4">
                {isRichPage ? `Request Charter Flight in ${loc.cityName}` : `Book a Charter from ${loc.cityName}`}
              </h2>
              <p className="text-white/60 text-sm max-w-lg mx-auto mb-8">
                {isRichPage
                  ? `If you require private jet or helicopter charter services in ${loc.cityName}, SVN Aviation is ready to assist. Our team will provide suitable aircraft options and coordinate your travel seamlessly.`
                  : `Request a quote for your next charter flight departing from or arriving in ${loc.cityName}. Our coordination team is available 24/7.`
                }
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
                  href={`https://wa.me/2347081744560?text=${encodeURIComponent(`Hello SVN Aviation, I'd like to request a charter flight in ${loc.cityName}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 border border-white/20 hover:bg-white hover:text-black text-white px-8 py-4 font-black transition-all text-sm tracking-widest uppercase rounded-sm"
                >
                  <Phone className="w-4 h-4" />
                  Speak to a Charter Advisor
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
