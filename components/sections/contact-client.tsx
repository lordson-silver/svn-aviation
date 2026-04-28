'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import { 
  ArrowRight, Phone, Mail, MapPin, Clock, ChevronRight, Send, 
  Search, Calendar, Users as UsersIcon, PlaneTakeoff, PlaneLanding 
} from 'lucide-react';
import { SERVICES, LOCATIONS } from '@/lib/services';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/sections/footer';

const ALL_SERVICES = SERVICES.flatMap(cat => cat.items);

const OFFICES = [
  {
    city: 'Lagos',
    label: 'Lagos Hub',
    address: 'MMIA Aviation Plaza, Ikeja, Lagos State, Nigeria',
    phone: '+234(0)8060740721',
    email: 'info@svnaviation.com',
    hours: 'Mon–Fri 07:00–19:00',
    lat: 6.5775,
    lng: 3.3214,
  },
  {
    city: 'Abuja',
    label: 'Abuja Operations',
    address: 'Nnamdi Azikiwe International Airport, FCT Abuja, Nigeria',
    phone: '+234(0)8060740721',
    email: 'info@svnaviation.com',
    hours: 'Mon–Fri 07:00–19:00',
    lat: 9.0065,
    lng: 7.4636,
  },
  {
    city: 'Port Harcourt',
    label: 'Port Harcourt',
    address: 'Air Force Base Road, Port Harcourt, Rivers State, Nigeria',
    phone: '+234(0)8060740721',
    email: 'phc@svnaviation.ng',
    hours: 'Mon–Fri 07:00–19:00',
    lat: 4.8396,
    lng: 7.0051,
  },
];

const MAP_EMBED_URLS: Record<string, string> = {
  Lagos: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.4!2d3.3214!3d6.5775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b922d14abd21f%3A0x2da1a3c36d1cb4e9!2sMurtala+Muhammed+International+Airport!5e0!3m2!1sen!2sng!4v1',
  Abuja: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8!2d7.4636!3d9.0065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e745e48289869%3A0x8f93e2b8eae4df60!2sNnamdi+Azikiwe+International+Airport!5e0!3m2!1sen!2sng!4v1',
  'Port Harcourt': 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.0!2d7.0051!3d4.8396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cd89f6f93c01%3A0x5fdc8c6f0bffd9b8!2sPort+Harcourt+International+Airport!5e0!3m2!1sen!2sng!4v1',
};

export function ContactClient() {
  const [activeCity, setActiveCity] = useState('Lagos');
  const [form, setForm] = useState({ 
    name: '', 
    phone: '', 
    email: '', 
    passengers: '1',
    pickup: '',
    destination: '',
    service: '',
    date: '',
    message: '' 
  });
  const [sent, setSent] = useState(false);
  const [serviceSearch, setServiceSearch] = useState('');
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);

  const filteredServices = ALL_SERVICES.filter(s => 
    s.toLowerCase().includes(serviceSearch.toLowerCase())
  );

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.7, ease: 'easeOut' as const },
    }),
  };

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    const sanitizedData = {
      name: form.name.trim(),
      phone: form.phone.trim(),
      email: form.email.trim().toLowerCase(),
      passengers: parseInt(form.passengers) || 1,
      pickup: form.pickup || 'Not Specified',
      destination: form.destination || 'Not Specified',
      service: form.service || serviceSearch || 'General Inquiry',
      date: form.date,
      message: form.message.trim().replace(/<[^>]*>?/gm, ''),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData),
      });

      if (response.ok) {
        setSent(true);
        setTimeout(() => setSent(false), 5000);
        setForm({ 
          name: '', phone: '', email: '', passengers: '1',
          pickup: '', destination: '', service: '', date: '', message: '' 
        });
        setServiceSearch('');
      } else {
        const error = await response.json();
        console.error('Submission failed:', error);
        alert('Operation Failed: Please try again or contact us directly at info@svnaviation.com');
      }
    } catch (err) {
      console.error('Network Error:', err);
      alert('Network Error: Please check your connection.');
    }
  }

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col font-sans overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────── */}
      <div className="p-4 md:p-6 w-full h-[55vh] min-h-[480px] flex flex-col">
        <section className="relative flex-1 w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl">
          <Navbar />

          <Image
            src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=2000&q=80&auto=format&fit=crop"
            alt="SVN Aviation Contact Hero"
            fill
            priority
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent z-10" />

          <div className="relative z-20 h-full flex flex-col justify-end px-8 md:px-16 lg:px-24 pb-14 max-w-[1400px] mx-auto w-full">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-2 mb-5"
            >
              <a href="/" className="text-white/50 hover:text-white text-[11px] font-bold tracking-widest uppercase transition-colors">Home</a>
              <ChevronRight className="w-3 h-3 text-brand-yellow/60" />
              <span className="text-brand-yellow text-[11px] font-bold tracking-widest uppercase">Contact</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] font-serif uppercase tracking-tighter"
            >
              Request A Quote
            </motion.h1>
          </div>
        </section>
      </div>

      {/* ── CONTACT FORM + MAP ───────────────────────────── */}
      <section className="py-24 md:py-36 bg-black">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* LEFT: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase">Flight Inquiry</span>
              <h2 className="text-4xl md:text-5xl font-serif font-black mt-4 mb-10">Charter Details</h2>

              {sent && (
                <div className="bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow px-6 py-4 rounded-xl mb-8 text-sm font-bold flex items-center gap-3">
                  <Send className="w-4 h-4 flex-shrink-0" />
                  Quote request sent! Our team will respond within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Name & Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative group">
                    <input
                      required
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-brand-yellow text-white placeholder:text-white/30 px-5 py-4 rounded-xl text-sm font-medium outline-none transition-all"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      required
                      type="tel"
                      placeholder="Phone number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-brand-yellow text-white placeholder:text-white/30 px-5 py-4 rounded-xl text-sm font-medium outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email & Passengers */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    required
                    type="email"
                    placeholder="Email address"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 focus:border-brand-yellow text-white placeholder:text-white/30 px-5 py-4 rounded-xl text-sm font-medium outline-none transition-all"
                  />
                  <div className="relative flex items-center">
                    <UsersIcon className="absolute left-5 w-4 h-4 text-white/30" />
                    <input
                      type="number"
                      min="1"
                      placeholder="Passengers"
                      value={form.passengers}
                      onChange={(e) => setForm({ ...form, passengers: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-brand-yellow text-white placeholder:text-white/30 pl-12 pr-5 py-4 rounded-xl text-sm font-medium outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Pickup & Destination */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="relative">
                    <PlaneTakeoff className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-yellow/50" />
                    <select
                      value={form.pickup}
                      onChange={(e) => setForm({ ...form, pickup: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-brand-yellow text-white px-12 py-4 rounded-xl text-sm font-medium outline-none appearance-none cursor-pointer transition-all"
                    >
                      <option value="" disabled className="bg-black text-white/30">Pickup Location</option>
                      {LOCATIONS.map(loc => (
                        <option key={loc.name} value={loc.name} className="bg-black">{loc.name}</option>
                      ))}
                      <option value="Other" className="bg-black">Other / Special Request</option>
                    </select>
                  </div>
                  <div className="relative">
                    <PlaneLanding className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-yellow/50" />
                    <select
                      value={form.destination}
                      onChange={(e) => setForm({ ...form, destination: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-brand-yellow text-white px-12 py-4 rounded-xl text-sm font-medium outline-none appearance-none cursor-pointer transition-all"
                    >
                      <option value="" disabled className="bg-black text-white/30">Destination</option>
                      {LOCATIONS.map(loc => (
                        <option key={loc.name} value={loc.name} className="bg-black">{loc.name}</option>
                      ))}
                      <option value="Other" className="bg-black">Other / Special Request</option>
                    </select>
                  </div>
                </div>

                {/* Service & Date */}
                <div className="grid sm:grid-cols-2 gap-4 items-start">
                  <div className="relative">
                    <Search className="absolute left-5 top-4 w-4 h-4 text-white/30" />
                    <input
                      type="text"
                      placeholder="Type to search service..."
                      value={serviceSearch}
                      onFocus={() => setShowServiceDropdown(true)}
                      onChange={(e) => {
                        setServiceSearch(e.target.value);
                        setShowServiceDropdown(true);
                      }}
                      className="w-full bg-white/5 border border-white/10 focus:border-brand-yellow text-white placeholder:text-white/30 pl-12 pr-5 py-4 rounded-xl text-sm font-medium outline-none transition-all"
                    />
                    {showServiceDropdown && serviceSearch && (
                      <div className="absolute z-50 left-0 right-0 mt-2 bg-neutral-900 border border-white/10 rounded-xl max-h-60 overflow-y-auto shadow-2xl backdrop-blur-xl">
                        {filteredServices.length > 0 ? (
                          filteredServices.map((s, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => {
                                setForm({ ...form, service: s });
                                setServiceSearch(s);
                                setShowServiceDropdown(false);
                              }}
                              className="w-full text-left px-5 py-3 text-xs hover:bg-brand-yellow hover:text-black transition-colors border-b border-white/5 last:border-0"
                            >
                              {s}
                            </button>
                          ))
                        ) : (
                          <div className="px-5 py-3 text-xs text-white/50">No service found. You can still type your request.</div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <Calendar className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                    <input
                      required
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full bg-white/5 border border-white/10 focus:border-brand-yellow text-white px-12 py-4 rounded-xl text-sm font-medium outline-none transition-all [color-scheme:dark] cursor-pointer"
                    />
                  </div>
                </div>

                {/* Message */}
                <textarea
                  rows={4}
                  placeholder="Additional requests or instructions..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 focus:border-brand-yellow text-white placeholder:text-white/30 px-5 py-4 rounded-xl text-sm font-medium outline-none transition-all resize-y min-h-[120px]"
                />

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-brand-yellow hover:bg-white text-black px-8 py-4 font-black transition-all text-sm tracking-widest uppercase rounded-sm shadow-2xl group"
                  >
                    <ArrowRight className="w-4 h-4" />
                    Send Your Message
                  </button>
                </div>
              </form>
            </motion.div>

            {/* RIGHT: Map + Office Tabs */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="flex flex-col gap-4"
            >
              {/* City selector tabs */}
              <div className="flex gap-2 p-1 bg-white/5 border border-white/10 rounded-xl w-fit">
                {OFFICES.map((office) => (
                  <button
                    key={office.city}
                    onClick={() => setActiveCity(office.city)}
                    className={`px-4 py-2 rounded-lg text-[10px] font-black tracking-widest uppercase transition-all ${
                      activeCity === office.city
                        ? 'bg-brand-yellow text-black shadow-lg'
                        : 'text-white/50 hover:text-white'
                    }`}
                  >
                    {office.city}
                  </button>
                ))}
              </div>

              {/* Map embed */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl" style={{ height: 380 }}>
                <iframe
                  key={activeCity}
                  src={MAP_EMBED_URLS[activeCity]}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Map – ${activeCity}`}
                  className="grayscale contrast-110"
                />
              </div>

              {/* Active office info */}
              {OFFICES.filter((o) => o.city === activeCity).map((office) => (
                <div key={office.city} className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col gap-3">
                  <h3 className="text-brand-yellow text-[10px] font-black tracking-[0.35em] uppercase mb-1">{office.label}</h3>
                  <div className="flex items-start gap-3 text-sm text-white/70">
                    <MapPin className="w-4 h-4 text-brand-yellow mt-0.5 flex-shrink-0" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <Phone className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <Mail className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                    <span>{office.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white/70">
                    <Clock className="w-4 h-4 text-brand-yellow flex-shrink-0" />
                    <span>{office.hours}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── QUICK CONTACT CARDS ──────────────────────────── */}
      <section className="pb-24 bg-black border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          <div className="grid md:grid-cols-3 gap-0.5 bg-white/5 border border-white/5 mt-0">
            {[
              {
                icon: <Phone className="w-6 h-6" />,
                title: 'Call Us',
                subtitle: 'Operations Center',
                value: '+234(0)8060740721',
                sub: 'Available 24/7',
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: 'Email Us',
                subtitle: 'General Inquiries',
                value: 'info@svnaviation.com',
                sub: 'Response within 24hrs',
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: 'Operating Hours',
                subtitle: 'Charter Desk',
                value: '24/7 On-Demand',
                sub: 'Emergency line always open',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-black p-10 md:p-12 group hover:bg-brand-yellow/5 transition-colors duration-300 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 border border-brand-yellow/20 flex items-center justify-center text-brand-yellow group-hover:bg-brand-yellow group-hover:text-black transition-all duration-300">
                  {card.icon}
                </div>
                <div>
                  <p className="text-brand-yellow text-[9px] font-black tracking-[0.25em] uppercase mb-1">{card.subtitle}</p>
                  <h3 className="text-lg font-black mb-1">{card.title}</h3>
                  <p className="text-white/80 font-bold text-sm">{card.value}</p>
                  <p className="text-white/40 text-xs mt-1">{card.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
