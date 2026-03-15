import { PortableText as SanityPortableText } from '@portabletext/react';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';

const components = {
  types: {
    image: ({ value }: any) => {
      return (
        <div className="relative w-full aspect-[16/9] my-10 overflow-hidden rounded-3xl border border-white/10">
          <Image
            src={urlForImage(value).url()}
            alt="Blog image"
            fill
            className="object-cover"
          />
        </div>
      );
    },
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-4xl md:text-5xl font-black font-serif my-8 text-white uppercase tracking-tight">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-3xl md:text-4xl font-black font-serif my-7 text-white uppercase tracking-tight">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-2xl md:text-3xl font-black font-serif my-6 text-white uppercase tracking-tight">{children}</h3>,
    normal: ({ children }: any) => <p className="text-white/70 text-base md:text-lg leading-relaxed my-6">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-brand-yellow bg-brand-yellow/5 px-8 py-6 my-10 rounded-r-2xl italic text-xl text-white/90">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc list-inside my-6 flex flex-col gap-3 text-white/70">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal list-inside my-6 flex flex-col gap-3 text-white/70">{children}</ol>,
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-black text-white">{children}</strong>,
    link: ({ children, value }: any) => (
      <a href={value.href} className="text-brand-yellow hover:underline transition-all">
        {children}
      </a>
    ),
  },
};

export function PortableText({ value }: { value: any }) {
  return <SanityPortableText value={value} components={components} />;
}
