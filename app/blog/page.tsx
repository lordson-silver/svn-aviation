import { Metadata } from 'next';
import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/sections/footer';
import { client, isSanityConfigured } from '@/sanity/lib/client';
import { postsQuery } from '@/sanity/lib/queries';
import { BlogCard } from '@/components/ui/blog-card';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'SVN Aviation Blog | Aviation Insights, Safety & Operations in Nigeria',
  description: 'Read the latest insights on private jet charter, helicopter operations, and aviation safety in Nigeria and across West Africa from the SVN Aviation team.',
};

export const revalidate = 60;

async function getPosts() {
  if (!isSanityConfigured) return [];
  
  try {
    const posts = await client.fetch(postsQuery);
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col font-sans overflow-x-hidden">
      
      {/* ── HERO ─────────────────────────────────────────── */}
      <div className="p-4 md:p-6 w-full h-[40vh] min-h-[350px] flex flex-col">
        <section className="relative flex-1 w-full overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/5 shadow-2xl">
          <Navbar />

          {/* Background image */}
          <Image
            src="https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=2000&q=80&auto=format&fit=crop"
            alt="SVN Aviation Blog Hero"
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
            <div className="flex items-center gap-2 mb-5">
              <a href="/" className="text-white/50 hover:text-white text-[11px] font-bold tracking-widest uppercase transition-colors">Home</a>
              <ChevronRight className="w-3 h-3 text-brand-yellow/60" />
              <span className="text-brand-yellow text-[11px] font-bold tracking-widest uppercase">Blog & Insights</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] font-serif uppercase tracking-tighter">
              Aviation Insights
            </h1>
          </div>
        </section>
      </div>

      {/* ── BLOG LIST ────────────────────────────────────── */}
      <section className="py-24 md:py-32 bg-black">
        <div className="max-w-[1400px] mx-auto px-8 md:px-12">
          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <BlogCard key={post.slug.current} post={post} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-20 h-20 rounded-full bg-white/5 flex items-center justify-center mb-6">
                 <Image src="/logo.svg" alt="SVN" width={40} height={40} className="opacity-20" />
              </div>
              <h2 className="text-2xl font-serif font-black mb-4 uppercase">No stories published yet</h2>
              <p className="text-white/50 max-w-sm mb-8">
                We are currently preparing some deep insights into West African aviation. Check back soon.
              </p>
              <a 
                href="/studio"
                className="text-brand-yellow text-xs font-black tracking-widest uppercase border-b border-brand-yellow/30 pb-1 hover:border-brand-yellow transition-all"
              >
                Access Sanity Studio
              </a>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
