'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { ArrowRight, Shield, Globe, Zap, Users, Award, ChevronRight } from 'lucide-react';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/sections/footer';
import { cn } from '@/lib/utils';

const STATS = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '2,400+', label: 'Missions Completed' },
  { value: '99.8%', label: 'Safety Record' },
  { value: '6', label: 'Nigerian Hubs' },
];

const VALUES = [
  {
    icon: <Shield className="w-7 h-7" />,
    title: 'Safety First',
    desc: 'Every flight decision is governed by rigorous safety protocols exceeding ICAO and NCAA standards. Our zero-compromise approach to safety defines our culture.',
  },
  {
    icon: <Zap className="w-7 h-7" />,
    title: 'Operational Precision',
    desc: 'From offshore crew changes to executive charter, we execute with military-grade precision — minimising downtime, maximising mission success.',
  },
  {
    icon: <Globe className="w-7 h-7" />,
    title: 'Pan-African Reach',
    desc: "Supported by the logistics network of Schnell Vogel Nigeria Limited, we extend our reach across West Africa's most strategic corridors.",
  },
  {
    icon: <Users className="w-7 h-7" />,
    title: 'People-Centred',
    desc: 'Our crew, clients, and communities are at the heart of everything we do. We invest in the people who make safe flight possible.',
  },
];

const LEADERSHIP = [
  {
    name: 'Adebayo Okafor',
    title: 'Chief Executive Officer',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'Ngozi Eze',
    title: 'Director of Operations',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'Olumide Adeyemi',
    title: 'Chief Safety Officer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&q=80',
  },
  {
    name: 'Chisom Nwosu',
    title: 'Head of Charter Services',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&q=80',
  },
];

const GALLERY_IMAGES = [
  'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=80',
  'https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=800&q=80',
  'https://images.unsplash.com/photo-1556388158-158ea5ccacbd?w=800&q=80',
  'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=800&q=80',
];

export default function AboutPage() {
  const [activeImage, setActiveImage] = useState(0);

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
      <div className="p-4 md:p-6 w-full h-[55vh] min-h-[480px] flex flex-col">
        <section className="relative flex-1 w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl">
          <Navbar />

          {/* Background image */}
          <Image
            src="https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=2000&q=80&auto=format&fit=crop"
            alt="SVN Aviation About Hero"
            fill
            priority
            className="object-cover scale-105"
          />
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent z-10" />

          {/* Hero Content */}
          <div className="relative z-20 h-full flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-14 max-w-[1400px] mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-5"
            >
              <a href="/" className="text-white/50 hover:text-white text-[11px] font-bold tracking-widest uppercase transition-colors">Home</a>
              <ChevronRight className="w-3 h-3 text-brand-yellow/60" />
              <span className="text-brand-yellow text-[11px] font-bold tracking-widest uppercase">About</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] font-serif uppercase tracking-tighter"
            >
              About SVN
            </motion.h1>
          </div>
        </section>
      </div>

      {/* ── STORY SECTION ────────────────────────────────── */}
      <section className="py-24 md:py-36 bg-black">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left: Circular image with overlay card + gallery thumbnails */}
            <div className="relative flex flex-col items-center">
              {/* Decorative ring */}
              <div className="relative w-[320px] md:w-[420px] aspect-square">
                <div className="absolute inset-0 rounded-full border-2 border-brand-yellow/30 scale-110" />
                <div className="absolute inset-0 rounded-full border border-brand-yellow/10 scale-125" />

                {/* Main image – circular */}
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                  <Image
                    src={GALLERY_IMAGES[activeImage]}
                    alt="SVN Aviation operations"
                    fill
                    className="object-cover transition-all duration-700"
                  />
                </div>

                {/* Stat card overlay */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -right-4 md:-right-10 bg-white text-black px-6 py-5 shadow-2xl rounded-2xl min-w-[140px]"
                >
                  <p className="text-4xl font-black text-brand-yellow leading-none">15+</p>
                  <p className="text-sm font-semibold text-black/70 mt-1 leading-tight">Years of<br />Excellence</p>
                </motion.div>
              </div>

              {/* Gallery thumbnails */}
              <div className="flex gap-3 mt-14">
                {GALLERY_IMAGES.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={cn(
                      'relative w-14 h-14 rounded-xl overflow-hidden border-2 transition-all duration-300',
                      activeImage === i ? 'border-brand-yellow scale-110' : 'border-white/10 opacity-50 hover:opacity-80'
                    )}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>

              {/* Dot grid decoration */}
              <div className="absolute top-8 -left-8 grid grid-cols-6 gap-2 opacity-20 pointer-events-none hidden md:grid">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 rounded-full bg-brand-yellow" />
                ))}
              </div>
            </div>

            {/* Right: Text content */}
            <div className="flex flex-col gap-8">
              <motion.div
                custom={0}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">About SVN Aviation</span>
                <h2 className="text-4xl md:text-5xl font-serif font-black leading-tight mt-4">
                  Nigeria's Premier<br />Aviation Partner
                </h2>
              </motion.div>

              <motion.p
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-white/60 text-base md:text-lg leading-relaxed"
              >
                SVN Aviation is a specialized aviation services company and a trading name of Schnell Vogel Nigeria Limited — one of Nigeria's most trusted logistics and critical infrastructure groups. We provide on-demand executive charter, offshore crew transfer, aerial survey, and mission-critical aviation coordination across Nigeria's strategic corridors.
              </motion.p>

              <motion.p
                custom={2}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-white/50 text-sm leading-relaxed"
              >
                Our operations span Lagos, Abuja, Port Harcourt, Warri, Onne, and beyond — serving the Oil & Gas sector, government agencies, multinational corporations, and high-net-worth individuals who demand nothing less than precision and safety in the skies.
              </motion.p>

              <motion.div
                custom={3}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <a
                  href="#values"
                  className="inline-flex items-center gap-3 bg-brand-yellow hover:bg-white text-black px-8 py-4 font-black transition-all text-sm tracking-widest uppercase rounded-sm shadow-2xl group"
                >
                  Discover More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ────────────────────────────────────── */}
      <section className="bg-brand-yellow py-14">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-black/10">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col items-center text-center px-4"
              >
                <p className="text-4xl md:text-5xl font-black text-black leading-none">{stat.value}</p>
                <p className="text-xs font-bold text-black/60 mt-2 tracking-widest uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES SECTION ───────────────────────────────── */}
      <section id="values" className="py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="mb-20">
            <h4 className="text-brand-yellow text-sm font-bold tracking-[0.3em] uppercase mb-4">Our Principles</h4>
            <h2 className="text-4xl md:text-6xl font-serif font-black">What We Stand For</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-0.5 bg-white/5 border border-white/5">
            {VALUES.map((value, i) => (
              <motion.div
                key={value.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-black p-10 md:p-12 group hover:bg-brand-yellow/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-black transition-all duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-black">{value.title}</h3>
                </div>
                <p className="text-white/50 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEADERSHIP SECTION ───────────────────────────── */}
      <section className="py-32 bg-[#050810]">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="mb-20">
            <h4 className="text-brand-yellow text-sm font-bold tracking-[0.3em] uppercase mb-4">The Team</h4>
            <h2 className="text-4xl md:text-6xl font-serif font-black">Leadership</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP.map((person, i) => (
              <motion.div
                key={person.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group relative overflow-hidden rounded-2xl border border-white/5 aspect-[3/4]"
              >
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-brand-yellow text-[9px] font-black tracking-[0.25em] uppercase mb-1">{person.title}</p>
                  <h3 className="text-white font-black text-lg leading-tight">{person.name}</h3>
                </div>

                {/* Hover accent */}
                <div className="absolute top-0 left-0 w-1 h-0 bg-brand-yellow group-hover:h-full transition-all duration-500 rounded-bl-2xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTIFICATION BANNER ─────────────────────────── */}
      <section className="py-20 border-y border-white/5 bg-black">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <Award className="w-12 h-12 text-brand-yellow flex-shrink-0" />
            <div>
              <p className="text-brand-yellow text-[10px] font-black tracking-[0.25em] uppercase mb-1">Regulatory Compliance</p>
              <h3 className="text-2xl md:text-3xl font-black">NCAA & ICAO Certified Operator</h3>
            </div>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-md text-center md:text-right">
            All SVN Aviation operations are conducted in full compliance with Nigeria Civil Aviation Authority (NCAA) regulations and International Civil Aviation Organization (ICAO) standards.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section className="py-36 bg-[#050810] relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-yellow/5 blur-[120px]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 text-center flex flex-col items-center gap-8">
          <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">Ready to Fly?</span>
          <h2 className="text-5xl md:text-7xl font-serif font-black leading-tight max-w-3xl">
            Charter Your Next Mission With SVN
          </h2>
          <p className="text-white/50 text-base md:text-lg max-w-xl leading-relaxed">
            From offshore logistics to executive travel — our operations center is on standby 24/7 to coordinate your next flight.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="flex items-center gap-3 bg-brand-yellow hover:bg-white text-black px-10 py-5 font-black transition-all text-sm tracking-widest uppercase rounded-sm shadow-2xl group">
              Request Charter
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/20 hover:bg-white hover:text-black text-white px-10 py-5 font-black transition-all text-sm tracking-widest uppercase rounded-sm backdrop-blur-sm">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
