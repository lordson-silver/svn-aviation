import React from 'react';
import { homeServices } from '@/lib/services';
import type { HomeService } from '@/lib/services';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/sections/footer';
import { ChevronRight, ArrowLeft, ArrowRight, Helicopter, Plane, Ship, Package, LifeBuoy, Camera, Phone, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

export async function generateStaticParams() {
  return homeServices.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = homeServices.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      type: 'website',
    },
  };
}

const ICON_MAP: Record<string, React.ReactNode> = {
  helicopter: <Helicopter className="w-12 h-12" />,
  plane: <Plane className="w-12 h-12" />,
  ship: <Ship className="w-12 h-12" />,
  package: <Package className="w-12 h-12" />,
  'life-buoy': <LifeBuoy className="w-12 h-12" />,
  camera: <Camera className="w-12 h-12" />,
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = homeServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.metaDescription,
    "provider": {
      "@type": "Organization",
      "name": "SVN Aviation",
      "alternateName": "Schnell Vogel Nigeria Limited",
      "url": "https://svnaviation.com",
    },
    "areaServed": {
      "@type": "Country",
      "name": "Nigeria",
    },
    "serviceType": service.title,
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col font-sans overflow-x-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      
      <main>
        {/* ── HEADER ───────────────────────────────────────── */}
        <section className="pt-48 pb-20 bg-gradient-to-b from-brand-dark to-black overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-yellow/20 blur-[150px]" />
          </div>

          <div className="max-w-[900px] mx-auto px-8 md:px-12 relative z-10 text-center">
             <div className="flex items-center justify-center gap-2 mb-8">
                <Link href="/" className="text-white/40 hover:text-white text-[10px] font-black tracking-widest uppercase transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3 text-brand-yellow/40" />
                <Link href="/#services" className="text-white/40 hover:text-white text-[10px] font-black tracking-widest uppercase transition-colors">Services</Link>
                <ChevronRight className="w-3 h-3 text-brand-yellow/40" />
                <span className="text-brand-yellow text-[10px] font-black tracking-widest uppercase">{service.title}</span>
             </div>

             <div className="text-brand-yellow mb-8 flex justify-center">
                {ICON_MAP[service.icon] || <Plane className="w-12 h-12" />}
             </div>

             <h1 className="text-4xl md:text-6xl font-black font-serif leading-[1.1] uppercase tracking-tight mb-8">
               {service.title}
             </h1>

             <div className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/20 px-6 py-2 rounded-full mb-6">
                <span className="text-brand-yellow text-[10px] font-black tracking-widest uppercase">
                  {service.tagline}
                </span>
             </div>
          </div>
        </section>

        {/* ── INTRO ─────────────────────────────────────────── */}
        <section className="py-20 md:py-28 bg-black">
          <div className="max-w-[900px] mx-auto px-8 md:px-12">
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light italic border-l-2 border-brand-yellow/30 pl-8">
              {service.desc}
            </p>
            <div className="mt-12 text-lg text-white/50 leading-relaxed font-light">
              <p>{service.content}</p>
            </div>
          </div>
        </section>

        {/* ── CONTENT SECTIONS ──────────────────────────────── */}
        {service.sections.length > 0 && service.sections.map((section, sIdx) => (
          <section key={sIdx} className="pb-20 md:pb-28 bg-black">
            <div className="max-w-[900px] mx-auto px-8 md:px-12">
              <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">
                {String(sIdx + 1).padStart(2, '0')}
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 mb-8">
                {section.heading}
              </h2>
              
              {section.content && (
                <p className="text-lg text-white/60 leading-relaxed mb-8">{section.content}</p>
              )}

              {/* Bullet items */}
              {section.items && section.items.length > 0 && (
                <div className="grid sm:grid-cols-2 gap-3 mt-6">
                  {section.items.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white/[0.03] border border-white/10 rounded-xl px-5 py-4 hover:border-brand-yellow/30 transition-all">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow flex-shrink-0" />
                      <span className="text-sm text-white/70 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Subsections */}
              {section.subsections && section.subsections.length > 0 && (
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                  {section.subsections.map((sub, i) => (
                    <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:border-brand-yellow/30 transition-all">
                      <h3 className="text-lg font-black mb-3 text-white">{sub.title}</h3>
                      {sub.description && (
                        <p className="text-sm text-white/50 leading-relaxed">{sub.description}</p>
                      )}
                      {sub.items && sub.items.length > 0 && (
                        <ul className="space-y-2 mt-3">
                          {sub.items.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-white/50">
                              <div className="w-1 h-1 rounded-full bg-brand-yellow mt-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}

        {/* ── BENEFITS ──────────────────────────────────────── */}
        {service.benefits.length > 0 && (
          <section className="pb-20 md:pb-28 bg-black border-t border-white/5 pt-20">
            <div className="max-w-[1200px] mx-auto px-8 md:px-12">
              <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">Advantages</span>
              <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 mb-12">
                Key Benefits
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-brand-yellow/30 transition-all group">
                    <div className="w-10 h-10 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center mb-5 group-hover:bg-brand-yellow group-hover:border-brand-yellow transition-all">
                      <CheckCircle2 className="w-5 h-5 text-brand-yellow group-hover:text-black transition-colors" />
                    </div>
                    <h3 className="text-lg font-black mb-2">{benefit.title}</h3>
                    <p className="text-sm text-white/50 leading-relaxed">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── HOW IT WORKS ──────────────────────────────────── */}
        {service.process.length > 0 && (
          <section className="pb-20 md:pb-28 bg-black">
            <div className="max-w-[900px] mx-auto px-8 md:px-12">
              <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">Process</span>
              <h2 className="text-3xl md:text-4xl font-serif font-black mt-4 mb-12">
                How Charter Flights Work
              </h2>
              <div className="space-y-0">
                {service.process.map((step, i) => (
                  <div key={i} className="flex gap-6 items-start">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-black text-brand-yellow">{String(i + 1).padStart(2, '0')}</span>
                      </div>
                      {i < service.process.length - 1 && <div className="w-px h-12 bg-white/10" />}
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

        {/* ── WHY CHOOSE SVN ────────────────────────────────── */}
        {service.whyChoose.length > 0 && (
          <section className="pb-20 md:pb-28 bg-black">
            <div className="max-w-[900px] mx-auto px-8 md:px-12">
              <div className="bg-white/[0.02] border border-white/5 p-12 rounded-3xl">
                <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">Why SVN Aviation</span>
                <h2 className="text-2xl md:text-3xl font-serif font-black mt-4 mb-8">
                  Why Choose SVN Aviation
                </h2>
                <p className="text-sm text-white/40 mb-8">
                  SVN Aviation is a trading name of Schnell Vogel Nigeria Limited. We provide reliable charter coordination services backed by industry expertise and strong operational networks.
                </p>
                <ul className="grid md:grid-cols-2 gap-4">
                  {service.whyChoose.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-1.5 flex-shrink-0" />
                      <span className="text-sm text-white/60">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="pb-20 md:pb-28 bg-black">
          <div className="max-w-[900px] mx-auto px-8 md:px-12">
            <div className="bg-gradient-to-br from-brand-yellow/10 to-transparent border border-brand-yellow/20 rounded-3xl p-10 md:p-14 text-center">
              <h2 className="text-3xl md:text-4xl font-serif font-black mb-4">
                {service.ctaHeading}
              </h2>
              <p className="text-white/60 text-sm max-w-lg mx-auto mb-8">
                {service.ctaDescription}
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
                  href={`https://wa.me/2347081744560?text=${encodeURIComponent(`Hello SVN Aviation, I'd like to inquire about ${service.title}.`)}`}
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

        {/* ── BACK LINK ──────────────────────────────────────── */}
        <section className="pb-20 bg-black">
          <div className="max-w-[900px] mx-auto px-8 md:px-12">
            <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
               <Link href="/#services" className="flex items-center gap-3 text-white/50 hover:text-brand-yellow transition-all text-xs font-black tracking-widest uppercase group">
                 <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                 View All Services
               </Link>

               <Link href="/contact" className="bg-brand-yellow text-black px-8 py-4 text-[10px] font-black tracking-widest uppercase hover:bg-white transition-all">
                  Contact Us
               </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
