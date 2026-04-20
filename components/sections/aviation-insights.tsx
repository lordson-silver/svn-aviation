'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

interface Post {
  title: string;
  slug: { current: string };
  mainImage?: any;
  publishedAt: string;
  categories?: { title: string }[];
}

interface AviationInsightsProps {
  posts: Post[];
}

export function AviationInsights({ posts }: AviationInsightsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="py-32 bg-black">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div className="max-w-xl">
              <h4 className="text-brand-yellow text-sm font-bold tracking-[0.3em] uppercase mb-4">Newsletter</h4>
              <h2 className="text-4xl md:text-6xl font-serif">Aviation Insights</h2>
           </div>
           <Link href="/blog" className="text-brand-yellow font-black border-b border-brand-yellow/30 pb-1 hover:text-white hover:border-white transition-all uppercase tracking-widest text-[10px]">
              View All Articles
           </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
           {posts.map((post, i) => (
             <motion.div
               key={post.slug?.current || `insight-${i}`}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: i * 0.1 }}
               className="group cursor-pointer"
             >
               <Link href={`/blog/${post.slug?.current || ''}`}>
                 <div className="aspect-video bg-white/5 border border-white/5 mb-8 overflow-hidden relative rounded-sm">
                    {post.mainImage && (
                      <Image 
                        src={urlForImage(post.mainImage).url()} 
                        alt={post.title}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                       <span className="text-brand-yellow text-[10px] font-black tracking-widest uppercase bg-black px-6 py-2 border border-brand-yellow/30 shadow-2xl">Read More</span>
                    </div>
                 </div>
                 <div className="text-[10px] text-brand-yellow font-black tracking-widest uppercase mb-4 flex items-center gap-4">
                    <span>{post.categories?.[0]?.title || 'Insight'}</span>
                    <span className="w-8 h-[1px] bg-white/10" />
                    <span className="text-white/30">{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</span>
                 </div>
                 <h3 className="text-2xl font-serif leading-snug group-hover:text-brand-yellow transition-colors italic">
                    {post.title}
                 </h3>
               </Link>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
