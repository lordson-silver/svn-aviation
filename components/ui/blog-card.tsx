import Image from 'next/image';
import Link from 'next/link';
import { urlForImage } from '@/sanity/lib/image';
import { cn } from '@/lib/utils';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

export function BlogCard({ post }: { post: any }) {
  const wordCount = JSON.stringify(post.body || []).split(/\s+/).length;
  const readTime = post.body ? Math.max(1, Math.ceil(wordCount / 200)) : 5;
  return (
    <Link 
      href={`/blog/${post.slug?.current || ''}`}
      className="group flex flex-col bg-brand-dark/40 backdrop-blur-xl border border-white/5 rounded-3xl overflow-hidden hover:border-brand-yellow/30 transition-all duration-500 shadow-2xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        {post.mainImage ? (
          <Image
            src={urlForImage(post.mainImage).url()}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-700"
          />
        ) : (
          <div className="w-full h-full bg-white/5 flex items-center justify-center">
             <Image src="/logo.svg" alt="SVN" width={40} height={40} className="opacity-20" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
        
        {/* Category tag */}
        {post.categories?.[0] && (
          <div className="absolute top-4 left-4">
            <span className="bg-brand-yellow text-black text-[9px] font-black tracking-widest uppercase px-3 py-1.5 rounded-full shadow-lg">
              {post.categories[0].title}
            </span>
          </div>
        )}
      </div>

      <div className="p-8 flex flex-col flex-1 gap-4">
        <div className="flex items-center flex-wrap gap-3 md:gap-4 text-white/40 text-[10px] font-bold tracking-widest uppercase">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3 text-brand-yellow/60" />
            {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
          </div>
          <div className="flex items-center gap-1.5">
            <User className="w-3 h-3 text-brand-yellow/60" />
            {post.author?.name || 'SVN Team'}
          </div>
          <div className="flex items-center gap-1 px-2 py-0.5 bg-brand-yellow/10 border border-brand-yellow/20 text-brand-yellow rounded-full">
            <Clock className="w-2.5 h-2.5 opacity-60" />
            {readTime} MIN READ
          </div>
        </div>

        <h3 className="text-xl md:text-2xl font-serif font-black leading-tight text-white group-hover:text-brand-yellow transition-colors">
          {post.title}
        </h3>

        <p className="text-white/50 text-sm leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-black tracking-widest uppercase text-brand-yellow group-hover:gap-2 transition-all">
          <span>Read Article</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
