import React from 'react';
import { homeServices } from '@/lib/services';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/sections/footer';
import { ChevronRight, ArrowLeft, Helicopter, Plane, Ship, Package, LifeBuoy, Camera } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return homeServices.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = homeServices.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const icons = [
    <Helicopter key="h" className="w-12 h-12" />,
    <Plane key="p" className="w-12 h-12" />,
    <Ship key="s" className="w-12 h-12" />,
    <Package key="k" className="w-12 h-12" />,
    <LifeBuoy key="l" className="w-12 h-12" />,
    <Camera key="c" className="w-12 h-12" />,
  ];

  const iconIndex = homeServices.indexOf(service);

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col font-sans overflow-x-hidden">
      <Navbar />

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
              <span className="text-brand-yellow text-[10px] font-black tracking-widest uppercase">Expertise</span>
           </div>

           <div className="text-brand-yellow mb-8 flex justify-center">
              {icons[iconIndex]}
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

      {/* ── MAIN CONTENT ─────────────────────────────────── */}
      <section className="pb-32 bg-black">
        <div className="max-w-[800px] mx-auto px-8 md:px-12">
          <div className="prose prose-invert prose-brand max-w-none">
            <p className="text-xl md:text-2xl text-white/70 leading-relaxed font-light mb-12 italic border-l-2 border-brand-yellow/30 pl-8">
              {service.desc}
            </p>
            
            <div className="text-lg text-white/50 leading-relaxed space-y-8 font-light">
               <p>{service.content}</p>
               
               <div className="bg-white/[0.02] border border-white/5 p-12 rounded-3xl mt-16">
                  <h3 className="text-white text-xl font-serif mb-6 uppercase tracking-tight">Operational Excellence</h3>
                  <ul className="grid md:grid-cols-2 gap-6 text-sm">
                     <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-1.5" />
                        <span>24/7 Deployment Coordination</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-1.5" />
                        <span>Flight Following & Real-time Tracking</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-1.5" />
                        <span>Advanced Safety Management Systems</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-yellow mt-1.5" />
                        <span>Highly Qualified Flight Crews</span>
                      </li>
                  </ul>
               </div>
            </div>
          </div>

          <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
             <Link href="/#services" className="flex items-center gap-3 text-white/50 hover:text-brand-yellow transition-all text-xs font-black tracking-widest uppercase group">
               <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
               View All Services
             </Link>

             <Link href="/contact" className="bg-brand-yellow text-black px-8 py-4 text-[10px] font-black tracking-widest uppercase hover:bg-white transition-all">
                Request a Quote
             </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
