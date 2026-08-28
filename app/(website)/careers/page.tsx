'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, ShieldAlert, FileText, ChevronRight, Briefcase, Mail, ShieldCheck } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/sections/footer';

export default function CareersPage() {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.7, ease: 'easeOut' as const },
    }),
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col font-sans overflow-x-hidden">
      
      {/* ── HERO ─────────────────────────────────────────── */}
      <div className="p-4 md:p-6 w-full h-[45vh] min-h-[380px] flex flex-col">
        <section className="relative flex-1 w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl">
          <Navbar />

          {/* Background image */}
          <Image
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=2000&q=80&auto=format&fit=crop"
            alt="SVN Aviation Careers Hero"
            fill
            priority
            className="object-cover scale-105"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent z-10" />

          {/* Hero Content */}
          <div className="relative z-20 h-full flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-12 max-w-[1400px] mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-4"
            >
              <Link href="/" className="text-white/50 hover:text-white text-[11px] font-bold tracking-widest uppercase transition-colors">Home</Link>
              <ChevronRight className="w-3 h-3 text-brand-yellow/60" />
              <span className="text-brand-yellow text-[11px] font-bold tracking-widest uppercase">Careers</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] font-serif uppercase tracking-tighter"
            >
              Careers
            </motion.h1>
          </div>
        </section>
      </div>

      {/* ── CORE CONTENT ─────────────────────────────────── */}
      <main className="flex-grow py-16 md:py-24 max-w-[1400px] mx-auto px-8 md:px-12 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column - Careers & Safety Info */}
          <div className="lg:col-span-8 flex flex-col gap-10">
            
            {/* Status Card: No Openings */}
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-zinc-950 border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-yellow flex-shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              <div>
                <span className="text-brand-yellow text-[10px] font-black tracking-[0.25em] uppercase mb-2 block">Current Opportunities</span>
                <h2 className="text-2xl md:text-3xl font-serif font-black mb-3">No Active Vacancies</h2>
                <p className="text-white/60 text-sm md:text-base leading-relaxed">
                  Thank you for your interest in joining SVN Aviation. We are currently not recruiting for any open positions across our operations, flight coordination, logistics, or administrative teams. Please review our safety notice below regarding unsolicited recruitment offers.
                </p>
              </div>
            </motion.div>

            {/* Safety Warning Card */}
            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative overflow-hidden bg-red-950/20 border border-red-500/20 rounded-3xl p-8 md:p-10"
            >
              {/* Highlight Background Effect */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-red-500/5 rounded-full blur-[60px] pointer-events-none" />
              
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500 flex-shrink-0">
                    <ShieldAlert className="w-6 h-6 animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-red-400">Recruitment Safety Advisory</h3>
                    <p className="text-red-500/80 text-xs font-black tracking-widest uppercase mt-0.5">Important Security Notice</p>
                  </div>
                </div>

                <div className="space-y-4 text-white/70 text-sm leading-relaxed border-t border-white/5 pt-6">
                  <p>
                    We have been notified that unauthorized individuals are contacting job seekers, pretending to represent SVN Aviation's recruitment team, and responding to unsolicited applications.
                  </p>
                  <p className="font-semibold text-white/90">
                    Please be aware of the following security protocols to protect yourself:
                  </p>
                  
                  <ul className="list-disc pl-5 space-y-2 text-white/60 text-xs md:text-sm">
                    <li>
                      <strong className="text-white/90">No Active Openings:</strong> SVN Aviation is not hiring for any roles at this time. Any active job invitation or offer you receive is fraudulent.
                    </li>
                    <li>
                      <strong className="text-white/90">No Fees:</strong> SVN Aviation will never ask for money, placement fees, training payments, or sensitive financial information during any stage of our recruitment process.
                    </li>
                    <li>
                      <strong className="text-white/90">Verified Communications:</strong> All official emails from our team will only come from our verified domain: <span className="text-brand-yellow font-mono font-bold">@svnaviation.com</span> or parent domain <span className="text-brand-yellow font-mono font-bold">@schnellvogel.com.ng</span>. We do not use Gmail, Yahoo, or other public webmail addresses for recruitment.
                    </li>
                  </ul>

                  <p className="text-xs text-white/40 pt-2">
                    If you have received a suspicious offer or communication claiming to be from SVN Aviation, please do not respond or provide any personal details. You can verify the communication by contacting us directly.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Talent Registration / Future Openings */}
            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-zinc-950/40 border border-white/5 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row gap-6 items-start"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-yellow flex-shrink-0">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="text-brand-yellow text-[10px] font-black tracking-[0.25em] uppercase mb-2 block">Future Opportunities</span>
                <h3 className="text-xl font-bold mb-3">Join Our Talent Registry</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-4">
                  While we have no active openings today, we are always interested in connecting with experienced pilots, flight coordinators, and air logistics specialists for future needs. 
                </p>
                <p className="text-white/60 text-sm leading-relaxed">
                  If you would like to keep your resume on file, we will store your profile in our secure talent registry. In the event that a suitable position opens up, our official HR team will contact you.
                </p>
              </div>
            </motion.div>

          </div>

          {/* Right Column - Sidebar Call to Action */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-b from-zinc-900 to-zinc-950 border border-white/5 rounded-3xl p-8 relative overflow-hidden"
            >
              {/* Decorative design */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-brand-yellow/5 rounded-full blur-[40px] pointer-events-none" />
              
              <h3 className="text-lg font-bold mb-4 font-serif text-white">Have Questions?</h3>
              <p className="text-white/50 text-xs md:text-sm leading-relaxed mb-6">
                If you need to verify a recruitment message, get in touch with our team, or request more information about SVN Aviation's operations, please contact us.
              </p>

              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-3 bg-brand-yellow hover:bg-white text-black px-6 py-4 rounded-xl transition-all font-black text-xs tracking-widest uppercase shadow-xl group"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                
                <div className="flex items-center gap-3 justify-center text-[10px] text-white/40 font-bold uppercase tracking-widest pt-2">
                  <ShieldCheck className="w-4 h-4 text-brand-yellow" />
                  <span>Secure Communication</span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
