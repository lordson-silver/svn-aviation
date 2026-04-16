import { Navbar } from '@/components/ui/navbar';
import { Footer } from '@/components/sections/footer';
import { client, isSanityConfigured } from '@/sanity/lib/client';
import { postBySlugQuery } from '@/sanity/lib/queries';
import { PortableText } from '@/components/ui/portable-text';
import { urlForImage } from '@/sanity/lib/image';
import { ChevronRight, Calendar, User, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

async function getPost(slug: string) {
  if (!isSanityConfigured) return null;

  try {
    const post = await client.fetch(postBySlugQuery, { slug });
    return post;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export const revalidate = 60;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return { title: 'Post Not Found' };

  return {
    title: `${post.title} | SVN Aviation Blog`,
    description: post.excerpt || `Read our latest article: ${post.title}`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage ? [urlForImage(post.mainImage).url()] : [],
      type: 'article',
      publishedTime: post.publishedAt,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.mainImage ? [urlForImage(post.mainImage).url()] : [],
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return (
        <div className="min-h-screen bg-black text-white flex flex-col">
            <Navbar />
            <div className="flex-1 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-serif font-black mb-4">POST NOT FOUND</h1>
                <Link href="/blog" className="text-brand-yellow font-black tracking-widest uppercase hover:underline">Back to Blog</Link>
            </div>
            <Footer />
        </div>
    );
  }

  return (
    <div className="relative min-h-screen w-full bg-black text-white flex flex-col font-sans overflow-x-hidden">
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
                <Link href="/blog" className="text-white/40 hover:text-white text-[10px] font-black tracking-widest uppercase transition-colors">Blog</Link>
                <ChevronRight className="w-3 h-3 text-brand-yellow/40" />
                <span className="text-brand-yellow text-[10px] font-black tracking-widest uppercase">Article</span>
             </div>

             <h1 className="text-4xl md:text-6xl font-black font-serif leading-[1.1] uppercase tracking-tight mb-8">
               {post.title}
             </h1>

             <div className="flex items-center justify-center gap-8 text-white/40 text-[10px] font-black tracking-[0.2em] uppercase">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-brand-yellow/60" />
                  {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-brand-yellow/60" />
                  {post.author?.name || 'SVN Team'}
                </div>
             </div>
          </div>
        </section>

        {/* ── MAIN CONTENT ─────────────────────────────────── */}
        <section className="pb-32 bg-black">
          <div className="max-w-[900px] mx-auto px-8 md:px-12">
            
            {/* Main Image */}
            {post.mainImage && (
              <div className="relative aspect-[16/9] w-full rounded-[2.5rem] overflow-hidden border border-white/10 shadow-[0_40px_80px_rgba(0,0,0,0.5)] -mt-10 mb-20 z-20">
                <Image
                  src={urlForImage(post.mainImage).url()}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            {/* Body */}
            <article className="prose- SVN-prose">
              <PortableText value={post.body} />
            </article>

            {/* Footer of article */}
            <div className="mt-24 pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
               <Link href="/blog" className="flex items-center gap-3 text-white/50 hover:text-brand-yellow transition-all text-xs font-black tracking-widest uppercase group">
                 <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                 Return to Blog
               </Link>

               <div className="flex gap-4">
                 {/* Categories */}
                 {post.categories?.map((cat: any) => (
                   <span key={cat.title} className="bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow text-[9px] font-black tracking-widest uppercase px-4 py-2 rounded-full">
                      {cat.title}
                   </span>
                 ))}
               </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
